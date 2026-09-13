/* ==========================================================================
   LUMINA BOOKS - APPLICATION LOGIC & STATE MANAGEMENT
   ========================================================================== */

// --- Book Database ---
const BOOKS_DATA = [
  {
    id: 'b1',
    title: 'Chronicles of Nebula',
    author: 'Alistair Vance',
    category: 'sci-fi',
    categoryLabel: 'Sci-Fi & Fantasy',
    price: 24.99,
    originalPrice: 29.99,
    rating: 4.9,
    reviewsCount: 142,
    cover: 'images/cover_sci_fi.jpg',
    tag: 'Bestseller',
    tagClass: 'tag-bestseller',
    pages: 480,
    publisher: 'Starlight Press',
    year: 2026,
    isbn: '978-0399590504',
    description: 'An epic space opera detailing humanity\'s desperate voyage across uncharted star systems into the glowing heart of Nebula Prime. Uncover ancient alien secrets and cosmic dangers in this thrilling odyssey.',
    excerpt: 'The deep blue illumination of the cockpit controls flickered as the starship slipped past the event horizon. Captain Vance watched the shimmering violet stardust wrap around the hull...',
    reviews: [
      { user: 'Marcus K.', rating: 5, comment: 'Hands down the best sci-fi novel of the decade! The world-building is astonishing.' },
      { user: 'Sarah T.', rating: 5, comment: 'Pacing is relentless and the twist in chapter 14 blew my mind.' }
    ]
  },
  {
    id: 'b2',
    title: 'Whispers of the Ancient Realm',
    author: 'Elara Vance',
    category: 'fantasy',
    categoryLabel: 'Fantasy',
    price: 21.50,
    originalPrice: 26.00,
    rating: 4.8,
    reviewsCount: 98,
    cover: 'images/cover_fantasy.jpg',
    tag: 'Staff Pick',
    tagClass: 'tag-new',
    pages: 512,
    publisher: 'Mythos Publishing',
    year: 2025,
    isbn: '978-0525559474',
    description: 'Deep within the enchanted mist of Eldoria lies the Runebound Blade. When dark omens fall upon the five realms, a young scholar must decipher forgotten spells to save her people.',
    excerpt: 'The moss under Elara\'s boots glowed with faint cyan luminescence as she stepped closer to the stone altar. The ancient sword hummed with dormant lightning...',
    reviews: [
      { user: 'Elena R.', rating: 5, comment: 'Spellbinding imagery and unforgettable characters. A masterclass in high fantasy.' }
    ]
  },
  {
    id: 'b3',
    title: 'The Code Architecture',
    author: 'Alexandra Reed',
    category: 'tech',
    categoryLabel: 'Tech & Code',
    price: 39.99,
    originalPrice: 49.99,
    rating: 4.95,
    reviewsCount: 210,
    cover: 'images/cover_tech.jpg',
    tag: 'Essential',
    tagClass: 'tag-bestseller',
    pages: 620,
    publisher: 'TechCraft Media',
    year: 2026,
    isbn: '978-1491950357',
    description: 'A comprehensive, modern guide to software architecture, distributed systems, clean domain design, and AI-assisted software development.',
    excerpt: 'Scalable software systems are not built by chance; they are forged through clear module boundaries, predictable data flow, and resilient error domains...',
    reviews: [
      { user: 'Devin S.', rating: 5, comment: 'Must-read for every senior engineer and system architect!' }
    ]
  },
  {
    id: 'b4',
    title: 'The Focus Advantage',
    author: 'James Harrison, MBA',
    category: 'business',
    categoryLabel: 'Business & Mindset',
    price: 18.95,
    originalPrice: 24.95,
    rating: 4.7,
    reviewsCount: 85,
    cover: 'images/cover_mindset.jpg',
    tag: 'Trending',
    tagClass: 'tag-new',
    pages: 310,
    publisher: 'Vanguard Press',
    year: 2026,
    isbn: '978-0735211292',
    description: 'Discover how unwavering concentration and cognitive deep work routines accelerate professional growth, eliminate distractions, and transform your productivity.',
    excerpt: 'In an age dominated by endless notifications, hyper-focused attention is no longer just a skill—it is the single highest leverage competitive advantage...',
    reviews: [
      { user: 'David W.', rating: 5, comment: 'Practical, actionable, and profoundly insightful.' }
    ]
  },
  {
    id: 'b5',
    title: 'Echoes of Eternity',
    author: 'Clara Oswald',
    category: 'fiction',
    categoryLabel: 'Fiction',
    price: 19.99,
    originalPrice: 24.99,
    rating: 4.6,
    reviewsCount: 64,
    cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
    tag: 'New',
    tagClass: 'tag-new',
    pages: 368,
    publisher: 'Penguin Classics',
    year: 2025,
    isbn: '978-0143127741',
    description: 'A sweeping multi-generational drama exploring lost letters, secret love, and art across 19th-century Paris and modern London.',
    excerpt: 'Rain sputtered against the stained-glass window of the old Montmartre attic. Julian untied the yellow ribbon wrapping the stack of forgotten letters...',
    reviews: [
      { user: 'Hannah B.', rating: 4, comment: 'Beautiful prose that lingers long after turning the final page.' }
    ]
  },
  {
    id: 'b6',
    title: 'Quantum Computing Unleashed',
    author: 'Dr. Aris Thorne',
    category: 'tech',
    categoryLabel: 'Tech & Code',
    price: 44.50,
    originalPrice: 55.00,
    rating: 4.9,
    reviewsCount: 118,
    cover: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
    tag: 'Hot',
    tagClass: 'tag-bestseller',
    pages: 540,
    publisher: 'MIT Tech Books',
    year: 2026,
    isbn: '978-0262035613',
    description: 'Demystifying q-bits, superposition, quantum encryption, and practical algorithms for developers breaking into quantum engineering.',
    excerpt: 'Unlike classical binary states, quantum registers harness phase coherence to evaluate vast state spaces simultaneously...',
    reviews: [
      { user: 'Liam P.', rating: 5, comment: 'Clear explanations without oversimplifying the mathematics!' }
    ]
  },
  {
    id: 'b7',
    title: 'Mastering Mindful Leadership',
    author: 'Sophia Sterling',
    category: 'business',
    categoryLabel: 'Business & Mindset',
    price: 22.00,
    originalPrice: 27.50,
    rating: 4.75,
    reviewsCount: 76,
    cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80',
    tag: 'Popular',
    tagClass: '',
    pages: 290,
    publisher: 'Harvard Leadership Press',
    year: 2025,
    isbn: '978-1633691780',
    description: 'Empower high-performing teams with emotional intelligence, high trust cultures, and sustainable executive presence.',
    excerpt: 'True leadership begins not with command structures, but with deep self-awareness and active listening...',
    reviews: [
      { user: 'Rachel M.', rating: 5, comment: 'Changed how I manage my engineering team overnight.' }
    ]
  },
  {
    id: 'b8',
    title: 'The Cyberpunk Paradox',
    author: 'Kaelen Voss',
    category: 'sci-fi',
    categoryLabel: 'Sci-Fi & Fantasy',
    price: 16.99,
    originalPrice: 21.99,
    rating: 4.65,
    reviewsCount: 130,
    cover: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80',
    tag: 'Best Seller',
    tagClass: 'tag-bestseller',
    pages: 410,
    publisher: 'Neon Grid Books',
    year: 2026,
    isbn: '978-0345538376',
    description: 'In Neo-Tokyo of 2099, a rogue neural hacker discovers a phantom AI operating hidden inside the city power grid.',
    excerpt: 'Neon reflections danced on the wet pavement. Kaelen plugged the fiber jack directly into his temporal port...',
    reviews: [
      { user: 'Zack N.', rating: 5, comment: 'High-octane cyberpunk thrill ride!' }
    ]
  }
];

