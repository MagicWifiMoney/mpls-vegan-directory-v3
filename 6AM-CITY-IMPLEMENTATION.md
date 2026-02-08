# 6AM City Model Implementation for mplsvegan.com
**Sprint: February 8-15, 2026**

---

## 🎯 Goal
Transform mplsvegan.com into a 6AM City-style local vegan media brand with:
- Newsletter-first growth strategy
- Curated editorial content
- Affiliate monetization
- Community engagement

---

## ✅ What We Already Have
- [x] Restaurant directory with 40+ listings
- [x] Neighborhood pages with filtering
- [x] Newsletter signup component
- [x] Beehiiv API integration (needs credentials)
- [x] Beautiful dark theme design
- [x] Blog section
- [x] Restaurant detail pages with "What to Order" recommendations

---

## 🔧 Implementation Checklist

### Phase 1: Core Features (Tonight)

#### 1. FAQ Section with Schema ✅
- [ ] Create `/src/app/faq/page.tsx`
- [ ] Add FAQ schema markup
- [ ] Include 8-10 common questions
- [ ] Link from footer and homepage

#### 2. 6AM City-Style Category Guide ✅
- [ ] Create `/src/app/guide/page.tsx`
- [ ] Emoji categories: 🍳 Brunch, 🌮 Mexican, 🍔 Comfort, 🍣 Date Night, 🧁 Desserts, 🍕 Pizza
- [ ] "Try This" recommendations per restaurant
- [ ] Editorial voice (not just listings)

#### 3. Last Updated Timestamps ✅
- [ ] Add to layout.tsx footer
- [ ] Add to individual restaurant pages
- [ ] Dynamic date based on data updates

#### 4. Enhanced Homepage ✅
- [ ] Add category quick-links with emojis
- [ ] Featured "Staff Pick" restaurant
- [ ] "New This Week" section
- [ ] Improve newsletter CTA copy

### Phase 2: Newsletter Growth (This Week)

#### 5. Beehiiv Integration ✅
- [ ] Get API credentials from Jake
- [ ] Add to Vercel env vars
- [ ] Test subscription flow
- [ ] Set up welcome email

#### 6. Lead Magnet Landing Page ✅
- [ ] Create `/src/app/guide/download/page.tsx`
- [ ] "Free Minneapolis Vegan Dining Guide" PDF
- [ ] Email gate with Beehiiv integration
- [ ] Thank you page with guide download

#### 7. Pop-up/Banner for Email Capture ✅
- [ ] Exit-intent popup component
- [ ] First-visit trigger
- [ ] "Join 1,000+ Minneapolis vegans" copy
- [ ] Cookie to prevent repeat shows

### Phase 3: SEO & Content (This Week)

#### 8. Neighborhood SEO Pages ✅
- [ ] Enhance `/neighborhoods/[slug]` with:
  - Rich descriptions
  - FAQ section per neighborhood
  - "Best for" recommendations
  - Map integration

#### 9. Schema Markup ✅
- [ ] Restaurant schema on detail pages
- [ ] LocalBusiness schema
- [ ] FAQ schema
- [ ] BreadcrumbList schema

#### 10. Sitemap Enhancement ✅
- [ ] Add all restaurant pages
- [ ] Add all neighborhood pages
- [ ] Add blog posts
- [ ] Priority weighting

### Phase 4: Monetization Setup (Next Week)

#### 11. Affiliate Links Section ✅
- [ ] "Cook at Home" section on homepage
- [ ] Amazon Associates links
- [ ] Kitchen tool recommendations
- [ ] Cookbook suggestions

#### 12. Sponsored Listing Infrastructure ✅
- [ ] "Featured" flag in restaurant data
- [ ] Sponsored badge component
- [ ] Featured placement on homepage

---

## 📁 New Files to Create

```
src/app/
├── faq/
│   └── page.tsx           # FAQ page with schema
├── guide/
│   ├── page.tsx           # 6AM City-style category guide
│   └── download/
│       └── page.tsx       # Lead magnet landing page
├── components/
│   ├── FAQSection.tsx     # Reusable FAQ accordion
│   ├── CategoryCard.tsx   # Emoji category cards
│   ├── StaffPick.tsx      # Featured restaurant highlight
│   ├── TryThis.tsx        # "Try This" recommendation badge
│   └── ExitPopup.tsx      # Email capture popup
```

---

## 📊 Success Metrics

| Metric | Current | Target (30 days) |
|--------|---------|------------------|
| Newsletter subscribers | ~0 | 500+ |
| Weekly email opens | - | 40%+ |
| Organic traffic | ? | +50% |
| Avg session duration | ? | 3+ min |
| Pages per session | ? | 2.5+ |

---

## 🚀 Deployment Checklist

1. [ ] Add BEEHIIV_API_KEY to Vercel
2. [ ] Add BEEHIIV_PUBLICATION_ID to Vercel
3. [ ] Create PDF lead magnet
4. [ ] Test all forms
5. [ ] Verify schema in Google Rich Results
6. [ ] Submit updated sitemap to GSC
7. [ ] Set up email welcome sequence in Beehiiv

---

## 📝 Content Needed

### FAQ Content (8 questions)
1. "Is Minneapolis good for vegans?"
2. "How many vegan restaurants are in Minneapolis?"
3. "What's the best vegan brunch in Minneapolis?"
4. "Where can I find vegan comfort food in Minneapolis?"
5. "Are there vegan-friendly restaurants in Saint Paul?"
6. "What neighborhoods have the most vegan options?"
7. "Where can I get vegan pizza in Minneapolis?"
8. "What's the best vegan date night restaurant?"

### Category Guide Content (6 categories)
1. 🍳 **Brunch Bunch** - Weekend morning favorites
2. 🌮 **Taco Tuesday** - Mexican & Tex-Mex
3. 🍔 **Comfort Cravings** - Burgers, wings, comfort food
4. 🍣 **Date Night** - Upscale & romantic
5. 🧁 **Sweet Treats** - Bakeries & desserts
6. 🍕 **Pizza Party** - Vegan pizza spots

---

*Implementation started: Feb 8, 2026*
