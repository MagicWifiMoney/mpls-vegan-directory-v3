#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Load restaurants data
const restaurantsPath = path.join(__dirname, '../src/data/restaurants.ts');
const restaurantsContent = fs.readFileSync(restaurantsPath, 'utf8');

// Extract restaurants array (basic parsing)
const restaurants = eval(restaurantsContent.match(/export const restaurants.*?=.*?\[([\s\S]*?)\];/)[1]);

// Google API key
const API_KEY = '***REMOVED***';

async function findPlaceId(restaurant) {
  const query = encodeURIComponent(`${restaurant.name} ${restaurant.address} ${restaurant.city}`);
  const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${query}&inputtype=textquery&fields=place_id,name&key=${API_KEY}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.status === 'OK' && data.candidates.length > 0) {
      return data.candidates[0].place_id;
    }
    console.error(`❌ Not found: ${restaurant.name}`);
    return null;
  } catch (error) {
    console.error(`❌ Error for ${restaurant.name}:`, error.message);
    return null;
  }
}

async function refreshAllPlaceIds() {
  console.log('🔄 Refreshing Place IDs for 47 restaurants...\n');
  
  const updates = [];
  
  for (const restaurant of restaurants) {
    const newPlaceId = await findPlaceId(restaurant);
    
    if (newPlaceId && newPlaceId !== restaurant.googlePlaceId) {
      console.log(`✅ ${restaurant.name}`);
      console.log(`   Old: ${restaurant.googlePlaceId}`);
      console.log(`   New: ${newPlaceId}\n`);
      updates.push({
        name: restaurant.name,
        oldPlaceId: restaurant.googlePlaceId,
        newPlaceId
      });
    } else if (newPlaceId === restaurant.googlePlaceId) {
      console.log(`✓ ${restaurant.name} (unchanged)\n`);
    }
    
    // Rate limit: 1 request per second
    await new Promise(r => setTimeout(r, 1000));
  }
  
  console.log(`\n📊 Summary: ${updates.length} Place IDs need updating`);
  
  if (updates.length > 0) {
    console.log('\n📝 Manual updates needed in src/data/restaurants.ts:');
    updates.forEach(u => {
      console.log(`\n// ${u.name}`);
      console.log(`googlePlaceId: '${u.newPlaceId}', // was: ${u.oldPlaceId}`);
    });
  }
}

refreshAllPlaceIds().catch(console.error);
