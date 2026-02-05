#!/usr/bin/env node
/**
 * Scrape Yelp reviews using Schematron (Inference.net)
 * Super cheap: $0.02/1M tokens
 */

const https = require('https');
const { execSync } = require('child_process');

const INFERENCE_API_KEY = process.env.INFERENCE_API_KEY || 'inference-093bd24c3abd45ed957a2d68194a593c';

// Test restaurants - we'll find their Yelp URLs
const restaurants = [
  {
    slug: 'j-selbys',
    name: "J. Selby's",
    searchQuery: "j selby's saint paul vegan"
  },
  {
    slug: 'reverie-cafe-bar',
    name: 'Reverie Cafe + Bar',
    searchQuery: "reverie cafe bar minneapolis vegan"
  },
  {
    slug: 'lulu-ethiovegan',
    name: 'Lulu EthioVegan',
    searchQuery: "lulu ethiovegan minneapolis"
  }
];

// Find Yelp URL for restaurant
async function findYelpUrl(searchQuery) {
  try {
    const searchUrl = `https://www.yelp.com/search?find_desc=${encodeURIComponent(searchQuery)}`;
    console.log(`    Searching Yelp: ${searchQuery}`);
    
    const html = execSync(`curl -s -A "Mozilla/5.0" "${searchUrl}"`, {
      encoding: 'utf8',
      timeout: 30000
    });
    
    // Extract first business link
    const match = html.match(/href="(\/biz\/[^"]+)"/);
    if (match) {
      const yelpUrl = `https://www.yelp.com${match[1]}`;
      console.log(`    ✓ Found: ${yelpUrl}`);
      return yelpUrl;
    }
    
    console.log(`    ✗ Not found on Yelp`);
    return null;
  } catch (e) {
    console.error(`    ✗ Search failed: ${e.message}`);
    return null;
  }
}

// Scrape reviews using Schematron
async function scrapeReviewsWithSchematron(yelpUrl) {
  console.log(`    Fetching page HTML...`);
  
  // Get HTML
  let html;
  try {
    html = execSync(`curl -s -A "Mozilla/5.0" "${yelpUrl}"`, {
      encoding: 'utf8',
      timeout: 30000,
      maxBuffer: 10 * 1024 * 1024
    });
  } catch (e) {
    throw new Error(`HTML fetch failed: ${e.message}`);
  }
  
  console.log(`    Using Schematron to extract reviews...`);
  
  // Define schema for review extraction
  const schema = {
    reviews: [{
      author: "string",
      rating: "number",
      date: "string", 
      text: "string"
    }],
    aggregateRating: "number",
    totalReviews: "number"
  };
  
  // Call Inference.net API
  const payload = {
    html: html,
    schema: schema,
    model: "gpt-4o-mini" // Cheapest model
  };
  
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(payload);
    const options = {
      hostname: 'api.inference.net',
      path: '/v1/extract',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${INFERENCE_API_KEY}`,
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    };
    
    const req = https.request(options, (res) => {
      let response = '';
      res.on('data', chunk => response += chunk);
      res.on('end', () => {
        try {
          const result = JSON.parse(response);
          if (result.error) {
            reject(new Error(result.error));
          } else {
            resolve(result.data);
          }
        } catch (e) {
          reject(new Error(`Parse failed: ${e.message}`));
        }
      });
    });
    
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

// Main extraction
async function extractReviews(restaurant) {
  console.log(`\n📍 ${restaurant.name}`);
  console.log('─'.repeat(60));
  
  try {
    // Find Yelp URL
    const yelpUrl = await findYelpUrl(restaurant.searchQuery);
    if (!yelpUrl) {
      throw new Error('Yelp URL not found');
    }
    
    // Scrape with Schematron
    const reviewData = await scrapeReviewsWithSchematron(yelpUrl);
    
    console.log(`    ✅ Extracted ${reviewData.reviews?.length || 0} reviews`);
    console.log(`    ⭐ ${reviewData.aggregateRating}/5 (${reviewData.totalReviews} total)`);
    
    return {
      slug: restaurant.slug,
      yelpUrl,
      ...reviewData
    };
  } catch (e) {
    console.error(`    ❌ Failed: ${e.message}`);
    return null;
  }
}

// Run
async function main() {
  console.log('🚀 Scraping Yelp reviews with Schematron');
  console.log(`💰 Cost: ~$0.02 per 1M tokens (super cheap!)\n`);
  
  const results = [];
  
  for (const restaurant of restaurants) {
    const result = await extractReviews(restaurant);
    results.push(result);
    
    // Delay between requests
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  const successful = results.filter(r => r !== null).length;
  console.log(`\n${'='.repeat(60)}`);
  console.log(`✅ Complete: ${successful}/${restaurants.length} scraped`);
  
  // Show sample
  if (results[0]?.reviews?.length > 0) {
    console.log(`\nSample review from ${results[0].slug}:`);
    console.log(`"${results[0].reviews[0].text.substring(0, 150)}..."`);
  }
}

main().catch(console.error);
