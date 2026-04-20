'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { restaurants } from '@/data/restaurants';
import { useFavorites, decodeFavorites, encodeFavorites } from '@/hooks/useFavorites';
import RestaurantCard from '@/components/RestaurantCard';

export default function SavedPageContent() {
  const { favorites, loaded } = useFavorites();
  const searchParams = useSearchParams();
  const [shareUrl, setShareUrl] = useState('');
  const [copied, setCopied] = useState(false);

  const sharedParam = searchParams.get('list');
  const displaySlugs = sharedParam ? decodeFavorites(sharedParam) : favorites;
  const isSharedView = Boolean(sharedParam);

  const savedRestaurants = restaurants.filter((r) => displaySlugs.includes(r.slug));

  useEffect(() => {
    if (favorites.length > 0 && typeof window !== 'undefined') {
      const url = `${window.location.origin}/saved?list=${encodeFavorites(favorites)}`;
      setShareUrl(url);
    }
  }, [favorites]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  if (!loaded && !isSharedView) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#d4a574]/30 border-t-[#d4a574] rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#1a1a1a] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#f5f0e8]/40 hover:text-[#d4a574] mb-6 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to directory
          </Link>

          <h1 className="font-display text-4xl text-[#f5f0e8] mb-2">
            {isSharedView ? 'Shared Restaurant List' : 'My Saved Restaurants'}
          </h1>
          <p className="text-[#f5f0e8]/50">
            {savedRestaurants.length === 0
              ? isSharedView
                ? 'This shared list is empty.'
                : 'No saved restaurants yet — heart any restaurant to save it here.'
              : `${savedRestaurants.length} restaurant${savedRestaurants.length === 1 ? '' : 's'} saved`}
          </p>
        </div>

        {/* Share button */}
        {!isSharedView && favorites.length > 0 && shareUrl && (
          <div className="mb-8 flex items-center gap-3 p-4 rounded-xl bg-[#2a2a2a] border border-[#f5f0e8]/10">
            <svg className="w-5 h-5 text-[#d4a574] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
            </svg>
            <span className="text-sm text-[#f5f0e8]/60 flex-1 truncate">{shareUrl}</span>
            <button
              onClick={handleCopy}
              className="shrink-0 px-4 py-1.5 rounded-lg bg-[#d4a574]/10 text-[#d4a574] text-sm hover:bg-[#d4a574]/20 transition-colors"
            >
              {copied ? 'Copied!' : 'Copy link'}
            </button>
          </div>
        )}

        {/* Restaurant grid */}
        {savedRestaurants.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedRestaurants.map((restaurant, i) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-full bg-[#d4a574]/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#d4a574]/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </div>
            <p className="text-[#f5f0e8]/40 mb-4">No restaurants saved yet</p>
            <Link
              href="/restaurants"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#d4a574] text-[#1a1a1a] font-medium text-sm hover:bg-[#c17f59] transition-colors"
            >
              Browse restaurants
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
