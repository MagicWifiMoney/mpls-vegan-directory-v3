'use client';

import { useEffect, useState } from 'react';
import { Restaurant } from '@/data/restaurants';
import Image from 'next/image';
import ReviewTabs from './ReviewTabs';
import dynamic from 'next/dynamic';

const NearbyRestaurants = dynamic(() => import('./NearbyRestaurants'), {
  loading: () => <div className="card-elevated rounded-2xl p-8 animate-pulse h-64" />,
});

// Import real extracted data for restaurants with enhanced data
import herbivorousButcherData from '../../enriched-data/herbivorous-butcher-REAL-DATA.json';
import jSelbysData from '../../enriched-data/j-selbys-REAL-DATA.json';
import reverieData from '../../enriched-data/reverie-cafe-bar-REAL-DATA.json';
import luluData from '../../enriched-data/lulu-ethiovegan-REAL-DATA.json';
// Batch 1
import frenchMeadowData from '../../enriched-data/french-meadow-REAL-DATA.json';
import hardTimesCafeData from '../../enriched-data/hard-times-cafe-REAL-DATA.json';
import sewardCafeData from '../../enriched-data/seward-cafe-REAL-DATA.json';
import francisBurgerJointData from '../../enriched-data/francis-burger-joint-REAL-DATA.json';
import veganEastData from '../../enriched-data/vegan-east-REAL-DATA.json';
import modernTimesData from '../../enriched-data/modern-times-REAL-DATA.json';
import boleEthiopianData from '../../enriched-data/bole-ethiopian-REAL-DATA.json';
import everestOnGrandData from '../../enriched-data/everest-on-grand-REAL-DATA.json';
import namasteCafeData from '../../enriched-data/namaste-cafe-REAL-DATA.json';
// Batch 2
import himalayanRestaurantData from '../../enriched-data/himalayan-restaurant-REAL-DATA.json';
import foxyFalafelData from '../../enriched-data/foxy-falafel-REAL-DATA.json';
import tongueInCheekData from '../../enriched-data/tongue-in-cheek-REAL-DATA.json';
import amazingThailandData from '../../enriched-data/amazing-thailand-REAL-DATA.json';
import glamDollDonutsData from '../../enriched-data/glam-doll-donuts-REAL-DATA.json';
import seedCafeData from '../../enriched-data/seed-cafe-REAL-DATA.json';
import eurekaCompassData from '../../enriched-data/eureka-compass-REAL-DATA.json';
import crepeAndSpoonData from '../../enriched-data/crepe-and-spoon-REAL-DATA.json';
import pizzaLuceData from '../../enriched-data/pizza-luce-REAL-DATA.json';
import shishMediterraneanData from '../../enriched-data/shish-mediterranean-REAL-DATA.json';
// Batch 3
import theDrippingRootData from '../../enriched-data/the-dripping-root-REAL-DATA.json';
import afroDeliData from '../../enriched-data/afro-deli-REAL-DATA.json';
import commonRootsCafeData from '../../enriched-data/common-roots-cafe-REAL-DATA.json';
import khyberPassCafeData from '../../enriched-data/khyber-pass-cafe-REAL-DATA.json';
import crispAndGreenData from '../../enriched-data/crisp-and-green-REAL-DATA.json';
import wedgeTableData from '../../enriched-data/wedge-table-REAL-DATA.json';
import wokInTheParkData from '../../enriched-data/wok-in-the-park-REAL-DATA.json';
import toriRamenData from '../../enriched-data/tori-ramen-REAL-DATA.json';
import redCowData from '../../enriched-data/red-cow-REAL-DATA.json';

