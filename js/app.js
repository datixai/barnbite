/* Customer ordering site */
(function () {
  const $ = s => document.querySelector(s);
  const $$ = s => Array.from(document.querySelectorAll(s));
  const { esc, money } = Store;
  const icon = (k, c) => CAFE_ICONS.svg(k, c);

  let menu = Store.getMenu();
  let settings = Store.getSettings();
  let cart = Store.getCart();
  let mode = 'delivery';
  let group = 'all';
  let query = '';

  const branch = () => Store.branch(settings, settings.activeBranch);
  const catOf = id => menu.categories.find(c => c.id === id);
  const prodOf = id => menu.products.find(p => p.id === id);
  const iconOf = p => p.icon || (catOf(p.cat) || {}).icon || 'burger';
  const art = (p, cls) => p.img ? `<img src="${esc(p.img)}" alt="${esc(p.name)}" loading="lazy">` : icon(iconOf(p), cls || 'ico');

  /* ---------- Static bits ---------- */
  function renderChrome() {
    const b = branch();
    $('#stripLeft').innerHTML = settings.open
      ? `Open daily ${esc(settings.hours)}`
      : `<span class="closed">We are closed right now. Ordering opens soon.</span>`;
    $('#stripRight').innerHTML = b.phone ? `Call to order: <a href="tel:${esc(b.phone.replace(/\D/g, ''))}">${esc(b.phone)}</a>` : '';
    const name = settings.cafeName || 'X Cafe';
    const city = settings.city || '';
    document.title = `${name}${city ? ' ' + city : ''} | Order Online`;
    $('#brandLogo').innerHTML = Store.logo(name);
    $('#brandName').textContent = name;
    $('#brandSub').textContent = city || 'Order online';
    $('#brandHome').setAttribute('aria-label', `${name} home`);
    $('#heroText').textContent = `Crispy zingers, cheesy pizzas, broast, Chinese, steaks, coffee and desserts. Order online from ${name}${city ? ' ' + city : ''} for delivery or pickup.`;
    $('#brandLine').textContent = settings.brandLine || 'Freshly made, every day';
    $('#footName').textContent = name;
    $('#footLine').textContent = settings.brandLine || 'Freshly made, every day';
    $('#copy').textContent = `© ${new Date().getFullYear()} ${name}`;

    // Gallery: the cafe's own photos can replace these stock photos later
    const ig = settings.instagram || '';
    $('#instaLink').hidden = !ig;
    if (ig) $('#instaLink').href = ig;
    $('#instaRow').innerHTML = ['zinger', 'pepperoni2', 'cappuccino', 'bluelagoon', 'friedchicken', 'chococake', 'smash', 'icedlatte', 'kunafa', 'wings']
      .map(n => `<${ig ? `a href="${esc(ig)}" target="_blank" rel="noopener"` : 'a'}><img src="images/menu/${n}.jpg" alt="" loading="lazy" width="800" height="600"></a>`).join('');

    // Map: shows a placeholder until a Google Maps search is set for the branch
    const mq = (b.mapQuery || '').trim();
    $('#mapFrame').hidden = !mq;
    $('#mapLink').hidden = !mq;
    $('#mapPlaceholder').hidden = !!mq;
    if (mq) {
      const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(mq)}&z=15&output=embed`;
      if ($('#mapFrame').getAttribute('src') !== mapSrc) $('#mapFrame').setAttribute('src', mapSrc);
      $('#mapLink').href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mq)}`;
      $('#mapLink').textContent = `Get directions to ${b.name}`;
    }

    $('#heroArt').innerHTML = `<div class="disc"></div>${icon('pizza', 'ico a2')}${icon('fries', 'ico a3')}${icon('drink', 'ico a4')}${icon('burger', 'ico a1')}
      <div class="tag">Hot &amp; fresh<small>Delivery across ${esc(city || 'the city')}</small></div>`;

    const pick = ['birthday-deal', 'student-deal', 'broast-family-meal'].map(prodOf).filter(p => p && p.available);
    const fallback = menu.products.filter(p => p.popular && p.available && Store.hasPrice(p));
    const deals = (pick.length === 3 ? pick : fallback).slice(0, 3);
    $('#dealRow').innerHTML = deals.map(p => `
      <button class="deal" data-pid="${esc(p.id)}">${p.img ? `<img class="ico" src="${esc(p.img)}" alt="">` : icon(iconOf(p))}
        <div><b>${esc(p.name)}</b><span>${esc(p.desc)}</span><em>${priceText(p)}</em></div></button>`).join('');

    $('#branchList').innerHTML = settings.branches.map(x => `
      <div class="branch ${x.active ? 'on' : ''}"><b>${esc(x.name)}</b><span>${esc(x.address)}</span>
      ${x.phone ? `<span>${esc(x.phone)}</span>` : ''}
      ${x.active ? '<i class="live">Online ordering</i>' : '<i class="soon">Visit us, online soon</i>'}</div>`).join('');

    const phones = [b.phone, b.phone2].filter(Boolean);
    $('#contactBox').innerHTML = `
      <p>${esc(b.address)}</p>
      <p>${phones.map(ph => `<a href="tel:${esc(ph.replace(/\D/g, ''))}">${esc(ph)}</a>`).join(' &nbsp;·&nbsp; ')}</p>
      ${settings.email ? `<p><a href="mailto:${esc(settings.email)}">${esc(settings.email)}</a></p>` : ''}
      <p>Timing: ${esc(settings.hours)}</p>`;
    $('#social').innerHTML = `
      ${settings.instagram ? `<a href="${esc(settings.instagram)}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>Instagram</a>` : ''}
      ${settings.facebook ? `<a href="${esc(settings.facebook)}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3c-2.8 0-4 1.8-4 4.3V10H7v4h3v8h4v-8h3l1-4h-4V8.6c0-.4.3-.6.6-.6z"/></svg>Facebook</a>` : ''}
      ${b.whatsapp ? `<a href="https://wa.me/${esc(b.whatsapp)}" target="_blank" rel="noopener" style="background:#25D366"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.2 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l2 .9c.3.1.5.2.5.3.1.2.1.7-.1 1.3z"/></svg>WhatsApp</a>` : ''}`;
  }

  function priceText(p) {
    if (!Store.hasPrice(p)) return 'Price at cafe';
    if (p.sizes && p.sizes.length) return 'from ' + money(Store.minPrice(p));
    return money(p.price);
  }

  /* ---------- Menu ---------- */
  function visibleCats() {
    return menu.categories.filter(c => group === 'all' || c.group === group)
      .filter(c => menu.products.some(p => p.cat === c.id));
  }

  function matches(p) {
    if (!query) return true;
    const c = catOf(p.cat);
    return (p.name + ' ' + p.desc + ' ' + (c ? c.name : '')).toLowerCase().includes(query);
  }

  function card(p) {
    const ok = p.available && Store.hasPrice(p);
    const pt = priceText(p);
    return `<article class="card ${ok ? '' : 'off'}" data-pid="${esc(p.id)}">
      ${p.popular ? '<span class="badge">Popular</span>' : ''}
      <div class="card-art">${art(p)}</div>
      <div class="card-body"><h4>${esc(p.name)}</h4>${p.desc ? `<p>${esc(p.desc)}</p>` : ''}</div>
      <div class="card-foot">
        <span class="price ${Store.hasPrice(p) ? '' : 'ask'}">${!p.available ? 'Sold out' : pt}</span>
        <button class="add" ${ok ? '' : 'disabled'} aria-label="Add ${esc(p.name)}">${ok ? 'Add <span aria-hidden="true">+</span>' : (p.available ? 'Ask staff' : 'Sold out')}</button>
      </div></article>`;
  }

  function renderMenu() {
    const cats = visibleCats();
    $('#catScroll').innerHTML = cats.map(c => `<a href="#cat-${esc(c.id)}" data-cat="${esc(c.id)}">${icon(c.icon)}${esc(c.name)}</a>`).join('');
    let shown = 0;
    $('#sections').innerHTML = cats.map(c => {
      const items = menu.products.filter(p => p.cat === c.id && matches(p));
      shown += items.length;
      if (!items.length) return '';
      return `<section class="section" id="cat-${esc(c.id)}" data-cat="${esc(c.id)}">
        <div class="section-title">${icon(c.icon)}<div><h3>${esc(c.name)}</h3><span class="n">${items.length} item${items.length > 1 ? 's' : ''}</span></div></div>
        <div class="grid">${items.map(card).join('')}</div></section>`;
    }).join('');
    $('#emptySearch').style.display = shown ? 'none' : 'block';
    spy();
  }

  let observer;
  function spy() {
    if (observer) observer.disconnect();
    observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const id = e.target.dataset.cat;
        $$('#catScroll a').forEach(a => a.classList.toggle('on', a.dataset.cat === id));
        if (!document.getElementById('cat-' + id)) return;
        const on = $(`#catScroll a[data-cat="${id}"]`);
        const bar = $('#catScroll');
        if (on) bar.scrollTo({ left: on.offsetLeft - bar.clientWidth / 2 + on.offsetWidth / 2, behavior: 'smooth' });
      });
    }, { rootMargin: '-160px 0px -60% 0px' });
    $$('#sections .section').forEach(s => observer.observe(s));
  }

  /* ---------- Item modal ---------- */
  let current = null, curQty = 1;
  function openItem(pid) {
    const p = prodOf(pid);
    if (!p || !p.available || !Store.hasPrice(p)) return;
    current = p; curQty = 1;
    const sized = p.sizes && p.sizes.length;
    $('#itemBox').innerHTML = `
      <div class="box-head">${art(p)}<button class="x" data-close>&times;</button></div>
      <div class="box-body">
        <h3>${esc(p.name)}</h3><p class="sub">${esc(p.desc || (catOf(p.cat) || {}).name || '')}</p>
        ${sized ? `<div class="sizes">${p.sizes.map((s, i) => `<label><span><input type="radio" name="size" value="${i}" ${i === (p.sizes.length > 2 ? 1 : 0) ? 'checked' : ''}>${esc(s.label)}</span><b>${money(s.price)}</b></label>`).join('')}</div>` : ''}
        <div class="add-row">
          <div class="qty"><button data-q="-1" aria-label="Less">−</button><span id="mq">1</span><button data-q="1" aria-label="More">+</button></div>
          <button class="btn btn-yellow" id="addBtn"></button>
        </div>
      </div>`;
    updateAddBtn();
    show('#itemModal');
  }
  function selPrice() {
    const p = current;
    if (p.sizes && p.sizes.length) {
      const r = $('#itemBox input[name=size]:checked');
      const s = p.sizes[r ? +r.value : 0];
      return { size: s.label, price: Number(s.price) };
    }
    return { size: '', price: Number(p.price) };
  }
  function updateAddBtn() {
    $('#mq').textContent = curQty;
    $('#addBtn').textContent = `Add to order · ${money(selPrice().price * curQty)}`;
  }
  $('#itemBox').addEventListener('click', e => {
    const q = e.target.closest('[data-q]');
    if (q) { curQty = Math.max(1, Math.min(50, curQty + +q.dataset.q)); updateAddBtn(); }
    if (e.target.closest('#addBtn')) {
      const s = selPrice();
      addToCart(current, s.size, s.price, curQty);
      hideAll();
    }
  });
  $('#itemBox').addEventListener('change', updateAddBtn);

  /* ---------- Cart ---------- */
  function addToCart(p, size, price, qty) {
    const key = p.id + '|' + size;
    const ex = cart.find(l => l.key === key);
    if (ex) ex.qty += qty;
    else cart.push({ key, pid: p.id, name: p.name, size, price, qty });
    saveCart();
    toast(`<b>${esc(p.name)}</b> added`);
    const b = $('#cartBtn'); b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump');
  }
  function saveCart() { Store.saveCart(cart); renderCart(); }
  const subtotal = () => cart.reduce((a, l) => a + l.price * l.qty, 0);
  const fee = () => (mode === 'delivery' && cart.length) ? Number(settings.deliveryFee) || 0 : 0;

  function renderCart() {
    // Drop lines whose product was removed or became unavailable in admin
    cart = cart.filter(l => { const p = prodOf(l.pid); return p && p.available; });
    const n = cart.reduce((a, l) => a + l.qty, 0);
    $('#cartCount').textContent = n;
    $('#cartTotal').textContent = money(subtotal());
    $('#mcCount').textContent = `${n} item${n === 1 ? '' : 's'}`;
    $('#mcTotal').textContent = money(subtotal() + fee());
    $('#mobileCart').hidden = !n;
    document.body.classList.toggle('has-cart', !!n);

    if (!cart.length) {
      $('#cartBody').innerHTML = `<div class="cart-empty">${icon('combo')}<p><b>Your order is empty</b></p><p>Add a zinger, a pizza or a cold coffee to get started.</p></div>`;
      $('#cartFoot').innerHTML = `<button class="btn btn-yellow btn-block" data-close>Browse the menu</button>`;
      return;
    }
    $('#cartBody').innerHTML = cart.map((l, i) => {
      const p = prodOf(l.pid);
      return `<div class="line">${p ? art(p) : icon('burger')}
        <div><b>${esc(l.name)}</b>${l.size ? `<small>${esc(l.size)}</small>` : ''}<div class="lp">${money(l.price * l.qty)}</div></div>
        <div class="qty"><button data-li="${i}" data-d="-1" aria-label="Less">−</button><span>${l.qty}</span><button data-li="${i}" data-d="1" aria-label="More">+</button></div></div>`;
    }).join('');
    const min = Number(settings.minOrder) || 0;
    const short = min && subtotal() < min;
    $('#cartFoot').innerHTML = `
      <div class="sum"><span>Subtotal</span><span>${money(subtotal())}</span></div>
      <div class="sum"><span>${mode === 'delivery' ? 'Delivery' : 'Pickup'}</span><span>${mode === 'delivery' ? (fee() ? money(fee()) : 'Free') : 'Free'}</span></div>
      <div class="sum total"><span>Total</span><span>${money(subtotal() + fee())}</span></div>
      ${short ? `<p class="note">Minimum order is ${money(min)}. Add a little more to continue.</p>` : ''}
      ${!settings.open ? `<p class="note">We are closed right now, so new orders are paused.</p>` : ''}
      <button class="btn btn-red btn-block" id="toCheckout" ${short || !settings.open ? 'disabled' : ''}>Checkout</button>`;
  }
  $('#cartBody').addEventListener('click', e => {
    const b = e.target.closest('[data-li]'); if (!b) return;
    const l = cart[+b.dataset.li];
    l.qty += +b.dataset.d;
    if (l.qty <= 0) cart.splice(+b.dataset.li, 1);
    saveCart();
  });

  /* ---------- Checkout ---------- */
  function openCheckout() {
    const branches = Store.activeBranches(settings);
    const saved = (() => { try { return JSON.parse(localStorage.getItem('cafe_customer') || '{}'); } catch (e) { return {}; } })();
    $('#checkoutBox').innerHTML = `
      <div class="box-body">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><h3>Checkout</h3><button class="x" data-close style="background:#F1ECE3">&times;</button></div>
        <form class="form" id="coForm" novalidate>
          <div class="seg"><button type="button" data-m="delivery" class="${mode === 'delivery' ? 'on' : ''}">Delivery</button><button type="button" data-m="pickup" class="${mode === 'pickup' ? 'on' : ''}">Pickup</button></div>
          ${branches.length > 1 ? `<label>Branch<select name="branch">${branches.map(b => `<option value="${esc(b.id)}" ${b.id === settings.activeBranch ? 'selected' : ''}>${esc(b.name)}</option>`).join('')}</select></label>` : `<input type="hidden" name="branch" value="${esc(branch().id)}">`}
          <label>Full name<input name="name" autocomplete="name" value="${esc(saved.name || '')}" required><span class="err">Please enter your name</span></label>
          <label>Mobile number<input name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="03XX XXXXXXX" value="${esc(saved.phone || '')}" required><span class="err">Enter a valid mobile number, for example 0300 1234567</span></label>
          <label id="addrWrap" ${mode === 'pickup' ? 'hidden' : ''}>Delivery address<textarea name="address" rows="2" autocomplete="street-address" placeholder="House, street, area, landmark">${esc(saved.address || '')}</textarea><span class="err">Please enter your delivery address</span></label>
          <label>Notes for the kitchen (optional)<input name="notes" placeholder="Less spicy, extra sauce..."></label>
          <div class="note">Payment: <b>Cash on ${mode === 'delivery' ? 'delivery' : 'pickup'}</b>. Total <b>${money(subtotal() + fee())}</b>${mode === 'delivery' && !fee() ? ' (delivery charges, if any, confirmed on call)' : ''}.</div>
          <button class="btn btn-red btn-block" type="submit">Place order</button>
        </form>
      </div>`;
    hideAll(); show('#checkoutModal');
  }

  $('#checkoutBox').addEventListener('click', e => {
    const m = e.target.closest('[data-m]');
    if (m) { setMode(m.dataset.m); openCheckout(); }
  });

  $('#checkoutBox').addEventListener('submit', e => {
    e.preventDefault();
    const f = e.target;
    const v = Object.fromEntries(new FormData(f).entries());
    const phone = (v.phone || '').replace(/[^\d+]/g, '');
    const checks = [
      ['name', (v.name || '').trim().length >= 2],
      ['phone', /^(\+?92|0)?3\d{9}$/.test(phone)],
      ['address', mode === 'pickup' || (v.address || '').trim().length >= 6],
    ];
    let ok = true;
    checks.forEach(([n, good]) => { f.elements[n].closest('label').classList.toggle('bad', !good); if (!good) ok = false; });
    if (!ok) return;
    try { localStorage.setItem('cafe_customer', JSON.stringify({ name: v.name.trim(), phone, address: (v.address || '').trim() })); } catch (err) {}

    const b = Store.branch(settings, v.branch);
    const order = Store.addOrder({
      branch: b.id, branchName: b.name, mode,
      customer: { name: v.name.trim(), phone, address: mode === 'delivery' ? v.address.trim() : '', notes: (v.notes || '').trim() },
      items: cart.map(l => ({ name: l.name, size: l.size, price: l.price, qty: l.qty })),
      subtotal: subtotal(), deliveryFee: fee(), total: subtotal() + fee(),
    });
    cart = []; saveCart();
    showDone(order, b);
  });

  function waText(o) {
    const lines = o.items.map(i => `• ${i.qty} x ${i.name}${i.size ? ' (' + i.size + ')' : ''} = ${money(i.price * i.qty)}`);
    return [
      `*New order ${o.id}* (${o.mode === 'delivery' ? 'Delivery' : 'Pickup'}, ${o.branchName})`,
      '', ...lines, '',
      `Subtotal: ${money(o.subtotal)}`,
      o.deliveryFee ? `Delivery: ${money(o.deliveryFee)}` : null,
      `*Total: ${money(o.total)}*`, '',
      `Name: ${o.customer.name}`, `Phone: ${o.customer.phone}`,
      o.customer.address ? `Address: ${o.customer.address}` : null,
      o.customer.notes ? `Notes: ${o.customer.notes}` : null,
    ].filter(x => x !== null).join('\n');
  }

  function showDone(o, b) {
    const wa = b.whatsapp ? `https://wa.me/${b.whatsapp}?text=${encodeURIComponent(waText(o))}` : '';
    $('#checkoutBox').innerHTML = `<div class="done">
      <div class="tick">✓</div>
      <h3>Order placed!</h3>
      <div class="oid">${esc(o.id)}</div>
      <p class="sub">Thank you ${esc(o.customer.name.split(' ')[0])}. Total <b>${money(o.total)}</b>, cash on ${o.mode === 'delivery' ? 'delivery' : 'pickup'}.
      ${wa ? 'Tap below to send your order to our WhatsApp so the kitchen can confirm it fast.' : `Please call ${esc(b.phone)} to confirm.`}</p>
      ${wa ? `<a class="btn btn-wa btn-block" href="${wa}" target="_blank" rel="noopener">Send order on WhatsApp</a>` : ''}
      ${b.phone ? `<a class="btn btn-dark btn-block" href="tel:${esc(b.phone.replace(/\D/g, ''))}">Call ${esc(b.phone)}</a>` : ''}
      <button class="btn btn-yellow btn-block" data-close>Back to menu</button></div>`;
  }

  /* ---------- UI helpers ---------- */
  function show(sel) { $('#scrim').classList.add('show'); $(sel).classList.add('show'); }
  function hideAll() { $$('.modal, .drawer, .scrim').forEach(x => x.classList.remove('show')); }
  let tt;
  function toast(html) { const t = $('#toast'); t.innerHTML = html; t.classList.add('show'); clearTimeout(tt); tt = setTimeout(() => t.classList.remove('show'), 1800); }
  function setMode(m) {
    mode = m;
    $$('.mode button').forEach(b => b.classList.toggle('on', b.dataset.mode === m));
    renderCart();
  }

  document.addEventListener('click', e => {
    if (e.target.closest('[data-close]') || e.target === $('#scrim')) { hideAll(); return; }
    if (e.target.closest('#cartBtn') || e.target.closest('#mobileCart')) { show('#drawer'); return; }
    if (e.target.closest('#toCheckout')) { openCheckout(); return; }
    const md = e.target.closest('.mode button'); if (md) { setMode(md.dataset.mode); return; }
    const tab = e.target.closest('#catScroll a, nav.links a[href^="#cat-"]');
    if (tab) {
      const sec = document.getElementById(tab.getAttribute('href').slice(1));
      if (sec) {
        e.preventDefault();
        const offset = $('header.top').offsetHeight + $('.cat-bar').offsetHeight + 10;
        window.scrollTo({ top: sec.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
      }
      return;
    }
    const g = e.target.closest('#groups button');
    if (g) { group = g.dataset.g; $$('#groups button').forEach(x => x.classList.toggle('on', x === g)); renderMenu(); return; }
    const c = e.target.closest('.card, .deal');
    if (c && !e.target.closest('.modal')) openItem(c.dataset.pid);
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') hideAll(); });
  $('#search').addEventListener('input', e => { query = e.target.value.trim().toLowerCase(); renderMenu(); });

  // Live refresh when the admin panel changes the menu in another tab
  window.addEventListener('storage', e => {
    if (e.key === Store.KEYS.menu || e.key === Store.KEYS.settings) {
      menu = Store.getMenu(); settings = Store.getSettings();
      renderChrome(); renderMenu(); renderCart();
    }
  });

  renderChrome(); renderMenu(); renderCart();
})();
