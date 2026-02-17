import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/demo/', '/guide/download/'],
      },
      // Explicitly allow AI search engine crawlers
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/api/', '/demo/'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
      },
      {
        userAgent: 'cohere-ai',
        allow: '/',
      },
    ],
    sitemap: 'https://mplsvegan.com/sitemap.xml',
    // AI context file: https://mplsvegan.com/llm.txt
  }
}
