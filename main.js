
// ===== PRODUCT DATA =====
const products = [
  // --- MEAT ---
  { id: 1,  name: 'Cow Meat (Flesh Only)',       category: 'meat',     price: null,  tag: 'Cow',     img: 'cow meat flesh only.jpeg',     available: true },
  { id: 2,  name: 'Cow Meat (Sharing)',           category: 'meat',     price: null,  tag: 'Cow',     img: 'cow meat sharing.jpeg',   available: true },
  { id: 3,  name: 'Agemawo (Beef with Skin)',     category: 'meat',     price: 22000, tag: 'Cow',     img: 'agemawo.jpeg',   available: true },
  { id: 4,  name: 'Goat Meat (Sharing)',          category: 'meat',     price: 27000, tag: 'Goat',    img: 'goat meat sharing.jpeg',       available: true },
  { id: 5,  name: 'Goat Meat (Without Offal)',    category: 'meat',     price: 32000, tag: 'Goat',    img: 'goat meat without offal.jpeg',       available: true },
  { id: 6,  name: 'Ram Meat (Sharing)',           category: 'meat',     price: 27000, tag: 'Ram',     img: 'ram meat sharing.jpg',     available: true },
  { id: 7,  name: 'Ram Meat (Without Offal)',     category: 'meat',     price: 30500, tag: 'Ram',     img: 'ram meat without offal.jpg',     available: true },
  { id: 8,  name: 'Ijase (Shin) – With Skin',    category: 'meat',     price: 23000, tag: 'Cow',     img: 'ijase with skin.jpeg',   available: true },
  { id: 9,  name: 'Ijase (Shin) – Without Skin', category: 'meat',     price: 27000, tag: 'Cow',     img: 'ijase without skin.jpeg',   available: true },
  { id: 10, name: 'Tozo (Hump) – With Skin',     category: 'meat',     price: 24500, tag: 'Cow',     img: 'tozo with skin.jpeg',     available: true },
  { id: 11, name: 'Tozo (Hump) – Without Skin',  category: 'meat',     price: 27500, tag: 'Cow',     img: 'tozo without skin.jpeg',     available: true },
  
  // --- ASSORTED ---
  { id: 14, name: 'Cow Head',                    category: 'assorted', price: 21500, tag: 'Cow',     img: 'cow head.jpg',   available: true },
  { id: 15, name: 'Cow Assorted (Offal)',         category: 'assorted', price: 21500, tag: 'Cow',     img: 'cow assorted.jpg',   available: true },
  { id: 16, name: 'Ram Assorted',                category: 'assorted', price: 21000, tag: 'Ram',     img: 'ram assorted.jpg',     available: true },
  { id: 17, name: 'Goat Assorted',               category: 'assorted', price: 20000, tag: 'Goat',    img: 'goat assorted.jpg',       available: true },
  { id: 18, name: 'Shaki',                       category: 'assorted', price: 27000, tag: 'Cow',     img: 'shaki.jpg',   available: true },
  { id: 19, name: 'Abodi (Beef Reed)',            category: 'assorted', price: 12000, tag: 'Cow',     img: 'abodi.jpeg',   available: true },
  { id: 20, name: 'Roundabout (Intestine)',       category: 'assorted', price: 20000, tag: 'Cow',     img: 'roundabout.jpg',     available: true },
  { id: 21, name: 'Liver',                        category: 'assorted', price: 21000, tag: 'Cow',     img: 'liver.jpg',   available: true },
  { id: 22, name: 'Cow Tail',                     category: 'assorted', price: 30000, tag: 'Cow',     img: 'cow tail.jpeg',   available: true },
  { id: 23, name: 'Cow Kidney',                   category: 'assorted', price: 8500,  tag: 'Cow',     img: 'cow kidney.jpg',     available: true },
  { id: 24, name: 'Cow Heart',                    category: 'assorted', price: 14500, tag: 'Cow',     img: 'cow heart.jpg',     available: true },
  { id: 25, name: 'Cow Tongue',                   category: 'assorted', price: 17000, tag: 'Cow',     img: 'cow tongue.webp',   available: true },
  { id: 26, name: 'Cow Leg',                      category: 'assorted', price: 13000, tag: 'Cow',     img: 'cow legs.jpg',   available: true },
 
  // --- STEAKS & RIBS ---
  
  { id: 32, name: 'Beef Ribs (Deboned)',          category: 'steaks',   price: 24000, tag: 'Ribs',    img: 'boneless beef ribs.jpg',   available: true },
  { id: 33, name: 'Beef Ribs',                   category: 'steaks',   price: 22000, tag: 'Ribs',    img: 'beef ribs.avif',   available: true },
  
  // --- BONES & FAT ---
  { id: 35, name: 'Bone Marrow',                 category: 'bones',    price: 10000, tag: 'Bones',   img: 'bone marrow.webp',   available: true },
  {id: 36 , name: 'Suet (Hard Fat)',                 category: 'fat',      price: 9000,  tag: 'Fat',     img: 'suet.jpeg',   available: true },
  { id: 37, name: 'Brisket Bone',                category: 'bones',    price: 16000, tag: 'Bones',   img: 'brisket bone.jpeg',   available: true },
    { id: 38, name: 'Cow Fat',                     category: 'fat',      price: 8000,  tag: 'Fat',     img: 'cow fat.webp',   available: true },
];

