/**
 * ESCAPE — Search, Filtering, and Sorting Engine
 */

const SearchEngine = {
  // Current active filters
  state: {
    query: "",
    selectedCategories: [],
    selectedBudget: "",
    selectedDuration: "",
    travelerType: "couple",
    travelerCount: 2,
    sortBy: "popular"
  },

  /**
   * Save state to sessionStorage so detail page navigation preserves context
   */
  persistState() {
    try {
      sessionStorage.setItem("escape_search_state", JSON.stringify(this.state));
    } catch (e) {
      console.warn("Could not persist search state", e);
    }
  },

  /**
   * Restore state from sessionStorage if available
   */
  restoreState() {
    try {
      const saved = sessionStorage.getItem("escape_search_state");
      if (saved) {
        this.state = { ...this.state, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.warn("Could not restore search state", e);
    }
  },

  /**
   * Filter destinations according to state
   */
  filterDestinations() {
    if (typeof ESCAPE_DATA === "undefined") return [];

    return ESCAPE_DATA.destinations.filter(item => {
      // 1. Text Query (Search)
      if (this.state.query.trim()) {
        const q = this.state.query.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesState = item.state.toLowerCase().includes(q);
        const matchesTagline = item.tagline.toLowerCase().includes(q);
        const matchesHighlights = item.highlights.some(h => h.toLowerCase().includes(q));
        if (!matchesName && !matchesState && !matchesTagline && !matchesHighlights) {
          return false;
        }
      }

      // 2. Categories (Vibes)
      if (this.state.selectedCategories.length > 0) {
        const hasCategory = this.state.selectedCategories.some(cat => 
          item.categories.includes(cat)
        );
        if (!hasCategory) return false;
      }

      // 3. Budget Range
      if (this.state.selectedBudget) {
        const range = ESCAPE_DATA.budgetRanges.find(b => b.id === this.state.selectedBudget);
        if (range) {
          if (item.basePrice < range.min || item.basePrice > range.max) {
            return false;
          }
        }
      }

      // 4. Duration
      if (this.state.selectedDuration) {
        if (this.state.selectedDuration === "1-day" && item.durationDays !== 1) return false;
        if (this.state.selectedDuration === "2-days" && item.durationDays !== 2) return false;
        if (this.state.selectedDuration === "3-days" && item.durationDays !== 3) return false;
        if (this.state.selectedDuration === "weekend" && item.durationDays > 2) return false;
      }

      return true;
    });
  },

  /**
   * Sort filtered destinations
   */
  sortDestinations(list) {
    const sorted = [...list];
    switch (this.state.sortBy) {
      case "price-asc":
        return sorted.sort((a, b) => a.basePrice - b.basePrice);
      case "price-desc":
        return sorted.sort((a, b) => b.basePrice - a.basePrice);
      case "rating":
        return sorted.sort((a, b) => b.rating - a.rating);
      case "popular":
      default:
        // Rank by rating * log(reviews)
        return sorted.sort((a, b) => (b.rating * Math.log10(b.reviewCount)) - (a.rating * Math.log10(a.reviewCount)));
    }
  },

  /**
   * Generate HTML for a single destination card
   */
  renderCardHTML(item) {
    const isFav = FavoritesManager.isFavorite(item.id);
    const primaryCategory = item.categories[0] || "Getaway";
    const categoryLower = primaryCategory.toLowerCase();

    // Calculate approximate price for selected traveler count
    const typeObj = ESCAPE_DATA.travelerTypes.find(t => t.id === this.state.travelerType) || ESCAPE_DATA.travelerTypes[1];
    const estimatedTotal = Math.round(item.basePrice * typeObj.multiplier);

    return `
      <article class="destination-card hover-lift" data-id="${item.id}" id="card-${item.id}">
        <div class="card-media img-zoom-wrapper">
          <img src="${item.image}" alt="${item.name}, ${item.state}" loading="lazy" width="400" height="260" />
          <span class="card-badge badge-${categoryLower}">${primaryCategory}</span>
          <button 
            type="button" 
            class="fav-btn ${isFav ? "active" : ""}" 
            data-id="${item.id}" 
            aria-pressed="${isFav ? "true" : "false"}"
            aria-label="${isFav ? "Remove from favorites" : "Add to favorites"}"
            title="${isFav ? "Remove from favorites" : "Save to favorites"}"
          >
            <svg class="heart-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
          <div class="card-duration-badge">
            <svg viewBox="0 0 20 20" fill="currentColor" class="meta-icon" aria-hidden="true"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/></svg>
            <span>${item.duration}</span>
          </div>
        </div>

        <div class="card-body">
          <div class="card-header-row">
            <h3 class="card-title">${item.name}</h3>
            <span class="card-location">
              <svg viewBox="0 0 20 20" fill="currentColor" class="meta-icon" aria-hidden="true"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>
              ${item.state}
            </span>
          </div>

          <p class="card-tagline">${item.tagline}</p>

          <div class="card-meta-row">
            ${UI.createRatingStars(item.rating)}
            <span class="review-count">(${item.reviewCount} reviews)</span>
          </div>

          <div class="card-footer-row">
            <div class="card-price-block">
              <span class="price-label">Starting from</span>
              <span class="price-amount">${UI.formatCurrency(item.basePrice)}</span>
              <span class="price-unit">/ person</span>
            </div>
            <a href="destination.html?id=${item.id}" class="btn btn-primary btn-sm explore-btn" aria-label="Explore ${item.name} trip details">
              Explore
              <svg viewBox="0 0 20 20" fill="currentColor" class="btn-arrow" aria-hidden="true"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
            </a>
          </div>
        </div>
      </article>
    `;
  },

  /**
   * Update and render active filter chips
   */
  renderActiveFilterChips() {
    const chipsContainer = document.getElementById("active-filter-chips");
    if (!chipsContainer) return;

    let chips = [];

    // Query Chip
    if (this.state.query.trim()) {
      chips.push({
        id: "chip-query",
        label: `"${this.state.query.trim()}"`,
        onRemove: () => {
          this.state.query = "";
          const input = document.getElementById("search-input");
          if (input) input.value = "";
          this.executeFilter();
        }
      });
    }

    // Category Chips
    this.state.selectedCategories.forEach(cat => {
      chips.push({
        id: `chip-cat-${cat}`,
        label: cat,
        onRemove: () => {
          this.state.selectedCategories = this.state.selectedCategories.filter(c => c !== cat);
          document.querySelectorAll(`.vibe-card[data-category="${cat}"]`).forEach(el => el.classList.remove("selected"));
          this.executeFilter();
        }
      });
    });

    // Budget Chip
    if (this.state.selectedBudget) {
      const bObj = ESCAPE_DATA.budgetRanges.find(b => b.id === this.state.selectedBudget);
      if (bObj) {
        chips.push({
          id: "chip-budget",
          label: bObj.label,
          onRemove: () => {
            this.state.selectedBudget = "";
            const select = document.getElementById("filter-budget");
            if (select) select.value = "";
            this.executeFilter();
          }
        });
      }
    }

    // Duration Chip
    if (this.state.selectedDuration) {
      const dObj = ESCAPE_DATA.durations.find(d => d.id === this.state.selectedDuration);
      if (dObj) {
        chips.push({
          id: "chip-duration",
          label: dObj.label,
          onRemove: () => {
            this.state.selectedDuration = "";
            const select = document.getElementById("filter-duration");
            if (select) select.value = "";
            this.executeFilter();
          }
        });
      }
    }

    if (chips.length === 0) {
      chipsContainer.innerHTML = "";
      chipsContainer.style.display = "none";
      return;
    }

    chipsContainer.style.display = "flex";
    chipsContainer.innerHTML = `
      <span class="chips-label">Active Filters:</span>
      ${chips.map(chip => `
        <button type="button" class="filter-chip" data-chip-id="${chip.id}" aria-label="Remove filter ${chip.label}">
          <span>${chip.label}</span>
          <span class="chip-remove" aria-hidden="true">&times;</span>
        </button>
      `).join("")}
      <button type="button" class="clear-all-chips-btn" id="btn-clear-all-chips">Clear All</button>
    `;

    // Attach remove handlers
    chips.forEach(chip => {
      const el = chipsContainer.querySelector(`[data-chip-id="${chip.id}"]`);
      if (el) {
        el.addEventListener("click", chip.onRemove);
      }
    });

    const clearAllBtn = document.getElementById("btn-clear-all-chips");
    if (clearAllBtn) {
      clearAllBtn.addEventListener("click", () => this.resetAllFilters());
    }
  },

  /**
   * Reset all filters to initial state
   */
  resetAllFilters() {
    this.state.query = "";
    this.state.selectedCategories = [];
    this.state.selectedBudget = "";
    this.state.selectedDuration = "";
    this.state.sortBy = "popular";

    // Reset DOM elements
    const searchInput = document.getElementById("search-input");
    if (searchInput) searchInput.value = "";

    const budgetSelect = document.getElementById("filter-budget");
    if (budgetSelect) budgetSelect.value = "";

    const durationSelect = document.getElementById("filter-duration");
    if (durationSelect) durationSelect.value = "";

    const sortSelect = document.getElementById("sort-by");
    if (sortSelect) sortSelect.value = "popular";

    document.querySelectorAll(".vibe-card").forEach(c => c.classList.remove("selected"));

    this.executeFilter();
    UI.showToast("Filters reset to show all weekend escapes.", "info");
  },

  /**
   * Main filter execution and DOM re-rendering
   */
  executeFilter() {
    const container = document.getElementById("destinations-grid");
    const countBadge = document.getElementById("results-count");
    if (!container) return;

    this.persistState();
    this.renderActiveFilterChips();

    const filtered = this.filterDestinations();
    const sorted = this.sortDestinations(filtered);

    if (countBadge) {
      countBadge.textContent = `Showing ${sorted.length} of ${ESCAPE_DATA.destinations.length} getaways`;
    }

    if (sorted.length === 0) {
      container.innerHTML = `
        <div class="empty-state-box">
          <div class="empty-icon">🎒</div>
          <h3 class="empty-title">No weekend escapes matched your filters</h3>
          <p class="empty-desc">Try relaxing your budget or selecting a different travel vibe to discover more getaways.</p>
          <button type="button" class="btn btn-primary" id="btn-empty-reset">Reset All Filters</button>
        </div>
      `;
      const resetBtn = document.getElementById("btn-empty-reset");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => this.resetAllFilters());
      }
      return;
    }

    container.innerHTML = sorted.map(item => this.renderCardHTML(item)).join("");

    // Re-trigger scroll animations or card entrance
    container.querySelectorAll(".destination-card").forEach((card, idx) => {
      card.style.animationDelay = `${idx * 0.05}s`;
      card.classList.add("anim-fade-in-up");
    });
  },

  /**
   * Initialize autocomplete for search box
   */
  initAutocomplete() {
    const input = document.getElementById("search-input");
    const dropdown = document.getElementById("search-autocomplete");
    if (!input || !dropdown) return;

    const showSuggestions = () => {
      const q = input.value.trim().toLowerCase();
      if (!q) {
        dropdown.innerHTML = "";
        dropdown.style.display = "none";
        return;
      }

      const matches = ESCAPE_DATA.destinations.filter(d => 
        d.name.toLowerCase().includes(q) ||
        d.state.toLowerCase().includes(q) ||
        d.categories.some(c => c.toLowerCase().includes(q))
      ).slice(0, 5);

      if (matches.length === 0) {
        dropdown.innerHTML = `<div class="autocomplete-empty">No destinations found for "${q}"</div>`;
        dropdown.style.display = "block";
        return;
      }

      dropdown.innerHTML = matches.map(d => `
        <div class="autocomplete-item" data-id="${d.id}" data-name="${d.name}">
          <img src="${d.image}" alt="" class="autocomplete-thumb" width="36" height="36" />
          <div class="autocomplete-info">
            <div class="autocomplete-name">${d.name}</div>
            <div class="autocomplete-sub">${d.state} · ${d.categories.join(", ")}</div>
          </div>
          <span class="autocomplete-price">${UI.formatCurrency(d.basePrice)}</span>
        </div>
      `).join("");
      dropdown.style.display = "block";
    };

    input.addEventListener("input", UI.debounce(showSuggestions, 150));
    input.addEventListener("focus", showSuggestions);

    // Click outside to close
    document.addEventListener("click", (e) => {
      if (!input.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = "none";
      }
    });

    // Item selection
    dropdown.addEventListener("click", (e) => {
      const item = e.target.closest(".autocomplete-item");
      if (item) {
        const destName = item.getAttribute("data-name");
        input.value = destName;
        this.state.query = destName;
        dropdown.style.display = "none";
        this.executeFilter();
        const section = document.getElementById("escapes-section");
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
};

window.SearchEngine = SearchEngine;
