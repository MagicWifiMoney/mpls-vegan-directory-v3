# Yelp API Setup Guide

Quick 5-minute setup to add Yelp ratings & reviews to all restaurants.

---

## Step 1: Create Yelp App

1. **Go to:** https://www.yelp.com/developers/v3/manage_app

2. **Sign in** with your Yelp account (or create one)

3. **Click "Create New App"**

4. **Fill out the form:**
   - **App Name:** `Minneapolis Vegan Directory`
   - **Industry:** Food & Dining
   - **Company:** Magic Wifi Money (or your company name)
   - **Contact Email:** jake.giebel@gmail.com
   - **Description:** 
     ```
     Vegan and plant-based restaurant directory for Minneapolis and St. Paul, Minnesota. 
     Displaying restaurant information including ratings, reviews, and photos to help 
     users discover vegan dining options.
     ```
   - **Website (optional):** https://mplsvegan.com

5. **Click "Create New App"**

---

## Step 2: Get Your API Key

1. After creating the app, you'll see your **API Key** displayed

2. **Copy the API Key** (starts with something like: `ABC123...`)

---

## Step 3: Add to Environment Variables

### For Local Development:

1. Open `/home/ec2-user/clawd/projects/mpls-vegan-directory-v3/.env.local`

2. Add this line:
   ```
   YELP_API_KEY=paste_your_key_here
   ```

### For Vercel Production:

Run these commands:
```bash
cd /home/ec2-user/clawd/projects/mpls-vegan-directory-v3

# Add Yelp API key to production
echo 'YOUR_YELP_API_KEY_HERE' | vercel env add YELP_API_KEY production
```

---

## Step 4: Deploy

```bash
cd /home/ec2-user/clawd/projects/mpls-vegan-directory-v3
git add -A
git commit -m "Add Yelp API integration"
git push origin master
vercel --prod
```

---

## What You'll Get

After setup, every restaurant page will show:

✅ **Dual Ratings**
```
Google: 4.7 ⭐ (652 reviews)
Yelp:   4.5 ⭐ (431 reviews)
```

✅ **Combined Reviews**
- Google reviews (top 3)
- Yelp reviews (top 3)  
- Mix of perspectives from both platforms

✅ **More Photos**
- Google photos (10)
- Yelp photos (5)
- 15 total photos per restaurant

✅ **Yelp Badge**
- Professional "View on Yelp" button
- Proper attribution per Yelp API terms

---

## API Limits

- **Free Tier:** 500 API calls per day
- **Our Usage:** 47 restaurants = 47 calls per day (when cache expires)
- **Cache:** 24 hours (only calls API once per day per restaurant)
- **Cost:** **FREE** (well under limit)

---

## Troubleshooting

### "API key not configured"
- Make sure you added `YELP_API_KEY` to `.env.local`
- Restart dev server: `npm run dev`

### "No Yelp data found"
- Yelp search uses restaurant name + address
- Some restaurants may not be in Yelp's database
- This is normal - Google data will still show

### "Rate limit exceeded"
- Free tier: 500 calls/day
- Check if you're calling the API too frequently
- Our 24hr cache should prevent this

---

## Yelp API Terms

Per Yelp's API terms, we must:
- ✅ Display Yelp logo/attribution (we do this)
- ✅ Link back to Yelp business pages (we do this)
- ✅ Show "View on Yelp" button (we do this)
- ✅ Not cache data longer than 24 hours (we comply)

---

## Support

**Yelp API Docs:** https://docs.developer.yelp.com/  
**Support:** https://www.yelp-support.com/Yelp_Fusion_API

---

**Ready?** Go get that API key! 🚀
