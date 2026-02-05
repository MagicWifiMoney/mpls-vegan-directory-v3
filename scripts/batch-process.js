#!/usr/bin/env node
/**
 * Batch processor for restaurant enhancement
 * Usage: node scripts/batch-process.js <batch-number>
 * Example: node scripts/batch-process.js 1
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const batches = {
  1: [
    { slug: 'french-meadow', name: 'French Meadow' },
    { slug: 'hard-times-cafe', name: 'Hard Times Cafe' },
    { slug: 'seward-cafe', name: 'Seward Cafe' },
    { slug: 'francis-burger-joint', name: 'Francis Burger Joint' },
    { slug: 'vegan-east', name: 'Vegan East' },
    { slug: 'modern-times', name: 'Modern Times' },
    { slug: 'lutunjis-palate', name: "Lutunji's Palate" },
    { slug: 'bole-ethiopian', name: 'Bole Ethiopian' },
    { slug: 'everest-on-grand', name: 'Everest on Grand' },
    { slug: 'namaste-cafe', name: 'Namaste Cafe' }
  ],
  2: [
    { slug: 'himalayan-restaurant', name: 'Himalayan Restaurant' },
    { slug: 'foxy-falafel', name: 'Foxy Falafel' },
    { slug: 'tongue-in-cheek', name: 'Tongue in Cheek' },
    { slug: 'amazing-thailand', name: 'Amazing Thailand' },
    { slug: 'glam-doll-donuts', name: 'Glam Doll Donuts' },
    { slug: 'seed-cafe', name: 'Seed Cafe' },
    { slug: 'eureka-compass', name: 'Eureka Compass' },
    { slug: 'crepe-and-spoon', name: 'Crepe and Spoon' },
    { slug: 'pizza-luce', name: 'Pizza Luce' },
    { slug: 'shish-mediterranean', name: 'Shish Mediterranean' }
  ],
  3: [
    { slug: 'the-dripping-root', name: 'The Dripping Root' },
    { slug: 'afro-deli', name: 'Afro Deli' },
    { slug: 'common-roots-cafe', name: 'Common Roots Cafe' },
    { slug: 'khyber-pass-cafe', name: 'Khyber Pass Cafe' },
    { slug: 'crisp-and-green', name: 'Crisp and Green' },
    { slug: 'wedge-table', name: 'Wedge Table' },
    { slug: 'wok-in-the-park', name: 'Wok in the Park' },
    { slug: 'victors-1959', name: "Victor's 1959" },
    { slug: 'tori-ramen', name: 'Tori Ramen' },
    { slug: 'red-cow', name: 'Red Cow' }
  ],
  4: [
    { slug: 'black-sheep-pizza', name: 'Black Sheep Pizza' },
    { slug: 'peninsula-malaysian', name: 'Peninsula Malaysian' },
    { slug: 'ngon-vietnamese', name: 'Ngon Vietnamese' },
    { slug: 'ipho-saigon', name: 'iPho Saigon' },
    { slug: 'masu-sushi', name: 'Masu Sushi' },
    { slug: 'world-street-kitchen', name: 'World Street Kitchen' },
    { slug: 'gandhi-mahal', name: 'Gandhi Mahal' },
    { slug: 'galactic-pizza', name: 'Galactic Pizza' },
    { slug: 'brasa-premium-rotisserie', name: 'Brasa Premium Rotisserie' },
    { slug: 'cafe-latte', name: 'Cafe Latte' },
    { slug: 'may-day-cafe', name: 'May Day Cafe' },
    { slug: 'salty-tart', name: 'Salty Tart' }
  ]
};

async function processRestaurant(restaurant) {
  const { slug, name } = restaurant;
  
  console.log(`\n${'='.repeat(70)}`);
  console.log(`📍 Processing: ${name} (${slug})`);
  console.log('='.repeat(70));
  
  try {
    // Step 1: Scrape reviews via Apify
    console.log('\n[1/2] Scraping reviews from Google Maps via Apify...');
    execSync(
      `node scripts/apify-scrape-reviews-fixed.js "${name}" "${slug}"`,
      { stdio: 'inherit', cwd: path.join(__dirname, '..') }
    );
    
    // Step 2: Process reviews
    console.log('\n[2/2] Processing reviews...');
    execSync(
      `node scripts/process-apify-reviews-fixed2.js "${slug}"`,
      { stdio: 'inherit', cwd: path.join(__dirname, '..') }
    );
    
    console.log(`\n✅ ${name} complete!`);
    
  } catch (error) {
    console.error(`\n❌ Error processing ${name}:`, error.message);
    return false;
  }
  
  return true;
}

async function main() {
  const batchNumber = parseInt(process.argv[2]);
  
  if (!batchNumber || !batches[batchNumber]) {
    console.error('❌ Invalid batch number');
    console.log('\nUsage: node scripts/batch-process.js <batch-number>');
    console.log('\nAvailable batches:');
    Object.keys(batches).forEach(num => {
      console.log(`  Batch ${num}: ${batches[num].length} restaurants`);
    });
    process.exit(1);
  }
  
  const batch = batches[batchNumber];
  
  console.log('\n🚀 Starting Batch Processing');
  console.log(`📦 Batch ${batchNumber}: ${batch.length} restaurants`);
  console.log(`💰 Estimated cost: $${(batch.length * 0.05).toFixed(2)}`);
  console.log(`⏱️  Estimated time: ${Math.ceil(batch.length * 4.5)} minutes`);
  console.log('='.repeat(70));
  
  const startTime = Date.now();
  let successCount = 0;
  let failCount = 0;
  
  for (let i = 0; i < batch.length; i++) {
    const restaurant = batch[i];
    console.log(`\n[${i + 1}/${batch.length}]`);
    
    const success = await processRestaurant(restaurant);
    if (success) {
      successCount++;
    } else {
      failCount++;
    }
    
    // Rate limiting: wait 10 seconds between restaurants
    if (i < batch.length - 1) {
      console.log('\n⏳ Waiting 10 seconds before next restaurant...');
      await new Promise(resolve => setTimeout(resolve, 10000));
    }
  }
  
  const duration = Math.round((Date.now() - startTime) / 1000 / 60);
  
  console.log('\n' + '='.repeat(70));
  console.log('📊 Batch Summary');
  console.log('='.repeat(70));
  console.log(`✅ Successful: ${successCount}/${batch.length}`);
  console.log(`❌ Failed: ${failCount}/${batch.length}`);
  console.log(`⏱️  Total time: ${duration} minutes`);
  console.log('='.repeat(70));
  
  console.log('\n📝 Next steps:');
  console.log('  1. Review the generated JSON files in enriched-data/');
  console.log('  2. Commit and push to deploy:');
  console.log('     git add enriched-data/');
  console.log(`     git commit -m "feat: Batch ${batchNumber} - ${successCount} restaurants enhanced"`);
  console.log('     git push origin master');
}

main().catch(console.error);
