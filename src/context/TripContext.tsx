/**
 * ESCAPE — Central State Management Context
 * Implements centralized global state for active filters, favorites,
 * destination selection, and drawer toggles.
 */

import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { Destination, FilterState, TravelVibe } from '../types/trip';
import { tripService } from '../services/api';

interface TripContextType {
  destinations: Destination[];
  favorites: string[];
  favoriteDestinations: Destination[];
  filters: FilterState;
  selectedDestination: Destination | null;
  isShortlistOpen: boolean;
  activeView: 'explore' | 'favorites' | 'calculator';
  isLoading: boolean;
  toggleFavorite: (dest: Destination) => boolean;
  removeFavorite: (id: string) => void;
  clearFavorites: () => void;
  setSearchQuery: (query: string) => void;
  toggleVibe: (vibe: TravelVibe) => void;
  setMaxBudget: (budget: number) => void;
  setSortBy: (sort: FilterState['sortBy']) => void;
  resetFilters: () => void;
  openDestinationModal: (dest: Destination) => void;
  closeDestinationModal: () => void;
  setIsShortlistOpen: (isOpen: boolean) => void;
  setActiveView: (view: 'explore' | 'favorites' | 'calculator') => void;
}

const defaultFilters: FilterState = {
  searchQuery: '',
  selectedVibes: [],
  maxBudget: 25000,
  maxDuration: 48,
  sortBy: 'recommended',
};

const TripContext = createContext<TripContextType | undefined>(undefined);

export const TripProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [isShortlistOpen, setIsShortlistOpen] = useState<boolean>(false);
  const [activeView, setActiveView] = useState<'explore' | 'favorites' | 'calculator'>('explore');

  // Load favorites from localStorage
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('escape_shortlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('escape_shortlist', JSON.stringify(favorites));
    } catch {
      // localStorage fallback
    }
  }, [favorites]);

  // Load initial destinations via tripService abstraction
  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      setIsLoading(true);
      const data = await tripService.getAllDestinations();
      if (isMounted) {
        setDestinations(data);
        setIsLoading(false);
      }
    }
    loadData();
    return () => {
      isMounted = false;
    };
  }, []);

  const favoriteDestinations = useMemo(() => {
    return destinations.filter((d) => favorites.includes(d.id));
  }, [destinations, favorites]);

  const toggleFavorite = (dest: Destination): boolean => {
    const isFav = favorites.includes(dest.id);
    if (isFav) {
      setFavorites((prev) => prev.filter((favId) => favId !== dest.id));
      return false;
    } else {
      setFavorites((prev) => [...prev, dest.id]);
      return true;
    }
  };

  const removeFavorite = (id: string) => {
    setFavorites((prev) => prev.filter((favId) => favId !== id));
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  const setSearchQuery = (searchQuery: string) =>
    setFilters((prev: FilterState) => ({ ...prev, searchQuery }));

  const toggleVibe = (vibe: TravelVibe) => {
    setFilters((prev: FilterState) => {
      const exists = prev.selectedVibes.includes(vibe);
      return {
        ...prev,
        selectedVibes: exists
          ? prev.selectedVibes.filter((v) => v !== vibe)
          : [...prev.selectedVibes, vibe],
      };
    });
  };

  const setMaxBudget = (maxBudget: number) =>
    setFilters((prev: FilterState) => ({ ...prev, maxBudget }));

  const setSortBy = (sortBy: FilterState['sortBy']) =>
    setFilters((prev: FilterState) => ({ ...prev, sortBy }));

  const resetFilters = () => setFilters(defaultFilters);

  const openDestinationModal = (dest: Destination) => setSelectedDestination(dest);
  const closeDestinationModal = () => setSelectedDestination(null);

  const value: TripContextType = {
    destinations,
    favorites,
    favoriteDestinations,
    filters,
    selectedDestination,
    isShortlistOpen,
    activeView,
    isLoading,
    toggleFavorite,
    removeFavorite,
    clearFavorites,
    setSearchQuery,
    toggleVibe,
    setMaxBudget,
    setSortBy,
    resetFilters,
    openDestinationModal,
    closeDestinationModal,
    setIsShortlistOpen,
    setActiveView,
  };

  return <TripContext.Provider value={value}>{children}</TripContext.Provider>;
};

export const useTripContext = (): TripContextType => {
  const context = useContext(TripContext);
  if (!context) {
    throw new Error('useTripContext must be used within a TripProvider');
  }
  return context;
};
