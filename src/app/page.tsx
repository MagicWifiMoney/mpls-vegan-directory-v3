'use client';

import { useState, useMemo } from 'react';
import Hero from '@/components/Hero';
import SearchFiltersHorizontal from '@/components/SearchFiltersHorizontal';
import RestaurantCardWithData from '@/components/RestaurantCardWithData';
import NewsletterSignup from '@/components/NewsletterSignup';
import { restaurants, Restaurant } from '@/data/restaurants';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [veganStatusFilter, setVeganStatusFilter] = useState('');
  const [cuisineFilter, setCuisineFilter] = useState('');
  const [neighborhoodFilter, setNeighborhoodFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [featureFilter, setFeatureFilter] = useState('');

  // Extract unique values for filters
  const cuisineTypes = useMemo(() => {
    const types = new Set<string>();
    restaurants.forEach(r => r.cuisineType.forEach(c => types.add(c)));
    return Array.from(types).sort();
  }, []);

  const neighborhoods = useMemo(() => {
    const hoods = new Map<string, string>();
    restaurants.forEach(r => hoods.set(r.neighborhoodSlug, r.neighborhood));
    return Array.from(hoods.entries())
      .map(([slug, name]) => ({ slug, name }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const priceRanges = ['$', '$$', '$$$', '$$$$'];

  const features = useMemo(() => {
    const feat = new Set<string>();
    restaurants.forEach(r => r.features.forEach(f => feat.add(f)));
    return Array.from(feat).sort();
  }, []);

  const filteredRestaurants = useMemo(() => {
    return restaurants.filter((restaurant) => {
      // Search
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch = 
          restaurant.name.toLowerCase().includes(query) ||
          restaurant.cuisineType.some(c => c.toLowerCase().includes(query)) ||
          restaurant.neighborhood.toLowerCase().includes(query) ||
          restaurant.description.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      // Vegan Status
      if (veganStatusFilter && restaurant.veganStatus !== veganStatusFilter) {
        return false;
      }

      // Cuisine
      if (cuisineFilter && !restaurant.cuisineType.includes(cuisineFilter)) {
        return false;
      }

      // Neighborhood
      if (neighborhoodFilter && restaurant.neighborhoodSlug !== neighborhoodFilter) {
        return false;
      }

      // Price
      if (priceFilter && restaurant.priceRange !== priceFilter) {
        return false;
      }

      // Feature
      if (featureFilter && !restaurant.features.includes(featureFilter)) {
        return false;
      }

      return true;
    });
  }, [searchQuery, veganStatusFilter, cuisineFilter, neighborhoodFilter, priceFilter, featureFilter]);

  return (
    <>
      <Hero />
      
      {/* Filters */}
      <SearchFiltersHorizontal
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        veganStatusFilter={veganStatusFilter}
        setVeganStatusFilter={setVeganStatusFilter}
        cuisineFilter={cuisineFilter}
        setCuisineFilter={setCuisineFilter}
        neighborhoodFilter={neighborhoodFilter}
        setNeighborhoodFilter={setNeighborhoodFilter}
        priceFilter={priceFilter}
        setPriceFilter={setPriceFilter}
        featureFilter={featureFilter}
        setFeatureFilter={setFeatureFilter}
        cuisineTypes={cuisineTypes}
        neighborhoods={neighborhoods}
        priceRanges={priceRanges}
        features={features}
      />
      
      {/* Restaurant Directory Section */}
      <section id="restaurants" className="relative py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
              <div className="flex items-center justify-between mb-8">
                <span className="text-sm text-[#f5f0e8]/40">
                  Showing {filteredRestaurants.length} of {restaurants.length} restaurants
                </span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredRestaurants.map((restaurant, index) => (
                  <RestaurantCardWithData key={restaurant.id} restaurant={restaurant} index={index} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSignup />
    </>
  );
}
