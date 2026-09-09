'use client';

import { Search, X } from 'lucide-react';
import { useCallback } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

/**
 * Reusable search bar component with clear button.
 * Fully keyboard-accessible with proper ARIA attributes.
 */
export default function SearchBar({ value, onChange }: SearchBarProps) {
  const handleClear = useCallback(() => {
    onChange('');
  }, [onChange]);

  return (
    <div className="relative w-full max-w-xl" role="search">
      {/* Search icon */}
      <Search
        className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
        aria-hidden="true"
      />

      <input
        id="product-search"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search products…"
        aria-label="Search products"
        className="
          w-full pl-10 pr-10 py-2.5
          bg-white border border-gray-200 rounded-xl
          text-sm text-gray-900 placeholder-gray-400
          shadow-sm
          transition-all duration-150
          focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
        "
      />

      {/* Clear button: only shown when there is a value */}
      {value && (
        <button
          onClick={handleClear}
          aria-label="Clear search"
          className="
            absolute right-3 top-1/2 -translate-y-1/2
            text-gray-400 hover:text-gray-600
            transition-colors duration-100
            rounded p-0.5
            focus:outline-none focus:ring-2 focus:ring-emerald-500
          "
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
