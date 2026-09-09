'use client';

import { Category } from '@/types';
import { categories } from '@/data/products';

interface CategoryFilterProps {
  selected: Category;
  onChange: (category: Category) => void;
  counts: Record<string, number>;
}

/**
 * Horizontal pill-style category filter.
 * Each chip shows the category label and product count.
 */
export default function CategoryFilter({
  selected,
  onChange,
  counts,
}: CategoryFilterProps) {
  return (
    <nav aria-label="Filter by category">
      <ul className="flex flex-wrap gap-2" role="list">
        {categories.map(({ value, label }) => {
          const isActive = selected === value;
          const count = counts[value] ?? 0;

          return (
            <li key={value}>
              <button
                onClick={() => onChange(value as Category)}
                aria-pressed={isActive}
                aria-label={`${label}: ${count} product${count !== 1 ? 's' : ''}`}
                className={`
                  inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                  text-sm font-medium border
                  transition-all duration-150
                  focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1
                  ${
                    isActive
                      ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm'
                      : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900 hover:bg-gray-50'
                  }
                `}
              >
                <span>{label}</span>
                <span
                  className={`
                    text-xs px-1.5 py-0.5 rounded-full font-semibold
                    ${isActive ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-500'}
                  `}
                >
                  {count}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
