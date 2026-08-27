/**
 * FEASTHUB - ULTRA-PREMIUM FOOD DELIVERY PLATFORM JAVASCRIPT ENGINE
 */

// ==========================================
// 1. DATA REPOSITORY: DISHES & RESTAURANTS
// ==========================================

const CATEGORIES = [
  { id: 'all', name: 'All Cuisines', icon: '🍽️', count: 18 },
  { id: 'burgers', name: 'Gourmet Burgers', icon: '🍔', count: 4 },
  { id: 'biryani', name: 'Biryani & Desi', icon: '🍛', count: 4 },
  { id: 'pizza', name: 'Artisan Pizza', icon: '🍕', count: 3 },
  { id: 'asian', name: 'Asian Wok & Bowls', icon: '🍜', count: 3 },
  { id: 'desserts', name: 'Bakery & Sweets', icon: '🍰', count: 2 },
  { id: 'student', name: 'Campus Saver', icon: '🎓', count: 2 }
];

const RESTAURANTS = [
  {
    id: 'rest-1',
    name: "Sultan's Royal Biryani & Kebab",
    cuisine: "Hyderabadi, Kacchi & Mughlai",
    rating: 4.9,
    reviews: 1420,
    deliveryTime: "20-30 min",
    deliveryFee: "Free",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80",
    tags: ["Halal Certified", "Top Rated", "Campus Favorite"]
  },
  {
    id: 'rest-2',
    name: "Smash & Sizzle Burger Lab",
    cuisine: "Angus Beef, Crispy Chicken & Fries",
    rating: 4.8,
    reviews: 980,
    deliveryTime: "15-25 min",
    deliveryFee: "$1.49",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
    tags: ["Express 15m", "Gourmet", "Student Deal"]
  },
  {
    id: 'rest-3',
    name: "Napoli Wood-Fired Pizza Co.",
    cuisine: "Authentic Neapolitan, Calzone & Pasta",
    rating: 4.9,
    reviews: 1150,
    deliveryTime: "25-35 min",
    deliveryFee: "Free",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    tags: ["Wood-Fired", "Artisanal", "Pure Cheese"]
  },
  {
    id: 'rest-4',
    name: "Tokyo Wok & Noodle House",
    cuisine: "Ramen, Teriyaki, Dumplings & Bento",
    rating: 4.7,
    reviews: 730,
    deliveryTime: "20-30 min",
    deliveryFee: "$1.99",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
    tags: ["Fresh Broth", "Authentic Asian"]
  }
];

