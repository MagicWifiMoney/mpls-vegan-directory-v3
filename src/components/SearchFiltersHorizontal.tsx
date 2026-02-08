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
  const [showMoreFilters, setShowMoreFilters] = useState(false);

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

  // Toggle filter - if already selected, clear it
  const toggleFilter = (
    currentValue: string,
    newValue: string,
    setter: (value: string) => void
  ) => {
    setter(currentValue === newValue ? '' : newValue);
  };

  // Pill button component
  const FilterPill = ({
    label,
    isActive,
    onClick,
    variant = 'default',
  }: {
    label: string;
    isActive: boolean;
    onClick: () => void;
    variant?: 'default' | 'vegan' | 'price';
  }) => {
    const baseClasses = "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer select-none";
    
    const variants = {
      default: isActive
        ? "bg-[#d4a574] text-[#1a1a1a] shadow-lg shadow-[#d4a574]/20"
        : "bg-[#f5f0e8]/5 text-[#f5f0e8]/70 hover:bg-[#f5f0e8]/10 hover:text-[#f5f0e8] border border-[#f5f0e8]/10",
      vegan: isActive
        ? "bg-[#3d6b3d] text-[#f5f0e8] shadow-lg shadow-[#3d6b3d]/30"
        : "bg-[#3d6b3d]/10 text-[#3d6b3d] hover:bg-[#3d6b3d]/20 border border-[#3d6b3d]/30",
      price: isActive
        ? "bg-[#d4a574] text-[#1a1a1a] shadow-lg shadow-[#d4a574]/20"
        : "bg-[#f5f0e8]/5 text-[#f5f0e8]/70 hover:bg-[#f5f0e8]/10 hover:text-[#f5f0e8] border border-[#f5f0e8]/10",
    };

    return (
      <button
        onClick={onClick}
        className={`${baseClasses} ${variants[variant]}`}
      >
        {isActive && (
          <span className="mr-1">✓</span>
        )}
        {label}
      </button>
    );
  };

  // Popular features to show as pills
  const popularFeatures = ['Dine-In', 'Takeout', 'Delivery', 'Brunch', 'Full Bar', 'Outdoor Seating'];

  return (
    <>
      {/* Compact sticky bar — search + active filter count */}
      <div className="sticky top-0 z-40 bg-[#1a1a1a] border-b border-[#f5f0e8]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search restaurants..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-2.5 pl-10 rounded-full bg-[#f5f0e8]/5 border border-[#f5f0e8]/10 text-[#f5f0e8] placeholder-[#f5f0e8]/40 focus:outline-none focus:border-[#d4a574] focus:ring-2 focus:ring-[#d4a574]/20 transition text-sm"
              />
              <svg
                className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#f5f0e8]/40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#f5f0e8]/10 hover:bg-[#f5f0e8]/20 flex items-center justify-center text-[#f5f0e8]/60 hover:text-[#f5f0e8] transition text-xs"
                >
                  ×
                </button>
              )}
            </div>

            <button
              onClick={() => setShowMoreFilters(!showMoreFilters)}
              className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 shrink-0 ${
                showMoreFilters || activeFiltersCount > 0
                  ? 'bg-[#d4a574] text-[#1a1a1a]'
                  : 'bg-[#f5f0e8]/5 text-[#f5f0e8]/70 hover:bg-[#f5f0e8]/10 border border-[#f5f0e8]/10'
              }`}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M7 12h10M10 18h4" />
              </svg>
              Filters
              {activeFiltersCount > 0 && (
                <span className={`w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold ${
                  showMoreFilters || activeFiltersCount > 0 ? 'bg-[#1a1a1a]/20' : 'bg-[#d4a574] text-[#1a1a1a]'
                }`}>
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {activeFiltersCount > 0 && (
              <button
                onClick={clearAllFilters}
                className="p-2.5 rounded-full bg-[#f5f0e8]/5 hover:bg-[#f5f0e8]/10 text-[#f5f0e8]/60 hover:text-[#f5f0e8] transition shrink-0"
                title="Clear all filters"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Expandable filter drawer (NOT sticky — scrolls with content) */}
      {showMoreFilters && (
        <div className="bg-[#1a1a1a] border-b border-[#f5f0e8]/10 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
            {/* Vegan Status */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-[#f5f0e8]/40 mr-1 w-12">Type</span>
              <FilterPill
                label="🌱 100% Vegan"
                isActive={veganStatusFilter === '100% Vegan'}
                onClick={() => toggleFilter(veganStatusFilter, '100% Vegan', setVeganStatusFilter)}
                variant="vegan"
              />
              <FilterPill
                label="🥬 Vegetarian"
                isActive={veganStatusFilter === 'Vegetarian'}
                onClick={() => toggleFilter(veganStatusFilter, 'Vegetarian', setVeganStatusFilter)}
                variant="vegan"
              />
              <FilterPill
                label="🍃 Vegan-Friendly"
                isActive={veganStatusFilter === 'Vegan-Friendly'}
                onClick={() => toggleFilter(veganStatusFilter, 'Vegan-Friendly', setVeganStatusFilter)}
                variant="vegan"
              />
            </div>

            {/* Price */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-[#f5f0e8]/40 mr-1 w-12">Price</span>
              {priceRanges.map((price) => (
                <FilterPill
                  key={price}
                  label={price}
                  isActive={priceFilter === price}
                  onClick={() => toggleFilter(priceFilter, price, setPriceFilter)}
                  variant="price"
                />
              ))}
            </div>

            {/* Cuisine & Neighborhood */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs uppercase tracking-wider text-[#f5f0e8]/40 mr-1 w-12">More</span>
              <div className="relative">
                <select
                  value={cuisineFilter}
                  onChange={(e) => setCuisineFilter(e.target.value)}
                  className={`appearance-none px-4 py-2 pr-8 rounded-full text-sm font-medium transition-all cursor-pointer ${
                    cuisineFilter
                      ? 'bg-[#d4a574] text-[#1a1a1a]'
                      : 'bg-[#f5f0e8]/5 text-[#f5f0e8]/70 hover:bg-[#f5f0e8]/10 border border-[#f5f0e8]/10'
                  }`}
                >
                  <option value="">All Cuisines</option>
                  {cuisineTypes.map((cuisine) => (
                    <option key={cuisine} value={cuisine}>{cuisine}</option>
                  ))}
                </select>
                <svg className={`absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${cuisineFilter ? 'text-[#1a1a1a]' : 'text-[#f5f0e8]/40'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
              </div>

              <div className="relative">
                <select
                  value={neighborhoodFilter}
                  onChange={(e) => setNeighborhoodFilter(e.target.value)}
                  className={`appearance-none px-4 py-2 pr-8 rounded-full text-sm font-medium transition-all cursor-pointer ${
                    neighborhoodFilter
                      ? 'bg-[#d4a574] text-[#1a1a1a]'
                      : 'bg-[#f5f0e8]/5 text-[#f5f0e8]/70 hover:bg-[#f5f0e8]/10 border border-[#f5f0e8]/10'
                  }`}
                >
                  <option value="">All Neighborhoods</option>
                  {neighborhoods.map((n) => (
                    <option key={n.slug} value={n.slug}>{n.name}</option>
                  ))}
                </select>
                <svg className={`absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${neighborhoodFilter ? 'text-[#1a1a1a]' : 'text-[#f5f0e8]/40'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-[#f5f0e8]/40 mr-1 w-12">Tags</span>
              {features.map((feature) => (
                <FilterPill
                  key={feature}
                  label={feature}
                  isActive={featureFilter === feature}
                  onClick={() => toggleFilter(featureFilter, feature, setFeatureFilter)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
