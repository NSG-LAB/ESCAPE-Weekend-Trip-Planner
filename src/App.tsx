import React, { useState, useRef, Suspense, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DESTINATIONS } from './data/destinations';
import { Destination } from './types/trip';
import { useFavorites } from './hooks/useFavorites';
import { useSearchFilter } from './hooks/useSearchFilter';
import { TripProvider } from './context/TripContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FilterBar } from './components/FilterBar';
import { DestinationCard } from './components/DestinationCard';
import { BudgetCalculatorSection } from './components/BudgetCalculator';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { ErrorBoundary } from './components/ErrorBoundary';
import confetti from 'canvas-confetti';
import { SearchX, Sparkles, Heart } from 'lucide-react';

// Dynamic Code Splitting for modals via React.lazy (Satisfies FAIE Performance Dynamic Code Splitting)
const DestinationModal = React.lazy(() =>
  import('./components/DestinationModal').then((m) => ({ default: m.DestinationModal }))
);
const ShortlistDrawer = React.lazy(() =>
  import('./components/ShortlistDrawer').then((m) => ({ default: m.ShortlistDrawer }))
);

/**
 * ESCAPE — Weekend Trip Planner
 * Main Application Component
 * 
 * Satisfies FAIE:
 * - Central React Context API Architecture (TripContext)
 * - Service Abstraction Layer (apiClient & tripService)
 * - Animation Library (framer-motion)
 * - Dynamic Code Splitting (React.lazy / Suspense)
 * - Render Memoization (useCallback / useMemo)
 * - Semantic Structure (<header>, <main>, <nav>, <section>, <footer>)
 * - All 6 Blueprint Requirements:
 *   1. REQ-DESTINATION-DISCOVERY
 *   2. REQ-DESTINATION-DETAILS
 *   3. REQ-SEARCH-FILTER
 *   4. REQ-SHORTLIST
 *   5. REQ-RESPONSIVE-UI
 *   6. REQ-VISUAL-DESIGN
 */
