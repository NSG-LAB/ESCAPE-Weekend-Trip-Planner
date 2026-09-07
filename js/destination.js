/**
 * ESCAPE — Destination Detail Page Controller
 */

const DestinationController = {
  currentDestination: null,
  currentTravelerType: "couple",

  /**
   * Parse ID from URL query parameters
   */
  getDestinationIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
  },

  /**
   * Initialize the page
   */
  init() {
    const id = this.getDestinationIdFromUrl();
    if (!id || typeof ESCAPE_DATA === "undefined") {
      this.renderNotFound();
      return;
    }

    const destination = ESCAPE_DATA.destinations.find(d => d.id.toLowerCase() === id.toLowerCase());
    if (!destination) {
      this.renderNotFound();
      return;
    }

    this.currentDestination = destination;
    this.renderPage();
    this.initTabs();
    this.initBudgetCalculator();
    this.initShareModal();
    FavoritesManager.init();
  },

  /**
   * Render 404 Not Found state
   */
  renderNotFound() {
    const main = document.getElementById("destination-detail-app");
    if (!main) return;

    main.innerHTML = `
      <div class="not-found-container container">
        <div class="not-found-card">
          <div class="not-found-icon">🗺️</div>
          <h1>Destination Not Found</h1>
          <p>We couldn't find the weekend getaway you were looking for. It might have moved or the link is incorrect.</p>
          <a href="index.html#escapes-section" class="btn btn-primary">
            <svg viewBox="0 0 20 20" fill="currentColor" class="btn-arrow-left" aria-hidden="true"><path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"/></svg>
            Browse All Escapes
          </a>
        </div>
      </div>
    `;
  },

  /**
   * Render complete destination detail page
   */
  renderPage() {
    const dest = this.currentDestination;
    document.title = `${dest.name} Weekend Trip Plan — ESCAPE`;

    // 1. Hero Section
    const heroBg = document.getElementById("dest-hero-bg");
    if (heroBg) heroBg.style.backgroundImage = `url('${dest.image}')`;

    const titleEl = document.getElementById("dest-title");
    if (titleEl) titleEl.textContent = dest.name;

    const taglineEl = document.getElementById("dest-tagline");
    if (taglineEl) taglineEl.textContent = dest.tagline;

    const locationEl = document.getElementById("dest-location");
    if (locationEl) locationEl.textContent = `${dest.state}, India`;

    const durationEl = document.getElementById("dest-duration");
    if (durationEl) durationEl.textContent = dest.duration;

    const bestTimeEl = document.getElementById("dest-best-time");
    if (bestTimeEl) bestTimeEl.textContent = dest.bestTimeToVisit;

    const priceEl = document.getElementById("dest-starting-price");
    if (priceEl) priceEl.textContent = UI.formatCurrency(dest.basePrice);

    // Rating in hero
    const ratingContainer = document.getElementById("dest-rating-stars");
    if (ratingContainer) {
      ratingContainer.innerHTML = `
        ${UI.createRatingStars(dest.rating)}
        <span class="rating-count">(${dest.reviewCount} verified reviews)</span>
      `;
    }

    // Category Tags
    const tagsContainer = document.getElementById("dest-category-tags");
    if (tagsContainer) {
      tagsContainer.innerHTML = dest.categories.map(cat => `
        <span class="dest-badge badge-${cat.toLowerCase()}">${cat}</span>
      `).join("");
    }

    // Favorite Button in Hero
    const favBtn = document.getElementById("dest-hero-fav-btn");
    if (favBtn) {
      favBtn.setAttribute("data-id", dest.id);
      const isFav = FavoritesManager.isFavorite(dest.id);
      if (isFav) {
        favBtn.classList.add("active");
        favBtn.setAttribute("aria-pressed", "true");
      }
    }

    // 2. Overview Tab Content
    const fullDescEl = document.getElementById("dest-full-desc");
    if (fullDescEl) fullDescEl.textContent = dest.fullDescription;

    const highlightsList = document.getElementById("dest-highlights-list");
    if (highlightsList) {
      highlightsList.innerHTML = dest.highlights.map(h => `
        <li class="highlight-item">
          <svg class="check-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>${h}</span>
        </li>
      `).join("");
    }

    const idealForList = document.getElementById("dest-ideal-for");
    if (idealForList) {
      idealForList.innerHTML = dest.idealFor.map(item => `
        <span class="ideal-chip">${item}</span>
      `).join("");
    }

    const activitiesGrid = document.getElementById("dest-activities-grid");
    if (activitiesGrid) {
      activitiesGrid.innerHTML = dest.activities.map(act => `
        <div class="activity-card">
          <div class="activity-icon-box">${act.icon}</div>
          <div class="activity-details">
            <h4 class="activity-name">${act.name}</h4>
            <div class="activity-meta">
              <span class="act-duration">⏱️ ${act.duration}</span>
              <span class="act-cost">🎟️ ${UI.formatCurrency(act.cost)}</span>
            </div>
          </div>
        </div>
      `).join("");
    }

    // 3. Itinerary Tab Content
    this.renderItinerary();

    // 4. Budget Tab Content
    this.renderBudgetBreakdown();

    // 5. Reviews Tab Content
    this.renderReviews();

    // 6. Sticky Sidebar Summary
    this.renderSidebarSummary();
  },

  /**
   * Render Day-by-Day Itinerary timeline
   */
  renderItinerary() {
    const container = document.getElementById("itinerary-timeline");
    if (!container) return;

    const dest = this.currentDestination;
    container.innerHTML = dest.itinerary.map(day => `
      <section class="itinerary-day-card" aria-labelledby="day-${day.day}-heading">
        <div class="day-header">
          <span class="day-badge">Day ${day.day}</span>
          <h3 id="day-${day.day}-heading" class="day-title">${day.title}</h3>
        </div>

        <div class="day-slots">
          <!-- Morning Slot -->
          <div class="slot-item">
            <div class="slot-marker slot-morning">
              <span class="slot-icon">🌅</span>
              <span class="slot-time">${day.morning.time}</span>
            </div>
            <div class="slot-content">
              <h4 class="slot-title">${day.morning.title}</h4>
              <p class="slot-desc">${day.morning.desc}</p>
            </div>
          </div>

          <!-- Afternoon Slot -->
          <div class="slot-item">
            <div class="slot-marker slot-afternoon">
              <span class="slot-icon">☀️</span>
              <span class="slot-time">${day.afternoon.time}</span>
            </div>
            <div class="slot-content">
              <h4 class="slot-title">${day.afternoon.title}</h4>
              <p class="slot-desc">${day.afternoon.desc}</p>
            </div>
          </div>

          <!-- Evening Slot -->
          <div class="slot-item">
            <div class="slot-marker slot-evening">
              <span class="slot-icon">🌙</span>
              <span class="slot-time">${day.evening.time}</span>
            </div>
            <div class="slot-content">
              <h4 class="slot-title">${day.evening.title}</h4>
              <p class="slot-desc">${day.evening.desc}</p>
            </div>
          </div>
        </div>
      </section>
    `).join("");
  },

  /**
   * Render Interactive Mock Budget Breakdown
   */
  renderBudgetBreakdown() {
    const dest = this.currentDestination;
    const typeObj = ESCAPE_DATA.travelerTypes.find(t => t.id === this.currentTravelerType) || ESCAPE_DATA.travelerTypes[1];
    const mult = typeObj.multiplier;

    const breakdown = {
      accommodation: Math.round(dest.budgetBreakdown.accommodation * mult),
      food: Math.round(dest.budgetBreakdown.food * mult),
      transportation: Math.round(dest.budgetBreakdown.transportation * mult),
      activities: Math.round(dest.budgetBreakdown.activities * mult)
    };

    const total = breakdown.accommodation + breakdown.food + breakdown.transportation + breakdown.activities;

    // Percentages for bar chart
    const pAcc = Math.round((breakdown.accommodation / total) * 100);
    const pFood = Math.round((breakdown.food / total) * 100);
    const pTrans = Math.round((breakdown.transportation / total) * 100);
    const pAct = 100 - pAcc - pFood - pTrans;

    const budgetDisplay = document.getElementById("budget-breakdown-container");
    if (!budgetDisplay) return;

    budgetDisplay.innerHTML = `
      <div class="budget-card">
        <div class="budget-header-box">
          <div class="budget-headline">
            <h3>Estimated Weekend Budget</h3>
            <p>Calculated mock estimate for <strong>${typeObj.label} (${typeObj.desc})</strong></p>
          </div>
          <div class="budget-total-box">
            <span class="total-label">Total Estimated Trip Cost</span>
            <span class="total-amount">${UI.formatCurrency(total)}</span>
            <span class="total-sub">All-inclusive mock weekend estimate</span>
          </div>
        </div>

        <!-- Stacked Percentage Bar -->
        <div class="budget-stacked-bar" role="progressbar" aria-valuenow="${total}" aria-valuemin="0" aria-valuemax="${total}">
          <div class="bar-segment bar-acc" style="width: ${pAcc}%" title="Accommodation: ${pAcc}%"></div>
          <div class="bar-segment bar-food" style="width: ${pFood}%" title="Food & Dining: ${pFood}%"></div>
          <div class="bar-segment bar-trans" style="width: ${pTrans}%" title="Transport: ${pTrans}%"></div>
          <div class="bar-segment bar-act" style="width: ${pAct}%" title="Activities & Sightseeing: ${pAct}%"></div>
        </div>

        <!-- Breakdown List -->
        <div class="budget-items-grid">
          <div class="budget-item">
            <div class="item-icon-box item-acc">🏨</div>
            <div class="item-info">
              <span class="item-title">Accommodation (${dest.duration})</span>
              <span class="item-percent">${pAcc}% of budget</span>
            </div>
            <span class="item-cost">${UI.formatCurrency(breakdown.accommodation)}</span>
          </div>

          <div class="budget-item">
            <div class="item-icon-box item-food">🍜</div>
            <div class="item-info">
              <span class="item-title">Food & Dining</span>
              <span class="item-percent">${pFood}% of budget</span>
            </div>
            <span class="item-cost">${UI.formatCurrency(breakdown.food)}</span>
          </div>

          <div class="budget-item">
            <div class="item-icon-box item-trans">🚗</div>
            <div class="item-info">
              <span class="item-title">Local Transport & Fuel</span>
              <span class="item-percent">${pTrans}% of budget</span>
            </div>
            <span class="item-cost">${UI.formatCurrency(breakdown.transportation)}</span>
          </div>

          <div class="budget-item">
            <div class="item-icon-box item-act">🎟️</div>
            <div class="item-info">
              <span class="item-title">Activities & Entry Fees</span>
              <span class="item-percent">${pAct}% of budget</span>
            </div>
            <span class="item-cost">${UI.formatCurrency(breakdown.activities)}</span>
          </div>
        </div>

        <div class="budget-tip-banner">
          <span class="tip-icon">💡</span>
          <p><strong>Pro-tip:</strong> Sharing homestays or booking 10 days in advance usually saves 15–20% on the accommodation costs in ${dest.name}.</p>
        </div>
      </div>
    `;
  },

  /**
   * Render Reviews tab
   */
  renderReviews() {
    const dest = this.currentDestination;
    const container = document.getElementById("reviews-container");
    if (!container) return;

    container.innerHTML = `
      <div class="reviews-summary-card">
        <div class="reviews-score-block">
          <span class="big-score">${dest.rating.toFixed(1)}</span>
          <div class="score-stars">
            ${UI.createRatingStars(dest.rating)}
          </div>
          <span class="verified-label">Based on ${dest.reviewCount} traveler reviews</span>
        </div>
        <div class="review-highlights-block">
          <h4>Why travelers love this trip</h4>
          <ul class="pros-list">
            <li>✨ Outstanding local cuisine and hospitality</li>
            <li>🌿 Scenic, uncrowded morning trails</li>
            <li>⏱️ Highly manageable 48-hour itinerary</li>
          </ul>
        </div>
      </div>

      <div class="reviews-list">
        ${dest.reviews.map(rev => `
          <div class="review-card">
            <div class="review-card-header">
              <div class="reviewer-avatar">${rev.author.charAt(0)}</div>
              <div class="reviewer-meta">
                <span class="reviewer-name">${rev.author}</span>
                <span class="reviewer-location">📍 ${rev.location} · ${rev.date}</span>
              </div>
              <div class="review-stars">
                ${UI.createRatingStars(rev.rating)}
              </div>
            </div>
            <p class="review-comment">"${rev.comment}"</p>
          </div>
        `).join("")}
      </div>
    `;
  },

  /**
   * Render Sticky Sidebar card summary
   */
  renderSidebarSummary() {
    const dest = this.currentDestination;
    const typeObj = ESCAPE_DATA.travelerTypes.find(t => t.id === this.currentTravelerType) || ESCAPE_DATA.travelerTypes[1];
    const total = Math.round(dest.basePrice * typeObj.multiplier);

    const priceSidebar = document.getElementById("sidebar-price-total");
    if (priceSidebar) priceSidebar.textContent = UI.formatCurrency(total);

    const btnSave = document.getElementById("btn-sidebar-save");
    if (btnSave) {
      btnSave.setAttribute("data-id", dest.id);
      const isFav = FavoritesManager.isFavorite(dest.id);
      btnSave.innerHTML = isFav 
        ? `❤️ Saved in Favorites` 
        : `🤍 Save Trip Plan`;
      btnSave.classList.toggle("btn-active", isFav);
    }
  },

  /**
   * Tab Switching Logic
   */
  initTabs() {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabPanels = document.querySelectorAll(".tab-panel");

    tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const targetTab = btn.getAttribute("data-tab");

        tabButtons.forEach(b => {
          b.classList.remove("active");
          b.setAttribute("aria-selected", "false");
        });
        tabPanels.forEach(p => {
          p.classList.remove("active");
          p.hidden = true;
        });

        btn.classList.add("active");
        btn.setAttribute("aria-selected", "true");

        const activePanel = document.getElementById(`tab-panel-${targetTab}`);
        if (activePanel) {
          activePanel.classList.add("active");
          activePanel.hidden = false;
        }
      });
    });
  },

  /**
   * Budget Traveler Selector Tabs
   */
  initBudgetCalculator() {
    const travelerBtns = document.querySelectorAll(".budget-traveler-btn");
    travelerBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        travelerBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.currentTravelerType = btn.getAttribute("data-type");
        this.renderBudgetBreakdown();
        this.renderSidebarSummary();
      });
    });
  },

  /**
   * Share Dialog / Modal
   */
  initShareModal() {
    const shareBtns = document.querySelectorAll(".btn-share-trip");
    shareBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        if (navigator.share) {
          navigator.share({
            title: `${this.currentDestination.name} Weekend Escape`,
            text: `Check out this weekend trip plan to ${this.currentDestination.name}!`,
            url: window.location.href
          }).catch(() => {});
        } else {
          navigator.clipboard.writeText(window.location.href).then(() => {
            UI.showToast("Trip link copied to clipboard!", "success");
          }).catch(() => {
            UI.showToast("Copy URL from address bar to share.", "info");
          });
        }
      });
    });

    const bookBtns = document.querySelectorAll(".btn-mock-book");
    bookBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        UI.showToast("✨ Mock Booking simulated! Enjoy your weekend adventure.", "success", 4000);
      });
    });
  }
};

window.DestinationController = DestinationController;
