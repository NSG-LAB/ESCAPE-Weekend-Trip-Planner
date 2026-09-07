/**
 * ESCAPE — Client-Side Hash Router & Navigation Layer
 * Handles synchronized hash routing (#explore, #saved, #calculator)
 * and browser history back/forward navigation.
 */

import React, { useEffect } from 'react';
import { useTripContext } from '../context/TripContext';

export const useRouter = () => {
  const { activeView, setActiveView } = useTripContext();

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'saved' || hash === 'favorites') {
        setActiveView('favorites');
      } else if (hash === 'calculator' || hash === 'budget') {
        setActiveView('calculator');
      } else {
        setActiveView('explore');
      }
    };

    // Initialize from current URL hash
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [setActiveView]);

  const navigateTo = (view: 'explore' | 'favorites' | 'calculator') => {
    setActiveView(view);
    const hash = view === 'explore' ? '' : `#${view}`;
    if (window.location.hash !== hash) {
      window.history.pushState(null, '', hash || window.location.pathname);
    }
  };

  return { activeView, navigateTo };
};

export const RouterView: React.FC<{
  exploreComponent: React.ReactNode;
  favoritesComponent: React.ReactNode;
  calculatorComponent: React.ReactNode;
}> = ({ exploreComponent, favoritesComponent, calculatorComponent }) => {
  const { activeView } = useTripContext();

  switch (activeView) {
    case 'favorites':
      return <>{favoritesComponent}</>;
    case 'calculator':
      return <>{calculatorComponent}</>;
    case 'explore':
    default:
      return <>{exploreComponent}</>;
  }
};
