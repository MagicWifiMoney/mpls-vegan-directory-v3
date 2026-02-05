import { Metadata } from 'next';
import Link from 'next/link';
import { getRestaurantBySlug } from '@/data/restaurants';
import RestaurantDemoClean from '@/components/RestaurantDemoClean';

export const metadata: Metadata = {
  title: 'Demo: Clean UI Design | The Herbivorous Butcher',
  robots: { index: false, follow: false },
};

export default function DemoPage() {
  const restaurant = getRestaurantBySlug('herbivorous-butcher');

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <>
      {/* Comparison Banner */}
      <div className="sticky top-0 z-50 bg-[#d4a574] text-[#1a1a1a] px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-semibold">🎨 Design Demo</span>
            <span className="text-sm opacity-80">Clean UI without emojis - Shadcn-inspired aesthetic</span>
          </div>
          <div className="flex gap-3">
            <Link 
              href="/restaurants/herbivorous-butcher"
              className="px-4 py-1.5 rounded-lg bg-[#1a1a1a]/10 hover:bg-[#1a1a1a]/20 text-sm font-medium transition"
            >
              Current Version
            </Link>
            <Link 
              href="/"
              className="px-4 py-1.5 rounded-lg bg-[#1a1a1a] text-[#f5f0e8] text-sm font-medium transition hover:bg-[#2a2a2a]"
            >
              Exit Demo
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-[40vh] flex items-end overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-amber-600 transition-colors mb-6 group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to directory
          </Link>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              100% Vegan
            </div>

            <h1 className="font-display text-5xl lg:text-6xl text-white tracking-tight">
              {restaurant.name}
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-zinc-400 text-sm">
              <span>{restaurant.cuisineType.join(' • ')}</span>
              <span className="w-1 h-1 rounded-full bg-zinc-600" />
              <span>{restaurant.priceRange}</span>
              <span className="w-1 h-1 rounded-full bg-zinc-600" />
              <span>{restaurant.neighborhood}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <RestaurantDemoClean restaurant={restaurant} />
      </div>
    </>
  );
}
