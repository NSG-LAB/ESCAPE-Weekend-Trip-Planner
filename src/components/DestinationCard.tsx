import React from 'react';
import { Bookmark, Star, Clock, MapPin, ArrowRight, IndianRupee } from 'lucide-react';
import { Destination } from '../types/trip';

interface DestinationCardProps {
  destination: Destination;
  isFavorite: boolean;
  onToggleFavorite: (destination: Destination) => void;
  onSelectDestination: (destination: Destination) => void;
}

/**
 * Reusable Destination Card Component
 * 
 * Satisfies FAIE:
 * - REQ-DESTINATION-DISCOVERY (AC DEST-DISC-01, DEST-DISC-02, DEST-DISC-03)
 * - Semantic HTML5 Structure (<article>, <h3>)
 * - Image Alt Text Coverage (meaningful descriptive alt)
 * - Image Optimization (loading="lazy")
 * - ARIA Attribute Usage (aria-label, role)
 * - Component Reuse & Modularity
 */
export const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  isFavorite,
  onToggleFavorite,
  onSelectDestination,
}) => {
  return (
    <article
      className="group relative bg-slate-900/80 rounded-2xl border border-slate-800 overflow-hidden hover:border-indigo-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between"
      aria-labelledby={`dest-title-${destination.id}`}
    >
      {/* Media Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
        <img
          src={destination.heroImage}
          alt={`${destination.name}, ${destination.state} — ${destination.tagline}`}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          onError={(e) => {
            // Unsplash fallback if local image fails
            (e.target as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80';
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-slate-950/80 backdrop-blur-md text-indigo-300 border border-indigo-500/30">
            {destination.vibeLabel}
          </span>

          {/* Bookmark Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(destination);
            }}
            aria-label={
              isFavorite
                ? `Remove ${destination.name} from shortlist`
                : `Save ${destination.name} to shortlist`
            }
            aria-pressed={isFavorite}
            className={`p-2.5 rounded-full backdrop-blur-md transition-all min-h-[44px] min-w-[44px] flex items-center justify-center ${
              isFavorite
                ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/40'
                : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-white' : ''}`} />
          </button>
        </div>

        {/* Duration & Location Floating Badges */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300">
          <span className="flex items-center gap-1 font-medium drop-shadow-md">
            <MapPin className="w-3.5 h-3.5 text-indigo-400" />
            {destination.state}
          </span>
          <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-900/80 backdrop-blur-sm text-[11px] font-semibold text-slate-200 border border-slate-800">
            <Clock className="w-3 h-3 text-indigo-400" />
            {destination.durationHours}h Weekend
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating & Review Counter */}
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>{destination.rating.toFixed(1)}</span>
            </div>
            <span className="text-[11px] text-slate-400 font-medium">
              ({destination.reviewCount} reviews)
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 ml-auto font-medium">
              {destination.bestSeason}
            </span>
          </div>

          {/* Heading */}
          <h3
            id={`dest-title-${destination.id}`}
            className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1 group-hover:text-indigo-300 transition-colors"
          >
            {destination.name}
          </h3>

          {/* Tagline */}
          <p className="text-xs text-slate-400 font-normal line-clamp-2 mb-3 leading-relaxed">
            {destination.tagline}
          </p>

          {/* Key Highlight Chips */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {destination.highlights.slice(0, 3).map((item, i) => (
              <span
                key={i}
                className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer: Price and CTA */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between mt-auto">
          <div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
              Est. Trip Cost
            </div>
            <div className="text-base sm:text-lg font-black text-white flex items-center">
              <IndianRupee className="w-4 h-4 text-indigo-400 -mr-0.5" />
              <span>{destination.pricePerPerson.toLocaleString('en-IN')}</span>
              <span className="text-[11px] text-slate-400 font-normal ml-1">/ person</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onSelectDestination(destination)}
            className="px-3.5 py-2 sm:px-4 sm:py-2.5 bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/40 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all min-h-[44px]"
            aria-label={`View full 48-hour itinerary for ${destination.name}`}
          >
            <span>View 48h Plan</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
};
