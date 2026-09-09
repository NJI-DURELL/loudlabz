// ─────────────────────────────────────────────
// Type definitions for LoudLabz catalog
// ─────────────────────────────────────────────

export type Category = 'all' | 'flower' | 'extracts' | 'edibles';

export type Tier = 'premium' | 'standard' | 'value';

export interface PriceTier {
  weight: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  category: Category;
  tier: Tier;
  pricingTiers: PriceTier[];
  /** Starting / headline price for display */
  fromPrice: number;
  available: boolean;
  isBestSeller?: boolean;
  isNew?: boolean;
  badge?: string;
  /** Lucide icon component name */
  iconName: string;
  /** Optional strain list for products like Live Sauce */
  strains?: string[];
  /** Minimum order note */
  minOrderNote?: string;
  /** e.g. "Imported From Cali 🇺🇸" */
  origin?: string;
}
