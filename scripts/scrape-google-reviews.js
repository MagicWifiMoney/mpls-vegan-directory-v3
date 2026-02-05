#!/usr/bin/env node
/**
 * Scrape Google Business Profile reviews using Schematron
 * Gets 50-100+ reviews vs API's 5
 */

const https = require('https');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const INFERENCE_API_KEY = 'inference-093bd24c3abd45ed957a2d68194a593c';

const restaurants = [
  {
    slug: 'j-selbys',
    name: "J. Selby's",
    googlePlaceId: 'ChIJiUzxP4gq9ocRvFPpu-wAMFU'
  },
  {
    slug: 'reverie-cafe-bar',
    name: 'Reverie Cafe + Bar',
    googlePlaceId: 'ChIJXaSgL7gys1IR2XJTlKVwMjo'
  },
  {
    slug: 'lulu-ethiovegan',
    name: 'Lulu EthioVegan',
    googlePlaceId: 'ChIJb4l2YYgzs1IRvErf9UUeNdI'
  }
];

// Scrape Google Maps page
async function scrapeGoogleReviews(placeId) {
  const googleUrl = `https://www.google.com/maps/place/?q=place_id:${placeId}`;
  
  console.log(`    Fetching Google Maps page...`);
  
  let html;
  try {
    html = execSync(`curl -s -L -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" "${googleUrl}"`, {
      encoding: 'utf8',
      timeout: 30000,
      maxBuffer: 10 * 1024 * 1024
    });
  } catch (e) {
    throw new Error(`Failed to fetch: ${e.message}`);
  }
  
  console.log(`    Page size: ${(html.length / 1024).toFixed(1)}KB`);
  console.log(`    Extracting with Schematron...`);
  
  // Schema for Google reviews
  const schema = {
    reviews: [{
      author: "string",
      rating: "number (1-5)",
      date: "string",
      text: "string"
    }]
  };
  
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      html: html.substring(0, 500000), // Limit to 500KB for faster processing
      schema: schema,
      model: "gpt-4o-mini"
    });
    
    const options = {
      hostname: 'api.inference.net',
      path: '/v1/extract',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${INFERENCE_API_KEY}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
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
    req.write(payload);
    req.end();
  });
}

// Main
async function extractRestaurant(restaurant) {
  console.log(`\n📍 ${restaurant.name}`);
  console.log('─'.repeat(60));
  
  try {
    const reviewData = await scrapeGoogleReviews(restaurant.googlePlaceId);
    
    const reviewCount = reviewData.reviews?.length || 0;
    console.log(`    ✅ Extracted ${reviewCount} reviews`);
    
    if (reviewCount > 0) {
      console.log(`    📝 Sample: "${reviewData.reviews[0].text.substring(0, 80)}..."`);
    }
    
    return {
      slug: restaurant.slug,
      reviewCount,
      reviews: reviewData.reviews
    };
  } catch (e) {
    console.error(`    ❌ Failed: ${e.message}`);
    return null;
  }
}

async function main() {
  console.log('🚀 Scraping Google Business Profile reviews');
  console.log('💰 Using Schematron ($0.02/1M tokens)\n');
  
  const results = [];
  
  for (const restaurant of restaurants) {
    const result = await extractRestaurant(restaurant);
    results.push(result);
    
    // Save to file
    if (result && result.reviews) {
      const outputPath = path.join(__dirname, '../enriched-data', `${result.slug}-google-reviews.json`);
      fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
      console.log(`    💾 Saved to ${result.slug}-google-reviews.json`);
    }
    
    await new Promise(resolve => setTimeout(resolve, 3000));
  }
  
  const successful = results.filter(r => r !== null && r.reviewCount > 0).length;
  const totalReviews = results.reduce((sum, r) => sum + (r?.reviewCount || 0), 0);
  
  console.log(`\n${'='.repeat(60)}`);
  console.log(`✅ Complete: ${successful}/${restaurants.length} restaurants`);
  console.log(`📊 Total reviews extracted: ${totalReviews}`);
  console.log(`\n💡 Now re-run extraction script with this richer data!`);
}

main().catch(console.error);
