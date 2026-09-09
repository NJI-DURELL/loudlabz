// ─────────────────────────────────────────────
// Product catalogue data for LoudLabz
// ─────────────────────────────────────────────

import { Product } from '@/types';

export const products: Product[] = [
  // ── FLOWER ───────────────────────────────────
  {
    id: 'kosher-kush-static',
    name: 'Kosher Kush',
    shortDescription:
      'A legendary indica-dominant cultivar renowned for its earthy pine aroma, dense resinous buds, and deeply relaxing effects. Top-shelf static.',
    category: 'flower',
    tier: 'premium',
    pricingTiers: [
      { weight: '3.5g', price: 50 },
      { weight: '7g', price: 80 },
      { weight: '14g', price: 130 },
      { weight: '100g', price: 700 },
    ],
    fromPrice: 50,
    available: true,
    isBestSeller: true,
    badge: 'Static ⚡',
    iconName: 'Leaf',
    origin: undefined,
  },
  {
    id: 'gelato-static',
    name: 'Gelato',
    shortDescription:
      'A beautifully balanced hybrid with sweet dessert-like aromas of citrus and berry, delivering euphoric, creative energy with a smooth finish.',
    category: 'flower',
    tier: 'premium',
    pricingTiers: [
      { weight: '3.5g', price: 50 },
      { weight: '7g', price: 80 },
      { weight: '14g', price: 130 },
      { weight: '100g', price: 700 },
    ],
    fromPrice: 50,
    available: true,
    isBestSeller: true,
    badge: 'Static ⚡',
    iconName: 'Leaf',
    origin: undefined,
  },
  {
    id: 'white-dior-semi-dry',
    name: 'White Dior',
    shortDescription:
      'Premium semi-dry import with a creamy, floral terpene profile. Exceptional cure and trim work, a connoisseur-grade experience.',
    category: 'flower',
    tier: 'premium',
    pricingTiers: [
      { weight: '14g', price: 100 },
      { weight: '28g', price: 175 },
      { weight: '100g', price: 560 },
    ],
    fromPrice: 100,
    available: true,
    badge: 'Premium Semi Dry',
    iconName: 'Sparkles',
    origin: undefined,
  },
  {
    id: 'lower-tier-semi-dry',
    name: 'Semi Dry (Lower Tier)',
    shortDescription:
      'Solid everyday semi-dry flower. Great potency-to-price ratio for regular consumers. 100g minimum order.',
    category: 'flower',
    tier: 'value',
    pricingTiers: [{ weight: '100g', price: 350 }],
    fromPrice: 350,
    available: true,
    minOrderNote: '100g minimum order',
    iconName: 'Leaf',
    origin: undefined,
  },
  {
    id: 'commercial',
    name: 'Commercial',
    shortDescription:
      'High-volume commercial grade. Consistent quality in bulk quantities, ideal for resale or wholesale buyers. 100g minimum.',
    category: 'flower',
    tier: 'value',
    pricingTiers: [
      { weight: '100g', price: 250 },
      { weight: 'Box (wholesale)', price: 1800 },
    ],
    fromPrice: 250,
    available: true,
    minOrderNote: '100g minimum order',
    iconName: 'Package',
    origin: undefined,
  },

  // ── EXTRACTS ──────────────────────────────────
  {
    id: 'hash-rosin',
    name: 'Hash Rosin',
    shortDescription:
      'Full-melt solventless hash rosin pressed from premium cold-water hash. Rich, terpene-forward flavour and unmatched clarity of effect.',
    category: 'extracts',
    tier: 'premium',
    pricingTiers: [
      { weight: '1g', price: 70 },
      { weight: '2g', price: 120 },
    ],
    fromPrice: 70,
    available: true,
    isBestSeller: true,
    badge: 'Imported from Cali 🇺🇸',
    iconName: 'Droplets',
    origin: 'Imported From Cali 🇺🇸',
  },
  {
    id: 'crumble',
    name: 'Crumble',
    shortDescription:
      'Dry, crumbly concentrate with a mellow amber hue. Easy to handle, great for topping bowls or dabbing. California-imported quality.',
    category: 'extracts',
    tier: 'standard',
    pricingTiers: [
      { weight: '1g', price: 40 },
      { weight: '3.5g', price: 80 },
      { weight: '7g', price: 140 },
    ],
    fromPrice: 40,
    available: true,
    badge: 'Imported from Cali 🇺🇸',
    iconName: 'FlaskConical',
    origin: 'Imported From Cali 🇺🇸',
  },
  {
    id: 'badder',
    name: 'Badder',
    shortDescription:
      'Smooth, whipped-consistency extract with a cake-batter texture. Excellent terpene preservation for a full-bodied, flavourful dab.',
    category: 'extracts',
    tier: 'standard',
    pricingTiers: [
      { weight: '1g', price: 40 },
      { weight: '3.5g', price: 80 },
      { weight: '7g', price: 140 },
    ],
    fromPrice: 40,
    available: true,
    badge: 'Imported from Cali 🇺🇸',
    iconName: 'FlaskConical',
    origin: 'Imported From Cali 🇺🇸',
  },
  {
    id: 'live-sauce',
    name: 'Live Sauce',
    shortDescription:
      'High-terpene full-spectrum extract made from fresh-frozen plants. Liquid gold. Available in four hand-picked Cali strains.',
    category: 'extracts',
    tier: 'standard',
    pricingTiers: [
      { weight: '1g', price: 40 },
      { weight: '3.5g', price: 80 },
      { weight: '7g', price: 130 },
    ],
    fromPrice: 40,
    available: true,
    badge: 'Imported from Cali 🇺🇸',
    iconName: 'Beaker',
    origin: 'Imported From Cali 🇺🇸',
    strains: ['Chocolate Chip', 'Mac', 'Jelly Donut', 'Motor Breath'],
  },

  // ── EDIBLES ───────────────────────────────────
  {
    id: 'jolly-rancher-gummies',
    name: 'Jolly Rancher Gummies',
    shortDescription:
      'Fan-favourite infused gummies packed with bold fruit flavours. 30 pieces per pack, ask about multi-pack deals for bigger savings.',
    category: 'edibles',
    tier: 'standard',
    pricingTiers: [{ weight: '30-pack', price: 0 }],
    fromPrice: 0,
    available: true,
    badge: 'Deal Available',
    iconName: 'Candy',
    origin: undefined,
    minOrderNote: 'Deals available when buying multiple packs',
  },
];

export const categories = [
  { value: 'all', label: 'All Products' },
  { value: 'flower', label: '🌿 Flower' },
  { value: 'extracts', label: '🍯 Extracts' },
  { value: 'edibles', label: '🍬 Edibles' },
] as const;
