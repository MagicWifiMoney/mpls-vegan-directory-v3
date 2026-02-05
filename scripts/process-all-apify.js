#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const restaurants = [
  {
    slug: 'herbivorous-butcher',
    name: 'The Herbivorous Butcher',
    runIdFile: '/tmp/herbivorous-run-id.txt'
  },
  {
    slug: 'reverie-cafe-bar',
    name: 'Reverie Cafe + Bar',
    runIdFile: '/tmp/reverie-run-id.txt'
  },
  {
    slug: 'lulu-ethiovegan',
    name: 'Lulu EthioVegan',
    runIdFile: '/tmp/lulu-run-id.txt'
  }
];

async function processRestaurant(restaurant) {
  console.log(`\n📍 ${restaurant.name}`);
  console.log('─'.repeat(60));
  
  const runId = fs.readFileSync(restaurant.runIdFile, 'utf8').trim();
  console.log(`  Run ID: ${runId}`);
  
  // Fetch reviews
  const reviews = JSON.parse(
    execSync(`curl -s "https://api.apify.com/v2/actor-runs/${runId}/dataset/items?token=\${APIFY_API_KEY}"`)
  );
  
  console.log(`  ✅ Got ${reviews.length} reviews`);
  
  // Load existing data
  const dataPath = path.join(__dirname, '../enriched-data', `${restaurant.slug}-REAL-DATA.json`);
  const existingData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  
  // Process products
  const updatedProducts = existingData.topProducts.map(product => {
    const dishName = product.name.toLowerCase();
    const relevantReviews = reviews.filter(r => 
      r.text && r.text.toLowerCase().includes(dishName)
    );
    
    const quotes = relevantReviews
      .map(r => {
        const sentences = r.text.split(/[.!?]+/);
        const relevantSentence = sentences.find(s => s.toLowerCase().includes(dishName));
        return relevantSentence ? relevantSentence.trim() : r.text.substring(0, 150);
      })
      .filter(q => q.length > 20)
      .slice(0, 3);
    
    let badge = null;
    if (relevantReviews.length >= 4) badge = 'Top Pick';
    else if (relevantReviews.length >= 2) badge = 'Popular';
    else if (relevantReviews.length >= 1) badge = 'Featured';
    
    return {
      ...product,
      reviewMentions: relevantReviews.length,
      badge,
      quotes
    };
  });
  
  // Select SEO reviews
  const seoReviews = reviews
    .filter(r => r.text && r.text.length > 100 && r.stars >= 4)
    .map(r => {
      let score = 0;
      const text = r.text.toLowerCase();
      
      if (text.includes('wing') || text.includes('burger') || text.includes('taco') || 
          text.includes('sandwich') || text.includes('ribs') || text.includes('cheese')) score += 3;
      if (text.includes('minneapolis') || text.includes('twin cities') || text.includes('st paul')) score += 2;
      if (text.includes('vegan') || text.includes('plant-based') || text.includes('delicious')) score += 1;
      if (r.text.length > 200) score += 2;
      if (r.text.length > 300) score += 3;
      
      return { ...r, seoScore: score };
    })
    .sort((a, b) => b.seoScore - a.seoScore)
    .slice(0, 10)
    .map(r => ({
      author: r.name,
      rating: r.stars,
      text: r.text,
      date: r.publishAt
    }));
  
  const updatedData = {
    ...existingData,
    topProducts: updatedProducts,
    highlightedReviews: seoReviews,
    dataQuality: "REAL - From 100 Apify-scraped Google reviews",
    lastUpdated: new Date().toISOString()
  };
  
  fs.writeFileSync(dataPath, JSON.stringify(updatedData, null, 2));
  
  const topPicks = updatedProducts.filter(p => p.badge === 'Top Pick').length;
  const popular = updatedProducts.filter(p => p.badge === 'Popular').length;
  console.log(`  ⭐ Top Picks: ${topPicks}, 🔥 Popular: ${popular}`);
  console.log(`  📝 SEO Reviews: ${seoReviews.length}`);
}

async function main() {
  console.log('🚀 Processing Apify reviews for 3 restaurants\n');
  
  for (const restaurant of restaurants) {
    await processRestaurant(restaurant);
  }
  
  console.log(`\n${'='.repeat(60)}`);
  console.log('✅ All restaurants processed!');
}

main().catch(console.error);
