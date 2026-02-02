'use client';

import { useState, useMemo } from 'react';
import Hero from '@/components/Hero';
import SearchFilters from '@/components/SearchFilters';
import RestaurantCardWithData from '@/components/RestaurantCardWithData';
import Map from '@/components/Map';
import NewsletterSignup from '@/components/NewsletterSignup';
import { restaurants, Restaurant } from '@/data/restaurants';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [veganStatusFilter, setVeganStatusFilter] = useState('');
  const [cuisineFilter, setCuisineFilter] = useState('');
  const [neighborhoodFilter, setNeighborhoodFilter] = useState('');
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  const filteredRestaurants = useMemo(() => {
    return restaurants.filter((restaurant) => {
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch = 
          restaurant.name.toLowerCase().includes(query) ||
          restaurant.cuisineType.some(c => c.toLowerCase().includes(query)) ||
          restaurant.neighborhood.toLowerCase().includes(query) ||
          restaurant.description.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      if (veganStatusFilter && restaurant.veganStatus !== veganStatusFilter) {
        return false;
      }

      if (cuisineFilter && !restaurant.cuisineType.includes(cuisineFilter)) {
        return false;
      }

      if (neighborhoodFilter && restaurant.neighborhoodSlug !== neighborhoodFilter) {
        return false;
      }

      return true;
    });
  }, [searchQuery, veganStatusFilter, cuisineFilter, neighborhoodFilter]);

  return (
    <>
      <Hero />
      
      {/* Restaurant Directory Section */}
      <section id="restaurants" className="relative py-24 px-6 lg:px-8">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#3d4a3d]/5 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#d4a574]/5 blur-[80px]" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Section header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-gradient-to-r from-[#d4a574] to-transparent" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#d4a574]">Directory</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl text-[#f5f0e8] mb-4">
              Find Your Next Meal
            </h2>
            <p className="text-[#f5f0e8]/50 text-lg max-w-xl">
              Browse {restaurants.length} curated vegan and plant-based restaurants across Minneapolis and Saint Paul
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Sidebar - Filters and Map */}
            <div className="lg:col-span-4 xl:col-span-3 space-y-6">
              <div className="lg:sticky lg:top-28">
                <SearchFilters
                  onSearch={setSearchQuery}
                  onFilterVeganStatus={setVeganStatusFilter}
                  onFilterCuisine={setCuisineFilter}
                  onFilterNeighborhood={setNeighborhoodFilter}
                  activeVeganStatus={veganStatusFilter}
                  activeCuisine={cuisineFilter}
                  activeNeighborhood={neighborhoodFilter}
                />
                <div className="mt-6">
                  <Map 
                    restaurants={filteredRestaurants}
                    selectedRestaurant={selectedRestaurant}
                    onSelectRestaurant={setSelectedRestaurant}
                  />
                </div>
              </div>
            </div>

            {/* Main content - Restaurant Grid */}
            <div className="lg:col-span-8 xl:col-span-9">
              {filteredRestaurants.length === 0 ? (
                <div className="card-elevated rounded-2xl p-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-[#2a2a2a] flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-[#f5f0e8]/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl text-[#f5f0e8] mb-2">No restaurants found</h3>
                  <p className="text-[#f5f0e8]/50">Try adjusting your filters or search query</p>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-[#f5f0e8]/40">
                      Showing {filteredRestaurants.length} restaurant{filteredRestaurants.length !== 1 ? 's' : ''}
                    </span>
                  </div>
                  <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredRestaurants.map((restaurant, index) => (
                      <RestaurantCardWithData key={restaurant.id} restaurant={restaurant} index={index} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Minneapolis Section */}
      <section className="relative py-24 px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#2a2a2a]/50 to-[#1a1a1a]" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#3d4a3d]/10 blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 justify-center">
              <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#d4a574]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#d4a574]">Why Here</span>
              <span className="w-12 h-px bg-gradient-to-r from-[#d4a574] to-transparent" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl text-[#f5f0e8] mb-4">
              Minneapolis for Vegan Food?
            </h2>
            <p className="text-[#f5f0e8]/50 text-lg max-w-2xl mx-auto">
              The Twin Cities has quietly become one of the most exciting plant-based food destinations in the Midwest
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: 'Pioneering Spirit',
                description: "Home to The Herbivorous Butcher—America's first vegan butcher shop—and countless other innovative plant-based concepts.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Diverse Cuisines',
                description: 'From Ethiopian to Soul Food, Thai to Mediterranean—the Twin Cities celebrates global plant-based flavors.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: 'Community Driven',
                description: 'Many restaurants are collectively owned, Black-owned, or deeply rooted in their neighborhoods.',
              },
            ].map((feature, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <div className="card-elevated rounded-2xl p-8 h-full transition-all duration-500">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3d4a3d] to-[#4a5d4a] flex items-center justify-center mb-6 text-[#d4a574] group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-display text-xl text-[#f5f0e8] mb-3">{feature.title}</h3>
                  <p className="text-[#f5f0e8]/50 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <NewsletterSignup />
    </>
  );
}
