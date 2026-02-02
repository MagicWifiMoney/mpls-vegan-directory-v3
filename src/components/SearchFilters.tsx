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

  const veganStatuses = ['All', '100% Vegan', 'Vegetarian', 'Vegan-Friendly'];

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search restaurants, cuisines, neighborhoods..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              onSearch(e.target.value);
            }}
            className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
          />
          <svg 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </form>

      {/* Filter Buttons */}
      <div className="space-y-4">
        {/* Vegan Status Filter */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Vegan Status</h3>
          <div className="flex flex-wrap gap-2">
            {veganStatuses.map((status) => (
              <button
                key={status}
                onClick={() => onFilterVeganStatus(status === 'All' ? '' : status)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  (status === 'All' && !activeVeganStatus) || activeVeganStatus === status
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Cuisine Filter */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Cuisine Type</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onFilterCuisine('')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !activeCuisine
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {cuisineTypes.map((cuisine) => (
              <button
                key={cuisine}
                onClick={() => onFilterCuisine(cuisine)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCuisine === cuisine
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cuisine}
              </button>
            ))}
          </div>
        </div>

        {/* Neighborhood Filter */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Neighborhood</h3>
          <select
            value={activeNeighborhood}
            onChange={(e) => onFilterNeighborhood(e.target.value)}
            className="w-full md:w-auto px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
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
        </div>
      </div>
    </div>
  );
}
