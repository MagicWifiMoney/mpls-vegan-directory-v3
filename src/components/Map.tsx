'use client';

import { Restaurant } from '@/data/restaurants';

interface MapProps {
  restaurants: Restaurant[];
  selectedRestaurant: Restaurant | null;
  onSelectRestaurant: (restaurant: Restaurant | null) => void;
}

export default function Map({ restaurants, selectedRestaurant, onSelectRestaurant }: MapProps) {
  return (
    <div className="card-elevated rounded-2xl overflow-hidden">
      {/* Map header */}
      <div className="px-5 py-4 border-b border-[#f5f0e8]/5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#d4a574]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm text-[#f5f0e8]/60">Map View</span>
          </div>
          <span className="text-xs text-[#f5f0e8]/30">{restaurants.length} locations</span>
        </div>
      </div>

      {/* Map placeholder */}
      <div className="relative h-64 bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a]">
        {/* Stylized map background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Streets/grid pattern */}
            <line x1="0" y1="60" x2="400" y2="60" stroke="#f5f0e8" strokeWidth="0.5" strokeDasharray="4 4"/>
            <line x1="0" y1="125" x2="400" y2="125" stroke="#f5f0e8" strokeWidth="0.5"/>
            <line x1="0" y1="190" x2="400" y2="190" stroke="#f5f0e8" strokeWidth="0.5" strokeDasharray="4 4"/>
            <line x1="80" y1="0" x2="80" y2="250" stroke="#f5f0e8" strokeWidth="0.5" strokeDasharray="4 4"/>
            <line x1="200" y1="0" x2="200" y2="250" stroke="#f5f0e8" strokeWidth="0.5"/>
            <line x1="320" y1="0" y2="250" stroke="#f5f0e8" strokeWidth="0.5" strokeDasharray="4 4"/>
            {/* Lakes */}
            <ellipse cx="300" cy="100" rx="40" ry="30" fill="#3d4a3d" opacity="0.3"/>
            <ellipse cx="120" cy="180" rx="35" ry="25" fill="#3d4a3d" opacity="0.3"/>
          </svg>
        </div>

        {/* Restaurant markers */}
        <div className="absolute inset-0 p-4">
          {restaurants.slice(0, 8).map((restaurant, index) => {
            const positions = [
              { top: '20%', left: '25%' },
              { top: '35%', left: '60%' },
              { top: '55%', left: '30%' },
              { top: '70%', left: '70%' },
              { top: '15%', left: '80%' },
              { top: '45%', left: '15%' },
              { top: '65%', left: '50%' },
              { top: '25%', left: '45%' },
            ];
            const pos = positions[index] || { top: '50%', left: '50%' };
            const isSelected = selectedRestaurant?.id === restaurant.id;
            
            return (
              <button
                key={restaurant.id}
                onClick={() => onSelectRestaurant(isSelected ? null : restaurant)}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isSelected ? 'z-10 scale-125' : 'hover:scale-110'
                }`}
                style={{ top: pos.top, left: pos.left }}
                title={restaurant.name}
              >
                <div className={`w-3 h-3 rounded-full ${
                  isSelected 
                    ? 'bg-[#d4a574] shadow-lg shadow-[#d4a574]/50' 
                    : 'bg-[#3d4a3d] hover:bg-[#4a5d4a]'
                }`}>
                  {isSelected && (
                    <span className="absolute -inset-2 rounded-full bg-[#d4a574]/20 animate-ping" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected restaurant info */}
        {selectedRestaurant && (
          <div className="absolute bottom-4 left-4 right-4 bg-[#1a1a1a]/95 backdrop-blur-sm rounded-xl p-4 border border-[#f5f0e8]/10">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-display text-sm text-[#f5f0e8]">{selectedRestaurant.name}</h4>
                <p className="text-xs text-[#f5f0e8]/40 mt-1">{selectedRestaurant.neighborhood}</p>
              </div>
              <button
                onClick={() => onSelectRestaurant(null)}
                className="text-[#f5f0e8]/30 hover:text-[#f5f0e8] transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Map controls hint */}
        <div className="absolute top-4 right-4">
          <span className="text-[10px] text-[#f5f0e8]/20 uppercase tracking-wider">Interactive</span>
        </div>
      </div>
    </div>
  );
}
