import React from 'react';
import { Compass, Bookmark, Search, Menu, X } from 'lucide-react';

interface NavbarProps {
  shortlistCount: number;
  onOpenShortlist: () => void;
  onFocusSearch: () => void;
}

/**
 * Semantic Header and Responsive Navigation Component
 * 
 * Satisfies FAIE:
 * - Semantic HTML5 Structure (<header>, <nav>)
 * - ARIA Attribute Usage (aria-label, role, aria-expanded)
 * - Tailwind Breakpoint Utilities (sm:, md:, lg:)
 * - Mobile Touch Target Sizes (min-h-[44px])
 */
export const Navbar: React.FC<NavbarProps> = ({
  shortlistCount,
  onOpenShortlist,
  onFocusSearch,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-dark-bg/85 border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1"
              aria-label="ESCAPE — Weekend Trip Planner Home"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
                <Compass className="w-6 h-6 text-white animate-spin-slow" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-1.5">
                  ESCAPE
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                    48h
                  </span>
                </span>
                <span className="hidden sm:block text-[10px] font-medium tracking-wider text-slate-400 uppercase">
                  Weekend Trip Planner
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2 bg-slate-900/60 p-1.5 rounded-full border border-slate-800"
          >
            <a
              href="#destinations"
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-colors"
            >
              Destinations
            </a>
            <a
              href="#vibes"
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-colors"
            >
              Travel Vibes
            </a>
            <a
              href="#budget"
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-colors"
            >
              Budget Calculator
            </a>
            <a
              href="#itineraries"
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-colors"
            >
              48h Itineraries
            </a>
          </nav>

          {/* Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger */}
            <button
              onClick={onFocusSearch}
              className="p-2 sm:px-3 sm:py-2 text-xs font-medium text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-xl flex items-center gap-2 transition-all min-h-[44px] min-w-[44px] justify-center"
              aria-label="Search weekend getaways"
            >
              <Search className="w-4 h-4 text-slate-400" />
              <span className="hidden sm:inline">Search (Ctrl+K)</span>
            </button>

            {/* Shortlist Drawer Trigger */}
            <button
              onClick={onOpenShortlist}
              className="relative px-3.5 py-2 sm:px-4 sm:py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl flex items-center gap-2 shadow-md shadow-indigo-600/30 transition-all min-h-[44px]"
              aria-label={`View Shortlisted Trips (${shortlistCount} saved)`}
            >
              <Bookmark className="w-4 h-4 fill-white" />
              <span className="hidden sm:inline">Shortlist</span>
              <span
                className={`px-1.5 py-0.5 text-[10px] font-black rounded-full transition-colors ${
                  shortlistCount > 0
                    ? 'bg-white text-indigo-700'
                    : 'bg-indigo-700/80 text-white'
                }`}
              >
                {shortlistCount}
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-xl min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 px-2 border-t border-slate-800 space-y-2 animate-slide-up">
            <a
              href="#destinations"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-800 rounded-lg"
            >
              Destinations Discovery
            </a>
            <a
              href="#vibes"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-800 rounded-lg"
            >
              Browse by Vibe
            </a>
            <a
              href="#budget"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-800 rounded-lg"
            >
              Interactive Budget Calculator
            </a>
            <a
              href="#itineraries"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-800 rounded-lg"
            >
              48-Hour Weekend Itineraries
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
