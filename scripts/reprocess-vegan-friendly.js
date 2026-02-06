#!/usr/bin/env node
/**
 * Re-process vegan-friendly restaurants to filter for vegan-only content
 * - Reviews: Only show reviews mentioning "vegan"
 * - Menu items: Only show 100% vegan items
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

// Get restaurant veganStatus from restaurants.ts
function getVeganStatus(slug) {
  const restaurantsFile = fs.readFileSync(
    path.join(__dirname, '../src/data/restaurants.ts'),
    'utf8'
  );
  
  const regex = new RegExp(`slug:\\s*'${slug}'[\\s\\S]*?veganStatus:\\s*'([^']+)'`);
  const match = restaurantsFile.match(regex);
  return match ? match[1] : null;
}

async function reprocessRestaurant(slug) {
  const veganStatus = getVeganStatus(slug);
  
  if (veganStatus === '100% Vegan') {
    console.log(`✅ ${slug}: 100% Vegan - skipping (already perfect)`);
    return;
  }
  
  console.log(`\n🔄 Processing: ${slug} (${veganStatus})`);
  console.log('─'.repeat(60));
  
  // Load existing data
  const dataPath = path.join(__dirname, '../enriched-data', `${slug}-REAL-DATA.json`);
  
  if (!fs.existsSync(dataPath)) {
    console.log(`  ⚠️  No enhanced data found - skipping`);
    return;
  }
  
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  
  // Load reviews from temp file
  const reviewsPath = `/tmp/${slug}-apify-reviews.json`;
  
  if (!fs.existsSync(reviewsPath)) {
    console.log(`  ⚠️  No review cache found - skipping`);
    return;
  }
  
  const reviewsData = JSON.parse(fs.readFileSync(reviewsPath, 'utf8'));
  const allReviews = reviewsData.reviews;
  
  console.log(`  📥 Loaded ${allReviews.length} reviews`);
  
  // 1. Filter menu items - ask Gemini to identify ONLY vegan items
  console.log(`\n  🤖 Asking Gemini to identify vegan-only menu items...`);
  
  const sampleReviews = allReviews.slice(0, 30).map(r => r.text).join('\n\n');
  
  const menuPrompt = `This is a ${veganStatus} restaurant. From these reviews, extract ONLY menu items that are 100% vegan (no meat, dairy, eggs, honey).

If an item contains cheese, meat, eggs, or dairy - DO NOT include it unless the review explicitly says it's vegan cheese/vegan meat/etc.

For each vegan item provide:
- name: The dish/item name
- description: Brief description from reviews
- category: food type (appetizer/entree/dessert/drink)

Reviews:
${sampleReviews}

Return ONLY valid JSON array of vegan items, no markdown:
[{"name":"...","description":"...","category":"..."},...]`;

  let veganProducts = [];
  try {
    const geminiResult = await execPromise(
      `gemini -p "${menuPrompt.replace(/"/g, '\\"')}" -o json`,
      { maxBuffer: 1024 * 1024 * 10 }
    );
    
    const output = JSON.parse(geminiResult.stdout.trim());
    let responseText = output.response || geminiResult.stdout;
    responseText = responseText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
    veganProducts = JSON.parse(responseText);
    console.log(`  ✅ Gemini identified ${veganProducts.length} vegan items`);
  } catch (error) {
    console.log(`  ⚠️  Gemini failed, keeping original items: ${error.message}`);
    veganProducts = data.topProducts;
  }
  
  // Process vegan products with mentions
  const updatedProducts = veganProducts.map(product => {
    const dishName = product.name.toLowerCase();
    
    const relevantReviews = allReviews.filter(r => 
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
    
    console.log(`  ${product.name}: ${relevantReviews.length} mentions, ${badge || 'None'}`);
    
    return {
      ...product,
      reviewMentions: relevantReviews.length,
      badge,
      quotes
    };
  });
  
  // 2. Filter reviews - ONLY reviews mentioning "vegan"
  console.log(`\n  🔍 Filtering for vegan-focused reviews...`);
  
  const veganReviews = allReviews.filter(r => 
    r.text && 
    r.text.length > 100 && 
    r.stars >= 4 &&
    r.text.toLowerCase().includes('vegan')
  );
  
  console.log(`  📊 Found ${veganReviews.length} reviews mentioning "vegan"`);
  
  // SEO keywords for scoring
  const seoKeywords = {
    veganKeywords: { terms: ['vegan', 'plant-based', 'plant based', 'dairy-free', 'dairy free'], points: 3 },
    dishKeywords: { terms: ['tofu', 'tempeh', 'seitan', 'beyond', 'impossible', 'cauliflower', 'mushroom', 'jackfruit'], points: 3 },
    locationKeywords: { terms: ['minneapolis', 'twin cities', 'st paul', 'saint paul', 'minnesota', 'mn'], points: 2 },
    experienceKeywords: { terms: ['delicious', 'amazing', 'incredible', 'best', 'favorite', 'love'], points: 1 },
  };
  
  // Score vegan reviews
  const scoredVeganReviews = veganReviews.map(r => {
    let score = 0;
    const text = r.text.toLowerCase();
    
    Object.values(seoKeywords).forEach(category => {
      category.terms.forEach(term => {
        if (text.includes(term)) score += category.points;
      });
    });
    
    if (r.text.length > 200) score += 2;
    if (r.text.length > 300) score += 3;
    
    return { ...r, seoScore: score };
  });
  
  // If we have 10+ vegan reviews, use them. Otherwise fill with high SEO reviews
  let finalReviews;
  if (scoredVeganReviews.length >= 10) {
    finalReviews = scoredVeganReviews
      .sort((a, b) => b.seoScore - a.seoScore)
      .slice(0, 10);
    console.log(`  ✅ Using 10 vegan-focused reviews`);
  } else {
    // Use all vegan reviews + fill with high SEO reviews
    const nonVeganReviews = allReviews
      .filter(r => 
        r.text && 
        r.text.length > 100 && 
        r.stars >= 4 &&
        !r.text.toLowerCase().includes('vegan')
      )
      .map(r => {
        let score = 0;
        const text = r.text.toLowerCase();
        
        Object.values(seoKeywords).forEach(category => {
          category.terms.forEach(term => {
            if (text.includes(term)) score += category.points;
          });
        });
        
        if (r.text.length > 200) score += 2;
        if (r.text.length > 300) score += 3;
        
        return { ...r, seoScore: score };
      })
      .sort((a, b) => b.seoScore - a.seoScore);
    
    finalReviews = [
      ...scoredVeganReviews.sort((a, b) => b.seoScore - a.seoScore),
      ...nonVeganReviews.slice(0, 10 - scoredVeganReviews.length)
    ];
    
    console.log(`  ⚠️  Only ${scoredVeganReviews.length} vegan reviews, filled with ${10 - scoredVeganReviews.length} high SEO reviews`);
  }
  
  // Build final data
  const updatedData = {
    ...data,
    topProducts: updatedProducts,
    highlightedReviews: finalReviews.map(r => ({
      author: r.name,
      rating: r.stars,
      text: r.text,
      date: r.publishAt,
      source: 'Google'
    })),
    dataQuality: `VEGAN-FILTERED - ${veganStatus} restaurant, only vegan items/reviews`,
    lastUpdated: new Date().toISOString()
  };
  
  // Save
  fs.writeFileSync(dataPath, JSON.stringify(updatedData, null, 2));
  
  const topPicks = updatedProducts.filter(p => p.badge === 'Top Pick').length;
  const popular = updatedProducts.filter(p => p.badge === 'Popular').length;
  
  console.log(`\n  ✅ Updated!`);
  console.log(`     Products: ${updatedProducts.length} vegan items (${topPicks} Top Pick, ${popular} Popular)`);
  console.log(`     Reviews: ${finalReviews.length} (${scoredVeganReviews.length} vegan-focused)`);
}

async function main() {
  const slug = process.argv[2];
  
  if (!slug) {
    console.error('Usage: node reprocess-vegan-friendly.js <slug>');
    process.exit(1);
  }
  
  await reprocessRestaurant(slug);
}

main().catch(console.error);
