import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { restaurants, getRestaurantBySlug } from '@/data/restaurants';
import RestaurantDetail from '@/components/RestaurantDetail';

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

function generateSchema(restaurant: ReturnType<typeof getRestaurantBySlug>) {
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

export default async function RestaurantPage({ params }: Props) {
  const { slug } = await params;
  const restaurant = getRestaurantBySlug(slug);

  if (!restaurant) {
    notFound();
  }

  const schema = generateSchema(restaurant);

  const statusConfig = {
    '100% Vegan': { class: 'badge-vegan', label: '100% Vegan' },
    'Vegetarian': { class: 'badge-vegetarian', label: 'Vegetarian' },
    'Vegan-Friendly': { class: 'badge-friendly', label: 'Vegan-Friendly' },
  };

  const status = statusConfig[restaurant.veganStatus];

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}

      {/* Hero Section */}
      <div className="relative min-h-[50vh] flex items-end overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a] via-[#3d4a3d] to-[#2a2a2a]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
          
          {/* Decorative pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(245, 240, 232, 0.5) 1px, transparent 0)`,
              backgroundSize: '32px 32px',
            }}
          />

          {/* Ambient glows */}
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#d4a574]/10 blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-[#3d4a3d]/20 blur-[80px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-16 pt-32">
          {/* Back link */}
          <Link 
            href="/#restaurants" 
            className="inline-flex items-center gap-2 text-sm text-[#f5f0e8]/50 hover:text-[#d4a574] transition-colors mb-8 group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to directory
          </Link>

          {/* Restaurant info */}
          <div className="space-y-6">
            {/* Status badge */}
            <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${status.class}`}>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"/>
              </svg>
              {status.label}
            </span>

            {/* Name */}
            <h1 className="font-display text-5xl lg:text-6xl text-[#f5f0e8] tracking-tight">
              {restaurant.name}
            </h1>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 text-[#f5f0e8]/60">
              <span className="flex items-center gap-2">
                {restaurant.cuisineType.join(' • ')}
              </span>
              <span className="w-1 h-1 rounded-full bg-[#f5f0e8]/30" />
              <span>{restaurant.priceRange}</span>
              {restaurant.rating && (
                <>
                  <span className="w-1 h-1 rounded-full bg-[#f5f0e8]/30" />
                  <span className="flex items-center gap-1">
                    <svg className="w-5 h-5 text-[#d4a574]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"/>
                    </svg>
                    {restaurant.rating}
                    {restaurant.reviewCount && (
                      <span className="text-[#f5f0e8]/40 ml-1">({restaurant.reviewCount})</span>
                    )}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* About Section */}
        <div className="card-elevated rounded-2xl p-8 mb-12">
          <h2 className="font-display text-2xl text-[#f5f0e8] mb-6">About</h2>
          <p className="text-[#f5f0e8]/60 leading-relaxed text-lg">
            {restaurant.description}
          </p>
        </div>

        {/* Google Places Data (Photos, Reviews, Hours) */}
        <RestaurantDetail restaurant={restaurant} />

            {/* Features */}
            <div className="card-elevated rounded-2xl p-8">
              <h2 className="font-display text-2xl text-[#f5f0e8] mb-6">Features</h2>
              <div className="flex flex-wrap gap-3">
                {restaurant.features.map((feature) => (
                  <span 
                    key={feature}
                    className="px-4 py-2 rounded-full text-sm bg-[#3d4a3d]/30 text-[#d4a574] border border-[#3d4a3d]/50"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Location Card */}
            <div className="card-elevated rounded-2xl p-8">
              <h2 className="font-display text-2xl text-[#f5f0e8] mb-6">Location</h2>
              <div className="h-64 bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl flex items-center justify-center relative overflow-hidden">
                {/* Stylized map background */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 400 250" fill="none">
                    <line x1="0" y1="60" x2="400" y2="60" stroke="#f5f0e8" strokeWidth="0.5" strokeDasharray="4 4"/>
                    <line x1="0" y1="125" x2="400" y2="125" stroke="#f5f0e8" strokeWidth="0.5"/>
                    <line x1="0" y1="190" x2="400" y2="190" stroke="#f5f0e8" strokeWidth="0.5" strokeDasharray="4 4"/>
                    <line x1="100" y1="0" x2="100" y2="250" stroke="#f5f0e8" strokeWidth="0.5" strokeDasharray="4 4"/>
                    <line x1="200" y1="0" x2="200" y2="250" stroke="#f5f0e8" strokeWidth="0.5"/>
                    <line x1="300" y1="0" x2="300" y2="250" stroke="#f5f0e8" strokeWidth="0.5" strokeDasharray="4 4"/>
                  </svg>
                </div>
                
                {/* Center marker */}
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-[#d4a574] shadow-lg shadow-[#d4a574]/50" />
                  <span className="absolute -inset-3 rounded-full bg-[#d4a574]/20 animate-ping" />
                </div>
                
                {/* Address overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#1a1a1a]/80 backdrop-blur-sm rounded-lg p-4 border border-[#f5f0e8]/5">
                  <p className="text-[#f5f0e8]/80 text-sm">{restaurant.address}</p>
                  <p className="text-[#f5f0e8]/50 text-sm">{restaurant.city}, {restaurant.state} {restaurant.zip}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-6">
            <div className="card-elevated rounded-2xl p-8 lg:sticky lg:top-28">
              <h3 className="font-display text-xl text-[#f5f0e8] mb-6">Contact & Visit</h3>
              
              <div className="space-y-5">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#3d4a3d]/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#d4a574]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#f5f0e8] text-sm">{restaurant.address}</p>
                    <p className="text-[#f5f0e8]/50 text-sm">{restaurant.city}, {restaurant.state} {restaurant.zip}</p>
                    <Link 
                      href={`/neighborhoods/${restaurant.neighborhoodSlug}`}
                      className="text-[#d4a574] hover:text-[#e6c49a] text-sm mt-1 inline-flex items-center gap-1 transition-colors"
                    >
                      {restaurant.neighborhood}
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#3d4a3d]/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#d4a574]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <a 
                    href={`tel:${restaurant.phone.replace(/\D/g, '')}`} 
                    className="text-[#f5f0e8] hover:text-[#d4a574] text-sm transition-colors"
                  >
                    {restaurant.phone}
                  </a>
                </div>

                {/* Website */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#3d4a3d]/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#d4a574]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <a 
                    href={restaurant.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#d4a574] hover:text-[#e6c49a] text-sm transition-colors inline-flex items-center gap-1"
                  >
                    Visit Website
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="section-divider my-6" />

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zip}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full block text-center px-6 py-4 rounded-xl text-sm font-medium"
                >
                  Get Directions
                </a>
                <a
                  href={restaurant.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full block text-center px-6 py-4 rounded-xl text-sm font-medium"
                >
                  Order Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
