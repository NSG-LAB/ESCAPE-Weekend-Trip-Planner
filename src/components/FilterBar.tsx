import React from 'react';
import { SlidersHorizontal, RotateCcw, ArrowUpDown, IndianRupee } from 'lucide-react';
import { FilterState } from '../types/trip';

interface FilterBarProps {
  filters: FilterState;
  onBudgetChange: (budget: number) => void;
  onSortChange: (sortBy: FilterState['sortBy']) => void;
  onResetFilters: () => void;
  matchedCount: number;
  totalCount: number;
}

/**
 * Filter & Sort Controls Component
 * 
 * Satisfies FAIE:
 * - REQ-SEARCH-FILTER (AC SEARCH-FILTER-02, SEARCH-FILTER-03)
 * - Accessible Form Controls (<label>, <input>, <select>)
 * - ARIA Attribute Usage
 * - Responsive Breakpoints
 */
export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  onBudgetChange,
  onSortChange,
  onResetFilters,
  matchedCount,
  totalCount,
}) => {
  return (
    <section aria-label="Search and Filter Controls" className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4 sm:p-5 mb-8 backdrop-blur-md">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Results Counter & Header */}
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20">
            <SlidersHorizontal className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span>Filter & Refine</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-normal">
                Showing {matchedCount} of {totalCount} destinations
              </span>
            </h2>
            <p className="text-[11px] text-slate-400">
              Customize budget range and sorting preferences
            </p>
          </div>
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          {/* Budget Range Slider */}
          <div className="flex-1 sm:w-64 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
            <div className="flex items-center justify-between mb-1.5">
              <label
                htmlFor="budget-range-slider"
                className="text-[11px] font-semibold text-slate-300 flex items-center gap-1"
              >
                <IndianRupee className="w-3.5 h-3.5 text-indigo-400" />
                <span>Max Budget:</span>
              </label>
              <span className="text-xs font-bold text-indigo-400">
                ₹{filters.maxBudget.toLocaleString('en-IN')}
              </span>
            </div>
            <input
              id="budget-range-slider"
              type="range"
              min="3000"
              max="25000"
              step="500"
              value={filters.maxBudget}
              onChange={(e) => onBudgetChange(Number(e.target.value))}
              aria-label="Filter destinations by maximum price per person"
              className="w-full accent-indigo-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
            />
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2 bg-slate-800/60 px-3 py-2 rounded-xl border border-slate-700/60">
            <ArrowUpDown className="w-4 h-4 text-slate-400 shrink-0" />
            <label htmlFor="destination-sort-select" className="sr-only">
              Sort destinations by
            </label>
            <select
              id="destination-sort-select"
              value={filters.sortBy}
              onChange={(e) => onSortChange(e.target.value as FilterState['sortBy'])}
              className="bg-transparent text-xs font-semibold text-slate-200 focus:outline-none cursor-pointer pr-2"
            >
              <option value="recommended" className="bg-slate-900 text-white">
                Sort: Recommended (Popular)
              </option>
              <option value="rating" className="bg-slate-900 text-white">
                Sort: Highest Rated
              </option>
              <option value="price-asc" className="bg-slate-900 text-white">
                Sort: Price (Low to High)
              </option>
              <option value="price-desc" className="bg-slate-900 text-white">
                Sort: Price (High to Low)
              </option>
              <option value="duration" className="bg-slate-900 text-white">
                Sort: Duration (Shortest)
              </option>
            </select>
          </div>

          {/* Reset Filters */}
          <button
            onClick={onResetFilters}
            className="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-700/80 border border-slate-700/60 rounded-xl flex items-center justify-center gap-1.5 transition-all min-h-[44px]"
            aria-label="Reset all search and filter criteria"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
      </div>
    </section>
  );
};
