import { Metadata } from 'next';
import Link from 'next/link';
import { restaurants } from '@/data/restaurants';

export const metadata: Metadata = {
  title: 'Vegan Restaurants in Minneapolis | Minneapolis Vegan Directory',
  description:
    'Browse 75+ vegan, vegetarian, and vegan-friendly restaurants in Minneapolis and Saint Paul. Find your next plant-based meal in the Twin Cities.',
  openGraph: {
    title: 'Vegan Restaurants in Minneapolis | Minneapolis Vegan Directory',
    description:
      'Browse 75+ vegan, vegetarian, and vegan-friendly restaurants in Minneapolis and Saint Paul.',
    type: 'website',
    url: 'https://mplsvegan.com/restaurants',
  },
};

const statusConfig: Record<string, { label: string; badgeClass: string; dotClass: string }> = {
  '100% Vegan': {
    label: '100% Vegan',
    badgeClass: 'badge-vegan',
    dotClass: 'bg-[#6db36d]',
  },
  Vegetarian: {
    label: 'Vegetarian',
    badgeClass: 'badge-vegetarian',
    dotClass: 'bg-[#7ec8e3]',
  },
  'Vegan-Friendly': {
    label: 'Vegan-Friendly',
    badgeClass: 'badge-friendly',
    dotClass: 'bg-[#d4a574]',
  },
};

export default function RestaurantsPage() {
  const veganOnly = restaurants.filter((r) => r.veganStatus === '100% Vegan');
  const vegetarian = restaurants.filter((r) => r.veganStatus === 'Vegetarian');
  const veganFriendly = restaurants.filter((r) => r.veganStatus === 'Vegan-Friendly');

  const groups = [
    { key: '100% Vegan', label: '100% Vegan Restaurants', items: veganOnly },
    { key: 'Vegetarian', label: 'Vegetarian Restaurants', items: vegetarian },
    { key: 'Vegan-Friendly', label: 'Vegan-Friendly Restaurants', items: veganFriendly },
  ];

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

        {/* Quick nav */}
        <div className="flex flex-wrap gap-3 mb-16">
          {groups.map((group) => (
            <a
              key={group.key}
              href={`#${group.key.toLowerCase().replace(/[^a-z]/g, '-').replace(/-+/g, '-')}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#f5f0e8]/10 text-sm text-[#f5f0e8]/60 hover:text-[#d4a574] hover:border-[#d4a574]/30 transition-all"
            >
              <span
                className={`w-2 h-2 rounded-full ${statusConfig[group.key]?.dotClass ?? 'bg-[#d4a574]'}`}
              />
              {group.label}
              <span className="text-[#f5f0e8]/30">({group.items.length})</span>
            </a>
          ))}
        </div>

        {/* Groups */}
        {groups.map((group) =>
          group.items.length === 0 ? null : (
            <section
              key={group.key}
              id={group.key.toLowerCase().replace(/[^a-z]/g, '-').replace(/-+/g, '-')}
              className="mb-20 scroll-mt-24"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-3 h-3 rounded-full" style={{ background: group.key === '100% Vegan' ? '#6db36d' : group.key === 'Vegetarian' ? '#7ec8e3' : '#d4a574' }} />
                <h2 className="font-display text-3xl text-[#f5f0e8]">{group.label}</h2>
                <span className="text-[#f5f0e8]/30 text-lg">({group.items.length})</span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.items.map((restaurant, index) => (
                  <Link
                    key={restaurant.slug}
                    href={`/restaurants/${restaurant.slug}`}
                    className="group card-elevated rounded-2xl p-6 transition-all duration-500 hover:ring-2 hover:ring-[#d4a574]/20"
                    style={{ animationDelay: `${index * 30}ms` }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-display text-lg text-[#f5f0e8] group-hover:text-[#d4a574] transition-colors leading-tight pr-2">
                        {restaurant.name}
                      </h3>
                      <svg
                        className="w-5 h-5 flex-shrink-0 text-[#f5f0e8]/20 group-hover:text-[#d4a574] group-hover:translate-x-1 transition-all"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>

                    <p className="text-sm text-[#f5f0e8]/40 mb-3">
                      {restaurant.cuisineType.join(' · ')}
                    </p>

                    <div className="flex items-center gap-3 text-xs text-[#f5f0e8]/30">
                      <span>{restaurant.neighborhood}</span>
                      <span>·</span>
                      <span>{restaurant.priceRange}</span>
                    </div>

                    {/* Hover bar */}
                    <div className="mt-4 h-0.5 bg-gradient-to-r from-[#d4a574] to-[#c17f59] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </Link>
                ))}
              </div>
            </section>
          )
        )}

        {/* CTA */}
        <section className="card-elevated rounded-2xl p-10 text-center">
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
