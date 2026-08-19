/* ==========================================================================
   CAKEWALK & KULFIHOUSE — script.js
   ========================================================================== */

const PHONE = "917903491857"; // WhatsApp number, no + or spaces

/* ---------- Data ---------- */
const CAKES = [
  { name: "Vanilla", price: 499, desc: "Light, classic vanilla sponge with silky cream.", tag: "classic", photo: "flavor-vanilla" },
  { name: "Pineapple", price: 550, desc: "Fresh pineapple chunks layered in vanilla cream.", tag: "fruit", photo: "flavor-pineapple" },
  { name: "Black Forest", price: 559, desc: "Chocolate sponge, cherries and whipped cream.", tag: "chocolate", photo: "flavor-blackforest2" },
  { name: "Butterscotch", price: 559, desc: "Caramelised butterscotch crunch and cream.", tag: "classic", photo: "flavor-butterscotch" },
  { name: "Strawberry", price: 569, desc: "Fresh strawberry cream on soft vanilla sponge.", tag: "fruit", photo: "flavor-strawberry" },
  { name: "Blueberry", price: 629, desc: "Blueberry compote swirled through vanilla cream.", tag: "fruit", photo: "flavor-blueberry" },
  { name: "Choco Vanilla", price: 629, desc: "The best of both — layered choco and vanilla.", tag: "chocolate", photo: "flavor-chocovanilla" },
  { name: "White Forest", price: 629, desc: "Vanilla sponge, cherries and white cream.", tag: "classic", photo: "flavor-whiteforest" },
  { name: "Dual Forest", price: 629, desc: "Black forest meets white forest in one cake.", tag: "premium", photo: "flavor-dualforest" },
  { name: "Chocolate Chips", price: 699, desc: "Rich chocolate sponge loaded with choco chips.", tag: "chocolate", photo: "flavor-chocochips" },
  { name: "Butterfly Cake", price: 769, desc: "A pretty, celebration-ready designer cake.", tag: "premium", photo: "flavor-butterfly" },
  { name: "Chocolate Overloaded", price: 769, desc: "Deep, indulgent layers of pure chocolate.", tag: "chocolate", photo: "flavor-chocooverload" },
  { name: "Chocolate KitKat", price: 769, desc: "Chocolate cake wrapped in crunchy KitKat.", tag: "chocolate", photo: "flavor-kitkat" },
  { name: "Mixed Fruit", price: 769, desc: "A medley of seasonal fruits on fresh cream.", tag: "fruit", photo: "flavor-mixedfruit" },
  { name: "Red Velvet", price: 840, desc: "Classic red velvet with cream cheese frosting.", tag: "premium", photo: "flavor-redvelvet2" },
  { name: "Truffle", price: 980, desc: "Dense chocolate truffle, our most indulgent cake.", tag: "premium", photo: "flavor-truffle" },
];

