#!/usr/bin/env node
/**
 * Process Apify reviews:
 * 1. Extract real quotes for each menu item
 * 2. Select 10 SEO-rich reviews for highlights
 * 3. Assign popularity badges (Top Pick / Popular / Featured)
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const APIFY_RUN_ID = 'dJO0vU6V7YZhK8O3J';
const RESTAURANT_SLUG = 'j-selbys';

// Fetch reviews from Apify
console.log('📥 Fetching 100 reviews from Apify...');
const reviews = JSON.parse(
  execSync(`curl -s "https://api.apify.com/v2/actor-runs/${APIFY_RUN_ID}/dataset/items?token=${process.env.APIFY_API_KEY}"`)
);

console.log(`✅ Got ${reviews.length} reviews\n`);

// Load existing data
const dataPath = path.join(__dirname, '../enriched-data', `${RESTAURANT_SLUG}-REAL-DATA.json`);
const existingData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

console.log('🔍 Analyzing menu items...\n');

// Process each menu item
const updatedProducts = existingData.topProducts.map(product => {
  const dishName = product.name.toLowerCase();
  
  // Find reviews that mention this dish
  const relevantReviews = reviews.filter(r => 
    r.text && r.text.toLowerCase().includes(dishName)
  );
  
  // Extract quotes
  const quotes = relevantReviews
    .map(r => {
      // Find sentence(s) mentioning the dish
      const sentences = r.text.split(/[.!?]+/);
      const relevantSentence = sentences.find(s => 
        s.toLowerCase().includes(dishName)
      );
      return relevantSentence ? relevantSentence.trim() : r.text.substring(0, 150);
    })
    .filter(q => q.length > 20)
    .slice(0, 3); // Top 3 quotes
  
  // Assign badge based on mentions
  let badge = null;
  if (relevantReviews.length >= 4) {
    badge = 'Top Pick';
  } else if (relevantReviews.length >= 2) {
    badge = 'Popular';
  } else if (relevantReviews.length >= 1) {
    badge = 'Featured';
  }
  
  console.log(`${product.name}:`);
  console.log(`  Mentions: ${relevantReviews.length}`);
  console.log(`  Badge: ${badge || 'None'}`);
  console.log(`  Quotes: ${quotes.length}`);
  console.log('');
  
  return {
    ...product,
    reviewMentions: relevantReviews.length, // Keep raw count for internal use
    badge: badge,
    quotes: quotes
  };
});

// Select 10 SEO-rich reviews
console.log('🎯 Selecting 10 SEO-rich reviews...\n');

const seoReviews = reviews
  // Filter for detailed reviews
  .filter(r => r.text && r.text.length > 100 && r.stars >= 4)
  // Score by SEO value
  .map(r => {
    let score = 0;
    
    // Mentions specific dishes (+3 points each)
    const dishKeywords = ['wings', 'burger', 'cake', 'sandwich', 'wrap', 'frostbite'];
    dishKeywords.forEach(dish => {
      if (r.text.toLowerCase().includes(dish)) score += 3;
    });
    
    // Location keywords (+2 points)
    const locationKeywords = ['saint paul', 'st paul', 'cathedral hill', 'twin cities', 'minneapolis'];
    locationKeywords.forEach(loc => {
      if (r.text.toLowerCase().includes(loc)) score += 2;
    });
    
    // Experience keywords (+1 point)
    const expKeywords = ['vegan', 'plant-based', 'delicious', 'amazing', 'recommend', 'best', 'favorite'];
    expKeywords.forEach(exp => {
      if (r.text.toLowerCase().includes(exp)) score += 1;
    });
    
    // Length bonus (longer = more detail)
    if (r.text.length > 200) score += 2;
    if (r.text.length > 300) score += 3;
    
    return { ...r, seoScore: score };
  })
  // Sort by SEO score
  .sort((a, b) => b.seoScore - a.seoScore)
  // Take top 10
  .slice(0, 10)
  .map(r => ({
    author: r.name,
    rating: r.stars,
    text: r.text,
    date: r.publishAt,
    seoScore: r.seoScore
  }));

console.log('Top 10 SEO reviews:');
seoReviews.forEach((r, i) => {
  console.log(`  ${i+1}. ${r.author} (${r.rating}⭐, SEO: ${r.seoScore})`);
  console.log(`     "${r.text.substring(0, 80)}..."\n`);
});

// Update data structure
const updatedData = {
  ...existingData,
  topProducts: updatedProducts,
  highlightedReviews: seoReviews,
  dataQuality: "REAL - From 100 Apify-scraped Google reviews",
  lastUpdated: new Date().toISOString()
};

// Save
fs.writeFileSync(dataPath, JSON.stringify(updatedData, null, 2));

console.log('\n✅ Updated data saved!');
console.log('\nSummary:');
console.log(`  Products updated: ${updatedProducts.length}`);
console.log(`  Top Picks: ${updatedProducts.filter(p => p.badge === 'Top Pick').length}`);
console.log(`  Popular: ${updatedProducts.filter(p => p.badge === 'Popular').length}`);
console.log(`  Featured: ${updatedProducts.filter(p => p.badge === 'Featured').length}`);
console.log(`  SEO Reviews: ${seoReviews.length}`);