const DISHES = [
  {
    id: 'dish-1',
    title: 'Double Truffle Smash Angus Burger',
    restaurantId: 'rest-2',
    restaurantName: 'Smash & Sizzle Burger Lab',
    category: 'burgers',
    price: 9.99,
    originalPrice: 12.99,
    rating: 4.9,
    reviews: 420,
    time: '18m',
    calories: '680 kcal',
    halal: true,
    veg: false,
    studentDeal: true,
    hasOffer: true,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    description: 'Double 100% prime Angus beef patties with melted aged cheddar, caramelized onions, black truffle aioli, on a toasted brioche bun.',
    nutrition: ['680 Kcal', '42g Protein', '100% Angus']
  },
  {
    id: 'dish-2',
    title: 'Royal Kacchi Biryani with Mutton & Egg',
    restaurantId: 'rest-1',
    restaurantName: "Sultan's Royal Biryani & Kebab",
    category: 'biryani',
    price: 11.50,
    originalPrice: 14.00,
    rating: 5.0,
    reviews: 890,
    time: '20m',
    calories: '820 kcal',
    halal: true,
    veg: false,
    studentDeal: true,
    hasOffer: true,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
    description: 'Authentic Basmati rice slow-cooked with tender marinated mutton chunks, saffron milk, boiled egg, aloo bukhara and royal aromatic spices.',
    nutrition: ['820 Kcal', '48g Protein', 'Basmati Rice']
  },
  {
    id: 'dish-3',
    title: 'Truffle & Burrata Wood-Fired Margherita',
    restaurantId: 'rest-3',
    restaurantName: 'Napoli Wood-Fired Pizza Co.',
    category: 'pizza',
    price: 13.99,
    originalPrice: 16.50,
    rating: 4.9,
    reviews: 512,
    time: '22m',
    calories: '750 kcal',
    halal: true,
    veg: true,
    studentDeal: false,
    hasOffer: false,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80',
    description: '48-hour fermented sourdough crust, San Marzano tomato sauce, fresh creamy burrata, basil leaves and extra virgin olive oil.',
    nutrition: ['750 Kcal', 'Vegetarian', 'Sourdough']
  },
  {
    id: 'dish-4',
    title: 'Tokyo Spicy Chicken Tonkotsu Ramen',
    restaurantId: 'rest-4',
    restaurantName: 'Tokyo Wok & Noodle House',
    category: 'asian',
    price: 10.99,
    originalPrice: 13.50,
    rating: 4.8,
    reviews: 310,
    time: '20m',
    calories: '590 kcal',
    halal: true,
    veg: false,
    studentDeal: false,
    hasOffer: true,
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80',
    description: 'Rich 12-hour simmered chicken broth with artisanal hand-pulled noodles, soft-boiled marinated ajitsuke egg, nori and chili oil.',
    nutrition: ['590 Kcal', '34g Protein', 'Handcrafted']
  },
  {
    id: 'dish-5',
    title: 'Crispy Nashville Hot Chicken Burger',
    restaurantId: 'rest-2',
    restaurantName: 'Smash & Sizzle Burger Lab',
    category: 'burgers',
    price: 8.99,
    originalPrice: 10.99,
    rating: 4.7,
    reviews: 430,
    time: '15m',
    calories: '610 kcal',
    halal: true,
    veg: false,
    studentDeal: true,
    hasOffer: true,
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80',
    description: 'Crispy golden fried chicken thigh dipped in fiery Nashville cayenne glaze, topped with creamy dill coleslaw and pickles.',
    nutrition: ['610 Kcal', '38g Protein', 'Spicy Glaze']
  },
  {
    id: 'dish-6',
    title: 'Special Hyderabadi Chicken Dum Biryani',
    restaurantId: 'rest-1',
    restaurantName: "Sultan's Royal Biryani & Kebab",
    category: 'biryani',
    price: 8.50,
    originalPrice: 10.00,
    rating: 4.8,
    reviews: 720,
    time: '18m',
    calories: '710 kcal',
    halal: true,
    veg: false,
    studentDeal: true,
    hasOffer: true,
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80',
    description: 'Fragrant basmati rice layered with juicy marinated chicken thigh pieces, fresh mint, coriander and caramelized golden onions.',
    nutrition: ['710 Kcal', '40g Protein', 'Halal']
  },
  {
    id: 'dish-7',
    title: 'Smoked Pepperoni & Jalapeño Artisan Pizza',
    restaurantId: 'rest-3',
    restaurantName: 'Napoli Wood-Fired Pizza Co.',
    category: 'pizza',
    price: 12.99,
    originalPrice: 15.50,
    rating: 4.9,
    reviews: 640,
    time: '24m',
    calories: '810 kcal',
    halal: true,
    veg: false,
    studentDeal: false,
    hasOffer: false,
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80',
    description: 'Generously loaded with beef pepperoni, mozzarella di bufala, fresh jalapeños, hot honey drizzle on a blistered crust.',
    nutrition: ['810 Kcal', '36g Protein', 'Spicy']
  },
  {
    id: 'dish-8',
    title: 'Thai Basil Chicken Stir-Fry Wok Bowl',
    restaurantId: 'rest-4',
    restaurantName: 'Tokyo Wok & Noodle House',
    category: 'asian',
    price: 9.50,
    originalPrice: 11.50,
    rating: 4.7,
    reviews: 280,
    time: '18m',
    calories: '530 kcal',
    halal: true,
    veg: false,
    studentDeal: true,
    hasOffer: true,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
    description: 'Minced chicken wok-tossed with holy basil, garlic, bird’s eye chili, sweet soy sauce over steaming jasmine rice with a fried egg.',
    nutrition: ['530 Kcal', '32g Protein', 'Jasmine Rice']
  },
  {
    id: 'dish-9',
    title: 'Molten Belgian Chocolate Lava Cake',
    restaurantId: 'rest-2',
    restaurantName: 'Smash & Sizzle Burger Lab',
    category: 'desserts',
    price: 5.99,
    originalPrice: 7.50,
    rating: 4.9,
    reviews: 580,
    time: '15m',
    calories: '420 kcal',
    halal: true,
    veg: true,
    studentDeal: false,
    hasOffer: true,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80',
    description: 'Warm chocolate sponge with a luscious flowing dark Belgian chocolate core, served with vanilla bean ice cream scoop.',
    nutrition: ['420 Kcal', 'Vegetarian', 'Belgian Cocoa']
  },
  {
    id: 'dish-10',
    title: 'HSTU Campus Combo: Biryani + Cold Drink + Borhani',
    restaurantId: 'rest-1',
    restaurantName: "Sultan's Royal Biryani & Kebab",
    category: 'student',
    price: 7.99,
    originalPrice: 11.00,
    rating: 5.0,
    reviews: 950,
    time: '15m',
    calories: '860 kcal',
    halal: true,
    veg: false,
    studentDeal: true,
    hasOffer: true,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
    description: 'Special campus student subsidized meal: Full plate chicken biryani, chilled drink, spiced digestive borhani and salad.',
    nutrition: ['860 Kcal', 'Campus Saver', 'Full Combo']
  },
  {
    id: 'dish-11',
    title: 'Garden Fresh Avocado & Quinoa Protein Bowl',
    restaurantId: 'rest-4',
    restaurantName: 'Tokyo Wok & Noodle House',
    category: 'asian',
    price: 8.99,
    originalPrice: 10.50,
    rating: 4.8,
    reviews: 190,
    time: '16m',
    calories: '410 kcal',
    halal: true,
    veg: true,
    studentDeal: false,
    hasOffer: false,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
    description: 'Organic tricolor quinoa, sliced ripe avocado, edamame beans, roasted chickpeas, purple cabbage, and creamy tahini lemon dressing.',
    nutrition: ['410 Kcal', 'Vegan & Veg', 'High Fiber']
  },
  {
    id: 'dish-12',
    title: 'New York Baked Blueberry Cheesecake',
    restaurantId: 'rest-3',
    restaurantName: 'Napoli Wood-Fired Pizza Co.',
    category: 'desserts',
    price: 6.50,
    originalPrice: 8.00,
    rating: 4.9,
    reviews: 430,
    time: '15m',
    calories: '450 kcal',
    halal: true,
    veg: true,
    studentDeal: false,
    hasOffer: true,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80',
    description: 'Dense and creamy Philadelphia cheesecake on a crunchy graham cracker crust, crowned with wild blueberry compote.',
    nutrition: ['450 Kcal', 'Vegetarian', 'Real Berries']
  }
];

