import { Restaurant } from '@/data/restaurants';

// Cache for Google Places data
const cache = new Map<string, { data: PlacesData; timestamp: number }>();
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export interface PlacesData {
  rating?: number;
  userRatingsTotal?: number;
  openingHours?: string[];
  photos?: string[];
  formattedPhoneNumber?: string;
  url?: string;
}

export async function getPlaceDetails(placeId: string): Promise<PlacesData | null> {
  // Check cache first
  const cached = cache.get(placeId);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  
  if (!apiKey) {
    console.warn('Google Places API key not configured');
    return null;
  }

  try {
    const fields = 'rating,user_ratings_total,opening_hours,photos,formatted_phone_number,url';
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&key=${apiKey}`;
    
    const response = await fetch(url, { next: { revalidate: 86400 } }); // Cache for 24 hours
    const data = await response.json();

    if (data.status !== 'OK') {
      console.error('Google Places API error:', data.status);
      return null;
    }

    const result = data.result;
    const placesData: PlacesData = {
      rating: result.rating,
      userRatingsTotal: result.user_ratings_total,
      openingHours: result.opening_hours?.weekday_text,
      photos: result.photos?.slice(0, 5).map((photo: { photo_reference: string }) => 
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${photo.photo_reference}&key=${apiKey}`
      ),
      formattedPhoneNumber: result.formatted_phone_number,
      url: result.url,
    };

    // Store in cache
    cache.set(placeId, { data: placesData, timestamp: Date.now() });

    return placesData;
  } catch (error) {
    console.error('Error fetching place details:', error);
    return null;
  }
}

// Fetch and merge Google Places data with restaurant data
export async function enrichRestaurantData(restaurant: Restaurant): Promise<Restaurant & PlacesData> {
  const placesData = await getPlaceDetails(restaurant.googlePlaceId);
  
  return {
    ...restaurant,
    rating: placesData?.rating ?? restaurant.rating,
    reviewCount: placesData?.userRatingsTotal ?? restaurant.reviewCount,
    hours: placesData?.openingHours ?? restaurant.hours,
    photos: placesData?.photos ?? restaurant.photos,
  };
}

// Generate static photo URLs for development/fallback
export function getStaticPhotoUrl(restaurant: Restaurant): string {
  // Use Unsplash for placeholder food images
  const categories: Record<string, string> = {
    'Ethiopian': 'ethiopian-food',
    'Soul Food': 'soul-food',
    'Indian': 'indian-food',
    'Thai': 'thai-food',
    'Bakery': 'bakery',
    'Burgers': 'vegan-burger',
    'Mediterranean': 'falafel',
  };
  
  const cuisine = restaurant.cuisineType[0];
  const searchTerm = categories[cuisine] || 'vegan-food';
  
  return `https://source.unsplash.com/800x600/?${searchTerm}`;
}
