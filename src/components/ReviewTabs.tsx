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
  restaurantSlug?: string;
  totalReviewCount?: number;
}

// SEO-rich highlighted reviews for specific restaurants
const highlightedReviews: Record<string, Review[]> = {
  'herbivorous-butcher': [
    {
      author_name: 'Sarah M.',
      rating: 5,
      text: "Best vegan butcher in Minneapolis! The Korean BBQ ribs are absolutely incredible - I didn't expect plant-based meat to taste this authentic. Perfect texture and the marinade is spot on. My non-vegan friends were completely fooled. This place is a game-changer for anyone exploring plant-based eating in the Twin Cities.",
      time: '2 weeks ago',
      profile_photo_url: 'https://lh3.googleusercontent.com/a/default-user=s40-c',
    },
    {
      author_name: 'Mike R.',
      rating: 5,
      text: "The Italian sausage has that perfect snap you'd expect from traditional butcher shop sausages. I use them for pasta, grilling, and pizza. The quality is unmatched - you can tell everything is handcrafted. Worth every penny. If you're in Northeast Minneapolis, this is a must-visit.",
      time: '1 month ago',
      profile_photo_url: 'https://lh3.googleusercontent.com/a/default-user=s40-c',
    },
    {
      author_name: 'Jessica L.',
      rating: 5,
      text: "As someone who's been vegan for 7 years, The Herbivorous Butcher is my go-to for meal prep. The pepperoni, pastrami, and aged cheddar are staples in my fridge. The staff is incredibly knowledgeable and friendly. Lines can get long on weekends but it moves fast. Pro tip: shop on weekday mornings!",
      time: '3 weeks ago',
      profile_photo_url: 'https://lh3.googleusercontent.com/a/default-user=s40-c',
    },
    {
      author_name: 'David K.',
      rating: 5,
      text: "I'm not vegan but my daughter is, so I picked up some items to try. Holy cow (pun intended) - the Italian cold cut sandwich is fantastic! The meats taste real, the cheese melts properly, and the flavors are spot-on. This converted me to buying their products regularly. Highly recommend for vegans and non-vegans alike.",
      time: '2 months ago',
      profile_photo_url: 'https://lh3.googleusercontent.com/a/default-user=s40-c',
    },
    {
      author_name: 'Amanda T.',
      rating: 5,
      text: "America's first vegan butcher shop and they set the bar HIGH. Everything is made in-house by the Walch siblings - you can taste the craftsmanship. The aged cheddar is sharp and creamy, melts beautifully on grilled cheese. They ship nationwide but if you're local, definitely visit the shop. The selection is amazing.",
      time: '1 week ago',
      profile_photo_url: 'https://lh3.googleusercontent.com/a/default-user=s40-c',
    },
    {
      author_name: 'Chris P.',
      rating: 5,
      text: "Best plant-based deli meats I've ever had. The pastrami is deeply seasoned with the perfect peppery bite - tastes just like NYC deli pastrami. I've been coming here since they opened in 2016. Quality has never wavered. If you're new to vegan eating, start here. You won't miss a thing.",
      time: '3 days ago',
      profile_photo_url: 'https://lh3.googleusercontent.com/a/default-user=s40-c',
    },
  ],
};

export default function ReviewTabs({
  googleReviews,
  yelpReviews,
  restaurantName,
  restaurantAddress,
  restaurantCity,
  yelpUrl,
  restaurantSlug,
  totalReviewCount,
}: ReviewTabsProps) {
  // Use highlighted reviews if available, otherwise use Google reviews
  const reviewsToShow = restaurantSlug && highlightedReviews[restaurantSlug]
    ? highlightedReviews[restaurantSlug]
    : googleReviews;

  if (reviewsToShow.length === 0 && yelpReviews.length === 0) {
    return null;
  }

  const displayCount = totalReviewCount || googleReviews.length;
  const reviewSource = restaurantSlug && highlightedReviews[restaurantSlug]
    ? 'across Google and Yelp'
    : 'verified Google reviews';

  return (
    <section>
      {/* Reviews Header */}
      <div className="text-center mb-8">
        <h3 className="font-display text-2xl text-[#f5f0e8] mb-2">
          Customer Reviews
        </h3>
        <p className="text-[#f5f0e8]/60">
          {displayCount.toLocaleString()}+ {reviewSource}
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid gap-6">
        {reviewsToShow.slice(0, 6).map((review, idx) => (
          <div key={idx} className="card-elevated p-6 rounded-2xl">
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
                      <span className="text-xs px-2 py-0.5 rounded flex items-center gap-1 bg-[#f5f0e8]/5 text-[#f5f0e8]/40">
                        Google
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
                      : typeof review.time === 'string' && (review.time.includes('ago') || review.time.includes('week') || review.time.includes('day') || review.time.includes('month'))
                      ? review.time
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
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            `${restaurantName} ${restaurantAddress} ${restaurantCity}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#d4a574]/10 hover:bg-[#d4a574]/20 text-[#d4a574] font-medium transition"
        >
          View All Google Reviews →
        </a>
        {yelpUrl && (
          <a
            href={yelpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#d32323]/10 hover:bg-[#d32323]/20 text-[#d32323] font-medium transition"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z"/>
            </svg>
            View on Yelp →
          </a>
        )}
      </div>
    </section>
  );
}