// ==========================================
// 2. APPLICATION STATE MANAGEMENT
// ==========================================

const state = {
  cart: JSON.parse(localStorage.getItem('feasthub_cart')) || [],
  favorites: JSON.parse(localStorage.getItem('feasthub_favs')) || [],
  selectedCategory: 'all',
  selectedFilter: 'all',
  sortBy: 'popular',
  searchQuery: '',
  appliedPromo: null,
  riderTip: 0,
  currentLocation: 'HSTU Campus, Dinajpur',
  
  // Customization modal temporary state
  activeModalDish: null,
  activeSize: { name: 'Regular', add: 0 },
  activeSpice: 'Mild',
  activeAddons: [],
  modalQty: 1,

  // Live order simulation
  currentOrder: null,
  trackingInterval: null
};

// ==========================================
// 3. INITIALIZATION & DOM HOOKS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderCategories();
  renderRestaurants();
  filterAndRenderDishes();
  updateCartUI();
  setupEventListeners();
  setupSearchAutocomplete();
});

function setupEventListeners() {
  // Theme Toggle
  document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);

  // Cart Drawer
  document.getElementById('cart-toggle-btn').addEventListener('click', openCartDrawer);
  document.getElementById('cart-drawer-close').addEventListener('click', closeCartDrawer);
  document.getElementById('cart-drawer-overlay').addEventListener('click', closeCartDrawer);

  // Customizer Modal
  document.getElementById('customizer-close-btn').addEventListener('click', () => closeModal('customizer-modal-overlay'));
  document.getElementById('customizer-modal-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'customizer-modal-overlay') closeModal('customizer-modal-overlay');
  });

  // Modal Qty Stepper
  document.getElementById('modal-qty-minus').addEventListener('click', () => {
    if (state.modalQty > 1) {
      state.modalQty--;
      updateModalTotal();
    }
  });
  document.getElementById('modal-qty-plus').addEventListener('click', () => {
    state.modalQty++;
    updateModalTotal();
  });

  // Add to cart from modal
  document.getElementById('modal-add-to-cart-btn').addEventListener('click', handleModalAddToCart);

  // Reset Filters Button
  document.getElementById('reset-all-filters-btn').addEventListener('click', () => {
    state.selectedCategory = 'all';
    state.selectedFilter = 'all';
    state.searchQuery = '';
    document.getElementById('global-search-input').value = '';
    renderCategories();
    updateFilterChipUI();
    filterAndRenderDishes();
    showToast('Filters reset to show all gourmet items');
  });

  // Filter Chips
  const filterChips = document.querySelectorAll('.filter-chip');
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.selectedFilter = chip.getAttribute('data-filter');
      filterAndRenderDishes();
    });
  });

  // Sort dropdown
  document.getElementById('sort-select').addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    filterAndRenderDishes();
  });

  // Promo copy chip on hero banner
  document.getElementById('promo-copy-banner').addEventListener('click', () => {
    navigator.clipboard.writeText('FEAST50');
    showToast('Coupon "FEAST50" copied to clipboard! 🎉');
  });

  // Claim Deal button
  document.getElementById('claim-deal-btn').addEventListener('click', () => {
    applyPromoCode('FEAST50');
    openCartDrawer();
  });

  // Tip buttons in Cart
  const tipBtns = document.querySelectorAll('.tip-btn');
  tipBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tipBtns.forEach(b => b.classList.remove('active', 'btn-primary'));
      tipBtns.forEach(b => b.classList.add('btn-secondary'));
      btn.classList.remove('btn-secondary');
      btn.classList.add('active', 'btn-primary');
      state.riderTip = parseFloat(btn.getAttribute('data-tip'));
      calculateCartTotals();
    });
  });

  // Promo code apply button
  document.getElementById('apply-promo-btn').addEventListener('click', () => {
    const input = document.getElementById('promo-code-input');
    applyPromoCode(input.value.trim());
  });

  // Checkout modal flow
  document.getElementById('proceed-checkout-btn').addEventListener('click', openCheckoutModal);
  document.getElementById('checkout-close-btn').addEventListener('click', () => closeModal('checkout-modal-overlay'));
  document.getElementById('checkout-modal-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'checkout-modal-overlay') closeModal('checkout-modal-overlay');
  });

  document.getElementById('btn-next-to-payment').addEventListener('click', proceedToPaymentStep);
  document.getElementById('btn-back-to-step1').addEventListener('click', backToDeliveryStep);
  document.getElementById('btn-place-order').addEventListener('click', handlePlaceOrder);

  // Payment method picker in Checkout
  const payCards = document.querySelectorAll('.payment-method-card');
  payCards.forEach(card => {
    card.addEventListener('click', () => {
      payCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      const method = card.getAttribute('data-method');
      const cardInputs = document.getElementById('card-inputs-area');
      if (method === 'card') {
        cardInputs.style.display = 'block';
      } else {
        cardInputs.style.display = 'none';
      }
    });
  });

  // Tracking Modal
  document.getElementById('tracking-close-btn').addEventListener('click', () => closeModal('tracking-modal-overlay'));
  document.getElementById('tracking-modal-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'tracking-modal-overlay') closeModal('tracking-modal-overlay');
  });

  // Location Picker
  document.getElementById('location-picker-btn').addEventListener('click', () => openModal('location-modal-overlay'));
  document.getElementById('location-close-btn').addEventListener('click', () => closeModal('location-modal-overlay'));
  document.getElementById('location-modal-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'location-modal-overlay') closeModal('location-modal-overlay');
  });

  const locOptions = document.querySelectorAll('#location-options-list .option-pill');
  locOptions.forEach(pill => {
    pill.addEventListener('click', () => {
      locOptions.forEach(p => p.classList.remove('selected'));
      pill.classList.add('selected');
      const newLoc = pill.getAttribute('data-loc');
      state.currentLocation = newLoc;
      document.getElementById('current-location-text').textContent = newLoc;
      document.getElementById('hero-address-input').value = newLoc;
      closeModal('location-modal-overlay');
      showToast(`Delivery location set to: ${newLoc}`);
    });
  });

  // Auth / User Modal
  document.getElementById('user-auth-btn').addEventListener('click', () => openModal('auth-modal-overlay'));
  document.getElementById('auth-close-btn').addEventListener('click', () => closeModal('auth-modal-overlay'));
  document.getElementById('auth-modal-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'auth-modal-overlay') closeModal('auth-modal-overlay');
  });

  // Hero search button
  document.getElementById('hero-find-food-btn').addEventListener('click', () => {
    document.getElementById('menu-section').scrollIntoView({ behavior: 'smooth' });
    showToast('Browsing delicious meals available near your location!');
  });
}

