'use client';

import { Restaurant, restaurants } from '@/data/restaurants';
import Link from 'next/link';
import Image from 'next/image';

interface NearbyRestaurantsProps {
  currentRestaurant: Restaurant;
}

function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 3959; // Earth's radius in miles
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export default function NearbyRestaurants({ currentRestaurant }: NearbyRestaurantsProps) {
  // Calculate distances and sort
  const nearby = restaurants
    .filter((r) => r.id !== currentRestaurant.id)
    .map((restaurant) => ({
      ...restaurant,
      distance: calculateDistance(
        currentRestaurant.coordinates.lat,
        currentRestaurant.coordinates.lng,
        restaurant.coordinates.lat,
        restaurant.coordinates.lng
      ),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 3);

  if (nearby.length === 0) return null;

  return (
    <section className="card-elevated rounded-2xl p-8">
      <div className="text-center mb-8">
        <h3 className="font-display text-2xl text-[#f5f0e8] mb-2">
          🌱 Vegan Restaurants Near {currentRestaurant.name}
        </h3>
        <p className="text-[#f5f0e8]/60">Explore more plant-based options nearby</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {nearby.map((restaurant) => (
          <Link
            key={restaurant.id}
            href={`/restaurants/${restaurant.slug}`}
            className="group block card-elevated rounded-xl overflow-hidden hover:ring-2 hover:ring-[#d4a574]/50 transition-all"
          >
            {/* Image */}
            <div className="relative h-48 bg-[#f5f0e8]/5">
              {restaurant.images?.[0] ? (
                <Image
                  src={restaurant.images[0]}
                  alt={restaurant.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  🍃
                </div>
              )}
              {/* Distance badge */}
              <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-sm text-white text-xs font-medium">
                {restaurant.distance.toFixed(1)} mi
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h4 className="font-display text-lg text-[#f5f0e8] mb-2 group-hover:text-[#d4a574] transition">
                {restaurant.name}
              </h4>
              
              {/* Rating */}
              {restaurant.rating && (
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-[#d4a574] text-sm">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>{i < Math.round(restaurant.rating) ? '★' : '☆'}</span>
                    ))}
                  </div>
                  <span className="text-xs text-[#f5f0e8]/40">
                    {restaurant.rating.toFixed(1)} ({restaurant.reviewCount})
                  </span>
                </div>
              )}

              {/* Categories */}
              <div className="flex flex-wrap gap-1.5">
                {restaurant.categories.slice(0, 2).map((category) => (
                  <span
                    key={category}
                    className="px-2 py-0.5 rounded text-xs bg-[#d4a574]/10 text-[#d4a574]"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View All */}
      <div className="mt-8 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#d4a574]/10 hover:bg-[#d4a574]/20 text-[#d4a574] font-medium transition"
        >
          View All {restaurants.length} Vegan Restaurants →
        </Link>
      </div>
    </section>
  );
}
