import { Metadata } from 'next';
import Link from 'next/link';
import { restaurants } from '@/data/restaurants';

// Build cuisine data
function getCuisineData() {
    const cuisineMap = new Map<string, { slug: string; restaurants: typeof restaurants }>();

    restaurants.forEach((r) => {
        r.cuisineType.forEach((cuisine) => {
            const slug = cuisine.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            if (!cuisineMap.has(slug)) {
                cuisineMap.set(slug, { slug, restaurants: [] });
            }
            cuisineMap.get(slug)!.restaurants.push(r);
        });
    });

    return cuisineMap;
}

function getCuisineName(slug: string): string {
    const cuisineMap = getCuisineData();
    // Reconstruct name from data — find the original cuisine name
    for (const r of restaurants) {
        for (const c of r.cuisineType) {
            const s = c.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            if (s === slug) return c;
        }
    }
    return slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
}

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const cuisineMap = getCuisineData();
    return Array.from(cuisineMap.keys()).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const name = getCuisineName(slug);
    const cuisineMap = getCuisineData();
    const data = cuisineMap.get(slug);
    const count = data?.restaurants.length || 0;

    return {
        title: `Vegan ${name} Restaurants in Minneapolis & St. Paul 2026 | MPLS Vegan`,
        description: `Find ${count} vegan and plant-based ${name.toLowerCase()} restaurants in Minneapolis and Saint Paul. Browse menus, ratings, and reviews for the best vegan ${name.toLowerCase()} dining in the Twin Cities.`,
        alternates: {
            canonical: `https://mplsvegan.com/restaurants/cuisine/${slug}`,
        },
        openGraph: {
            title: `Vegan ${name} Restaurants in Minneapolis 2026`,
            description: `${count} vegan ${name.toLowerCase()} dining options in the Twin Cities`,
            type: 'website',
            url: `https://mplsvegan.com/restaurants/cuisine/${slug}`,
        },
    };
}