// ==========================================
// 4. THEME CONTROLLER
// ==========================================

function initTheme() {
  const savedTheme = localStorage.getItem('feasthub_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('feasthub_theme', next);
  updateThemeIcon(next);
  showToast(`Switched to ${next} mode`);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (theme === 'dark') {
    icon.className = 'fa-solid fa-sun';
  } else {
    icon.className = 'fa-solid fa-moon';
  }
}

// ==========================================
// 5. RENDERING: CATEGORIES & RESTAURANTS
// ==========================================

function renderCategories() {
  const container = document.getElementById('category-scroll-container');
  if (!container) return;

  container.innerHTML = CATEGORIES.map(cat => `
    <div class="category-card ${cat.id === state.selectedCategory ? 'active' : ''}" onclick="filterByCategory('${cat.id}')">
      <div class="category-icon-wrap">${cat.icon}</div>
      <span class="category-name">${cat.name}</span>
      <span class="category-items-count">${cat.count} items</span>
    </div>
  `).join('');
}

function filterByCategory(catId) {
  state.selectedCategory = catId;
  renderCategories();
  filterAndRenderDishes();
}

function renderRestaurants() {
  const container = document.getElementById('restaurants-grid');
  if (!container) return;

  container.innerHTML = RESTAURANTS.map(r => `
    <div class="restaurant-card" onclick="filterByRestaurant('${r.id}')">
      <div class="rest-banner-wrap">
        <img src="${r.image}" alt="${r.name}" class="rest-banner-img" loading="lazy">
        <div class="rest-time-badge">
          <i class="fa-solid fa-clock" style="color: var(--primary);"></i> ${r.deliveryTime}
        </div>
      </div>
      <div class="rest-body">
        <div class="rest-header">
          <h4 class="rest-title">${r.name}</h4>
          <div class="rest-rating-pill">
            ★ ${r.rating}
          </div>
        </div>
        <p class="rest-cuisines">${r.cuisine}</p>
        <div class="rest-perks-row">
          <span><i class="fa-solid fa-truck-fast"></i> ${r.deliveryFee === 'Free' ? 'Free Delivery' : r.deliveryFee}</span>
          <span><i class="fa-solid fa-comments"></i> ${r.reviews}+ ratings</span>
          <span><i class="fa-solid fa-shield-halved" style="color: var(--secondary);"></i> Verified Clean</span>
        </div>
      </div>
    </div>
  `).join('');
}

function filterByRestaurant(restId) {
  state.selectedCategory = 'all';
  state.selectedFilter = 'all';
  updateFilterChipUI();
  
  const filtered = DISHES.filter(d => d.restaurantId === restId);
  renderDishesGrid(filtered);
  document.getElementById('menu-section').scrollIntoView({ behavior: 'smooth' });
  showToast(`Showing dishes from ${filtered[0]?.restaurantName || 'selected kitchen'}`);
}

function updateFilterChipUI() {
  const filterChips = document.querySelectorAll('.filter-chip');
  filterChips.forEach(c => {
    if (c.getAttribute('data-filter') === state.selectedFilter) {
      c.classList.add('active');
    } else {
      c.classList.remove('active');
    }
  });
}

// ==========================================
// 6. FOOD DISHES FILTERING & RENDERING
// ==========================================

function filterAndRenderDishes() {
  let list = [...DISHES];

  // Category filter
  if (state.selectedCategory !== 'all') {
    list = list.filter(d => d.category === state.selectedCategory);
  }

  // Quick filter chips
  if (state.selectedFilter === 'halal') {
    list = list.filter(d => d.halal);
  } else if (state.selectedFilter === 'top-rated') {
    list = list.filter(d => d.rating >= 4.8);
  } else if (state.selectedFilter === 'fast') {
    list = list.filter(d => parseInt(d.time) <= 20);
  } else if (state.selectedFilter === 'student') {
    list = list.filter(d => d.studentDeal);
  } else if (state.selectedFilter === 'veg') {
    list = list.filter(d => d.veg);
  } else if (state.selectedFilter === 'offers') {
    list = list.filter(d => d.hasOffer);
  }

  // Search query
  if (state.searchQuery.trim() !== '') {
    const q = state.searchQuery.toLowerCase();
    list = list.filter(d => 
      d.title.toLowerCase().includes(q) ||
      d.description.toLowerCase().includes(q) ||
      d.restaurantName.toLowerCase().includes(q) ||
      d.category.toLowerCase().includes(q)
    );
  }

  // Sorting
  if (state.sortBy === 'rating') {
    list.sort((a, b) => b.rating - a.rating);
  } else if (state.sortBy === 'time') {
    list.sort((a, b) => parseInt(a.time) - parseInt(b.time));
  } else if (state.sortBy === 'price-asc') {
    list.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === 'price-desc') {
    list.sort((a, b) => b.price - a.price);
  } else {
    // Default: Popular (reviews count)
    list.sort((a, b) => b.reviews - a.reviews);
  }

  renderDishesGrid(list);
}

function renderDishesGrid(dishes) {
  const container = document.getElementById('food-grid');
  if (!container) return;

  if (dishes.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
        <i class="fa-solid fa-bowl-food" style="font-size: 3.5rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
        <h3>No delicious matches found</h3>
        <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Try adjusting your search terms or filters.</p>
        <button class="btn btn-primary" onclick="resetSearchAndFilters()">Show All Dishes</button>
      </div>
    `;
    return;
  }

  container.innerHTML = dishes.map(dish => {
    const isFav = state.favorites.includes(dish.id);
    const inCartQty = getCartItemQty(dish.id);

    return `
      <article class="dish-card" data-id="${dish.id}">
        <div class="dish-image-wrap">
          <img src="${dish.image}" alt="${dish.title}" class="dish-image" loading="lazy">
          
          <div class="dish-tag-badges">
            ${dish.hasOffer ? `<span class="badge badge-warning"><i class="fa-solid fa-tag"></i> Deal</span>` : ''}
            ${dish.studentDeal ? `<span class="badge badge-primary"><i class="fa-solid fa-graduation-cap"></i> Student Spec</span>` : ''}
            ${dish.veg ? `<span class="badge badge-success"><i class="fa-solid fa-leaf"></i> Veg</span>` : ''}
          </div>

          <button class="dish-fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite('${dish.id}', event)" title="Save to favorites">
            <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
          </button>
        </div>

        <div class="dish-body">
          <div class="dish-restaurant-meta">
            <span><i class="fa-solid fa-store"></i> ${dish.restaurantName}</span>
            <span class="dish-rating">★ ${dish.rating} (${dish.reviews})</span>
          </div>

          <h4 class="dish-title">${dish.title}</h4>
          <p class="dish-desc">${dish.description}</p>

          <div class="dish-meta-pills">
            <span><i class="fa-solid fa-clock"></i> ${dish.time}</span>
            <span><i class="fa-solid fa-fire"></i> ${dish.calories}</span>
            ${dish.halal ? `<span><i class="fa-solid fa-certificate" style="color: var(--secondary);"></i> Halal</span>` : ''}
          </div>

          <div class="dish-footer">
            <div class="dish-price-wrap">
              <span class="dish-price-current">$${dish.price.toFixed(2)}</span>
              ${dish.originalPrice ? `<span class="dish-price-original">$${dish.originalPrice.toFixed(2)}</span>` : ''}
            </div>

            <div class="dish-action-group">
              <button class="btn-customize-quick" onclick="openCustomizerModal('${dish.id}')" title="Customize portion, spice & toppings">
                <i class="fa-solid fa-sliders"></i> Option
              </button>

              ${inCartQty > 0 ? `
                <div class="card-qty-stepper">
                  <button onclick="updateCartItemQty('${dish.id}', -1, event)"><i class="fa-solid fa-minus"></i></button>
                  <span>${inCartQty}</span>
                  <button onclick="updateCartItemQty('${dish.id}', 1, event)"><i class="fa-solid fa-plus"></i></button>
                </div>
              ` : `
                <button class="btn-add-cart" onclick="quickAddToCart('${dish.id}')">
                  <i class="fa-solid fa-plus"></i> Add
                </button>
              `}
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function resetSearchAndFilters() {
  state.selectedCategory = 'all';
  state.selectedFilter = 'all';
  state.searchQuery = '';
  document.getElementById('global-search-input').value = '';
  renderCategories();
  updateFilterChipUI();
  filterAndRenderDishes();
}

// ==========================================
// 7. SEARCH & AUTOCOMPLETE
// ==========================================

function setupSearchAutocomplete() {
  const searchInput = document.getElementById('global-search-input');
  const dropdown = document.getElementById('search-suggestions-dropdown');
  const clearBtn = document.getElementById('search-clear-btn');

  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const val = e.target.value.trim();
    state.searchQuery = val;

    if (val.length > 0) {
      clearBtn.classList.add('active');
      const matches = DISHES.filter(d => 
        d.title.toLowerCase().includes(val.toLowerCase()) || 
        d.restaurantName.toLowerCase().includes(val.toLowerCase())
      ).slice(0, 5);

      if (matches.length > 0) {
        dropdown.innerHTML = matches.map(m => `
          <div class="suggestion-item" onclick="selectSearchSuggestion('${m.id}')">
            <img src="${m.image}" alt="${m.title}">
            <div style="flex: 1;">
              <h5 style="font-size: 0.88rem; font-weight: 700;">${m.title}</h5>
              <p style="font-size: 0.75rem; color: var(--text-muted);">${m.restaurantName} • $${m.price.toFixed(2)}</p>
            </div>
            <i class="fa-solid fa-arrow-right" style="color: var(--primary); font-size: 0.8rem;"></i>
          </div>
        `).join('');
        dropdown.classList.add('open');
      } else {
        dropdown.classList.remove('open');
      }
    } else {
      clearBtn.classList.remove('active');
      dropdown.classList.remove('open');
    }

    filterAndRenderDishes();
  });

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    state.searchQuery = '';
    clearBtn.classList.remove('active');
    dropdown.classList.remove('open');
    filterAndRenderDishes();
  });

  // Close suggestions if click outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#nav-search-wrapper')) {
      dropdown.classList.remove('open');
    }
  });
}

