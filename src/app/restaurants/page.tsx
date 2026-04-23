import { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import { restaurants } from '@/data/restaurants';
import RestaurantDirectory from '@/components/RestaurantDirectory';

export const metadata: Metadata = {
  title: 'Twin Cities Vegan Restaurants Directory 2026 | 50+ Minneapolis & St. Paul Spots',
  description:
    'Browse 50+ vegan & plant-based restaurants across Minneapolis and St. Paul — the complete Twin Cities vegan restaurants directory. Filter by neighborhood, cuisine & price. Updated 2026.',
  alternates: {
    canonical: '/restaurants',
  },
  openGraph: {
    title: 'Twin Cities Vegan Restaurants Directory 2026 | 50+ Spots',
    description:
      'Browse 50+ vegan, vegetarian, and vegan-friendly restaurants in Minneapolis and Saint Paul. The complete Twin Cities vegan directory — filter by neighborhood, cuisine & price.',
    type: 'website',
    url: 'https://mplsvegan.com/restaurants',
    siteName: 'Minneapolis Vegan Directory',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Twin Cities Vegan Restaurants Directory 2026 | 50+ Spots',
    description: 'Browse 50+ vegan & plant-based restaurants in Minneapolis & St. Paul. Filter by neighborhood, cuisine & price. Updated 2026.',
  },
};

export default function RestaurantsPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-[#3d4a3d]/10 blur-[120px]" />
        <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-[#d4a574]/5 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 pt-32">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#f5f0e8]/50 hover:text-[#d4a574] transition-colors mb-12 group"
        >
          <svg
            className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to home
        </Link>

        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-12 h-px bg-gradient-to-r from-[#d4a574] to-transparent" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4a574]">Directory</span>
          </div>
          <h1 className="font-display text-5xl lg:text-6xl text-[#f5f0e8] tracking-tight mb-4">
            Vegan Restaurants in Minneapolis
          </h1>
          <p className="text-[#f5f0e8]/50 text-lg max-w-2xl">
            {restaurants.length} plant-based dining options across the Twin Cities — from 100% vegan
            spots to vegan-friendly neighborhood favorites.
          </p>
        </div>

        {/* Directory with search, filter, sort */}
        <Suspense fallback={<div className="text-[#f5f0e8]/30 py-8">Loading...</div>}>
          <RestaurantDirectory restaurants={restaurants} />
        </Suspense>

        {/* CTA */}
        <section className="card-elevated rounded-2xl p-10 text-center mt-20">
          <h2 className="font-display text-2xl text-[#f5f0e8] mb-4">
            Know a great vegan spot we&apos;re missing?
          </h2>
          <p className="text-[#f5f0e8]/50 mb-8 max-w-xl mx-auto">
            We&apos;re always expanding our directory. If you know of a plant-based restaurant in
            the Twin Cities that should be listed, let us know!
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium"
          >
            Suggest a Restaurant
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </Link>
        </section>
      </div>
    </div>
  );
}
