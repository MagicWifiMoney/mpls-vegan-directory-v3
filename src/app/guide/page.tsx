import { Metadata } from 'next';
import Link from 'next/link';
import { restaurants } from '@/data/restaurants';

export const metadata: Metadata = {
  title: 'Minneapolis Vegan Dining Guide 2026 | Brunch, Date Night & More — MPLS Vegan',
  description: 'Your curated guide to vegan dining in Minneapolis 2026 — the best brunch spots, date night restaurants, comfort food & global cuisines. 75+ plant-based options across the Twin Cities.',
  alternates: {
    canonical: '/guide',
  },
  openGraph: {
    title: 'Minneapolis Vegan Dining Guide 2026 | Brunch, Date Night & More',
    description: 'Curated plant-based dining picks for Minneapolis 2026 — brunch, date night, comfort food & global flavors. 75+ spots across the Twin Cities.',
    type: 'website',
    url: 'https://mplsvegan.com/guide',
    siteName: 'Minneapolis Vegan Directory',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Minneapolis Vegan Dining Guide 2026 | MPLS Vegan',
    description: 'Curated vegan dining picks for Minneapolis — brunch, date night, comfort food & more. 75+ plant-based spots. Updated 2026.',
  },
};

// Category definitions with emojis
const categories = [
  {
    emoji: '🍳',
    title: 'The Brunch Bunch',
    slug: 'brunch',
    description: 'Weekend morning favorites with bottomless mimosas and hearty plates',
    features: ['Brunch', 'Breakfast'],
    cuisines: [],
    color: 'from-amber-500/20 to-orange-500/20',
    borderColor: 'border-amber-500/30',
  },
  {
    emoji: '🌮',
    title: 'Taco Tuesday',
    slug: 'mexican',
    description: 'Mexican, Tex-Mex, and Latin American flavors done plant-based',
    features: [],
    cuisines: ['Mexican', 'Latin American', 'Tex-Mex'],
    color: 'from-green-500/20 to-lime-500/20',
    borderColor: 'border-green-500/30',
  },
  {
    emoji: '🍔',
    title: 'Comfort Cravings',
    slug: 'comfort',
    description: 'Burgers, fried chicken, mac & cheese, and all the cozy classics',
    features: [],
    cuisines: ['American', 'Comfort Food', 'Fast Casual'],
    color: 'from-red-500/20 to-orange-500/20',
    borderColor: 'border-red-500/30',
  },
  {
    emoji: '🍣',
    title: 'Date Night',
    slug: 'date-night',
    description: 'Upscale spots for special occasions and romantic evenings',
    features: ['Full Bar', 'Fine Dining'],
    cuisines: ['Japanese', 'Fine Dining', 'Asian Fusion'],
    color: 'from-pink-500/20 to-rose-500/20',
    borderColor: 'border-pink-500/30',
  },
  {
    emoji: '🧁',
    title: 'Sweet Treats',
    slug: 'desserts',
    description: 'Bakeries, ice cream, donuts, and everything sweet',
    features: ['Bakery', 'Desserts'],
    cuisines: ['Bakery', 'Dessert', 'Ice Cream'],
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/30',
  },
  {
    emoji: '🌍',
    title: 'Global Flavors',
    slug: 'international',
    description: 'Ethiopian, Thai, Indian, and cuisines from around the world',
    features: [],
    cuisines: ['Ethiopian', 'Thai', 'Indian', 'Vietnamese', 'African'],
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
  },
];

// Get restaurants for a category
function getRestaurantsForCategory(category: typeof categories[0]) {
  return restaurants.filter(r => {
    const matchesFeature = category.features.some(f => 
      r.features.some(rf => rf.toLowerCase().includes(f.toLowerCase()))
    );
    const matchesCuisine = category.cuisines.some(c => 
      r.cuisineType.some(rc => rc.toLowerCase().includes(c.toLowerCase()))
    );
    return matchesFeature || matchesCuisine;
  }).slice(0, 5); // Top 5 per category
}

