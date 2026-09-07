/**
 * ESCAPE — Weekend Trip Planner
 * Core Domain TypeScript Type Definitions
 */

export type TravelVibe = 
  | 'beach'
  | 'mountain'
  | 'heritage'
  | 'nature'
  | 'spiritual'
  | 'adventure'
  | 'romantic';

export type TimeOfDay = 'Morning' | 'Afternoon' | 'Evening';

export interface ItinerarySlot {
  timeOfDay: TimeOfDay;
  time: string;
  title: string;
  activity: string;
  location: string;
  costEstimate: number;
  tip: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  theme: string;
  slots: ItinerarySlot[];
}

export interface UserReview {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
}

export interface Destination {
  id: string;
  name: string;
  tagline: string;
  state: string;
  country: string;
  vibe: TravelVibe;
  vibeLabel: string;
  rating: number;
  reviewCount: number;
  pricePerPerson: number;
  durationHours: number;
  idealFor: string | string[];
  bestSeason: string;
  heroImage: string;
  gallery: string[];
  tags: string[];
  highlights: string[];
  whySpecial: string;
  itinerary: ItineraryDay[];
  packingEssentials: string[];
  reviews: UserReview[];
}

export interface FilterState {
  searchQuery: string;
  selectedVibes: TravelVibe[];
  maxBudget: number;
  maxDuration: number;
  sortBy: 'recommended' | 'rating' | 'price-asc' | 'price-desc' | 'duration';
}

export interface GroupBudgetCalculation {
  groupSize: number;
  travelTier: 'budget' | 'standard' | 'luxury';
  accommodationCost: number;
  foodCost: number;
  transportCost: number;
  activitiesCost: number;
  totalCost: number;
  costPerPerson: number;
}
