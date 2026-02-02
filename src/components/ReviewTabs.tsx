'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: number | string;
  profile_photo_url: string;
  url?: string;
}

interface ReviewTabsProps {
  googleReviews: Review[];
  yelpReviews: Review[];
  restaurantName: string;
  restaurantAddress: string;
  restaurantCity: string;
  yelpUrl?: string;
}

export default function ReviewTabs({
  googleReviews,
  yelpReviews,
  restaurantName,
  restaurantAddress,
  restaurantCity,
  yelpUrl,
}: ReviewTabsProps) {
  const [activeTab, setActiveTab] = useState<'google' | 'yelp'>(
    yelpReviews.length > 0 ? 'yelp' : 'google'
  );

  // Extract popular dishes/items mentioned in reviews
  const extractPopularDishes = (reviews: Review[]) => {
    const dishPattern = /\b(burger|sandwich|wrap|bowl|pizza|taco|burrito|salad|soup|pancake|waffle|scramble|mac and cheese|tempeh|tofu|seitan|falafel|hummus|kimchi|riblets?|wings?|nuggets?|dog|sausage|cheese|meatball|wrap|pho|ramen|curry|pad thai|stir fry|spring roll|banh mi)\b/gi;
    const mentions: { [key: string]: number } = {};
    
    reviews.forEach(review => {
      const matches = review.text.match(dishPattern);
      if (matches) {
        matches.forEach(dish => {
          const normalized = dish.toLowerCase();
          mentions[normalized] = (mentions[normalized] || 0) + 1;
        });
      }
    });

    return Object.entries(mentions)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([dish]) => dish);
  };

  const allReviews = [...googleReviews, ...yelpReviews];
  const popularDishes = extractPopularDishes(allReviews);
  const currentReviews = activeTab === 'google' ? googleReviews : yelpReviews;

  if (googleReviews.length === 0 && yelpReviews.length === 0) {
    return null;
  }

  return (
    <section>
      {/* Popular Dishes */}
      {popularDishes.length > 0 && (
        <div className="card-elevated rounded-2xl p-6 mb-8">
          <h3 className="font-display text-xl text-[#f5f0e8] mb-4">
            🔥 Popular Items
          </h3>
          <div className="flex flex-wrap gap-2">
            {popularDishes.map((dish) => (
              <span
                key={dish}
                className="px-3 py-1.5 rounded-full text-sm bg-[#d4a574]/10 text-[#d4a574] border border-[#d4a574]/20 capitalize"
              >
                {dish}
              </span>
            ))}
          </div>
          <p className="text-xs text-[#f5f0e8]/40 mt-3">
            Based on review mentions
          </p>
        </div>
      )}

      {/* Review Tabs */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <button
          onClick={() => setActiveTab('google')}
          className={`px-6 py-3 rounded-full font-medium transition-all ${
            activeTab === 'google'
              ? 'bg-[#d4a574] text-[#1a1a1a]'
              : 'bg-[#f5f0e8]/5 text-[#f5f0e8]/60 hover:bg-[#f5f0e8]/10'
          }`}
        >
          <div className="flex items-center gap-2">
            <span>Google Reviews</span>
            <span className="text-sm opacity-60">({googleReviews.length})</span>
          </div>
        </button>
        <button
          onClick={() => setActiveTab('yelp')}
          className={`px-6 py-3 rounded-full font-medium transition-all ${
            activeTab === 'yelp'
              ? 'bg-[#d32323] text-white'
              : 'bg-[#f5f0e8]/5 text-[#f5f0e8]/60 hover:bg-[#f5f0e8]/10'
          }`}
        >
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z"/>
            </svg>
            <span>Yelp Reviews</span>
            <span className="text-sm opacity-60">({yelpReviews.length})</span>
          </div>
        </button>
      </div>

      {/* Reviews Grid */}
      <div className="grid gap-6">
        {currentReviews.slice(0, 6).map((review, idx) => (
          <div key={idx} className={`card-elevated p-6 rounded-2xl ${
            activeTab === 'yelp' ? 'border border-[#d32323]/10' : ''
          }`}>
            <div className="flex items-start gap-4">
              <Image
                src={review.profile_photo_url}
                alt={review.author_name}
                width={48}
                height={48}
                className="rounded-full"
                unoptimized
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-[#f5f0e8]">{review.author_name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded flex items-center gap-1 ${
                        activeTab === 'yelp'
                          ? 'bg-[#d32323]/10 text-[#d32323]'
                          : 'bg-[#f5f0e8]/5 text-[#f5f0e8]/40'
                      }`}>
                        {activeTab === 'yelp' && (
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z"/>
                          </svg>
                        )}
                        {activeTab === 'google' ? 'Google' : 'Yelp'}
                      </span>
                    </div>
                    <div className="flex text-[#d4a574] text-sm mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i}>{i < review.rating ? '★' : '☆'}</span>
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-[#f5f0e8]/40">
                    {typeof review.time === 'number'
                      ? new Date(review.time * 1000).toLocaleDateString()
                      : new Date(review.time).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-[#f5f0e8]/70 text-sm leading-relaxed">{review.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Buttons */}
      <div className="mt-8 flex justify-center">
        {activeTab === 'google' ? (
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${restaurantName} ${restaurantAddress} ${restaurantCity}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#d4a574]/10 hover:bg-[#d4a574]/20 text-[#d4a574] font-medium transition"
          >
            View All Google Reviews →
          </a>
        ) : (
          yelpUrl && (
            <a
              href={yelpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#d32323]/10 hover:bg-[#d32323]/20 text-[#d32323] font-medium transition"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z"/>
              </svg>
              View All Yelp Reviews →
            </a>
          )
        )}
      </div>
    </section>
  );
}
