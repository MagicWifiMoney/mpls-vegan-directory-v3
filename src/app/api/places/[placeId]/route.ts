import { NextRequest, NextResponse } from 'next/server';

// Cache place details for 24 hours
const cache = new Map<string, { data: PlaceDetails; timestamp: number }>();
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

interface PlaceDetails {
  rating?: number;
  userRatingsTotal?: number;
  openingHours?: string[];
  photos?: string[];
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
  const cached = cache.get(placeId);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return NextResponse.json(cached.data, {
      headers: {
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
      },
    });
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    // Return mock data if API key is not configured
    return NextResponse.json({
      rating: 4.5,
      userRatingsTotal: 120,
      openingHours: [
        'Monday: 11:00 AM – 9:00 PM',
        'Tuesday: 11:00 AM – 9:00 PM',
        'Wednesday: 11:00 AM – 9:00 PM',
        'Thursday: 11:00 AM – 9:00 PM',
        'Friday: 11:00 AM – 10:00 PM',
        'Saturday: 10:00 AM – 10:00 PM',
        'Sunday: 10:00 AM – 9:00 PM',
      ],
      photos: [],
      isMockData: true,
    });
  }

  try {
    const fields = 'rating,user_ratings_total,opening_hours,photos';
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== 'OK') {
      console.error('Google Places API error:', data.status, data.error_message);
      return NextResponse.json(
        { error: 'Failed to fetch place details', status: data.status },
        { status: 500 }
      );
    }

    const result = data.result;
    const placeDetails: PlaceDetails = {
      rating: result.rating,
      userRatingsTotal: result.user_ratings_total,
      openingHours: result.opening_hours?.weekday_text,
      photos: result.photos?.slice(0, 5).map((photo: { photo_reference: string }) =>
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${photo.photo_reference}&key=${apiKey}`
      ),
    };

    // Store in cache
    cache.set(placeId, { data: placeDetails, timestamp: Date.now() });

    return NextResponse.json(placeDetails, {
      headers: {
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
      },
    });
  } catch (error) {
    console.error('Error fetching place details:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