const tagColors = {
  Cow:     'bg-orange-100 text-orange-700',
  Goat:    'bg-green-100 text-green-700',
  Ram:     'bg-blue-100 text-blue-700',
  Chicken: 'bg-yellow-100 text-yellow-700',
  Steak:   'bg-red-100 text-red-700',
  Ribs:    'bg-pink-100 text-pink-700',
  Bones:   'bg-stone-100 text-stone-600',
  Fat:     'bg-amber-100 text-amber-700',
};

function formatPrice(price) {
  if (!price) return 'Call for price';
  return `₦${price.toLocaleString('en-NG')}`;
}

function renderCard(p) {
  const tagClass = tagColors[p.tag] || 'bg-gray-100 text-gray-600';
  const dimClass = !p.available ? 'opacity-60' : '';
  return `
    <div class="card-hover bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col ${dimClass}">
      <div class="relative overflow-hidden h-48">
        <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
        ${!p.available ? '<div class="absolute inset-0 bg-black/40 flex items-center justify-center"><span class="bg-black/70 text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wide uppercase">Out of Stock</span></div>' : ''}
        <span class="absolute top-3 left-3 badge-tag ${tagClass}">${p.tag}</span>
      </div>
      <div class="p-5 flex flex-col flex-1">
        <h3 class="font-semibold text-gray-900 dark:text-white text-sm leading-snug mb-2 flex-1">${p.name}</h3>
        <div class="flex items-center justify-between mt-3">
          <span class="text-brand-600 dark:text-brand-400 font-bold text-sm">${formatPrice(p.price)}</span>
          <a href="tel:07032024561"
            class="text-xs font-semibold text-white px-4 py-1.5 rounded-full transition-colors ${p.available ? 'bg-brand-600 hover:bg-brand-700' : 'bg-gray-400 pointer-events-none'}">
            ${p.available ? 'Order' : 'Unavailable'}
          </a>
        </div>
      </div>
    </div>
  `;
}

let activeFilter = 'all';
let searchQuery = '';

function filterProducts() {
  const grid = document.getElementById('productGrid');
  const noResults = document.getElementById('noResults');
  if (!grid) return;

  const filtered = products.filter(p => {
    const matchCat = activeFilter === 'all' || p.category === activeFilter;
    const matchSearch = !searchQuery ||
      p.name.toLowerCase().includes(searchQuery) ||
      p.tag.toLowerCase().includes(searchQuery) ||
      p.category.toLowerCase().includes(searchQuery);
    return matchCat && matchSearch;
  });

  grid.innerHTML = filtered.map(renderCard).join('');
  noResults.classList.toggle('hidden', filtered.length > 0);
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.remove('bg-brand-600', 'text-white');
      b.classList.add('bg-white', 'text-gray-700', 'border', 'border-gray-200');
      b.classList.remove('active');
    });
    btn.classList.add('bg-brand-600', 'text-white', 'active');
    btn.classList.remove('bg-white', 'text-gray-700', 'border', 'border-gray-200');
    activeFilter = btn.dataset.filter;
    filterProducts();
  });
});

const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('input', e => {
    searchQuery = e.target.value.toLowerCase().trim();
    filterProducts();
  });
}

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const submitBtn = document.getElementById('submitBtn');
    const formMessage = document.getElementById('formMessage');

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
      const { error } = await supabase.from('contact_messages').insert([
        { name, email, phone, message }
      ]);

      if (error) throw error;

      formMessage.innerHTML = 'Thank you! Your message has been sent successfully.';
      formMessage.className = 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 rounded-lg p-4 text-sm font-medium';
      formMessage.classList.remove('hidden');
      contactForm.reset();
      setTimeout(() => formMessage.classList.add('hidden'), 4000);
    } catch (err) {
      formMessage.innerHTML = 'Error sending message. Please try again.';
      formMessage.className = 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 rounded-lg p-4 text-sm font-medium';
      formMessage.classList.remove('hidden');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }
  });
}

