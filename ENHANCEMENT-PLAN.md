# Restaurant Page Enhancement Plan

## Jake's Requirements (Priority Order)

### 1. ✅ Layout Changes
- [x] Move "About" section right above main photo gallery
- [ ] Show only half description with "Continue Reading" button
- [ ] Collapsible/expandable UI

### 2. 🎯 Enhanced "What to Order" Section
Current: Simple list with brief descriptions
**New: Rich, data-driven recommendations**

For each dish:
- Dish name + expanded description
- Review excerpts mentioning this dish
- Photos of the dish (from Google/Yelp reviews)
- Star rating from reviews mentioning it
- Click to expand full details modal

**Data sources:**
- Google Reviews (scan for dish mentions)
- Yelp Reviews (scan for dish mentions)
- Google Photos tagged with food
- Menu photos from Google Places

### 3. 📸 Rich Media Gallery
**Current:** Single photo carousel
**New: Categorized galleries**

Categories:
- Food photos (pulled from reviews + place photos)
- Menu images (Google Places menu photos)
- Interior/Ambiance
- Exterior/Storefront

### 4. 🕐 Timing & Specials (SEO Gold)
**New sections to add:**

**"When to Go"**
- Busy times (from Google Popular Times API)
- Best times for quick service
- Weekend vs weekday tips

**"Special Offers"** (extracted from reviews)
- Happy hour mentions
- Lunch specials
- Daily deals
- Brunch pricing

**"Pro Tips"** (from review mining)
- Parking info
- Wait time expectations
- Reservation recommendations

### 5. 🔍 Additional SEO Enhancements

**Schema Markup:**
- Menu schema
- Offer schema  
- Review snippets
- FAQ schema (from common review questions)

**Content Sections:**
- "Popular Items" (from review frequency)
- "Vegetarian vs Vegan" clarity
- "Dietary Accommodations" (gluten-free, nut-free mentions)
- "Price Per Person" estimates

---

## Implementation Phases

### Phase 1: Layout & UX (30 min)
1. Reorder sections (Vibe → Best For → About with Read More → Photos → What to Order Enhanced)
2. Add collapsible About section
3. Improve mobile responsiveness

### Phase 2: Data Extraction (1 hour)
4. Build review mining script to extract:
   - Dish mentions with context
   - Special offer mentions
   - Timing recommendations
   - Common questions/answers

5. Categorize Google Photos:
   - Food vs interior vs menu
   - Using image labels or review context

### Phase 3: Enhanced UI Components (1 hour)
6. Build expandable "What to Order" cards
7. Add categorized photo galleries
8. Create "When to Go" visual timeline
9. Add "Specials" callout cards

### Phase 4: SEO & Schema (30 min)
10. Add Menu schema
11. Add Offer schema
12. Implement FAQ schema from reviews

---

## Quick Win Demo

Let me build a demo with The Herbivorous Butcher showing:
- Collapsible About
- Enhanced What to Order with review excerpts
- Menu photo gallery
- "When to Go" section

This will show the vision before scaling to all restaurants.

Want me to proceed with the demo?
