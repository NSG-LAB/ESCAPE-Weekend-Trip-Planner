/**
 * ESCAPE — Trip Planning API & Service Abstraction Layer
 * Provides centralized data fetching, query caching, and client abstraction.
 */

import { Destination, FilterState } from '../types/trip';
import { DESTINATIONS } from '../data/destinations';

export interface SearchResult {
  destinations: Destination[];
  totalCount: number;
}

class ApiClient {
  private cache: Map<string, unknown> = new Map();

  /**
   * Simulates network request with cache-first strategy
   */
  async get<T>(endpoint: string, fallbackData: T): Promise<T> {
    if (this.cache.has(endpoint)) {
      return this.cache.get(endpoint) as T;
    }

    try {
      // Allow simulated async resolution
      await new Promise((resolve) => setTimeout(resolve, 50));
      this.cache.set(endpoint, fallbackData);
      return fallbackData;
    } catch (error) {
      console.warn(`[ApiClient] Request to ${endpoint} failed, utilizing local fallback.`, error);
      return fallbackData;
    }
  }

  clearCache(): void {
    this.cache.clear();
  }
}

export const apiClient = new ApiClient();

export const tripService = {
  /**
   * Fetch all curated weekend destinations
   */
  async getAllDestinations(): Promise<Destination[]> {
    return apiClient.get<Destination[]>('/api/destinations', DESTINATIONS);
  },

  /**
   * Fetch destination by unique ID
   */
  async getDestinationById(id: string): Promise<Destination | undefined> {
    const all = await this.getAllDestinations();
    return all.find((d) => d.id === id);
  },

  /**
   * Filter and search destinations based on criteria
   */
  async queryDestinations(criteria: FilterState): Promise<SearchResult> {
    const all = await this.getAllDestinations();
    
    let filtered = [...all];

    if (criteria.searchQuery.trim()) {
      const q = criteria.searchQuery.toLowerCase().trim();
      filtered = filtered.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.state.toLowerCase().includes(q) ||
          d.tagline.toLowerCase().includes(q) ||
          d.highlights.some((h) => h.toLowerCase().includes(q))
      );
    }

    if (criteria.selectedVibes && criteria.selectedVibes.length > 0) {
      filtered = filtered.filter((d) => criteria.selectedVibes.includes(d.vibe));
    }

    if (criteria.maxBudget < 25000) {
      filtered = filtered.filter((d) => d.pricePerPerson <= criteria.maxBudget);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (criteria.sortBy) {
        case 'price-asc':
          return a.pricePerPerson - b.pricePerPerson;
        case 'price-desc':
          return b.pricePerPerson - a.pricePerPerson;
        case 'rating':
          return b.rating - a.rating;
        case 'duration':
          return a.durationHours - b.durationHours;
        default:
          return 0;
      }
    });

    return {
      destinations: filtered,
      totalCount: filtered.length,
    };
  },
};
