'use client';

import { Restaurant } from '@/data/restaurants';

interface MapProps {
  restaurants: Restaurant[];
  selectedRestaurant?: Restaurant | null;
  onSelectRestaurant?: (restaurant: Restaurant) => void;
}

export default function Map({ restaurants, selectedRestaurant, onSelectRestaurant }: MapProps) {
  // Center of Minneapolis/St Paul metro area
  const centerLat = 44.9537;
  const centerLng = -93.2650;
  
  // Generate static map URL for initial display
  const markers = restaurants
    .map((r) => `markers=color:green|${r.coordinates.lat},${r.coordinates.lng}`)
    .join('&');

  const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${centerLat},${centerLng}&zoom=12&size=800x400&maptype=roadmap&${markers}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}`;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative">
        {/* Static map placeholder - in production, replace with interactive map */}
        <div className="h-[400px] bg-gradient-to-br from-green-100 to-blue-100 relative">
          <div className="absolute inset-0 flex items-center justify-center flex-col text-gray-600">
            <svg className="w-16 h-16 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-lg font-medium">Interactive Map</p>
            <p className="text-sm text-gray-500">Showing {restaurants.length} restaurants</p>
            <p className="text-xs text-gray-400 mt-2">Minneapolis & Saint Paul</p>
          </div>
          
          {/* Restaurant pins visualization */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-md">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Featured Locations</h4>
              <div className="flex flex-wrap gap-1">
                {restaurants.slice(0, 8).map((r) => (
                  <button
                    key={r.id}
                    onClick={() => onSelectRestaurant?.(r)}
                    className={`text-xs px-2 py-1 rounded-full transition-colors ${
                      selectedRestaurant?.id === r.id
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 hover:bg-green-100 text-gray-700'
                    }`}
                  >
                    {r.name.length > 20 ? r.name.slice(0, 20) + '...' : r.name}
                  </button>
                ))}
                {restaurants.length > 8 && (
                  <span className="text-xs px-2 py-1 text-gray-500">
                    +{restaurants.length - 8} more
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Selected restaurant info */}
      {selectedRestaurant && (
        <div className="p-4 border-t border-gray-100">
          <h3 className="font-semibold text-gray-900">{selectedRestaurant.name}</h3>
          <p className="text-sm text-gray-600">{selectedRestaurant.address}, {selectedRestaurant.city}</p>
          <div className="flex items-center mt-2 space-x-4">
            <span className={`text-xs px-2 py-1 rounded-full ${
              selectedRestaurant.veganStatus === '100% Vegan' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-blue-100 text-blue-800'
            }`}>
              {selectedRestaurant.veganStatus}
            </span>
            <span className="text-sm text-gray-500">{selectedRestaurant.cuisineType.join(', ')}</span>
          </div>
        </div>
      )}
    </div>
  );
}
