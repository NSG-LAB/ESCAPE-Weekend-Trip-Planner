# 🧭 ESCAPE — Weekend Trip Planner

> **“Your weekend. Your adventure.”**  
> A modern, premium, and interactive weekend-trip planning frontend experience built with **HTML5, CSS3, Vanilla JavaScript, and Node.js**, designed and optimized for static deployment via **GitHub Pages**.

---

## 🌟 Overview

**ESCAPE** is a client-side web application crafted to deliver an intuitive travel startup experience. It empowers users to discover handpicked weekend getaways across India, filter by their personal vibe and budget, explore detailed 48-hour day-by-day itineraries, and calculate realistic mock budgets according to their travel group size—all with zero external backend or API dependencies.

---

## 🚀 Key Features

### 1. 🎯 Interactive Preference & Vibe System
- **7 Curated Travel Vibes:** Adventure ⛰️, Nature 🌿, Beach 🏖️, Romantic 💕, Food 🍜, Culture 🏛️, and Relaxation 🧘.
- Interactive multi-select preference cards with real-time visual feedback and instant filtering.

### 2. 🔍 Smart Trip-Planning & Search Interface
- **Destination Autocomplete:** Type to search with instant dropdown suggestions highlighting name, state, and pricing.
- **Budget Filters:** Under ₹5,000, ₹5,000–₹10,000, ₹10,000–₹20,000, and ₹20,000+.
- **Duration Selectors:** 1 Day, 2 Days (Weekend), 3 Days (Long Weekend).
- **Traveler Group Stepper:** Interactive count adjuster & traveler type selector (Solo, Couple, Friends, Family).
- **Sort Options:** Popularity, Price (Low to High), Price (High to Low), and Highest Rating.
- **Active Filter Chips:** Removable chips with one-click "Clear All" functionality.

### 3. 🗺️ Destination Cards & Curated Sections
- **Rich Destination Cards:** High-resolution destination photography, category pills, rating stars, duration badges, price per person, heart favorite button, and smooth hover elevation.
- **“Weekend escapes you'll love”:** The main dynamic destination gallery with empty state handling.
- **“Under ₹10K”:** Horizontal carousel featuring budget-friendly trips.
- **“Quick weekend escapes”:** 1–2 day trips for spontaneous weekenders.
- **“Hidden gems”:** Editorial cards for off-the-beaten-path destinations like Jibhi and Hampi.

### 4. 📖 Detailed Destination Experience (`destination.html`)
- **Full-Bleed Hero Banner:** Scenic photography, quick-info meta pills, ratings, and save button.
- **Tabbed Interface:**
  - **Overview & Highlights:** Comprehensive background, trip highlights checklist, and activity cards with duration & cost tags.
  - **Day-by-Day Itinerary:** Structured 48-hour timeline divided into Morning 🌅, Afternoon ☀️, and Evening 🌙 slots with time tags.
  - **Interactive Mock Budget Calculator:** Dynamic recalculation of Accommodation, Food, Transportation, and Activities with a stacked visual percentage bar based on traveler type (Solo, Couple, Friends, Family).
  - **Traveler Reviews:** Score cards and verified community feedback.
- **Sticky Booking Sidebar:** Real-time calculated estimate, simulated booking action, and URL sharing with toast notifications.

### 5. ❤️ Favorites & Saved Trips (`favorites.html`)
- Persistent bookmarking using browser `localStorage` (no server or database needed).
- Real-time navbar badge counter synchronization across all pages.
- Dedicated favorites hub with empty state and a "Clear All Saved" confirmation workflow.

---

## 📱 Full Responsive Optimization

Intelligently adapts across all device categories using CSS Flexbox, Grid, and fluid `clamp()` typography:

| Screen Category | Tested Breakpoints | Adaptation Strategy |
|---|---|---|
| **Mobile Phones** | `320px`, `375px`, `390px`, `414px` | Full-screen mobile drawer, 1-column card stack, touch-friendly 44px+ touch targets, stacked search inputs |
| **Tablets Portrait** | `768px`, `820px` | 2-column search grid, 2-column card layout, swipeable horizontal carousels |
| **Tablets Landscape & Laptops** | `1024px`, `1280px` | Side-by-side trip planner, 2–3 column grids, sticky tab navigation |
| **Desktops & Wide Displays** | `1440px`, `1920px+` | Max-width containers (1400px), 3–4 column grids, sticky sidebar summaries |

