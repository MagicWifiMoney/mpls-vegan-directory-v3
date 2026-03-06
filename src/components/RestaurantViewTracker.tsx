'use client';

import { useEffect } from 'react';
import { usePostHog } from 'posthog-js/react';

interface RestaurantViewTrackerProps {
  name: string;
  slug: string;
  neighborhood: string;
  cuisine?: string;
  veganStatus?: string;
}

export default function RestaurantViewTracker({ name, slug, neighborhood, cuisine, veganStatus }: RestaurantViewTrackerProps) {
  const posthog = usePostHog();

  useEffect(() => {
    posthog?.capture('restaurant_viewed', {
      restaurant_name: name,
      restaurant_slug: slug,
      neighborhood,
      cuisine,
      vegan_status: veganStatus,
      site: 'mplsvegan',
    });
  }, [posthog, name, slug, neighborhood, cuisine, veganStatus]);

  return null;
}
