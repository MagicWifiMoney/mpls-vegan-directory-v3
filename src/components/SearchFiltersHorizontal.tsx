'use client';

import { useState } from 'react';

interface FiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  veganStatusFilter: string;
  setVeganStatusFilter: (status: string) => void;
  cuisineFilter: string;
  setCuisineFilter: (cuisine: string) => void;
  neighborhoodFilter: string;
  setNeighborhoodFilter: (neighborhood: string) => void;
  priceFilter: string;
  setPriceFilter: (price: string) => void;
  featureFilter: string;
  setFeatureFilter: (feature: string) => void;
  cuisineTypes: string[];
  neighborhoods: Array<{ name: string; slug: string }>;
  priceRanges: string[];
  features: string[];
}

export default function SearchFiltersHorizontal({
  searchQuery,
  setSearchQuery,
  veganStatusFilter,
  setVeganStatusFilter,
  cuisineFilter,
  setCuisineFilter,
  neighborhoodFilter,
  setNeighborhoodFilter,
  priceFilter,
  setPriceFilter,
  featureFilter,
  setFeatureFilter,
  cuisineTypes,
  neighborhoods,
  priceRanges,
  features,
}: FiltersProps) {
  const [showFilters, setShowFilters] = useState(false);

  const activeFiltersCount = [
    veganStatusFilter,
    cuisineFilter,
    neighborhoodFilter,
    priceFilter,
    featureFilter,
  ].filter(Boolean).length;

  const clearAllFilters = () => {
    setVeganStatusFilter('');
    setCuisineFilter('');
    setNeighborhoodFilter('');
    setPriceFilter('');
    setFeatureFilter('');
    setSearchQuery('');
  };

  return (
    <div className="sticky top-0 z-40 bg-[#1a1a1a]/95 backdrop-blur-lg border-b border-[#f5f0e8]/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        {/* Search Bar + Filter Toggle */}
        <div className="flex items-center gap-4 mb-4">
          {/* Search */}
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search restaurants, cuisine, neighborhood..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-3 pl-12 rounded-full bg-[#f5f0e8]/5 border border-[#f5f0e8]/10 text-[#f5f0e8] placeholder-[#f5f0e8]/40 focus:outline-none focus:border-[#d4a574] transition"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#f5f0e8]/40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-6 py-3 rounded-full bg-[#d4a574]/10 hover:bg-[#d4a574]/20 text-[#d4a574] font-medium transition flex items-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="6" x2="16" y2="6" />
              <line x1="8" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="12" y2="18" />
              <circle cx="18" cy="6" r="2" />
              <circle cx="6" cy="12" r="2" />
              <circle cx="14" cy="18" r="2" />
            </svg>
            Filters
            {activeFiltersCount > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-[#d4a574] text-[#1a1a1a] text-xs font-bold">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {activeFiltersCount > 0 && (
            <button
              onClick={clearAllFilters}
              className="px-4 py-3 rounded-full bg-[#f5f0e8]/5 hover:bg-[#f5f0e8]/10 text-[#f5f0e8]/60 text-sm transition"
            >
              Clear all
            </button>
          )}
        </div>

        {/* Filter Pills - Expanded */}
        {showFilters && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
            {/* Vegan Status */}
            <div>
              <label className="text-xs text-[#f5f0e8]/40 mb-2 block">Type</label>
              <select
                value={veganStatusFilter}
                onChange={(e) => setVeganStatusFilter(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-[#f5f0e8]/5 border border-[#f5f0e8]/10 text-[#f5f0e8] text-sm focus:outline-none focus:border-[#d4a574] transition"
              >
                <option value="">All Types</option>
                <option value="100% Vegan">100% Vegan</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Vegan-Friendly">Vegan-Friendly</option>
              </select>
            </div>

            {/* Cuisine */}
            <div>
              <label className="text-xs text-[#f5f0e8]/40 mb-2 block">Cuisine</label>
              <select
                value={cuisineFilter}
                onChange={(e) => setCuisineFilter(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-[#f5f0e8]/5 border border-[#f5f0e8]/10 text-[#f5f0e8] text-sm focus:outline-none focus:border-[#d4a574] transition"
              >
                <option value="">All Cuisines</option>
                {cuisineTypes.map((cuisine) => (
                  <option key={cuisine} value={cuisine}>
                    {cuisine}
                  </option>
                ))}
              </select>
            </div>

            {/* Neighborhood */}
            <div>
              <label className="text-xs text-[#f5f0e8]/40 mb-2 block">Neighborhood</label>
              <select
                value={neighborhoodFilter}
                onChange={(e) => setNeighborhoodFilter(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-[#f5f0e8]/5 border border-[#f5f0e8]/10 text-[#f5f0e8] text-sm focus:outline-none focus:border-[#d4a574] transition"
              >
                <option value="">All Areas</option>
                {neighborhoods.map((neighborhood) => (
                  <option key={neighborhood.slug} value={neighborhood.slug}>
                    {neighborhood.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="text-xs text-[#f5f0e8]/40 mb-2 block">Price</label>
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-[#f5f0e8]/5 border border-[#f5f0e8]/10 text-[#f5f0e8] text-sm focus:outline-none focus:border-[#d4a574] transition"
              >
                <option value="">Any Price</option>
                {priceRanges.map((price) => (
                  <option key={price} value={price}>
                    {price}
                  </option>
                ))}
              </select>
            </div>

            {/* Features */}
            <div>
              <label className="text-xs text-[#f5f0e8]/40 mb-2 block">Features</label>
              <select
                value={featureFilter}
                onChange={(e) => setFeatureFilter(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-[#f5f0e8]/5 border border-[#f5f0e8]/10 text-[#f5f0e8] text-sm focus:outline-none focus:border-[#d4a574] transition"
              >
                <option value="">All Features</option>
                {features.map((feature) => (
                  <option key={feature} value={feature}>
                    {feature}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Active Filters Display (when collapsed) */}
        {!showFilters && activeFiltersCount > 0 && (
          <div className="flex flex-wrap gap-2">
            {veganStatusFilter && (
              <span className="px-3 py-1 rounded-full bg-[#d4a574]/20 text-[#d4a574] text-xs flex items-center gap-2">
                {veganStatusFilter}
                <button onClick={() => setVeganStatusFilter('')} className="hover:text-[#f5f0e8]">×</button>
              </span>
            )}
            {cuisineFilter && (
              <span className="px-3 py-1 rounded-full bg-[#d4a574]/20 text-[#d4a574] text-xs flex items-center gap-2">
                {cuisineFilter}
                <button onClick={() => setCuisineFilter('')} className="hover:text-[#f5f0e8]">×</button>
              </span>
            )}
            {neighborhoodFilter && (
              <span className="px-3 py-1 rounded-full bg-[#d4a574]/20 text-[#d4a574] text-xs flex items-center gap-2">
                {neighborhoods.find(n => n.slug === neighborhoodFilter)?.name}
                <button onClick={() => setNeighborhoodFilter('')} className="hover:text-[#f5f0e8]">×</button>
              </span>
            )}
            {priceFilter && (
              <span className="px-3 py-1 rounded-full bg-[#d4a574]/20 text-[#d4a574] text-xs flex items-center gap-2">
                {priceFilter}
                <button onClick={() => setPriceFilter('')} className="hover:text-[#f5f0e8]">×</button>
              </span>
            )}
            {featureFilter && (
              <span className="px-3 py-1 rounded-full bg-[#d4a574]/20 text-[#d4a574] text-xs flex items-center gap-2">
                {featureFilter}
                <button onClick={() => setFeatureFilter('')} className="hover:text-[#f5f0e8]">×</button>
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
