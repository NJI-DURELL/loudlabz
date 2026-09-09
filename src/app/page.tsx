'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import type { Category, Product } from '@/types';
import { products as allProducts, categories } from '@/data/products';
import { Send } from 'lucide-react';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import ProductGrid from '@/components/ProductGrid';
import ProductModal from '@/components/ProductModal';

/**
 * Main catalogue page for LoudLabz.
 *
 * Features:
 * - Real-time search filtering
 * - Category filter chips
 * - Product detail modal
 * - Loading skeleton on initial mount
 * - Keyboard-accessible (Escape closes modal)
 */
export default function CataloguePage() {
  // ── State ──────────────────────────────────────────────────────────────────
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate an initial data-load shimmer for ~600ms
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  // Close modal on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProduct(null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // ── Filtered products ──────────────────────────────────────────────────────
  const filteredProducts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return allProducts.filter((p) => {
      const matchesCategory =
        selectedCategory === 'all' || p.category === selectedCategory;
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.strains?.some((s) => s.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  // ── Category counts ────────────────────────────────────────────────────────
  const counts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    const base = !q
      ? allProducts
      : allProducts.filter(
          (p) =>
            p.name.toLowerCase().includes(q) ||
            p.shortDescription.toLowerCase().includes(q) ||
            p.strains?.some((s) => s.toLowerCase().includes(q)),
        );

    return categories.reduce<Record<string, number>>((acc, cat) => {
      acc[cat.value] =
        cat.value === 'all'
          ? base.length
          : base.filter((p) => p.category === cat.value).length;
      return acc;
    }, {});
  }, [searchQuery]);

  // ── Handlers ───────────────────────────────────────────────────────────────
  const handleCategoryChange = useCallback((cat: Category) => {
    setSelectedCategory(cat);
  }, []);

  const handleViewDetails = useCallback((product: Product) => {
    setSelectedProduct(product);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <>
      <Header />

      <main id="main-content" className="min-h-screen bg-[#FAFAFA]">
        {/* ── Hero ── */}
        <section
          className="bg-white border-b border-gray-100"
          aria-labelledby="hero-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="max-w-2xl">
              {/* Eyebrow */}
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-3">
                Premium Cannabis Catalogue
              </p>

              {/* Heading */}
              <h1
                id="hero-heading"
                className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-4"
              >
                London's finest selection,{' '}
                <span className="text-emerald-600">curated for quality.</span>
              </h1>

              {/* Sub-description */}
              <p className="text-base text-gray-500 leading-relaxed mb-8 max-w-xl">
                From premium statics and Cali imports to solventless extracts and
                infused edibles, every product hand-picked for potency, flavour,
                and consistency.
              </p>

              {/* Search bar */}
              <SearchBar value={searchQuery} onChange={setSearchQuery} />

              {/* Order notice + Shipping badge */}
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3 text-xs text-gray-500">
                <div className="flex items-center gap-1.5">
                  <span className="font-medium text-gray-700">How to order:</span>
                  <span>Telegram</span>
                  <a
                    href="https://t.me/john_supply_uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-emerald-700 hover:text-emerald-800 underline underline-offset-2"
                  >
                    <Send className="w-3 h-3" />
                    @john_supply_uk
                  </a>
                </div>

                <span className="hidden sm:inline text-gray-300">•</span>

                <div className="inline-flex items-center gap-1.5 font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60 w-fit">
                  <span>📮 Mon-Fri Postals: Shipping £10</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Catalogue body ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Filters + result count row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <CategoryFilter
              selected={selectedCategory}
              onChange={handleCategoryChange}
              counts={counts}
            />

            {!isLoading && (
              <p className="text-sm text-gray-400 shrink-0" aria-live="polite">
                {filteredProducts.length === 0
                  ? 'No results'
                  : `${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''}`}
              </p>
            )}
          </div>

          {/* Product grid */}
          <ProductGrid
            products={filteredProducts}
            isLoading={isLoading}
            onViewDetails={handleViewDetails}
          />
        </div>

        {/* ── Footer ── */}
        <footer className="border-t border-gray-100 bg-white mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900">LoudLabz</p>
                <p className="text-xs text-gray-400 mt-0.5">Premium Cannabis Catalogue</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-400">Order via Telegram:</span>
                <a
                  href="https://t.me/john_supply_uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700 hover:bg-emerald-100 transition-colors"
                >
                  <Send className="w-3 h-3" />
                  t.me/john_supply_uk
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* ── Product Detail Modal ── */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </>
  );
}