function selectSearchSuggestion(dishId) {
  const dropdown = document.getElementById('search-suggestions-dropdown');
  dropdown.classList.remove('open');
  openCustomizerModal(dishId);
}

// ==========================================
// 8. DISH CUSTOMIZER MODAL ENGINE
// ==========================================

function openCustomizerModal(dishId) {
  const dish = DISHES.find(d => d.id === dishId);
  if (!dish) return;

  state.activeModalDish = dish;
  state.activeSize = { name: 'Regular', add: 0 };
  state.activeSpice = 'Mild';
  state.activeAddons = [];
  state.modalQty = 1;

  document.getElementById('modal-dish-img').src = dish.image;
  document.getElementById('modal-dish-title').textContent = dish.title;
  document.getElementById('modal-dish-rest').textContent = dish.restaurantName;
  document.getElementById('modal-dish-desc').textContent = dish.description;
  document.getElementById('modal-dish-price').textContent = `$${dish.price.toFixed(2)}`;
  document.getElementById('modal-dish-notes').value = '';
  document.getElementById('modal-qty-val').textContent = '1';

  // Nutrition tags
  const nutContainer = document.getElementById('modal-nutrition-tags');
  nutContainer.innerHTML = dish.nutrition.map(n => `<span class="badge badge-primary">${n}</span>`).join('');

  // Reset portion size pills
  setupSizeOptions();
  setupSpiceOptions();
  setupAddonOptions();
  updateModalTotal();

  openModal('customizer-modal-overlay');
}

