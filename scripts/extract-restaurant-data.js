#!/usr/bin/env node
/**
 * Restaurant Data Extraction Demo
 * 
 * Pulls ALL available data for a restaurant:
 * - Google Reviews with dish mentions
 * - Website content (menu, prices, specials)
 * - Yelp details
 * - Review analysis (sentiment, common phrases)
 */

const https = require('https');
const { execSync } = require('child_process');

const RESTAURANT_SLUG = 'herbivorous-butcher';
const GOOGLE_PLACE_ID = 'ChIJr1zDbXgts1IRT5J8JwHX_gw';
const WEBSITE_URL = 'https://www.theherbivorousbutcher.com/';

// Fetch from our API
async function fetchPlaceDetails() {
  return new Promise((resolve, reject) => {
    https.get(`http://localhost:3000/api/places/${GOOGLE_PLACE_ID}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });
}

// Scrape website with web_fetch
function scrapeWebsite(url) {
  try {
    const result = execSync(`curl -s "${url}" | head -1000`, { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
    return result;
  } catch (err) {
    console.error('Website scrape failed:', err.message);
    return null;
  }
}

// Analyze reviews for insights
function analyzeReviews(reviews) {
  const insights = {
    dishMentions: {},
    commonPhrases: {},
    timing: [],
    pricing: [],
    topReviewedDishes: []
  };

  // Common dish keywords to look for
  const dishKeywords = [
    'ribs', 'korean bbq', 'sausage', 'cheese', 'cheddar', 'pepperoni',
    'sub', 'sandwich', 'salami', 'havarti', 'italian', 'deli'
  ];

  // Common phrases
  const phrases = [
    'must try', 'highly recommend', 'amazing', 'delicious', 'best',
    'overpriced', 'expensive', 'worth it', 'crowded', 'busy', 'line',
    'friendly', 'rude', 'fast', 'slow', 'fresh', 'quality'
  ];

  reviews.forEach(review => {
    const text = review.text.toLowerCase();
    
    // Extract dish mentions
    dishKeywords.forEach(dish => {
      if (text.includes(dish)) {
        insights.dishMentions[dish] = (insights.dishMentions[dish] || 0) + 1;
        
        // Extract sentence mentioning the dish
        const sentences = review.text.split(/[.!?]+/);
        const mentioningSentence = sentences.find(s => 
          s.toLowerCase().includes(dish)
        );
        
        if (mentioningSentence && !insights.topReviewedDishes.find(d => d.dish === dish)) {
          insights.topReviewedDishes.push({
            dish,
            mentions: 1,
            excerpt: mentioningSentence.trim(),
            author: review.author_name,
            rating: review.rating
          });
        }
      }
    });

    // Extract common phrases
    phrases.forEach(phrase => {
      if (text.includes(phrase)) {
        insights.commonPhrases[phrase] = (insights.commonPhrases[phrase] || 0) + 1;
      }
    });

    // Extract timing mentions
    const timingKeywords = ['weekend', 'saturday', 'sunday', 'busy', 'crowded', 'line', 'wait'];
    timingKeywords.forEach(keyword => {
      if (text.includes(keyword)) {
        const sentences = review.text.split(/[.!?]+/);
        const timingSentence = sentences.find(s => 
          s.toLowerCase().includes(keyword)
        );
        if (timingSentence) {
          insights.timing.push(timingSentence.trim());
        }
      }
    });

    // Extract pricing mentions
    const pricingKeywords = ['price', 'expensive', 'cheap', 'worth', 'value', 'cost', '$'];
    pricingKeywords.forEach(keyword => {
      if (text.includes(keyword)) {
        const sentences = review.text.split(/[.!?]+/);
        const pricingSentence = sentences.find(s => 
          s.toLowerCase().includes(keyword)
        );
        if (pricingSentence) {
          insights.pricing.push(pricingSentence.trim());
        }
      }
    });
  });

  // Sort dishes by mention count
  insights.topReviewedDishes.sort((a, b) => 
    (insights.dishMentions[b.dish] || 0) - (insights.dishMentions[a.dish] || 0)
  );

  return insights;
}

// Main extraction
async function main() {
  console.log('🔍 Extracting data for The Herbivorous Butcher...\n');

  // 1. Fetch Google Place data
  console.log('📍 Fetching Google Place details...');
  const placeData = await fetchPlaceDetails();
  console.log(`   ✓ Found ${placeData.reviews?.length || 0} reviews`);
  console.log(`   ✓ Rating: ${placeData.rating} (${placeData.userRatingsTotal} total)`);
  console.log(`   ✓ Photos: ${placeData.photos?.length || 0}`);

  // 2. Analyze reviews
  console.log('\n🔬 Analyzing reviews for insights...');
  const insights = analyzeReviews(placeData.reviews || []);
  console.log(`   ✓ ${Object.keys(insights.dishMentions).length} dishes mentioned`);
  console.log(`   ✓ ${insights.timing.length} timing insights`);
  console.log(`   ✓ ${insights.pricing.length} pricing insights`);

  // 3. Scrape website
  console.log('\n🌐 Scraping website...');
  const websiteContent = scrapeWebsite(WEBSITE_URL);
  console.log(`   ✓ Fetched ${websiteContent?.length || 0} bytes`);

  // 4. Compile enriched data
  const enrichedData = {
    slug: RESTAURANT_SLUG,
    extractedAt: new Date().toISOString(),
    googleData: {
      rating: placeData.rating,
      reviewCount: placeData.userRatingsTotal,
      photoCount: placeData.photos?.length || 0,
      hours: placeData.openingHours,
      openNow: placeData.openNow
    },
    dishInsights: {
      topMentioned: Object.entries(insights.dishMentions)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([dish, count]) => ({ dish, mentions: count })),
      reviewExcerpts: insights.topReviewedDishes.slice(0, 10)
    },
    timingInsights: insights.timing.slice(0, 5),
    pricingInsights: insights.pricing.slice(0, 5),
    commonPhrases: Object.entries(insights.commonPhrases)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([phrase, count]) => ({ phrase, count })),
    photos: placeData.photos || [],
    yelpData: placeData.yelp || {}
  };

  // Save to file
  const fs = require('fs');
  const outputPath = `/home/ec2-user/clawd/projects/mpls-vegan-directory-v3/enriched-data/${RESTAURANT_SLUG}-extracted.json`;
  fs.writeFileSync(outputPath, JSON.stringify(enrichedData, null, 2));

  console.log(`\n💾 Saved enriched data to: ${outputPath}`);
  
  // Print summary
  console.log('\n📊 EXTRACTION SUMMARY\n');
  console.log('Top 10 Most-Mentioned Dishes:');
  enrichedData.dishInsights.topMentioned.forEach((d, i) => {
    console.log(`  ${i + 1}. ${d.dish} (${d.mentions} mentions)`);
  });

  console.log('\nSample Review Excerpts:');
  enrichedData.dishInsights.reviewExcerpts.slice(0, 3).forEach((d, i) => {
    console.log(`  ${i + 1}. "${d.excerpt}" - ${d.author} (${d.rating}★)`);
  });

  console.log('\nTiming Insights:');
  enrichedData.timingInsights.slice(0, 3).forEach((t, i) => {
    console.log(`  ${i + 1}. "${t}"`);
  });

  console.log('\nPricing Insights:');
  enrichedData.pricingInsights.slice(0, 3).forEach((p, i) => {
    console.log(`  ${i + 1}. "${p}"`);
  });

  console.log('\n✅ Extraction complete!');
}

main().catch(console.error);
