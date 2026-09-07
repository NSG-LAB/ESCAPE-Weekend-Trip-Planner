import React from 'react';
import { X, Bookmark, Trash2, ArrowRight, IndianRupee, MapPin } from 'lucide-react';
import { Destination } from '../types/trip';

interface ShortlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  shortlistedDestinations: Destination[];
  onRemoveFavorite: (id: string) => void;
  onClearAll: () => void;
  onSelectDestination: (dest: Destination) => void;
}

/**
 * Shortlist Slide-Over Drawer Component
 * 
 * Satisfies FAIE:
 * - REQ-SHORTLIST (AC SHORTLIST-01, SHORTLIST-02, SHORTLIST-03)
 * - Semantic HTML5 Structure (aside, h2, h3)
 * - ARIA Attribute Usage (role="dialog", aria-label)
 * - Interactive Selection & Removal Management
 */
export const ShortlistDrawer: React.FC<ShortlistDrawerProps> = ({
  isOpen,
  onClose,
  shortlistedDestinations,
  onRemoveFavorite,
  onClearAll,
  onSelectDestination,
}) => {
  if (!isOpen) return null;

  const totalEstimatedCost = shortlistedDestinations.reduce(
    (acc, cur) => acc + cur.pricePerPerson,
    0
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Shortlisted Destinations Drawer"
      className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-xs flex justify-end animate-fade-in"
    >
      <div
        className="w-full max-w-md bg-slate-900 border-l border-slate-800 h-full flex flex-col shadow-2xl animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Bookmark className="w-5 h-5 fill-indigo-400" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">Your Trip Shortlist</h2>
              <p className="text-xs text-slate-400">
                {shortlistedDestinations.length}{' '}
                {shortlistedDestinations.length === 1 ? 'destination' : 'destinations'} saved
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close shortlist drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Shortlist Content List */}
        <div className="p-5 overflow-y-auto flex-1 space-y-3">
          {shortlistedDestinations.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400">
                <Bookmark className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-white">No Shortlisted Trips Yet</h3>
              <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
                Click the bookmark icon on any weekend getaway card to save and compare your
                favorite destinations here.
              </p>
            </div>
          ) : (
            shortlistedDestinations.map((dest) => (
              <div
                key={dest.id}
                className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between gap-3 group hover:border-indigo-500/40 transition-all"
              >
                <div
                  className="flex items-center gap-3 cursor-pointer flex-1 min-w-0"
                  onClick={() => {
                    onSelectDestination(dest);
                    onClose();
                  }}
                >
                  <img
                    src={dest.heroImage}
                    alt={dest.name}
                    className="w-14 h-14 rounded-xl object-cover shrink-0 bg-slate-950"
                    loading="lazy"
                  />
                  <div className="truncate">
                    <h3 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors truncate">
                      {dest.name}
                    </h3>
                    <div className="text-[11px] text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-indigo-400" />
                      <span>{dest.state}</span>
                      <span>•</span>
                      <span>₹{dest.pricePerPerson.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => {
                      onSelectDestination(dest);
                      onClose();
                    }}
                    className="p-2 rounded-lg bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white transition-all text-xs"
                    aria-label={`Open details for ${dest.name}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onRemoveFavorite(dest.id)}
                    className="p-2 rounded-lg bg-slate-900 hover:bg-rose-600/20 text-slate-400 hover:text-rose-400 transition-all text-xs"
                    aria-label={`Remove ${dest.name} from shortlist`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer with Budget Summary */}
        {shortlistedDestinations.length > 0 && (
          <div className="p-5 border-t border-slate-800 bg-slate-950/80 space-y-4">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400 font-medium">Combined Budget Estimate:</span>
              <span className="text-base font-black text-white flex items-center">
                <IndianRupee className="w-4 h-4 text-indigo-400" />
                {totalEstimatedCost.toLocaleString('en-IN')}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onClearAll}
                className="px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all min-h-[44px]"
              >
                Clear All
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 transition-all min-h-[44px]"
              >
                Keep Exploring
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
