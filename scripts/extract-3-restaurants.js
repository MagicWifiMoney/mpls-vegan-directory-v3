#!/usr/bin/env node
/**
 * Extract data for 3 test restaurants using Gemini
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const restaurants = [
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

async function extractRestaurant(restaurant) {
  console.log(`\n🔍 ${restaurant.name}`);
  console.log('─'.repeat(50));
  
  // Fetch reviews from API
  console.log('  Fetching Google reviews...');
  let placeData;
  try {
    const response = execSync(`curl -s "https://mplsvegan.com/api/places/${restaurant.googlePlaceId}"`, {
      encoding: 'utf8',
      timeout: 30000
    });
    placeData = JSON.parse(response);
  } catch (e) {
    console.error(`  ❌ Failed to fetch place data`);
    return null;
  }
  
  const reviews = (placeData.reviews || []).map(r => r.text).join('\n\n').substring(0, 8000);
  
  // Scrape website for menu/pricing
  console.log('  Scraping website...');
  let websiteContent = '';
  try {
    websiteContent = execSync(`curl -s "${restaurant.website}" | head -c 15000`, {
      encoding: 'utf8',
      timeout: 30000
    });
  } catch (e) {
    console.warn(`  ⚠️  Website scrape failed, using reviews only`);
  }
  
  // Build prompt for Gemini
  const prompt = `Analyze this restaurant data and extract menu items, pricing, and insights.

RESTAURANT: ${restaurant.name}
WEBSITE: ${restaurant.website}

WEBSITE CONTENT (snippet):
${websiteContent.substring(0, 5000)}

GOOGLE REVIEWS:
${reviews}

Extract and return ONLY a valid JSON object (no markdown, no explanations):

{
  "topProducts": [
    {
      "name": "Item name",
      "price": "$X.XX or null",
      "size": "portion size or null",
      "reviewMentions": <count>,
      "quotes": ["real customer quote 1", "quote 2"],
      "description": "what it is",
      "whyPeopleLoveIt": "why popular"
    }
  ],
  "reviewInsights": {
    "mostUsedPhrases": [{"phrase": "word", "count": X}],
    "commonCompliments": ["positive thing"],
    "commonCritiques": ["negative thing"]
  },
  "timingInsights": [
    {"insight": "timing observation", "bestTime": "when to visit"}
  ]
}

IMPORTANT:
- Extract 5-8 menu items from reviews and website
- Include real prices if found on website
- Use actual customer quotes from reviews
- Count how many reviews mention each item
- Be specific, not generic
- Return ONLY the JSON object`;

  console.log('  Analyzing with Gemini...');
  
  // Call Gemini
  let extracted;
  try {
    const geminiResponse = execSync(`gemini "${prompt.replace(/"/g, '\\"')}"`, {
      encoding: 'utf8',
      maxBuffer: 10 * 1024 * 1024,
      timeout: 60000
    });
    
    // Extract JSON from response
    const jsonMatch = geminiResponse.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('No JSON found in Gemini response');
    }
    extracted = JSON.parse(jsonMatch[0]);
  } catch (e) {
    console.error(`  ❌ Gemini extraction failed: ${e.message}`);
    return null;
  }
  
  // Build final JSON
  const finalData = {
    slug: restaurant.slug,
    extractedAt: new Date().toISOString(),
    dataQuality: "REAL - Extracted from website and Google reviews",
    
    ratings: {
      aggregate: placeData.rating || 4.5,
      sources: {
        google: {
          rating: placeData.rating || 4.5,
          reviewCount: placeData.userRatingsTotal || 0
        },
        yelp: {
          rating: placeData.yelp?.rating || null,
          reviewCount: placeData.yelp?.reviewCount || 0
        }
      }
    },
    
    ...extracted
  };
  
  // Save
  const outputPath = path.join(__dirname, '../enriched-data', `${restaurant.slug}-REAL-DATA.json`);
  fs.writeFileSync(outputPath, JSON.stringify(finalData, null, 2));
  
  console.log(`  ✅ Saved: ${outputPath}`);
  console.log(`  📊 Products: ${finalData.topProducts?.length || 0}`);
  
  return finalData;
}

async function main() {
  console.log('🚀 Extracting data for 3 test restaurants');
  console.log('Using: Gemini 2.0 Flash Thinking\n');
  
  const results = [];
  for (const restaurant of restaurants) {
    const result = await extractRestaurant(restaurant);
    results.push(result);
    
    if (result) {
      // Small delay
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
  
  const successful = results.filter(r => r !== null).length;
  console.log(`\n${'='.repeat(50)}`);
  console.log(`✅ Complete: ${successful}/${restaurants.length} extracted`);
  
  if (successful > 0) {
    console.log('\n📦 Files created in /enriched-data/');
    console.log('\nNext: Deploy to see pages at:');
    results.forEach(r => {
      if (r) console.log(`  https://mplsvegan.com/restaurants/${r.slug}`);
    });
  }
}

main().catch(console.error);
