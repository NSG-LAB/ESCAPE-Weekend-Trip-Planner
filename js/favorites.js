/**
 * ESCAPE — Favorites Manager (localStorage based)
 */

const FavoritesManager = {
  STORAGE_KEY: "escape_favorite_trips",

  /**
   * Get list of saved destination IDs
   */
  getFavoriteIds() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error("Failed to read favorites from localStorage", e);
      return [];
    }
  },

  /**
   * Check if a destination is saved
   */
  isFavorite(id) {
    const favorites = this.getFavoriteIds();
    return favorites.includes(id);
  },

  /**
   * Toggle favorite state for a destination
   */
  toggleFavorite(id) {
    let favorites = this.getFavoriteIds();
    const index = favorites.indexOf(id);
    let isAdded = false;

    if (index > -1) {
      favorites.splice(index, 1);
      isAdded = false;
    } else {
      favorites.push(id);
      isAdded = true;
    }

    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(favorites));
    } catch (e) {
      console.error("Failed to save favorites to localStorage", e);
    }

    this.updateBadges();
    this.updateHeartButtons(id, isAdded);

    const dest = typeof ESCAPE_DATA !== "undefined" 
      ? ESCAPE_DATA.destinations.find(d => d.id === id) 
      : null;
    const destName = dest ? dest.name : "Destination";

    if (isAdded) {
      UI.showToast(`Saved <strong>${destName}</strong> to your favorites!`, "success");
    } else {
      UI.showToast(`Removed <strong>${destName}</strong> from favorites.`, "info");
    }

    // Dispatch global custom event for other pages or listeners
    window.dispatchEvent(new CustomEvent("escape:favorites-changed", {
      detail: { id, isAdded, count: favorites.length }
    }));

    return isAdded;
  },

  /**
   * Remove a favorite directly
   */
  removeFavorite(id) {
    let favorites = this.getFavoriteIds();
    const index = favorites.indexOf(id);
    if (index > -1) {
      favorites.splice(index, 1);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(favorites));
      this.updateBadges();
      this.updateHeartButtons(id, false);

      const dest = typeof ESCAPE_DATA !== "undefined" 
        ? ESCAPE_DATA.destinations.find(d => d.id === id) 
        : null;
      const destName = dest ? dest.name : "Destination";
      UI.showToast(`Removed <strong>${destName}</strong> from favorites.`, "info");

      window.dispatchEvent(new CustomEvent("escape:favorites-changed", {
        detail: { id, isAdded: false, count: favorites.length }
      }));
    }
  },

  /**
   * Clear all saved favorites
   */
  clearAll() {
    localStorage.removeItem(this.STORAGE_KEY);
    this.updateBadges();
    document.querySelectorAll(".fav-btn").forEach(btn => {
      btn.classList.remove("active");
      btn.setAttribute("aria-pressed", "false");
      btn.setAttribute("title", "Save to favorites");
    });
    UI.showToast("All saved trips have been cleared.", "info");

    window.dispatchEvent(new CustomEvent("escape:favorites-changed", {
      detail: { count: 0, cleared: true }
    }));
  },

  /**
   * Get full destination objects for all saved favorites
   */
  getFavoriteDestinations() {
    if (typeof ESCAPE_DATA === "undefined") return [];
    const ids = this.getFavoriteIds();
    return ESCAPE_DATA.destinations.filter(d => ids.includes(d.id));
  },

  /**
   * Update all badge counters across the page (navbar & drawer)
   */
  updateBadges() {
    const count = this.getFavoriteIds().length;
    document.querySelectorAll(".fav-counter-badge").forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? "inline-flex" : "none";
    });
  },

  /**
   * Update heart button UI state
   */
  updateHeartButtons(id, isFavorited) {
    document.querySelectorAll(`.fav-btn[data-id="${id}"]`).forEach(btn => {
      if (isFavorited) {
        btn.classList.add("active");
        btn.setAttribute("aria-pressed", "true");
        btn.setAttribute("title", "Remove from favorites");
        btn.classList.add("anim-heartbeat");
        setTimeout(() => btn.classList.remove("anim-heartbeat"), 600);
      } else {
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
        btn.setAttribute("title", "Save to favorites");
      }
    });
  },

  /**
   * Initialize favorite buttons across the DOM
   */
  init() {
    this.updateBadges();

    // Event delegation for favorite buttons
    document.addEventListener("click", (e) => {
      const favBtn = e.target.closest(".fav-btn");
      if (favBtn) {
        e.preventDefault();
        e.stopPropagation();
        const id = favBtn.getAttribute("data-id");
        if (id) {
          this.toggleFavorite(id);
        }
      }
    });
  }
};

window.FavoritesManager = FavoritesManager;