---

## 🛠️ Technology Stack

- **Markup:** HTML5 (Semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`)
- **Styling:** CSS3 (Custom properties / CSS variables, Grid, Flexbox, Keyframe animations, Glassmorphism)
- **Logic:** Vanilla JavaScript (ES6+, DOM Manipulation, LocalStorage API, CustomEvents, IntersectionObserver)
- **Tooling:** Node.js (Used exclusively for local development static serving)
- **Hosting:** GitHub Pages compatible (Pure static files, relative paths, `.nojekyll` included)

---

## 🗂️ Project Structure

```
frontendarena mock test/
├── .nojekyll                 # Bypasses Jekyll on GitHub Pages
├── index.html                # Main landing page & search hub
├── destination.html          # Destination detail & itinerary page
├── favorites.html            # Saved trips & bookmarks hub
├── README.md                 # Project documentation & setup
├── css/
│   ├── variables.css         # Design tokens (colors, typography, spacing)
│   ├── reset.css             # Modern CSS reset & accessibility rules
│   ├── animations.css        # Keyframe animations & transitions
│   ├── style.css             # Core application & component styles
│   └── responsive.css        # Multi-breakpoint media queries
├── js/
│   ├── data.js               # 100% Local mock dataset
│   ├── ui.js                 # Reusable UI helpers (toasts, currency, stars)
│   ├── favorites.js          # localStorage favorites management
│   ├── search.js             # Filter, search, sort, and card rendering engine
│   ├── destination.js        # Detail page tabs & budget calculator logic
│   └── app.js                # Landing page controller & interactions
└── assets/
    └── images/               # High-res destination & hero photography
        ├── hero-bg.jpg
        ├── munnar.jpg
        ├── goa.jpg
        ├── coorg.jpg
        ├── wayanad.jpg
        ├── hampi.jpg
        ├── pondicherry.jpg
        ├── udaipur.jpg
        ├── alleppey.jpg
        ├── jibhi.jpg
        └── kodaikanal.jpg
```

---

## 💻 Local Setup & Development

Because ESCAPE is built purely with standard web technologies, **no build step or compiler is required**.

### Option A: Using Node.js (Recommended)
You can use any zero-config Node.js static server:
```bash
# Clone the repository
git clone https://github.com/your-username/escape-weekend-planner.git
cd escape-weekend-planner

# Serve using npx
npx serve .
```
Then open `http://localhost:3000` in your browser.

### Option B: Direct Browser Open
Simply double-click `index.html` or open it directly in Google Chrome, Firefox, Safari, or Microsoft Edge.

---

## 🌐 GitHub Pages Deployment Instructions

1. **Push code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: ESCAPE Weekend Trip Planner"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

2. **Configure GitHub Pages:**
   - Go to your repository on GitHub.
   - Click **Settings** → **Pages** (in the left sidebar under "Code and automation").
   - Under **Build and deployment** → **Source**, select **Deploy from a branch**.
   - Under **Branch**, select `main` (or `gh-pages`) and choose `/ (root)`.
   - Click **Save**.

3. **Verify Deployment:**
   - Wait 1–2 minutes for GitHub Actions to complete the deployment.
   - Your site will be live at: `https://<your-username>.github.io/<your-repo-name>/`
   - *Note:* The repository includes a `.nojekyll` file and uses relative paths (`./css/...`, `./assets/...`) to ensure proper asset resolution on GitHub Pages.

---

## ℹ️ Mock Data Disclaimer

All destinations, itineraries, pricing, budgets, ratings, and traveler reviews displayed in this project are **fictional and simulated mock data**. The application does **NOT** connect to external APIs (Google Maps, TripAdvisor, booking portals, payment gateways, or live weather services). It is designed strictly as a high-fidelity frontend portfolio project.

---

## 📄 License

Created for demonstration and portfolio review. Open source under the [MIT License](LICENSE).
