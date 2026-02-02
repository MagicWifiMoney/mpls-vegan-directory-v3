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

  return {
    title: `${neighborhood.name} Vegan Restaurants | Minneapolis Vegan Directory`,
    description: `Discover vegan and plant-based restaurants in ${neighborhood.name}, ${neighborhood.city}. Find the best vegan dining options in this neighborhood.`,
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

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <nav className="mb-4 flex items-center space-x-2 text-sm">
          <Link href="/" className="text-green-600 hover:text-green-700">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <Link href="/neighborhoods" className="text-green-600 hover:text-green-700">
            Neighborhoods
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">{neighborhood.name}</span>
        </nav>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {neighborhood.name}
        </h1>
        <p className="text-gray-600 text-lg">
          {neighborhood.city} • {restaurantsInNeighborhood.length} restaurant{restaurantsInNeighborhood.length !== 1 ? 's' : ''}
          {veganOnly.length > 0 && ` • ${veganOnly.length} fully vegan`}
        </p>
      </div>

      {/* Restaurants Grid */}
      {restaurantsInNeighborhood.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl shadow-md">
          <span className="text-6xl mb-4 block">🌱</span>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            No restaurants listed yet
          </h2>
          <p className="text-gray-600 mb-6">
            Know a great vegan spot in {neighborhood.name}?
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors"
          >
            Suggest a Restaurant
          </Link>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurantsInNeighborhood.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      )}

      {/* Neighborhood Info */}
      <section className="mt-16 bg-green-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          About {neighborhood.name}
        </h2>
        <p className="text-gray-700 leading-relaxed">
          {neighborhood.name} is a vibrant neighborhood in {neighborhood.city} known for its 
          diverse dining scene. Whether you&apos;re looking for a quick bite or a sit-down meal, 
          you&apos;ll find excellent plant-based options here. The area is easily accessible 
          and offers a welcoming atmosphere for visitors and locals alike.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/neighborhoods"
            className="text-green-600 hover:text-green-700 font-medium"
          >
            ← View all neighborhoods
          </Link>
          <Link
            href="/"
            className="text-green-600 hover:text-green-700 font-medium"
          >
            Browse all restaurants →
          </Link>
        </div>
      </section>
    </div>
  );
}
