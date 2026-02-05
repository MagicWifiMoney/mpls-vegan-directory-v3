#!/usr/bin/env node
/**
 * Enhanced Restaurant Data Extraction
 * Extracts pricing, menu items, reviews, and insights using Sonnet + web scraping
 */

const https = require('https');
const http = require('http');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Restaurant configuration
const RESTAURANTS_TO_EXTRACT = [
  {
    slug: 'j-selbys',
    name: "J. Selby's",
    website: 'https://www.jselbys.com/',
    googlePlaceId: 'ChIJiUzxP4gq9ocRvFPpu-wAMFU'
  },
  {
    slug: 'reverie-cafe-bar',
    name: 'Reverie Cafe + Bar',
    website: 'https://www.reveriempls.com/',
    googlePlaceId: 'ChIJXaSgL7gys1IR2XJTlKVwMjo'
  },
  {
    slug: 'lulu-ethiovegan',
    name: 'Lulu EthioVegan',
    website: 'https://www.luluethiovegan.com/',
    googlePlaceId: 'ChIJb4l2YYgzs1IRvErf9UUeNdI'
  }
];

// Fetch place details from our API
function fetchPlaceDetails(placeId) {
  return new Promise((resolve, reject) => {
    const url = `https://mplsvegan.com/api/places/${placeId}`;
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

// Scrape website content
function scrapeWebsite(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    protocol.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

// Use Claude Sonnet to extract structured data
async function extractWithSonnet(restaurant, websiteHTML, placeDetails) {
  const reviews = placeDetails.reviews || [];
  const reviewText = reviews.map(r => r.text).join('\n\n');
  
  const prompt = `Extract menu data for ${restaurant.name} from this content:

WEBSITE HTML (first 10k chars):
${websiteHTML.substring(0, 10000)}

GOOGLE REVIEWS:
${reviewText.substring(0, 5000)}

Extract and return a JSON object with:
{
  "topProducts": [
    {
      "name": "Product Name",
      "price": "$X.XX" (if found, else null),
      "size": "Xoz" (if found, else null),
      "reviewMentions": <count of how many reviews mention this>,
      "quotes": ["customer quote 1", "customer quote 2"],
      "description": "What it is",
      "whyPeopleLoveIt": "Why it's popular"
    }
  ],
  "reviewInsights": {
    "mostUsedPhrases": [{"phrase": "amazing", "count": 10}],
    "commonCompliments": ["great service", "tasty food"],
    "commonCritiques": ["can be pricey"]
  },
  "timingInsights": [
    {
      "insight": "Weekends get busy",
      "bestTime": "Weekday lunch"
    }
  ]
}

Rules:
- Extract 5-8 top menu items
- Include real prices when visible on website
- Pull actual customer quotes from reviews
- Count review mentions accurately
- Focus on items that appear in multiple reviews
- Be specific, not generic

Return ONLY valid JSON, no markdown or explanations.`;

  try {
    // Use Sonnet via OpenRouter API
    const result = execSync(
      `curl -s https://openrouter.ai/api/v1/chat/completions \\
        -H "Authorization: Bearer ${process.env.OPENROUTER_API_KEY}" \\
        -H "Content-Type: application/json" \\
        -d '${JSON.stringify({
          model: "anthropic/claude-3.5-sonnet",
          messages: [{role: "user", content: prompt}]
        }).replace(/'/g, "'\\''")}'`,
      { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 }
    );
    
    const response = JSON.parse(result);
    const content = response.choices[0].message.content;
    
    // Extract JSON from response
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    throw new Error('No JSON found in response');
  } catch (err) {
    console.error(`Sonnet extraction failed: ${err.message}`);
    return null;
  }
}

// Main extraction function
async function extractRestaurantData(restaurant) {
  console.log(`\n📍 Extracting data for ${restaurant.name}...`);
  
  try {
    // 1. Fetch Google Place details
    console.log('  ↓ Fetching Google reviews...');
    const placeDetails = await fetchPlaceDetails(restaurant.googlePlaceId);
    
    // 2. Scrape website
    console.log('  ↓ Scraping website...');
    const websiteHTML = await scrapeWebsite(restaurant.website);
    
    // 3. Extract with Sonnet
    console.log('  ↓ Analyzing with Sonnet...');
    const extracted = await extractWithSonnet(restaurant, websiteHTML, placeDetails);
    
    if (!extracted) {
      throw new Error('Extraction failed');
    }
    
    // 4. Build final JSON structure
    const finalData = {
      slug: restaurant.slug,
      extractedAt: new Date().toISOString(),
      dataQuality: "REAL - Extracted from website and reviews",
      
      ratings: {
        aggregate: placeDetails.rating || 4.5,
        sources: {
          google: {
            rating: placeDetails.rating || 4.5,
            reviewCount: placeDetails.userRatingsTotal || 0
          },
          yelp: {
            rating: placeDetails.yelp?.rating || null,
            reviewCount: placeDetails.yelp?.reviewCount || 0
          }
        }
      },
      
      ...extracted
    };
    
    // 5. Save to file
    const outputPath = path.join(__dirname, '../enriched-data', `${restaurant.slug}-REAL-DATA.json`);
    fs.writeFileSync(outputPath, JSON.stringify(finalData, null, 2));
    
    console.log(`  ✅ Saved to ${restaurant.slug}-REAL-DATA.json`);
    console.log(`  📊 Extracted ${finalData.topProducts?.length || 0} products`);
    
    return finalData;
  } catch (err) {
    console.error(`  ❌ Failed: ${err.message}`);
    return null;
  }
}

// Run extraction
async function main() {
  console.log('🚀 Starting enhanced data extraction for 3 test restaurants\n');
  console.log('Using: Claude Sonnet via OpenRouter\n');
  
  const results = [];
  
  for (const restaurant of RESTAURANTS_TO_EXTRACT) {
    const result = await extractRestaurantData(restaurant);
    results.push(result);
    
    // Small delay between restaurants
    await new Promise(resolve => setTimeout(resolve, 3000));
  }
  
  const successful = results.filter(r => r !== null).length;
  
  console.log(`\n✅ Extraction complete: ${successful}/${RESTAURANTS_TO_EXTRACT.length} successful`);
  console.log('\nNext: Deploy to see pages live at:');
  results.forEach(r => {
    if (r) console.log(`  - https://mplsvegan.com/restaurants/${r.slug}`);
  });
}

main().catch(console.error);