// ===== ORDER FORM =====
function groupByCategory(items) {
  return items.reduce((acc, it) => {
    (acc[it.category] = acc[it.category] || []).push(it);
    return acc;
  }, {});
}

function renderOrderFormProducts() {
  const container = document.getElementById('orderProducts');
  if (!container) return;
  const grouped = groupByCategory(products);
  container.innerHTML = Object.keys(grouped).map(cat => {
    const items = grouped[cat].map(p => `
      <div class="flex items-center justify-between gap-3 p-2 rounded border border-gray-100 dark:border-gray-800">
        <div class="flex-1">
          <div class="text-sm font-medium text-gray-900 dark:text-white">${p.name}</div>
          <div class="text-xs text-gray-500 dark:text-gray-400">${p.price ? formatPrice(p.price) : 'Call for price'}</div>
        </div>
        <div class="flex items-center gap-2">
          <input name="qty-${p.id}" type="number" min="0" value="0" data-id="${p.id}" class="order-qty w-20 px-2 py-1 rounded border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm" />
          <div class="text-xs text-gray-400 dark:text-gray-300">or</div>
          <input name="weight-${p.id}" type="number" min="0" step="0.1" placeholder="kg" data-id-weight="${p.id}" class="order-wt w-20 px-2 py-1 rounded border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm" />
        </div>
      </div>
    `).join('');
    return `
      <div class="mb-3">
        <h5 class="text-sm font-semibold text-gray-800 dark:text-gray-200 capitalize mb-2">${cat}</h5>
        <div class="space-y-2">${items}</div>
      </div>
    `;
  }).join('');
}

// ===== DRAFT + RECENT ORDERS (localStorage autosave) =====
const DRAFT_KEY = 'hf_order_draft_v1';
const RECENT_KEY = 'hf_recent_orders_v1';

function debounce(fn, wait = 300) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
}

function saveDraft() {
  if (!document.getElementById('orderForm')) return;
  const draft = {
    name: document.getElementById('orderName').value || '',
    email: document.getElementById('orderEmail').value || '',
    date: document.getElementById('orderDate') ? document.getElementById('orderDate').value : '',
    agreePickup: document.getElementById('agreePickup') ? document.getElementById('agreePickup').checked : false,
    items: {}
  };
  document.querySelectorAll('.order-qty').forEach(q => { draft.items[q.dataset.id] = draft.items[q.dataset.id] || {}; draft.items[q.dataset.id].qty = q.value; });
  document.querySelectorAll('.order-wt').forEach(w => { draft.items[w.dataset.idWeight || w.dataset.id] = draft.items[w.dataset.idWeight || w.dataset.id] || {}; draft.items[w.dataset.idWeight || w.dataset.id].wt = w.value; });
  try { localStorage.setItem(DRAFT_KEY, JSON.stringify(draft)); } catch (e) { /* ignore */ }
}

const debouncedSaveDraft = debounce(saveDraft, 250);

function loadDraft() {
  try { const raw = localStorage.getItem(DRAFT_KEY); return raw ? JSON.parse(raw) : null; } catch(e){ return null; }
}

function clearDraft() {
  try { localStorage.removeItem(DRAFT_KEY); } catch(e){}
}

function restoreDraft() {
  const d = loadDraft();
  if (!d) return;
  const nameEl = document.getElementById('orderName');
  const emailEl = document.getElementById('orderEmail');
  const dateEl = document.getElementById('orderDate');
  if (nameEl) nameEl.value = d.name || '';
  if (emailEl) emailEl.value = d.email || '';
  if (dateEl) dateEl.value = d.date || '';
  if (document.getElementById('agreePickup')) document.getElementById('agreePickup').checked = !!d.agreePickup;
  if (d.items) {
    Object.keys(d.items).forEach(id => {
      const qty = document.querySelector(`[data-id="${id}"]`);
      const wt = document.querySelector(`[name="weight-${id}"]`) || document.querySelector(`[data-id-weight="${id}"]`);
      if (qty && d.items[id].qty != null) qty.value = d.items[id].qty;
      if (wt && d.items[id].wt != null) wt.value = d.items[id].wt;
    });
  }
}

