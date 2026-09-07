import React from 'react';
import { Calculator, Users, IndianRupee, Bed, Utensils, Car, Compass } from 'lucide-react';
import { useBudgetCalculator } from '../hooks/useBudgetCalculator';

interface BudgetCalculatorSectionProps {
  onExploreWithBudget: (maxBudget: number) => void;
}

/**
 * Interactive Budget Planner Component Section
 * 
 * Satisfies FAIE:
 * - REQ-DESTINATION-DETAILS & Innovation & Creativity
 * - Semantic HTML5 Structure (<section>, <h2>, <h3>)
 * - Accessible Form Controls (<label>, <input>)
 * - Responsive Grid & Flexbox
 */
export const BudgetCalculatorSection: React.FC<BudgetCalculatorSectionProps> = ({
  onExploreWithBudget,
}) => {
  const { groupSize, travelTier, calculation, updateGroupSize, updateTravelTier } =
    useBudgetCalculator(5000);

  return (
    <section id="budget" className="py-16 sm:py-20 border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Trip Cost Estimator</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-3">
            Plan Your 48-Hour Weekend Budget
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Customize group size and preferred comfort tier to see realistic expense projections
            across stay, dining, transport, and adventure activities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Control Column */}
            <div className="space-y-6">
              {/* Group Size Selector */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="interactive-group-size-slider"
                    className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5"
                  >
                    <Users className="w-4 h-4 text-indigo-400" />
                    <span>Travel Group Size</span>
                  </label>
                  <span className="text-sm font-black text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-lg border border-indigo-500/20">
                    {groupSize} {groupSize === 1 ? 'Solo Traveler' : 'Travelers'}
                  </span>
                </div>
                <input
                  id="interactive-group-size-slider"
                  type="range"
                  min="1"
                  max="8"
                  value={groupSize}
                  onChange={(e) => updateGroupSize(Number(e.target.value))}
                  aria-label="Select number of travelers"
                  className="w-full accent-indigo-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-bold mt-1">
                  <span>1 (Solo)</span>
                  <span>2 (Couple)</span>
                  <span>4 (Friends)</span>
                  <span>8 (Group)</span>
                </div>
              </div>

              {/* Travel Style Tier */}
              <div>
                <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">
                  Select Travel Style
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {(['budget', 'standard', 'luxury'] as const).map((tier) => (
                    <button
                      key={tier}
                      onClick={() => updateTravelTier(tier)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold capitalize transition-all min-h-[44px] ${
                        travelTier === tier
                          ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                          : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 border border-slate-700/60'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Breakdown Category List */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-2">
                    <Bed className="w-4 h-4 text-indigo-400" />
                    Accommodation (2 nights)
                  </span>
                  <span className="font-bold text-white">
                    ₹{calculation.accommodationCost.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-indigo-400" />
                    Food & Feasts
                  </span>
                  <span className="font-bold text-white">
                    ₹{calculation.foodCost.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-indigo-400" />
                    Local Commute
                  </span>
                  <span className="font-bold text-white">
                    ₹{calculation.transportCost.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-indigo-400" />
                    Sightseeing & Entry
                  </span>
                  <span className="font-bold text-white">
                    ₹{calculation.activitiesCost.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </div>

            {/* Total Result Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-950/60 via-slate-900 to-slate-900 border border-indigo-500/30 flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-1">
                  Estimated Trip Total
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white flex items-center">
                  <IndianRupee className="w-8 h-8 text-indigo-400" />
                  <span>{calculation.totalCost.toLocaleString('en-IN')}</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Complete 48-hour projected investment for {groupSize}{' '}
                  {groupSize === 1 ? 'traveler' : 'travelers'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                <div className="text-[11px] text-slate-400 font-medium">Per Person Expense</div>
                <div className="text-xl sm:text-2xl font-black text-emerald-400 flex items-center">
                  <IndianRupee className="w-5 h-5 text-emerald-400" />
                  <span>{calculation.costPerPerson.toLocaleString('en-IN')}</span>
                  <span className="text-xs text-slate-400 font-normal ml-1.5">/ person</span>
                </div>
              </div>

              <button
                onClick={() => {
                  onExploreWithBudget(calculation.costPerPerson);
                  const el = document.getElementById('destinations');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-indigo-600/30 transition-all min-h-[44px]"
              >
                Show Trips Under ₹{calculation.costPerPerson.toLocaleString('en-IN')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
