#!/usr/bin/env node
/**
 * Scrape Google Maps reviews using Apify
 * Usage: node apify-scrape-reviews-fixed.js "Restaurant Name" "slug"
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Read command line arguments
const restaurantName = process.argv[2];
const restaurantSlug = process.argv[3];

if (!restaurantName || !restaurantSlug) {
  console.error('❌ Usage: node apify-scrape-reviews-fixed.js "Restaurant Name" "slug"');
  process.exit(1);
}

const APIFY_API_KEY = process.env.APIFY_API_KEY;

if (!APIFY_API_KEY) {
  console.error('❌ APIFY_API_KEY environment variable not set');
  process.exit(1);
}

// Load restaurants data to get Google Place ID
const restaurantsPath = path.join(__dirname, '../src/data/restaurants.ts');
const restaurantsData = fs.readFileSync(restaurantsPath, 'utf8');

// Extract Google Place ID for this slug (simple regex matching)
const placeIdMatch = restaurantsData.match(new RegExp(`slug:\\s*'${restaurantSlug}'[\\s\\S]*?googlePlaceId:\\s*'([^']+)'`));

if (!placeIdMatch) {
  console.error(`❌ Could not find googlePlaceId for slug: ${restaurantSlug}`);
  process.exit(1);
}

const googlePlaceId = placeIdMatch[1];
const placeUrl = `https://www.google.com/maps/place/?q=place_id:${googlePlaceId}`;

console.log(`\n📍 ${restaurantName} (${restaurantSlug})`);
console.log(`🆔 Place ID: ${googlePlaceId}`);
console.log('─'.repeat(60));

// Start Apify scraper
async function startScraper(placeUrl) {
  const payload = JSON.stringify({
    searchStringsArray: [placeUrl],
    maxReviews: 100,
    reviewsSort: 'newest',
    language: 'en'
  });
  
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.apify.com',
      path: `/v2/acts/compass~google-maps-reviews-scraper/runs?token=${APIFY_API_KEY}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': payload.length
      }
    };
    
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          resolve(result.data);
        } catch (e) {
          reject(e);
        }
      });
    });
    
    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

function checkStatus(runId) {
  return new Promise((resolve, reject) => {
    https.get(`https://api.apify.com/v2/actor-runs/${runId}?token=${APIFY_API_KEY}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data).data);
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function getResults(runId) {
  return new Promise((resolve, reject) => {
    https.get(`https://api.apify.com/v2/actor-runs/${runId}/dataset/items?token=${APIFY_API_KEY}`, (res) => {
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

async function waitForResults(runId) {
  console.log(`⏳ Waiting for scraper (Run ID: ${runId})...`);
  
  let attempts = 0;
  while (attempts < 30) {
    await new Promise(resolve => setTimeout(resolve, 10000));
    
    const status = await checkStatus(runId);
    console.log(`   Status: ${status.status}`);
    
    if (status.status === 'SUCCEEDED') {
      return getResults(runId);
    } else if (status.status === 'FAILED') {
      throw new Error('Scraper failed');
    }
    
    attempts++;
  }
  
  throw new Error('Timeout waiting for results');
}

async function main() {
  try {
    console.log(`🚀 Starting Apify scraper...`);
    const run = await startScraper(placeUrl);
    
    const results = await waitForResults(run.id);
    
    // Handle both array and object responses
    let reviews = [];
    if (Array.isArray(results)) {
      reviews = results.filter(r => r && r.text);
    } else if (results && results.items && Array.isArray(results.items)) {
      reviews = results.items.filter(r => r && r.text);
    } else if (results && results.reviews && Array.isArray(results.reviews)) {
      reviews = results.reviews.filter(r => r && r.text);
    } else {
      console.error(`❌ Unexpected results format:`, typeof results);
      console.error(JSON.stringify(results).substring(0, 200));
      process.exit(1);
    }
    
    console.log(`✅ Extracted ${reviews.length} reviews`);
    
    if (reviews.length > 0) {
      // Save to temp file for processing
      const outputPath = `/tmp/${restaurantSlug}-apify-reviews.json`;
      fs.writeFileSync(outputPath, JSON.stringify({
        slug: restaurantSlug,
        name: restaurantName,
        reviewCount: reviews.length,
        reviews: reviews,
        scrapedAt: new Date().toISOString()
      }, null, 2));
      
      console.log(`💾 Saved to ${outputPath}`);
      console.log(`📝 Sample: "${reviews[0].text.substring(0, 80)}..."`);
    } else {
      console.error(`❌ No reviews found in results`);
      process.exit(1);
    }
    
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    console.error(error.stack);
    process.exit(1);
  }
}

main();