function attachDraftListeners() {
  if (!document.getElementById('orderForm')) return;
  ['orderName','orderEmail','orderDate','agreePickup'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('input', debouncedSaveDraft);
    el.addEventListener('change', debouncedSaveDraft);
  });
  document.addEventListener('input', (e) => {
    if (e.target && (e.target.classList.contains('order-qty') || e.target.classList.contains('order-wt'))) debouncedSaveDraft();
  });
}

function getRecentOrders() {
  try { const raw = localStorage.getItem(RECENT_KEY); return raw ? JSON.parse(raw) : []; } catch(e){ return []; }
}

function saveRecentOrder(order) {
  try {
    const arr = getRecentOrders();
    arr.unshift(order);
    while (arr.length > 20) arr.pop();
    localStorage.setItem(RECENT_KEY, JSON.stringify(arr));
  } catch(e){}
}

function clearRecentOrders() {
  try { localStorage.removeItem(RECENT_KEY); } catch(e){}
  renderRecentOrders();
}

function renderRecentOrders() {
  const container = document.getElementById('recentOrders');
  if (!container) return;
  const arr = getRecentOrders();
  if (!arr || arr.length === 0) { container.innerHTML = '<p class="text-xs text-gray-500 dark:text-gray-400">No recent orders yet.</p>'; return; }
  container.innerHTML = arr.map(o => {
    const items = (o.items || []).map(i => {
      const label = i.qty ? `${i.qty} pcs` : `${i.weight} kg`;
      return `<div class="flex items-center justify-between"><div class="text-xs">${i.name}</div><div class="text-xs font-semibold">${label}</div></div>`;
    }).join('');
    return `
      <div class="p-2 rounded border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div class="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
          <div>${o.name} • ${o.email}</div>
          <div class="font-medium">${o.date}</div>
        </div>
        <div class="text-xs text-gray-700 dark:text-gray-200 space-y-1">${items}</div>
      </div>
    `;
  }).join('');
}


function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const orderForm = document.getElementById('orderForm');
if (orderForm) {
  renderOrderFormProducts();
  // restore any saved draft and attach autosave listeners
  restoreDraft();
  attachDraftListeners();
  renderRecentOrders();
  const clearBtn = document.getElementById('clearRecentBtn');
  if (clearBtn) clearBtn.addEventListener('click', (e) => { e.preventDefault(); clearRecentOrders(); });
  orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('orderName').value.trim();
    const email = document.getElementById('orderEmail').value.trim();
    const orderDate = document.getElementById('orderDate') ? document.getElementById('orderDate').value : '';
    const messageEl = document.getElementById('orderMessage');

    if (!name || name.length < 2) {
      messageEl.textContent = 'Please enter your name.';
      messageEl.className = 'bg-red-100 text-red-700 dark:bg-red-900/30 rounded-lg p-3';
      messageEl.classList.remove('hidden');
      return;
    }
    if (!validateEmail(email)) {
      messageEl.textContent = 'Please enter a valid email address.';
      messageEl.className = 'bg-red-100 text-red-700 dark:bg-red-900/30 rounded-lg p-3';
      messageEl.classList.remove('hidden');
      return;
    }

    if (!orderDate) {
      messageEl.textContent = 'Please pick a preferred collection date.';
      messageEl.className = 'bg-red-100 text-red-700 dark:bg-red-900/30 rounded-lg p-3';
      messageEl.classList.remove('hidden');
      return;
    }

    // collect ordered items
    const quantities = Array.from(document.querySelectorAll('.order-qty'));
    const weights = Array.from(document.querySelectorAll('.order-wt'));
    const ordered = [];
    quantities.forEach(q => {
      const id = Number(q.dataset.id);
      const qty = Number(q.value || 0);
      const wtEl = document.querySelector(`[data-id-weight="${id}"]`);
      const wt = wtEl ? Number(wtEl.value || 0) : 0;
      if (qty > 0 || wt > 0) {
        const prod = products.find(p => p.id === id);
        ordered.push({ id, name: prod.name, qty: qty > 0 ? qty : null, weight: wt > 0 ? wt : null, price: prod.price });
      }
    });

    if (ordered.length === 0) {
      messageEl.textContent = 'Please select at least one product (quantity or weight).';
      messageEl.className = 'bg-red-100 text-red-700 dark:bg-red-900/30 rounded-lg p-3';
      messageEl.classList.remove('hidden');
      return;
    }

    // show confirmation summary
    const summary = ordered.map(it => {
      const qtyText = it.qty ? `${it.qty} pcs` : `${it.weight} kg`;
      return `<li class="py-1">${it.name} — <span class="font-semibold">${qtyText}</span></li>`;
    }).join('');

    messageEl.innerHTML = `
      <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded">
        <p class="font-semibold text-green-800 dark:text-green-300">Thank you, ${name} — your weekly order was received.</p>
        <p class="text-sm text-gray-700 dark:text-gray-300 mt-2">We will contact you at <span class="font-medium">${email}</span> to confirm pickup details.</p>
        <p class="text-sm text-gray-700 dark:text-gray-300 mt-1">Preferred collection date: <span class="font-medium">${orderDate}</span></p>
        <ul class="mt-3 text-sm text-gray-800 dark:text-gray-200">${summary}</ul>
        <p class="mt-3 text-xs text-gray-600 dark:text-gray-400">Please arrive on your chosen date to collect your order.</p>
      </div>
    `;
    messageEl.className = '';
    messageEl.classList.remove('hidden');

    // reset form inputs
    orderForm.reset();
    // re-render to reset quantities (keeps UI consistent)
    renderOrderFormProducts();
    // save to recent orders and clear draft
    const orderRecord = {
      id: Date.now(),
      createdAt: new Date().toISOString(),
      name,
      email,
      date: orderDate,
      items: ordered
    };
    saveRecentOrder(orderRecord);
    clearDraft();
    renderRecentOrders();
  });
}

