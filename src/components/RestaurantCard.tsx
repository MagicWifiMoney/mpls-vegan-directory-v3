import Link from 'next/link';
import { Restaurant } from '@/data/restaurants';

interface RestaurantCardProps {
  restaurant: Restaurant;
  index?: number;
}

export default function RestaurantCard({ restaurant, index = 0 }: RestaurantCardProps) {
  const statusConfig = {
    '100% Vegan': { 
      class: 'badge-vegan',
      icon: (
        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"/>
        </svg>
      )
    },
    'Vegetarian': { 
      class: 'badge-vegetarian',
      icon: (
        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        </svg>
      )
    },
    'Vegan-Friendly': { 
      class: 'badge-friendly',
      icon: (
        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
        </svg>
      )
    },
  };

  const status = statusConfig[restaurant.veganStatus];

  return (
    <Link 
      href={`/restaurants/${restaurant.slug}`}
      className="group block"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <article className="card-elevated rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-500">
        {/* Image area */}
        <div className="relative h-52 overflow-hidden">
          {/* Gradient background with pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#3d4a3d] via-[#4a5d4a] to-[#3d4a3d]">
            {/* Decorative pattern */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(245, 240, 232, 0.3) 1px, transparent 0)`,
                backgroundSize: '24px 24px',
              }}
            />
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#d4a574]/20 blur-2xl group-hover:scale-150 transition-transform duration-700" />
          </div>
          
          {/* Decorative leaf icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg 
              className="w-20 h-20 text-[#f5f0e8]/10 group-hover:scale-110 group-hover:text-[#f5f0e8]/20 transition-all duration-500" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
            </svg>
          </div>

          {/* Status badge */}
          <div className="absolute top-4 right-4">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${status.class}`}>
              {status.icon}
              {restaurant.veganStatus}
            </span>
          </div>

          {/* Price range */}
          <div className="absolute bottom-4 left-4">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-[#1a1a1a]/80 text-[#f5f0e8]/80 backdrop-blur-sm">
              {restaurant.priceRange}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 flex flex-col">
          {/* Name and cuisine */}
          <div className="mb-4">
            <h3 className="font-display text-xl text-[#f5f0e8] group-hover:text-[#d4a574] transition-colors duration-300 mb-2">
              {restaurant.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {restaurant.cuisineType.slice(0, 2).map((cuisine) => (
                <span 
                  key={cuisine}
                  className="text-xs text-[#f5f0e8]/50 px-2 py-1 rounded-full border border-[#f5f0e8]/10"
                >
                  {cuisine}
                </span>
              ))}
              {restaurant.cuisineType.length > 2 && (
                <span className="text-xs text-[#f5f0e8]/30">
                  +{restaurant.cuisineType.length - 2}
                </span>
              )}
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-sm text-[#f5f0e8]/40 mb-4">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{restaurant.neighborhood}</span>
          </div>

          {/* Description */}
          <p className="text-sm text-[#f5f0e8]/50 line-clamp-2 flex-1 leading-relaxed">
            {restaurant.description}
          </p>

          {/* Footer with rating */}
          {restaurant.rating && (
            <div className="flex items-center justify-between mt-5 pt-4 border-t border-[#f5f0e8]/5">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star}
                      className={`w-4 h-4 ${star <= Math.round(restaurant.rating!) ? 'text-[#d4a574]' : 'text-[#f5f0e8]/10'}`}
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-[#f5f0e8]/60 font-medium">{restaurant.rating}</span>
              </div>
              {restaurant.reviewCount && (
                <span className="text-xs text-[#f5f0e8]/30">
                  {restaurant.reviewCount} reviews
                </span>
              )}
            </div>
          )}
        </div>

        {/* Hover indicator */}
        <div className="h-1 bg-gradient-to-r from-[#d4a574] to-[#c17f59] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </article>
    </Link>
  );
}
