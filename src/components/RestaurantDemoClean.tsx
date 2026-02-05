'use client';

import { useState } from 'react';
import { Restaurant } from '@/data/restaurants';

export default function RestaurantDemoClean({ restaurant }: { restaurant: Restaurant }) {
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [expandedDish, setExpandedDish] = useState<number | null>(null);

  const descriptionParagraphs = restaurant.description.split('\n\n');
  const firstParagraph = descriptionParagraphs[0];
  const remainingParagraphs = descriptionParagraphs.slice(1).join('\n\n');

  return (
    <div className="space-y-8">
      {/* The Vibe - Clean callout */}
      {restaurant.theVibe && (
        <div className="border-l-4 border-amber-600 bg-zinc-900/50 rounded-r-xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-amber-600/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <div className="text-xs font-semibold text-amber-600 mb-1.5 uppercase tracking-wider">The Vibe</div>
              <p className="text-lg text-zinc-300 leading-relaxed italic">{restaurant.theVibe}</p>
            </div>
          </div>
        </div>
      )}

      {/* Best For Tags */}
      {restaurant.bestFor && restaurant.bestFor.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {restaurant.bestFor.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 rounded-lg bg-zinc-800 text-zinc-300 text-sm font-medium border border-zinc-700 hover:border-amber-600/50 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* About Section - Clean accordion */}
      <div className="border border-zinc-800 bg-zinc-900/30 rounded-xl p-6 hover:border-zinc-700 transition-colors">
        <h2 className="text-2xl font-semibold text-white mb-4">About</h2>
        <div className="prose prose-invert max-w-none">
          <p className="text-zinc-400 leading-relaxed whitespace-pre-line">
            {aboutExpanded ? restaurant.description : firstParagraph}
          </p>
          {remainingParagraphs && (
            <button
              onClick={() => setAboutExpanded(!aboutExpanded)}
              className="mt-4 inline-flex items-center gap-2 text-amber-600 hover:text-amber-500 font-medium text-sm transition-colors"
            >
              {aboutExpanded ? (
                <>
                  <span>Show Less</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </>
              ) : (
                <>
                  <span>Continue Reading</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Photo Gallery Placeholder */}
      <div className="border border-zinc-800 bg-zinc-900/30 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">Photos</h2>
          <div className="flex gap-2">
            {['All', 'Food', 'Menu', 'Interior'].map((cat) => (
              <button
                key={cat}
                className="px-3 py-1.5 rounded-lg bg-zinc-800 text-zinc-400 text-sm font-medium border border-zinc-700 hover:border-amber-600/50 hover:text-amber-600 transition-all"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="aspect-video bg-zinc-800 rounded-lg flex items-center justify-center">
          <p className="text-zinc-500 text-sm">Photo gallery with categorized tabs</p>
        </div>
      </div>

      {/* What to Order - Clean cards */}
      {restaurant.whatToOrder && restaurant.whatToOrder.length > 0 && (
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-amber-600/10 flex items-center justify-center border border-amber-600/20">
              <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white">What to Order</h2>
              <p className="text-sm text-zinc-500">Menu highlights and customer favorites</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {restaurant.whatToOrder.map((item, idx) => {
              const [name, ...descParts] = item.split(' - ');
              const description = descParts.join(' - ');
              const isExpanded = expandedDish === idx;

              return (
                <button
                  key={idx}
                  onClick={() => setExpandedDish(isExpanded ? null : idx)}
                  className="text-left border border-zinc-800 bg-zinc-900/30 rounded-xl p-5 hover:border-amber-600/50 hover:bg-zinc-900/50 transition-all group"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-amber-600 transition-colors mb-1">
                        {name}
                      </h3>
                      <p className="text-sm text-zinc-400">{description}</p>
                    </div>
                    <div className="ml-3 w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center border border-zinc-700 group-hover:border-amber-600/50 transition-colors">
                      <svg 
                        className={`w-4 h-4 text-zinc-500 group-hover:text-amber-600 transition-all ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-zinc-800 space-y-3">
                      <div className="text-xs font-semibold text-amber-600 uppercase tracking-wider">
                        Customer Reviews
                      </div>
                      <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700/50">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-medium text-white">Review excerpt placeholder</span>
                          <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg key={star} className="w-3 h-3 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-zinc-400 italic">
                          "Real customer review excerpt would appear here mentioning this specific dish..."
                        </p>
                      </div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </section>
      )}

      {/* When to Go - Clean grid */}
      <div className="border border-zinc-800 bg-zinc-900/30 rounded-xl p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-amber-600/10 flex items-center justify-center border border-amber-600/20">
            <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white">When to Go</h2>
            <p className="text-sm text-zinc-500">Plan your visit for the best experience</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-zinc-800/30 rounded-lg p-6 border border-zinc-700/50">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20 mb-3">
              <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-white mb-2">Weekday Mornings</h3>
            <p className="text-sm text-zinc-400">Less crowded, great for quick pickups. Perfect for meal prep shopping.</p>
          </div>
          <div className="bg-amber-600/5 rounded-lg p-6 border border-amber-600/30">
            <div className="w-10 h-10 rounded-lg bg-amber-600/10 flex items-center justify-center border border-amber-600/20 mb-3">
              <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-white mb-2">Best Time</h3>
            <p className="text-sm text-zinc-400">Weekdays 11am-2pm for quick lunch grabs without weekend crowds.</p>
          </div>
          <div className="bg-zinc-800/30 rounded-lg p-6 border border-zinc-700/50">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center border border-orange-500/20 mb-3">
              <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-white mb-2">Weekend Lines</h3>
            <p className="text-sm text-zinc-400">Expect 10-15 min waits Saturday/Sunday mornings. It moves fast!</p>
          </div>
        </div>
      </div>

      {/* Contact Info - Clean layout */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-zinc-800 bg-zinc-900/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Location & Contact</h3>
          <div className="space-y-4">
            <div>
              <div className="text-xs text-zinc-500 mb-1.5 uppercase tracking-wider">Address</div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${restaurant.name} ${restaurant.address} ${restaurant.city}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 hover:text-amber-500 transition-colors"
              >
                {restaurant.address}<br />
                {restaurant.city}, {restaurant.state} {restaurant.zip}
              </a>
            </div>
            <div>
              <div className="text-xs text-zinc-500 mb-1.5 uppercase tracking-wider">Phone</div>
              <a href={`tel:${restaurant.phone}`} className="text-white hover:text-amber-600 transition-colors">
                {restaurant.phone}
              </a>
            </div>
            <div>
              <div className="text-xs text-zinc-500 mb-1.5 uppercase tracking-wider">Website</div>
              <a
                href={restaurant.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 hover:text-amber-500 transition-colors inline-flex items-center gap-2"
              >
                <span>Visit Website</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border border-zinc-800 bg-zinc-900/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${restaurant.coordinates.lat},${restaurant.coordinates.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-4 py-3 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-medium transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Get Directions</span>
            </a>
            <a
              href={restaurant.website}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-4 py-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-medium transition-colors flex items-center justify-center gap-2 border border-zinc-700"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <span>Visit Website</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
