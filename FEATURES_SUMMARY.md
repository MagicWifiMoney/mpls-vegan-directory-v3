# Minneapolis Vegan Directory - New Features Summary

**Date:** February 2, 2026
**Deployment:** https://mplsvegan.com

## ✅ Implemented Features

### 1. **Yelp Integration** 
- ✅ Dual rating display (Google + Yelp side-by-side)
- ✅ Yelp rating: 4.3★ (250 reviews) for Herbivorous Butcher
- ✅ Yelp branding with "View on Yelp" button
- ✅ Combined photo gallery (10 Google + 5 Yelp photos = 15 total)
- ⚠️ **Note:** Yelp API doesn't provide review text (API limitation). Only ratings/counts available.

**Environment Variables Added:**
- `YELP_API_KEY` ✅ Set in production

### 2. **AI-Powered Popular Items** 🔥
- ✅ Gemini 2.5 Flash analyzes all Google reviews
- ✅ Extracts 6-10 specific menu items (e.g., "Italian Sub", "Korean Ribs")
- ✅ Displays as badge chips above reviews
- ✅ 24-hour cache to stay within free API tier

**Environment Variables Added:**
- `GOOGLE_GENERATIVE_AI_API_KEY` ✅ Set in production

**Current Status:** Debugging in progress (added logging to trace extraction flow)

### 3. **Nearby Restaurants Widget** 🌱
- ✅ Shows 3 closest vegan restaurants
- ✅ Haversine formula calculates distance in miles
- ✅ Displays distance badge, rating, and cuisine type
- ✅ Clickable cards link to restaurant pages
- ✅ Lazy-loaded (below the fold optimization)

## 📁 Files Created/Modified

### New Files
- `src/lib/gemini.ts` - Gemini AI integration
- `src/lib/yelp.ts` - Yelp Fusion API client
- `src/components/NearbyRestaurants.tsx` - Distance-based widget
- `src/components/ReviewTabs.tsx` - Combined review display

### Modified Files
- `src/app/api/places/[placeId]/route.ts` - Added Yelp + Gemini calls
- `src/components/RestaurantDetail.tsx` - Integrated new components
- `.env.local` - Added API keys
- Vercel environment variables - Production keys configured

## 🔧 Technical Details

### API Rate Limits
- **Google Places:** 28,500 requests/month (free tier) ✅
- **Yelp Fusion:** 500 requests/day (free tier) ✅
- **Gemini 2.5 Flash:** 15 RPM, 1M TPM (free tier) ✅
- **24-hour cache** implemented to stay well within limits

### Cache Strategy
- In-memory Map cache at API route level
- 24-hour TTL
- Invalidates on new deployments
- Cache-Control headers set for CDN caching

### Distance Calculation
```javascript
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 3959; // Earth's radius in miles
  // Haversine formula implementation
}
```

## 🚀 Deployment History
1. **Initial Yelp deployment** - Failed (missing YELP_API_KEY)
2. **API key added** - Deployed successfully
3. **Gemini integration** - TypeScript errors fixed
4. **NearbyRestaurants** - Props fixed for Restaurant type
5. **Debug logging added** - Current deployment

## 📊 Example API Response
```json
{
  "rating": 4.7,
  "userRatingsTotal": 652,
  "reviews": [...], // 5 Google reviews
  "popularItems": ["Italian Sub", "Korean Ribs", "Ribeye", ...],
  "yelp": {
    "rating": 4.3,
    "reviewCount": 250,
    "photos": [...], // 5 Yelp photos
    "yelpUrl": "https://www.yelp.com/biz/...",
    "openNow": false
  }
}
```

## 🐛 Known Issues / In Progress
- [ ] Popular items returning empty array (debugging with console logs)
- [ ] Need to verify Gemini API key accessible in serverless runtime
- [ ] Consider adding user-generated popular items if Gemini fails

## 🎯 Next Steps
1. Complete Gemini debugging
2. Test on multiple restaurants
3. Consider SEO optimization
4. Email list building strategy
5. Social media integration
