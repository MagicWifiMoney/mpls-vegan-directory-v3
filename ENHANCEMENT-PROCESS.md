# Restaurant Enhancement Process

## What We're Creating
Enhanced restaurant pages with:
- Real customer quotes from 100 reviews
- Badge system (⭐ Top Pick / 🔥 Popular / ✨ Featured) based on actual mention counts
- 10 SEO-optimized highlighted reviews (keyword-rich)
- "What to Order" section with real pricing, nutrition, customer insights

## Step-by-Step Process

### 1. Scrape Reviews via Apify (~2-3 minutes per restaurant)
```bash
cd /home/ec2-user/clawd/projects/mpls-vegan-directory-v3
node scripts/apify-scrape-reviews.js "Restaurant Name" "slug-name"
```
- Uses Apify Google Maps scraper
- Fetches 100 reviews (vs Google API's 5-review limit)
- Cost: ~$0.05 per restaurant
- Saves raw reviews to `/tmp/[slug]-apify-reviews.json`

### 2. Process Reviews with Gemini (~30 seconds per restaurant)
```bash
node scripts/process-apify-reviews.js slug-name
```
**What it does:**
- Extracts dish mentions from all 100 reviews
- Counts frequency: 4+ mentions = Top Pick, 2-3 = Popular, 1 = Featured
- Scores reviews for SEO value:
  - +3 pts: Dish name mentions
  - +2 pts: Location keywords (Minneapolis, Twin Cities, Northeast, etc)
  - +1 pt: Experience keywords (vegan, plant-based, handcrafted, etc)
  - +2-3 pts: Length bonuses for detailed reviews
- Selects top 10 SEO-rich reviews (8-15 points each)
- Generates `enriched-data/[slug]-REAL-DATA.json`

### 3. Auto-Deploy
- Component automatically detects enhanced data via `enhancedRestaurantData` map
- No code changes needed - just commit the JSON file
- Push to GitHub → Vercel auto-deploys

## Badge Criteria (Based on 100 Reviews)
- ⭐ **Top Pick**: 4+ mentions (genuinely popular)
- 🔥 **Popular**: 2-3 mentions (regular favorite)
- ✨ **Featured**: 1 mention (notable item)

## SEO Review Selection
Prioritizes reviews with:
1. Multiple dish names mentioned
2. Location-specific keywords
3. Detailed experiences (not just "good food")
4. 100+ character length (substantial reviews)

Example high-scoring review:
> "Best vegan butcher in Minneapolis! The Korean BBQ ribs are absolutely incredible - I didn't expect plant-based meat to taste this authentic. Perfect texture and the marinade is spot on. My non-vegan friends were completely fooled. This place is a game-changer for anyone exploring plant-based eating in the Twin Cities."

**Score breakdown:** 
- Dish mentions (Korean BBQ ribs) = +3
- Location (Minneapolis, Twin Cities) = +4
- Experience keywords (vegan, plant-based) = +2
- Length bonus = +3
- **Total: 12 points**

## Batch Processing Script
```bash
node scripts/process-all-apify.js
```
- Reads list of restaurants to process
- Runs scrape + process for each
- Handles rate limiting
- Total time: ~4-5 minutes per restaurant

## Current Status
✅ **4 restaurants complete** (cost: $0.20)
- The Herbivorous Butcher
- J. Selby's
- Reverie Cafe + Bar
- Lulu EthioVegan

⏳ **43 restaurants remaining** (estimated cost: ~$2.15)

## Batching Strategy
To avoid overloading:
1. Process in groups of 10-15 restaurants
2. Deploy each batch before starting next
3. Monitor Apify credits and Gemini API usage
4. Total time: ~2-3 hours for all 43 (can run overnight)

## Files Structure
```
enriched-data/
  ├── herbivorous-butcher-REAL-DATA.json
  ├── j-selbys-REAL-DATA.json
  ├── reverie-cafe-bar-REAL-DATA.json
  └── lulu-ethiovegan-REAL-DATA.json

scripts/
  ├── apify-scrape-reviews.js (step 1: scrape)
  ├── process-apify-reviews.js (step 2: process)
  └── process-all-apify.js (batch runner)
```
