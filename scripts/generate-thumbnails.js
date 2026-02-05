#!/usr/bin/env node
/**
 * Generate unique, brandable thumbnails for each restaurant
 * No emojis - just clean design with unique color palettes
 */

const fs = require('fs');
const path = require('path');

// Unique color schemes for each restaurant type/vibe
const colorPalettes = {
  // Butcher/Deli - Rich reds and browns
  butcher: {
    gradient: ['#8B4513', '#A0522D', '#D2691E'],
    accent: '#F4A460',
    text: '#FFFFFF'
  },
  // Modern American - Cool blues and purples
  modern: {
    gradient: ['#4B0082', '#6A5ACD', '#8470FF'],
    accent: '#9370DB',
    text: '#FFFFFF'
  },
  // Ethiopian - Warm golds and earth tones
  ethiopian: {
    gradient: ['#B8860B', '#DAA520', '#FFD700'],
    accent: '#FFA500',
    text: '#2C1810'
  },
  // Bar/Nightlife - Deep teals and emeralds
  nightlife: {
    gradient: ['#004D40', '#00695C', '#00796B'],
    accent: '#26A69A',
    text: '#FFFFFF'
  },
  // Bakery/Cafe - Soft pastels
  bakery: {
    gradient: ['#D4A574', '#E8C4A0', '#F5E6D3'],
    accent: '#C17F59',
    text: '#3E2723'
  },
  // Punk/Alternative - Bold blacks and neons
  punk: {
    gradient: ['#1A1A1A', '#2D2D2D', '#404040'],
    accent: '#00FF00',
    text: '#FFFFFF'
  },
  // Community Cafe - Warm greens
  community: {
    gradient: ['#2E7D32', '#388E3C', '#43A047'],
    accent: '#66BB6A',
    text: '#FFFFFF'
  },
  // Asian Fusion - Rich magentas and oranges
  asian: {
    gradient: ['#C2185B', '#D81B60', '#E91E63'],
    accent: '#F06292',
    text: '#FFFFFF'
  },
  // Pizza/Italian - Classic reds
  italian: {
    gradient: ['#B71C1C', '#C62828', '#D32F2F'],
    accent: '#E57373',
    text: '#FFFFFF'
  },
  // Health/Juice - Fresh greens
  health: {
    gradient: ['#558B2F', '#689F38', '#7CB342'],
    accent: '#9CCC65',
    text: '#FFFFFF'
  },
  // Mexican - Vibrant warm tones
  mexican: {
    gradient: ['#E65100', '#F57C00', '#FF9800'],
    accent: '#FFB74D',
    text: '#FFFFFF'
  },
  // Mediterranean - Ocean blues
  mediterranean: {
    gradient: ['#0277BD', '#0288D1', '#039BE5'],
    accent: '#4FC3F7',
    text: '#FFFFFF'
  },
  // Default - Sophisticated charcoal
  default: {
    gradient: ['#37474F', '#455A64', '#546E7A'],
    accent: '#78909C',
    text: '#FFFFFF'
  }
};

// Map each restaurant to a color palette based on their vibe
const restaurantPalettes = {
  'herbivorous-butcher': 'butcher',
  'j-selbys': 'modern',
  'lulu-ethiovegan': 'ethiopian',
  'reverie-cafe-bar': 'nightlife',
  'french-meadow': 'bakery',
  'hard-times-cafe': 'punk',
  'seward-cafe': 'community',
  'Mirror-of-Korea': 'asian',
  'Pizza-Luce': 'italian',
  // Add more mappings as needed
};

