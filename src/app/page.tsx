'use client';

import { useState, useMemo } from 'react';
import Hero from '@/components/Hero';
import SearchFilters from '@/components/SearchFilters';
import RestaurantCard from '@/components/RestaurantCard';
import Map from '@/components/Map';
import { restaurants, Restaurant } from '@/data/restaurants';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [veganStatusFilter, setVeganStatusFilter] = useState('');
  const [cuisineFilter, setCuisineFilter] = useState('');
  const [neighborhoodFilter, setNeighborhoodFilter] = useState('');
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  const filteredRestaurants = useMemo(() => {
    return restaurants.filter((restaurant) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch = 
          restaurant.name.toLowerCase().includes(query) ||
          restaurant.cuisineType.some(c => c.toLowerCase().includes(query)) ||
          restaurant.neighborhood.toLowerCase().includes(query) ||
          restaurant.description.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      // Vegan status filter
      if (veganStatusFilter && restaurant.veganStatus !== veganStatusFilter) {
        return false;
      }

      // Cuisine filter
      if (cuisineFilter && !restaurant.cuisineType.includes(cuisineFilter)) {
        return false;
      }

      // Neighborhood filter
      if (neighborhoodFilter && restaurant.neighborhoodSlug !== neighborhoodFilter) {
        return false;
      }

      return true;
    });
  }, [searchQuery, veganStatusFilter, cuisineFilter, neighborhoodFilter]);

  return (
    <>
      <Hero />
      
      <section id="restaurants" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Find Your Next Meal
          </h2>
          <p className="text-gray-600 text-lg">
            Browse {restaurants.length} vegan and plant-based restaurants across Minneapolis and Saint Paul
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Filters and Map */}
          <div className="lg:col-span-1 space-y-6">
            <SearchFilters
              onSearch={setSearchQuery}
              onFilterVeganStatus={setVeganStatusFilter}
              onFilterCuisine={setCuisineFilter}
              onFilterNeighborhood={setNeighborhoodFilter}
              activeVeganStatus={veganStatusFilter}
              activeCuisine={cuisineFilter}
              activeNeighborhood={neighborhoodFilter}
            />
            <Map 
              restaurants={filteredRestaurants}
              selectedRestaurant={selectedRestaurant}
              onSelectRestaurant={setSelectedRestaurant}
            />
          </div>

          {/* Restaurant Grid */}
          <div className="lg:col-span-2">
            {filteredRestaurants.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-xl shadow-md">
                <span className="text-6xl mb-4 block">🔍</span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No restaurants found</h3>
                <p className="text-gray-600">Try adjusting your filters or search query</p>
              </div>
            ) : (
              <>
                <div className="mb-4 text-sm text-gray-600">
                  Showing {filteredRestaurants.length} restaurant{filteredRestaurants.length !== 1 ? 's' : ''}
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {filteredRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Minneapolis for Vegan Food?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pioneering Spirit</h3>
              <p className="text-gray-600">
                Home to America&apos;s first vegan butcher shop and countless innovative plant-based concepts.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Diverse Cuisines</h3>
              <p className="text-gray-600">
                From Ethiopian to Soul Food, Thai to Mediterranean—the Twin Cities celebrates global plant-based flavors.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Driven</h3>
              <p className="text-gray-600">
                Many restaurants are collectively owned, Black-owned, or deeply rooted in their neighborhoods.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
