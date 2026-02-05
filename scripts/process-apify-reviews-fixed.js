#!/usr/bin/env node
/**
 * Process Apify reviews:
 * Usage: node process-apify-reviews-fixed.js "slug"
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

const restaurantSlug = process.argv[2];

if (!restaurantSlug) {
  console.error('❌ Usage: node process-apify-reviews-fixed.js "slug"');
  process.exit(1);
}

// Load reviews from temp file
const reviewsPath = `/tmp/${restaurantSlug}-apify-reviews.json`;
if (!fs.existsSync(reviewsPath)) {
  console.error(`❌ Reviews file not found: ${reviewsPath}`);
  console.error(`   Run apify-scrape-reviews-fixed.js first`);
  process.exit(1);
}

const reviewsData = JSON.parse(fs.readFileSync(reviewsPath, 'utf8'));
const reviews = reviewsData.reviews;

console.log(`\n📍 Processing: ${reviewsData.name} (${restaurantSlug})`);
console.log(`✅ Loaded ${reviews.length} reviews`);
console.log('─'.repeat(60));

// Check if enhanced data exists
const dataPath = path.join(__dirname, '../enriched-data', `${restaurantSlug}-REAL-DATA.json`);

let existingData;
if (fs.existsSync(dataPath)) {
  // Load existing enhanced data
  existingData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  console.log(`📂 Found existing enhanced data`);
} else {
  // Create new template - need to analyze with Gemini
  console.log(`🤖 No existing data - will create new with Gemini...`);
  
  // Use Gemini to analyze top dishes from reviews
  const sampleReviews = reviews.slice(0, 30).map(r => r.text).join('\n\n');
  
  const prompt = `Analyze these Google reviews for ${reviewsData.name} and extract the top 5-8 most frequently mentioned menu items.

For each item provide:
- name: The dish/item name
- description: Brief description from reviews (what it is, how it tastes)
- category: food type (appetizer/entree/dessert/drink/etc)

Reviews:
${sampleReviews}

Return ONLY valid JSON array, no markdown:
[{"name":"...","description":"...","category":"..."},...]`;

  try {
    const geminiResult = await execPromise(
      `gemini "${prompt.replace(/"/g, '\\"')}" --json`,
      { maxBuffer: 1024 * 1024 * 10 }
    );
    
    const topProducts = JSON.parse(geminiResult.stdout.trim());
    console.log(`✅ Gemini identified ${topProducts.length} top items`);
    
    existingData = {
      topProducts: topProducts.map(p => ({...p, badge: null, quotes: [], reviewMentions: 0})),
      highlightedReviews: [],
      timingInsights: [],
      dataQuality: "REAL - From Apify-scraped Google reviews",
      lastUpdated: new Date().toISOString()
    };
    
  } catch (error) {
    console.error(`❌ Gemini analysis failed: ${error.message}`);
    process.exit(1);
  }
}

console.log(`\n🔍 Analyzing ${existingData.topProducts.length} menu items...\n`);

// Process each product
const updatedProducts = existingData.topProducts.map(product => {
  const dishName = product.name.toLowerCase();
  
  // Find mentions
  const relevantReviews = reviews.filter(r => 
    r.text && r.text.toLowerCase().includes(dishName)
  );
  
  // Extract quotes
  const quotes = relevantReviews
    .map(r => {
      const sentences = r.text.split(/[.!?]+/);
      const relevantSentence = sentences.find(s => 
        s.toLowerCase().includes(dishName)
      );
      return relevantSentence ? relevantSentence.trim() : r.text.substring(0, 150);
    })
    .filter(q => q.length > 20)
    .slice(0, 3);
  
  // Assign badge
  let badge = null;
  if (relevantReviews.length >= 4) badge = 'Top Pick';
  else if (relevantReviews.length >= 2) badge = 'Popular';
  else if (relevantReviews.length >= 1) badge = 'Featured';
  
  console.log(`${product.name}:`);
  console.log(`  Mentions: ${relevantReviews.length}`);
  console.log(`  Badge: ${badge || 'None'}`);
  console.log(`  Quotes: ${quotes.length}\n`);
  
  return {
    ...product,
    reviewMentions: relevantReviews.length,
    badge,
    quotes
  };
});

// SEO keywords for scoring
const seoKeywords = {
  dishKeywords: { terms: ['ribs', 'burger', 'wrap', 'wings', 'sandwich', 'pizza', 'tacos', 'salad', 'soup', 'steak', 'chicken', 'tofu', 'tempeh', 'seitan'], points: 3 },
  locationKeywords: { terms: ['minneapolis', 'twin cities', 'northeast', 'uptown', 'st paul', 'saint paul', 'minnesota', 'mn'], points: 2 },
  veganKeywords: { terms: ['vegan', 'plant-based', 'plant based', 'dairy-free', 'dairy free'], points: 1 },
  experienceKeywords: { terms: ['handcrafted', 'house-made', 'homemade', 'fresh', 'organic', 'local', 'scratch'], points: 1 },
  useCaseKeywords: { terms: ['meal prep', 'date night', 'lunch', 'dinner', 'brunch', 'takeout', 'delivery'], points: 1 },
  conversionKeywords: { terms: ['not vegan', 'omnivore', 'meat eater', 'convinced', 'converted', 'fooled', 'surprised'], points: 2 }
};

console.log(`\n🎯 Selecting 10 SEO-rich reviews...\n`);

// Score and select top SEO reviews
const seoReviews = reviews
  .filter(r => r.text && r.text.length > 100 && r.stars >= 4)
  .map(r => {
    let score = 0;
    const text = r.text.toLowerCase();
    
    Object.values(seoKeywords).forEach(category => {
      category.terms.forEach(term => {
        if (text.includes(term)) score += category.points;
      });
    });
    
    // Length bonus
    if (r.text.length > 200) score += 2;
    if (r.text.length > 300) score += 3;
    
    return { ...r, seoScore: score };
  })
  .sort((a, b) => b.seoScore - a.seoScore)
  .slice(0, 10);

console.log(`Top 10 SEO reviews:`);
seoReviews.forEach((r, i) => {
  console.log(`  ${i + 1}. ${r.name} (${r.stars}⭐, SEO: ${r.seoScore})`);
  console.log(`     "${r.text.substring(0, 80)}..."\n`);
});

// Build final data
const updatedData = {
  ...existingData,
  topProducts: updatedProducts,
  highlightedReviews: seoReviews.map(r => ({
    author: r.name,
    rating: r.stars,
    text: r.text,
    date: r.publishAt,
    source: 'Google'
  })),
  dataQuality: "REAL - From 100 Apify-scraped Google reviews",
  lastUpdated: new Date().toISOString()
};

// Save
fs.writeFileSync(dataPath, JSON.stringify(updatedData, null, 2));

const topPicks = updatedProducts.filter(p => p.badge === 'Top Pick').length;
const popular = updatedProducts.filter(p => p.badge === 'Popular').length;
const featured = updatedProducts.filter(p => p.badge === 'Featured').length;

console.log(`\n✅ Updated data saved!`);
console.log(`\nSummary:`);
console.log(`  Products updated: ${updatedProducts.length}`);
console.log(`  Top Picks: ${topPicks}`);
console.log(`  Popular: ${popular}`);
console.log(`  Featured: ${featured}`);
console.log(`  SEO Reviews: ${seoReviews.length}`);
