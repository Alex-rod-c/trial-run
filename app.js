const state = {
  category: "all",
  sort: "featured",
  cart: [],
  coupon: null,
};

const products = [
  {
    id: "motion-jacket",
    name: "Motion Jacket",
    description: "4-way stretch blazer with hidden passport pocket.",
    category: "men",
    price: 148,
    rating: 4.8,
    reviews: 312,
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=640&q=80",
    tags: ["new", "bestseller"],
    featuredScore: 95,
  },
  {
    id: "cloudweave-tee",
    name: "CloudWeave Tee",
    description: "Breathable Supima cotton tee with cooling finish.",
    category: "women",
    price: 58,
    rating: 4.7,
    reviews: 189,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=640&q=80",
    tags: ["new"],
    featuredScore: 86,
  },
  {
    id: "stride-trouser",
    name: "Stride Trouser",
    description: "High-rise trouser with elastic comfort waistband.",
    category: "women",
    price: 128,
    rating: 4.6,
    reviews: 214,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=640&q=80",
    tags: ["bestseller"],
    featuredScore: 78,
  },
  {
    id: "jetset-bomber",
    name: "Jetset Bomber",
    description: "Recycled nylon bomber with rain-repellent finish.",
    category: "men",
    price: 168,
    rating: 4.9,
    reviews: 98,
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=640&q=80",
    tags: ["limited"],
    featuredScore: 88,
  },
  {
    id: "studio-flare",
    name: "Studio Flare Legging",
    description: "Performance jersey with contour seams and phone pocket.",
    category: "studio",
    price: 96,
    rating: 4.5,
    reviews: 256,
    image:
      "https://images.unsplash.com/photo-1542293787938-4d2226a67625?auto=format&fit=crop&w=640&q=80",
    tags: ["studio"],
    featuredScore: 81,
  },
  {
    id: "cosmos-hoodie",
    name: "Cosmos Hoodie",
    description: "Ultrasoft fleece with constellation embroidery.",
    category: "lounge",
    price: 118,
    rating: 4.9,
    reviews: 401,
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=640&q=80",
    tags: ["bestseller", "lounge"],
    featuredScore: 90,
  },
  {
    id: "terra-parka",
    name: "Terra Parka",
    description: "Waterproof parka with removable liner and heat map lining.",
    category: "men",
    price: 238,
    rating: 4.8,
    reviews: 143,
    image:
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=640&q=80",
    tags: ["winter", "limited"],
    featuredScore: 92,
  },
  {
    id: "luna-slip",
    name: "Luna Slip Dress",
    description: "Bias-cut satin slip that doubles as evening or layering piece.",
    category: "women",
    price: 138,
    rating: 4.4,
    reviews: 167,
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=640&q=80",
    tags: ["evening", "limited"],
    featuredScore: 75,
  },
  {
    id: "atlas-denim",
    name: "Atlas Selvedge Denim",
    description: "Japanese loom denim with comfort stretch paneling.",
    category: "men",
    price: 178,
    rating: 4.6,
    reviews: 280,
    image:
      "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=640&q=80",
    tags: ["denim"],
    featuredScore: 84,
  },
  {
    id: "solstice-cardigan",
    name: "Solstice Cardigan",
    description: "Merino wool cardigan with colorblock cuffs.",
    category: "lounge",
    price: 128,
    rating: 4.7,
    reviews: 202,
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=640&q=80",
    tags: ["cozy"],
    featuredScore: 82,
  },
  {
    id: "aero-runner",
    name: "Aero Runner Short",
    description: "Ultralight running short with 3D molded waistband.",
    category: "studio",
    price: 64,
    rating: 4.5,
    reviews: 188,
    image:
      "https://images.unsplash.com/photo-1523382036160-421bb9b93f5e?auto=format&fit=crop&w=640&q=80",
    tags: ["performance"],
    featuredScore: 77,
  },
];