export default function GuidePage() {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-[#3d4a3d]/10 blur-[120px]" />
        <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-[#d4a574]/5 blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-24 pt-32">
        {/* Back link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-[#f5f0e8]/50 hover:text-[#d4a574] transition-colors mb-12 group"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to home
        </Link>

        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-12 h-px bg-gradient-to-r from-[#d4a574] to-transparent" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4a574]">City Guide</span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl text-[#f5f0e8] tracking-tight mb-4">
            Your Guide to Vegan Dining in the Twin Cities
          </h1>
          <p className="text-[#f5f0e8]/50 text-lg">
            From cozy brunch spots to upscale date nights, we&apos;ve curated the best plant-based 
            restaurants in Minneapolis and Saint Paul. Whether you&apos;re a lifelong vegan or just 
            curious about eating more plants, there&apos;s something delicious waiting for you.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="card-elevated rounded-xl p-6 text-center">
            <div className="font-display text-3xl text-[#d4a574]">{restaurants.length}+</div>
            <div className="text-sm text-[#f5f0e8]/50 mt-1">Restaurants</div>
          </div>
          <div className="card-elevated rounded-xl p-6 text-center">
            <div className="font-display text-3xl text-[#d4a574]">{restaurants.filter(r => r.veganStatus === '100% Vegan').length}</div>
            <div className="text-sm text-[#f5f0e8]/50 mt-1">100% Vegan</div>
          </div>
          <div className="card-elevated rounded-xl p-6 text-center">
            <div className="font-display text-3xl text-[#d4a574]">15+</div>
            <div className="text-sm text-[#f5f0e8]/50 mt-1">Neighborhoods</div>
          </div>
          <div className="card-elevated rounded-xl p-6 text-center">
            <div className="font-display text-3xl text-[#d4a574]">Weekly</div>
            <div className="text-sm text-[#f5f0e8]/50 mt-1">Updates</div>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {categories.map((category) => {
            const categoryRestaurants = getRestaurantsForCategory(category);
            if (categoryRestaurants.length === 0) return null;
            
            return (
              <section key={category.slug} id={category.slug}>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} border ${category.borderColor} flex items-center justify-center text-3xl`}>
                    {category.emoji}
                  </div>
                  <div>
                    <h2 className="font-display text-2xl text-[#f5f0e8]">{category.title}</h2>
                    <p className="text-[#f5f0e8]/50 text-sm">{category.description}</p>
                  </div>
                </div>

                {/* Restaurant Cards */}
                <div className="grid gap-4">
                  {categoryRestaurants.map((restaurant) => (
                    <Link
                      key={restaurant.id}
                      href={`/restaurants/${restaurant.slug}`}
                      className="group card-elevated rounded-xl p-6 flex flex-col md:flex-row md:items-center gap-4 hover:border-[#d4a574]/30 transition-all"
                    >
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="font-display text-lg text-[#f5f0e8] group-hover:text-[#d4a574] transition-colors">
                              {restaurant.name}
                            </h3>
                            <p className="text-sm text-[#f5f0e8]/40 mt-1">
                              {restaurant.neighborhood} · {restaurant.priceRange}
                            </p>
                          </div>
                          {restaurant.veganStatus === '100% Vegan' && (
                            <span className="flex-shrink-0 px-2 py-1 text-xs bg-[#3d4a3d]/50 text-[#d4a574] rounded-full">
                              100% Vegan
                            </span>
                          )}
                        </div>
                        
                        {/* Try This recommendation */}
                        {restaurant.whatToOrder && restaurant.whatToOrder.length > 0 && (
                          <div className="mt-3 flex items-start gap-2">
                            <span className="text-[#d4a574] text-sm font-medium whitespace-nowrap">Try this:</span>
                            <span className="text-sm text-[#f5f0e8]/60">
                              {restaurant.whatToOrder[0].split(' - ')[0]}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <svg className="w-5 h-5 text-[#f5f0e8]/20 group-hover:text-[#d4a574] group-hover:translate-x-1 transition-all flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Newsletter CTA */}
        <section className="mt-20 card-elevated rounded-2xl p-10 text-center">
          <div className="text-4xl mb-4">📬</div>
          <h2 className="font-display text-2xl text-[#f5f0e8] mb-4">
            Get Weekly Updates
          </h2>
          <p className="text-[#f5f0e8]/50 mb-8 max-w-xl mx-auto">
            New restaurant openings, seasonal menus, and exclusive deals delivered to your inbox every week.
          </p>
          <Link
            href="/#newsletter"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium"
          >
            Subscribe to Newsletter
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </Link>
        </section>

        {/* Last Updated */}
        <p className="mt-12 text-center text-sm text-[#f5f0e8]/30">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
      </div>
    </div>
  );
}
