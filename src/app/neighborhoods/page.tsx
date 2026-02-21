import { Metadata } from 'next';
import Link from 'next/link';
import { neighborhoods, restaurants } from '@/data/restaurants';

export const metadata: Metadata = {
  title: 'Vegan Restaurants by Neighborhood Minneapolis 2026',
  description: 'Explore vegan and plant-based restaurants by neighborhood in Minneapolis and Saint Paul.',
};

export default function NeighborhoodsPage() {
  const minneapolisNeighborhoods = neighborhoods.filter(n => n.city === 'Minneapolis');
  const saintPaulNeighborhoods = neighborhoods.filter(n => n.city === 'Saint Paul');

  const getRestaurantCount = (slug: string) => {
    return restaurants.filter(r => r.neighborhoodSlug === slug).length;
  };

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
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to home
        </Link>

        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-12 h-px bg-gradient-to-r from-[#d4a574] to-transparent" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4a574]">Explore</span>
          </div>
          <h1 className="font-display text-5xl lg:text-6xl text-[#f5f0e8] tracking-tight mb-4">
            Browse by Neighborhood
          </h1>
          <p className="text-[#f5f0e8]/50 text-lg max-w-2xl">
            Discover plant-based dining across the Twin Cities. Each neighborhood has its own unique character and culinary offerings.
          </p>
        </div>

        {/* Minneapolis */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[#3d4a3d]/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-[#d4a574]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="font-display text-3xl text-[#f5f0e8]">Minneapolis</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {minneapolisNeighborhoods.map((neighborhood, index) => {
              const count = getRestaurantCount(neighborhood.slug);
              return (
                <Link
                  key={neighborhood.slug}
                  href={`/neighborhoods/${neighborhood.slug}`}
                  className="group card-elevated rounded-2xl p-6 transition-all duration-500"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-display text-lg text-[#f5f0e8] group-hover:text-[#d4a574] transition-colors">
                      {neighborhood.name}
                    </h3>
                    <svg className="w-5 h-5 text-[#f5f0e8]/20 group-hover:text-[#d4a574] group-hover:translate-x-1 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                  <p className="text-sm text-[#f5f0e8]/40">
                    {count} restaurant{count !== 1 ? 's' : ''}
                  </p>
                  {/* Hover indicator */}
                  <div className="mt-4 h-0.5 bg-gradient-to-r from-[#d4a574] to-[#c17f59] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Link>
              );
            })}
          </div>
        </section>

        {/* Saint Paul */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[#3d4a3d]/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-[#d4a574]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
              </svg>
            </div>
            <h2 className="font-display text-3xl text-[#f5f0e8]">Saint Paul</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {saintPaulNeighborhoods.map((neighborhood, index) => {
              const count = getRestaurantCount(neighborhood.slug);
              return (
                <Link
                  key={neighborhood.slug}
                  href={`/neighborhoods/${neighborhood.slug}`}
                  className="group card-elevated rounded-2xl p-6 transition-all duration-500"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-display text-lg text-[#f5f0e8] group-hover:text-[#d4a574] transition-colors">
                      {neighborhood.name}
                    </h3>
                    <svg className="w-5 h-5 text-[#f5f0e8]/20 group-hover:text-[#d4a574] group-hover:translate-x-1 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                  <p className="text-sm text-[#f5f0e8]/40">
                    {count} restaurant{count !== 1 ? 's' : ''}
                  </p>
                  <div className="mt-4 h-0.5 bg-gradient-to-r from-[#d4a574] to-[#c17f59] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Link>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="card-elevated rounded-2xl p-10 text-center">
          <h2 className="font-display text-2xl text-[#f5f0e8] mb-4">
            Can&apos;t find your favorite restaurant?
          </h2>
          <p className="text-[#f5f0e8]/50 mb-8 max-w-xl mx-auto">
            We&apos;re always expanding our directory. If you know of a great vegan spot in the Twin Cities, let us know!
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
