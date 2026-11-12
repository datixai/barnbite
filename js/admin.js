/* Admin panel: orders, products, categories, settings */
(function () {
  const $ = s => document.querySelector(s);
  const $$ = s => Array.from(document.querySelectorAll(s));
  const { esc, money } = Store;
  const icon = (k, c) => CAFE_ICONS.svg(k, c);

  let menu = Store.getMenu();
  let settings = Store.getSettings();
  let orderFilter = 'all';

  const STATUS = { new: 'New', preparing: 'Preparing', ready: 'Ready / On the way', done: 'Completed', cancelled: 'Cancelled' };
  const GROUPS = { food: 'Food', bar: 'Bar & Drinks', desserts: 'Desserts' };
  const catOf = id => menu.categories.find(c => c.id === id);
  const iconOf = p => p.icon || (catOf(p.cat) || {}).icon || 'burger';
  const thumb = p => p.img ? `<img class="thumb" src="${esc(p.img)}" alt="">` : icon(iconOf(p), 'thumb');
  const slug = s => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || Store.uid();
  const saveMenu = msg => { if (Store.saveMenu(menu)) toast(msg || 'Saved'); };

  /* ---------- Login (simple PIN, kept on this device) ---------- */
  function enter() { $('#login').hidden = true; $('#app').hidden = false; renderAll(); }
  if (sessionStorage.getItem('cafe_admin') === '1') enter();
  $('#loginForm').addEventListener('submit', e => {
    e.preventDefault();
    if ($('#pin').value === String(Store.getSettings().pin)) { sessionStorage.setItem('cafe_admin', '1'); enter(); }
    else { $('#loginForm').classList.add('bad'); $('#pin').select(); }
  });
  $('#logout').addEventListener('click', () => { sessionStorage.removeItem('cafe_admin'); location.reload(); });

  /* ---------- Tabs ---------- */
  $('#tabs').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    $$('#tabs button').forEach(x => x.classList.toggle('on', x === b));
    $$('[data-panel]').forEach(p => p.hidden = p.dataset.panel !== b.dataset.tab);
    try { localStorage.setItem('cafe_admin_tab', b.dataset.tab); } catch (err) {}
  });
  try { const t = localStorage.getItem('cafe_admin_tab'); if (t) { const b = $(`#tabs [data-tab="${t}"]`); if (b) b.click(); } } catch (err) {}

  function renderBrand() {
    const name = settings.cafeName || 'X Cafe';
    document.title = `${name} Admin`;
    $('#loginLogo').innerHTML = Store.logo(name);
    $('#sideLogo').innerHTML = Store.logo(name);
    $('#loginTitle').textContent = `${name} Admin`;
    $('#sideName').textContent = name;
  }
  renderBrand();
  function renderAll() { renderBrand(); renderOrders(); renderProducts(); renderCats(); renderSettings(); }

  /* ---------- Orders ---------- */
  function renderOrders() {
    const all = Store.getOrders();
    const today = new Date().toDateString();
    const todays = all.filter(o => new Date(o.createdAt).toDateString() === today && o.status !== 'cancelled');
    const nNew = all.filter(o => o.status === 'new').length;
    $('#newCount').hidden = !nNew; $('#newCount').textContent = nNew;
    $('#stats').innerHTML = [
      ['New orders', nNew], ['Orders today', todays.length],
      ['Sales today', money(todays.reduce((a, o) => a + o.total, 0))], ['All orders', all.length],
    ].map(([l, v]) => `<div class="stat"><small>${l}</small><b>${v}</b></div>`).join('');

    const list = all.filter(o => orderFilter === 'all' || o.status === orderFilter);
    if (!list.length) { $('#orderList').innerHTML = `<div class="empty">No orders here yet. Orders placed on the website will show up here.</div>`; return; }
    $('#orderList').innerHTML = list.map(o => {
      const d = new Date(o.createdAt);
      return `<div class="order ${o.status}">
        <div class="order-top"><div><b>${esc(o.id)}</b><small>${d.toLocaleDateString('en-GB')} ${d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} · ${esc(o.branchName || '')}</small></div>
          <span class="pill ${o.mode}">${o.mode === 'delivery' ? 'Delivery' : 'Pickup'}</span></div>
        <ul>${o.items.map(i => `<li><span>${i.qty} x ${esc(i.name)}${i.size ? ` <small>(${esc(i.size)})</small>` : ''}</span><b>${money(i.price * i.qty)}</b></li>`).join('')}
          ${o.deliveryFee ? `<li><span>Delivery</span><b>${money(o.deliveryFee)}</b></li>` : ''}
          <li><span><b>Total</b></span><b>${money(o.total)}</b></li></ul>
        <div class="cust"><b>${esc(o.customer.name)}</b> · <a href="tel:${esc(o.customer.phone)}">${esc(o.customer.phone)}</a>
          ${o.customer.address ? `<br>${esc(o.customer.address)}` : ''}${o.customer.notes ? `<br>Note: ${esc(o.customer.notes)}` : ''}</div>
        <div class="order-act">
          <select data-oid="${esc(o.id)}" aria-label="Order status">${Object.entries(STATUS).map(([k, v]) => `<option value="${k}" ${k === o.status ? 'selected' : ''}>${v}</option>`).join('')}</select>
          <a class="btn btn-sm btn-light" href="https://wa.me/${esc(o.customer.phone.replace(/^0/, '92').replace(/\D/g, ''))}" target="_blank" rel="noopener">WhatsApp customer</a>
          <button class="btn btn-sm btn-danger" data-del-order="${esc(o.id)}">Delete</button>
        </div></div>`;
    }).join('');
  }
  $('#orderFilters').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    orderFilter = b.dataset.s; $$('#orderFilters button').forEach(x => x.classList.toggle('on', x === b)); renderOrders();
  });
  $('#orderList').addEventListener('change', e => {
    const s = e.target.closest('select[data-oid]'); if (!s) return;
    const all = Store.getOrders(); const o = all.find(x => x.id === s.dataset.oid);
    if (o) { o.status = s.value; Store.saveOrders(all); renderOrders(); toast(`${o.id}: ${STATUS[o.status]}`); }
  });
  $('#orderList').addEventListener('click', e => {
    const b = e.target.closest('[data-del-order]'); if (!b) return;
    if (!confirm(`Delete order ${b.dataset.delOrder}? This cannot be undone.`)) return;
    Store.saveOrders(Store.getOrders().filter(o => o.id !== b.dataset.delOrder)); renderOrders();
  });

  /* ---------- Products ---------- */
  function renderProducts() {
    const sel = $('#pCat').value;
    $('#pCat').innerHTML = `<option value="">All categories</option>` + menu.categories.map(c => `<option value="${esc(c.id)}">${esc(c.name)}</option>`).join('');
    $('#pCat').value = sel || '';
    const q = $('#pSearch').value.trim().toLowerCase();
    const rows = menu.products.filter(p => (!$('#pCat').value || p.cat === $('#pCat').value) && (!q || (p.name + ' ' + p.desc).toLowerCase().includes(q)));
    $('#pRows').innerHTML = rows.map(p => {
      const c = catOf(p.cat);
      const price = p.sizes && p.sizes.length ? p.sizes.map(s => `${esc(s.label.split(' ')[0])} ${Number(s.price).toLocaleString()}`).join('<br>') : (Store.hasPrice(p) ? money(p.price) : '<i style="color:#999">Not set</i>');
      return `<tr data-pid="${esc(p.id)}"><td>${thumb(p)}</td><td class="nm"><b>${esc(p.name)}</b><small>${esc(p.desc)}</small></td>
        <td>${esc(c ? c.name : 'None')}</td><td>${price}</td>
        <td><label class="switch"><input type="checkbox" data-f="available" ${p.available ? 'checked' : ''}><span></span></label></td>
        <td><label class="switch"><input type="checkbox" data-f="popular" ${p.popular ? 'checked' : ''}><span></span></label></td>
        <td class="acts"><button class="btn btn-sm btn-light" data-edit>Edit</button> <button class="btn btn-sm btn-danger" data-del>Delete</button></td></tr>`;
    }).join('') || `<tr><td colspan="7" style="text-align:center;color:#999;padding:30px">No products found</td></tr>`;
  }
  $('#pSearch').addEventListener('input', renderProducts);
  $('#pCat').addEventListener('change', renderProducts);
  $('#pRows').addEventListener('change', e => {
    const t = e.target.closest('[data-f]'); if (!t) return;
    const p = menu.products.find(x => x.id === t.closest('tr').dataset.pid);
    p[t.dataset.f] = t.checked; saveMenu(`${p.name} updated`);
  });
  $('#pRows').addEventListener('click', e => {
    const tr = e.target.closest('tr[data-pid]'); if (!tr) return;
    const p = menu.products.find(x => x.id === tr.dataset.pid);
    if (e.target.closest('[data-edit]')) productForm(p);
    if (e.target.closest('[data-del]') && confirm(`Delete "${p.name}" from the menu?`)) {
      menu.products = menu.products.filter(x => x !== p); saveMenu('Product deleted'); renderProducts(); renderCats();
    }
  });
  $('#addProduct').addEventListener('click', () => productForm(null));

  function productForm(p) {
    const isNew = !p;
    const d = p ? JSON.parse(JSON.stringify(p)) : { id: '', cat: $('#pCat').value || menu.categories[0].id, name: '', desc: '', price: '', sizes: [], icon: '', img: '', available: true, popular: false };
    let sized = d.sizes && d.sizes.length > 0;
    const sizeRow = (s = { label: '', price: '' }) => `<div class="size-row"><input placeholder='Size, e.g. Large 12"' value="${esc(s.label)}" data-sl><input type="number" min="0" placeholder="Price" value="${esc(s.price)}" data-sp><button type="button" data-rm aria-label="Remove size">×</button></div>`;

    $('#modalBox').innerHTML = `<h2>${isNew ? 'Add product' : 'Edit product'}</h2>
      <form class="form" id="pForm">
        <label>Name<input name="name" value="${esc(d.name)}" required></label>
        <label>Description <span class="help">(ingredients or what is included)</span><textarea name="desc" rows="2">${esc(d.desc)}</textarea></label>
        <label>Category<select name="cat">${menu.categories.map(c => `<option value="${esc(c.id)}" ${c.id === d.cat ? 'selected' : ''}>${esc(c.name)}</option>`).join('')}</select></label>
        <div><div class="price-type"><button type="button" data-pt="single" class="${sized ? '' : 'on'}">One price</button><button type="button" data-pt="sizes" class="${sized ? 'on' : ''}">Sizes (e.g. pizza)</button></div></div>
        <label id="singleWrap" ${sized ? 'hidden' : ''}>Price (Rs) <span class="help">leave empty to show "Price at cafe"</span><input name="price" type="number" min="0" value="${esc(d.price == null ? '' : d.price)}"></label>
        <div id="sizesWrap" ${sized ? '' : 'hidden'}><div class="size-rows" id="sizeRows">${(sized ? d.sizes : [{}, {}]).map(sizeRow).join('')}</div>
          <button type="button" class="btn btn-sm btn-light" id="addSize" style="margin-top:6px">+ Add size</button></div>
        <label>Picture <span class="help">upload a real photo, or pick an icon below</span>
          <div class="img-row"><div class="preview" id="imgPrev"></div>
            <div style="display:grid;gap:6px"><input type="file" accept="image/*" id="imgFile"><button type="button" class="btn btn-sm btn-danger" id="imgClear">Remove photo</button></div></div></label>
        <div><div style="font-weight:600;font-size:13px;margin-bottom:5px">Icon</div><div class="icon-grid" id="iconGrid">
          <button type="button" data-ic="" class="${d.icon ? '' : 'on'}">${icon((catOf(d.cat) || {}).icon || 'burger')}Category</button>
          ${CAFE_ICONS.keys.map(k => `<button type="button" data-ic="${k}" class="${d.icon === k ? 'on' : ''}">${icon(k)}${esc(CAFE_ICONS.label(k))}</button>`).join('')}</div></div>
        <label class="row"><input type="checkbox" name="available" ${d.available ? 'checked' : ''}> Available to order</label>
        <label class="row"><input type="checkbox" name="popular" ${d.popular ? 'checked' : ''}> Show "Popular" badge</label>
        <div class="modal-foot"><button type="button" class="btn btn-light" data-close>Cancel</button><button class="btn btn-yellow" type="submit">${isNew ? 'Add product' : 'Save changes'}</button></div>
      </form>`;
    const f = $('#pForm');
    const prev = () => { $('#imgPrev').innerHTML = d.img ? `<img src="${esc(d.img)}" alt="">` : icon(d.icon || (catOf(f.cat.value) || {}).icon || 'burger'); $('#imgClear').hidden = !d.img; };
    prev();
    f.addEventListener('click', e => {
      const pt = e.target.closest('[data-pt]');
      if (pt) { sized = pt.dataset.pt === 'sizes'; $$('[data-pt]').forEach(b => b.classList.toggle('on', b === pt)); $('#singleWrap').hidden = sized; $('#sizesWrap').hidden = !sized; }
      if (e.target.closest('#addSize')) $('#sizeRows').insertAdjacentHTML('beforeend', sizeRow());
      const rm = e.target.closest('[data-rm]'); if (rm) rm.parentElement.remove();
      const ic = e.target.closest('[data-ic]');
      if (ic) { d.icon = ic.dataset.ic; $$('#iconGrid button').forEach(b => b.classList.toggle('on', b === ic)); prev(); }
      if (e.target.closest('#imgClear')) { d.img = ''; $('#imgFile').value = ''; prev(); }
    });
    f.cat.addEventListener('change', prev);
    $('#imgFile').addEventListener('change', e => {
      const file = e.target.files[0]; if (!file) return;
      shrink(file, 480).then(url => { d.img = url; prev(); }).catch(() => alert('Could not read that image.'));
    });
    f.addEventListener('submit', e => {
      e.preventDefault();
      const name = f.elements.name.value.trim();
      if (!name) { f.elements.name.focus(); return; }
      d.name = name; d.desc = f.desc.value.trim(); d.cat = f.cat.value;
      d.available = f.available.checked; d.popular = f.popular.checked;
      if (sized) {
        d.sizes = $$('#sizeRows .size-row').map(r => ({ label: r.querySelector('[data-sl]').value.trim(), price: Number(r.querySelector('[data-sp]').value) }))
          .filter(s => s.label && s.price > 0);
        if (!d.sizes.length) { alert('Add at least one size with a price.'); return; }
        d.price = null;
      } else {
        d.sizes = []; d.price = f.price.value === '' ? null : Number(f.price.value);
      }
      if (isNew) {
        let id = slug(name); while (menu.products.some(x => x.id === id)) id = slug(name) + '-' + Store.uid().slice(0, 3);
        d.id = id; menu.products.push(d);
      } else {
        Object.assign(p, d);
      }
      saveMenu(isNew ? 'Product added' : 'Changes saved');
      closeModal(); renderProducts(); renderCats();
    });
    openModal();
  }

  function shrink(file, max) {
    return new Promise((res, rej) => {
      const r = new FileReader();
      r.onerror = rej;
      r.onload = () => {
        const img = new Image();
        img.onerror = rej;
        img.onload = () => {
          const k = Math.min(1, max / Math.max(img.width, img.height));
          const c = document.createElement('canvas');
          c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
          c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
          res(c.toDataURL('image/jpeg', 0.8));
        };
        img.src = r.result;
      };
      r.readAsDataURL(file);
    });
  }

  /* ---------- Categories ---------- */
  function renderCats() {
    $('#catList').innerHTML = menu.categories.map((c, i) => {
      const n = menu.products.filter(p => p.cat === c.id).length;
      return `<div class="cat-row" data-i="${i}">${icon(c.icon, 'thumb')}
        <div class="nm"><b>${esc(c.name)}</b><small>${n} product${n === 1 ? '' : 's'}</small></div>
        <span class="group-tag">${esc(GROUPS[c.group] || c.group)}</span>
        <button class="btn btn-sm btn-light" data-mv="-1" ${i === 0 ? 'disabled' : ''} aria-label="Move up">↑</button>
        <button class="btn btn-sm btn-light" data-mv="1" ${i === menu.categories.length - 1 ? 'disabled' : ''} aria-label="Move down">↓</button>
        <button class="btn btn-sm btn-light" data-edit>Edit</button>
        <button class="btn btn-sm btn-danger" data-del>Delete</button></div>`;
    }).join('');
  }
  $('#catList').addEventListener('click', e => {
    const row = e.target.closest('.cat-row'); if (!row) return;
    const i = +row.dataset.i, c = menu.categories[i];
    const mv = e.target.closest('[data-mv]');
    if (mv) { const j = i + +mv.dataset.mv; [menu.categories[i], menu.categories[j]] = [menu.categories[j], menu.categories[i]]; saveMenu('Order updated'); renderCats(); }
    if (e.target.closest('[data-edit]')) catForm(c);
    if (e.target.closest('[data-del]')) {
      const n = menu.products.filter(p => p.cat === c.id).length;
      if (n) { alert(`"${c.name}" still has ${n} product(s). Move or delete them first.`); return; }
      if (confirm(`Delete the category "${c.name}"?`)) { menu.categories.splice(i, 1); saveMenu('Category deleted'); renderCats(); renderProducts(); }
    }
  });
  $('#addCat').addEventListener('click', () => catForm(null));

  function catForm(c) {
    const d = c ? Object.assign({}, c) : { id: '', name: '', group: 'food', icon: 'burger' };
    $('#modalBox').innerHTML = `<h2>${c ? 'Edit category' : 'Add category'}</h2>
      <form class="form" id="cForm">
        <label>Name<input name="name" value="${esc(d.name)}" required></label>
        <label>Menu group<select name="group">${Object.entries(GROUPS).map(([k, v]) => `<option value="${k}" ${k === d.group ? 'selected' : ''}>${v}</option>`).join('')}</select></label>
        <div><div style="font-weight:600;font-size:13px;margin-bottom:5px">Icon</div><div class="icon-grid" id="cIcons">
          ${CAFE_ICONS.keys.map(k => `<button type="button" data-ic="${k}" class="${d.icon === k ? 'on' : ''}">${icon(k)}${esc(CAFE_ICONS.label(k))}</button>`).join('')}</div></div>
        <div class="modal-foot"><button type="button" class="btn btn-light" data-close>Cancel</button><button class="btn btn-yellow" type="submit">Save</button></div>
      </form>`;
    $('#cIcons').addEventListener('click', e => { const b = e.target.closest('[data-ic]'); if (!b) return; d.icon = b.dataset.ic; $$('#cIcons button').forEach(x => x.classList.toggle('on', x === b)); });
    $('#cForm').addEventListener('submit', e => {
      e.preventDefault();
      const f = e.target; const name = f.elements.name.value.trim(); if (!name) return;
      d.name = name; d.group = f.group.value;
      if (c) Object.assign(c, d);
      else { let id = slug(name); while (menu.categories.some(x => x.id === id)) id += '-' + Store.uid().slice(0, 3); d.id = id; menu.categories.push(d); }
      saveMenu('Category saved'); closeModal(); renderCats(); renderProducts();
    });
    openModal();
  }

  /* ---------- Settings & branches ---------- */
  function renderSettings() {
    const s = settings;
    $('#setForm').innerHTML = `
      <label>Cafe name<input name="cafeName" value="${esc(s.cafeName)}"></label>
      <label>City / area <span class="help">shown under the name, e.g. Muzaffarabad</span><input name="city" value="${esc(s.city || '')}"></label>
      <label>Brand line<input name="brandLine" value="${esc(s.brandLine || '')}"></label>
      <label>Opening hours<input name="hours" value="${esc(s.hours)}"></label>
      <label>Email<input name="email" type="email" value="${esc(s.email)}"></label>
      <label>Instagram link<input name="instagram" value="${esc(s.instagram)}"></label>
      <label>Facebook link<input name="facebook" value="${esc(s.facebook)}"></label>
      <label>Delivery charges (Rs) <span class="help">0 means free or confirmed on call</span><input name="deliveryFee" type="number" min="0" value="${esc(s.deliveryFee)}"></label>
      <label>Minimum order (Rs) <span class="help">0 means no minimum</span><input name="minOrder" type="number" min="0" value="${esc(s.minOrder)}"></label>
      <label class="row"><input type="checkbox" name="open" ${s.open ? 'checked' : ''}> Taking online orders now (untick to pause ordering)</label>
      <label>Change admin PIN <span class="help">leave empty to keep the current PIN</span><input name="pin" type="password" inputmode="numeric" autocomplete="new-password"></label>
      <div class="full"><button class="btn btn-yellow" type="submit">Save settings</button></div>`;
    $('#branchRows').innerHTML = s.branches.map((b, i) => `<div class="branch-row" data-i="${i}">
      <label>Branch<input data-k="name" value="${esc(b.name)}"></label>
      <label>Address<input data-k="address" value="${esc(b.address)}"></label>
      <label>Phone<input data-k="phone" value="${esc(b.phone)}"></label>
      <label>Second phone<input data-k="phone2" value="${esc(b.phone2)}"></label>
      <label>WhatsApp (92...)<input data-k="whatsapp" value="${esc(b.whatsapp)}" placeholder="923001234567"></label>
      <label>Google Maps search<input data-k="mapQuery" value="${esc(b.mapQuery || '')}" placeholder="Name and area as on Google Maps"></label>
      <span class="main-b"><label class="switch"><input type="checkbox" data-k="active" ${b.active ? 'checked' : ''}><span></span></label>Online</span>
      <span class="main-b"><input type="radio" name="mainBranch" value="${esc(b.id)}" ${s.activeBranch === b.id ? 'checked' : ''}>Main</span>
    </div>`).join('') + `<div><button class="btn btn-yellow" id="saveBranches">Save branches</button></div>`;
  }
  $('#setForm').addEventListener('submit', e => {
    e.preventDefault();
    const f = e.target;
    ['cafeName', 'city', 'brandLine', 'hours', 'email', 'instagram', 'facebook'].forEach(k => settings[k] = f[k].value.trim());
    if (!settings.cafeName) settings.cafeName = 'X Cafe';
    settings.deliveryFee = Math.max(0, Number(f.deliveryFee.value) || 0);
    settings.minOrder = Math.max(0, Number(f.minOrder.value) || 0);
    settings.open = f.open.checked;
    if (f.pin.value.trim()) {
      if (f.pin.value.trim().length < 4) { alert('PIN must be at least 4 characters.'); return; }
      settings.pin = f.pin.value.trim();
    }
    if (Store.saveSettings(settings)) toast('Settings saved');
    renderBrand();
    renderSettings();
  });
  $('#branchRows').addEventListener('click', e => {
    if (!e.target.closest('#saveBranches')) return;
    $$('.branch-row').forEach(r => {
      const b = settings.branches[+r.dataset.i];
      r.querySelectorAll('[data-k]').forEach(inp => { b[inp.dataset.k] = inp.type === 'checkbox' ? inp.checked : inp.value.trim(); });
      b.whatsapp = b.whatsapp.replace(/\D/g, '').replace(/^0/, '92');
    });
    const main = $('input[name=mainBranch]:checked');
    settings.activeBranch = main ? main.value : settings.activeBranch;
    const mb = settings.branches.find(b => b.id === settings.activeBranch);
    if (mb && !mb.active) mb.active = true;
    if (Store.saveSettings(settings)) toast('Branches saved');
    renderSettings();
  });

  /* ---------- Backup ---------- */
  $('#exportBtn').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify({ menu, settings: Object.assign({}, settings, { pin: undefined }), orders: Store.getOrders() }, null, 2)], { type: 'application/json' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
    a.download = `cafe-backup-${new Date().toISOString().slice(0, 10)}.json`; a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  });
  $('#importFile').addEventListener('change', e => {
    const file = e.target.files[0]; if (!file) return;
    const r = new FileReader();
    r.onload = () => {
      try {
        const data = JSON.parse(r.result);
        if (!data.menu || !Array.isArray(data.menu.products) || !Array.isArray(data.menu.categories)) throw new Error('bad');
        if (!confirm('Replace the current menu with this backup?')) return;
        menu = data.menu; Store.saveMenu(menu);
        if (data.settings) { const pin = settings.pin; settings = Object.assign(Store.getSettings(), data.settings, { pin }); Store.saveSettings(settings); }
        if (Array.isArray(data.orders)) Store.saveOrders(data.orders);
        renderAll(); toast('Backup restored');
      } catch (err) { alert('That file is not a valid menu backup.'); }
      e.target.value = '';
    };
    r.readAsText(file);
  });
  $('#resetMenu').addEventListener('click', () => {
    if (!confirm('Reset the whole menu to the original printed menu? All product edits and photos will be lost. Orders and settings stay.')) return;
    Store.resetMenu(); menu = Store.getMenu(); renderProducts(); renderCats(); toast('Menu reset');
  });

  /* ---------- Modal & toast ---------- */
  function openModal() { $('#modal').classList.add('show'); const i = $('#modalBox input'); if (i) i.focus(); }
  function closeModal() { $('#modal').classList.remove('show'); }
  $('#modal').addEventListener('click', e => { if (e.target === $('#modal') || e.target.closest('[data-close]')) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
  let tt;
  function toast(m) { const t = $('#toast'); t.textContent = m; t.classList.add('show'); clearTimeout(tt); tt = setTimeout(() => t.classList.remove('show'), 1800); }

  // New orders placed in another tab show up live
  window.addEventListener('storage', e => {
    if (e.key === Store.KEYS.orders && !$('#app').hidden) { renderOrders(); toast('New order received'); }
  });
})();
