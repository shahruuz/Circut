'use client';

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/lib/products';

const PRICE_BANDS = [
  { label: 'Any price', min: 0, max: Infinity },
  { label: 'Under $10', min: 0, max: 10 },
  { label: '$10 – $20', min: 10, max: 20 },
  { label: '$20 – $35', min: 20, max: 35 },
  { label: '$35+', min: 35, max: Infinity },
];

const SORTS = [
  { label: 'Newest', value: 'newest' },
  { label: 'Price: low to high', value: 'price-asc' },
  { label: 'Price: high to low', value: 'price-desc' },
  { label: 'Top rated', value: 'rating' },
];

export default function ShopContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [query, setQuery] = useState('');
  const [category, setCategory] = useState(searchParams.get('category') || 'All');
  const [priceBand, setPriceBand] = useState(0);
  const [sort, setSort] = useState('newest');
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Keep the category filter in sync if the URL's ?category= changes
  // from elsewhere (e.g. a footer link clicked while already on /shop).
  useEffect(() => {
    setCategory(searchParams.get('category') || 'All');
  }, [searchParams]);

  const filtered = useMemo(() => {
    const band = PRICE_BANDS[priceBand];
    let list = products.filter((p) => {
      const matchesQuery =
        !query ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === 'All' || p.category === category;
      const matchesPrice = p.price >= band.min && p.price <= band.max;
      return matchesQuery && matchesCategory && matchesPrice;
    });

    switch (sort) {
      case 'price-asc':
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
      default:
        list = [...list].sort((a, b) => b.id - a.id);
    }
    return list;
  }, [query, category, priceBand, sort]);

  function chooseCategory(cat) {
    setCategory(cat);
    const params = new URLSearchParams(searchParams.toString());
    if (cat === 'All') params.delete('category');
    else params.set('category', cat);
    router.replace(`/shop?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="container-page py-10">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-label">The full shop</p>
          <h1 className="mt-1 text-3xl font-bold">{filtered.length} things worth cutting</h1>
        </div>

        <button
          className="btn-outline w-fit sm:hidden"
          onClick={() => setFiltersOpen((v) => !v)}
        >
          <SlidersHorizontal size={18} />
          Filters
        </button>
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-[240px_1fr]">
        {/* Filters */}
        <aside className={`${filtersOpen ? 'block' : 'hidden'} lg:block`}>
          <div className="cut-line rounded-sticker p-5">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-soft" size={18} />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products…"
                className="w-full rounded-full border-2 border-ink bg-paper py-2 pl-10 pr-4 text-sm focus:outline-none"
              />
            </div>

            <div className="mt-6">
              <p className="font-display font-bold">Category</p>
              <div className="mt-3 flex flex-col gap-1">
                {['All', ...categories].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => chooseCategory(cat)}
                    className={`rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
                      category === cat ? 'bg-coral text-white' : 'hover:bg-kraft-light'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="font-display font-bold">Price</p>
              <div className="mt-3 flex flex-col gap-1">
                {PRICE_BANDS.map((band, i) => (
                  <button
                    key={band.label}
                    onClick={() => setPriceBand(i)}
                    className={`rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
                      priceBand === i ? 'bg-teal text-white' : 'hover:bg-kraft-light'
                    }`}
                  >
                    {band.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Results */}
        <div>
          <div className="mb-5 flex items-center justify-between gap-3">
            {(category !== 'All' || query) && (
              <div className="flex flex-wrap items-center gap-2 text-sm">
                {category !== 'All' && (
                  <span className="flex items-center gap-1 rounded-full bg-kraft-light px-3 py-1">
                    {category}
                    <button onClick={() => chooseCategory('All')} aria-label="Clear category filter">
                      <X size={14} />
                    </button>
                  </span>
                )}
                {query && (
                  <span className="flex items-center gap-1 rounded-full bg-kraft-light px-3 py-1">
                    &ldquo;{query}&rdquo;
                    <button onClick={() => setQuery('')} aria-label="Clear search">
                      <X size={14} />
                    </button>
                  </span>
                )}
              </div>
            )}

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="ml-auto rounded-full border-2 border-ink bg-paper px-4 py-2 text-sm font-medium"
              aria-label="Sort products"
            >
              {SORTS.map((s) => (
                <option key={s.value} value={s.value}>
                  Sort: {s.label}
                </option>
              ))}
            </select>
          </div>

          {filtered.length === 0 ? (
            <div className="cut-line rounded-sticker p-10 text-center text-ink-soft">
              Nothing matches that search. Try a different word or clear your filters.
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
