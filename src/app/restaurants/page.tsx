import { Metadata } from 'next';
import Link from 'next/link';
import { restaurants, neighborhoods } from '@/data/restaurants';

export const metadata: Metadata = {
    title: 'All Vegan Restaurants in Minneapolis & St. Paul 2026 | Complete Directory',
    description: 'Browse all 46+ vegan and plant-based restaurants in Minneapolis and Saint Paul. Filter by neighborhood, cuisine type, price range, and features. Updated weekly.',
    alternates: {
        canonical: 'https://mplsvegan.com/restaurants',
    },
    openGraph: {
        title: 'All Vegan Restaurants Minneapolis & St. Paul 2026',
        description: 'The complete directory of vegan and vegan-friendly restaurants in the Twin Cities',
        type: 'website',
        url: 'https://mplsvegan.com/restaurants',
    },
};

// Group restaurants by vegan status for organized display
function groupByStatus(items: typeof restaurants) {
    const veganOnly = items.filter(r => r.veganStatus === '100% Vegan');
    const vegetarian = items.filter(r => r.veganStatus === 'Vegetarian');
    const veganFriendly = items.filter(r => r.veganStatus === 'Vegan-Friendly');
    return { veganOnly, vegetarian, veganFriendly };
}

function generateItemListSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Vegan Restaurants in Minneapolis & St. Paul 2026',
        description: 'Complete directory of vegan and plant-based restaurants in the Twin Cities',
        numberOfItems: restaurants.length,
        itemListElement: restaurants.map((restaurant, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
                '@type': 'Restaurant',
                name: restaurant.name,
                servesCuisine: restaurant.cuisineType,
                priceRange: restaurant.priceRange,
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: restaurant.address,
                    addressLocality: restaurant.city,
                    addressRegion: restaurant.state,
                },
                url: `https://mplsvegan.com/restaurants/${restaurant.slug}`,
            },
        })),
    };
}

function generateBreadcrumbSchema() {
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
                item: 'https://mplsvegan.com/restaurants',
            },
        ],
    };
}

