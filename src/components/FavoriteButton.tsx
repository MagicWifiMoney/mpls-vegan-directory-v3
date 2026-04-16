'use client';

import { useFavorites } from '@/hooks/useFavorites';

interface FavoriteButtonProps {
  slug: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function FavoriteButton({ slug, className = '', size = 'md' }: FavoriteButtonProps) {
  const { isFavorite, toggle, loaded } = useFavorites();

  const saved = isFavorite(slug);

  const sizeMap = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  if (!loaded) return null;

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(slug);
      }}
      aria-label={saved ? 'Remove from saved' : 'Save restaurant'}
      title={saved ? 'Remove from saved' : 'Save to My List'}
      className={`group/fav flex items-center justify-center rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a574] ${
        saved
          ? 'bg-[#d4a574]/20 text-[#d4a574]'
          : 'bg-[#1a1a1a]/60 text-[#f5f0e8]/40 hover:text-[#d4a574] hover:bg-[#d4a574]/10'
      } backdrop-blur-sm p-2 ${className}`}
    >
      <svg
        className={`${sizeMap[size]} transition-transform duration-200 ${saved ? 'scale-110' : 'group-hover/fav:scale-110'}`}
        viewBox="0 0 24 24"
        fill={saved ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth={saved ? '0' : '1.5'}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    </button>
  );
}
