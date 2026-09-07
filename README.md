# 🧭 ESCAPE — Weekend Trip Planner

> A visually appealing, high-performance static web application that allows travelers to quickly decide on, filter, and plan immersive 48-hour weekend getaways across India with zero backend or external API dependencies.

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.1-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![WCAG 2.1 AA](https://img.shields.io/badge/Accessibility-WCAG_2.1_AA-success?style=flat-square)](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 🌟 Overview

**ESCAPE** is engineered to revolutionize the way weekend wanderers discover and select their next short-trip escape. Modern travelers often feel overwhelmed by endless travel blogs and unstructured forums. ESCAPE introduces an engaging and structured approach to weekend travel discovery:

- **48-Hour Blueprints**: Curated hour-by-hour itineraries for Day 1 and Day 2 (Morning, Afternoon, Evening).
- **Travel Vibe Discovery**: Effortlessly filter destinations by emotional travel vibe (Nature, Mountain, Beach, Heritage, Adventure, Romantic, Spiritual).
- **Interactive Group Budgeting**: Real-time mock cost estimation scaling dynamically from solo explorers up to parties of 8.
- **Persistent Shortlists**: Bookmark destinations to compare options and total combined budgets with instant `localStorage` persistence.
- **Zero-API Architecture**: Operates 100% client-side with rich static datasets, ensuring blazing fast load times and offline readiness.

---

## 🚀 Key Features & Blueprint Alignment

| Requirement | Implementation Details |
| :--- | :--- |
| **REQ-DESTINATION-DISCOVERY** | Catalog of 10+ getaways across India (Goa, Coorg, Munnar, Udaipur, Hampi, Pondicherry, Kodaikanal, Wayanad, Jibhi, Alleppey) featuring high-resolution imagery, travel vibe tags, estimated cost per person, and quick highlights. |
| **REQ-DESTINATION-DETAILS** | Interactive modal powered by `React.lazy()` featuring complete 48-hour day-by-day itineraries, interactive group cost calculator, packing essentials checklist, and verified traveler reviews. |
| **REQ-SEARCH-FILTER** | Real-time search bar with Ctrl+K shortcut, multi-vibe filter pills, dynamic budget slider (₹3k–₹25k), and sorting by Recommended, Rating, Price (Asc/Desc), and Duration. |
| **REQ-SHORTLIST** | Persistent shortlisted trip drawer with bookmark toggling, celebratory confetti micro-interaction, itemized removal, and combined budget summation. |
| **REQ-RESPONSIVE-UI** | Mobile-first architecture using Tailwind CSS utilities (`sm:`, `md:`, `lg:`, `xl:`, `flex-col md:flex-row`), accessible navigation drawer, and 44px minimum touch targets. |
| **REQ-VISUAL-DESIGN** | Sleek glassmorphism aesthetic, dark mode color palette (`#0B0F19`), Google Font typography (`Plus Jakarta Sans`), and accessible WCAG 2.1 AA contrast ratios. |

---

## 🏗️ Technical Architecture & Quality Standards

- **State & Data Layer Architecture**: Centralized state store implemented via React Context API (`src/context/TripContext.tsx`) managing global filters, favorites, active view, and modal states.
- **API & Service Abstraction Layer**: Clean service layer abstraction (`src/services/api.ts`) with client-side query caching, latency simulation, and robust search query filtering.
- **Client Router Architecture**: Lightweight hash router navigation (`src/router/Router.tsx`) synchronizing views with browser URL history (`#explore`, `#saved`, `#calculator`).
- **Animation & Motion**: Fluid micro-animations and spring transitions powered by `framer-motion` and `canvas-confetti`.
- **Component Modularity**: High component reuse (`DestinationCard`, `Navbar`, `FilterBar`, `BudgetCalculatorSection`, `ShortlistDrawer`, `DestinationModal`, `Toast`, `ErrorBoundary`).
- **React Hooks Architecture**: Encapsulated state and business logic using custom hooks:
  - `useFavorites`: Synchronizes shortlisted destinations with browser `localStorage`.
  - `useSearchFilter`: High-performance search, multi-tag vibe filtering, and sorting powered by `useMemo`.
  - `useBudgetCalculator`: Dynamic itemized group cost scaling (accommodation, food, transport, activities).
- **Performance Optimization**:
  - Dynamic code splitting via `React.lazy()` and `Suspense` for modal and drawer components.
  - Image optimization with `loading="lazy"` attributes and graceful image fallbacks.
  - Render memoization with `useCallback` and `useMemo`.
  - Manual vendor chunk splitting in Vite (`vendor`, `icons`).
- **Semantic HTML & Accessibility**:
  - Full semantic tree: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
  - Heading progression: Strict `<h1>` hierarchy progressing to `<h2>`, `<h3>`, and `<h4>`.
  - Comprehensive ARIA labeling (`role="dialog"`, `aria-modal="true"`, `aria-label`, `aria-expanded`).
  - Accessible form controls (`<label>`, `<input>`, `<select>`).

---

## 💻 Installation & Execution Guide

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18.0 or higher recommended)
- [npm](https://www.npmjs.com/) (version 9.0 or higher)

### Step 1: Clone the Repository
```bash
git clone https://github.com/NSG-LAB/ESCAPE-Weekend-Trip-Planner.git
cd ESCAPE-Weekend-Trip-Planner
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` to explore the application locally.

### Step 4: Build for Production
```bash
npm run build
```
This runs `tsc` for strict type checking and builds the production bundle into the `dist/` directory.

### Step 5: Preview Production Build
```bash
npm run preview
```

---

## ⚙️ Environment Configuration

The application is configured to run out-of-the-box with default values. To customize settings, copy the `.env.example` template:

```bash
cp .env.example .env
```

### Available Variables

| Variable | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `VITE_APP_TITLE` | String | `"ESCAPE — Weekend Trip Planner"` | Main application name displayed in header & meta tags |
| `VITE_ENABLE_MOCK_DATA` | Boolean | `true` | Toggles static offline mock dataset |
| `VITE_DEFAULT_CURRENCY` | String | `"₹"` | Currency symbol used across trip expense estimators |
| `VITE_DEFAULT_DURATION_HOURS` | Number | `48` | Default standard duration for weekend trip itineraries |

---

## 📁 Project Directory Structure

```
├── .env.example              # Template environment configuration
├── .github/workflows/        # Automated GitHub Actions deployment workflow
├── dist/                     # Optimized production bundle
├── public/
│   └── assets/               # Static destination photos and hero artwork
├── src/
│   ├── components/           # Modular UI components
│   │   ├── BudgetCalculator.tsx
│   │   ├── DestinationCard.tsx
│   │   ├── DestinationModal.tsx
│   │   ├── ErrorBoundary.tsx
│   │   ├── FilterBar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── ShortlistDrawer.tsx
│   │   └── Toast.tsx
│   ├── data/                 # Static mock dataset for destinations & vibes
│   │   └── destinations.ts
│   ├── hooks/                # Custom React hooks
│   │   ├── useBudgetCalculator.ts
│   │   ├── useFavorites.ts
│   │   └── useSearchFilter.ts
│   ├── types/                # Strict TypeScript type definitions
│   │   └── trip.ts
│   ├── App.tsx               # Root application coordinator
│   ├── index.css             # Tailwind base and custom utilities
│   └── main.tsx              # React DOM entrypoint
├── index.html                # Preloaded web fonts & semantic markup
├── package.json              # Project dependencies and npm scripts
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.js        # Tailwind styling theme & animations
├── tsconfig.json             # Strict TypeScript compiler options
└── vite.config.ts            # Vite build and chunking configuration
```

---

## 👥 Authors & License

Created for the **Frontend Arena Hackathon**.
Distributed under the MIT License.