const MENU = {
  pastries: [
    { name: "Chocolate Pastry", desc: "Single-serve chocolate delight", photo: "flavor-pastry" },
    { name: "Pineapple Pastry", desc: "Light & fruity single slice", photo: "flavor-pineapple" },
    { name: "Red Velvet Pastry", desc: "Velvety and rich, single serve", photo: "flavor-redvelvet2" },
    { name: "Assorted Cupcakes", desc: "A colourful mix of mini cakes", photo: "flavor-cupcake" },
    { name: "Fresh Cream Donuts", desc: "Soft, glazed and filled", photo: "flavor-donut" },
  ],
  icecream: [
    { name: "Vanilla Ice Cream", desc: "Classic creamy scoop", photo: "flavor-ic1" },
    { name: "Chocolate Ice Cream", desc: "Rich cocoa scoop", photo: "flavor-ic3" },
    { name: "Strawberry Ice Cream", desc: "Fresh and fruity scoop", photo: "flavor-ic2" },
    { name: "Butterscotch Ice Cream", desc: "Crunchy caramel scoop", photo: "flavor-butterscotch" },
    { name: "Mixed Berry Ice Cream", desc: "A berry-forward favourite", photo: "flavor-mixedfruit" },
  ],
  milkshakes: [
    { name: "Chocolate Milkshake", desc: "Thick and creamy chocolate blend", photo: "flavor-shake2" },
    { name: "Strawberry Milkshake", desc: "Fresh strawberry blended shake", photo: "flavor-shake2" },
    { name: "Butterscotch Milkshake", desc: "Caramel malt-style shake", photo: "flavor-shake1" },
    { name: "Kulfi Milkshake", desc: "Our kulfi, blended into a shake", photo: "flavor-shake3" },
  ],
  kulfi: [
    { name: "Malai Kulfi", desc: "Traditional creamy kulfi on stick", photo: "flavor-kulfi1" },
    { name: "Kesar Pista Kulfi", desc: "Saffron & pistachio kulfi", photo: "flavor-kulfi1" },
    { name: "Rose Kulfi", desc: "Delicately rose-flavoured kulfi", photo: "flavor-kulfi2" },
    { name: "Falooda", desc: "Kulfi, vermicelli, rose syrup & basil seeds", photo: "flavor-falooda" },
  ],
  brownies: [
    { name: "Classic Brownie", desc: "Fudgy, rich chocolate brownie", photo: "flavor-brownie1" },
    { name: "Brownie with Ice Cream", desc: "Warm brownie topped with a scoop", photo: "flavor-brownie2" },
    { name: "Chocolate Lava", desc: "Molten chocolate centre dessert", photo: "flavor-choc-drip" },
  ],
};

const GALLERY_PHOTOS = [
  { label: "Birthday Cake", cls: "flavor-butterfly", file: "gallery-birthday-cake.jpg" },
  { label: "Chocolate Cake", cls: "flavor-chocooverload", file: "gallery-chocolate-cake.jpg" },
  { label: "Designer Cake", cls: "flavor-kitkat", file: "gallery-designer-cake.jpg" },
  { label: "Red Velvet", cls: "flavor-redvelvet2", file: "gallery-red-velvet.jpg" },
  { label: "Ice Cream", cls: "flavor-ic2", file: "gallery-ice-cream.jpg" },
  { label: "Kulfi", cls: "flavor-kulfi2", file: "gallery-kulfi.jpg" },
  { label: "Fruit Cake", cls: "flavor-mixedfruit", file: "gallery-fruit-cake.jpg" },
  { label: "Dessert Table", cls: "flavor-pastry", file: "gallery-dessert-table.jpg" },
];

/* ---------- Helpers ---------- */
function waLink(message){
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}
function cakeIconSVG(){
  return `<svg class="ph-icon" viewBox="0 0 64 64"><path d="M8 40c4-6 12-6 16 0s12 6 16 0 12-6 16 0" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="M12 40V26a20 20 0 0 1 40 0v14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><circle cx="32" cy="10" r="2.4" fill="currentColor"/></svg>`;
}

/* ---------- Preloader ---------- */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => loader.classList.add("hide"), 350);
});

/* ---------- Navbar scroll state ---------- */
const navbar = document.getElementById("navbar");
function onScroll(){
  navbar.classList.toggle("scrolled", window.scrollY > 40);
  const btt = document.getElementById("backToTop");
  btt.classList.toggle("show", window.scrollY > 600);
}
document.addEventListener("scroll", onScroll);
onScroll();

/* ---------- Mobile menu ---------- */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  hamburger.classList.toggle("active", isOpen);
  hamburger.setAttribute("aria-expanded", isOpen);
});
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  navLinks.classList.remove("open");
  hamburger.classList.remove("active");
}));

/* ---------- Hero slideshow ---------- */
const slides = document.querySelectorAll(".hero-slide");
let slideIndex = 0;
setInterval(() => {
  slides[slideIndex].classList.remove("active");
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}, 5000);

