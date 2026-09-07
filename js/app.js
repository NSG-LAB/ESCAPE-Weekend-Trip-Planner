/**
 * ESCAPE — Main Application Controller (Landing Page)
 */

document.addEventListener("DOMContentLoaded", () => {
  App.init();
});

const App = {
  init() {
    // 1. Initialize favorites
    FavoritesManager.init();

    // 2. Mobile navigation drawer
    this.initNavbar();

    // 3. Quick Trip Planning / Hero Search Bar
    this.initHeroSearch();

    // 4. "Pick your vibe" preference selector
    this.initVibeSelector();

    // 5. Search Engine & Active Filter controls
    this.initFilterControls();

    // 6. Curated Collections (Under 10k, Quick escapes, Hidden gems)
    this.initCuratedCollections();

    // 7. Newsletter & Footer Interactions
    this.initNewsletter();

    // 8. Scroll-to-top button & Scroll Animations
    this.initScrollHelpers();
    UI.initScrollAnimations();
  },

  /**
   * Navbar and Mobile Menu Handling
   */
  initNavbar() {
    const navbar = document.querySelector(".navbar");
    const mobileToggle = document.getElementById("mobile-menu-toggle");
    const mobileDrawer = document.getElementById("mobile-drawer");
    const mobileClose = document.getElementById("mobile-drawer-close");
    const drawerLinks = document.querySelectorAll(".drawer-nav-link");

    // Scroll effect
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }, { passive: true });

    // Open mobile drawer
    if (mobileToggle && mobileDrawer) {
      mobileToggle.addEventListener("click", () => {
        mobileDrawer.classList.add("open");
        document.body.classList.add("no-scroll");
        mobileToggle.setAttribute("aria-expanded", "true");
      });
    }

    // Close mobile drawer
    const closeDrawer = () => {
      if (mobileDrawer) {
        mobileDrawer.classList.remove("open");
        document.body.classList.remove("no-scroll");
        if (mobileToggle) mobileToggle.setAttribute("aria-expanded", "false");
      }
    };

    if (mobileClose) mobileClose.addEventListener("click", closeDrawer);
    drawerLinks.forEach(link => link.addEventListener("click", closeDrawer));

    // Close on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileDrawer && mobileDrawer.classList.contains("open")) {
        closeDrawer();
      }
    });
  },

  /**
   * Quick Search / Trip Planner Bar in Hero Section
   */
  initHeroSearch() {
    SearchEngine.initAutocomplete();

    // Stepper for Travelers count
    const btnMinus = document.getElementById("travelers-minus");
    const btnPlus = document.getElementById("travelers-plus");
    const countDisplay = document.getElementById("travelers-count");
    const typeSelect = document.getElementById("travelers-type");

    let count = 2;

    if (btnMinus && btnPlus && countDisplay) {
      btnMinus.addEventListener("click", () => {
        if (count > 1) {
          count--;
          countDisplay.textContent = count;
          SearchEngine.state.travelerCount = count;
          if (count === 1 && typeSelect) typeSelect.value = "solo";
          SearchEngine.executeFilter();
        }
      });

      btnPlus.addEventListener("click", () => {
        if (count < 10) {
          count++;
          countDisplay.textContent = count;
          SearchEngine.state.travelerCount = count;
          if (count > 2 && typeSelect && typeSelect.value === "solo") {
            typeSelect.value = "friends";
          }
          SearchEngine.executeFilter();
        }
      });
    }

    if (typeSelect) {
      typeSelect.addEventListener("change", (e) => {
        SearchEngine.state.travelerType = e.target.value;
        SearchEngine.executeFilter();
      });
    }

    // Hero quick search form submit
    const heroForm = document.getElementById("hero-search-form");
    if (heroForm) {
      heroForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const searchInput = document.getElementById("search-input");
        const budgetSelect = document.getElementById("filter-budget");

        if (searchInput) SearchEngine.state.query = searchInput.value.trim();
        if (budgetSelect) SearchEngine.state.selectedBudget = budgetSelect.value;

        SearchEngine.executeFilter();

        // Smooth scroll to results
        const escapesSection = document.getElementById("escapes-section");
        if (escapesSection) {
          escapesSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  },

  /**
   * "Pick your vibe" preference selector
   */
  initVibeSelector() {
    const vibeGrid = document.getElementById("vibe-selector-grid");
    if (!vibeGrid || typeof ESCAPE_DATA === "undefined") return;

    vibeGrid.innerHTML = ESCAPE_DATA.categories.map(cat => `
      <button type="button" class="vibe-card" data-category="${cat.id}" aria-pressed="false">
        <span class="vibe-icon">${cat.icon}</span>
        <span class="vibe-title">${cat.label}</span>
        <span class="vibe-desc">${cat.desc}</span>
        <span class="vibe-check" aria-hidden="true">✓</span>
      </button>
    `).join("");

    vibeGrid.querySelectorAll(".vibe-card").forEach(card => {
      card.addEventListener("click", () => {
        const cat = card.getAttribute("data-category");
        const isSelected = card.classList.toggle("selected");
        card.setAttribute("aria-pressed", isSelected ? "true" : "false");

        if (isSelected) {
          if (!SearchEngine.state.selectedCategories.includes(cat)) {
            SearchEngine.state.selectedCategories.push(cat);
          }
        } else {
          SearchEngine.state.selectedCategories = SearchEngine.state.selectedCategories.filter(c => c !== cat);
        }

        SearchEngine.executeFilter();
      });
    });

    // "Show all getaways" button in vibe section
    const btnVibeExplore = document.getElementById("btn-vibe-explore");
    if (btnVibeExplore) {
      btnVibeExplore.addEventListener("click", () => {
        const section = document.getElementById("escapes-section");
        if (section) section.scrollIntoView({ behavior: "smooth" });
      });
    }
  },

  /**
   * Filter controls bar above results grid
   */
  initFilterControls() {
    // Budget select filter
    const budgetSelect = document.getElementById("filter-budget");
    if (budgetSelect) {
      budgetSelect.addEventListener("change", (e) => {
        SearchEngine.state.selectedBudget = e.target.value;
        SearchEngine.executeFilter();
      });
    }

    // Duration select filter
    const durationSelect = document.getElementById("filter-duration");
    if (durationSelect) {
      durationSelect.addEventListener("change", (e) => {
        SearchEngine.state.selectedDuration = e.target.value;
        SearchEngine.executeFilter();
      });
    }

    // Sort select
    const sortSelect = document.getElementById("sort-by");
    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        SearchEngine.state.sortBy = e.target.value;
        SearchEngine.executeFilter();
      });
    }

    // Reset button
    const resetBtn = document.getElementById("btn-reset-filters");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        SearchEngine.resetAllFilters();
      });
    }

    // Initial render of main escapes
    SearchEngine.restoreState();
    SearchEngine.executeFilter();
  },

  /**
   * Curated Collections: Under 10k, Quick escapes, Hidden gems
   */
  initCuratedCollections() {
    if (typeof ESCAPE_DATA === "undefined") return;

    // 1. Under ₹10K Collection
    const under10kContainer = document.getElementById("under-10k-grid");
    if (under10kContainer) {
      const under10k = ESCAPE_DATA.destinations.filter(d => d.basePrice <= 10000);
      under10kContainer.innerHTML = under10k.map(item => this.renderCompactCardHTML(item)).join("");
    }

    // 2. Quick Weekend Escapes (1-2 Days)
    const quickContainer = document.getElementById("quick-escapes-grid");
    if (quickContainer) {
      const quick = ESCAPE_DATA.destinations.filter(d => d.durationDays <= 2);
      quickContainer.innerHTML = quick.map(item => this.renderCompactCardHTML(item)).join("");
    }

    // 3. Hidden Gems (Editorial style)
    const gemsContainer = document.getElementById("hidden-gems-grid");
    if (gemsContainer) {
      const gems = ESCAPE_DATA.destinations.filter(d => d.isHiddenGem || d.basePrice < 6000);
      gemsContainer.innerHTML = gems.slice(0, 3).map(item => `
        <article class="gem-editorial-card hover-lift">
          <div class="gem-media img-zoom-wrapper">
            <img src="${item.image}" alt="${item.name}" loading="lazy" width="600" height="350" />
            <span class="gem-badge">Hidden Gem</span>
          </div>
          <div class="gem-content">
            <div class="gem-header">
              <span class="gem-location">📍 ${item.state}</span>
              <span class="gem-duration">⏱️ ${item.duration}</span>
            </div>
            <h3 class="gem-title">${item.name}</h3>
            <p class="gem-desc">${item.shortDescription}</p>
            <div class="gem-footer">
              <span class="gem-price">From ${UI.formatCurrency(item.basePrice)}</span>
              <a href="destination.html?id=${item.id}" class="btn btn-outline btn-sm">
                Discover Secret
                <svg viewBox="0 0 20 20" fill="currentColor" class="btn-arrow" aria-hidden="true"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
              </a>
            </div>
          </div>
        </article>
      `).join("");
    }
  },

  /**
   * Compact card for horizontal carousels
   */
  renderCompactCardHTML(item) {
    const isFav = FavoritesManager.isFavorite(item.id);
    return `
      <div class="compact-card hover-lift" data-id="${item.id}">
        <div class="compact-media img-zoom-wrapper">
          <img src="${item.image}" alt="${item.name}" loading="lazy" width="300" height="190" />
          <span class="compact-price-pill">${UI.formatCurrency(item.basePrice)}</span>
          <button 
            type="button" 
            class="fav-btn fav-btn-sm ${isFav ? "active" : ""}" 
            data-id="${item.id}"
            aria-label="${isFav ? "Remove from favorites" : "Save to favorites"}"
          >
            <svg class="heart-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          </button>
        </div>
        <div class="compact-body">
          <div class="compact-header">
            <h4 class="compact-title">${item.name}</h4>
            <span class="compact-rating">★ ${item.rating.toFixed(1)}</span>
          </div>
          <span class="compact-meta">📍 ${item.state} · ${item.duration}</span>
          <a href="destination.html?id=${item.id}" class="compact-link">Explore getaway →</a>
        </div>
      </div>
    `;
  },

  /**
   * Mock Newsletter Subscription
   */
  initNewsletter() {
    const form = document.getElementById("newsletter-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("newsletter-email");
      if (input && input.value.includes("@")) {
        UI.showToast(`🎉 You're in! Fresh weekend getaways will arrive in your inbox.`, "success");
        input.value = "";
      } else {
        UI.showToast("Please enter a valid email address.", "error");
      }
    });
  },

  /**
   * Scroll-to-top and smooth anchor helpers
   */
  initScrollHelpers() {
    const btnTop = document.getElementById("btn-scroll-top");
    if (btnTop) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
          btnTop.classList.add("visible");
        } else {
          btnTop.classList.remove("visible");
        }
      }, { passive: true });

      btnTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    // Smooth scroll for internal hash links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        if (targetId === "#") return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }
};

window.App = App;
