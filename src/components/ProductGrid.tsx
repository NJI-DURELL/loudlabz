'use client';

import { PackageOpen } from 'lucide-react';
import type { Product } from '@/types';
import ProductCard from './ProductCard';
import SkeletonCard from './SkeletonCard';

interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
  onViewDetails: (product: Product) => void;
}

/** Skeleton count while loading */
const SKELETON_COUNT = 6;

/**
 * Responsive product grid.
 * Shows skeletons while loading, an empty state when no results found,
 * and a uniform card grid otherwise.
 */
export default function ProductGrid({
  products,
  isLoading = false,
  onViewDetails,
}: ProductGridProps) {
  // ── Loading state ──────────────────────────────────────────────────────────
  if (isLoading) {
    return (
      <section aria-label="Loading products" aria-busy="true">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </section>
    );
  }

  // ── Empty state ────────────────────────────────────────────────────────────
  if (products.length === 0) {
    return (
      <section
        className="flex flex-col items-center justify-center py-24 text-center"
        aria-label="No products found"
      >
        <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-5">
          <PackageOpen className="w-7 h-7 text-gray-300" />
        </div>
        <h3 className="text-base font-semibold text-gray-900 mb-1">No products found</h3>
        <p className="text-sm text-gray-500 max-w-xs">
          Try a different search term or category filter to see more results.
        </p>
      </section>
    );
  }

  // ── Normal grid ────────────────────────────────────────────────────────────
  return (
    <section aria-label="Product catalogue">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onViewDetails={onViewDetails}
          />
        ))}
      </div>
    </section>
  );
}
