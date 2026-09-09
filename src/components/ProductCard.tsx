'use client';

import {
  Leaf,
  Package,
  Droplets,
  FlaskConical,
  Candy,
  Sparkles,
  Star,
  MapPin,
  ChevronRight,
  AlertCircle,
  Tag,
} from 'lucide-react';
import type { Product } from '@/types';

// ── Icon map ──────────────────────────────────────────────────────────────────
// Maps the string icon name (stored in data) to the actual Lucide component.
// This avoids dynamic imports and keeps tree-shaking intact.
const ICON_MAP: Record<string, React.ElementType> = {
  Leaf,
  Package,
  Droplets,
  FlaskConical,
  Candy,
  Sparkles,
};

// ── Tier color config ─────────────────────────────────────────────────────────
const TIER_CONFIG = {
  premium: {
    bg: 'bg-emerald-50',
    icon: 'text-emerald-600',
    dot: 'bg-emerald-500',
    label: 'Premium',
    labelClass: 'text-emerald-700 bg-emerald-50 border-emerald-200',
  },
  standard: {
    bg: 'bg-blue-50',
    icon: 'text-blue-600',
    dot: 'bg-blue-400',
    label: 'Standard',
    labelClass: 'text-blue-700 bg-blue-50 border-blue-200',
  },
  value: {
    bg: 'bg-amber-50',
    icon: 'text-amber-600',
    dot: 'bg-amber-400',
    label: 'Value',
    labelClass: 'text-amber-700 bg-amber-50 border-amber-200',
  },
} as const;

// ── Props ─────────────────────────────────────────────────────────────────────
interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

/**
 * Premium product card: clean, readable, and professional.
 * Subtle lift on hover, clear pricing tiers, and semantic HTML.
 */
export default function ProductCard({ product, onViewDetails }: ProductCardProps) {
  const tier = TIER_CONFIG[product.tier];
  const Icon = ICON_MAP[product.iconName] ?? Leaf;

  // Format price with £ prefix, or show "Ask for price" for £0
  const formatPrice = (price: number) =>
    price === 0 ? 'Ask for price' : `£${price}`;

  return (
    <article
      className="
        group relative bg-white border border-gray-100 rounded-2xl
        shadow-sm hover:shadow-md hover:-translate-y-0.5
        transition-all duration-200 ease-in-out
        flex flex-col overflow-hidden
      "
      aria-label={product.name}
    >
      {/* ── Top section ── */}
      <div className="p-5 flex-1">

        {/* Best Seller ribbon */}
        {product.isBestSeller && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-[11px] font-semibold">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              Best Seller
            </span>
          </div>
        )}

        {/* Icon */}
        <div
          className={`w-11 h-11 rounded-xl ${tier.bg} flex items-center justify-center mb-4`}
          aria-hidden="true"
        >
          <Icon className={`w-5 h-5 ${tier.icon}`} strokeWidth={1.8} />
        </div>

        {/* Badges row */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {/* Tier badge */}
          <span
            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold border ${tier.labelClass}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${tier.dot}`} />
            {tier.label}
          </span>

          {/* Product badge (Static, Premium Semi Dry, etc.) */}
          {product.badge && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-gray-50 border border-gray-200 text-gray-600">
              <Tag className="w-2.5 h-2.5" />
              {product.badge}
            </span>
          )}
        </div>

        {/* Product name */}
        <h3 className="text-base font-semibold text-gray-900 mb-1 leading-snug pr-14">
          {product.name}
        </h3>

        {/* Short description */}
        <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">
          {product.shortDescription}
        </p>

        {/* Strains (for Live Sauce etc.) */}
        {product.strains && product.strains.length > 0 && (
          <div className="mb-3">
            <p className="text-[11px] uppercase tracking-wide font-semibold text-gray-400 mb-1.5">
              Strains
            </p>
            <div className="flex flex-wrap gap-1">
              {product.strains.map((strain) => (
                <span
                  key={strain}
                  className="px-2 py-0.5 rounded-md bg-gray-50 border border-gray-200 text-[11px] text-gray-600 font-medium"
                >
                  {strain}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Origin */}
        {product.origin && (
          <p className="flex items-center gap-1 text-[11px] text-gray-400 mb-3">
            <MapPin className="w-3 h-3" />
            {product.origin}
          </p>
        )}

        {/* Pricing tiers */}
        <div>
          <p className="text-[11px] uppercase tracking-wide font-semibold text-gray-400 mb-2">
            Pricing
          </p>
          <div className="flex flex-wrap gap-2">
            {product.pricingTiers.map((t) => (
              <div
                key={t.weight}
                className="flex flex-col items-center px-3 py-1.5 rounded-xl bg-gray-50 border border-gray-100"
              >
                <span className="text-[10px] text-gray-400 font-medium">{t.weight}</span>
                <span className="text-sm font-bold text-gray-900">
                  {formatPrice(t.price)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Minimum order note */}
        {product.minOrderNote && (
          <p className="flex items-start gap-1.5 mt-3 text-[11px] text-amber-600 font-medium">
            <AlertCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
            {product.minOrderNote}
          </p>
        )}
      </div>

      {/* ── Footer ── */}
      <div className="px-5 pb-5">
        {/* Divider */}
        <div className="border-t border-gray-100 mb-4" />

        {/* Availability + CTA row */}
        <div className="flex items-center justify-between gap-3">
          {/* Availability badge */}
          <span
            className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border
              ${product.available
                ? 'text-emerald-700 bg-emerald-50 border-emerald-200'
                : 'text-red-600 bg-red-50 border-red-200'
              }`}
            aria-label={product.available ? 'In stock' : 'Out of stock'}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${product.available ? 'bg-emerald-500' : 'bg-red-400'}`}
            />
            {product.available ? 'Available' : 'Out of Stock'}
          </span>

          {/* View Details button */}
          <button
            onClick={() => onViewDetails(product)}
            disabled={!product.available}
            aria-label={`View details for ${product.name}`}
            className="
              inline-flex items-center gap-1.5 px-4 py-1.5
              rounded-xl text-sm font-semibold
              bg-emerald-600 hover:bg-emerald-700
              text-white
              transition-colors duration-150
              focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1
              disabled:opacity-50 disabled:cursor-not-allowed
              shadow-sm
            "
          >
            View Details
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
}
