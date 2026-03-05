#!/usr/bin/env node
/**
 * prefetch-places.js
 * Fetches Google Places data for all restaurants, saves to src/data/places-cache.json
 * Run: node scripts/prefetch-places.js
 * Cron: Sundays, auto-deploys to Vercel after
 */

const fs = require('fs');
const path = require('path');

// Load env from .env.local (no dotenv dependency needed)
const envPath = path.join(__dirname, '../.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  for (const line of envContent.split('\n')) {
    const match = line.match(/^([A-Z_][A-Z0-9_]*)="?([^"]*)"?\s*$/);
    if (match && !process.env[match[1]]) {
      process.env[match[1]] = match[2].replace(/\\n$/, '').trim();
    }
  }
}

const PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const OUTPUT_PATH = path.join(__dirname, '../src/data/places-cache.json');
const RESTAURANTS_FILE = path.join(__dirname, '../src/data/restaurants.ts');

// Rate limiting: 2 requests/sec to stay well under Google's limits
const DELAY_MS = 600;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Extract restaurants from TypeScript source via regex (no compile needed)
function extractRestaurants() {
  const content = fs.readFileSync(RESTAURANTS_FILE, 'utf8');
  const restaurants = [];

  // Match each restaurant block by id + name + googlePlaceId
  const idMatches = [...content.matchAll(/id:\s*'([^']+)'/g)];
  const nameMatches = [...content.matchAll(/name:\s*'([^']+)'/g)];
  const placeIdMatches = [...content.matchAll(/googlePlaceId:\s*'([^']+)'/g)];
  const addressMatches = [...content.matchAll(/address:\s*'([^']+)'/g)];
  const cityMatches = [...content.matchAll(/city:\s*'([^']+)'/g)];
  const stateMatches = [...content.matchAll(/state:\s*'([^']+)'/g)];

  for (let i = 0; i < placeIdMatches.length; i++) {
    restaurants.push({
      id: idMatches[i]?.[1],
      name: nameMatches[i]?.[1],
      googlePlaceId: placeIdMatches[i][1],
      address: addressMatches[i]?.[1],
      city: cityMatches[i]?.[1],
      state: stateMatches[i]?.[1],
    });
  }

  return restaurants;
}

async function fetchGooglePlaces(placeId) {
  if (!PLACES_API_KEY) {
    console.warn('  ⚠️  No GOOGLE_PLACES_API_KEY — skipping Google data');
    return {};
  }

  const fields = 'rating,user_ratings_total,opening_hours,photos,reviews,current_opening_hours,formatted_phone_number,url';
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&key=${PLACES_API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.status !== 'OK') {
    console.warn(`  ⚠️  Google Places error: ${data.status} ${data.error_message || ''}`);
    return {};
  }

  const result = data.result;
  return {
    rating: result.rating,
    userRatingsTotal: result.user_ratings_total,
    openingHours: result.opening_hours?.weekday_text,
    openNow: result.current_opening_hours?.open_now ?? result.opening_hours?.open_now,
    formattedPhoneNumber: result.formatted_phone_number,
    googleMapsUrl: result.url,
    // Store photo references (not full URLs — keys expire; reconstruct at serve time)
    photoReferences: result.photos?.slice(0, 10).map(p => p.photo_reference) || [],
    reviews: result.reviews?.slice(0, 5).map(r => ({
      author_name: r.author_name,
      rating: r.rating,
      text: r.text,
      time: r.time,
      profile_photo_url: r.profile_photo_url,
    })) || [],
  };
}

async function main() {
  console.log('🔄 MPLS Vegan Directory — Places Prefetch');
  console.log(`   Output: ${OUTPUT_PATH}`);
  console.log('');

  const restaurants = extractRestaurants();
  console.log(`📋 Found ${restaurants.length} restaurants\n`);

  // Load existing cache to allow partial re-runs
  let existing = {};
  if (fs.existsSync(OUTPUT_PATH)) {
    try {
      existing = JSON.parse(fs.readFileSync(OUTPUT_PATH, 'utf8'));
      console.log(`♻️  Loaded ${Object.keys(existing).length} existing cache entries\n`);
    } catch (e) {
      console.warn('⚠️  Could not parse existing cache — starting fresh\n');
    }
  }

  const cache = { ...existing };
  let fetched = 0;
  let skipped = 0;
  let errors = 0;

  for (let i = 0; i < restaurants.length; i++) {
    const r = restaurants[i];
    const pad = String(i + 1).padStart(2, ' ');
    process.stdout.write(`[${pad}/${restaurants.length}] ${r.name} ... `);

    // Skip if recently cached (< 6 days old) — allow --force to skip this check
    const existingEntry = cache[r.googlePlaceId];
    const SIX_DAYS = 6 * 24 * 60 * 60 * 1000;
    if (existingEntry && existingEntry._fetchedAt && !process.argv.includes('--force')) {
      const age = Date.now() - new Date(existingEntry._fetchedAt).getTime();
      if (age < SIX_DAYS) {
        console.log(`skipped (${Math.round(age / 3600000)}h old)`);
        skipped++;
        continue;
      }
    }

    try {
      const googleData = await fetchGooglePlaces(r.googlePlaceId);

      cache[r.googlePlaceId] = {
        placeId: r.googlePlaceId,
        restaurantId: r.id,
        restaurantName: r.name,
        _fetchedAt: new Date().toISOString(),
        ...googleData,
      };

      const rating = googleData.rating || '?';
      const reviews = googleData.userRatingsTotal || 0;
      console.log(`✅ ${rating}★ ${reviews} reviews`);
      fetched++;
    } catch (err) {
      console.log(`❌ ${err.message}`);
      errors++;
    }

    // Rate limit: don't hammer the APIs
    if (i < restaurants.length - 1) {
      await sleep(DELAY_MS);
    }
  }

  // Write output
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(cache, null, 2));

  console.log('');
  console.log('─'.repeat(50));
  console.log(`✅ Done: ${fetched} fetched, ${skipped} skipped, ${errors} errors`);
  console.log(`💾 Saved to: ${OUTPUT_PATH}`);
  console.log(`📦 Cache size: ${(fs.statSync(OUTPUT_PATH).size / 1024).toFixed(1)} KB`);
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
