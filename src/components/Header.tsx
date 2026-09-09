'use client';

import { Zap, Send } from 'lucide-react';

/**
 * Site-wide header.
 * Sticky, minimal, and high-contrast: inspired by Linear / Stripe.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ── Logo + Brand ── */}
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center w-9 h-9 rounded-lg bg-emerald-600"
              aria-hidden="true"
            >
              <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>

            <div className="leading-none">
              <span className="block text-[17px] font-bold tracking-tight text-gray-900">
                LoudLabz
              </span>
              <span className="block text-[11px] text-gray-500 font-medium tracking-wide uppercase">
                Premium Cannabis Catalogue
              </span>
            </div>
          </div>

          {/* ── Order on Telegram Button ── */}
          <a
            href="https://t.me/john_supply_uk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order on Telegram via @john_supply_uk"
            className="
              inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2
              rounded-xl bg-emerald-600 hover:bg-emerald-700
              text-white text-xs sm:text-sm font-semibold
              transition-colors duration-150 shadow-sm
              focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1
            "
          >
            <Send className="w-3.5 h-3.5" />
            <span>Order on Telegram</span>
          </a>
        </div>
      </div>
    </header>
  );
}
