'use client';

/**
 * Loading skeleton cards: shown while the product grid data is loading.
 * Uses a subtle pulse animation to convey progress.
 */
export default function SkeletonCard() {
  return (
    <div
      aria-hidden="true"
      className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm animate-pulse"
    >
      {/* Icon placeholder */}
      <div className="w-11 h-11 rounded-xl bg-gray-100 mb-4" />

      {/* Badge placeholder */}
      <div className="w-24 h-5 rounded-full bg-gray-100 mb-3" />

      {/* Title */}
      <div className="w-3/4 h-4 rounded bg-gray-100 mb-2" />

      {/* Description lines */}
      <div className="space-y-1.5 mb-4">
        <div className="w-full h-3 rounded bg-gray-100" />
        <div className="w-5/6 h-3 rounded bg-gray-100" />
      </div>

      {/* Pricing tiers */}
      <div className="flex gap-2 mb-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-14 h-7 rounded-lg bg-gray-100" />
        ))}
      </div>

      {/* Button */}
      <div className="w-full h-9 rounded-xl bg-gray-100" />
    </div>
  );
}
