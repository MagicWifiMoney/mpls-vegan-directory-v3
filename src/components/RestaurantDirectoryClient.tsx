'use client';

import { useState, useMemo } from 'react';
import SearchFiltersHorizontal from '@/components/SearchFiltersHorizontal';
import RestaurantCardWithData from '@/components/RestaurantCardWithData';
import { Restaurant } from '@/data/restaurants';

interface Props {
    restaurants: Restaurant[];
    cuisineTypes: string[];
    neighborhoods: { slug: string; name: string }[];
    priceRanges: string[];
    features: string[];
}

export default function RestaurantDirectoryClient({
    restaurants,
    cuisineTypes,
    neighborhoods,
    priceRanges,
    features,
}: Props) {
    const [searchQuery, setSearchQuery] = useState('');
    const [veganStatusFilter, setVeganStatusFilter] = useState('');
    const [cuisineFilter, setCuisineFilter] = useState('');
    const [neighborhoodFilter, setNeighborhoodFilter] = useState('');
    const [priceFilter, setPriceFilter] = useState('');
    const [featureFilter, setFeatureFilter] = useState('');

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

            if (veganStatusFilter && restaurant.veganStatus !== veganStatusFilter) return false;
            if (cuisineFilter && !restaurant.cuisineType.includes(cuisineFilter)) return false;
            if (neighborhoodFilter && restaurant.neighborhoodSlug !== neighborhoodFilter) return false;
            if (priceFilter && restaurant.priceRange !== priceFilter) return false;
            if (featureFilter && !restaurant.features.includes(featureFilter)) return false;

            return true;
        });
    }, [restaurants, searchQuery, veganStatusFilter, cuisineFilter, neighborhoodFilter, priceFilter, featureFilter]);

    return (
        <>
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
        </>
    );
}
