import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://mplsvegan.com'
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/restaurants',
    '/neighborhoods',
    '/blog',
  ]

  const staticUrls = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'daily' : 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }))

  // TODO: Add dynamic restaurant pages when we have a data source
  // const restaurants = await getRestaurants()
  // const restaurantUrls = restaurants.map((r) => ({
  //   url: `${baseUrl}/restaurants/${r.slug}`,
  //   lastModified: new Date(r.updatedAt),
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.7,
  // }))

  return [...staticUrls]
}