// ===== FAQ =====
const faqs = [
  { q: 'What types of meat do you sell?',
    a: 'We sell cow meat, ram meat, and goat meat. We also carry assorted offal, ribs, and bones. Both sharing portions and kilogram orders are available.' },
  { q: 'How do I place an order?',
    a: 'Simply call or WhatsApp us on 07032024561 or 08034253917. Tell us what you want, the quantity, and your delivery address — we\'ll take care of the rest.' },
  { q: 'Is sharing and kilo available?',
    a: 'Yes! We offer both sharing (whole/half portions of an animal) and per-kilogram purchases. This makes it easy whether you\'re buying for a household or a large event.' },
  { q: 'Do you deliver?',
    a: 'Yes, we offer doorstep delivery. Contact us on 07032024561 for delivery area and fee information.' },
  { q: 'Is the meat fresh and hygienically processed?',
    a: 'Absolutely. All our meat is freshly sourced, hygienically processed, and packaged in sealed food-grade bags to maintain quality and freshness.' },
  { q: 'Can I order for events and bulk supply?',
    a: 'Yes! We specialise in bulk supply for events, restaurants, and households. Call us in advance so we can prepare your order promptly.' },
  { q: 'What are your operating hours?',
    a: 'We are available daily. Call us on 07032024561 or 08034253917 and we will attend to you as quickly as possible.' },
  { q: 'Do you sell goat and ram assorted parts?',
    a: 'Yes, we carry goat assorted, ram assorted, and a full range of cow assorted including offal, shaki, ponmo, liver, cow tail, tongue, and more.' },
];

function renderFaq() {
  const list = document.getElementById('faqList');
  if (!list) return;
  list.innerHTML = faqs.map((item, i) => `
    <div class="border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden">
      <button class="faq-btn w-full flex items-center justify-between px-6 py-5 text-left bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" data-idx="${i}">
        <span class="font-semibold text-gray-900 dark:text-white text-sm pr-4">${item.q}</span>
        <svg class="faq-icon w-5 h-5 text-brand-500 flex-shrink-0 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
          <path d="M19 9l-7 7-7-7"/>
        </svg>
      </button>
      <div class="faq-answer hidden px-6 pb-5 bg-white dark:bg-gray-900">
        <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">${item.a}</p>
      </div>
    </div>
  `).join('');

  list.querySelectorAll('.faq-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const icon = btn.querySelector('.faq-icon');
      const isOpen = !answer.classList.contains('hidden');
      list.querySelectorAll('.faq-answer').forEach(a => a.classList.add('hidden'));
      list.querySelectorAll('.faq-icon').forEach(ic => ic.style.transform = '');
      if (!isOpen) {
        answer.classList.remove('hidden');
        icon.style.transform = 'rotate(180deg)';
      }
    });
  });
}

// ===== DARK MODE =====
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
if (localStorage.getItem('theme') === 'dark') html.classList.add('dark');

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
  });
}

// ===== MOBILE MENU =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.add('hidden')));
}

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
  document.getElementById('navbar')?.classList.toggle('shadow-md', window.scrollY > 10);
});

// ===== INIT =====
filterProducts();
renderFaq();

document.getElementById('currentYear').textContent = new Date().getFullYear();