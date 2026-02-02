import { Metadata } from 'next';
import Link from 'next/link';
import { neighborhoods, restaurants } from '@/data/restaurants';

export const metadata: Metadata = {
  title: 'Neighborhoods | Minneapolis Vegan Directory',
  description: 'Explore vegan and plant-based restaurants by neighborhood in Minneapolis and Saint Paul.',
};

export default function NeighborhoodsPage() {
  const minneapolisNeighborhoods = neighborhoods.filter(n => n.city === 'Minneapolis');
  const saintPaulNeighborhoods = neighborhoods.filter(n => n.city === 'Saint Paul');

  const getRestaurantCount = (slug: string) => {
    return restaurants.filter(r => r.neighborhoodSlug === slug).length;
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <nav className="mb-4">
          <Link href="/" className="text-green-600 hover:text-green-700 text-sm">
            ← Back to home
          </Link>
        </nav>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Browse by Neighborhood
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl">
          Discover vegan and plant-based dining options across the Twin Cities. 
          Each neighborhood has its own unique character and culinary offerings.
        </p>
      </div>

      {/* Minneapolis */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="mr-3">🏙️</span>
          Minneapolis
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {minneapolisNeighborhoods.map((neighborhood) => {
            const count = getRestaurantCount(neighborhood.slug);
            return (
              <Link
                key={neighborhood.slug}
                href={`/neighborhoods/${neighborhood.slug}`}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow group"
              >
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                  {neighborhood.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  {count} restaurant{count !== 1 ? 's' : ''}
                </p>
                <div className="mt-3 text-green-600 text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
                  Explore →
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Saint Paul */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="mr-3">🏛️</span>
          Saint Paul
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {saintPaulNeighborhoods.map((neighborhood) => {
            const count = getRestaurantCount(neighborhood.slug);
            return (
              <Link
                key={neighborhood.slug}
                href={`/neighborhoods/${neighborhood.slug}`}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow group"
              >
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                  {neighborhood.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  {count} restaurant{count !== 1 ? 's' : ''}
                </p>
                <div className="mt-3 text-green-600 text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
                  Explore →
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-16 bg-green-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Can&apos;t find your favorite restaurant?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          We&apos;re always looking to expand our directory. If you know of a great vegan or 
          vegan-friendly restaurant in the Twin Cities, let us know!
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors"
        >
          Suggest a Restaurant
        </Link>
      </section>
    </div>
  );
}
