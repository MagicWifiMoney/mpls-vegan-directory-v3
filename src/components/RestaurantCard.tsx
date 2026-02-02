import Link from 'next/link';
import { Restaurant } from '@/data/restaurants';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const statusColors = {
    '100% Vegan': 'bg-green-100 text-green-800',
    'Vegetarian': 'bg-yellow-100 text-yellow-800',
    'Vegan-Friendly': 'bg-blue-100 text-blue-800',
  };

  return (
    <Link href={`/restaurants/${restaurant.slug}`}>
      <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        {/* Image placeholder */}
        <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl opacity-50">🌱</span>
          </div>
          <div className="absolute top-3 right-3">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[restaurant.veganStatus]}`}>
              {restaurant.veganStatus}
            </span>
          </div>
        </div>

        <div className="p-5 flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-lg text-gray-900 leading-tight">{restaurant.name}</h3>
            <span className="text-gray-500 text-sm ml-2">{restaurant.priceRange}</span>
          </div>

          <div className="flex items-center text-sm text-gray-600 mb-2">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{restaurant.neighborhood}</span>
          </div>

          <div className="flex flex-wrap gap-1 mb-3">
            {restaurant.cuisineType.slice(0, 3).map((cuisine) => (
              <span 
                key={cuisine}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
              >
                {cuisine}
              </span>
            ))}
          </div>

          <p className="text-gray-600 text-sm line-clamp-3 flex-1">
            {restaurant.description.slice(0, 150)}...
          </p>

          {restaurant.rating && (
            <div className="flex items-center mt-3 pt-3 border-t border-gray-100">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="ml-1 font-semibold text-gray-900">{restaurant.rating}</span>
              </div>
              {restaurant.reviewCount && (
                <span className="text-gray-500 text-sm ml-2">
                  ({restaurant.reviewCount} reviews)
                </span>
              )}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
