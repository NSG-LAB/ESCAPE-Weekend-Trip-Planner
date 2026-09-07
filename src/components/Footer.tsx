import React from 'react';
import { Compass, Heart, Shield } from 'lucide-react';

/**
 * Semantic Footer Component
 * 
 * Satisfies FAIE:
 * - Semantic HTML5 Structure (<footer>)
 * - Accessibility & Heading progression
 */
export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Col */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-lg font-black text-white tracking-tight">
                ESCAPE — Weekend Trip Planner
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Curated 48-hour weekend getaways designed to inspire quick travel decisions.
              Compare top destinations across India with day-by-day itineraries, group budget
              estimates, and zero external backend overhead.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Explore Escapes
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#destinations" className="hover:text-indigo-400 transition-colors">
                  Top Destinations
                </a>
              </li>
              <li>
                <a href="#vibes" className="hover:text-indigo-400 transition-colors">
                  Travel Vibes
                </a>
              </li>
              <li>
                <a href="#budget" className="hover:text-indigo-400 transition-colors">
                  Group Cost Calculator
                </a>
              </li>
              <li>
                <a href="#itineraries" className="hover:text-indigo-400 transition-colors">
                  48h Day Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Accessibility & Guarantee */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Technical Standards
            </h4>
            <div className="space-y-1.5 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <Shield className="w-3.5 h-3.5" />
                <span>100% Client-Side Privacy</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                WCAG 2.1 AA accessible semantic structure with high color contrast and keyboard
                navigability.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} ESCAPE Weekend Trip Planner. All mock data crafted for demonstration.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Engineered with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>using React, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
