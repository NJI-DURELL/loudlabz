'use client';

import { X, MapPin, Tag, Star, AlertCircle, ChevronRight } from 'lucide-react';
import {
  Leaf, Package, Droplets, FlaskConical, Candy, Sparkles,
} from 'lucide-react';
import type { Product } from '@/types';

const ICON_MAP: Record<string, React.ElementType> = {
  Leaf, Package, Droplets, FlaskConical, Candy, Sparkles,
};

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

/**
 * Full-detail modal overlay for a selected product.
 * Closes on backdrop click or Escape key (handled by parent).
 */
export default function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null;

  const Icon = ICON_MAP[product.iconName] ?? Leaf;
  const formatPrice = (price: number) =>
    price === 0 ? 'Ask for price' : `£${price}`;

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-[2px]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Product details: ${product.name}`}
    >
      {/* Panel */}
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header band */}
        <div className="bg-emerald-50 px-6 pt-8 pb-6 border-b border-emerald-100">
          <div className="w-12 h-12 rounded-xl bg-white border border-emerald-200 flex items-center justify-center mb-4 shadow-sm">
            <Icon className="w-6 h-6 text-emerald-600" strokeWidth={1.8} />
          </div>

          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h2>
              {product.badge && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white border border-emerald-200 text-emerald-700 text-xs font-semibold">
                  <Tag className="w-3 h-3" />
                  {product.badge}
                </span>
              )}
            </div>

            {product.isBestSeller && (
              <span className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                Best Seller
              </span>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-5 space-y-5">
          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed">{product.shortDescription}</p>

          {/* Origin */}
          {product.origin && (
            <p className="flex items-center gap-1.5 text-xs text-gray-400">
              <MapPin className="w-3.5 h-3.5" />
              {product.origin}
            </p>
          )}

          {/* Strains */}
          {product.strains && product.strains.length > 0 && (
            <div>
              <p className="text-[11px] uppercase tracking-wide font-semibold text-gray-400 mb-2">
                Available Strains
              </p>
              <div className="flex flex-wrap gap-1.5">
                {product.strains.map((strain) => (
                  <span
                    key={strain}
                    className="px-2.5 py-1 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-700 font-medium"
                  >
                    {strain}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Pricing table */}
          <div>
            <p className="text-[11px] uppercase tracking-wide font-semibold text-gray-400 mb-2">
              Pricing
            </p>
            <div className="rounded-xl border border-gray-100 overflow-hidden divide-y divide-gray-50">
              {product.pricingTiers.map((t, i) => (
                <div
                  key={t.weight}
                  className={`flex items-center justify-between px-4 py-3 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                >
                  <span className="text-sm text-gray-600 font-medium">{t.weight}</span>
                  <span className="text-sm font-bold text-gray-900">
                    {formatPrice(t.price)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Min order note */}
          {product.minOrderNote && (
            <p className="flex items-start gap-1.5 text-xs text-amber-600 font-medium">
              <AlertCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
              {product.minOrderNote}
            </p>
          )}
        </div>

        {/* Footer CTA */}
        <div className="px-6 pb-6 pt-2">
          <a
            href={`https://t.me/john_supply_uk?text=${encodeURIComponent(
              `Hi, I would like to enquire about ${product.name} from LoudLabz.`,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-full flex items-center justify-center gap-2
              py-3 rounded-xl
              bg-emerald-600 hover:bg-emerald-700
              text-white text-sm font-semibold
              transition-colors duration-150 shadow-sm
              focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
            "
          >
            <span>Enquire Now</span>
            <ChevronRight className="w-4 h-4" />
          </a>
          <p className="text-[11px] text-center text-gray-400 mt-2">
            Redirects to Telegram: @john_supply_uk
          </p>
        </div>
      </div>
    </div>
  );
}
