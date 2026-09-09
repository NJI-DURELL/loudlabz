import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'LoudLabz | Premium Cannabis Catalogue',
  description:
    "Browse LoudLabz's curated selection of premium flower, Cali-imported extracts, and infused edibles. Quality you can taste.",
  keywords: ['LoudLabz', 'premium cannabis', 'flower', 'extracts', 'edibles', 'catalogue'],
  openGraph: {
    title: 'LoudLabz | Premium Cannabis Catalogue',
    description:
      'London\'s finest cannabis selection: premium statics, Cali imports, solventless extracts, and edibles.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-[#FAFAFA] text-gray-900">
        {/* Skip to main content (keyboard accessibility) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-emerald-600 focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