export default async function CuisinePage({ params }: Props) {
    const { slug } = await params;
    const name = getCuisineName(slug);
    const cuisineMap = getCuisineData();
    const data = cuisineMap.get(slug);

    if (!data || data.restaurants.length === 0) {
        return (
            <div className="max-w-4xl mx-auto px-6 lg:px-8 py-24 pt-32 text-center">
                <h1 className="font-display text-4xl text-[#f5f0e8]">Cuisine Not Found</h1>
                <Link href="/restaurants" className="text-[#d4a574] mt-4 inline-block">
                    ← Back to all restaurants
                </Link>
            </div>
        );
    }

    const veganOnly = data.restaurants.filter((r) => r.veganStatus === '100% Vegan');
    const veganFriendly = data.restaurants.filter((r) => r.veganStatus !== '100% Vegan');

    // Get related cuisines from restaurants in this cuisine
    const relatedCuisines = new Set<string>();
    data.restaurants.forEach((r) => {
        r.cuisineType.forEach((c) => {
            const s = c.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            if (s !== slug) relatedCuisines.add(c);
        });
    });

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mplsvegan.com' },
            { '@type': 'ListItem', position: 2, name: 'Restaurants', item: 'https://mplsvegan.com/restaurants' },
            { '@type': 'ListItem', position: 3, name: `${name} Cuisine`, item: `https://mplsvegan.com/restaurants/cuisine/${slug}` },
        ],
    };

    const itemListSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: `Vegan ${name} Restaurants in Minneapolis & St. Paul`,
        description: `${data.restaurants.length} vegan and plant-based ${name.toLowerCase()} restaurants in the Twin Cities`,
        numberOfItems: data.restaurants.length,
        itemListElement: data.restaurants.map((r, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
                '@type': 'Restaurant',
                name: r.name,
                servesCuisine: r.cuisineType,
                priceRange: r.priceRange,
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: r.address,
                    addressLocality: r.city,
                    addressRegion: r.state,
                },
                url: `https://mplsvegan.com/restaurants/${r.slug}`,
            },
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
            />

            <div className="relative min-h-screen">
                {/* Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-[#3d4a3d]/10 blur-[120px]" />
                    <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-[#d4a574]/5 blur-[100px]" />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 pt-32">
                    {/* Breadcrumb */}
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-12">
                        <Link href="/" className="text-[#f5f0e8]/50 hover:text-[#d4a574] transition-colors">
                            Home
                        </Link>
                        <span className="text-[#f5f0e8]/20">/</span>
                        <Link href="/restaurants" className="text-[#f5f0e8]/50 hover:text-[#d4a574] transition-colors">
                            Restaurants
                        </Link>
                        <span className="text-[#f5f0e8]/20">/</span>
                        <span className="text-[#d4a574]">{name}</span>
                    </nav>

                    {/* Header */}
                    <div className="mb-16">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <span className="w-12 h-px bg-gradient-to-r from-[#d4a574] to-transparent" />
                            <span className="text-xs uppercase tracking-[0.25em] text-[#d4a574]">Cuisine</span>
                        </div>
                        <h1 className="font-display text-5xl lg:text-6xl text-[#f5f0e8] tracking-tight mb-4">
                            Vegan {name} Restaurants
                        </h1>
                        <p className="text-xl text-[#f5f0e8]/60 max-w-2xl">
                            {data.restaurants.length} {name.toLowerCase()} restaurant{data.restaurants.length !== 1 ? 's' : ''} with
                            vegan options in Minneapolis &amp; Saint Paul.
                        </p>
                    </div>

                    {/* 100% Vegan Section */}
                    {veganOnly.length > 0 && (
                        <section className="mb-16">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-10 h-10 rounded-xl bg-[#3d4a3d]/30 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-[#d4a574]" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="font-display text-2xl text-[#f5f0e8]">100% Vegan</h2>
                                    <p className="text-sm text-[#f5f0e8]/50">{veganOnly.length} fully vegan {name.toLowerCase()} restaurant{veganOnly.length !== 1 ? 's' : ''}</p>
                                </div>
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {veganOnly.map((restaurant) => (
                                    <Link
                                        key={restaurant.id}
                                        href={`/restaurants/${restaurant.slug}`}
                                        className="group card-elevated rounded-xl p-6 hover:ring-2 hover:ring-[#d4a574]/30 transition-all duration-300"
                                    >
                                        <div className="flex items-start justify-between mb-3">
                                            <h3 className="font-display text-lg text-[#f5f0e8] group-hover:text-[#d4a574] transition-colors">
                                                {restaurant.name}
                                            </h3>
                                            <span className="text-sm text-[#d4a574] flex-shrink-0 ml-2">{restaurant.priceRange}</span>
                                        </div>
                                        <p className="text-sm text-[#f5f0e8]/40 mb-2">{restaurant.neighborhood}</p>
                                        <p className="text-sm text-[#f5f0e8]/50 line-clamp-2">{restaurant.description.slice(0, 120)}...</p>
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
                        </section>
                    )}

                    {/* Vegan-Friendly Section */}
                    {veganFriendly.length > 0 && (
                        <section className="mb-16">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-10 h-10 rounded-xl bg-[#3d4a3d]/30 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-[#d4a574]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="font-display text-2xl text-[#f5f0e8]">Vegan-Friendly & Vegetarian</h2>
                                    <p className="text-sm text-[#f5f0e8]/50">{veganFriendly.length} restaurant{veganFriendly.length !== 1 ? 's' : ''} with great vegan options</p>
                                </div>
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {veganFriendly.map((restaurant) => (
                                    <Link
                                        key={restaurant.id}
                                        href={`/restaurants/${restaurant.slug}`}
                                        className="group card-elevated rounded-xl p-6 hover:ring-2 hover:ring-[#d4a574]/30 transition-all duration-300"
                                    >
                                        <div className="flex items-start justify-between mb-3">
                                            <h3 className="font-display text-lg text-[#f5f0e8] group-hover:text-[#d4a574] transition-colors">
                                                {restaurant.name}
                                            </h3>
                                            <span className="text-sm text-[#d4a574] flex-shrink-0 ml-2">{restaurant.priceRange}</span>
                                        </div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${restaurant.veganStatus === 'Vegetarian' ? 'badge-vegetarian' : 'badge-friendly'}`}>
                                                {restaurant.veganStatus}
                                            </span>
                                        </div>
                                        <p className="text-sm text-[#f5f0e8]/40 mb-2">{restaurant.neighborhood}</p>
                                        <p className="text-sm text-[#f5f0e8]/50 line-clamp-2">{restaurant.description.slice(0, 120)}...</p>
                                        {restaurant.rating && (
                                            <div className="flex items-center gap-1 mt-3 text-sm text-[#d4a574]">
                                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z" />
                                                </svg>
                                                {restaurant.rating}
                                            </div>
                                        )}
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Related Cuisines */}
                    {relatedCuisines.size > 0 && (
                        <section className="mb-16">
                            <h2 className="font-display text-xl text-[#f5f0e8] mb-4">Related Cuisines</h2>
                            <div className="flex flex-wrap gap-2">
                                {Array.from(relatedCuisines).sort().map((cuisine) => {
                                    const s = cuisine.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                                    return (
                                        <Link
                                            key={s}
                                            href={`/restaurants/cuisine/${s}`}
                                            className="inline-flex px-4 py-2 rounded-full text-sm bg-[#2a2a2a] text-[#f5f0e8]/60 hover:text-[#d4a574] hover:bg-[#2a2a2a]/80 transition-colors"
                                        >
                                            {cuisine}
                                        </Link>
                                    );
                                })}
                            </div>
                        </section>
                    )}

                    {/* CTA */}
                    <section className="card-elevated rounded-2xl p-8 text-center">
                        <h2 className="font-display text-2xl text-[#f5f0e8] mb-4">Explore More</h2>
                        <p className="text-[#f5f0e8]/50 mb-6">
                            Discover all {restaurants.length}+ vegan and plant-based restaurants across Minneapolis &amp; Saint Paul.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                href="/restaurants"
                                className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium"
                            >
                                All Restaurants
                            </Link>
                            <Link
                                href="/neighborhoods"
                                className="btn-secondary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium"
                            >
                                Browse by Neighborhood
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
