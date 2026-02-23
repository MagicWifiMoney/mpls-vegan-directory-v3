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