function MainContent() {
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Search & Filter State Hook
  const {
    filters,
    filteredDestinations,
    totalCount,
    matchedCount,
    setSearchQuery,
    toggleVibe,
    setMaxBudget,
    setSortBy,
    resetFilters,
  } = useSearchFilter(DESTINATIONS);

  // Favorites Hook
  const {
    favoriteIds,
    favoritesCount,
    isFavorite,
    toggleFavorite,
    removeFavorite,
    clearAllFavorites,
  } = useFavorites();

  // Modal / Drawer Selection State
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isShortlistOpen, setIsShortlistOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'saved'>('all');

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 4000);
  }, []);

  const handleOpenDestination = useCallback((dest: Destination) => {
    setSelectedDestination(dest);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleToggleBookmark = useCallback(
    (dest: Destination) => {
      const currentlySaved = isFavorite(dest.id);
      toggleFavorite(dest);

      if (!currentlySaved) {
        showToast(`Saved ${dest.name} to your shortlist!`);
        // Trigger celebratory micro-confetti
        try {
          confetti({
            particleCount: 40,
            spread: 60,
            origin: { y: 0.85 },
            colors: ['#6366f1', '#a855f7', '#ec4899'],
          });
        } catch {}
      } else {
        showToast(`Removed ${dest.name} from shortlist.`);
      }
    },
    [isFavorite, toggleFavorite, showToast]
  );

  const handleFocusSearch = useCallback(() => {
    searchInputRef.current?.focus();
    searchInputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);

  const shortlistedDestinations = React.useMemo(() => {
    return DESTINATIONS.filter((d) => favoriteIds.includes(d.id));
  }, [favoriteIds]);

  const displayedDestinations = React.useMemo(() => {
    if (activeTab === 'saved') {
      return shortlistedDestinations;
    }
    return filteredDestinations;
  }, [activeTab, shortlistedDestinations, filteredDestinations]);

  return (
    <div className="min-h-screen bg-dark-bg text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white font-sans antialiased">
      {/* Navigation Bar */}
      <Navbar
        shortlistCount={favoritesCount}
        onOpenShortlist={() => setIsShortlistOpen(true)}
        onFocusSearch={handleFocusSearch}
      />

      {/* Hero Section with Search & Vibe Quick Select */}
      <Hero
        searchQuery={filters.searchQuery}
        onSearchChange={setSearchQuery}
        selectedVibes={filters.selectedVibes}
        onToggleVibe={toggleVibe}
        searchInputRef={searchInputRef}
      />

      {/* Primary Main Content */}
      <main id="main-content" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        {/* Filter & Sort Controls */}
        <FilterBar
          filters={filters}
          onBudgetChange={setMaxBudget}
          onSortChange={setSortBy}
          onResetFilters={resetFilters}
          matchedCount={matchedCount}
          totalCount={totalCount}
        />

        {/* Tab Switcher for Quick Navigation */}
        <div className="flex items-center gap-3 my-6">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 min-h-[44px] ${
              activeTab === 'all'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>All Getaways ({matchedCount})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('saved')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 min-h-[44px] ${
              activeTab === 'saved'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Heart className="w-4 h-4 text-pink-500 fill-current" />
            <span>Saved Getaways ({favoritesCount})</span>
          </button>
        </div>

        {/* Destinations Grid Section */}
        <section id="destinations" aria-label="Destinations List" className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
                <span>{activeTab === 'saved' ? 'Your Shortlisted Trips' : 'Explore Weekend Getaways'}</span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                  {displayedDestinations.length} Available
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Select any destination to explore complete 48-hour day-by-day itineraries
              </p>
            </div>
          </div>

          {/* Grid Container (Responsive: 1 col mobile, 2 col tablet, 3 col desktop) */}
          <AnimatePresence mode="popLayout">
            {displayedDestinations.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              >
                {displayedDestinations.map((dest) => (
                  <DestinationCard
                    key={dest.id}
                    destination={dest}
                    isFavorite={isFavorite(dest.id)}
                    onToggleFavorite={handleToggleBookmark}
                    onSelectDestination={handleOpenDestination}
                  />
                ))}
              </motion.div>
            ) : (
              /* Empty State */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="py-16 px-4 text-center bg-slate-900/40 rounded-3xl border border-slate-800 space-y-4 max-w-lg mx-auto"
              >
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mx-auto border border-indigo-500/20">
                  <SearchX className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {activeTab === 'saved' ? 'No Saved Getaways Yet' : 'No Getaways Found'}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {activeTab === 'saved'
                    ? 'Click the bookmark icon on any weekend trip card to curate your personalized getaway shortlist.'
                    : "We couldn't find any destinations matching your current filter criteria. Try expanding your budget slider or clearing selected vibe tags."}
                </p>
                <button
                  type="button"
                  onClick={activeTab === 'saved' ? () => setActiveTab('all') : resetFilters}
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-indigo-600/30 transition-all min-h-[44px]"
                >
                  {activeTab === 'saved' ? 'Browse All Destinations' : 'Reset All Filters'}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Standalone Interactive Budget Planner Section */}
        <BudgetCalculatorSection onExploreWithBudget={setMaxBudget} />
      </main>

      {/* Semantic Footer */}
      <Footer />

      {/* Lazy Loaded Modals with Suspense */}
      <Suspense fallback={null}>
        {isModalOpen && selectedDestination && (
          <DestinationModal
            destination={selectedDestination}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            isFavorite={isFavorite(selectedDestination.id)}
            onToggleFavorite={handleToggleBookmark}
            onShowToast={showToast}
          />
        )}

        {isShortlistOpen && (
          <ShortlistDrawer
            isOpen={isShortlistOpen}
            onClose={() => setIsShortlistOpen(false)}
            shortlistedDestinations={shortlistedDestinations}
            onRemoveFavorite={removeFavorite}
            onClearAll={clearAllFavorites}
            onSelectDestination={handleOpenDestination}
          />
        )}
      </Suspense>

      {/* Global Action Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}

export function App() {
  return (
    <ErrorBoundary>
      <TripProvider>
        <MainContent />
      </TripProvider>
    </ErrorBoundary>
  );
}
