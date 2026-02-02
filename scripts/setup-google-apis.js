#!/usr/bin/env node

/**
 * Setup Google Maps & Places API
 * 
 * Manual steps (for now):
 * 1. Go to https://console.cloud.google.com/apis/credentials?project=botti-analytics
 * 2. Click "CREATE CREDENTIALS" → "API key"
 * 3. Create TWO keys:
 * 
 * SERVER KEY (for Places API):
 * - Name: "MPLS Vegan Directory - Server"
 * - Restrict key → API restrictions → Select APIs:
 *   ✓ Places API
 *   ✓ Maps JavaScript API
 * - No application restrictions needed
 * 
 * CLIENT KEY (for Maps JavaScript):
 * - Name: "MPLS Vegan Directory - Client"
 * - Restrict key → API restrictions → Select APIs:
 *   ✓ Maps JavaScript API
 * - Application restrictions → HTTP referrers:
 *   - https://mplsvegan.com/*
 *   - https://*.vercel.app/*
 *   - http://localhost:*
 * 
 * 4. Copy the keys and add to .env.local:
 *    GOOGLE_PLACES_API_KEY=<server-key>
 *    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=<client-key>
 */

console.log(`
🗺️  Google Maps & Places API Setup
=====================================

Follow these steps:

1. Open: https://console.cloud.google.com/apis/credentials?project=botti-analytics

2. Create SERVER KEY:
   - Click "CREATE CREDENTIALS" → "API key"
   - Click "RESTRICT KEY"
   - Name: "MPLS Vegan Directory - Server"
   - API restrictions → Restrict key → Select:
     ✓ Places API
     ✓ Maps JavaScript API
   - Save

3. Create CLIENT KEY:
   - Click "CREATE CREDENTIALS" → "API key"
   - Click "RESTRICT KEY"
   - Name: "MPLS Vegan Directory - Client"
   - API restrictions → Restrict key → Select:
     ✓ Maps JavaScript API
   - Application restrictions → HTTP referrers → Add:
     • https://mplsvegan.com/*
     • https://*.vercel.app/*
     • http://localhost:*
   - Save

4. Add to .env.local:
   GOOGLE_PLACES_API_KEY=<server-key>
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=<client-key>

5. Restart dev server: npm run dev

=====================================
`);
