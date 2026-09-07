import React, { useState } from 'react';
import {
  X,
  MapPin,
  Star,
  Bookmark,
  Calendar,
  IndianRupee,
  Users,
  CheckCircle2,
  Luggage,
  Sparkles,
  Share2,
  Coffee,
  Sun,
  Moon,
} from 'lucide-react';
import { Destination } from '../types/trip';
import { useBudgetCalculator } from '../hooks/useBudgetCalculator';

interface DestinationModalProps {
  destination: Destination | null;
  isOpen: boolean;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (destination: Destination) => void;
  onShowToast: (message: string) => void;
}

/**
 * Destination Details Modal Component
 * 
 * Satisfies FAIE:
 * - REQ-DESTINATION-DETAILS (AC DEST-DETAIL-01, DEST-DETAIL-02, DEST-DETAIL-03)
 * - Semantic Structure (dialog, article, h2, h3, h4)
 * - ARIA Attribute Usage (role="dialog", aria-modal="true")
 * - Dynamic Interactive Group Budget Calculator
 */
export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  isOpen,
  onClose,
  isFavorite,
  onToggleFavorite,
  onShowToast,
}) => {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'budget' | 'packing' | 'reviews'>('itinerary');
  const [selectedDay, setSelectedDay] = useState<number>(1);

  const {
    groupSize,
    travelTier,
    calculation,
    updateGroupSize,
    updateTravelTier,
  } = useBudgetCalculator(destination?.pricePerPerson || 4500);

  if (!isOpen || !destination) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    onShowToast(`Link to ${destination.name} copied to clipboard!`);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-dest-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fade-in"
    >
      <div
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Hero Image */}
        <div className="relative h-60 sm:h-72 bg-slate-950 overflow-hidden shrink-0">
          <img
            src={destination.heroImage}
            alt={`${destination.name} scenic landscape`}
            className="w-full h-full object-cover object-center"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

          {/* Close & Floating Action Buttons */}
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white backdrop-blur-md transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Share this destination itinerary"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => onToggleFavorite(destination)}
              className={`p-2.5 rounded-full backdrop-blur-md transition-all min-h-[44px] min-w-[44px] flex items-center justify-center ${
                isFavorite
                  ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/40'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white'
              }`}
              aria-label={isFavorite ? 'Remove from shortlist' : 'Add to shortlist'}
            >
              <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-white' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white backdrop-blur-md transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close destination details"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Destination Header Info */}
          <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6">
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-600 text-white shadow-sm">
                {destination.vibeLabel}
              </span>
              <span className="flex items-center gap-1 text-xs text-slate-200 font-medium bg-slate-900/80 px-2.5 py-0.5 rounded-full backdrop-blur-sm border border-slate-700">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                {destination.state}, {destination.country}
              </span>
              <span className="flex items-center gap-1 text-xs text-amber-300 font-bold bg-amber-500/20 px-2.5 py-0.5 rounded-full backdrop-blur-sm border border-amber-500/30">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                {destination.rating.toFixed(1)} ({destination.reviewCount} reviews)
              </span>
            </div>
            <h2
              id="modal-dest-title"
              className="text-2xl sm:text-3xl font-black text-white tracking-tight"
            >
              {destination.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 line-clamp-1 mt-0.5">
              {destination.tagline}
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-slate-950/60 px-4 sm:px-6 overflow-x-auto shrink-0">
          <button
            onClick={() => setActiveTab('itinerary')}
            className={`py-3.5 px-4 text-xs sm:text-sm font-bold border-b-2 transition-colors whitespace-nowrap min-h-[44px] ${
              activeTab === 'itinerary'
                ? 'border-indigo-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            48h Itinerary Timeline
          </button>
          <button
            onClick={() => setActiveTab('budget')}
            className={`py-3.5 px-4 text-xs sm:text-sm font-bold border-b-2 transition-colors whitespace-nowrap min-h-[44px] ${
              activeTab === 'budget'
                ? 'border-indigo-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Group Budget Calculator
          </button>
          <button
            onClick={() => setActiveTab('packing')}
            className={`py-3.5 px-4 text-xs sm:text-sm font-bold border-b-2 transition-colors whitespace-nowrap min-h-[44px] ${
              activeTab === 'packing'
                ? 'border-indigo-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Packing Essentials
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`py-3.5 px-4 text-xs sm:text-sm font-bold border-b-2 transition-colors whitespace-nowrap min-h-[44px] ${
              activeTab === 'reviews'
                ? 'border-indigo-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Traveler Reviews ({destination.reviews.length})
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
          {/* TAB 1: 48h Itinerary Timeline */}
          {activeTab === 'itinerary' && (
            <div className="space-y-6">
              {/* Day Selector Tabs */}
              <div className="flex items-center gap-2">
                {destination.itinerary.map((d) => (
                  <button
                    key={d.day}
                    onClick={() => setSelectedDay(d.day)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all min-h-[44px] ${
                      selectedDay === d.day
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    Day {d.day}: {d.title}
                  </button>
                ))}
              </div>

              {/* Day Timeline Slots */}
              {destination.itinerary
                .filter((d) => d.day === selectedDay)
                .map((dayData) => (
                  <div key={dayData.day} className="space-y-4">
                    <h3 className="text-sm font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{dayData.theme}</span>
                    </h3>

                    <div className="space-y-3">
                      {dayData.slots.map((slot, index) => {
                        const IconComponent =
                          slot.timeOfDay === 'Morning'
                            ? Sun
                            : slot.timeOfDay === 'Afternoon'
                            ? Coffee
                            : Moon;

                        return (
                          <div
                            key={index}
                            className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4"
                          >
                            <div className="flex sm:flex-col items-center gap-2 sm:w-28 shrink-0">
                              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                                <IconComponent className="w-4 h-4" />
                              </div>
                              <span className="text-xs font-bold text-white">
                                {slot.timeOfDay}
                              </span>
                              <span className="text-[11px] text-slate-400 font-mono">
                                {slot.time}
                              </span>
                            </div>

                            <div className="flex-1">
                              <h4 className="text-sm sm:text-base font-bold text-white mb-1">
                                {slot.title}
                              </h4>
                              <p className="text-xs text-slate-300 leading-relaxed mb-2">
                                {slot.activity}
                              </p>
                              <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-400">
                                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                                  <IndianRupee className="w-3 h-3" />
                                  Est. ₹{slot.costEstimate}
                                </span>
                                <span className="text-slate-500">•</span>
                                <span className="text-slate-400 italic">Tip: {slot.tip}</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}

              {/* Highlights & Why Special */}
              <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/20">
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-300 mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Why This Trip Is Special</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {destination.whySpecial}
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: Group Budget Calculator */}
          {activeTab === 'budget' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-base font-bold text-white">Group Size & Tier Settings</h3>
                    <p className="text-xs text-slate-400">
                      Scale estimated trip costs based on your travel party
                    </p>
                  </div>

                  {/* Group Size Controls */}
                  <div className="flex items-center gap-2">
                    <label htmlFor="modal-group-size-slider" className="text-xs font-semibold text-slate-300">
                      Party Size:
                    </label>
                    <div className="flex items-center gap-1 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-700">
                      <Users className="w-4 h-4 text-indigo-400 mr-1" />
                      <span className="text-sm font-black text-white">{groupSize} Travelers</span>
                    </div>
                  </div>
                </div>

                <input
                  id="modal-group-size-slider"
                  type="range"
                  min="1"
                  max="8"
                  value={groupSize}
                  onChange={(e) => updateGroupSize(Number(e.target.value))}
                  className="w-full accent-indigo-500 cursor-pointer h-2 bg-slate-700 rounded-lg"
                />

                {/* Travel Tier Buttons */}
                <div className="flex items-center gap-2 pt-2">
                  {(['budget', 'standard', 'luxury'] as const).map((tier) => (
                    <button
                      key={tier}
                      onClick={() => updateTravelTier(tier)}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold capitalize transition-all min-h-[44px] ${
                        travelTier === tier
                          ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                          : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-700'
                      }`}
                    >
                      {tier} Experience
                    </button>
                  ))}
                </div>
              </div>

              {/* Itemized Cost Breakdown Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 bg-slate-800/40 rounded-xl border border-slate-700/60">
                  <div className="text-[11px] text-slate-400 font-medium">Accommodation (2 Nights)</div>
                  <div className="text-base sm:text-lg font-black text-white mt-1">
                    ₹{calculation.accommodationCost.toLocaleString('en-IN')}
                  </div>
                </div>
                <div className="p-3.5 bg-slate-800/40 rounded-xl border border-slate-700/60">
                  <div className="text-[11px] text-slate-400 font-medium">Food & Dining</div>
                  <div className="text-base sm:text-lg font-black text-white mt-1">
                    ₹{calculation.foodCost.toLocaleString('en-IN')}
                  </div>
                </div>
                <div className="p-3.5 bg-slate-800/40 rounded-xl border border-slate-700/60">
                  <div className="text-[11px] text-slate-400 font-medium">Local Transport</div>
                  <div className="text-base sm:text-lg font-black text-white mt-1">
                    ₹{calculation.transportCost.toLocaleString('en-IN')}
                  </div>
                </div>
                <div className="p-3.5 bg-slate-800/40 rounded-xl border border-slate-700/60">
                  <div className="text-[11px] text-slate-400 font-medium">Sightseeing & Entry</div>
                  <div className="text-base sm:text-lg font-black text-white mt-1">
                    ₹{calculation.activitiesCost.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>

              {/* Total & Per-Person Highlight */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-900/40 via-purple-900/30 to-indigo-900/40 border border-indigo-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-indigo-300 font-bold">
                    Estimated Total Trip Investment
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white flex items-center">
                    <IndianRupee className="w-6 h-6 text-indigo-400" />
                    <span>{calculation.totalCost.toLocaleString('en-IN')}</span>
                    <span className="text-xs text-slate-400 font-normal ml-2">
                      (for {groupSize} {groupSize === 1 ? 'person' : 'people'})
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs text-slate-400 font-medium">Split Per Person</div>
                  <div className="text-xl sm:text-2xl font-black text-emerald-400 flex items-center justify-end">
                    <IndianRupee className="w-5 h-5 text-emerald-400" />
                    <span>{calculation.costPerPerson.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Packing Essentials */}
          {activeTab === 'packing' && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Luggage className="w-4 h-4 text-indigo-400" />
                <span>Recommended 48-Hour Pack List for {destination.name}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {destination.packingEssentials.map((item, index) => (
                  <div
                    key={index}
                    className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs text-slate-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: Traveler Reviews */}
          {activeTab === 'reviews' && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400" />
                <span>Verified Weekend Traveler Reviews</span>
              </h3>
              <div className="space-y-3">
                {destination.reviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={rev.avatar}
                          alt={rev.author}
                          className="w-8 h-8 rounded-full bg-slate-700"
                          loading="lazy"
                        />
                        <div>
                          <div className="text-xs font-bold text-white">{rev.author}</div>
                          <div className="text-[10px] text-slate-400">{rev.date}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span>{rev.rating} / 5</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      "{rev.comment}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between shrink-0">
          <button
            onClick={() => onToggleFavorite(destination)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all min-h-[44px] ${
              isFavorite
                ? 'bg-rose-600 hover:bg-rose-500 text-white'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-white' : ''}`} />
            <span>{isFavorite ? 'Shortlisted' : 'Bookmark to Shortlist'}</span>
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-indigo-600/30 transition-all min-h-[44px]"
          >
            Done Planning
          </button>
        </div>
      </div>
    </div>
  );
};
