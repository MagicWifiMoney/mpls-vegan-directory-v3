'use client';

import { useState, useMemo, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import SearchFiltersHorizontal from './SearchFiltersHorizontal';
import { Restaurant } from '@/data/restaurants';

interface Props {
    restaurants: Restaurant[];
}

const statusConfig: Record<string, { dotClass: string }> = {
    '100% Vegan': { dotClass: 'bg-[#6db36d]' },
    Vegetarian: { dotClass: 'bg-[#7ec8e3]' },
    'Vegan-Friendly': { dotClass: 'bg-[#d4a574]' },
};

type SortOption = 'default' | 'alpha' | 'neighborhood';

export default function RestaurantDirectory({ restaurants }: Props) {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Initialize state from URL params
    const [searchQuery, setSearchQueryState] = useState(() => searchParams.get('q') ?? '');
    const [veganStatusFilter, setVeganStatusFilterState] = useState(() => searchParams.get('status') ?? '');
    const [cuisineFilter, setCuisineFilterState] = useState(() => searchParams.get('cuisine') ?? '');
    const [neighborhoodFilter, setNeighborhoodFilterState] = useState(() => searchParams.get('neighborhood') ?? '');
    const [priceFilter, setPriceFilterState] = useState(() => searchParams.get('price') ?? '');
    const [featureFilter, setFeatureFilterState] = useState(() => searchParams.get('feature') ?? '');
    const [sortBy, setSortByState] = useState<SortOption>(() => (searchParams.get('sort') as SortOption) ?? 'default');

    // Sync state to URL params
    const updateURL = useCallback((updates: Record<string, string>) => {
        const params = new URLSearchParams(searchParams.toString());
        for (const [key, value] of Object.entries(updates)) {
            if (value) {
                params.set(key, value);
            } else {
                params.delete(key);
            }
        }
        const qs = params.toString();
        router.replace(qs ? `/restaurants?${qs}` : '/restaurants', { scroll: false });
    }, [router, searchParams]);

    const setSearchQuery = (v: string) => { setSearchQueryState(v); updateURL({ q: v }); };
    const setVeganStatusFilter = (v: string) => { setVeganStatusFilterState(v); updateURL({ status: v }); };
    const setCuisineFilter = (v: string) => { setCuisineFilterState(v); updateURL({ cuisine: v }); };
    const setNeighborhoodFilter = (v: string) => { setNeighborhoodFilterState(v); updateURL({ neighborhood: v }); };
    const setPriceFilter = (v: string) => { setPriceFilterState(v); updateURL({ price: v }); };
    const setFeatureFilter = (v: string) => { setFeatureFilterState(v); updateURL({ feature: v }); };
    const setSortBy = (v: SortOption) => { setSortByState(v); updateURL({ sort: v === 'default' ? '' : v }); };

    // Computed filter options
    const cuisineTypes = useMemo(() => {
        const types = new Set<string>();
        restaurants.forEach(r => r.cuisineType.forEach(c => types.add(c)));
        return Array.from(types).sort();
    }, [restaurants]);

    const neighborhoods = useMemo(() => {
        const hoods = new Map<string, string>();
        restaurants.forEach(r => hoods.set(r.neighborhoodSlug, r.neighborhood));
        return Array.from(hoods.entries())
            .map(([slug, name]) => ({ slug, name }))
            .sort((a, b) => a.name.localeCompare(b.name));
    }, [restaurants]);

    const features = useMemo(() => {
        const feat = new Set<string>();
        restaurants.forEach(r => r.features.forEach(f => feat.add(f)));
        return Array.from(feat).sort();
    }, [restaurants]);

    const priceRanges = ['$', '$$', '$$$', '$$$$'];

    // Filter + sort
    const filtered = useMemo(() => {
        let results = restaurants.filter((r) => {
            if (searchQuery) {
                const q = searchQuery.toLowerCase();
                const match =
                    r.name.toLowerCase().includes(q) ||
                    r.cuisineType.some(c => c.toLowerCase().includes(q)) ||
                    r.neighborhood.toLowerCase().includes(q) ||
                    r.description.toLowerCase().includes(q);
                if (!match) return false;
            }
            if (veganStatusFilter && r.veganStatus !== veganStatusFilter) return false;
            if (cuisineFilter && !r.cuisineType.includes(cuisineFilter)) return false;
            if (neighborhoodFilter && r.neighborhoodSlug !== neighborhoodFilter) return false;
            if (priceFilter && r.priceRange !== priceFilter) return false;
            if (featureFilter && !r.features.includes(featureFilter)) return false;
            return true;
        });

        if (sortBy === 'alpha') {
            results = [...results].sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === 'neighborhood') {
            results = [...results].sort((a, b) => a.neighborhood.localeCompare(b.neighborhood));
        }

        return results;
    }, [restaurants, searchQuery, veganStatusFilter, cuisineFilter, neighborhoodFilter, priceFilter, featureFilter, sortBy]);

    const isFiltered = !!(searchQuery || veganStatusFilter || cuisineFilter || neighborhoodFilter || priceFilter || featureFilter);

    // Group results by vegan status (when not filtered/sorted in a way that breaks grouping)
    const groups = useMemo(() => {
        if (sortBy !== 'default' || isFiltered) {
            return null; // flat list when sorted/filtered
        }
        return [
            { key: '100% Vegan', label: '100% Vegan Restaurants', items: filtered.filter(r => r.veganStatus === '100% Vegan') },
            { key: 'Vegetarian', label: 'Vegetarian Restaurants', items: filtered.filter(r => r.veganStatus === 'Vegetarian') },
            { key: 'Vegan-Friendly', label: 'Vegan-Friendly Restaurants', items: filtered.filter(r => r.veganStatus === 'Vegan-Friendly') },
        ].filter(g => g.items.length > 0);
    }, [filtered, sortBy, isFiltered]);

    return (
        <>
            {/* Filters */}
            <SearchFiltersHorizontal
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                veganStatusFilter={veganStatusFilter}
                setVeganStatusFilter={setVeganStatusFilter}
                cuisineFilter={cuisineFilter}
                setCuisineFilter={setCuisineFilter}
                neighborhoodFilter={neighborhoodFilter}
                setNeighborhoodFilter={setNeighborhoodFilter}
                priceFilter={priceFilter}
                setPriceFilter={setPriceFilter}
                featureFilter={featureFilter}
                setFeatureFilter={setFeatureFilter}
                cuisineTypes={cuisineTypes}
                neighborhoods={neighborhoods}
                priceRanges={priceRanges}
                features={features}
            />

            {/* Sort + Results count */}
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                <p className="text-sm text-[#f5f0e8]/40">
                    {isFiltered
                        ? `Showing ${filtered.length} of ${restaurants.length} restaurants`
                        : `${restaurants.length} plant-based restaurants`}
                </p>
                <div className="flex items-center gap-2">
                    <span className="text-xs text-[#f5f0e8]/30 uppercase tracking-widest">Sort</span>
                    {(['default', 'alpha', 'neighborhood'] as SortOption[]).map((opt) => {
                        const labels: Record<SortOption, string> = {
                            default: 'Default',
                            alpha: 'A → Z',
                            neighborhood: 'Neighborhood',
                        };
                        return (
                            <button
                                key={opt}
                                onClick={() => setSortBy(opt)}
                                className={`px-3 py-1 rounded-full text-xs border transition-all ${sortBy === opt
                                    ? 'border-[#d4a574] text-[#d4a574] bg-[#d4a574]/10'
                                    : 'border-[#f5f0e8]/10 text-[#f5f0e8]/40 hover:border-[#f5f0e8]/20'
                                    }`}
                            >
                                {labels[opt]}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* No results */}
            {filtered.length === 0 && (
                <div className="text-center py-20 text-[#f5f0e8]/30">
                    <p className="text-lg mb-2">No restaurants match your filters</p>
                    <button
                        onClick={() => {
                            setSearchQuery('');
                            setVeganStatusFilter('');
                            setCuisineFilter('');
                            setNeighborhoodFilter('');
                            setPriceFilter('');
                            setFeatureFilter('');
                        }}
                        className="text-sm text-[#d4a574] hover:underline"
                    >
                        Clear all filters
                    </button>
                </div>
            )}

            {/* Grouped view (default) */}
            {groups && groups.map((group) => (
                <section
                    key={group.key}
                    id={group.key.toLowerCase().replace(/[^a-z]/g, '-').replace(/-+/g, '-')}
                    className="mb-20 scroll-mt-24"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-3 h-3 rounded-full" style={{
                            background: group.key === '100% Vegan' ? '#6db36d' : group.key === 'Vegetarian' ? '#7ec8e3' : '#d4a574'
                        }} />
                        <h2 className="font-display text-3xl text-[#f5f0e8]">{group.label}</h2>
                        <span className="text-[#f5f0e8]/30 text-lg">({group.items.length})</span>
                    </div>
                    <RestaurantGrid restaurants={group.items} />
                </section>
            ))}

            {/* Flat view (filtered or sorted) */}
            {!groups && filtered.length > 0 && (
                <RestaurantGrid restaurants={filtered} />
            )}
        </>
    );
}

function RestaurantGrid({ restaurants }: { restaurants: Restaurant[] }) {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {restaurants.map((restaurant, index) => (
                <Link
                    key={restaurant.slug}
                    href={`/restaurants/${restaurant.slug}`}
                    className="group card-elevated rounded-2xl p-6 transition-all duration-500 hover:ring-2 hover:ring-[#d4a574]/20"
                    style={{ animationDelay: `${index * 30}ms` }}
                >
                    <div className="flex items-start justify-between mb-3">
                        <h3 className="font-display text-lg text-[#f5f0e8] group-hover:text-[#d4a574] transition-colors leading-tight pr-2">
                            {restaurant.name}
                        </h3>
                        <svg
                            className="w-5 h-5 flex-shrink-0 text-[#f5f0e8]/20 group-hover:text-[#d4a574] group-hover:translate-x-1 transition-all"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        >
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                    </div>

                    <p className="text-sm text-[#f5f0e8]/40 mb-3">
                        {restaurant.cuisineType.join(' · ')}
                    </p>

                    <div className="flex items-center gap-3 text-xs text-[#f5f0e8]/30">
                        <span>{restaurant.neighborhood}</span>
                        <span>·</span>
                        <span>{restaurant.priceRange}</span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                            <span
                                className={`w-1.5 h-1.5 rounded-full inline-block ${
                                    restaurant.veganStatus === '100% Vegan'
                                        ? 'bg-[#6db36d]'
                                        : restaurant.veganStatus === 'Vegetarian'
                                        ? 'bg-[#7ec8e3]'
                                        : 'bg-[#d4a574]'
                                }`}
                            />
                            {restaurant.veganStatus}
                        </span>
                    </div>

                    <div className="mt-4 h-0.5 bg-gradient-to-r from-[#d4a574] to-[#c17f59] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Link>
            ))}
        </div>
    );
}
