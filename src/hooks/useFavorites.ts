'use client';

import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'mplsvegan_favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setFavorites(JSON.parse(stored));
    } catch {
      // localStorage unavailable
    }
    setLoaded(true);
  }, []);

  const toggle = useCallback((slug: string) => {
    setFavorites((prev) => {
      const next = prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : [...prev, slug];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const isFavorite = useCallback(
    (slug: string) => favorites.includes(slug),
    [favorites]
  );

  return { favorites, toggle, isFavorite, loaded };
}

/** Encode favorites list as a URL-safe string */
export function encodeFavorites(slugs: string[]): string {
  return encodeURIComponent(slugs.join(','));
}

/** Decode favorites from URL param */
export function decodeFavorites(param: string): string[] {
  return decodeURIComponent(param)
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}