// Map of restaurant slug to data
const enhancedRestaurantData: Record<string, any> = {
  'herbivorous-butcher': herbivorousButcherData,
  'j-selbys': jSelbysData,
  'reverie-cafe-bar': reverieData,
  'lulu-ethiovegan': luluData,
  // Batch 1
  'french-meadow': frenchMeadowData,
  'hard-times-cafe': hardTimesCafeData,
  'seward-cafe': sewardCafeData,
  'francis-burger-joint': francisBurgerJointData,
  'vegan-east': veganEastData,
  'modern-times': modernTimesData,
  'bole-ethiopian': boleEthiopianData,
  'everest-on-grand': everestOnGrandData,
  'namaste-cafe': namasteCafeData,
  // Batch 2
  'himalayan-restaurant': himalayanRestaurantData,
  'foxy-falafel': foxyFalafelData,
  'tongue-in-cheek': tongueInCheekData,
  'amazing-thailand': amazingThailandData,
  'glam-doll-donuts': glamDollDonutsData,
  'seed-cafe': seedCafeData,
  'eureka-compass': eurekaCompassData,
  'crepe-and-spoon': crepeAndSpoonData,
  'pizza-luce': pizzaLuceData,
  'shish-mediterranean': shishMediterraneanData,
  // Batch 3
  'the-dripping-root': theDrippingRootData,
  'afro-deli': afroDeliData,
  'common-roots-cafe': commonRootsCafeData,
  'khyber-pass-cafe': khyberPassCafeData,
  'crisp-and-green': crispAndGreenData,
  'wedge-table': wedgeTableData,
  'wok-in-the-park': wokInTheParkData,
  'tori-ramen': toriRamenData,
  'red-cow': redCowData,
};

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

