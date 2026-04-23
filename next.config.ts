import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for easy Vercel deployment
  output: 'standalone',

  // No trailing slashes
  trailingSlash: false,
  
  // Image optimization
  images: {
    domains: [
      'maps.googleapis.com',
      'source.unsplash.com',
      'images.unsplash.com',
    ],
    unoptimized: false,
  },
  
  // Environment variables that should be available on the client
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://mplsvegan.com',
  },
  
// Redirects for canonical consolidation
  async redirects() {
    return [
      {
        source: '/blog/vegan-pizza-minneapolis',
        destination: '/blog/best-vegan-pizza-minneapolis',
        permanent: true,
      },
      // 301 redirects for old URL structure → new /restaurants/slug paths
      {
        source: '/wok-in-the-park-minneapolis',
        destination: '/restaurants/wok-in-the-park',
        permanent: true
      },
      {
        source: '/world-street-kitchen-minneapolis',
        destination: '/restaurants/world-street-kitchen',
        permanent: true
      },
      {
        source: '/common-roots-cafe-minneapolis',
        destination: '/restaurants/common-roots-cafe',
        permanent: true
      },
      // Dead blog URL → closest live equivalent (vegan comfort food covers mac & cheese)
      {
        source: '/best-vegan-mac-and-cheese-minneapolis',
        destination: '/blog/vegan-comfort-food-minneapolis',
        permanent: true
      },
      // 301 redirects for closed restaurants → main directory
      { source: '/restaurants/foxy-falafel', destination: '/restaurants', permanent: true },
      { source: '/restaurants/seed-cafe', destination: '/restaurants', permanent: true },
      { source: '/restaurants/crepe-and-spoon', destination: '/restaurants', permanent: true },
      { source: '/restaurants/the-dripping-root', destination: '/restaurants', permanent: true },
      { source: '/restaurants/peninsula-malaysian', destination: '/restaurants', permanent: true },
      { source: '/restaurants/red-cow', destination: '/restaurants', permanent: true },
      { source: '/restaurants/tori-ramen', destination: '/restaurants', permanent: true },
      { source: '/restaurants/gandhi-mahal', destination: '/restaurants', permanent: true },
      { source: '/restaurants/trio-plant-based', destination: '/restaurants', permanent: true },
    ];
  },

  // Headers for security and caching
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
        ],
      },
      {
        source: '/:path*',
        has: [{ type: 'query', key: '_rsc' }],
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
      },
    ];
  },
};

export default nextConfig;
