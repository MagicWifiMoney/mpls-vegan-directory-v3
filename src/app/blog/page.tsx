import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';

export const metadata: Metadata = {
  title: 'Vegan Minneapolis Blog 2026 | Dining Guides & Reviews',
  description: 'The best vegan restaurant guides, neighborhood tours, and dining tips for Minneapolis. From brunch spots to date night ideas, we\'ve got you covered.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Vegan Minneapolis Blog',
    description: 'Plant-based dining guides for Minneapolis',
    type: 'website',
  },
};

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[40vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a] via-[#3d4a3d] to-[#2a2a2a]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(245, 240, 232, 0.5) 1px, transparent 0)`,
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-16 pt-32">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium badge-vegan mb-6">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            </svg>
            Blog
          </span>

          <h1 className="font-display text-5xl lg:text-6xl text-[#f5f0e8] tracking-tight mb-4">
            Vegan Minneapolis
          </h1>
          <p className="text-xl text-[#f5f0e8]/60 max-w-2xl">
            Guides, reviews, and neighborhood tours for plant-based eating in the Twin Cities
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group card-elevated rounded-2xl overflow-hidden hover:ring-2 hover:ring-[#d4a574]/30 transition-all duration-300"
              >
                {/* Card Header */}
                <div className="h-48 relative overflow-hidden bg-gradient-to-br from-[#3d4a3d] to-[#2a2a2a]">
                  <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, rgba(245, 240, 232, 0.5) 1px, transparent 0)`,
                      backgroundSize: '24px 24px',
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                      {post.category === 'Guide' && '📖'}
                      {post.category === 'Date Ideas' && '💚'}
                      {post.category === 'Neighborhood Guide' && '🗺️'}
                      {post.category === 'Cuisine Guide' && '🍽️'}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-[#1a1a1a]/80 text-[#f5f0e8]/70">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <h2 className="font-display text-xl text-[#f5f0e8] group-hover:text-[#d4a574] transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-[#f5f0e8]/50 text-sm line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-[#f5f0e8]/40">
                    <span>{post.readingTime}</span>
                    <span className="w-1 h-1 rounded-full bg-[#f5f0e8]/30" />
                    <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card-elevated rounded-2xl p-12">
            <h2 className="font-display text-3xl text-[#f5f0e8] mb-4">
              Hungry for More?
            </h2>
            <p className="text-[#f5f0e8]/60 mb-8">
              Explore all 46 vegan and vegan-friendly restaurants in our directory
            </p>
            <Link
              href="/#restaurants"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#d4a574] text-[#1a1a1a] font-medium hover:bg-[#e5b685] transition-colors"
            >
              Browse Restaurants
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