function setupSizeOptions() {
  const sizePills = document.querySelectorAll('#modal-size-options .option-pill');
  sizePills.forEach(pill => {
    pill.addEventListener('click', () => {
      sizePills.forEach(p => {
        p.classList.remove('selected');
        p.querySelector('i').className = 'fa-regular fa-circle';
      });
      pill.classList.add('selected');
      pill.querySelector('i').className = 'fa-regular fa-circle-dot';
      state.activeSize = {
        name: pill.getAttribute('data-size'),
        add: parseFloat(pill.getAttribute('data-add'))
      };
      updateModalTotal();
    });
  });
}

function setupSpiceOptions() {
  const spicePills = document.querySelectorAll('#modal-spice-options .option-pill');
  spicePills.forEach(pill => {
    pill.addEventListener('click', () => {
      spicePills.forEach(p => p.classList.remove('selected'));
      pill.classList.add('selected');
      state.activeSpice = pill.getAttribute('data-spice');
    });
  });
}

function setupAddonOptions() {
  const addonPills = document.querySelectorAll('#modal-addon-options .option-pill');
  addonPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const addonName = pill.getAttribute('data-addon');
      const addPrice = parseFloat(pill.getAttribute('data-add'));

      const index = state.activeAddons.findIndex(a => a.name === addonName);
      if (index > -1) {
        state.activeAddons.splice(index, 1);
        pill.classList.remove('selected');
        pill.querySelector('i').className = 'fa-regular fa-square';
      } else {
        state.activeAddons.push({ name: addonName, add: addPrice });
        pill.classList.add('selected');
        pill.querySelector('i').className = 'fa-solid fa-square-check';
      }
      updateModalTotal();
    });
  });
}

function updateModalTotal() {
  if (!state.activeModalDish) return;
  const base = state.activeModalDish.price;
  const sizeAdd = state.activeSize.add;
  const addonsAdd = state.activeAddons.reduce((sum, item) => sum + item.add, 0);

  const unitTotal = base + sizeAdd + addonsAdd;
  const grandTotal = unitTotal * state.modalQty;

  document.getElementById('modal-calculated-total').textContent = `$${grandTotal.toFixed(2)}`;
}

function handleModalAddToCart() {
  if (!state.activeModalDish) return;

  const dish = state.activeModalDish;
  const specialNotes = document.getElementById('modal-dish-notes').value.trim();

  const customKey = `${dish.id}-${state.activeSize.name}-${state.activeSpice}-${state.activeAddons.map(a => a.name).join('_')}`;
  const unitPrice = dish.price + state.activeSize.add + state.activeAddons.reduce((s, a) => s + a.add, 0);

  const existingIndex = state.cart.findIndex(i => i.customKey === customKey);

  if (existingIndex > -1) {
    state.cart[existingIndex].qty += state.modalQty;
  } else {
    state.cart.push({
      customKey,
      dishId: dish.id,
      title: dish.title,
      image: dish.image,
      restaurantName: dish.restaurantName,
      unitPrice: unitPrice,
      qty: state.modalQty,
      size: state.activeSize.name,
      spice: state.activeSpice,
      addons: state.activeAddons.map(a => a.name),
      notes: specialNotes
    });
  }

  saveCart();
  updateCartUI();
  filterAndRenderDishes();
  closeModal('customizer-modal-overlay');
  showToast(`Added ${state.modalQty}x ${dish.title} to cart!`);
}

// ==========================================
// 9. CART MANAGEMENT & LOGIC
// ==========================================

