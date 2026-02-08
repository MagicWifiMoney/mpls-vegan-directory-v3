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
    <div className="sticky top-0 z-40 bg-[#1a1a1a]/95 backdrop-blur-lg border-b border-[#f5f0e8]/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        {/* Search Bar */}
        <div className="flex items-center gap-4 mb-5">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search restaurants, cuisine, neighborhood..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-3.5 pl-12 rounded-full bg-[#f5f0e8]/5 border border-[#f5f0e8]/10 text-[#f5f0e8] placeholder-[#f5f0e8]/40 focus:outline-none focus:border-[#d4a574] focus:ring-2 focus:ring-[#d4a574]/20 transition text-base"
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
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#f5f0e8]/10 hover:bg-[#f5f0e8]/20 flex items-center justify-center text-[#f5f0e8]/60 hover:text-[#f5f0e8] transition"
              >
                ×
              </button>
            )}
          </div>

          {activeFiltersCount > 0 && (
            <button
              onClick={clearAllFilters}
              className="px-5 py-3 rounded-full bg-[#f5f0e8]/5 hover:bg-[#f5f0e8]/10 text-[#f5f0e8]/60 hover:text-[#f5f0e8] text-sm font-medium transition flex items-center gap-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
              Clear ({activeFiltersCount})
            </button>
          )}
        </div>

        {/* Filter Pills Section */}
        <div className="space-y-4">
          {/* Row 1: Vegan Status Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-[#f5f0e8]/40 mr-2 min-w-[60px]">Type</span>
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

          {/* Row 2: Price Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-[#f5f0e8]/40 mr-2 min-w-[60px]">Price</span>
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

          {/* Row 3: Cuisine & Neighborhood Dropdowns + Features Pills */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-[#f5f0e8]/40 mr-1 min-w-[60px]">More</span>
            
            {/* Cuisine Dropdown */}
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
                  <option key={cuisine} value={cuisine}>
                    {cuisine}
                  </option>
                ))}
              </select>
              <svg
                className={`absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${
                  cuisineFilter ? 'text-[#1a1a1a]' : 'text-[#f5f0e8]/40'
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>

            {/* Neighborhood Dropdown */}
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
                {neighborhoods.map((neighborhood) => (
                  <option key={neighborhood.slug} value={neighborhood.slug}>
                    {neighborhood.name}
                  </option>
                ))}
              </select>
              <svg
                className={`absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${
                  neighborhoodFilter ? 'text-[#1a1a1a]' : 'text-[#f5f0e8]/40'
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>

            {/* Divider */}
            <div className="w-px h-6 bg-[#f5f0e8]/10 mx-1 hidden md:block" />

            {/* Popular Feature Pills */}
            <div className="hidden md:flex flex-wrap gap-2">
              {popularFeatures.slice(0, 4).map((feature) => (
                <FilterPill
                  key={feature}
                  label={feature}
                  isActive={featureFilter === feature}
                  onClick={() => toggleFilter(featureFilter, feature, setFeatureFilter)}
                />
              ))}
            </div>

            {/* More filters toggle */}
            <button
              onClick={() => setShowMoreFilters(!showMoreFilters)}
              className="px-4 py-2 rounded-full text-sm font-medium bg-[#f5f0e8]/5 text-[#f5f0e8]/70 hover:bg-[#f5f0e8]/10 hover:text-[#f5f0e8] border border-[#f5f0e8]/10 transition flex items-center gap-1"
            >
              {showMoreFilters ? 'Less' : 'More'}
              <svg
                className={`w-3 h-3 transition-transform ${showMoreFilters ? 'rotate-180' : ''}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>

          {/* Expanded Features */}
          {showMoreFilters && (
            <div className="flex flex-wrap items-center gap-2 pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
              <span className="text-xs uppercase tracking-wider text-[#f5f0e8]/40 mr-2 min-w-[60px]">Features</span>
              {features.map((feature) => (
                <FilterPill
                  key={feature}
                  label={feature}
                  isActive={featureFilter === feature}
                  onClick={() => toggleFilter(featureFilter, feature, setFeatureFilter)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
