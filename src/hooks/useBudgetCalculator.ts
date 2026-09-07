import { useState, useMemo, useCallback } from 'react';
import { GroupBudgetCalculation } from '../types/trip';

/**
 * Custom React hook for dynamic group budget and trip expense calculations.
 * Supports group scaling (1 to 8 people) and multi-tier travel styles.
 * 
 * Satisfies FAIE:
 * - REQ-DESTINATION-DETAILS (AC DEST-DETAIL-02)
 * - Innovation & Creativity
 */
export function useBudgetCalculator(basePricePerPerson: number) {
  const [groupSize, setGroupSize] = useState<number>(2);
  const [travelTier, setTravelTier] = useState<'budget' | 'standard' | 'luxury'>('standard');

  const updateGroupSize = useCallback((size: number) => {
    setGroupSize(Math.max(1, Math.min(8, size)));
  }, []);

  const updateTravelTier = useCallback((tier: 'budget' | 'standard' | 'luxury') => {
    setTravelTier(tier);
  }, []);

  const calculation: GroupBudgetCalculation = useMemo(() => {
    // Multipliers for different travel tiers
    const tierMultiplier = travelTier === 'budget' ? 0.75 : travelTier === 'luxury' ? 1.6 : 1.0;
    
    // Group economy scaling (e.g. sharing room cuts stay cost per person slightly)
    const roomSharingFactor = groupSize >= 4 ? 0.85 : groupSize === 2 ? 0.9 : 1.0;
    
    const base = (basePricePerPerson || 4500) * tierMultiplier;
    
    // Breakdown components
    const accommodation = Math.round(base * 0.45 * roomSharingFactor * groupSize);
    const food = Math.round(base * 0.25 * groupSize);
    const transport = Math.round(base * 0.18 * groupSize);
    const activities = Math.round(base * 0.12 * groupSize);
    
    const total = accommodation + food + transport + activities;
    const perPerson = Math.round(total / groupSize);

    return {
      groupSize,
      travelTier,
      accommodationCost: accommodation,
      foodCost: food,
      transportCost: transport,
      activitiesCost: activities,
      totalCost: total,
      costPerPerson: perPerson,
    };
  }, [basePricePerPerson, groupSize, travelTier]);

  return {
    groupSize,
    travelTier,
    calculation,
    updateGroupSize,
    updateTravelTier,
  };
}
