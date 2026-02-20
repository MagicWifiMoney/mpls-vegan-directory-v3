import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { restaurants, getRestaurantBySlug } from '@/data/restaurants';
import { getBlogPostBySlug } from '@/data/blog-posts';
import RestaurantDetail from '@/components/RestaurantDetail';
import RestaurantDetailEnhanced from '@/components/RestaurantDetailEnhanced';
import InstagramGallery from '@/components/InstagramGallery';
import sampleInstagramPosts from '@/data/sample-instagram-posts.json';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return restaurants.map((restaurant) => ({
    slug: restaurant.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const restaurant = getRestaurantBySlug(slug);
  
  if (!restaurant) {
    return { title: 'Restaurant Not Found' };
  }

  return {
    title: `${restaurant.name} | Minneapolis Vegan Directory`,
    description: restaurant.description.slice(0, 160),
    openGraph: {
      title: restaurant.name,
      description: restaurant.description.slice(0, 160),
      type: 'website',
    },
  };
}

function generateRestaurantSchema(restaurant: ReturnType<typeof getRestaurantBySlug>) {
  if (!restaurant) return null;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: restaurant.name,
    description: restaurant.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: restaurant.address,
      addressLocality: restaurant.city,
      addressRegion: restaurant.state,
      postalCode: restaurant.zip,
      addressCountry: 'US',
    },
    telephone: restaurant.phone,
    url: restaurant.website,
    servesCuisine: restaurant.cuisineType,
    priceRange: restaurant.priceRange,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: restaurant.coordinates.lat,
      longitude: restaurant.coordinates.lng,
    },
    ...(restaurant.rating && { aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: restaurant.rating,
      reviewCount: restaurant.reviewCount || 0,
    }}),
  };
}

function generateBreadcrumbSchema(restaurant: ReturnType<typeof getRestaurantBySlug>) {
  if (!restaurant) return null;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://mplsvegan.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Restaurants',
        item: 'https://mplsvegan.com/#restaurants',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: restaurant.name,
        item: `https://mplsvegan.com/restaurants/${restaurant.slug}`,
      },
    ],
  };
}

export default async function RestaurantPage({ params }: Props) {
  const { slug } = await params;
  const restaurant = getRestaurantBySlug(slug);

  if (!restaurant) {
    notFound();
  }

  const restaurantSchema = generateRestaurantSchema(restaurant);
  const breadcrumbSchema = generateBreadcrumbSchema(restaurant);

  // Get related blog posts
  const relatedBlogs = restaurant.relatedBlogs
    ? restaurant.relatedBlogs
        .map(blogSlug => getBlogPostBySlug(blogSlug))
        .filter(Boolean)
    : [];

  const statusConfig = {
    '100% Vegan': { class: 'badge-vegan', label: '100% Vegan' },
    'Vegetarian': { class: 'badge-vegetarian', label: 'Vegetarian' },
    'Vegan-Friendly': { class: 'badge-friendly', label: 'Vegan-Friendly' },
  };

  const status = statusConfig[restaurant.veganStatus];

  return (
    <>
      {restaurantSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}

      {/* Hero Section */}
      <div className="relative min-h-[50vh] flex items-end overflow-hidden">
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
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-[#f5f0e8]/50">
              <li>
                <Link href="/" className="hover:text-[#d4a574] transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
                <Link href="/#restaurants" className="hover:text-[#d4a574] transition-colors">
                  Restaurants
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
                <span className="text-[#f5f0e8]/70 truncate max-w-[200px]">{restaurant.name}</span>
              </li>
            </ol>
          </nav>

          <div className="space-y-6">
            <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${status.class}`}>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"/>
              </svg>
              {status.label}
            </span>

            <h1 className="font-display text-5xl lg:text-6xl text-[#f5f0e8] tracking-tight">
              {restaurant.name}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-[#f5f0e8]/60">
              <span>{restaurant.cuisineType.join(' • ')}</span>
              <span className="w-1 h-1 rounded-full bg-[#f5f0e8]/30" />
              <span>{restaurant.priceRange}</span>
              <span className="w-1 h-1 rounded-full bg-[#f5f0e8]/30" />
              <span>{restaurant.neighborhood}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Enhanced component includes About section, so remove duplicate */}
        <RestaurantDetailEnhanced restaurant={restaurant} />
        
        {/* Instagram Preview - Only for Foxy Falafel */}
        {restaurant.slug === 'foxy-falafel' && (
          <div className="mt-8">
            <InstagramGallery 
              posts={sampleInstagramPosts} 
              restaurantName={restaurant.name}
            />
          </div>
        )}

        {/* Featured In Our Guides Section */}
        {relatedBlogs.length > 0 && (
          <section className="mt-16 pt-12 border-t border-[#f5f0e8]/10">
            <h2 className="font-display text-2xl text-[#f5f0e8] mb-6">
              Featured In Our Guides
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedBlogs.map((blog) => blog && (
                <Link 
                  key={blog.slug} 
                  href={`/blog/${blog.slug}`}
                  className="group card-elevated rounded-xl p-5 hover:ring-2 hover:ring-[#d4a574]/30 transition-all duration-300"
                >
                  <span className="inline-flex px-2 py-1 rounded-full text-xs font-medium bg-[#2a2a2a] text-[#f5f0e8]/60 mb-3">
                    {blog.category}
                  </span>
                  <h3 className="font-display text-lg text-[#f5f0e8] group-hover:text-[#d4a574] transition-colors line-clamp-2 mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-[#f5f0e8]/50 text-sm line-clamp-2">
                    {blog.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