const deals = [
  {
    id: "motion-bundle",
    title: "Bundle & Save 20%",
    description: "Mix any 2 Motion Collection pieces and save automatically.",
    label: "Featured deal",
    cta: "Shop the Motion bundle",
  },
  {
    id: "collective",
    title: "Collective Early Access",
    description: "Members get first dibs on the Jetset Bomber in Sandstone.",
    label: "Member exclusive",
    cta: "Become a member",
  },
  {
    id: "restock-alerts",
    title: "Restock alerts",
    description: "Opt in for SMS to get a free travel pouch with your next order.",
    label: "Limited bonus",
    cta: "Activate alerts",
  },
  {
    id: "express-shipping",
    title: "Express Shipping Upgrade",
    description: "Free same-day delivery on orders $200+ using code SPRINT.",
    label: "Shipping perk",
    cta: "See participating cities",
  },
];

const coupons = {
  THREAD10: {
    label: "New subscriber",
    description: "10% off your first purchase",
    type: "percent",
    value: 10,
    minimum: 0,
  },
  MOTION25: {
    label: "Motion Collection",
    description: "$25 off $200+ from the Motion lineup",
    type: "flat",
    value: 25,
    minimum: 200,
  },
  LOUNGE15: {
    label: "Lounge launch",
    description: "15% off loungewear",
    type: "category-percent",
    category: "lounge",
    value: 15,
    minimum: 0,
  },
};

const selectors = {
  dealBanner: document.getElementById("deal-banner"),
  dealGrid: document.getElementById("deal-grid"),
  productGrid: document.getElementById("product-grid"),
  cartPanel: document.getElementById("cart-panel"),
  cartOverlay: document.getElementById("cart-overlay"),
  cartItems: document.getElementById("cart-items"),
  cartSubtotal: document.getElementById("cart-subtotal"),
  cartDiscount: document.getElementById("cart-discount"),
  cartTotal: document.getElementById("cart-total"),
  cartCount: document.getElementById("cart-count"),
  cartSavings: document.getElementById("cart-savings"),
  cartShipping: document.getElementById("cart-shipping"),
  couponInput: document.getElementById("coupon-code"),
  couponFeedback: document.getElementById("coupon-feedback"),
  currentYear: document.getElementById("current-year"),
};

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

