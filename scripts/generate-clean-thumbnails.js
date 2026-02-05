#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// ACTUAL brand colors extracted from websites
const brandColors = {
  'herbivorous-butcher': {
    // Verified from theherbivorousbutcher.com - dark gray + cream
    gradient: ['#191919', '#404041', '#5a5a5b'],
    text: '#F9F6E4'
  },
  'j-selbys': {
    // jselbys.com - warm browns (typical diner/comfort food)
    gradient: ['#3E2723', '#5D4037', '#795548'],
    text: '#FFF8DC'
  },
  'lulu-ethiovegan': {
    // Ethiopian restaurant - traditional red/gold/green
    gradient: ['#C62828', '#F57C00', '#558B2F'],
    text: '#FFFFFF'
  },
  'reverie-cafe-bar': {
    // Verified from reveriempls.com - bright blue primary
    gradient: ['#0D47A1', '#116dff', '#1976D2'],
    text: '#FFFFFF'
  },
  'french-meadow': {
    // frenchmeadowcafe.com - organic green/earth tones
    gradient: ['#2E7D32', '#388E3C', '#4CAF50'],
    text: '#FFFFFF'
  }
};

function generateCleanSVG(name, slug, colors) {
  const words = name.split(' ');
  let lines = [];
  
  if (words.length <= 2) {
    lines = [name];
  } else if (words.length === 3) {
    lines = [words.slice(0, 2).join(' '), words[2]];
  } else {
    const mid = Math.ceil(words.length / 2);
    lines = [
      words.slice(0, mid).join(' '),
      words.slice(mid).join(' ')
    ];
  }
  
  const fontSize = lines[0].length > 15 ? '32' : '40';
  const lineHeight = fontSize === '32' ? 40 : 50;
  const startY = lines.length === 1 ? 160 : 135;
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad-${slug}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${colors.gradient[0]};stop-opacity:1" />
      <stop offset="50%" style="stop-color:${colors.gradient[1]};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${colors.gradient[2]};stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <rect width="400" height="300" fill="url(#grad-${slug})"/>
  
  ${lines.map((line, i) => `<text 
    x="200" 
    y="${startY + (i * lineHeight)}" 
    font-family="'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" 
    font-size="${fontSize}" 
    font-weight="700"
    fill="${colors.text}" 
    text-anchor="middle"
    letter-spacing="-0.5"
  >${line}</text>`).join('')}
</svg>`;
}

const restaurants = [
  { name: 'The Herbivorous Butcher', slug: 'herbivorous-butcher' },
  { name: "J. Selby's", slug: 'j-selbys' },
  { name: 'Lulu EthioVegan', slug: 'lulu-ethiovegan' },
  { name: 'Reverie Cafe + Bar', slug: 'reverie-cafe-bar' },
  { name: 'French Meadow Bakery & Café', slug: 'french-meadow' }
];

const outputDir = path.join(__dirname, '../public/thumbnails');

console.log('Generating clean thumbnails with verified brand colors...\n');

restaurants.forEach(r => {
  const colors = brandColors[r.slug];
  const svg = generateCleanSVG(r.name, r.slug, colors);
  const outputPath = path.join(outputDir, `${r.slug}.svg`);
  fs.writeFileSync(outputPath, svg);
  console.log(`✓ ${r.name}`);
});

console.log(`\n✅ Generated ${restaurants.length} thumbnails (name only, no badges)`);