function quickAddToCart(dishId) {
  const dish = DISHES.find(d => d.id === dishId);
  if (!dish) return;

  const customKey = `${dish.id}-Regular-Mild-`;
  const existing = state.cart.find(i => i.customKey === customKey);

  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      customKey,
      dishId: dish.id,
      title: dish.title,
      image: dish.image,
      restaurantName: dish.restaurantName,
      unitPrice: dish.price,
      qty: 1,
      size: 'Regular',
      spice: 'Mild',
      addons: [],
      notes: ''
    });
  }

  saveCart();
  updateCartUI();
  filterAndRenderDishes();
  showToast(`Added ${dish.title} to cart!`);
}

function updateCartItemQty(dishId, delta, event) {
  if (event) event.stopPropagation();

  const itemIndex = state.cart.findIndex(i => i.dishId === dishId);
  if (itemIndex > -1) {
    state.cart[itemIndex].qty += delta;
    if (state.cart[itemIndex].qty <= 0) {
      state.cart.splice(itemIndex, 1);
    }
    saveCart();
    updateCartUI();
    filterAndRenderDishes();
  }
}

function updateDrawerItemQty(customKey, delta) {
  const index = state.cart.findIndex(i => i.customKey === customKey);
  if (index > -1) {
    state.cart[index].qty += delta;
    if (state.cart[index].qty <= 0) {
      state.cart.splice(index, 1);
    }
    saveCart();
    updateCartUI();
    filterAndRenderDishes();
  }
}

function getCartItemQty(dishId) {
  return state.cart
    .filter(i => i.dishId === dishId)
    .reduce((sum, i) => sum + i.qty, 0);
}

function saveCart() {
  localStorage.setItem('feasthub_cart', JSON.stringify(state.cart));
}

function updateCartUI() {
  const totalItems = state.cart.reduce((sum, i) => sum + i.qty, 0);
  const countBadge = document.getElementById('cart-badge-count');
  const drawerCount = document.getElementById('drawer-cart-count');

  if (countBadge) {
    countBadge.textContent = totalItems;
    countBadge.classList.add('bump');
    setTimeout(() => countBadge.classList.remove('bump'), 300);
  }
  if (drawerCount) drawerCount.textContent = totalItems;

  const itemsContainer = document.getElementById('cart-items-container');
  const cartFooter = document.getElementById('cart-footer');

  if (!itemsContainer) return;

  if (state.cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon"><i class="fa-solid fa-cart-shopping"></i></div>
        <h4>Your Cart is Empty</h4>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0.5rem 0 1.25rem;">Explore our delicious menu and add something special.</p>
        <button class="btn btn-primary btn-sm" onclick="closeCartDrawer(); document.getElementById('menu-section').scrollIntoView({behavior: 'smooth'})">Browse Dishes</button>
      </div>
    `;
    if (cartFooter) cartFooter.style.display = 'none';
    return;
  }

  if (cartFooter) cartFooter.style.display = 'block';

  itemsContainer.innerHTML = state.cart.map(item => `
    <div class="cart-item-row">
      <img src="${item.image}" alt="${item.title}" class="cart-item-img">
      <div class="cart-item-details">
        <div>
          <h5 class="cart-item-title">${item.title}</h5>
          <p class="cart-item-custom-notes">
            ${item.size} • ${item.spice}
            ${item.addons.length > 0 ? ` • +${item.addons.join(', ')}` : ''}
            ${item.notes ? ` • Note: "${item.notes}"` : ''}
          </p>
        </div>
        <div class="cart-item-actions">
          <span class="cart-item-price">$${(item.unitPrice * item.qty).toFixed(2)}</span>
          <div class="cart-stepper">
            <button onclick="updateDrawerItemQty('${item.customKey}', -1)"><i class="fa-solid fa-minus"></i></button>
            <span>${item.qty}</span>
            <button onclick="updateDrawerItemQty('${item.customKey}', 1)"><i class="fa-solid fa-plus"></i></button>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  calculateCartTotals();
}

function calculateCartTotals() {
  const subtotal = state.cart.reduce((sum, item) => sum + (item.unitPrice * item.qty), 0);
  let deliveryFee = subtotal > 0 ? 1.99 : 0;
  let discount = 0;

  // Promo code calculation
  if (state.appliedPromo === 'FEAST50') {
    discount = Math.min(subtotal * 0.5, 10.00); // 50% off up to $10
  } else if (state.appliedPromo === 'HSTUFREEDEL') {
    discount = deliveryFee;
    deliveryFee = 0;
  } else if (state.appliedPromo === 'SAVER20') {
    discount = subtotal * 0.2;
  }

  const tax = subtotal > 0 ? 0.75 : 0;
  const tip = state.riderTip;
  const total = Math.max(0, subtotal - discount + deliveryFee + tax + tip);

  document.getElementById('bill-subtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('bill-delivery').textContent = deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`;
  document.getElementById('bill-tax').textContent = `$${tax.toFixed(2)}`;
  document.getElementById('bill-tip').textContent = `$${tip.toFixed(2)}`;
  document.getElementById('bill-total').textContent = `$${total.toFixed(2)}`;

  const discountRow = document.getElementById('bill-discount-row');
  if (discount > 0) {
    discountRow.style.display = 'flex';
    document.getElementById('bill-discount').textContent = `-$${discount.toFixed(2)}`;
  } else {
    discountRow.style.display = 'none';
  }

  // Checkout modal amount
  const chkAmount = document.getElementById('checkout-final-amount');
  if (chkAmount) chkAmount.textContent = `$${total.toFixed(2)}`;

  return { subtotal, discount, deliveryFee, tax, tip, total };
}

function applyPromoCode(code) {
  const normalized = code.trim().toUpperCase();
  if (['FEAST50', 'HSTUFREEDEL', 'SAVER20'].includes(normalized)) {
    state.appliedPromo = normalized;
    document.getElementById('promo-code-input').value = normalized;
    calculateCartTotals();
    showToast(`Promo "${normalized}" applied successfully! 🎉`);
  } else if (normalized === '') {
    showToast('Please enter a valid coupon code.');
  } else {
    showToast(`Coupon "${code}" is invalid or expired.`);
  }
}

// ==========================================
// 10. CHECKOUT & LIVE ORDER SIMULATION
// ==========================================

function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast('Your cart is empty. Add food first!');
    return;
  }
  closeCartDrawer();
  openModal('checkout-modal-overlay');
  backToDeliveryStep();
}

