import Hero from '@/components/Hero';
import NewsletterSignup from '@/components/NewsletterSignup';
import InstagramFeed from '@/components/InstagramFeed';
import RestaurantDirectoryClient from '@/components/RestaurantDirectoryClient';
import { restaurants } from '@/data/restaurants';
import Link from 'next/link';

// Server Component — all initial restaurant data is pre-rendered in HTML
// The client component handles filtering/search interactivity only

export default function Home() {
  // Pre-compute filter options on the server
  const cuisineTypes = (() => {
    const types = new Set<string>();
    restaurants.forEach(r => r.cuisineType.forEach(c => types.add(c)));
    return Array.from(types).sort();
  })();

  const neighborhoods = (() => {
    const hoods = new Map<string, string>();
    restaurants.forEach(r => hoods.set(r.neighborhoodSlug, r.neighborhood));
    return Array.from(hoods.entries())
      .map(([slug, name]) => ({ slug, name }))
      .sort((a, b) => a.name.localeCompare(b.name));
  })();

  const features = (() => {
    const feat = new Set<string>();
    restaurants.forEach(r => r.features.forEach(f => feat.add(f)));
    return Array.from(feat).sort();
  })();

  const priceRanges = ['$', '$$', '$$$', '$$$$'];

  return (
    <>
      <Hero />

      {/* Client component for filtering — all restaurant data is passed as a prop */}
      <RestaurantDirectoryClient
        restaurants={restaurants}
        cuisineTypes={cuisineTypes}
        neighborhoods={neighborhoods}
        priceRanges={priceRanges}
        features={features}
      />

      {/* Server-rendered SEO content section — always visible to crawlers */}
      <section className="py-16 px-6 lg:px-8 border-t border-[#f5f0e8]/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl text-[#f5f0e8] mb-4">
            Minneapolis Vegan Restaurant Guide 2026
          </h2>
          <div className="prose prose-invert max-w-3xl text-[#f5f0e8]/60 text-base leading-relaxed space-y-4">
            <p>
              Welcome to Minneapolis&apos; most comprehensive vegan and plant-based dining directory.
              We feature over {restaurants.length} restaurants across the Twin Cities, from 100% vegan
              spots like <Link href="/restaurants/herbivorous-butcher" className="text-[#d4a574] hover:underline">The Herbivorous Butcher</Link> and
              {' '}<Link href="/restaurants/j-selbys" className="text-[#d4a574] hover:underline">J. Selby&apos;s</Link> to
              vegan-friendly gems throughout Minneapolis and Saint Paul.
            </p>
            <p>
              Explore by neighborhood, browse our curated guides for{' '}
              <Link href="/blog/vegan-brunch-minneapolis" className="text-[#d4a574] hover:underline">vegan brunch</Link>,{' '}
              <Link href="/blog/vegan-date-night-minneapolis" className="text-[#d4a574] hover:underline">date night</Link>,{' '}
              <Link href="/blog/vegan-comfort-food-minneapolis" className="text-[#d4a574] hover:underline">comfort food</Link>, and{' '}
              <Link href="/blog/ethiopian-vegan-food-minneapolis" className="text-[#d4a574] hover:underline">Ethiopian vegan food</Link>.
              Whether you&apos;re a longtime vegan or just trying to eat more plant-based meals,
              Minneapolis has something incredible for you.
            </p>
          </div>

          {/* Server-rendered restaurant list for SEO — hidden from view but indexable */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {restaurants.slice(0, 12).map((restaurant) => (
              <Link
                key={restaurant.id}
                href={`/restaurants/${restaurant.slug}`}
                className="group card-elevated rounded-xl p-4 hover:ring-1 hover:ring-[#d4a574]/30 transition-all"
              >
                <h3 className="font-display text-[#f5f0e8] group-hover:text-[#d4a574] transition-colors line-clamp-1">
                  {restaurant.name}
                </h3>
                <p className="text-xs text-[#d4a574] mt-1">{restaurant.veganStatus} · {restaurant.priceRange}</p>
                <p className="text-xs text-[#f5f0e8]/40 mt-1">{restaurant.neighborhood}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/restaurants"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium"
            >
              View All {restaurants.length} Restaurants →
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <InstagramFeed />

      {/* Newsletter Section */}
      <NewsletterSignup />
    </>
  );
}