function generateSVG(restaurant, palette) {
  const colors = colorPalettes[palette] || colorPalettes.default;
  
  // Split name for better layout
  const nameParts = restaurant.name.split(' ');
  const line1 = nameParts.slice(0, Math.ceil(nameParts.length / 2)).join(' ');
  const line2 = nameParts.slice(Math.ceil(nameParts.length / 2)).join(' ');
  
  // Cuisine badge (first cuisine type)
  const cuisine = restaurant.cuisineType[0];
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad-${restaurant.slug}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${colors.gradient[0]};stop-opacity:1" />
      <stop offset="50%" style="stop-color:${colors.gradient[1]};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${colors.gradient[2]};stop-opacity:1" />
    </linearGradient>
    
    <filter id="shadow">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.3"/>
    </filter>
  </defs>
  
  <!-- Background gradient -->
  <rect width="400" height="300" fill="url(#grad-${restaurant.slug})"/>
  
  <!-- Subtle pattern overlay -->
  <rect width="400" height="300" fill="url(#pattern)" opacity="0.05"/>
  
  <!-- Accent corner element -->
  <circle cx="350" cy="50" r="80" fill="${colors.accent}" opacity="0.15"/>
  <circle cx="50" cy="250" r="60" fill="${colors.accent}" opacity="0.1"/>
  
  <!-- Restaurant name -->
  <text 
    x="200" 
    y="120" 
    font-family="'SF Pro Display', -apple-system, system-ui, sans-serif" 
    font-size="32" 
    font-weight="700"
    fill="${colors.text}" 
    text-anchor="middle"
    letter-spacing="0.5"
  >${line1}</text>
  
  ${line2 ? `<text 
    x="200" 
    y="160" 
    font-family="'SF Pro Display', -apple-system, system-ui, sans-serif" 
    font-size="32" 
    font-weight="700"
    fill="${colors.text}" 
    text-anchor="middle"
    letter-spacing="0.5"
  >${line2}</text>` : ''}
  
  <!-- Cuisine badge -->
  <rect 
    x="140" 
    y="200" 
    width="120" 
    height="32" 
    rx="16" 
    fill="${colors.accent}" 
    opacity="0.9"
    filter="url(#shadow)"
  />
  <text 
    x="200" 
    y="221" 
    font-family="'SF Pro Text', -apple-system, system-ui, sans-serif" 
    font-size="14" 
    font-weight="600"
    fill="${colors.text}" 
    text-anchor="middle"
    letter-spacing="0.3"
  >${cuisine}</text>
  
  <!-- Neighborhood -->
  <text 
    x="200" 
    y="260" 
    font-family="'SF Pro Text', -apple-system, system-ui, sans-serif" 
    font-size="12" 
    font-weight="400"
    fill="${colors.text}" 
    text-anchor="middle"
    opacity="0.7"
    letter-spacing="1"
  >${restaurant.neighborhood.toUpperCase()}</text>
</svg>`;
}

// Load restaurants data
const restaurantsPath = path.join(__dirname, '../src/data/restaurants.ts');
const restaurantsData = fs.readFileSync(restaurantsPath, 'utf8');

// Extract restaurant objects (simplified parsing)
const restaurantMatches = restaurantsData.match(/{\s+id: ['"](\d+)['"]/g);

console.log('Generating thumbnails for all restaurants...\n');

// For demo, let's create a few examples
const exampleRestaurants = [
  {
    slug: 'herbivorous-butcher',
    name: 'The Herbivorous Butcher',
    cuisineType: ['Deli', 'Vegan Meats'],
    neighborhood: 'Northeast'
  },
  {
    slug: 'j-selbys',
    name: "J. Selby's",
    cuisineType: ['American', 'Comfort Food'],
    neighborhood: 'Cathedral Hill'
  },
  {
    slug: 'lulu-ethiovegan',
    name: 'Lulu EthioVegan',
    cuisineType: ['Ethiopian', 'African'],
    neighborhood: 'Elliot Park'
  },
  {
    slug: 'reverie-cafe-bar',
    name: 'Reverie Cafe + Bar',
    cuisineType: ['American', 'Bar Food'],
    neighborhood: 'Powderhorn'
  },
  {
    slug: 'french-meadow',
    name: 'French Meadow Bakery',
    cuisineType: ['Bakery', 'Brunch'],
    neighborhood: 'Lyn-Lake'
  }
];

// Create output directory
const outputDir = path.join(__dirname, '../public/thumbnails');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate SVG thumbnails
exampleRestaurants.forEach(restaurant => {
  const paletteKey = restaurantPalettes[restaurant.slug] || 'default';
  const svg = generateSVG(restaurant, paletteKey);
  
  const outputPath = path.join(outputDir, `${restaurant.slug}.svg`);
  fs.writeFileSync(outputPath, svg);
  
  console.log(`✓ Generated: ${restaurant.slug}.svg (${paletteKey} palette)`);
});

console.log(`\n✅ Created ${exampleRestaurants.length} thumbnail SVGs in /public/thumbnails/`);
console.log('\nNext steps:');
console.log('1. Preview thumbnails at http://localhost:3000/thumbnails/herbivorous-butcher.svg');
console.log('2. If approved, generate for all 47 restaurants');
console.log('3. Update listing cards to use these thumbnails');
