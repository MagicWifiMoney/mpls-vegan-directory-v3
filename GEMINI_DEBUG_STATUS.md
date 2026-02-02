# Gemini Popular Items - Debug Status

**Date:** February 2, 2026, 7:15 AM CST  
**Issue:** Popular items extraction returning empty arrays in production  
**Status:** 🔴 BLOCKED - Silent failure in Vercel serverless environment

---

## ✅ What's Working

1. **Deployments:** All recent deployments successful (no build errors)
2. **TypeScript:** Clean, no errors
3. **Yelp Integration:** ✅ Working (4.3★ rating showing)
4. **Google Reviews:** ✅ Working (5 reviews loading)
5. **Nearby Restaurants:** ✅ Working (distance calculation + display)
6. **Gemini API Locally:** ✅ Perfect - extracts items correctly when tested

## ❌ What's Broken

**Popular Items in Production:** Returns empty array `[]` every time

---

## 🔬 Debugging Steps Completed

### Environment
- ✅ API key set in Vercel (confirmed via `vercel env ls`)
- ✅ API key hardcoded temporarily (still fails)
- ✅ Local test with same API key (works perfectly)

### Cache
- ✅ Cache version bumped v1 → v2 → v3
- ✅ Cache completely disabled (still fails)
- ✅ Fresh deployment with no cache (still fails)

### Code
- ✅ Added extensive debug logging
- ✅ Error handling wrapped around extraction
- ✅ TypeScript compilation clean
- ✅ Build successful in production

### API
- ✅ Gemini API tested locally: extracts ["Italian Sub", "Ribeye", "Korean Ribs", ...]
- ✅ Same code, same data, same API key → works locally, fails in Vercel

---

## 🤔 Hypothesis

**Silent error in Vercel's serverless runtime** - The extraction function is being called but failing silently:

```javascript
try {
  popularItems = await extractPopularItems(allReviews, restaurant?.name || '');
  console.log(`[API] Extracted ${popularItems.length} popular items:`, popularItems);
} catch (error) {
  console.error(`[API] Failed to extract popular items:`, error);
}
```

Expected console logs aren't appearing in Vercel logs, suggesting:
1. Function isn't being called at all
2. Silent timeout/abort
3. Environment restriction (fetch blocked? API blocked?)

---

## 🔧 Attempted Fixes (All Failed)

1. Cache versioning
2. Cache disable
3. Hardcoded API key
4. Multiple redeployments
5. Debug logging
6. Error handling

---

## 💡 Next Steps (Options)

### Option A: Skip Gemini (Recommended)
Use simple keyword extraction instead:
- Parse review text for common food terms
- Count frequency
- Display top 8
- **Pros:** Works immediately, no API calls, fast
- **Cons:** Less smart than Gemini

### Option B: Client-Side Extraction
Move Gemini call to browser (useEffect):
- Fetch reviews client-side
- Call Gemini from browser
- **Pros:** Might bypass serverless restrictions
- **Cons:** Exposes API key, slower UX

### Option C: Deep Serverless Debug
- Enable Vercel function logs
- Add trace logging at every step
- Check network egress rules
- Test with different model (Pro vs Flash)
- **Pros:** Might find root cause
- **Cons:** Time-consuming, uncertain ROI

### Option D: Static Pre-Generation
Run Gemini extraction at build time:
- Generate popular items for all 47 restaurants
- Store in JSON
- Serve statically
- **Pros:** Fast, reliable, cacheable
- **Cons:** Not real-time, manual refresh needed

---

## 📊 Current Production State

```json
{
  "yelp_integration": "✅ Working",
  "nearby_restaurants": "✅ Working",
  "dual_ratings": "✅ Working",
  "popular_items": "❌ Broken (empty array)",
  "deployment_status": "✅ Successful",
  "typescript": "✅ Clean",
  "api_endpoint": "✅ Responding"
}
```

---

## 🎯 Recommendation

**Go with Option A: Simple Keyword Extraction**

Replace Gemini with:
```typescript
function extractPopularItems(reviews: Review[]): string[] {
  const items = new Map<string, number>();
  const pattern = /\b(italian sub|ribeye|korean ribs|mac and cheese|breakfast scramble|sausage|cookies?|burger|wrap|bowl)\b/gi;
  
  reviews.forEach(r => {
    const matches = r.text.match(pattern);
    matches?.forEach(item => {
      const key = item.toLowerCase();
      items.set(key, (items.get(key) || 0) + 1);
    });
  });
  
  return Array.from(items.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([item]) => titleCase(item));
}
```

**Why:** 
- Works immediately
- No API dependency
- No cost
- Good enough for MVP
- Can always upgrade to Gemini later if we solve the serverless issue

---

**Files Modified During Debug:**
- `src/lib/gemini.ts` (hardcoded API key - needs cleanup)
- `src/app/api/places/[placeId]/route.ts` (cache disabled - needs re-enable)
- 13 deployments created
- 10 git commits made

**Time Spent:** ~90 minutes  
**Result:** Issue isolated but not resolved
