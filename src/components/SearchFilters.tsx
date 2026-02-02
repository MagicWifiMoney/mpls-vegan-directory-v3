'use client';

import { useState } from 'react';
import { cuisineTypes, neighborhoods } from '@/data/restaurants';

interface SearchFiltersProps {
  onSearch: (query: string) => void;
  onFilterVeganStatus: (status: string) => void;
  onFilterCuisine: (cuisine: string) => void;
  onFilterNeighborhood: (neighborhood: string) => void;
  activeVeganStatus: string;
  activeCuisine: string;
  activeNeighborhood: string;
}

export default function SearchFilters({
  onSearch,
  onFilterVeganStatus,
  onFilterCuisine,
  onFilterNeighborhood,
  activeVeganStatus,
  activeCuisine,
  activeNeighborhood,
}: SearchFiltersProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const veganStatuses = [
    { value: '', label: 'All' },
    { value: '100% Vegan', label: '100% Vegan', color: 'bg-[#3d4a3d]' },
    { value: 'Vegetarian', label: 'Vegetarian', color: 'bg-[#d4a574]' },
    { value: 'Vegan-Friendly', label: 'Vegan-Friendly', color: 'bg-[#8b9b7a]' },
  ];

  return (
    <div className="card-elevated rounded-2xl p-6 space-y-6">
      {/* Search Bar */}
      <form onSubmit={handleSearch}>
        <div className="relative">
          <input
            type="text"
            placeholder="Search restaurants, cuisines..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              onSearch(e.target.value);
            }}
            className="input-field w-full px-5 py-4 pl-12 rounded-xl text-sm"
          />
          <svg 
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#f5f0e8]/30"
            viewBox="0 0 24 24"
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </form>

      {/* Divider */}
      <div className="section-divider" />

      {/* Vegan Status Filter */}
      <div>
        <h3 className="text-xs uppercase tracking-widest text-[#d4a574] mb-3 font-medium">Type</h3>
        <div className="flex flex-wrap gap-2">
          {veganStatuses.map((status) => (
            <button
              key={status.value}
              onClick={() => onFilterVeganStatus(status.value)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                activeVeganStatus === status.value
                  ? 'bg-[#d4a574] text-[#1a1a1a] font-medium'
                  : 'bg-[#2a2a2a] text-[#f5f0e8]/60 hover:bg-[#3a3a3a] hover:text-[#f5f0e8]'
              }`}
            >
              {status.color && (
                <span className={`w-2 h-2 rounded-full ${status.color}`} />
              )}
              {status.label}
            </button>
          ))}
        </div>
      </div>

      {/* Cuisine Filter */}
      <div>
        <h3 className="text-xs uppercase tracking-widest text-[#d4a574] mb-3 font-medium">Cuisine</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onFilterCuisine('')}
            className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
              !activeCuisine
                ? 'bg-[#d4a574] text-[#1a1a1a] font-medium'
                : 'bg-[#2a2a2a] text-[#f5f0e8]/60 hover:bg-[#3a3a3a] hover:text-[#f5f0e8]'
            }`}
          >
            All
          </button>
          {cuisineTypes.map((cuisine) => (
            <button
              key={cuisine}
              onClick={() => onFilterCuisine(cuisine)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                activeCuisine === cuisine
                  ? 'bg-[#d4a574] text-[#1a1a1a] font-medium'
                  : 'bg-[#2a2a2a] text-[#f5f0e8]/60 hover:bg-[#3a3a3a] hover:text-[#f5f0e8]'
              }`}
            >
              {cuisine}
            </button>
          ))}
        </div>
      </div>

      {/* Neighborhood Filter */}
      <div>
        <h3 className="text-xs uppercase tracking-widest text-[#d4a574] mb-3 font-medium">Neighborhood</h3>
        <div className="relative">
          <select
            value={activeNeighborhood}
            onChange={(e) => onFilterNeighborhood(e.target.value)}
            className="input-field w-full px-4 py-3 rounded-xl text-sm appearance-none cursor-pointer"
          >
            <option value="">All Neighborhoods</option>
            <optgroup label="Minneapolis">
              {neighborhoods.filter(n => n.city === 'Minneapolis').map((n) => (
                <option key={n.slug} value={n.slug}>{n.name}</option>
              ))}
            </optgroup>
            <optgroup label="Saint Paul">
              {neighborhoods.filter(n => n.city === 'Saint Paul').map((n) => (
                <option key={n.slug} value={n.slug}>{n.name}</option>
              ))}
            </optgroup>
          </select>
          <svg 
            className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#f5f0e8]/30 pointer-events-none"
            viewBox="0 0 24 24"
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>

      {/* Active filters summary */}
      {(activeVeganStatus || activeCuisine || activeNeighborhood) && (
        <>
          <div className="section-divider" />
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#f5f0e8]/40">
              Filters active
            </span>
            <button
              onClick={() => {
                onFilterVeganStatus('');
                onFilterCuisine('');
                onFilterNeighborhood('');
              }}
              className="text-xs text-[#d4a574] hover:text-[#e6c49a] transition-colors"
            >
              Clear all
            </button>
          </div>
        </>
      )}
    </div>
  );
}
