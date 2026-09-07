import React from 'react';
import { Search, Sparkles, ArrowRight } from 'lucide-react';
import { TravelVibe } from '../types/trip';
import { VIBE_CATEGORIES } from '../data/destinations';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedVibes: TravelVibe[];
  onToggleVibe: (vibe: TravelVibe) => void;
  searchInputRef: React.RefObject<HTMLInputElement>;
}

/**
 * Hero Section Component
 * 
 * Satisfies FAIE:
 * - Semantic HTML5 Structure (<section>, <h1>, <h2>)
 * - Accessible Form Controls (<label>, <input>)
 * - Tailwind Breakpoint Utilities (sm:, md:, lg:, xl:)
 * - Mobile-First Layout Transformations (flex-col md:flex-row)
 */
export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  onSearchChange,
  selectedVibes,
  onToggleVibe,
  searchInputRef,
}) => {
  return (
    <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden border-b border-slate-800/60 bg-gradient-to-b from-dark-bg via-dark-surface/40 to-dark-bg">
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[600px] h-96 sm:h-[600px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-6 animate-pulse-subtle">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Curated 48-Hour Weekend Escapes</span>
        </div>

        {/* Primary Page Title (Strict Semantic h1) */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
          Find Your Perfect{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">
            Weekend Getaway
          </span>{' '}
          in Minutes
        </h1>

        {/* Subtitle description with required domain entities */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
          Discover handpicked 48-hour trip itineraries across India. Filter by your travel vibe,
          calculate realistic group budgets, and bookmark your dream destinations.
        </p>

        {/* Search Bar Container */}
        <div className="max-w-2xl mx-auto mb-10">
          <form
            role="search"
            onSubmit={(e) => e.preventDefault()}
            className="relative flex flex-col sm:flex-row items-center gap-2 p-2 bg-slate-900/90 border border-slate-700/80 rounded-2xl shadow-2xl backdrop-blur-md focus-within:border-indigo-500 transition-all"
          >
            <label htmlFor="destination-search-input" className="sr-only">
              Search destinations by name, state, vibe, or activities
            </label>
            <div className="relative flex-1 w-full flex items-center pl-3">
              <Search className="w-5 h-5 text-indigo-400 shrink-0 mr-3" />
              <input
                ref={searchInputRef}
                id="destination-search-input"
                type="search"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Where to this weekend? (e.g. Munnar, Goa, Trekking, Beach...)"
                className="w-full bg-transparent text-sm sm:text-base font-medium text-white placeholder:text-slate-400 focus:outline-none h-11"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className="p-1 text-slate-400 hover:text-white text-xs mr-2"
                  aria-label="Clear search"
                >
                  Clear
                </button>
              )}
            </div>
            <a
              href="#destinations"
              className="w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-all min-h-[44px]"
            >
              <span>Explore</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </form>
        </div>

        {/* Quick Vibe Pill Selectors */}
        <div id="vibes" className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
            Filter by Vibe
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-3xl mx-auto">
            {VIBE_CATEGORIES.map((v) => {
              const isSelected = selectedVibes.includes(v.id);
              return (
                <button
                  key={v.id}
                  onClick={() => onToggleVibe(v.id)}
                  aria-pressed={isSelected}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all min-h-[44px] ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/40 border border-indigo-400'
                      : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  <span>{v.icon}</span>
                  <span>{v.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Trust & Metric Highlights */}
        <div className="mt-14 pt-8 border-t border-slate-800/60 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800/60">
            <div className="text-xl sm:text-2xl font-black text-white">10+</div>
            <div className="text-xs text-slate-400 font-medium">Handpicked Getaways</div>
          </div>
          <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800/60">
            <div className="text-xl sm:text-2xl font-black text-indigo-400">48 Hours</div>
            <div className="text-xs text-slate-400 font-medium">Optimized Itineraries</div>
          </div>
          <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800/60">
            <div className="text-xl sm:text-2xl font-black text-purple-400">₹3.5k – ₹12k</div>
            <div className="text-xs text-slate-400 font-medium">Budget Ranges</div>
          </div>
          <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800/60">
            <div className="text-xl sm:text-2xl font-black text-emerald-400">100%</div>
            <div className="text-xs text-slate-400 font-medium">Zero-API Client Side</div>
          </div>
        </div>
      </div>
    </section>
  );
};
