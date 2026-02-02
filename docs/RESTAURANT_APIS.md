# Restaurant API Options

Comparison of APIs that could enhance the Minneapolis Vegan Directory.

---

## 🟢 Currently Using

### Google Places API ✅
**Status:** Integrated & Working

**What we get:**
- ⭐ Ratings & review counts
- 🕐 Hours (live updates)
- 📸 10 photos per restaurant
- 📝 Reviews (top 5)
- 📍 Coordinates & directions

**Cost:** FREE (under 28,500 requests/month)
**Quality:** ★★★★★ (Best overall coverage)

---

## 🔵 Top Alternatives to Add

### 1. Yelp Fusion API (Yelp Places API)
**URL:** https://docs.developer.yelp.com/docs/places-intro

**What it offers:**
- ⭐ Ratings & review counts
- 📝 Full review text (3 reviews per business)
- 📸 Photos (high quality)
- 💰 Price level ($ - $$$$)
- 🍽️ Categories & cuisines
- ⏰ Hours
- 🎯 "Popular times" data

**Pros:**
- Huge user base (more reviews than Google)
- Detailed restaurant attributes
- Photo quality is excellent
- Strong in US markets

**Cons:**
- Rate limits: 500 calls/day (free tier)
- Display requirements (must show Yelp branding)
- Reviews limited to 3 per business

**Cost:** FREE (100 calls/day, 25,000/month)
**Quality:** ★★★★☆

**Use case for us:**
- Pull Yelp ratings alongside Google
- Show "4.7 on Google, 4.5 on Yelp"
- Get more photo variety
- More detailed review coverage

---

### 2. Foursquare Places API
**URL:** https://location.foursquare.com/places/

**What it offers:**
- ⭐ Ratings & tips
- 📝 User "tips" (short reviews)
- 📸 Photos
- 🏷️ Menu items (for some restaurants)
- 🔥 "Trending" data
- ☕ Venue attributes (wifi, outdoor seating, etc.)

**Pros:**
- Good international coverage
- Menu items data is unique
- "Tips" are more casual/authentic
- Venue attributes very detailed

**Cons:**
- Smaller user base than Google/Yelp
- Rate limits can be restrictive
- Less review depth

**Cost:** FREE tier available (up to 100k calls/month)
**Quality:** ★★★☆☆

**Use case for us:**
- Menu items (if available)
- Venue features (outdoor seating, etc.)
- Alternative "tips" vs formal reviews

---

### 3. HappyCow (No Public API)
**Status:** NO PUBLIC API ❌

**What they have:**
- Vegan/vegetarian specific database
- User reviews focused on plant-based quality
- "Veg level" ratings (100% vegan vs vegan options)

**Reality:**
- No official API available
- Would need to scrape (against ToS)
- Data is valuable but not accessible programmatically

**Alternative:**
- Manual data entry from HappyCow
- User submission form for "HappyCow rating"
- Community-sourced vegan ratings

---

### 4. TripAdvisor API
**Status:** RESTRICTED

**What it offers:**
- Massive review database
- Traveler-focused reviews
- Photos from travelers

**Cons:**
- API is restricted to partners
- Difficult to get API access
- Primarily for booking/travel platforms

**Cost:** Not publicly available
**Quality:** ★★★★☆
**Verdict:** Not worth pursuing

---

### 5. OpenTable API
**URL:** Limited public API

**What it offers:**
- Reservation availability
- Restaurant inventory
- Seating times

**Pros:**
- Reservation integration would be valuable

**Cons:**
- API access requires partnership
- Primarily for reservation platforms
- Not useful for vegan-specific content

**Verdict:** Skip unless we want reservations

---

### 6. Zomato API (DEPRECATED)
**Status:** API shut down in 2022 ❌

Previously good for restaurant data, no longer available.

---

## 🎯 Recommendations for MPLS Vegan Directory

### Priority 1: Add Yelp ⭐
**Why:**
- Complements Google perfectly
- More reviews = more credibility
- Yelp has strong Minneapolis coverage
- Easy to integrate (similar to Google Places)

**Implementation:**
```javascript
// Show dual ratings
Google: 4.7 ⭐ (652 reviews)
Yelp:   4.5 ⭐ (431 reviews)
```

**Free tier:** 100 calls/day = enough for 47 restaurants (with 24hr cache)

---

### Priority 2: Foursquare (Maybe)
**Why:**
- Menu items would be unique
- Venue attributes (outdoor seating, wifi, etc.)
- Different perspective than Google/Yelp

**Consideration:**
- Less impactful than Yelp
- Only add if we want menu data

---

### Priority 3: Community Ratings
**Why:**
- HappyCow has no API
- But vegan-specific ratings are valuable

**Solution:**
- Add "Vegan Score" from community
- User submission form
- Manual curation from HappyCow research

---

## 📊 Comparison Matrix

| API | Free Tier | Reviews | Photos | Hours | Menu | Vegan Focus |
|-----|-----------|---------|--------|-------|------|-------------|
| Google Places | ✅ 28.5k/mo | ✅ Yes | ✅ 10+ | ✅ Live | ❌ No | ❌ No |
| Yelp | ✅ 100/day | ✅ 3 per | ✅ Yes | ✅ Yes | ❌ No | ❌ No |
| Foursquare | ✅ 100k/mo | ✅ Tips | ✅ Yes | ✅ Yes | ✅ Some | ❌ No |
| HappyCow | ❌ None | ✅ Yes | ✅ Yes | ❌ No | ❌ No | ✅ YES |

---

## 💰 Cost Analysis

**Current (Google only):**
- $0/month (under free tier)

**With Yelp added:**
- $0/month (under free tier)
- 47 restaurants × 1 call each = 47 calls/day
- Well under 500/day limit

**With Yelp + Foursquare:**
- $0/month (both under free tiers)

---

## 🚀 Implementation Priority

1. **Yelp Fusion API** - Do this first
   - Most impact
   - Easy integration
   - Free tier sufficient
   
2. **Community Vegan Ratings** - Custom solution
   - Fill the HappyCow gap
   - User-generated content
   - Manual curation
   
3. **Foursquare** - Optional
   - Only if we want menu items
   - Lower priority

---

## Next Steps

Want me to integrate Yelp? I can:
1. Get API key
2. Add Yelp data fetching
3. Display dual ratings (Google + Yelp)
4. Show Yelp reviews alongside Google
5. Pull Yelp photos

Takes ~30 minutes to implement.
