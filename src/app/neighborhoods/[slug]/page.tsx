import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { neighborhoods, getNeighborhoodBySlug, getRestaurantsByNeighborhood } from '@/data/restaurants';
import RestaurantCard from '@/components/RestaurantCard';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return neighborhoods.map((neighborhood) => ({
    slug: neighborhood.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const neighborhood = getNeighborhoodBySlug(slug);

  if (!neighborhood) {
    return { title: 'Neighborhood Not Found' };
  }

  const restaurantCount = getRestaurantsByNeighborhood(neighborhood.slug).length;
  const desc = 'description' in neighborhood ? (neighborhood as typeof neighborhood & { description: string }).description : '';
  return {
    title: `Vegan Restaurants in ${neighborhood.name}, ${neighborhood.city} 2026 | MPLS Vegan`,
    description: desc ? `${desc} Find ${restaurantCount} vegan and plant-based restaurants in ${neighborhood.name}.` : `Find ${restaurantCount} vegan and plant-based restaurants in ${neighborhood.name}, ${neighborhood.city}. Browse menus, ratings, and reviews for the best vegan dining options.`,
    alternates: {
      canonical: `https://mplsvegan.com/neighborhoods/${neighborhood.slug}`,
    },
    openGraph: {
      title: `Vegan Restaurants in ${neighborhood.name}`,
      description: `${restaurantCount} vegan dining options in ${neighborhood.name}, ${neighborhood.city}`,
      type: 'website',
      url: `https://mplsvegan.com/neighborhoods/${neighborhood.slug}`,
    },
  };
}

export default async function NeighborhoodPage({ params }: Props) {
  const { slug } = await params;
  const neighborhood = getNeighborhoodBySlug(slug);

  if (!neighborhood) {
    notFound();
  }

  const restaurantsInNeighborhood = getRestaurantsByNeighborhood(slug);
  const veganOnly = restaurantsInNeighborhood.filter(r => r.veganStatus === '100% Vegan');

  const breadcrumbSchema = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mplsvegan.com' },
      { '@type': 'ListItem', position: 2, name: 'Neighborhoods', item: 'https://mplsvegan.com/neighborhoods' },
      { '@type': 'ListItem', position: 3, name: neighborhood.name, item: `https://mplsvegan.com/neighborhoods/${neighborhood.slug}` },
    ],
  };

  // ItemList schema for restaurants in this neighborhood
  const itemListSchema = restaurantsInNeighborhood.length > 0 ? {
    '@type': 'ItemList',
    name: `Vegan Restaurants in ${neighborhood.name}, ${neighborhood.city}`,
    description: `${restaurantsInNeighborhood.length} vegan and plant-based restaurants in ${neighborhood.name}`,
    numberOfItems: restaurantsInNeighborhood.length,
    itemListElement: restaurantsInNeighborhood.map((r, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Restaurant',
        name: r.name,
        servesCuisine: r.cuisineType,
        priceRange: r.priceRange,
        url: `https://mplsvegan.com/restaurants/${r.slug}`,
      },
    })),
  } : null;

  const graphSchema = {
    '@context': 'https://schema.org',
    '@graph': [breadcrumbSchema, ...(itemListSchema ? [itemListSchema] : [])],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
      />
      <div className="relative min-h-screen">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-[#3d4a3d]/10 blur-[120px]" />
          <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-[#d4a574]/5 blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 pt-32">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-12">
            <Link href="/" className="text-[#f5f0e8]/50 hover:text-[#d4a574] transition-colors">
              Home
            </Link>
            <span className="text-[#f5f0e8]/20">/</span>
            <Link href="/neighborhoods" className="text-[#f5f0e8]/50 hover:text-[#d4a574] transition-colors">
              Neighborhoods
            </Link>
            <span className="text-[#f5f0e8]/20">/</span>
            <span className="text-[#d4a574]">{neighborhood.name}</span>
          </nav>

          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-gradient-to-r from-[#d4a574] to-transparent" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#d4a574]">{neighborhood.city}</span>
            </div>
            {'description' in neighborhood && (
              <p className="text-[#f5f0e8]/50 text-lg max-w-2xl">
                {(neighborhood as typeof neighborhood & { description: string }).description}
              </p>
            )}
            <h1 className="font-display text-5xl lg:text-6xl text-[#f5f0e8] tracking-tight mb-6">
              {neighborhood.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-[#f5f0e8]/50">
              <span>{restaurantsInNeighborhood.length} restaurant{restaurantsInNeighborhood.length !== 1 ? 's' : ''}</span>
              {veganOnly.length > 0 && (
                <>
                  <span className="w-1 h-1 rounded-full bg-[#f5f0e8]/30" />
                  <span>{veganOnly.length} fully vegan</span>
                </>
              )}
            </div>
          </div>

          {/* Restaurants Grid */}
          {restaurantsInNeighborhood.length === 0 ? (
            <div className="card-elevated rounded-2xl p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-[#2a2a2a] flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#d4a574]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" fill="currentColor" />
                </svg>
              </div>
              <h2 className="font-display text-2xl text-[#f5f0e8] mb-3">
                No restaurants listed yet
              </h2>
              <p className="text-[#f5f0e8]/50 mb-8">
                Know a great vegan spot in {neighborhood.name}?
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
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {restaurantsInNeighborhood.map((restaurant, index) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} index={index} />
              ))}
            </div>
          )}

          {/* Neighborhood Info */}
          <section className="card-elevated rounded-2xl p-10">
            <h2 className="font-display text-2xl text-[#f5f0e8] mb-6">
              About {neighborhood.name}
            </h2>
            <p className="text-[#f5f0e8]/50 leading-relaxed mb-8">
              {neighborhood.name} is a vibrant neighborhood in {neighborhood.city} known for its
              diverse dining scene. Whether you&apos;re looking for a quick bite or a sit-down meal,
              you&apos;ll find excellent plant-based options here. The area is easily accessible
              and offers a welcoming atmosphere for visitors and locals alike.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                href="/neighborhoods"
                className="inline-flex items-center gap-2 text-[#d4a574] hover:text-[#e6c49a] transition-colors group"
              >
                <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                All neighborhoods
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[#d4a574] hover:text-[#e6c49a] transition-colors group"
              >
                All restaurants
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