export default function RestaurantsPage() {
    const { veganOnly, vegetarian, veganFriendly } = groupByStatus(restaurants);
    const itemListSchema = generateItemListSchema();
    const breadcrumbSchema = generateBreadcrumbSchema();

    // Get unique cuisine types for quick links
    const cuisineTypes = new Set<string>();
    restaurants.forEach(r => r.cuisineType.forEach(c => cuisineTypes.add(c)));
    const sortedCuisines = Array.from(cuisineTypes).sort();

    // Get unique neighborhoods for quick links
    const uniqueNeighborhoods = new Map<string, string>();
    restaurants.forEach(r => uniqueNeighborhoods.set(r.neighborhoodSlug, r.neighborhood));
    const sortedNeighborhoods = Array.from(uniqueNeighborhoods.entries())
        .map(([slug, name]) => ({ slug, name }))
        .sort((a, b) => a.name.localeCompare(b.name));

    return (
        <>
            {/* Schema.org JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

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
                    {/* Breadcrumb */}
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
                                <span className="text-[#f5f0e8]/70">Restaurants</span>
                            </li>
                        </ol>
                    </nav>

                    <div className="space-y-4">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium badge-vegan">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
                            </svg>
                            {restaurants.length} Restaurants
                        </span>

                        <h1 className="font-display text-5xl lg:text-6xl text-[#f5f0e8] tracking-tight">
                            Vegan Restaurant Directory
                        </h1>
                        <p className="text-xl text-[#f5f0e8]/60 max-w-2xl">
                            Every vegan and vegan-friendly restaurant in Minneapolis &amp; Saint Paul. Browse by category, cuisine, or neighborhood.
                        </p>
                    </div>
                </div>
            </div>

            {/* Quick Stats */}
            <section className="py-8 px-6 lg:px-8 border-b border-[#f5f0e8]/10">
                <div className="max-w-7xl mx-auto flex flex-wrap gap-8 justify-center">
                    <div className="text-center">
                        <div className="font-display text-3xl text-[#d4a574]">{veganOnly.length}</div>
                        <div className="text-sm text-[#f5f0e8]/50">100% Vegan</div>
                    </div>
                    <div className="text-center">
                        <div className="font-display text-3xl text-[#d4a574]">{vegetarian.length}</div>
                        <div className="text-sm text-[#f5f0e8]/50">Vegetarian</div>
                    </div>
                    <div className="text-center">
                        <div className="font-display text-3xl text-[#d4a574]">{veganFriendly.length}</div>
                        <div className="text-sm text-[#f5f0e8]/50">Vegan-Friendly</div>
                    </div>
                    <div className="text-center">
                        <div className="font-display text-3xl text-[#d4a574]">{sortedNeighborhoods.length}</div>
                        <div className="text-sm text-[#f5f0e8]/50">Neighborhoods</div>
                    </div>
                </div>
            </section>

            {/* Quick Cuisine Links */}
            <section className="py-8 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-display text-lg text-[#f5f0e8]/70 mb-4">Browse by Cuisine</h2>
                    <div className="flex flex-wrap gap-2">
                        {sortedCuisines.map((cuisine) => {
                            const cuisineSlug = cuisine.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                            return (
                                <Link
                                    key={cuisine}
                                    href={`/restaurants/cuisine/${cuisineSlug}`}
                                    className="inline-flex px-3 py-1.5 rounded-full text-sm bg-[#2a2a2a] text-[#f5f0e8]/60 hover:text-[#d4a574] hover:bg-[#2a2a2a]/80 transition-colors"
                                >
                                    {cuisine}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 100% Vegan Section */}
            <section className="py-12 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-[#3d4a3d]/30 flex items-center justify-center">
                            <svg className="w-6 h-6 text-[#d4a574]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="font-display text-3xl text-[#f5f0e8]">100% Vegan</h2>
                            <p className="text-[#f5f0e8]/50 text-sm">{veganOnly.length} fully vegan restaurants</p>
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {veganOnly.map((restaurant) => (
                            <Link
                                key={restaurant.id}
                                href={`/restaurants/${restaurant.slug}`}
                                className="group card-elevated rounded-xl p-5 hover:ring-2 hover:ring-[#d4a574]/30 transition-all duration-300"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="font-display text-lg text-[#f5f0e8] group-hover:text-[#d4a574] transition-colors line-clamp-1">
                                        {restaurant.name}
                                    </h3>
                                    <span className="text-sm text-[#d4a574] flex-shrink-0 ml-2">{restaurant.priceRange}</span>
                                </div>
                                <p className="text-sm text-[#f5f0e8]/50 mb-2">{restaurant.cuisineType.join(' · ')}</p>
                                <p className="text-sm text-[#f5f0e8]/40">{restaurant.neighborhood}</p>
                                {restaurant.rating && (
                                    <div className="flex items-center gap-1 mt-3 text-sm text-[#d4a574]">
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z" />
                                        </svg>
                                        {restaurant.rating}
                                        {restaurant.reviewCount && (
                                            <span className="text-[#f5f0e8]/30 ml-1">({restaurant.reviewCount})</span>
                                        )}
                                    </div>
                                )}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vegetarian Section */}
            {vegetarian.length > 0 && (
                <section className="py-12 px-6 lg:px-8 border-t border-[#f5f0e8]/10">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-[#3d4a3d]/30 flex items-center justify-center">
                                <svg className="w-6 h-6 text-[#d4a574]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="font-display text-3xl text-[#f5f0e8]">Vegetarian</h2>
                                <p className="text-[#f5f0e8]/50 text-sm">{vegetarian.length} vegetarian restaurants with vegan options</p>
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {vegetarian.map((restaurant) => (
                                <Link
                                    key={restaurant.id}
                                    href={`/restaurants/${restaurant.slug}`}
                                    className="group card-elevated rounded-xl p-5 hover:ring-2 hover:ring-[#d4a574]/30 transition-all duration-300"
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="font-display text-lg text-[#f5f0e8] group-hover:text-[#d4a574] transition-colors line-clamp-1">
                                            {restaurant.name}
                                        </h3>
                                        <span className="text-sm text-[#d4a574] flex-shrink-0 ml-2">{restaurant.priceRange}</span>
                                    </div>
                                    <p className="text-sm text-[#f5f0e8]/50 mb-2">{restaurant.cuisineType.join(' · ')}</p>
                                    <p className="text-sm text-[#f5f0e8]/40">{restaurant.neighborhood}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Vegan-Friendly Section */}
            <section className="py-12 px-6 lg:px-8 border-t border-[#f5f0e8]/10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-[#3d4a3d]/30 flex items-center justify-center">
                            <svg className="w-6 h-6 text-[#d4a574]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="font-display text-3xl text-[#f5f0e8]">Vegan-Friendly</h2>
                            <p className="text-[#f5f0e8]/50 text-sm">{veganFriendly.length} restaurants with great vegan options</p>
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {veganFriendly.map((restaurant) => (
                            <Link
                                key={restaurant.id}
                                href={`/restaurants/${restaurant.slug}`}
                                className="group card-elevated rounded-xl p-5 hover:ring-2 hover:ring-[#d4a574]/30 transition-all duration-300"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="font-display text-lg text-[#f5f0e8] group-hover:text-[#d4a574] transition-colors line-clamp-1">
                                        {restaurant.name}
                                    </h3>
                                    <span className="text-sm text-[#d4a574] flex-shrink-0 ml-2">{restaurant.priceRange}</span>
                                </div>
                                <p className="text-sm text-[#f5f0e8]/50 mb-2">{restaurant.cuisineType.join(' · ')}</p>
                                <p className="text-sm text-[#f5f0e8]/40">{restaurant.neighborhood}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Browse by Neighborhood CTA */}
            <section className="py-12 px-6 lg:px-8 border-t border-[#f5f0e8]/10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-display text-2xl text-[#f5f0e8] mb-6">Browse by Neighborhood</h2>
                    <div className="grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                        {sortedNeighborhoods.map(({ slug, name }) => {
                            const count = restaurants.filter(r => r.neighborhoodSlug === slug).length;
                            return (
                                <Link
                                    key={slug}
                                    href={`/neighborhoods/${slug}`}
                                    className="group card-elevated rounded-lg p-4 hover:ring-1 hover:ring-[#d4a574]/30 transition-all"
                                >
                                    <span className="font-display text-sm text-[#f5f0e8] group-hover:text-[#d4a574] transition-colors">
                                        {name}
                                    </span>
                                    <span className="block text-xs text-[#f5f0e8]/30 mt-1">
                                        {count} restaurant{count !== 1 ? 's' : ''}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Related Guides */}
            <section className="py-16 px-6 lg:px-8 border-t border-[#f5f0e8]/10">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="font-display text-3xl text-[#f5f0e8] mb-4">Explore Our Guides</h2>
                    <p className="text-[#f5f0e8]/50 mb-8 max-w-xl mx-auto">
                        Looking for something specific? Check out our curated guides for every occasion.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/blog/vegan-brunch-minneapolis" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium">
                            🍳 Brunch Guide
                        </Link>
                        <Link href="/blog/vegan-date-night-minneapolis" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium">
                            💚 Date Night
                        </Link>
                        <Link href="/blog/ethiopian-vegan-food-minneapolis" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium">
                            🌍 Ethiopian Food
                        </Link>
                        <Link href="/blog/northeast-minneapolis-vegan-guide" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium">
                            🗺️ Northeast Guide
                        </Link>
                        <Link href="/blog/vegan-comfort-food-minneapolis" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium">
                            🍔 Comfort Food
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
