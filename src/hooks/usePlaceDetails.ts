'use client';

import { useState, useEffect } from 'react';

interface PlaceDetails {
  rating?: number;
  userRatingsTotal?: number;
  openingHours?: string[];
  photos?: string[];
  isMockData?: boolean;
}

export function usePlaceDetails(placeId: string) {
  const [data, setData] = useState<PlaceDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!placeId) {
      setLoading(false);
      return;
    }

    const fetchPlaceDetails = async () => {
      try {
        const response = await fetch(`/api/places/${placeId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch place details');
        }
        const details = await response.json();
        setData(details);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaceDetails();
  }, [placeId]);

  return { data, loading, error };
}
