# Google Maps & Places API Setup

## Quick Setup (5 minutes)

### Step 1: Create API Keys

Open this link (already logged in as botti-analytics):
👉 **https://console.cloud.google.com/apis/credentials?project=botti-analytics**

###  Step 2: Create SERVER Key

1. Click **"CREATE CREDENTIALS"** → **"API key"**
2. Copy the key somewhere temporarily
3. Click **"RESTRICT KEY"**
4. **Display name:** `MPLS Vegan Directory - Server`
5. **API restrictions** → Restrict key → Select these APIs:
   - ✅ Places API (New)
   - ✅ Maps JavaScript API
6. Click **SAVE**
7. **Copy the key** → Add to `.env.local` as `GOOGLE_PLACES_API_KEY`

### Step 3: Create CLIENT Key

1. Click **"CREATE CREDENTIALS"** → **"API key"**
2. Copy the key somewhere temporarily
3. Click **"RESTRICT KEY"**
4. **Display name:** `MPLS Vegan Directory - Client`
5. **Application restrictions** → HTTP referrers (web sites) → Add these:
   ```
   https://mplsvegan.com/*
   https://*.vercel.app/*
   http://localhost:*
   ```
6. **API restrictions** → Restrict key → Select:
   - ✅ Maps JavaScript API
7. Click **SAVE**
8. **Copy the key** → Add to `.env.local` as `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`

### Step 4: Update .env.local

Add these lines to `/home/ec2-user/clawd/projects/mpls-vegan-directory-v3/.env.local`:

```bash
GOOGLE_PLACES_API_KEY=<paste-server-key-here>
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=<paste-client-key-here>
```

### Step 5: Deploy to Vercel

```bash
cd /home/ec2-user/clawd/projects/mpls-vegan-directory-v3
vercel env add GOOGLE_PLACES_API_KEY production
# Paste server key when prompted
vercel env add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY production
# Paste client key when prompted
vercel --prod
```

## What This Enables

✅ **Real-time restaurant data:**
- Google ratings & review counts
- Current hours (with "Open Now" status)
- Phone numbers & directions links
- Restaurant photos

✅ **Better SEO:**
- LocalBusiness schema with real ratings
- Up-to-date information
- Rich snippets in search results

✅ **User trust:**
- Live data directly from Google
- No outdated info
- Direct Google Maps integration

## Testing Locally

```bash
cd /home/ec2-user/clawd/projects/mpls-vegan-directory-v3
npm run dev
```

Visit http://localhost:3000 - restaurant cards should now show:
- ⭐ Google ratings
- 🕐 Current hours
- 📍 "Get Directions" links
- 📸 Restaurant photos

## API Costs

- **Free tier:** 28,500 requests/month
- **Our usage:** ~50 restaurants × 30 days = 1,500 requests/month
- **Cost:** FREE (well under limit)

## Already Enabled APIs

✅ Places API (New)
✅ Maps JavaScript API  
✅ Geocoding API

No additional setup needed!
