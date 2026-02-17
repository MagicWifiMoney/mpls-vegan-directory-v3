import { MetadataRoute } from 'next'
import { restaurants, neighborhoods } from '@/data/restaurants'
import { blogPosts } from '@/data/blog-posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mplsvegan.com'
  const siteLastUpdated = new Date('2026-02-17')

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: siteLastUpdated,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/restaurants`,
      lastModified: siteLastUpdated,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/guide`,
      lastModified: siteLastUpdated,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: siteLastUpdated,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: siteLastUpdated,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/neighborhoods`,
      lastModified: siteLastUpdated,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: siteLastUpdated,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: siteLastUpdated,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/llm.txt`,
      lastModified: siteLastUpdated,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ]

  // Dynamic blog post pages (HIGH PRIORITY - keyword-rich long-form content)
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  // Dynamic restaurant pages
  const restaurantPages: MetadataRoute.Sitemap = restaurants.map((restaurant) => ({
    url: `${baseUrl}/restaurants/${restaurant.slug}`,
    lastModified: siteLastUpdated,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Dynamic neighborhood pages
  const neighborhoodPages: MetadataRoute.Sitemap = neighborhoods.map((neighborhood) => ({
    url: `${baseUrl}/neighborhoods/${neighborhood.slug}`,
    lastModified: siteLastUpdated,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Dynamic cuisine pages (pSEO)
  const cuisineSlugs = new Set<string>();
  restaurants.forEach((r) => {
    r.cuisineType.forEach((c) => {
      cuisineSlugs.add(c.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''));
    });
  });
  const cuisinePages: MetadataRoute.Sitemap = Array.from(cuisineSlugs).map((slug) => ({
    url: `${baseUrl}/restaurants/cuisine/${slug}`,
    lastModified: siteLastUpdated,
    changeFrequency: 'weekly' as const,
    priority: 0.65,
  }));

  return [...staticPages, ...blogPages, ...restaurantPages, ...neighborhoodPages, ...cuisinePages]
}