// --- Application State ---
let state = {
  books: [...BOOKS_DATA],
  cart: JSON.parse(localStorage.getItem('lumina_cart')) || [],
  wishlist: JSON.parse(localStorage.getItem('lumina_wishlist')) || [],
  activeCategory: 'all',
  searchTerm: '',
  sortBy: 'featured',
  discount: 0,
  theme: localStorage.getItem('lumina_theme') || 'light'
};

// --- DOM Selectors ---
const elements = {
  themeToggleBtn: document.getElementById('theme-toggle'),
  searchInput: document.getElementById('search-input'),
  categoriesContainer: document.getElementById('categories-container'),
  sortSelect: document.getElementById('sort-select'),
  booksGrid: document.getElementById('books-grid'),
  resultsCount: document.getElementById('results-count'),
  
  cartBtn: document.getElementById('cart-btn'),
  cartBadge: document.getElementById('cart-badge'),
  cartDrawer: document.getElementById('cart-drawer'),
  drawerOverlay: document.getElementById('drawer-overlay'),
  closeCartBtn: document.getElementById('close-cart-btn'),
  cartItemsList: document.getElementById('cart-items-list'),
  cartSubtotal: document.getElementById('cart-subtotal'),
  cartDiscount: document.getElementById('cart-discount'),
  cartTotal: document.getElementById('cart-total'),
  promoInput: document.getElementById('promo-input'),
  applyPromoBtn: document.getElementById('apply-promo-btn'),
  checkoutBtn: document.getElementById('checkout-btn'),

  wishlistBtnNav: document.getElementById('wishlist-btn-nav'),
  wishlistBadge: document.getElementById('wishlist-badge'),

  quickviewModal: document.getElementById('quickview-modal'),
  quickviewClose: document.getElementById('quickview-close'),
  quickviewBody: document.getElementById('quickview-body'),

  checkoutModal: document.getElementById('checkout-modal'),
  checkoutClose: document.getElementById('checkout-close'),
  checkoutForm: document.getElementById('checkout-form'),

  toastContainer: document.getElementById('toast-container')
};

