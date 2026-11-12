/* Shared data layer for the customer site and the admin panel.
   Everything is kept in the browser (localStorage). See README.md
   for moving this to an online database later. */
(function () {
  const K = { menu: 'cafe_menu_v1', orders: 'cafe_orders_v1', settings: 'cafe_settings_v1', cart: 'cafe_cart_v1', seq: 'cafe_seq_v1' };

  // Demo settings. Change them in Admin > Settings & Branches for each cafe you show it to.
  const DEFAULT_SETTINGS = {
    cafeName: 'X Cafe',
    city: 'Your City',
    email: '',
    instagram: '',
    facebook: '',
    deliveryFee: 0,
    minOrder: 0,
    open: true,
    brandLine: 'Freshly made, every day',
    hours: '11:00 AM to 12:00 AM',
    pin: '1234',
    activeBranch: 'main',
    // Ready for more locations. Only the main branch takes orders until others are switched on.
    branches: [
      { id: 'main', name: 'Main Branch', address: '123 Main Boulevard, Your City', phone: '0300 0000000', phone2: '', whatsapp: '', active: true, mapQuery: '' },
      { id: 'city-centre', name: 'City Centre', address: 'Shop 4, City Centre Plaza, Your City', phone: '', phone2: '', whatsapp: '', active: false, mapQuery: '' },
      { id: 'mall-road', name: 'Mall Road', address: 'Mall Road, Your City', phone: '', phone2: '', whatsapp: '', active: false, mapQuery: '' },
    ],
  };

  function read(k, fb) {
    try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fb; } catch (e) { return fb; }
  }
  function write(k, v) {
    try { localStorage.setItem(k, JSON.stringify(v)); return true; }
    catch (e) { alert('Could not save. The browser storage is full. Try removing some product photos.'); return false; }
  }
  const clone = o => JSON.parse(JSON.stringify(o));

  const Store = {
    getMenu() {
      const saved = read(K.menu, null);
      if (!saved) return clone(window.CAFE_DEFAULT_MENU);
      // One-time update: give products saved before photos existed their default photo
      if (!saved.photosV1) {
        const def = {};
        window.CAFE_DEFAULT_MENU.products.forEach(p => { def[p.id] = p.img; });
        saved.products.forEach(p => { if (!p.img && def[p.id]) p.img = def[p.id]; });
        saved.photosV1 = true;
        write(K.menu, saved);
      }
      return saved;
    },
    saveMenu(m) { return write(K.menu, m); },
    resetMenu() { localStorage.removeItem(K.menu); },

    getSettings() {
      const s = Object.assign(clone(DEFAULT_SETTINGS), read(K.settings, {}));
      if (!Array.isArray(s.branches) || !s.branches.length) s.branches = clone(DEFAULT_SETTINGS.branches);
      return s;
    },
    saveSettings(s) { return write(K.settings, s); },
    activeBranches(s) { return (s || Store.getSettings()).branches.filter(b => b.active); },
    branch(s, id) { s = s || Store.getSettings(); return s.branches.find(b => b.id === id) || Store.activeBranches(s)[0] || s.branches[0]; },

    getOrders() { return read(K.orders, []); },
    saveOrders(o) { return write(K.orders, o); },
    addOrder(order) {
      const seq = (read(K.seq, 1000) || 1000) + 1;
      write(K.seq, seq);
      order.id = Store.initials(Store.getSettings().cafeName) + '-' + seq;
      order.createdAt = new Date().toISOString();
      order.status = 'new';
      const all = Store.getOrders();
      all.unshift(order);
      Store.saveOrders(all);
      return order;
    },

    getCart() { return read(K.cart, []); },
    saveCart(c) { return write(K.cart, c); },

    initials(name) {
      const words = String(name || 'X Cafe').replace(/&/g, ' ').split(/\s+/).filter(w => w && !/^(cafe|café|restaurant|the)$/i.test(w));
      return (words.length ? words : ['X']).slice(0, 2).map(w => w[0].toUpperCase()).join('');
    },
    // Simple generic logo: cup in a ring with the cafe's initials
    logo(name, cls) {
      const t = Store.esc(Store.initials(name));
      const two = t.length > 1;
      return `<svg class="${cls || ''}" viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="50" r="44" fill="#1F1B1A" stroke="#FFC20E" stroke-width="7"/>
        <path d="M24 35h46v15a19 19 0 0 1-19 19h-8a19 19 0 0 1-19-19z" fill="#FFC20E"/>
        <path d="M70 40h3a7.5 7.5 0 0 1 0 15h-4" stroke="#FFC20E" stroke-width="4.5" fill="none"/>
        <path d="M37 19c-3 4 3 6 0 10M47 17c-3 4 3 6 0 10M57 19c-3 4 3 6 0 10" stroke="#FFC20E" stroke-width="3" fill="none" stroke-linecap="round"/>
        <text x="47" y="${two ? 57 : 60}" text-anchor="middle" font-family="Poppins, 'Segoe UI', Arial, sans-serif" font-weight="800" font-size="${two ? 19 : 26}" ${two ? 'textLength="32" lengthAdjust="spacingAndGlyphs"' : ''} fill="#1F1B1A">${t}</text>
        <rect x="26" y="75" width="48" height="5" rx="2.5" fill="#FFC20E"/>
      </svg>`;
    },
    uid: () => Math.random().toString(36).slice(2, 9),
    money: n => 'Rs ' + Number(n || 0).toLocaleString('en-PK'),
    esc: s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])),
    minPrice(p) {
      if (p.sizes && p.sizes.length) return Math.min.apply(null, p.sizes.map(s => Number(s.price) || 0));
      return p.price;
    },
    hasPrice(p) { return (p.sizes && p.sizes.length) || (p.price !== null && p.price !== '' && p.price !== undefined); },
    KEYS: K,
  };

  window.Store = Store;
})();
