import { useState, useMemo, useCallback } from 'react';
import { Destination, FilterState, TravelVibe } from '../types/trip';

/**
 * Custom React hook for dynamic real-time destination search and multi-parameter filtering.
 * Uses useMemo for high performance render memoization.
 * 
 * Satisfies FAIE:
 * - REQ-SEARCH-FILTER (AC SEARCH-FILTER-01, SEARCH-FILTER-02, SEARCH-FILTER-03)
 * - Render Memoization
 */
export function useSearchFilter(destinations: Destination[]) {
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    selectedVibes: [],
    maxBudget: 25000,
    maxDuration: 72,
    sortBy: 'recommended',
  });

  const setSearchQuery = useCallback((query: string) => {
    setFilters((prev) => ({ ...prev, searchQuery: query }));
  }, []);

  const toggleVibe = useCallback((vibe: TravelVibe) => {
    setFilters((prev) => {
      const exists = prev.selectedVibes.includes(vibe);
      const updated = exists
        ? prev.selectedVibes.filter((v) => v !== vibe)
        : [...prev.selectedVibes, vibe];
      return { ...prev, selectedVibes: updated };
    });
  }, []);

  const setMaxBudget = useCallback((budget: number) => {
    setFilters((prev) => ({ ...prev, maxBudget: budget }));
  }, []);

  const setSortBy = useCallback((sortBy: FilterState['sortBy']) => {
    setFilters((prev) => ({ ...prev, sortBy }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters({
      searchQuery: '',
      selectedVibes: [],
      maxBudget: 25000,
      maxDuration: 72,
      sortBy: 'recommended',
    });
  }, []);

  const filteredDestinations = useMemo(() => {
    const q = filters.searchQuery.trim().toLowerCase();

    return destinations
      .filter((dest) => {
        // Text match
        if (q) {
          const matchName = dest.name.toLowerCase().includes(q);
          const matchState = dest.state.toLowerCase().includes(q);
          const matchTagline = dest.tagline.toLowerCase().includes(q);
          const matchTags = dest.tags.some((tag) => tag.toLowerCase().includes(q));
          const matchHighlights = dest.highlights.some((h) => h.toLowerCase().includes(q));
          if (!matchName && !matchState && !matchTagline && !matchTags && !matchHighlights) {
            return false;
          }
        }

        // Vibe match (if any selected)
        if (filters.selectedVibes.length > 0) {
          if (!filters.selectedVibes.includes(dest.vibe)) {
            return false;
          }
        }

        // Budget match
        if (dest.pricePerPerson > filters.maxBudget) {
          return false;
        }

        // Duration match
        if (dest.durationHours > filters.maxDuration) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        switch (filters.sortBy) {
          case 'rating':
            return b.rating - a.rating;
          case 'price-asc':
            return a.pricePerPerson - b.pricePerPerson;
          case 'price-desc':
            return b.pricePerPerson - a.pricePerPerson;
          case 'duration':
            return a.durationHours - b.durationHours;
          case 'recommended':
          default:
            return b.reviewCount - a.reviewCount;
        }
      });
  }, [destinations, filters]);

  return {
    filters,
    filteredDestinations,
    totalCount: destinations.length,
    matchedCount: filteredDestinations.length,
    setSearchQuery,
    toggleVibe,
    setMaxBudget,
    setSortBy,
    resetFilters,
  };
}
