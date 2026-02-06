'use client';

import Image from 'next/image';

interface InstagramPost {
  displayUrl: string;
  caption: string;
  likesCount: number;
  commentsCount: number;
  shortCode: string;
  timestamp?: number;
}

interface InstagramGalleryProps {
  posts: InstagramPost[];
  restaurantName: string;
}

export default function InstagramGallery({ posts, restaurantName }: InstagramGalleryProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <div className="card-elevated p-8 rounded-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center text-2xl">
          📸
        </div>
        <div>
          <h2 className="font-display text-2xl text-[#f5f0e8]">Recent Instagram Posts</h2>
          <p className="text-sm text-[#f5f0e8]/60">
            Real photos from customers at {restaurantName}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {posts.slice(0, 10).map((post, idx) => (
          <a
            key={idx}
            href={`https://www.instagram.com/p/${post.shortCode}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer"
          >
            {/* Image */}
            <div className="relative w-full h-full">
              <Image
                src={post.displayUrl}
                alt={post.caption?.substring(0, 50) || 'Instagram post'}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
              />
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center space-y-2">
                <div className="flex items-center gap-4 justify-center text-sm">
                  <span className="flex items-center gap-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    {post.likesCount?.toLocaleString() || 0}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                    {post.commentsCount?.toLocaleString() || 0}
                  </span>
                </div>
                {post.caption && (
                  <p className="text-xs px-2 line-clamp-2">
                    {post.caption.substring(0, 60)}...
                  </p>
                )}
              </div>
            </div>

            {/* Instagram icon */}
            <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-[#f5f0e8]/60">
          Follow #{restaurantName.toLowerCase().replace(/\s+/g, '')} on Instagram for more
        </p>
      </div>
    </div>
  );
}