// --- Core Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderCategories();
  renderBooks();
  updateCartUI();
  updateWishlistUI();
  setupEventListeners();
});

// --- Theme Management ---
function initTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  updateThemeIcon();
}

function toggleTheme() {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('lumina_theme', state.theme);
  document.documentElement.setAttribute('data-theme', state.theme);
  updateThemeIcon();
  showToast(`Switched to ${state.theme} mode`, 'info');
}

function updateThemeIcon() {
  if (elements.themeToggleBtn) {
    elements.themeToggleBtn.innerHTML = state.theme === 'dark'
      ? `<i class="fa-solid fa-sun"></i>`
      : `<i class="fa-solid fa-moon"></i>`;
  }
}

// --- Render Categories Pills ---
const CATEGORIES = [
  { id: 'all', label: 'All Genres' },
  { id: 'sci-fi', label: 'Sci-Fi & Fantasy' },
  { id: 'fantasy', label: 'Epic Fantasy' },
  { id: 'tech', label: 'Tech & Code' },
  { id: 'business', label: 'Business & Mindset' },
  { id: 'fiction', label: 'Fiction & Drama' }
];

function renderCategories() {
  if (!elements.categoriesContainer) return;
  elements.categoriesContainer.innerHTML = CATEGORIES.map(cat => `
    <button class="category-btn ${state.activeCategory === cat.id ? 'active' : ''}" data-cat="${cat.id}">
      ${cat.label}
    </button>
  `).join('');
}

