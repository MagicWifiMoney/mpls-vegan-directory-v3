'use client';

import { useState } from 'react';
import Image from 'next/image';

interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  alt: string;
}

// Curated vegan food images with captions ready for future IG posts
const instagramPosts: InstagramPost[] = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=600&fit=crop',
    caption: 'Fresh from the garden to your bowl 🥗 Finding the best plant-based eats in Minneapolis so you don\'t have to!',
    likes: 342,
    alt: 'Colorful Buddha bowl with fresh vegetables, quinoa, and tahini dressing'
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&h=600&fit=crop',
    caption: 'That smash burger life 🍔 Minneapolis has some of the BEST vegan burgers in the country. Fight us.',
    likes: 527,
    alt: 'Stacked vegan burger with all the toppings and melted cheese'
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=600&fit=crop',
    caption: 'Color on a plate = life on a plate 🌈 Twin Cities vegan scene is unmatched.',
    likes: 289,
    alt: 'Vibrant plate of roasted vegetables with herbs'
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=600&fit=crop',
    caption: 'Vegan pizza night hits different when the cheese actually melts 🍕 IYKYK',
    likes: 445,
    alt: 'Wood-fired pizza with vegetables and vegan cheese'
  },
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=600&fit=crop',
    caption: 'Weekend vibes = brunch vibes 🥞 Plant-based pancakes are our love language',
    likes: 612,
    alt: 'Stack of fluffy vegan pancakes topped with berries and maple syrup'
  },
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1540914124281-342587941389?w=600&h=600&fit=crop',
    caption: 'Ethiopian food is naturally vegan-friendly 🇪🇹 Injera + stews = perfection',
    likes: 378,
    alt: 'Ethiopian platter with injera bread and various vegetable stews'
  },
  {
    id: '7',
    imageUrl: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&h=600&fit=crop',
    caption: 'Acai bowl art 🎨 The Dripping Root is doing something special',
    likes: 491,
    alt: 'Beautiful acai bowl topped with fruit, granola, and coconut'
  },
  {
    id: '8',
    imageUrl: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=600&h=600&fit=crop',
    caption: 'Tacos are for everyone 🌮 Best vegan tacos in MPLS? Drop your recs below!',
    likes: 356,
    alt: 'Colorful vegan tacos with jackfruit and fresh toppings'
  },
  {
    id: '9',
    imageUrl: 'https://images.unsplash.com/photo-1517433670267-30f4906d3bef?w=600&h=600&fit=crop',
    caption: 'Cold brew + oat milk is the only way ☕ Local coffee shops doing it right',
    likes: 267,
    alt: 'Iced coffee with oat milk foam art'
  },
  {
    id: '10',
    imageUrl: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?w=600&h=600&fit=crop',
    caption: 'Donut worry, be happy 🍩 Glam Doll\'s vegan selection never disappoints',
    likes: 583,
    alt: 'Assortment of colorful vegan donuts'
  },
  {
    id: '11',
    imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=600&fit=crop',
    caption: 'Wrap it up 🌯 Big flavors, no compromise. That\'s the MPLS vegan way.',
    likes: 298,
    alt: 'Mediterranean wrap with falafel and fresh vegetables'
  },
  {
    id: '12',
    imageUrl: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=600&fit=crop',
    caption: 'Soup season is here and we\'re here for it 🍜 Best vegan pho spots dropping soon',
    likes: 412,
    alt: 'Bowl of steaming vegan pho with herbs and vegetables'
  }
];

export default function InstagramFeed() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="relative py-24 px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#2a2a2a]/30 to-[#1a1a1a]" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#d4a574]/5 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#3d4a3d]/10 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6 justify-center">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#d4a574]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4a574]">@mpls_vegan</span>
            <span className="w-12 h-px bg-gradient-to-r from-[#d4a574] to-transparent" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl text-[#f5f0e8] mb-4">
            Follow the Journey
          </h2>
          <p className="text-[#f5f0e8]/50 text-lg max-w-xl mx-auto mb-8">
            Daily inspiration from the Twin Cities plant-based food scene
          </p>
          
          {/* Instagram follow button */}
          <a 
            href="https://instagram.com/mpls_vegan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-medium hover:scale-105 transition-transform"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow @mpls_vegan
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {instagramPosts.map((post, index) => (
            <a
              key={post.id}
              href="https://instagram.com/mpls_vegan"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
              onMouseEnter={() => setHoveredId(post.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Image */}
              <Image
                src={post.imageUrl}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              
              {/* Grain overlay */}
              <div className="absolute inset-0 bg-[#1a1a1a]/10 mix-blend-multiply" />
              
              {/* Hover overlay */}
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/90 via-[#1a1a1a]/50 to-transparent flex flex-col justify-end p-4 transition-opacity duration-300 ${
                  hoveredId === post.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {/* Likes */}
                <div className="flex items-center gap-2 text-[#f5f0e8] mb-2">
                  <svg className="w-5 h-5 text-[#d4a574]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <span className="text-sm font-medium">{post.likes}</span>
                </div>
                
                {/* Caption preview */}
                <p className="text-[#f5f0e8]/80 text-xs line-clamp-2">
                  {post.caption}
                </p>
              </div>

              {/* Corner Instagram icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-lg bg-[#1a1a1a]/60 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#f5f0e8]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          <div className="text-center">
            <div className="font-display text-2xl lg:text-3xl text-[#d4a574]">47</div>
            <div className="text-xs uppercase tracking-wider text-[#f5f0e8]/40">Spots Listed</div>
          </div>
          <div className="text-center border-x border-[#f5f0e8]/10">
            <div className="font-display text-2xl lg:text-3xl text-[#d4a574]">23</div>
            <div className="text-xs uppercase tracking-wider text-[#f5f0e8]/40">Neighborhoods</div>
          </div>
          <div className="text-center">
            <div className="font-display text-2xl lg:text-3xl text-[#d4a574]">100%</div>
            <div className="text-xs uppercase tracking-wider text-[#f5f0e8]/40">Plant Love</div>
          </div>
        </div>
      </div>
    </section>
  );
}
