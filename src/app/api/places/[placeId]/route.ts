import { NextRequest, NextResponse } from 'next/server';
import { extractPopularItems } from '@/lib/gemini';
import { restaurants } from '@/data/restaurants';
import placesCache from '@/data/places-cache.json';

// Typed cache structure
interface CacheEntry {
  placeId: string;
  restaurantId?: string;
  restaurantName?: string;
  _fetchedAt: string;
  rating?: number;
  userRatingsTotal?: number;
  openingHours?: string[];
  openNow?: boolean;
  formattedPhoneNumber?: string;
  googleMapsUrl?: string;
  photoReferences?: string[];
  reviews?: Array<{
    author_name: string;
    rating: number;
    text: string;
    time: number;
    profile_photo_url: string;
  }>;
  yelp?: {
    yelpId?: string;
    rating?: number;
    reviewCount?: number;
    yelpUrl?: string;
    photos?: string[];
    openNow?: boolean;
    reviews?: Array<{
      author_name?: string;
      rating: number;
      text: string;
      time: string;
      url?: string;
    }>;
  } | null;
}

const typedCache = placesCache as Record<string, CacheEntry>;

// In-memory cache for popular items (Gemini extraction — expensive)
const popularItemsCache = new Map<string, { items: string[]; timestamp: number }>();
const POPULAR_ITEMS_CACHE_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ placeId: string }> }
) {
  const { placeId } = await params;

  if (!placeId) {
    return NextResponse.json({ error: 'Place ID is required' }, { status: 400 });
  }

  // Serve from static pre-fetched cache (refreshed weekly by cron)
  const cached = typedCache[placeId];

  if (!cached) {
    // Not in cache — rare (new restaurant added since last prefetch)
    // Fall back to live API call
    const liveData = await fetchGooglePlacesLive(placeId);
    return NextResponse.json(liveData, {
      headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200' },
    });
  }

  // Build photo URLs from stored photo references
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const photos = cached.photoReferences?.map(ref =>
    `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${ref}&key=${apiKey}`
  ) || [];

  // Extract popular items from reviews (cached — Gemini call is expensive)
  let popularItems: string[] = [];
  const popCached = popularItemsCache.get(placeId);
  if (popCached && Date.now() - popCached.timestamp < POPULAR_ITEMS_CACHE_MS) {
    popularItems = popCached.items;
  } else {
    const restaurant = restaurants.find(r => r.googlePlaceId === placeId);
    const allReviews = [
      ...(cached.reviews || []),
      ...(cached.yelp?.reviews?.map(r => ({
        author_name: r.author_name || '',
        rating: r.rating,
        text: r.text,
        time: new Date(r.time).getTime() / 1000,
        profile_photo_url: '',
      })) || []),
    ];
    if (allReviews.length > 0) {
      popularItems = await extractPopularItems(allReviews, restaurant?.name || '');
      popularItemsCache.set(placeId, { items: popularItems, timestamp: Date.now() });
    }
  }

  const response = {
    rating: cached.rating,
    userRatingsTotal: cached.userRatingsTotal,
    openingHours: cached.openingHours,
    openNow: cached.openNow,
    photos,
    reviews: cached.reviews,
    popularItems,
    _cachedAt: cached._fetchedAt,
    yelp: cached.yelp ? {
      rating: cached.yelp.rating,
      reviewCount: cached.yelp.reviewCount,
      photos: cached.yelp.photos,
      reviews: cached.yelp.reviews,
      yelpUrl: cached.yelp.yelpUrl,
      openNow: cached.yelp.openNow,
    } : undefined,
  };

  return NextResponse.json(response, {
    headers: {
      // Tell CDN to cache aggressively — data only changes weekly
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800',
    },
  });
}

// Fallback: live API call for restaurants not yet in the static cache
async function fetchGooglePlacesLive(placeId: string): Promise<Partial<CacheEntry>> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return {};

  try {
    const fields = 'rating,user_ratings_total,opening_hours,photos,reviews,current_opening_hours';
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== 'OK') return {};

    const result = data.result;
    return {
      rating: result.rating,
      userRatingsTotal: result.user_ratings_total,
      openingHours: result.opening_hours?.weekday_text,
      openNow: result.current_opening_hours?.open_now,
      photoReferences: result.photos?.slice(0, 10).map((p: { photo_reference: string }) => p.photo_reference),
      reviews: result.reviews?.slice(0, 5),
    };
  } catch {
    return {};
  }
}