function proceedToPaymentStep() {
  const name = document.getElementById('chk-name').value.trim();
  const phone = document.getElementById('chk-phone').value.trim();
  const address = document.getElementById('chk-address').value.trim();

  if (!name || !phone || !address) {
    showToast('Please fill in all delivery details.');
    return;
  }

  document.getElementById('checkout-step-1').style.display = 'none';
  document.getElementById('checkout-step-2').style.display = 'block';

  document.getElementById('chk-step-1-ind').classList.remove('active');
  document.getElementById('chk-step-2-ind').classList.add('active');
}

function backToDeliveryStep() {
  document.getElementById('checkout-step-1').style.display = 'block';
  document.getElementById('checkout-step-2').style.display = 'none';

  document.getElementById('chk-step-1-ind').classList.add('active');
  document.getElementById('chk-step-2-ind').classList.remove('active');
}

function handlePlaceOrder() {
  const totals = calculateCartTotals();
  const orderId = '#FH-' + Math.floor(10000 + Math.random() * 90000);

  state.currentOrder = {
    id: orderId,
    items: [...state.cart],
    total: totals.total,
    address: document.getElementById('chk-address').value,
    phone: document.getElementById('chk-phone').value,
    timestamp: new Date()
  };

  // Clear cart
  state.cart = [];
  state.appliedPromo = null;
  saveCart();
  updateCartUI();
  filterAndRenderDishes();

  closeModal('checkout-modal-overlay');
  startLiveOrderTracking(orderId);
}

function startLiveOrderTracking(orderId) {
  document.getElementById('live-order-id').textContent = orderId;
  openModal('tracking-modal-overlay');

  const step1 = document.getElementById('track-step-1');
  const step2 = document.getElementById('track-step-2');
  const step3 = document.getElementById('track-step-3');
  const step4 = document.getElementById('track-step-4');
  const etaText = document.getElementById('live-eta-countdown');

  // Reset steps
  step1.className = 'timeline-step completed';
  step2.className = 'timeline-step active';
  step3.className = 'timeline-step';
  step4.className = 'timeline-step';
  etaText.textContent = '18 mins';

  if (state.trackingInterval) clearInterval(state.trackingInterval);

  let mins = 18;
  state.trackingInterval = setInterval(() => {
    mins--;
    if (mins > 12) {
      etaText.textContent = `${mins} mins`;
      step2.className = 'timeline-step active';
    } else if (mins > 5) {
      etaText.textContent = `${mins} mins`;
      step2.className = 'timeline-step completed';
      step3.className = 'timeline-step active';
    } else if (mins > 0) {
      etaText.textContent = `${mins} mins`;
      step3.className = 'timeline-step completed';
      step4.className = 'timeline-step active';
    } else {
      etaText.textContent = 'Arrived!';
      step4.className = 'timeline-step completed';
      clearInterval(state.trackingInterval);
      showToast('🎉 Your rider has arrived at your door! Enjoy your feast!');
    }
  }, 3000); // 3-second simulation ticks

  showToast('Order confirmed! Tracking rider in real-time...');
}

function openTrackModal() {
  if (state.currentOrder) {
    openModal('tracking-modal-overlay');
  } else {
    startLiveOrderTracking('#FH-77291');
  }
}

function openPromoModal() {
  applyPromoCode('FEAST50');
  openCartDrawer();
}

// ==========================================
// 11. FAVORITES & UTILITIES
// ==========================================

function toggleFavorite(dishId, event) {
  if (event) event.stopPropagation();

  const idx = state.favorites.indexOf(dishId);
  if (idx > -1) {
    state.favorites.splice(idx, 1);
    showToast('Removed from favorites');
  } else {
    state.favorites.push(dishId);
    showToast('Added to your favorite cravings! ❤️');
  }

  localStorage.setItem('feasthub_favs', JSON.stringify(state.favorites));
  filterAndRenderDishes();
}

function handleNewsletter(event) {
  event.preventDefault();
  showToast('Thank you for subscribing! Check your email for a $5 voucher.');
  event.target.reset();
}

// Modal helpers
function openModal(id) {
  const el = document.getElementById(id);
  if (el) {
    el.style.display = 'flex';
    setTimeout(() => el.classList.add('open'), 10);
  }
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.remove('open');
    setTimeout(() => {
      el.style.display = 'none';
    }, 250);
  }
}

function openCartDrawer() {
  document.getElementById('cart-drawer-overlay').classList.add('open');
  document.getElementById('cart-drawer').classList.add('open');
}

function closeCartDrawer() {
  document.getElementById('cart-drawer-overlay').classList.remove('open');
  document.getElementById('cart-drawer').classList.remove('open');
}

function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--primary);"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
