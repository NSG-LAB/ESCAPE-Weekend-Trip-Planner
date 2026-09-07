import { useState, useEffect, useCallback } from 'react';
import { Destination } from '../types/trip';

const FAVORITES_STORAGE_KEY = 'escape_shortlisted_destinations_v2';

/**
 * Custom React hook for managing shortlisted/saved trip destinations.
 * Provides instant localStorage persistence and quick bookmark toggling.
 * 
 * Satisfies FAIE:
 * - REQ-SHORTLIST (AC SHORTLIST-01, SHORTLIST-02, SHORTLIST-03)
 * - React Hooks Architecture
 */
export function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(FAVORITES_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favoriteIds));
    } catch (e) {
      console.error('Failed to persist favorites to localStorage', e);
    }
  }, [favoriteIds]);

  const isFavorite = useCallback(
    (id: string) => favoriteIds.includes(id),
    [favoriteIds]
  );

  const toggleFavorite = useCallback((destination: Destination) => {
    setFavoriteIds((prev) => {
      const exists = prev.includes(destination.id);
      if (exists) {
        return prev.filter((item) => item !== destination.id);
      } else {
        return [...prev, destination.id];
      }
    });
  }, []);

  const removeFavorite = useCallback((id: string) => {
    setFavoriteIds((prev) => prev.filter((item) => item !== id));
  }, []);

  const clearAllFavorites = useCallback(() => {
    setFavoriteIds([]);
  }, []);

  return {
    favoriteIds,
    favoritesCount: favoriteIds.length,
    isFavorite,
    toggleFavorite,
    removeFavorite,
    clearAllFavorites,
  };
}
