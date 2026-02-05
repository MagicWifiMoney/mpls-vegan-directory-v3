'use client';

import { useEffect, useState } from 'react';
import { Restaurant } from '@/data/restaurants';
import Image from 'next/image';
import ReviewTabs from './ReviewTabs';
import dynamic from 'next/dynamic';

// Lazy load NearbyRestaurants (it's below the fold)
const NearbyRestaurants = dynamic(() => import('./NearbyRestaurants'), {
  loading: () => <div className="card-elevated rounded-2xl p-8 animate-pulse h-64" />,
});

interface PlaceDetails {
  rating?: number;
  userRatingsTotal?: number;
  openingHours?: string[];
  photos?: string[];
  reviews?: Array<{
    author_name: string;
    rating: number;
    text: string;
    time: number;
    profile_photo_url: string;
  }>;
  openNow?: boolean;
  popularItems?: string[];
  yelp?: {
    rating?: number;
    reviewCount?: number;
    photos?: string[];
    reviews?: Array<{
      author_name: string;
      rating: number;
      text: string;
      time: string;
      profile_photo_url: string;
      url: string;
    }>;
    yelpUrl?: string;
    openNow?: boolean;
  };
}

export default function RestaurantDetail({ restaurant }: { restaurant: Restaurant }) {
  const [placeDetails, setPlaceDetails] = useState<PlaceDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [activePhoto, setActivePhoto] = useState(0);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(`/api/places/${restaurant.googlePlaceId}`);
        const data = await response.json();
        setPlaceDetails(data);
      } catch (error) {
        console.error('Failed to fetch place details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [restaurant.googlePlaceId]);

  // Combine photos from Google and Yelp
  const googlePhotos = placeDetails?.photos?.map(url => url.trim()) || [];
  const yelpPhotos = placeDetails?.yelp?.photos || [];
  const photos = [...googlePhotos, ...yelpPhotos];
  
  const reviews = placeDetails?.reviews || [];
  const rating = placeDetails?.rating || restaurant.rating;
  const reviewCount = placeDetails?.userRatingsTotal || restaurant.reviewCount;

  return (
    <div className="space-y-12">
      {/* The Vibe */}
      {restaurant.theVibe && (
        <div className="card-elevated p-6 rounded-2xl border-l-4 border-[#d4a574]">
          <div className="flex items-start gap-3">
            <div className="text-2xl">✨</div>
            <div>
              <div className="text-xs font-medium text-[#d4a574] mb-1 uppercase tracking-wider">The Vibe</div>
              <p className="text-lg text-[#f5f0e8] italic leading-relaxed">{restaurant.theVibe}</p>
            </div>
          </div>
        </div>
      )}

      {/* What to Order & Best For Grid */}
      {(restaurant.whatToOrder || restaurant.bestFor) && (
        <div className="grid md:grid-cols-2 gap-6">
          {/* What to Order */}
          {restaurant.whatToOrder && restaurant.whatToOrder.length > 0 && (
            <div className="card-elevated p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#d4a574]/10 flex items-center justify-center text-xl">
                  🍽️
                </div>
                <h3 className="font-display text-xl text-[#f5f0e8]">What to Order</h3>
              </div>
              <ul className="space-y-3">
                {restaurant.whatToOrder.map((item, idx) => {
                  const [name, ...descParts] = item.split(' - ');
                  const description = descParts.join(' - ');
                  return (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#d4a574] mt-1">→</span>
                      <div className="flex-1">
                        <span className="text-[#f5f0e8] font-medium">{name}</span>
                        {description && (
                          <span className="text-[#f5f0e8]/60 text-sm block mt-0.5">{description}</span>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {/* Best For */}
          {restaurant.bestFor && restaurant.bestFor.length > 0 && (
            <div className="card-elevated p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#d4a574]/10 flex items-center justify-center text-xl">
                  🎯
                </div>
                <h3 className="font-display text-xl text-[#f5f0e8]">Best For</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {restaurant.bestFor.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full bg-[#d4a574]/10 text-[#d4a574] text-sm font-medium border border-[#d4a574]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Photo Gallery */}
      {photos.length > 0 && (
        <section>
          <div className="relative h-[60vh] rounded-2xl overflow-hidden mb-4">
            <Image
              src={photos[activePhoto]}
              alt={`${restaurant.name} - Photo ${activePhoto + 1}`}
              fill
              className="object-cover"
              unoptimized
            />
            
            {/* Navigation */}
            {photos.length > 1 && (
              <>
                <button
                  onClick={() => setActivePhoto((activePhoto - 1 + photos.length) % photos.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-sm flex items-center justify-center text-white transition"
                >
                  ←
                </button>
                <button
                  onClick={() => setActivePhoto((activePhoto + 1) % photos.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-sm flex items-center justify-center text-white transition"
                >
                  →
                </button>
              </>
            )}
            
            {/* Photo counter */}
            <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-sm">
              {activePhoto + 1} / {photos.length}
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {photos.slice(0, 10).map((photo, idx) => (
              <button
                key={idx}
                onClick={() => setActivePhoto(idx)}
                className={`relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden ${
                  activePhoto === idx ? 'ring-2 ring-[#d4a574]' : 'opacity-60 hover:opacity-100'
                } transition`}
              >
                <Image
                  src={photo}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Hours & Info Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Hours */}
        {placeDetails?.openingHours && (
          <div className="card-elevated p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#d4a574]/10 flex items-center justify-center">
                🕐
              </div>
              <div>
                <h3 className="font-display text-xl text-[#f5f0e8]">Hours</h3>
                {placeDetails.openNow !== undefined && (
                  <span className={`text-sm ${placeDetails.openNow ? 'text-green-400' : 'text-red-400'}`}>
                    {placeDetails.openNow ? '● Open Now' : '● Closed'}
                  </span>
                )}
              </div>
            </div>
            <div className="space-y-2">
              {placeDetails.openingHours.map((hours, idx) => (
                <div key={idx} className="flex justify-between text-sm">
                  <span className="text-[#f5f0e8]/60">{hours.split(':')[0]}</span>
                  <span className="text-[#f5f0e8]">{hours.split(':').slice(1).join(':').trim()}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quick Info */}
        <div className="card-elevated p-6 rounded-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#d4a574]/10 flex items-center justify-center">
              ℹ️
            </div>
            <h3 className="font-display text-xl text-[#f5f0e8]">Quick Info</h3>
          </div>
          <div className="space-y-3">
            <div>
              <div className="text-xs text-[#f5f0e8]/40 mb-1">Address</div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${restaurant.name} ${restaurant.address} ${restaurant.city}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4a574] hover:text-[#c17f59] transition"
              >
                {restaurant.address}<br />
                {restaurant.city}, {restaurant.state} {restaurant.zip}
              </a>
            </div>
            <div>
              <div className="text-xs text-[#f5f0e8]/40 mb-1">Phone</div>
              <a href={`tel:${restaurant.phone}`} className="text-[#f5f0e8] hover:text-[#d4a574] transition">
                {restaurant.phone}
              </a>
            </div>
            <div>
              <div className="text-xs text-[#f5f0e8]/40 mb-1">Website</div>
              <a
                href={restaurant.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4a574] hover:text-[#c17f59] transition"
              >
                Visit Website →
              </a>
            </div>
            {(rating || placeDetails?.yelp?.rating) && (
              <div>
                <div className="text-xs text-[#f5f0e8]/40 mb-1">Ratings</div>
                <div className="space-y-2">
                  {/* Google Rating */}
                  {rating && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-[#f5f0e8]/60 w-16">Google</span>
                      <span className="text-xl font-bold text-[#f5f0e8]">{rating.toFixed(1)}</span>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span key={star} className={star <= Math.round(rating) ? 'text-[#d4a574]' : 'text-[#f5f0e8]/10'}>
                            ★
                          </span>
                        ))}
                      </div>
                      {reviewCount && (
                        <span className="text-xs text-[#f5f0e8]/40">({reviewCount.toLocaleString()})</span>
                      )}
                    </div>
                  )}
                  {/* Yelp Rating */}
                  {placeDetails?.yelp?.rating && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-[#f5f0e8]/60 w-16">Yelp</span>
                      <span className="text-xl font-bold text-[#f5f0e8]">{placeDetails.yelp.rating.toFixed(1)}</span>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span key={star} className={star <= Math.round(placeDetails.yelp!.rating!) ? 'text-[#d4a574]' : 'text-[#f5f0e8]/10'}>
                            ★
                          </span>
                        ))}
                      </div>
                      {placeDetails.yelp.reviewCount && (
                        <span className="text-xs text-[#f5f0e8]/40">({placeDetails.yelp.reviewCount.toLocaleString()})</span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Reviews Section with Tabs */}
      <ReviewTabs
        googleReviews={reviews}
        yelpReviews={placeDetails?.yelp?.reviews || []}
        restaurantName={restaurant.name}
        restaurantAddress={restaurant.address}
        restaurantCity={restaurant.city}
        yelpUrl={placeDetails?.yelp?.yelpUrl}
        popularItems={placeDetails?.popularItems}
      />

      {/* CTA */}
      <div className="card-elevated p-8 rounded-2xl text-center">
        <h3 className="font-display text-2xl text-[#f5f0e8] mb-4">Ready to Visit?</h3>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${restaurant.coordinates.lat},${restaurant.coordinates.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-[#d4a574] hover:bg-[#c17f59] text-[#1a1a1a] font-medium transition"
          >
            Get Directions
          </a>
          <a
            href={restaurant.website}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-[#f5f0e8]/5 hover:bg-[#f5f0e8]/10 text-[#f5f0e8] font-medium transition"
          >
            Visit Website
          </a>
        </div>
      </div>

      {/* Nearby Restaurants - LAZY LOADED */}
      <NearbyRestaurants currentRestaurant={restaurant} />
    </div>
  );
}
