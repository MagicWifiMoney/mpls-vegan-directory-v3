// Yelp Fusion API integration

interface YelpBusiness {
  id: string;
  name: string;
  rating: number;
  review_count: number;
  photos: string[];
  url: string;
  hours?: Array<{
    open: Array<{
      day: number;
      start: string;
      end: string;
    }>;
    is_open_now: boolean;
  }>;
}

interface YelpReview {
  id: string;
  rating: number;
  user: {
    name: string;
    image_url: string;
  };
  text: string;
  time_created: string;
  url: string;
}

export interface YelpData {
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
}

const YELP_API_BASE = 'https://api.yelp.com/v3';

async function yelpFetch(endpoint: string, apiKey: string) {
  const response = await fetch(`${YELP_API_BASE}${endpoint}`, {
    headers: {
      'Authorization': `Bearer ${apiKey}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Yelp API error: ${response.status}`);
  }

  return response.json();
}

export async function getYelpData(
  name: string,
  address: string,
  city: string,
  state: string
): Promise<YelpData | null> {
  const apiKey = process.env.YELP_API_KEY;

  if (!apiKey) {
    console.warn('Yelp API key not configured');
    return null;
  }

  try {
    // Search for business
    const searchParams = new URLSearchParams({
      term: name,
      location: `${address}, ${city}, ${state}`,
      limit: '1',
    });

    const searchResult = await yelpFetch(`/businesses/search?${searchParams}`, apiKey);

    if (!searchResult.businesses || searchResult.businesses.length === 0) {
      console.warn(`No Yelp data found for ${name}`);
      return null;
    }

    const business: YelpBusiness = searchResult.businesses[0];

    // Note: Yelp Reviews API is extremely limited and doesn't work for most businesses
    // We can only get rating/review count from the search endpoint

    return {
      rating: business.rating,
      reviewCount: business.review_count,
      photos: business.photos?.slice(0, 5) || [],
      yelpUrl: business.url,
      openNow: business.hours?.[0]?.is_open_now,
      reviews: [], // Yelp doesn't provide review text access
    };
  } catch (error) {
    console.error(`Error fetching Yelp data for ${name}:`, error);
    return null;
  }
}