export default function RestaurantDetailEnhanced({ restaurant }: { restaurant: Restaurant }) {
  const [placeDetails, setPlaceDetails] = useState<PlaceDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [activePhoto, setActivePhoto] = useState(0);
  const [activePhotoCategory, setActivePhotoCategory] = useState<'all' | 'food' | 'menu' | 'interior'>('all');
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [expandedDish, setExpandedDish] = useState<number | null>(null);

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

  // Combine and categorize photos
  const googlePhotos = placeDetails?.photos?.map(url => url.trim()) || [];
  const yelpPhotos = placeDetails?.yelp?.photos || [];
  const allPhotos = [...googlePhotos, ...yelpPhotos];
  
  // Categorize photos (basic heuristic - in production, use image labels)
  const categorizedPhotos = {
    all: allPhotos,
    food: allPhotos.slice(0, Math.ceil(allPhotos.length * 0.6)), // First 60% assumed food
    menu: allPhotos.slice(0, 3), // First few often menu shots
    interior: allPhotos.slice(Math.ceil(allPhotos.length * 0.6)) // Rest interior
  };

  const photos = categorizedPhotos[activePhotoCategory];
  
  const reviews = placeDetails?.reviews || [];
  const rating = placeDetails?.rating || restaurant.rating;
  const reviewCount = placeDetails?.userRatingsTotal || restaurant.reviewCount;

  // Extract dish mentions from reviews
  const extractDishMentions = (dishName: string) => {
    const mentions = reviews
      .filter(review => 
        review.text.toLowerCase().includes(dishName.toLowerCase())
      )
      .slice(0, 3)
      .map(review => ({
        author: review.author_name,
        rating: review.rating,
        excerpt: review.text.split('.').find(s => 
          s.toLowerCase().includes(dishName.toLowerCase())
        ) || review.text.substring(0, 150)
      }));
    return mentions;
  };

  // Split description into paragraphs
  const descriptionParagraphs = restaurant.description.split('\n\n');
  const firstParagraph = descriptionParagraphs[0];
  const remainingParagraphs = descriptionParagraphs.slice(1).join('\n\n');

  return (
    <div className="space-y-12">
      {/* The Vibe - Stays at top */}
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

      {/* Best For Tags - Quick scan */}
      {restaurant.bestFor && restaurant.bestFor.length > 0 && (
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
      )}

      {/* About Section - Collapsible, right before photos */}
      <div className="card-elevated p-8 rounded-2xl">
        <h2 className="font-display text-2xl text-[#f5f0e8] mb-4">About</h2>
        <div className="prose prose-invert max-w-none">
          <p className="text-[#f5f0e8]/80 leading-relaxed whitespace-pre-line">
            {aboutExpanded ? restaurant.description : firstParagraph}
          </p>
          {remainingParagraphs && (
            <button
              onClick={() => setAboutExpanded(!aboutExpanded)}
              className="mt-4 text-[#d4a574] hover:text-[#c17f59] font-medium text-sm flex items-center gap-2 transition"
            >
              {aboutExpanded ? (
                <>Show Less <span>↑</span></>
              ) : (
                <>Continue Reading <span>↓</span></>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Enhanced What to Order - Real Data from Reviews */}
      {(() => {
        // Use real data if available for this restaurant, fallback to basic data
        const realData = enhancedRestaurantData[restaurant.slug];
        const productsToDisplay = realData?.topProducts
          ? realData.topProducts
          : restaurant.whatToOrder?.map(item => {
              const [name, ...descParts] = item.split(' - ');
              return { name, description: descParts.join(' - '), reviewMentions: 0, quotes: [] };
            }) || [];

        if (productsToDisplay.length === 0) return null;

        return (
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#d4a574]/10 flex items-center justify-center text-2xl">
                🍽️
              </div>
              <div>
                <h2 className="font-display text-2xl text-[#f5f0e8]">What to Order</h2>
                <p className="text-sm text-[#f5f0e8]/60">
                  {enhancedRestaurantData[restaurant.slug]?.ratings
                    ? `Real customer favorites from ${(enhancedRestaurantData[restaurant.slug].ratings.sources.google.reviewCount + (enhancedRestaurantData[restaurant.slug].ratings.sources.yelp?.reviewCount || 0)).toLocaleString()}+ reviews` 
                    : 'Based on menu highlights and customer reviews'}
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {productsToDisplay.map((product: any, idx: number) => {
                const isExpanded = expandedDish === idx;
                const hasDetailedData = product.price || product.nutrition || product.reviewMentions > 0;

                return (
                  <div
                    key={idx}
                    className={`card-elevated p-6 rounded-xl hover:ring-2 hover:ring-[#d4a574]/30 transition ${
                      hasDetailedData ? 'cursor-pointer' : ''
                    }`}
                    onClick={() => hasDetailedData && setExpandedDish(isExpanded ? null : idx)}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-[#f5f0e8]">{product.name}</h3>
                          {product.price && (
                            <span className="px-2.5 py-1 rounded-full bg-[#d4a574]/20 text-[#d4a574] text-sm font-semibold">
                              {product.price}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-[#f5f0e8]/60">
                          {product.description || product.whyPeopleLoveIt}
                        </p>
                      </div>
                      {product.badge && (
                        <div className="px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap" style={{
                          backgroundColor: product.badge === 'Top Pick' ? '#d4a574' : product.badge === 'Popular' ? 'rgba(212, 165, 116, 0.3)' : 'rgba(245, 240, 232, 0.1)',
                          color: product.badge === 'Top Pick' ? '#1a1a1a' : '#d4a574'
                        }}>
                          {product.badge === 'Top Pick' && '⭐ Top Pick'}
                          {product.badge === 'Popular' && '🔥 Popular'}
                          {product.badge === 'Featured' && '✨ Featured'}
                        </div>
                      )}
                    </div>

                    {/* Compact Info Row */}
                    {(product.size || product.nutrition) && !isExpanded && (
                      <div className="flex flex-wrap gap-3 text-xs text-[#f5f0e8]/60 mb-3">
                        {product.size && <span>📦 {product.size}</span>}
                        {product.nutrition && (
                          <>
                            <span>🔥 {product.nutrition.calories} cal</span>
                            <span>💪 {product.nutrition.protein} protein</span>
                          </>
                        )}
                      </div>
                    )}

                    {/* Expanded Details */}
                    {isExpanded && hasDetailedData && (
                      <div className="mt-4 pt-4 border-t border-[#f5f0e8]/10 space-y-4 animate-in slide-in-from-top-2">
                        {/* Nutrition Facts */}
                        {product.nutrition && (
                          <div className="bg-[#f5f0e8]/5 rounded-lg p-4">
                            <div className="text-xs uppercase tracking-wider text-[#d4a574] font-medium mb-3">
                              Nutrition Facts
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div><span className="text-[#f5f0e8]/50">Serving:</span> <span className="text-[#f5f0e8]">{product.nutrition.servingSize}</span></div>
                              <div><span className="text-[#f5f0e8]/50">Servings:</span> <span className="text-[#f5f0e8]">{product.nutrition.servingsPerContainer}</span></div>
                              <div><span className="text-[#f5f0e8]/50">Calories:</span> <span className="text-[#f5f0e8] font-semibold">{product.nutrition.calories}</span></div>
                              <div><span className="text-[#f5f0e8]/50">Protein:</span> <span className="text-[#f5f0e8] font-semibold">{product.nutrition.protein}</span></div>
                              <div><span className="text-[#f5f0e8]/50">Fat:</span> <span className="text-[#f5f0e8]">{product.nutrition.fat}</span></div>
                              <div><span className="text-[#f5f0e8]/50">Carbs:</span> <span className="text-[#f5f0e8]">{product.nutrition.carbs}</span></div>
                            </div>
                            {product.allergens && product.allergens.length > 0 && (
                              <div className="mt-3 pt-3 border-t border-[#f5f0e8]/10">
                                <span className="text-xs text-[#f5f0e8]/50">Allergens:</span>
                                <div className="flex flex-wrap gap-1.5 mt-1">
                                  {product.allergens.map((allergen: string) => (
                                    <span key={allergen} className="px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 text-xs">
                                      {allergen}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Customer Quotes */}
                        {product.quotes && product.quotes.length > 0 && (
                          <div>
                            <div className="text-xs uppercase tracking-wider text-[#d4a574] font-medium mb-3">
                              What Customers Say:
                            </div>
                            <div className="space-y-2">
                              {product.quotes.slice(0, 3).map((quote: string, qIdx: number) => (
                                <div key={qIdx} className="bg-[#f5f0e8]/5 rounded-lg p-3 border-l-2 border-[#d4a574]/50">
                                  <p className="text-sm text-[#f5f0e8]/70 italic">"{quote}"</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Cooking Instructions */}
                        {product.cookingInstructions && product.cookingInstructions.length > 0 && (
                          <div className="bg-[#f5f0e8]/5 rounded-lg p-4">
                            <div className="text-xs uppercase tracking-wider text-[#d4a574] font-medium mb-3">
                              How to Prepare
                            </div>
                            <ul className="space-y-1.5 text-sm text-[#f5f0e8]/70">
                              {product.cookingInstructions.map((instruction: string, iIdx: number) => (
                                <li key={iIdx} className="flex items-start gap-2">
                                  <span className="text-[#d4a574] mt-0.5">•</span>
                                  <span>{instruction}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}

                    {hasDetailedData && (
                      <div className="mt-3 text-xs text-[#d4a574] font-medium">
                        {isExpanded ? '↑ Click to collapse' : '→ Click for details'}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        );
      })()}

      {/* Hours & Info Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
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
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <ReviewTabs
        googleReviews={enhancedRestaurantData[restaurant.slug]?.highlightedReviews || reviews}
        yelpReviews={placeDetails?.yelp?.reviews || []}
        restaurantName={restaurant.name}
        restaurantAddress={restaurant.address}
        restaurantCity={restaurant.city}
        yelpUrl={placeDetails?.yelp?.yelpUrl}
        restaurantSlug={restaurant.slug}
        totalReviewCount={
          enhancedRestaurantData[restaurant.slug]?.ratings
            ? enhancedRestaurantData[restaurant.slug].ratings.sources.google.reviewCount + 
              (enhancedRestaurantData[restaurant.slug].ratings.sources.yelp?.reviewCount || 0)
            : (placeDetails?.userRatingsTotal || reviewCount)
        }
      />

      {/* Photo Gallery with Categories */}
      {photos.length > 0 && (
        <section>
          {/* Category Tabs */}
          <div className="flex gap-2 mb-4 overflow-x-auto">
            {(['all', 'food', 'menu', 'interior'] as const).map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActivePhotoCategory(category);
                  setActivePhoto(0);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition whitespace-nowrap ${
                  activePhotoCategory === category
                    ? 'bg-[#d4a574] text-[#1a1a1a]'
                    : 'bg-[#f5f0e8]/5 text-[#f5f0e8]/60 hover:bg-[#f5f0e8]/10'
                }`}
              >
                {category === 'all' && `All (${categorizedPhotos.all.length})`}
                {category === 'food' && `🍽️ Food (${categorizedPhotos.food.length})`}
                {category === 'menu' && `📋 Menu (${categorizedPhotos.menu.length})`}
                {category === 'interior' && `🏠 Interior (${categorizedPhotos.interior.length})`}
              </button>
            ))}
          </div>

          <div className="relative h-[60vh] rounded-2xl overflow-hidden mb-4">
            <Image
              src={photos[activePhoto]}
              alt={`${restaurant.name} - ${activePhotoCategory} Photo ${activePhoto + 1}`}
              fill
              className="object-cover"
              unoptimized
            />
            
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
            
            <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-sm">
              {activePhoto + 1} / {photos.length}
            </div>
          </div>

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

      {/* Nearby Restaurants */}
      <NearbyRestaurants currentRestaurant={restaurant} />
    </div>
  );
}