// --- Render Book Catalog Grid ---
function renderBooks() {
  if (!elements.booksGrid) return;

  let filtered = state.books.filter(book => {
    const matchesCategory = state.activeCategory === 'all' || book.category === state.activeCategory;
    const matchesSearch = book.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
                          book.author.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
                          book.categoryLabel.toLowerCase().includes(state.searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sorting logic
  filtered.sort((a, b) => {
    if (state.sortBy === 'price-low') return a.price - b.price;
    if (state.sortBy === 'price-high') return b.price - a.price;
    if (state.sortBy === 'rating') return b.rating - a.rating;
    if (state.sortBy === 'newest') return b.year - a.year;
    return 0; // Default featured
  });

  // Update counter
  if (elements.resultsCount) {
    elements.resultsCount.innerHTML = `Showing <span>${filtered.length}</span> books`;
  }

  if (filtered.length === 0) {
    elements.booksGrid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon"><i class="fa-solid fa-book-open"></i></div>
        <h3>No books found</h3>
        <p>Try searching for something else or clear your genre filters.</p>
        <button class="btn btn-primary" onclick="resetFilters()">Reset Filters</button>
      </div>
    `;
    return;
  }

  elements.booksGrid.innerHTML = filtered.map(book => {
    const isWishlisted = state.wishlist.includes(book.id);
    const stars = getStarRatingHTML(book.rating);
    return `
      <div class="book-card" data-id="${book.id}">
        <div class="book-cover-wrapper" onclick="openQuickView('${book.id}')">
          <img src="${book.cover}" alt="${book.title}" class="book-cover" loading="lazy" onError="this.src='https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80'" />
          ${book.tag ? `<span class="book-tag ${book.tagClass}">${book.tag}</span>` : ''}
          <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist('${book.id}')" title="Save to Wishlist">
            <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
          </button>
        </div>
        <div class="book-details">
          <span class="book-category">${book.categoryLabel}</span>
          <h3 class="book-title" onclick="openQuickView('${book.id}')">${book.title}</h3>
          <p class="book-author">by ${book.author}</p>
          <div class="rating-stars">
            ${stars}
            <span class="rating-count">(${book.reviewsCount})</span>
          </div>
          <div class="book-footer">
            <div class="price-box">
              <span class="price-current">$${book.price.toFixed(2)}</span>
              ${book.originalPrice ? `<span class="price-original">$${book.originalPrice.toFixed(2)}</span>` : ''}
            </div>
            <button class="add-cart-btn" onclick="addToCart('${book.id}')">
              <i class="fa-solid fa-cart-plus"></i> Add
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function getStarRatingHTML(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars += `<i class="fa-solid fa-star"></i>`;
    } else if (i - rating < 1) {
      stars += `<i class="fa-solid fa-star-half-stroke"></i>`;
    } else {
      stars += `<i class="fa-regular fa-star"></i>`;
    }
  }
  return stars;
}

function resetFilters() {
  state.activeCategory = 'all';
  state.searchTerm = '';
  if (elements.searchInput) elements.searchInput.value = '';
  renderCategories();
  renderBooks();
}

// --- Cart System & Persistence ---
function addToCart(bookId) {
  const existing = state.cart.find(item => item.bookId === bookId);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ bookId, qty: 1 });
  }
  saveCart();
  updateCartUI();
  openCartDrawer();
  const book = state.books.find(b => b.id === bookId);
  showToast(`Added "${book ? book.title : 'Book'}" to your cart!`, 'success');
}

function updateCartQty(bookId, delta) {
  const item = state.cart.find(i => i.bookId === bookId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter(i => i.bookId !== bookId);
  }
  saveCart();
  updateCartUI();
}

function removeFromCart(bookId) {
  state.cart = state.cart.filter(i => i.bookId !== bookId);
  saveCart();
  updateCartUI();
  showToast('Item removed from cart', 'info');
}

function saveCart() {
  localStorage.setItem('lumina_cart', JSON.stringify(state.cart));
}