/* ---------- WhatsApp links (hero, float, location, contact, footer) ---------- */
const generalMsg = "Hello Cakewalk & Kulfihouse, I want to enquire about a cake/order.";
["heroWhatsapp","floatWhatsapp","locWhatsapp","contactWhatsapp","footerWhatsapp"].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.href = waLink(generalMsg);
});

/* ---------- Build cake grid ---------- */
const cakeGrid = document.getElementById("cakeGrid");
const cakeSelect = document.getElementById("cakeName");

function renderCakes(list){
  cakeGrid.innerHTML = "";
  if (!list.length){
    cakeGrid.innerHTML = `<p class="no-results">No cakes match your search. Try a different name.</p>`;
    return;
  }
  list.forEach(cake => {
    const card = document.createElement("div");
    card.className = "cake-card";
    card.dataset.tag = cake.tag;
    card.dataset.name = cake.name.toLowerCase();
    card.innerHTML = `
      <div class="cake-photo ${cake.photo}" title="add photo: ${cake.name.toLowerCase().replace(/\s+/g,'-')}-cake.jpg">
        ${cakeIconSVG()}
      </div>
      <div class="cake-card-body">
        <h3>${cake.name}</h3>
        <p>${cake.desc}</p>
        <div class="cake-price">₹${cake.price} <span style="font-size:0.7rem;font-weight:400;color:#8a7666;">approx.</span></div>
        <div class="cake-card-actions">
          <button class="btn btn-gold order-btn" data-cake="${cake.name}">Order Now</button>
          <a class="btn btn-outline" href="${waLink(`Hello Cakewalk & Kulfihouse, I'd like to enquire about the ${cake.name} cake (₹${cake.price} approx). Please share availability and confirm price.`)}" target="_blank" rel="noopener">WhatsApp</a>
        </div>
      </div>`;
    cakeGrid.appendChild(card);
  });
  attachOrderButtons();
}

CAKES.forEach(c => {
  const opt = document.createElement("option");
  opt.value = c.name;
  opt.textContent = `${c.name} — ₹${c.price} approx.`;
  cakeSelect.appendChild(opt);
});

renderCakes(CAKES);

/* Filter chips */
const filterChips = document.querySelectorAll(".filter-chip");
let currentFilter = "all";
let currentSearch = "";

function applyFilters(){
  let list = CAKES;
  if (currentFilter !== "all") list = list.filter(c => c.tag === currentFilter);
  if (currentSearch) list = list.filter(c => c.name.toLowerCase().includes(currentSearch));
  renderCakes(list);
}

filterChips.forEach(chip => {
  chip.addEventListener("click", () => {
    filterChips.forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    currentFilter = chip.dataset.filter;
    applyFilters();
  });
});

document.getElementById("cakeSearch").addEventListener("input", (e) => {
  currentSearch = e.target.value.trim().toLowerCase();
  applyFilters();
});

/* Quick order -> scroll to form and preselect cake */
function attachOrderButtons(){
  document.querySelectorAll(".order-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      cakeSelect.value = btn.dataset.cake;
      document.getElementById("order").scrollIntoView({ behavior: "smooth" });
      document.getElementById("custName").focus({ preventScroll: true });
    });
  });
}

/* ---------- Menu tabs ---------- */
const menuTabs = document.getElementById("menuTabs");
const menuPanels = document.getElementById("menuPanels");

function buildMenuPanels(){
  Object.keys(MENU).forEach(key => {
    const panel = document.createElement("div");
    panel.className = "menu-panel";
    panel.id = `panel-${key}`;
    MENU[key].forEach(item => {
      const el = document.createElement("div");
      el.className = "menu-item";
      el.innerHTML = `
        <div class="cake-photo ${item.photo}" title="add photo: ${item.name.toLowerCase().replace(/\s+/g,'-')}.jpg">${cakeIconSVG()}</div>
        <div class="menu-item-body">
          <h4>${item.name}</h4>
          <p>${item.desc}</p>
        </div>`;
      panel.appendChild(el);
    });
    menuPanels.appendChild(panel);
  });
  document.getElementById("panel-pastries").classList.add("active");
}
buildMenuPanels();

menuTabs.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    menuTabs.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    menuPanels.querySelectorAll(".menu-panel").forEach(p => p.classList.remove("active"));
    document.getElementById(`panel-${btn.dataset.tab}`).classList.add("active");
  });
});

/* ---------- Gallery + lightbox ---------- */
const galleryGrid = document.getElementById("galleryGrid");
const lightbox = document.getElementById("lightbox");
const lightboxContent = document.getElementById("lightboxContent");

GALLERY_PHOTOS.forEach(photo => {
  const el = document.createElement("div");
  el.className = `cake-photo ${photo.cls}`;
  el.title = `add photo: ${photo.file}`;
  el.innerHTML = cakeIconSVG();
  el.addEventListener("click", () => {
    lightboxContent.innerHTML = `<div class="cake-photo ${photo.cls}">${cakeIconSVG()}</div>`;
    lightbox.classList.add("open");
  });
  galleryGrid.appendChild(el);
});

document.getElementById("lightboxClose").addEventListener("click", () => lightbox.classList.remove("open"));
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) lightbox.classList.remove("open"); });

/* ---------- Instagram grid (reuses gallery-style placeholders) ---------- */
const instaGrid = document.getElementById("instaGrid");
GALLERY_PHOTOS.slice(0,5).forEach(photo => {
  const el = document.createElement("a");
  el.href = "https://instagram.com/cakewalk_gaya";
  el.target = "_blank"; el.rel = "noopener";
  el.className = `cake-photo ${photo.cls}`;
  el.title = `add photo: insta-${photo.file}`;
  el.innerHTML = cakeIconSVG();
  instaGrid.appendChild(el);
});

/* ---------- Order form -> WhatsApp ---------- */
const orderForm = document.getElementById("orderForm");

function setError(id, msg){
  const span = orderForm.querySelector(`.err[data-for="${id}"]`);
  const input = document.getElementById(id);
  if (span) span.textContent = msg || "";
  if (input) input.classList.toggle("invalid", !!msg);
}

orderForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(orderForm).entries());
  let valid = true;

  if (!data.custName || data.custName.trim().length < 2){
    setError("custName", "Please enter your name."); valid = false;
  } else setError("custName", "");

  if (!/^[0-9]{10}$/.test(data.custMobile || "")){
    setError("custMobile", "Enter a valid 10-digit mobile number."); valid = false;
  } else setError("custMobile", "");

  if (!data.cakeName){
    setError("cakeName", "Please select a cake."); valid = false;
  } else setError("cakeName", "");

  if (!data.reqDate){
    setError("reqDate", "Please choose a date."); valid = false;
  } else setError("reqDate", "");

  if (!valid) return;

  const dateFormatted = data.reqDate ? new Date(data.reqDate + "T00:00:00").toLocaleDateString("en-IN", { day:"numeric", month:"long" }) : "";

  const lines = [
    "Hello Cakewalk & Kulfihouse,",
    "",
    "I want to place an order.",
    "",
    `Name: ${data.custName}`,
    `Mobile: ${data.custMobile}`,
    `Cake: ${data.cakeName}`,
    `Size: ${data.cakeSize}`,
    data.flavour ? `Flavour Note: ${data.flavour}` : null,
    `Quantity: ${data.quantity || 1}`,
    `Type: ${data.orderType}`,
    dateFormatted ? `Date: ${dateFormatted}` : null,
    data.reqTime ? `Time: ${data.reqTime}` : null,
    data.message ? `Special Request: ${data.message}` : null,
    "",
    "Please confirm price and availability.",
  ].filter(Boolean);

  window.open(waLink(lines.join("\n")), "_blank", "noopener");
});

/* ---------- Back to top ---------- */
document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ---------- Scroll reveal ---------- */
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add("in");
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));
