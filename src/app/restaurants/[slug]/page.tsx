import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { restaurants, getRestaurantBySlug } from '@/data/restaurants';

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

// JSON-LD Schema for SEO
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

  const statusColors = {
    '100% Vegan': 'bg-green-100 text-green-800 border-green-200',
    'Vegetarian': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'Vegan-Friendly': 'bg-blue-100 text-blue-800 border-blue-200',
  };

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}

      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] bg-gradient-to-br from-green-500 to-green-700">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-9xl opacity-20">🌱</span>
        </div>
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
            <nav className="mb-4">
              <Link href="/" className="text-green-200 hover:text-white text-sm">
                ← Back to all restaurants
              </Link>
            </nav>
            <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-3 ${statusColors[restaurant.veganStatus]}`}>
              {restaurant.veganStatus}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {restaurant.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-green-100">
              <span>{restaurant.cuisineType.join(' • ')}</span>
              <span>•</span>
              <span>{restaurant.priceRange}</span>
              {restaurant.rating && (
                <>
                  <span>•</span>
                  <span className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {restaurant.rating}
                    {restaurant.reviewCount && (
                      <span className="ml-1 text-green-200">({restaurant.reviewCount} reviews)</span>
                    )}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {restaurant.description}
              </p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Features</h2>
              <div className="flex flex-wrap gap-2">
                {restaurant.features.map((feature) => (
                  <span 
                    key={feature}
                    className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Location</h2>
              <div className="h-64 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-12 h-12 text-green-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-600">{restaurant.address}</p>
                  <p className="text-gray-600">{restaurant.city}, {restaurant.state} {restaurant.zip}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Contact & Visit</h3>
              
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-900">{restaurant.address}</p>
                    <p className="text-gray-600">{restaurant.city}, {restaurant.state} {restaurant.zip}</p>
                    <Link 
                      href={`/neighborhoods/${restaurant.neighborhoodSlug}`}
                      className="text-green-600 hover:text-green-700 text-sm"
                    >
                      View {restaurant.neighborhood} →
                    </Link>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href={`tel:${restaurant.phone.replace(/\D/g, '')}`} className="text-gray-900 hover:text-green-600">
                    {restaurant.phone}
                  </a>
                </div>

                {/* Website */}
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <a 
                    href={restaurant.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700"
                  >
                    Visit Website →
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zip}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Get Directions
                </a>
                <a
                  href={restaurant.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center px-6 py-3 border-2 border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors"
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