function updateCartUI() {
  // Update badge count
  const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  if (elements.cartBadge) elements.cartBadge.textContent = totalCount;

  // Render items list
  if (!elements.cartItemsList) return;

  if (state.cart.length === 0) {
    elements.cartItemsList.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <i class="fa-solid fa-basket-shopping" style="font-size: 3rem; margin-bottom: 1rem; color: var(--text-light);"></i>
        <p>Your shopping cart is empty.</p>
      </div>
    `;
    if (elements.cartSubtotal) elements.cartSubtotal.textContent = '$0.00';
    if (elements.cartDiscount) elements.cartDiscount.textContent = '-$0.00';
    if (elements.cartTotal) elements.cartTotal.textContent = '$0.00';
    return;
  }

  let subtotal = 0;

  elements.cartItemsList.innerHTML = state.cart.map(item => {
    const book = state.books.find(b => b.id === item.bookId);
    if (!book) return '';
    const itemTotal = book.price * item.qty;
    subtotal += itemTotal;

    return `
      <div class="cart-item">
        <img src="${book.cover}" alt="${book.title}" class="cart-item-img" />
        <div class="cart-item-info">
          <h4 class="cart-item-title">${book.title}</h4>
          <span class="cart-item-author">${book.author}</span>
          <div class="cart-item-controls">
            <div class="quantity-picker">
              <button class="qty-btn" onclick="updateCartQty('${book.id}', -1)">-</button>
              <span class="qty-value">${item.qty}</span>
              <button class="qty-btn" onclick="updateCartQty('${book.id}', 1)">+</button>
            </div>
            <span class="cart-item-price">$${itemTotal.toFixed(2)}</span>
            <button class="remove-item-btn" onclick="removeFromCart('${book.id}')" title="Remove">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  const discountAmount = subtotal * state.discount;
  const total = subtotal - discountAmount;

  if (elements.cartSubtotal) elements.cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
  if (elements.cartDiscount) elements.cartDiscount.textContent = `-$${discountAmount.toFixed(2)}`;
  if (elements.cartTotal) elements.cartTotal.textContent = `$${total.toFixed(2)}`;
}

function openCartDrawer() {
  if (elements.cartDrawer && elements.drawerOverlay) {
    elements.cartDrawer.classList.add('active');
    elements.drawerOverlay.classList.add('active');
  }
}

function closeCartDrawer() {
  if (elements.cartDrawer && elements.drawerOverlay) {
    elements.cartDrawer.classList.remove('active');
    elements.drawerOverlay.classList.remove('active');
  }
}

function applyPromoCode() {
  const code = elements.promoInput.value.trim().toUpperCase();
  if (code === 'READ2026') {
    state.discount = 0.15;
    updateCartUI();
    showToast('Promo code applied! 15% OFF unlocked 🎉', 'success');
  } else {
    showToast('Invalid promo code. Try "READ2026"', 'error');
  }
}

// --- Wishlist System ---
function toggleWishlist(bookId) {
  const index = state.wishlist.indexOf(bookId);
  const book = state.books.find(b => b.id === bookId);

  if (index > -1) {
    state.wishlist.splice(index, 1);
    showToast(`Removed "${book ? book.title : ''}" from Wishlist`, 'info');
  } else {
    state.wishlist.push(bookId);
    showToast(`Saved "${book ? book.title : ''}" to Wishlist ❤️`, 'success');
  }

  localStorage.setItem('lumina_wishlist', JSON.stringify(state.wishlist));
  updateWishlistUI();
  renderBooks();
}

function updateWishlistUI() {
  if (elements.wishlistBadge) {
    elements.wishlistBadge.textContent = state.wishlist.length;
  }
}

// --- Quick View Modal & Tabs ---
function openQuickView(bookId) {
  const book = state.books.find(b => b.id === bookId);
  if (!book || !elements.quickviewBody || !elements.quickviewModal) return;

  const isWishlisted = state.wishlist.includes(book.id);

  elements.quickviewBody.innerHTML = `
    <div class="quickview-grid">
      <div>
        <img src="${book.cover}" alt="${book.title}" class="quickview-cover" />
      </div>
      <div class="quickview-info">
        <span class="book-category">${book.categoryLabel}</span>
        <h2 class="quickview-title">${book.title}</h2>
        <p class="quickview-author">Author: <strong>${book.author}</strong> (${book.year})</p>
        
        <div class="rating-stars" style="margin-bottom: 1rem;">
          ${getStarRatingHTML(book.rating)}
          <span class="rating-count">(${book.reviewsCount} customer reviews)</span>
        </div>

        <div style="font-size: 1.6rem; font-weight: 800; margin-bottom: 1.25rem;">
          $${book.price.toFixed(2)}
          ${book.originalPrice ? `<span class="price-original" style="font-size: 1rem;">$${book.originalPrice.toFixed(2)}</span>` : ''}
        </div>

        <div class="modal-tabs">
          <button class="modal-tab-btn active" onclick="switchModalTab(event, 'tab-overview')">Overview</button>
          <button class="modal-tab-btn" onclick="switchModalTab(event, 'tab-excerpt')">Sample Chapter</button>
          <button class="modal-tab-btn" onclick="switchModalTab(event, 'tab-specs')">Details</button>
          <button class="modal-tab-btn" onclick="switchModalTab(event, 'tab-reviews')">Reviews (${book.reviews.length})</button>
        </div>

        <div id="tab-overview" class="tab-content active">
          <p>${book.description}</p>
        </div>

        <div id="tab-excerpt" class="tab-content">
          <p style="font-style: italic; background: var(--bg-main); padding: 1rem; border-left: 3px solid var(--color-primary); border-radius: 4px;">
            "${book.excerpt}"
          </p>
        </div>

        <div id="tab-specs" class="tab-content">
          <div class="specs-list">
            <div class="spec-item"><span class="spec-label">Pages</span><div class="spec-value">${book.pages} pages</div></div>
            <div class="spec-item"><span class="spec-label">Publisher</span><div class="spec-value">${book.publisher}</div></div>
            <div class="spec-item"><span class="spec-label">Year</span><div class="spec-value">${book.year}</div></div>
            <div class="spec-item"><span class="spec-label">ISBN</span><div class="spec-value">${book.isbn}</div></div>
          </div>
        </div>

        <div id="tab-reviews" class="tab-content">
          <div class="reviews-container">
            ${book.reviews.map(r => `
              <div class="review-card">
                <div class="review-header">
                  <span class="reviewer-name">${r.user}</span>
                  <span style="color: var(--color-accent-gold); font-size: 0.8rem;">${getStarRatingHTML(r.rating)}</span>
                </div>
                <p style="font-size: 0.88rem; color: var(--text-muted);">${r.comment}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <div style="display: flex; gap: 1rem; margin-top: 2rem;">
          <button class="btn btn-primary" style="flex: 1;" onclick="addToCart('${book.id}'); closeQuickView();">
            <i class="fa-solid fa-cart-plus"></i> Add to Cart
          </button>
          <button class="icon-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist('${book.id}'); openQuickView('${book.id}');" title="Wishlist">
            <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  `;

  elements.quickviewModal.classList.add('active');
}

function closeQuickView() {
  if (elements.quickviewModal) elements.quickviewModal.classList.remove('active');
}

function switchModalTab(event, tabId) {
  document.querySelectorAll('.modal-tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  event.target.classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

// --- Checkout Modal Flow ---
function openCheckout() {
  if (state.cart.length === 0) {
    showToast('Your cart is empty!', 'error');
    return;
  }
  closeCartDrawer();
  if (elements.checkoutModal) elements.checkoutModal.classList.add('active');
}

function closeCheckout() {
  if (elements.checkoutModal) elements.checkoutModal.classList.remove('active');
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  state.cart = [];
  saveCart();
  updateCartUI();
  closeCheckout();

  showToast('Order placed successfully! Thank you for reading with Lumina Books 📚✨', 'success');
}

// --- Toast Notification System ---
function showToast(message, type = 'info') {
  if (!elements.toastContainer) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  const iconMap = {
    success: 'fa-circle-check',
    error: 'fa-circle-xmark',
    info: 'fa-circle-info'
  };

  toast.innerHTML = `
    <i class="fa-solid ${iconMap[type] || 'fa-circle-info'}"></i>
    <span>${message}</span>
  `;

  elements.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// --- Event Listeners Setup ---
function setupEventListeners() {
  // Theme toggle
  if (elements.themeToggleBtn) {
    elements.themeToggleBtn.addEventListener('click', toggleTheme);
  }

  // Search input
  if (elements.searchInput) {
    elements.searchInput.addEventListener('input', (e) => {
      state.searchTerm = e.target.value;
      renderBooks();
    });
  }

  // Categories filter pills
  if (elements.categoriesContainer) {
    elements.categoriesContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.category-btn');
      if (btn) {
        state.activeCategory = btn.dataset.cat;
        renderCategories();
        renderBooks();
      }
    });
  }

  // Sort dropdown
  if (elements.sortSelect) {
    elements.sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderBooks();
    });
  }

  // Cart Drawer triggers
  if (elements.cartBtn) elements.cartBtn.addEventListener('click', openCartDrawer);
  if (elements.closeCartBtn) elements.closeCartBtn.addEventListener('click', closeCartDrawer);
  if (elements.drawerOverlay) elements.drawerOverlay.addEventListener('click', closeCartDrawer);

  // Promo code
  if (elements.applyPromoBtn) elements.applyPromoBtn.addEventListener('click', applyPromoCode);

  // Checkout modal
  if (elements.checkoutBtn) elements.checkoutBtn.addEventListener('click', openCheckout);
  if (elements.checkoutClose) elements.checkoutClose.addEventListener('click', closeCheckout);
  if (elements.checkoutForm) elements.checkoutForm.addEventListener('submit', handleCheckoutSubmit);

  // Quick view close
  if (elements.quickviewClose) elements.quickviewClose.addEventListener('click', closeQuickView);
  if (elements.quickviewModal) {
    elements.quickviewModal.addEventListener('click', (e) => {
      if (e.target === elements.quickviewModal) closeQuickView();
    });
  }
}
