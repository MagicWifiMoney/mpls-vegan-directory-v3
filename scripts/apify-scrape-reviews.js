#!/usr/bin/env node
/**
 * Scrape Google Maps reviews using Apify
 * Gets 100+ reviews per restaurant vs API's 5
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const APIFY_API_KEY = '${process.env.APIFY_API_KEY}';

const testRestaurants = [
  {
    slug: 'j-selbys',
    name: "J. Selby's",
    googlePlaceId: 'ChIJiUzxP4gq9ocRvFPpu-wAMFU',
    url: 'https://www.google.com/maps/place/?q=place_id:ChIJiUzxP4gq9ocRvFPpu-wAMFU'
  }
];

// Start Apify scraper
async function startScraper(placeUrl) {
  const payload = JSON.stringify({
    searchStringsArray: [placeUrl],
    maxReviews: 100, // Get up to 100 reviews
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

// Wait for scraper to finish
async function waitForResults(runId) {
  console.log(`    Waiting for scraper to finish...`);
  
  let attempts = 0;
  while (attempts < 30) { // Max 5 minutes
    await new Promise(resolve => setTimeout(resolve, 10000)); // Wait 10s
    
    const status = await checkStatus(runId);
    console.log(`    Status: ${status.status}`);
    
    if (status.status === 'SUCCEEDED') {
      return getResults(runId);
    } else if (status.status === 'FAILED') {
      throw new Error('Scraper failed');
    }
    
    attempts++;
  }
  
  throw new Error('Timeout waiting for results');
}

function checkStatus(runId) {
  return new Promise((resolve, reject) => {
    https.get(`https://api.apify.com/v2/acts/compass~google-maps-reviews-scraper/runs/${runId}?token=${APIFY_API_KEY}`, (res) => {
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
    https.get(`https://api.apify.com/v2/acts/compass~google-maps-reviews-scraper/runs/${runId}/dataset/items?token=${APIFY_API_KEY}`, (res) => {
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

// Main
async function scrapeRestaurant(restaurant) {
  console.log(`\n📍 ${restaurant.name}`);
  console.log('─'.repeat(60));
  
  try {
    console.log(`    Starting Apify scraper...`);
    const run = await startScraper(restaurant.url);
    
    console.log(`    Run ID: ${run.id}`);
    const results = await waitForResults(run.id);
    
    const reviews = results.filter(r => r.text); // Only reviews with text
    console.log(`    ✅ Extracted ${reviews.length} reviews`);
    
    if (reviews.length > 0) {
      console.log(`    📝 Sample: "${reviews[0].text.substring(0, 80)}..."`);
      
      // Save to file
      const outputPath = path.join(__dirname, '../enriched-data', `${restaurant.slug}-apify-reviews.json`);
      fs.writeFileSync(outputPath, JSON.stringify({
        slug: restaurant.slug,
        reviewCount: reviews.length,
        reviews: reviews,
        scrapedAt: new Date().toISOString()
      }, null, 2));
      
      console.log(`    💾 Saved to ${restaurant.slug}-apify-reviews.json`);
    }
    
    return reviews;
  } catch (e) {
    console.error(`    ❌ Failed: ${e.message}`);
    return null;
  }
}

async function main() {
  console.log('🚀 Scraping Google Maps reviews with Apify');
  console.log('💰 Cost: ~$0.05-0.15 per restaurant\n');
  
  for (const restaurant of testRestaurants) {
    await scrapeRestaurant(restaurant);
  }
  
  console.log(`\n${'='.repeat(60)}`);
  console.log('✅ Test complete!');
  console.log('\nIf successful, run for all restaurants.');
}

main().catch(console.error);