function loadCart() {
  try {
    const raw = localStorage.getItem("threadlab-cart");
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch (error) {
    console.error("Failed to load cart", error);
    return [];
  }
}

function persistCart() {
  localStorage.setItem("threadlab-cart", JSON.stringify(state.cart));
}

function renderDeals() {
  selectors.dealGrid.innerHTML = deals
    .map(
      (deal) => `
      <article class="deal-card">
        <span class="label">${deal.label}</span>
        <strong>${deal.title}</strong>
        <p>${deal.description}</p>
        <span class="cta">${deal.cta} →</span>
      </article>
    `
    )
    .join("");

  const featured = deals[0];
  selectors.dealBanner.classList.add("active");
  selectors.dealBanner.innerHTML = `
    <div>
      <p class="eyebrow">In-cart savings</p>
      <strong>${featured.title}</strong>
      <p>${featured.description}</p>
    </div>
    <button class="btn secondary" id="banner-cta">${featured.cta}</button>
  `;

  document
    .getElementById("banner-cta")
    .addEventListener("click", () => scrollToSection(selectors.dealGrid));
}

function scrollToSection(element) {
  if (!element) return;
  element.scrollIntoView({ behavior: "smooth" });
}

function renderProducts() {
  const { category, sort } = state;
  let filtered = products.filter((product) =>
    category === "all" ? true : product.category === category
  );

  switch (sort) {
    case "new":
      filtered = filtered.sort((a, b) => {
        const newDiff = Number(b.tags.includes("new")) - Number(a.tags.includes("new"));
        if (newDiff !== 0) return newDiff;
        return b.featuredScore - a.featuredScore;
      });
      break;
    case "price-asc":
      filtered = filtered.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      filtered = filtered.sort((a, b) => b.price - a.price);
      break;
    default:
      filtered = filtered.sort((a, b) => b.featuredScore - a.featuredScore);
  }

  selectors.productGrid.innerHTML = filtered
    .map((product) => createProductCard(product))
    .join("");

  selectors.productGrid
    .querySelectorAll("button[data-product]")
    .forEach((button) =>
      button.addEventListener("click", () => addToCart(button.dataset.product))
    );
}

function createProductCard(product) {
  const tagText = product.tags.map((tag) => `#${tag}`).join(" · ");
  const rating = `${"★".repeat(Math.round(product.rating))}${"☆".repeat(
    5 - Math.round(product.rating)
  )}`;

  return `
    <article class="product-card">
      <img src="${product.image}" alt="${product.name}" loading="lazy" />
      <div class="product-body">
        <div class="product-meta">
          <span>${tagText}</span>
          <span class="rating" aria-label="Rated ${product.rating} out of 5">
            ${rating} <span>(${product.reviews})</span>
          </span>
        </div>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-meta">
          <span class="price">${formatCurrency(product.price)}</span>
          <span>Free returns</span>
        </div>
        <button class="btn secondary" data-product="${product.id}">Add to cart</button>
      </div>
    </article>
  `;
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;
  const existing = state.cart.find((item) => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({
      id: productId,
      quantity: 1,
      price: product.price,
    });
  }
  persistCart();
  renderCart();
  openCart();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter((item) => item.id !== productId);
  persistCart();
  renderCart();
}

function adjustQuantity(productId, delta) {
  const item = state.cart.find((entry) => entry.id === productId);
  if (!item) return;
  item.quantity = Math.max(1, item.quantity + delta);
  persistCart();
  renderCart();
}

function renderCart() {
  if (!state.cart.length) {
    selectors.cartItems.innerHTML = `
      <p class="cart-empty">Your cart is currently empty. Explore the Motion Collection to add your first piece.</p>
    `;
    selectors.cartSubtotal.textContent = formatCurrency(0);
    selectors.cartTotal.textContent = formatCurrency(0);
    selectors.cartCount.textContent = "0";
    selectors.cartSavings.hidden = true;
    selectors.cartShipping.textContent = "Calculated at checkout";
    return;
  }

  const template = document.getElementById("cart-item-template");
  selectors.cartItems.innerHTML = "";

  state.cart.forEach((item) => {
    const product = products.find((p) => p.id === item.id);
    if (!product) return;
    const fragment = template.content.cloneNode(true);
    fragment.querySelector("img").src = product.image;
    fragment.querySelector("img").alt = product.name;
    fragment.querySelector(".cart-item-name").textContent = product.name;
    fragment.querySelector(".cart-item-meta").textContent = `${
      product.tags.join(" / ")
    } · ${formatCurrency(product.price)} each`;
    fragment.querySelector(".cart-item-price").textContent = formatCurrency(
      product.price * item.quantity
    );
    fragment.querySelector(".quantity").textContent = item.quantity;

    fragment
      .querySelector(".remove-item")
      .addEventListener("click", () => removeFromCart(item.id));

    fragment
      .querySelector(".increase")
      .addEventListener("click", () => adjustQuantity(item.id, 1));

    fragment
      .querySelector(".decrease")
      .addEventListener("click", () => adjustQuantity(item.id, -1));

    selectors.cartItems.appendChild(fragment);
  });

  updateCartTotals();
}

function updateCartTotals() {
  const subtotal = state.cart.reduce((total, item) => {
    const product = products.find((p) => p.id === item.id);
    if (!product) return total;
    return total + product.price * item.quantity;
  }, 0);

  const { discount, appliedCoupon } = calculateDiscount(subtotal);

  const total = Math.max(0, subtotal - discount);

  selectors.cartSubtotal.textContent = formatCurrency(subtotal);
  selectors.cartTotal.textContent = formatCurrency(total);
  selectors.cartCount.textContent = state.cart
    .reduce((acc, item) => acc + item.quantity, 0)
    .toString();

  if (discount > 0) {
    selectors.cartSavings.hidden = false;
    selectors.cartDiscount.textContent = `-${formatCurrency(discount)}`;
  } else {
    selectors.cartSavings.hidden = true;
  }

  if (subtotal >= 150) {
    selectors.cartShipping.textContent = "You unlocked free express shipping!";
  } else {
    const remaining = 150 - subtotal;
    selectors.cartShipping.textContent = `Spend ${formatCurrency(
      remaining
    )} more for free express shipping.`;
  }

  if (appliedCoupon) {
    selectors.couponFeedback.textContent = `${appliedCoupon.label}: ${appliedCoupon.description}`;
    selectors.couponFeedback.classList.remove("error");
  }
}

function calculateDiscount(subtotal) {
  if (!state.coupon) return { discount: 0, appliedCoupon: null };
  const coupon = coupons[state.coupon];
  if (!coupon) return { discount: 0, appliedCoupon: null };
  if (subtotal < coupon.minimum) return { discount: 0, appliedCoupon: null };

  switch (coupon.type) {
    case "percent":
      return {
        discount: Math.min(subtotal, (subtotal * coupon.value) / 100),
        appliedCoupon: coupon,
      };
    case "flat":
      return { discount: Math.min(coupon.value, subtotal), appliedCoupon: coupon };
    case "category-percent": {
      const categorySpend = state.cart.reduce((acc, item) => {
        const product = products.find((p) => p.id === item.id);
        if (!product || product.category !== coupon.category) return acc;
        return acc + product.price * item.quantity;
      }, 0);
      return {
        discount: Math.min(categorySpend, (categorySpend * coupon.value) / 100),
        appliedCoupon: coupon,
      };
    }
    default:
      return { discount: 0, appliedCoupon: null };
  }
}

function handleCouponApply() {
  const code = selectors.couponInput.value.trim().toUpperCase();
  if (!code) return;

  const coupon = coupons[code];
  if (!coupon) {
    selectors.couponFeedback.textContent = "We couldn't find that code — try another?";
    selectors.couponFeedback.classList.add("error");
    return;
  }

  state.coupon = code;
  selectors.couponFeedback.textContent = `${coupon.label}: ${coupon.description}`;
  selectors.couponFeedback.classList.remove("error");
  updateCartTotals();
}

function bindUI() {
  document.getElementById("sort-select").addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderProducts();
  });

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((el) => el.classList.remove("active"));
      tab.classList.add("active");
      state.category = tab.dataset.category;
      renderProducts();
    });
  });

  document.getElementById("open-deals").addEventListener("click", () =>
    scrollToSection(selectors.dealGrid)
  );

  document.getElementById("cart-toggle").addEventListener("click", openCart);
  document.getElementById("close-cart").addEventListener("click", closeCart);
  selectors.cartOverlay.addEventListener("click", closeCart);
  document.getElementById("apply-coupon").addEventListener("click", handleCouponApply);
  selectors.couponInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleCouponApply();
    }
  });

  document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeCart();
    }
  });
}

function openCart() {
  selectors.cartPanel.classList.add("active");
  selectors.cartPanel.setAttribute("aria-hidden", "false");
  selectors.cartOverlay.hidden = false;
}

function closeCart() {
  selectors.cartPanel.classList.remove("active");
  selectors.cartPanel.setAttribute("aria-hidden", "true");
  selectors.cartOverlay.hidden = true;
}

function initTheme() {
  const saved = localStorage.getItem("threadlab-theme");
  if (saved) {
    document.documentElement.setAttribute("data-theme", saved);
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "" : "dark";
  if (next) {
    document.documentElement.setAttribute("data-theme", next);
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
  localStorage.setItem("threadlab-theme", next);
}

function init() {
  initTheme();
  state.cart = loadCart();
  selectors.currentYear.textContent = new Date().getFullYear();
  renderDeals();
  renderProducts();
  renderCart();
  bindUI();
}

document.addEventListener("DOMContentLoaded", init);
