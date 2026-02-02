import { NextRequest, NextResponse } from 'next/server';
import { getYelpData } from '@/lib/yelp';
import { extractPopularItems } from '@/lib/gemini';
import { restaurants } from '@/data/restaurants';

// Cache place details for 24 hours
const cache = new Map<string, { data: PlaceDetails; timestamp: number }>();
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours
const CACHE_VERSION = 'v2'; // Increment to invalidate all caches

interface PlaceDetails {
  rating?: number;
  userRatingsTotal?: number;
  openingHours?: string[];
  openNow?: boolean;
  photos?: string[];
  reviews?: Array<{
    author_name: string;
    rating: number;
    text: string;
    time: number;
    profile_photo_url: string;
  }>;
  popularItems?: string[];
  // Yelp data
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

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ placeId: string }> }
) {
  const { placeId } = await params;

  if (!placeId) {
    return NextResponse.json({ error: 'Place ID is required' }, { status: 400 });
  }

  // Check cache first
  const cacheKey = `${CACHE_VERSION}:${placeId}`;
  const cached = cache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    console.log(`[API] Cache hit for ${placeId}`);
    return NextResponse.json(cached.data, {
      headers: {
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
      },
    });
  }
  
  console.log(`[API] Cache miss for ${placeId}, fetching fresh data...`);

  // Find restaurant by place ID to get Yelp data
  const restaurant = restaurants.find(r => r.googlePlaceId === placeId);

  // Fetch Google Places data
  const googleData = await fetchGooglePlaces(placeId);
  
  // Fetch Yelp data if we have restaurant info
  let yelpData = null;
  if (restaurant) {
    yelpData = await getYelpData(
      restaurant.name,
      restaurant.address,
      restaurant.city,
      restaurant.state
    );
  }

  // Extract popular items using Gemini (combine Google + Yelp reviews)
  const allReviews = [
    ...(googleData.reviews || []),
    ...(yelpData?.reviews || []),
  ];
  console.log(`[API] Extracting popular items from ${allReviews.length} reviews for ${restaurant?.name}`);
  const popularItems = await extractPopularItems(allReviews, restaurant?.name || '');
  console.log(`[API] Extracted ${popularItems.length} popular items:`, popularItems);

  const placeDetails: PlaceDetails = {
    ...googleData,
    popularItems,
    yelp: yelpData || undefined,
  };

  // Store in cache with version key
  cache.set(cacheKey, { data: placeDetails, timestamp: Date.now() });

  return NextResponse.json(placeDetails, {
    headers: {
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  });
}

async function fetchGooglePlaces(placeId: string): Promise<Partial<PlaceDetails>> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    console.warn('Google Places API key not configured');
    return {};
  }

  try {
    const fields = 'rating,user_ratings_total,opening_hours,photos,reviews,current_opening_hours';
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== 'OK') {
      console.error('Google Places API error:', data.status, data.error_message);
      return {};
    }

    const result = data.result;
    return {
      rating: result.rating,
      userRatingsTotal: result.user_ratings_total,
      openingHours: result.opening_hours?.weekday_text,
      openNow: result.current_opening_hours?.open_now,
      photos: result.photos?.slice(0, 10).map((photo: { photo_reference: string }) =>
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${photo.photo_reference}&key=${apiKey}`
      ),
      reviews: result.reviews?.slice(0, 5).map((review: any) => ({
        author_name: review.author_name,
        rating: review.rating,
        text: review.text,
        time: review.time,
        profile_photo_url: review.profile_photo_url,
      })),
    };
  } catch (error) {
    console.error('Error fetching Google Places details:', error);
    return {};
  }
}
