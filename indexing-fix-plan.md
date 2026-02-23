# MPLS Vegan GSC Indexing Fix Plan

**Date:** 2026-02-23  
**Issue:** 125 "Discovered – currently not indexed" pages in Google Search Console  
**Site:** mplsvegan.com (Next.js on Vercel, SSG)

## Root Cause Analysis

### Why 125 pages?
The 125 discovered-but-not-indexed pages come from multiple overlapping issues:

| Source | Est. Count | Issue |
|--------|-----------|-------|
| Blog posts missing from sitemap | 19 | `sitemap.ts` doesn't include blog posts at all |
| `?_rsc=` param variants | ~82 | Next.js RSC flight data URLs discovered via internal prefetch links |
| Duplicate restaurant entries | 2 | `glam-doll-donuts` and `lutunjis-palate` appear twice in data |
| Trailing slash variants | ~20+ | `/restaurants/foo/` → 308 → `/restaurants/foo` (Google discovers both) |
| **Total estimated** | **~123** | Matches the reported 125 |

### Detailed Findings

1. **Blog posts not in sitemap** — The site has 19 blog posts (in `src/data/blog-posts.ts`) with routes at `/blog/[slug]`, but `sitemap.ts` only generates entries for restaurants, neighborhoods, and static pages. Google discovers these via internal links but they're not in the sitemap, causing a crawl/index mismatch.

2. **RSC query parameter variants** — Next.js App Router uses `?_rsc=` query parameters for React Server Component data fetching. The `vary` header includes `rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch`, which tells Google these are different representations of the same URL. Google discovers these variant URLs through the prefetch mechanism in the HTML but correctly decides not to index them — they show as "discovered but not indexed."

3. **Duplicate restaurant data** — `glam-doll-donuts` and `lutunjis-palate` appear twice in the restaurants array in `src/data/restaurants.ts`, causing duplicate sitemap entries.

4. **Canonical tags** — ✅ Correctly set (e.g., `<link rel="canonical" href="https://mplsvegan.com/restaurants/herbivorous-butcher"/>`)

5. **Trailing slashes** — ✅ Vercel returns 308 redirect from `/path/` to `/path` (correct behavior)

6. **robots.txt** — Wide open (`Allow: /`), no blocking of `/_next/` or query params

## Fix Plan

### Priority 1: Add blog posts to sitemap (HIGH IMPACT)
**File:** `src/app/sitemap.ts`

Add blog post entries to the sitemap generator:

```typescript
import { blogPosts } from '@/data/blog-posts'

// Add inside sitemap() function:
const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
  url: `${baseUrl}/blog/${post.slug}`,
  lastModified: new Date(post.updatedAt),
  changeFrequency: 'monthly' as const,
  priority: 0.6,
}))

return [...staticPages, ...restaurantPages, ...neighborhoodPages, ...blogPages]
```

### Priority 2: Deduplicate restaurant data (MEDIUM)
**File:** `src/data/restaurants.ts`

Remove the duplicate entries for `glam-doll-donuts` and `lutunjis-palate`. The sitemap generator iterates the full array, so duplicates produce duplicate `<url>` entries.

### Priority 3: Block RSC query params in robots.txt (HIGH IMPACT)
**File:** `public/robots.txt`

Add rules to prevent Googlebot from crawling RSC flight data URLs:

```
User-agent: *
Allow: /
Disallow: /*?_rsc=*
Disallow: /*?__flight__*
Disallow: /_next/

# Keep existing AI crawler rules...
```

### Priority 4: Add `x-robots-tag` header for RSC responses (DEFENSE IN DEPTH)
**File:** `next.config.ts`

Add a header rule that tags RSC responses as noindex:

```typescript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        { key: 'X-DNS-Prefetch-Control', value: 'on' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      ],
    },
    // Prevent indexing of RSC flight data
    {
      source: '/:path*',
      has: [{ type: 'query', key: '_rsc' }],
      headers: [
        { key: 'X-Robots-Tag', value: 'noindex' },
      ],
    },
  ];
},
```

### Priority 5: Set `trailingSlash: false` explicitly (LOW — already working)
**File:** `next.config.ts`

Already defaults to false on Vercel, but making it explicit prevents future confusion:

```typescript
const nextConfig: NextConfig = {
  trailingSlash: false,
  // ...rest
};
```

## Implementation Order

1. ✅ Fix `sitemap.ts` — add blog posts, deduplicate (deploy)
2. ✅ Fix `restaurants.ts` — remove 2 duplicate entries (same deploy)
3. ✅ Update `robots.txt` — block `?_rsc=` and `/_next/` (same deploy)
4. ✅ Add RSC header rules to `next.config.ts` (same deploy)
5. After deploy: Resubmit sitemap in GSC
6. After deploy: Request indexing for the 19 blog post URLs
7. Wait 1-2 weeks for Google to recrawl and reprocess

## Expected Outcome

- **Before:** 84 sitemap URLs, 125 discovered-not-indexed
- **After:** ~103 sitemap URLs (84 - 2 dupes + 19 blogs + 2 new = 103), discovered-not-indexed should drop to near 0 over 2-4 weeks as Google stops discovering RSC variants and indexes the blog posts

## Verification Checklist

- [ ] Sitemap at `/sitemap.xml` includes all blog posts
- [ ] No duplicate URLs in sitemap
- [ ] robots.txt blocks `?_rsc=` params
- [ ] `curl -I 'https://mplsvegan.com/restaurants/herbivorous-butcher?_rsc=1'` returns `X-Robots-Tag: noindex`
- [ ] Blog post pages have correct canonical tags
- [ ] GSC sitemap resubmitted
- [ ] Monitor "Discovered – currently not indexed" count weekly
