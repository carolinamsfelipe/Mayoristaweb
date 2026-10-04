/* Mayorista a tu Casa — lógica de la tienda.
   Datos: js/datos.js (window.CATALOGO). Configuración comercial: js/config.js (window.CONFIG_TIENDA).
   Este archivo no tiene precios ni productos escritos a mano. */
(function () {
  'use strict';

  const D = window.CATALOGO;
  const norm0 = s => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const CFG = Object.assign({ whatsapp: '', whatsappVisible: '', zonasEnvio: [], costoEnvioOtrasZonas: null, horarios: '', mediosDePago: [], presupuestosRapidos: [200000, 300000, 400000, 500000] }, window.CONFIG_TIENDA || {});
  const MIN = Number(D.minimumMerchandiseOrderARS) || 200000;
  const ZONAS = (Array.isArray(CFG.zonasEnvio) ? CFG.zonasEnvio : []).filter(z => z && z.zona)
    .map(z => ({ zona: String(z.zona), costo: (typeof z.costoEnvio === 'number' && Number.isFinite(z.costoEnvio)) ? z.costoEnvio : null, n: norm0(z.zona) }));
  const OTRAS = (typeof CFG.costoEnvioOtrasZonas === 'number' && Number.isFinite(CFG.costoEnvioOtrasZonas)) ? CFG.costoEnvioOtrasZonas : null;
  const PAGOS = (Array.isArray(CFG.mediosDePago) ? CFG.mediosDePago : (CFG.mediosDePago ? [CFG.mediosDePago] : [])).map(String).filter(Boolean);
  const MAX_QTY = 999;
  const STORE_KEY = 'mayorista-a-tu-casa:pedido:v1';

  /* ---------- Datos ---------- */
  const PRODUCTS = D.products;
  const BY_ID = new Map(PRODUCTS.map(p => [p.id, p]));
  const COMBOS = D.combos.map(c => Object.freeze({ ...c, items: Object.freeze(c.items.map(i => Object.freeze({ ...i }))) }));
  const COMBO_BY_ID = new Map(COMBOS.map(c => [c.id, c]));
  const SECTIONS = [...new Set(PRODUCTS.map(p => p.section))];
  const SECTION_STYLE = {
    'Almacén': { color: '#C77A22', tint: '#F6E6D1', icon: 'jar' },
    'Desayuno y merienda': { color: '#8A5A3B', tint: '#F1E2D6', icon: 'cup' },
    'Fiambrería y quesos': { color: '#B8911C', tint: '#F4EAC4', icon: 'cheese' },
    'Snacks': { color: '#D8602A', tint: '#F9DDCB', icon: 'bag' },
    'Bebidas': { color: '#3D6C98', tint: '#DDE7F1', icon: 'bottle' },
    'Limpieza del hogar': { color: '#23877B', tint: '#D5ECE8', icon: 'spray' },
    'Perfumería e higiene personal': { color: '#7657A6', tint: '#E7DFF1', icon: 'pump' }
  };
  const ICONS = {
    jar: '<path d="M8 3h8v3H8z"/><path d="M7 6h10a1 1 0 0 1 1 1v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7a1 1 0 0 1 1-1z"/><path d="M6 11h12"/>',
    cup: '<path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M17 11h1.5a2.5 2.5 0 0 1 0 5H17"/><path d="M8 3c0 1.5 1 1.5 1 3M12 3c0 1.5 1 1.5 1 3"/>',
    cheese: '<path d="M3 17 13 5l8 6v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="M3 17h18"/><circle cx="9" cy="14" r="1.2"/><circle cx="15" cy="13" r="1.4"/>',
    bag: '<path d="M6 3h12l-1 3 2 14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1L7 6z"/><path d="M7 6h10"/><path d="M9 12c1 1.5 5 1.5 6 0"/>',
    bottle: '<path d="M10 2h4v4l2 3v11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V9l2-3z"/><path d="M8 12h8M8 17h8"/>',
    spray: '<path d="M9 8h6v3l1 2v8a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-8l1-2z"/><path d="M10 8V5h6l2 2"/><path d="M20 4l1-1M20 7h1.5M20 10l1 1"/>',
    pump: '<path d="M8 10h8v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z"/><path d="M11 10V6h2v4"/><path d="M11 6H8V4h7"/><path d="M10 15h4"/>'
  };
  const icon = (sec, size) => `<svg viewBox="0 0 24 24" width="${size || 26}" height="${size || 26}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[(SECTION_STYLE[sec] || {}).icon || 'jar']}</svg>`;

  /* ---------- Imágenes (js/imagenes.js) ----------
     Prioridad: foto propia cargada en "fotos" > campo "image" del catálogo > ilustración por tipo > ícono del rubro. */
  const IMG = Object.assign({ carpeta: 'img/productos/', fotos: {}, tipos: {}, tipoPorProducto: {}, src: null }, window.IMAGENES_TIENDA || {});
  function imgFor(p) {
    const foto = (IMG.fotos || {})[p.id] || (typeof p.image === 'string' && p.image.trim() ? p.image.trim() : '');
    if (foto) return { src: foto, foto: true };
    const t = (IMG.tipoPorProducto || {})[p.id];
    if (!t) return null;
    return { src: (IMG.src && IMG.src[t]) || IMG.carpeta + t + '.webp', foto: false };
  }
  function thumb(p, cls) {
    const st = SECTION_STYLE[p.section] || { tint: '#EEE' };
    const im = imgFor(p);
    const inner = im ? `<img src="${esc(im.src)}" alt="" loading="lazy" decoding="async" width="128" height="128">` : icon(p.section);
    return `<span class="ptile${cls ? ' ' + cls : ''}${im && im.foto ? ' foto' : ''}" style="background:${st.tint}" data-sec="${esc(p.section)}">${inner}</span>`;
  }
  /* Si una imagen no carga (archivo borrado o ruta mal escrita), vuelve al ícono del rubro. */
  document.addEventListener('error', e => {
    const el = e.target;
    if (el && el.tagName === 'IMG' && el.parentElement && el.parentElement.classList.contains('ptile')) {
      const tile = el.parentElement; tile.classList.remove('foto'); tile.innerHTML = icon(tile.dataset.sec);
    }
  }, true);

  /* ---------- Formatos ---------- */
  const NF = new Intl.NumberFormat('es-AR', { maximumFractionDigits: 0 });
  const ars = n => (n < 0 ? '−$' : '$') + NF.format(Math.abs(Math.round(n)));
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const norm = s => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  const fechaAR = iso => { const [y, m, d] = String(iso).split('-'); return d && m && y ? `${d}/${m}/${y}` : String(iso); };
  const FECHA_PRECIOS = fechaAR(D.priceSourceDate);

  /* Nombres de categoría legibles; el filtro usa siempre el valor real del archivo. */
  const CAT_FIX = { 'Higienicos': 'Higiénicos', 'Jabones tocador': 'Jabones de tocador', 'Quesos rallados x40gr': 'Quesos rallados x40 g', 'Milán': 'Salame Milán' };
  function catLabel(cat) {
    let s = String(cat);
    const m = s.match(/^(Quesos|Fiambres|Limpieza) - (.+)$/);
    if (m) s = m[1] === 'Quesos' ? 'Quesos ' + m[2].toLowerCase() : m[2];
    return CAT_FIX[s] || s;
  }
  /* Nombre al público: viene completo (tipo + marca + variedad + presentación) desde js/ajustes.js. */
  function fullName(p) { return p.name; }
  const hasOpciones = p => !!p.opciones;
  const OPC_TXT = 'Varias opciones';
  const isInquiry = p => p.orderMode !== 'add_to_request';
  const byWeight = p => p.unit === 'kg' || p.unit === 'pieza';
  const inquiryLabel = p => byWeight(p) ? 'Consultar por peso' : 'Consultar presentación';
  function unitText(p) {
    if (p.unit === 'kg') return 'por kg';
    if (p.unit === 'pieza') return 'por pieza';
    return 'por unidad';
  }
  const consultaUnit = (p, q) => byWeight(p) ? (q === 1 ? 'pieza' : 'piezas') : (q === 1 ? 'unidad' : 'unidades');

  /* ---------- Estado ---------- */
  const state = {
    items: new Map(),      // id -> cantidad (solo productos que se suman al pedido)
    consultas: new Map(),  // id -> cantidad pedida para consultar (no suma al total)
    base: null,            // id del combo desde el que se partió
    presupuesto: null,
    form: { nombre: '', localidad: '', obs: '', pago: '' },
    arrep: { nombre: '', fecha: '', detalle: '', tel: '' },
    filtro: { q: '', sec: 'Todos', cat: 'Todas', ocultarConsultas: false, orden: 'rubro' },
    pendingCombo: null,
    envio: 'form',         // paso del envío: form | pregunta | listo | ayuda
    mostrarErrores: false
  };
  const SEC_PEDIDO = '__pedido__';   // filtro especial: solo lo que está en el pedido
  const qtyOf = id => state.items.get(id) || state.consultas.get(id) || 0;
  const openDetails = new Set();      // desplegables abiertos que deben seguir abiertos al redibujar

  function save() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify({
        items: [...state.items], consultas: [...state.consultas], base: state.base,
        presupuesto: state.presupuesto, form: state.form, v: 1
      }));
    } catch (e) { /* sin almacenamiento: la página sigue funcionando */ }
  }
  function load() {
    let raw = null;
    try { raw = JSON.parse(localStorage.getItem(STORE_KEY) || 'null'); } catch (e) { raw = null; }
    if (!raw || typeof raw !== 'object') return;
    (raw.items || []).forEach(([id, q]) => { const p = BY_ID.get(id); const n = cleanQty(q); if (p && !isInquiry(p) && n > 0) state.items.set(id, n); });
    (raw.consultas || []).forEach(([id, q]) => { const p = BY_ID.get(id); const n = cleanQty(q); if (p && isInquiry(p) && n > 0) state.consultas.set(id, n); });
    if (raw.base && COMBO_BY_ID.has(raw.base)) state.base = raw.base;
    if (Number.isFinite(raw.presupuesto) && raw.presupuesto > 0) state.presupuesto = Math.round(raw.presupuesto);
    if (raw.form && typeof raw.form === 'object') ['nombre', 'localidad', 'obs', 'pago'].forEach(k => { if (typeof raw.form[k] === 'string') state.form[k] = raw.form[k].slice(0, 300); });
    if (state.form.pago && !PAGOS.includes(state.form.pago)) state.form.pago = '';
  }
  function cleanQty(v) {
    const n = Math.floor(Number(String(v).replace(',', '.')));
    if (!Number.isFinite(n) || n < 0) return 0;
    return Math.min(n, MAX_QTY);
  }

  /* ---------- Cálculos ---------- */
  /* Las líneas se ordenan por rubro (en el orden del catálogo) y, dentro de cada rubro, en el orden en que se agregaron.
     El carrito, la revisión y el mensaje de WhatsApp usan este mismo orden. */
  function lines() {
    const L = [...state.items].map(([id, q], i) => { const p = BY_ID.get(id); return { p, q, sub: p.priceARS * q, i }; });
    return L.sort((a, b) => SECTIONS.indexOf(a.p.section) - SECTIONS.indexOf(b.p.section) || a.i - b.i);
  }
  function groupBySection(L) {
    const g = [];
    L.forEach(l => { let last = g[g.length - 1]; if (!last || last.sec !== l.p.section) g.push(last = { sec: l.p.section, lines: [], sub: 0 }); last.lines.push(l); last.sub += l.sub; });
    return g;
  }
  function consultaLines() {
    return [...state.consultas].map(([id, q], i) => ({ p: BY_ID.get(id), q, i }))
      .sort((a, b) => SECTIONS.indexOf(a.p.section) - SECTIONS.indexOf(b.p.section) || a.i - b.i);
  }
  function totals() {
    const L = lines();
    const total = L.reduce((a, l) => a + l.sub, 0);
    const units = L.reduce((a, l) => a + l.q, 0);
    return { L, total, units, falta: Math.max(0, MIN - total), ok: total >= MIN };
  }
  function comboTotal(c) { return c.items.reduce((a, i) => a + BY_ID.get(i.productId).priceARS * i.quantity, 0); }
  function comboUnits(c) { return c.items.reduce((a, i) => a + i.quantity, 0); }
  function comboMix(c) {
    const by = new Map();
    c.items.forEach(i => { const p = BY_ID.get(i.productId); by.set(p.section, (by.get(p.section) || 0) + p.priceARS * i.quantity); });
    const tot = comboTotal(c);
    return [...by].sort((a, b) => b[1] - a[1]).map(([sec, v]) => ({ sec, v, pct: v / tot }));
  }
  function sameAsCombo(c) {
    if (!c || state.items.size !== c.items.length) return false;
    return c.items.every(i => state.items.get(i.productId) === i.quantity);
  }
  const inCombo = new Map(); // productId -> nombres de combos que lo traen
  COMBOS.forEach(c => c.items.forEach(i => { if (!inCombo.has(i.productId)) inCombo.set(i.productId, []); inCombo.get(i.productId).push(c.name); }));

  /* ---------- Acciones sobre el pedido ---------- */
  function snapshot() { return { items: [...state.items], consultas: [...state.consultas], base: state.base }; }
  function restore(s) { state.items = new Map(s.items); state.consultas = new Map(s.consultas); state.base = s.base; save(); renderAll(); }
  const undoTo = snap => ({ label: 'Deshacer', fn: () => { restore(snap); toast('Listo, volvimos a como estaba.'); } });

  function setQty(id, q, opts) {
    const p = BY_ID.get(id); if (!p) return;
    opts = opts || {};
    const n = cleanQty(q);
    const map = isInquiry(p) ? state.consultas : state.items;
    const prev = map.get(id) || 0;
    const snap = (n === 0 && prev > 0) ? snapshot() : null;
    if (n <= 0) map.delete(id); else map.set(id, n);
    if (n !== prev) save();
    refresh(id, opts);
    if (snap) toast(`Quitamos ${fullName(p)}.`, undoTo(snap));
    if (n !== prev) {
      const t = totals();
      announce(n ? `${fullName(p)}: ${n} ${isInquiry(p) ? consultaUnit(p, n) + ' a consultar' : (n === 1 ? 'unidad' : 'unidades')}. Total ${ars(t.total)}.` : `Quitaste ${fullName(p)}. Total ${ars(t.total)}.`);
      if (n > 0 && !opts.fromCart) flashLine(id);
    }
  }
  function bump(id, d, scope) {
    const p = BY_ID.get(id); if (!p) return;
    const cur = qtyOf(id);
    if (d > 0 && cur >= MAX_QTY) { toast(`El máximo es ${MAX_QTY} por producto.`); return; }
    setQty(id, cur + d, { focus: d > 0 ? 'inc' : 'dec', fromCart: scope });
  }

  function loadCombo(id, mode) {
    const c = COMBO_BY_ID.get(id); if (!c) return;
    const snap = (mode === 'replace' && state.items.size && !sameAsCombo(c)) ? snapshot() : null;
    if (mode === 'replace') { state.items.clear(); state.base = c.id; }
    else if (state.items.size === 0) state.base = c.id;
    else state.base = null;
    c.items.forEach(i => state.items.set(i.productId, Math.min(MAX_QTY, (mode === 'replace' ? 0 : (state.items.get(i.productId) || 0)) + i.quantity)));
    save(); renderAll();
    if (snap) toast(`Cargamos ${c.name} en lugar de lo que tenías.`, undoTo(snap));
    else toast(mode === 'add' ? `Sumamos ${c.name} a tu pedido.` : `Cargamos ${c.name}. Quitá, cambiá cantidades o agregá productos.`);
  }
  function askCombo(id) {
    const c = COMBO_BY_ID.get(id);
    if (state.items.size === 0 || sameAsCombo(c)) { loadCombo(id, 'replace'); goArmar(); return; }
    state.pendingCombo = id;
    $('#elegir-sub').textContent = `Elegiste personalizar ${c.name} (${ars(comboTotal(c))}). ¿Qué hacemos con lo que ya tenés?`;
    openDlg('#dlg-elegir');
  }
  function goArmar() {
    closeAll();
    const el = $('#armar'); if (el) el.scrollIntoView({ block: 'start' });
  }

  /* ---------- Render: portada ---------- */
  function renderHero() {
    const c = COMBOS.find(x => x.badge) || COMBO_BY_ID.get('C300A') || COMBOS[COMBOS.length - 1];
    const top = c.items.slice(0, 6);
    $('#hero-remito').innerHTML = `
      <div class="remito-head"><b>${esc(c.name)}</b><span>${esc(c.badge || 'Combo sugerido')}</span></div>
      <ul>${top.map(i => { const p = BY_ID.get(i.productId); return `<li><b class="num">${i.quantity}</b><span>${esc(p.name)}</span><span class="num">${ars(p.priceARS * i.quantity)}</span></li>`; }).join('')}
        <li class="more"><span></span><span>y ${c.items.length - top.length} productos más</span><span></span></li></ul>
      <div class="remito-total"><span>Total</span><span class="num">${ars(comboTotal(c))}</span></div>
      <p class="remito-note">${comboUnits(c)} unidades de venta · precios al ${FECHA_PRECIOS}</p>`;
    const facts = [
      `Pedido mínimo <b class="num">${ars(MIN)}</b> de mercadería`,
      ZONAS.some(z => z.costo === 0) ? `Envío <b>gratis en ${esc(ZONAS.filter(z => z.costo === 0).map(z => z.zona).join(', '))}</b>` : 'Entrega <b>a coordinar</b>',
      PAGOS.length ? `Pago: <b>${PAGOS.map(esc).join('</b> o <b>')}</b>` : 'Pedís por <b>WhatsApp</b>',
      `Precios al <b>${FECHA_PRECIOS}</b>`
    ];
    $('#hero-facts').innerHTML = facts.map(f => `<li>${f}</li>`).join('');
  }

  /* ---------- Render: combos ---------- */
  function renderCombos() {
    $('#combo-list').innerHTML = COMBOS.map(c => {
      const mix = comboMix(c);
      return `<article class="combo${c.badge ? ' combo-entrada' : ''}" aria-labelledby="t-${c.id}">
        <div class="combo-top"><div>${c.badge ? `<p class="combo-badge">${esc(c.badge)}</p>` : ''}<h3 id="t-${c.id}">${esc(c.name)}</h3></div>
          <p class="price num">${ars(comboTotal(c))}</p></div>
        <p class="desc">${esc(c.description)}</p>
        ${comboThumbs(c)}
        <div class="mix">
          <div class="mix-bar" role="img" aria-label="Composición por rubro: ${mix.map(m => `${m.sec} ${Math.round(m.pct * 100)}%`).join(', ')}">${mix.map(m => `<i style="width:${(m.pct * 100).toFixed(2)}%;background:${SECTION_STYLE[m.sec].color}"></i>`).join('')}</div>
          <ul class="mix-legend">${mix.filter(m => m.pct >= .04).map(m => `<li><i style="background:${SECTION_STYLE[m.sec].color}"></i>${esc(shortSec(m.sec))} ${Math.round(m.pct * 100)}%</li>`).join('')}</ul>
        </div>
        <p class="meta num">${c.items.length} productos · ${comboUnits(c)} unidades de venta</p>
        <div class="actions">
          <button class="btn btn-ghost btn-sm" type="button" data-act="ver-combo" data-id="${c.id}">Ver contenido</button>
          <button class="btn btn-dark btn-sm" type="button" data-act="personalizar" data-id="${c.id}">Personalizar este combo</button>
        </div>
      </article>`;
    }).join('');
    const sel = $('#start-select');
    sel.innerHTML = `<option value="">Pedido vacío (armar desde cero)</option>` + COMBOS.map(c => `<option value="${c.id}">${esc(c.name)} — ${ars(comboTotal(c))}</option>`).join('');
  }
  function comboThumbs(c) {
    const MAXT = 6;
    const vistos = new Set(), top = [];
    [...c.items].sort((a, b) => BY_ID.get(b.productId).priceARS * b.quantity - BY_ID.get(a.productId).priceARS * a.quantity)
      .forEach(i => { const p = BY_ID.get(i.productId); const k = (IMG.tipoPorProducto || {})[p.id] || p.id; if (top.length < MAXT && !vistos.has(k)) { vistos.add(k); top.push(p); } });
    return `<ul class="cthumbs" aria-label="Algunos productos del combo">${top.map(p => `<li title="${esc(p.name)}">${thumb(p, 'xs')}</li>`).join('')}</ul>`;
  }
  const shortSec = s => ({ 'Desayuno y merienda': 'Desayuno', 'Fiambrería y quesos': 'Fiambrería', 'Limpieza del hogar': 'Limpieza', 'Perfumería e higiene personal': 'Perfumería' }[s] || s);

  function comboDialog(id) {
    const c = COMBO_BY_ID.get(id);
    const tot = comboTotal(c);
    $('#combo-dlg').innerHTML = `
      <div class="dlg-head"><div><p class="eyebrow">${esc(c.badge || 'Combo sugerido')}</p><h3 id="combo-dlg-title">${esc(c.name)} · <span class="num">${ars(tot)}</span></h3><p>${esc(c.description)}</p></div>
        <button class="x" type="button" data-act="cerrar" aria-label="Cerrar">×</button></div>
      <div class="dlg-body">
        <ul class="ctable">${c.items.map(i => { const p = BY_ID.get(i.productId); return `<li>${thumb(p, 'sm')}<span class="n"><b class="q num">${i.quantity}×</b> ${esc(fullName(p))}</span><span class="s num">${ars(p.priceARS * i.quantity)}</span><span class="u num">${ars(p.priceARS)} ${unitText(p)} · ${esc(catLabel(p.category))}</span></li>`; }).join('')}</ul>
        <div class="ctable-total"><span>Total del combo</span><span class="num">${ars(tot)}</span></div>
        <p class="sub-note num" style="margin-top:4px">${c.items.length} productos · ${comboUnits(c)} unidades de venta · precios al ${FECHA_PRECIOS}. Stock y entrega a confirmar. Imágenes ilustrativas.</p>
      </div>
      <div class="dlg-foot"><div class="row2">
        <button class="btn btn-ghost" type="button" data-act="cerrar">Cerrar</button>
        <button class="btn btn-dark" type="button" data-act="personalizar" data-id="${c.id}">Personalizar este combo</button></div></div>`;
    openDlg('#dlg-combo');
  }

  /* ---------- Render: catálogo ---------- */
  function selCounts() {
    const m = new Map();
    [...state.items.keys(), ...state.consultas.keys()].forEach(id => { const s = BY_ID.get(id).section; m.set(s, (m.get(s) || 0) + 1); });
    return m;
  }
  function chipLabel(s, n) {
    const name = s === 'Todos' ? 'Todos' : s === SEC_PEDIDO ? 'Tu pedido' : shortSec(s);
    return `${esc(name)}<span class="chip-n num"${n ? '' : ' hidden'}>${n || ''}</span>`;
  }
  function renderSecChips() {
    const cnt = selCounts(), nSel = state.items.size + state.consultas.size;
    if (state.filtro.sec === SEC_PEDIDO && !nSel) state.filtro.sec = 'Todos';
    const box = $('#sec-chips'), keepX = box.scrollLeft;
    const all = ['Todos', SEC_PEDIDO, ...SECTIONS];
    box.innerHTML = all.map(s => `<button type="button" class="chip${s === SEC_PEDIDO ? ' chip-pedido' : ''}" data-act="sec" data-v="${esc(s)}" aria-pressed="${state.filtro.sec === s}"${s === SEC_PEDIDO && !nSel ? ' hidden' : ''}>${chipLabel(s, s === SEC_PEDIDO ? nSel : (s === 'Todos' ? 0 : cnt.get(s)))}</button>`).join('');
    box.scrollLeft = keepX;
    const cc = $('#cat-chips');
    if (state.filtro.sec === 'Todos' || state.filtro.sec === SEC_PEDIDO) { cc.hidden = true; cc.innerHTML = ''; return; }
    const cats = [...new Set(PRODUCTS.filter(p => p.section === state.filtro.sec).map(p => p.category))];
    cc.hidden = false;
    cc.innerHTML = ['Todas', ...cats].map(c => `<button type="button" class="chip" data-act="cat" data-v="${esc(c)}" aria-pressed="${state.filtro.cat === c}">${esc(c === 'Todas' ? 'Todas las categorías' : catLabel(c))}</button>`).join('');
  }
  /* Contadores de los chips sin redibujarlos (así no pierden el desplazamiento horizontal). */
  function updateChipCounts() {
    const cnt = selCounts(), nSel = state.items.size + state.consultas.size;
    document.querySelectorAll('#sec-chips .chip').forEach(ch => {
      const v = ch.dataset.v, n = v === SEC_PEDIDO ? nSel : (v === 'Todos' ? 0 : (cnt.get(v) || 0));
      const b = ch.querySelector('.chip-n'); if (b) { b.textContent = n || ''; b.hidden = !n; }
      if (v === SEC_PEDIDO) ch.hidden = !nSel && state.filtro.sec !== SEC_PEDIDO;
    });
  }
  /* Texto donde busca el buscador: nombre, categoría, rubro y el tipo de producto (ej. "papel higiénico", "jabón para ropa"). */
  const HAY = new Map(PRODUCTS.map(p => [p.id, norm(`${p.name} ${p.nombreLista || ''} ${p.category} ${catLabel(p.category)} ${p.section} ${(IMG.tipos || {})[(IMG.tipoPorProducto || {})[p.id]] || ''}`)]));
  const matchWord = (hay, w) => hay.includes(w) || (w.length > 4 && w.endsWith('es') && hay.includes(w.slice(0, -2))) || (w.length > 3 && w.endsWith('s') && hay.includes(w.slice(0, -1)));
  const ORDENES = {
    'precio-asc': (a, b) => a.priceARS - b.priceARS || a.name.localeCompare(b.name, 'es'),
    'precio-desc': (a, b) => b.priceARS - a.priceARS || a.name.localeCompare(b.name, 'es'),
    'az': (a, b) => fullName(a).localeCompare(fullName(b), 'es')
  };
  function filtered() {
    const f = state.filtro, words = norm(f.q).split(/\s+/).filter(Boolean);
    const list = PRODUCTS.filter(p => {
      if (f.sec === SEC_PEDIDO) { if (!qtyOf(p.id)) return false; }
      else if (f.sec !== 'Todos' && p.section !== f.sec) return false;
      if (f.cat !== 'Todas' && p.category !== f.cat) return false;
      if (f.ocultarConsultas && isInquiry(p)) return false;
      if (!words.length) return true;
      const hay = HAY.get(p.id);
      return words.every(w => matchWord(hay, w));
    });
    return ORDENES[f.orden] ? list.sort(ORDENES[f.orden]) : list;
  }
  function rowHTML(p) {
    const inq = isInquiry(p);
    const q = inq ? (state.consultas.get(p.id) || 0) : (state.items.get(p.id) || 0);
    const nm = esc(fullName(p));
    let ctl;
    if (q > 0) {
      ctl = `<div class="stepper${inq ? ' inq' : ''}" role="group" aria-label="Cantidad de ${nm}">
        <button type="button" data-act="dec" data-id="${p.id}" aria-label="Quitar uno de ${nm}">−</button>
        <input type="number" inputmode="numeric" min="0" max="${MAX_QTY}" step="1" value="${q}" id="q-${p.id}" data-act="set" data-id="${p.id}" aria-label="${inq ? 'Cantidad a consultar' : 'Cantidad'} de ${nm}">
        <button type="button" data-act="inc" data-id="${p.id}" aria-label="Agregar uno de ${nm}">+</button></div>`;
    } else {
      ctl = inq
        ? `<button class="btn btn-ghost btn-sm" type="button" data-act="inc" data-id="${p.id}" aria-label="Agregar consulta por ${nm}">Agregar consulta</button>`
        : `<button class="btn btn-primary btn-sm" type="button" data-act="inc" data-id="${p.id}" aria-label="Agregar ${nm}">Agregar</button>`;
    }
    const combos = inCombo.get(p.id);
    const sub = (!inq && q > 0) ? `<span class="psub num">${q} × ${ars(p.priceARS)} = <b>${ars(q * p.priceARS)}</b></span>` : (inq && q > 0 ? `<span class="psub">${q} ${consultaUnit(p, q)} a consultar</span>` : '');
    return `<li class="prow${q > 0 ? ' in-cart' : ''}" id="p-${p.id}" data-id="${p.id}">
      ${thumb(p)}
      <div class="pinfo"><div class="pname">${esc(p.name)}${combos ? `<span class="in-combo" title="Aparece en: ${esc(combos.join(', '))}">En combos</span>` : ''}</div>
        <div class="pcat">${esc(catLabel(p.category))}</div>
        ${inq || hasOpciones(p) ? `<div class="ptags">${inq ? `<span class="tag-inq">${inquiryLabel(p)}</span>` : ''}${hasOpciones(p) ? `<span class="tag-opc" title="Indicá cuál preferís en Observaciones al enviar el pedido">${OPC_TXT}</span>` : ''}</div>` : ''}
        ${p.nota ? `<p class="pnote">${esc(p.nota)}</p>` : ''}</div>
      <div class="pctl"><div class="pprice-w"><span class="pprice num">${ars(p.priceARS)} <small>${inq ? unitText(p) + ' · referencia' : unitText(p)}</small></span>${sub}</div>${ctl}</div>
    </li>`;
  }
  function renderCatalog() {
    const list = filtered(), f = state.filtro;
    $('#result-count').textContent = `${list.length} ${list.length === 1 ? 'producto' : 'productos'}${f.sec === SEC_PEDIDO ? ' en tu pedido' : ''}`;
    const qc = $('#q-clear'); if (qc) qc.hidden = !f.q;
    if (!list.length) {
      const acts = [];
      if (f.q) acts.push(`<button class="btn btn-ghost btn-sm" type="button" data-act="clear-q">Borrar la búsqueda</button>`);
      if (f.sec !== 'Todos') acts.push(`<button class="btn btn-ghost btn-sm" type="button" data-act="sec" data-v="Todos">Buscar en todos los rubros</button>`);
      if (f.ocultarConsultas) acts.push(`<button class="btn btn-ghost btn-sm" type="button" data-act="mostrar-consultas">Mostrar también los productos a consultar</button>`);
      $('#product-list').innerHTML = `<div class="empty"><p>${f.q ? `No encontramos “${esc(f.q)}”${f.sec !== 'Todos' ? ' en este rubro' : ''}.` : 'No hay productos con estos filtros.'} Probá con otra palabra, por ejemplo la marca o el tipo de producto.</p><div class="empty-acts">${acts.join('')}</div></div>`;
      return;
    }
    if (ORDENES[f.orden]) { $('#product-list').innerHTML = `<ul class="plist">${list.map(rowHTML).join('')}</ul>`; return; }
    let html = '', sec = null;
    list.forEach(p => {
      if (p.section !== sec) {
        if (sec !== null) html += '</ul>';
        sec = p.section;
        html += `<h3 class="sec-title"><span class="ptile" style="width:30px;height:30px;border-radius:8px;background:${SECTION_STYLE[sec].tint}">${icon(sec, 18)}</span>${esc(sec)}</h3><ul class="plist">`;
      }
      html += rowHTML(p);
    });
    $('#product-list').innerHTML = html + '</ul>';
  }

  /* ---------- Render: resumen del pedido ---------- */
  function summaryHTML(where) {
    const t = totals();
    const base = state.base ? COMBO_BY_ID.get(state.base) : null;
    const same = base && sameAsCombo(base);
    let head = `<div class="sum-head"><h3>Tu pedido</h3>`;
    if (base) {
      const diff = t.total - comboTotal(base);
      head += `<p class="sum-base">${same ? `Combo <b>${esc(base.name)}</b> sin cambios.` : `Partiste de <b>${esc(base.name)}</b> (${ars(comboTotal(base))}, precio original de referencia). Tu selección suma <b class="num">${ars(t.total)}</b>${diff ? ` (${diff > 0 ? '+' : ''}${ars(diff)})` : ''}.`}</p>`;
      if (!same) head += `<button class="btn-link" type="button" data-act="restaurar">Volver al combo original</button>`;
    }
    head += `</div>`;

    const baseMap = (base && !same) ? new Map(base.items.map(i => [i.productId, i.quantity])) : null;
    let body = `<div class="sum-body">${t.L.length || state.consultas.size ? budgetHTML(t, where) : ''}`;
    if (!t.L.length && !state.consultas.size) {
      body += `<div class="sum-empty"><p>Todavía no agregaste productos.</p><p>Elegí un combo sugerido o buscá en el catálogo y tocá <b>Agregar</b>.</p>
        <button class="btn btn-ghost btn-sm" type="button" data-act="ver-combos">Ver combos sugeridos</button></div>`;
    } else {
      groupBySection(t.L).forEach(g => {
        body += `<p class="cgroup"><span>${esc(g.sec)}</span><span class="num">${ars(g.sub)}</span></p><ul class="cart-lines">${g.lines.map(l => lineHTML(l.p, l.q, false, where, baseMap)).join('')}</ul>`;
      });
      if (baseMap) {
        const quitados = base.items.filter(i => !state.items.has(i.productId));
        if (quitados.length) {
          const key = 'quitados-' + where;
          body += `<details class="removed" data-key="${key}"${openDetails.has(key) ? ' open' : ''}><summary>Quitaste ${quitados.length} ${quitados.length === 1 ? 'producto' : 'productos'} del combo</summary><ul>${quitados.map(i => { const p = BY_ID.get(i.productId); return `<li><span><b class="num">${i.quantity}×</b> ${esc(fullName(p))} <span class="sub-note num">${ars(p.priceARS * i.quantity)}</span></span><button class="btn-link" type="button" data-act="readd" data-id="${p.id}" data-q="${i.quantity}">Volver a agregar</button></li>`; }).join('')}</ul></details>`;
        }
      }
      if (state.consultas.size) {
        body += `<p class="sub-title">Consultas aparte</p><p class="sub-note">Se consultan por peso o presentación. No suman al total ni cuentan para el mínimo.</p>
          <ul class="cart-lines">${consultaLines().map(l => lineHTML(l.p, l.q, true, where)).join('')}</ul>`;
      }
    }
    body += `</div>`;

    const pct = Math.min(100, t.total / MIN * 100);
    let foot = `<div class="sum-foot">
      <div class="totals">
        <div class="trow num"><span>${t.units} ${t.units === 1 ? 'unidad' : 'unidades'} de venta · ${t.L.length} ${t.L.length === 1 ? 'producto' : 'productos'}</span></div>
        <div class="trow big"><span>Total de mercadería</span><span class="num">${ars(t.total)}</span></div>
        <div class="trow"><span>Envío</span><span>${esc(envioTexto(state.form.localidad))}</span></div>
      </div>
      <div class="meter${t.ok ? ' done' : ''}" aria-hidden="true"><i style="width:${pct}%"></i></div>
      <p class="status ${t.ok ? 'okk' : 'need'}" aria-live="polite">${t.ok ? 'Llegaste al pedido mínimo de ' + ars(MIN) + '.' : `Te faltan ${ars(t.falta)} para alcanzar el pedido mínimo`}</p>
      ${budgetLine(t)}
      <div class="arm-actions">
        ${t.L.length ? `<button class="btn ${t.ok ? 'btn-wa' : 'btn-ghost'} btn-block" type="button" data-act="revisar">${t.ok ? 'Revisar y enviar pedido' : 'Revisar pedido'}</button>` : ''}
        ${t.L.length || state.consultas.size ? `<button class="btn-link" type="button" data-act="vaciar" data-where="${where}">Vaciar pedido</button>` : ''}
      </div>
    </div>`;
    return head + body + foot;
  }
  function lineHTML(p, q, inq, where, baseMap) {
    const nm = esc(fullName(p));
    const key = `${where}-${p.id}`;
    let tag = '';
    if (baseMap) { const bq = baseMap.get(p.id); tag = bq === undefined ? '<span class="ctag add">Agregado</span>' : (bq !== q ? `<span class="ctag chg">En el combo: ${bq}</span>` : ''); }
    return `<li class="cline" data-id="${p.id}">
      ${thumb(p, 'sm')}
      <div><div class="cname">${nm}${tag}</div><div class="cunit num">${inq ? `${inquiryLabel(p)} · ref. ${ars(p.priceARS)} ${unitText(p)}` : `${ars(p.priceARS)} ${unitText(p)}`}</div></div>
      <div class="csub num">${inq ? '<span class="sub-note">a cotizar</span>' : ars(p.priceARS * q)}</div>
      <div class="cctl">
        <div class="stepper${inq ? ' inq' : ''}" role="group" aria-label="Cantidad de ${nm}">
          <button type="button" data-act="dec" data-id="${p.id}" aria-label="Quitar uno de ${nm}">−</button>
          <input type="number" inputmode="numeric" min="0" max="${MAX_QTY}" step="1" value="${q}" id="c-${key}" data-act="set" data-id="${p.id}" aria-label="Cantidad de ${nm}${inq ? ' (' + consultaUnit(p, 2) + ')' : ''}">
          <button type="button" data-act="inc" data-id="${p.id}" aria-label="Agregar uno de ${nm}">+</button></div>
        ${inq ? `<span class="sub-note">${consultaUnit(p, q)}</span>` : ''}
        <button class="rm" type="button" data-act="remove" data-id="${p.id}" aria-label="Eliminar ${nm}">Eliminar</button>
      </div></li>`;
  }
  function budgetHTML(t, where) {
    const b = state.presupuesto;
    const presets = CFG.presupuestosRapidos || [];
    const custom = b && !presets.includes(b);
    const st = b ? budgetText(t) : '<span>Elegí un monto para guiarte mientras armás. No es un precio fijo ni un límite.</span>';
    const key = 'budget-' + where;
    return `<details class="budget" data-key="${key}"${openDetails.has(key) ? ' open' : ''}>
      <summary class="budget-sum"><span>Presupuesto opcional</span><span class="bsum num">${b ? ars(b) : 'Elegir'}</span></summary>
      <div class="budget-in">
      <div class="budget-head"><span>¿Cuánto querés gastar?</span>${b ? `<button class="btn-link" type="button" data-act="budget-clear" style="min-height:32px">Quitar</button>` : ''}</div>
      <div class="chips" role="group" aria-label="Presupuesto">${presets.map(v => `<button type="button" class="chip num" data-act="budget" data-v="${v}" aria-pressed="${b === v}">${ars(v)}</button>`).join('')}</div>
      <div class="budget-other"><label class="visually-hidden" for="budget-${where}">Otro monto</label>
        <input id="budget-${where}" type="text" inputmode="numeric" placeholder="Otro monto" value="${custom ? NF.format(b) : ''}" data-act="budget-input" autocomplete="off">
        <button class="btn btn-ghost btn-sm" type="button" data-act="budget-apply" data-where="${where}">Usar</button></div>
      ${b ? `<div class="meter${t.total > b ? '' : ''}" aria-hidden="true"><i style="width:${Math.min(100, t.total / b * 100)}%;background:${t.total > b ? 'var(--warn)' : 'var(--navy)'}"></i></div>` : ''}
      <p class="budget-state">${st}</p>
      </div>
    </details>`;
  }
  function budgetText(t) {
    const b = state.presupuesto, rest = b - t.total;
    return rest >= 0 ? `Llevás <b class="num">${ars(t.total)}</b> de <b class="num">${ars(b)}</b>. Te quedan <b class="num">${ars(rest)}</b>.`
      : `Llevás <b class="num">${ars(t.total)}</b>: pasaste tu presupuesto de ${ars(b)} por <b class="num">${ars(-rest)}</b>. Podés seguir igual.`;
  }
  function budgetLine(t) { return state.presupuesto ? `<p class="budget-state">Presupuesto: ${budgetText(t)}</p>` : ''; }
  /* Envío: zonas con costo conocido (config.js). Cualquier otra zona queda "a confirmar", nunca gratis por omisión. */
  function deliveryFeeText() {
    const parts = ZONAS.map(z => z.costo === 0 ? `Gratis en ${z.zona}` : `${z.zona}: ${z.costo == null ? 'a confirmar' : ars(z.costo)}`);
    if (OTRAS != null) parts.push(`${ZONAS.length ? 'otras zonas' : 'Envío'}: ${ars(OTRAS)}`);
    else parts.push(ZONAS.length ? 'otras zonas a confirmar' : 'Costo de envío a confirmar');
    return parts.join(' · ');
  }
  function zonaDe(loc) { const n = norm(loc || '').trim(); return n ? (ZONAS.find(z => n.includes(z.n)) || null) : null; }
  function envioTexto(loc) {
    const z = zonaDe(loc);
    if (z) return z.costo === 0 ? `Envío gratis a ${z.zona}` : (z.costo == null ? `Envío a ${z.zona}: costo a confirmar` : `Envío a ${z.zona}: ${ars(z.costo)}`);
    if (norm(loc || '').trim()) return OTRAS == null ? 'Costo de envío a confirmar' : `Envío: ${ars(OTRAS)}`;
    return deliveryFeeText();
  }
  const zonasText = () => ZONAS.length ? `${ZONAS.map(z => z.zona + (z.costo === 0 ? ' (envío gratis)' : '')).join(', ')}. Otras zonas: a confirmar` : 'Zonas de entrega a confirmar';
  function envioFaq() {
    const conocidas = ZONAS.map(z => z.costo === 0 ? `Envío gratis en ${z.zona}.` : `${z.zona}: ${z.costo == null ? 'costo a confirmar' : ars(z.costo)}.`);
    const otras = OTRAS != null ? `Otras zonas: ${ars(OTRAS)}.` : (ZONAS.length ? 'Para otras zonas, la entrega y su costo están a confirmar: consultanos antes de pedir.' : 'Zonas y costo de envío a confirmar: consultanos antes de pedir.');
    return [...conocidas, otras, `Días y horarios de entrega: ${CFG.horarios || 'a coordinar por WhatsApp'}.`].join(' ');
  }
  const pagosText = () => PAGOS.length ? PAGOS.join(' o ') : 'Se coordinan al confirmar el pedido';

  let lastTotal = null;
  function renderSummaries() {
    const t = totals();
    const boxes = ['#summary-aside', '#summary-sheet'];
    const keep = boxes.map(s => { const el = document.querySelector(s + ' .sum-body'); return el ? el.scrollTop : 0; });
    $('#summary-aside').innerHTML = summaryHTML('aside');
    $('#summary-sheet').innerHTML = summaryHTML('sheet');
    boxes.forEach((s, i) => { const el = document.querySelector(s + ' .sum-body'); if (el) el.scrollTop = keep[i]; });
    $('#bb-total').textContent = ars(t.total);
    $('#top-cart-total').textContent = ars(t.total);
    $('#bb-meter').style.width = Math.min(100, t.total / MIN * 100) + '%';
    $('#bb-meter').style.background = t.ok ? '#3FC07F' : 'var(--orange)';
    $('#bb-hint').textContent = t.ok ? 'Llegaste al mínimo' : `Faltan ${ars(t.falta)} para el mínimo`;
    const nSel = state.items.size + state.consultas.size, bn = $('#bb-n');
    if (bn) { bn.textContent = nSel; bn.hidden = !nSel; }
    if (lastTotal !== null && lastTotal !== t.total) { const el = $('#bb-total'); el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump'); }
    lastTotal = t.total;
    updateChipCounts();
    if ($('#dlg-revisar').open) updateReviewDynamic();
  }
  /* Al agregar desde el catálogo, en escritorio se muestra y resalta la línea en el resumen. */
  function flashLine(id) {
    requestAnimationFrame(() => {
      const box = document.querySelector('#summary-aside .sum-body');
      const li = box && box.querySelector(`.cline[data-id="${id}"]`);
      if (!box || !li || !box.offsetParent) return;
      const bt = box.getBoundingClientRect(), lt = li.getBoundingClientRect();
      if (lt.top < bt.top || lt.bottom > bt.bottom) box.scrollTop += (lt.top - bt.top) - Math.max(0, (bt.height - lt.height) / 2);
      li.classList.add('flash');
    });
  }
  let liveTimer = null;
  function announce(msg) {
    const el = $('#sr-live'); if (!el) return;
    clearTimeout(liveTimer); liveTimer = setTimeout(() => { el.textContent = ''; setTimeout(() => { el.textContent = msg; }, 30); }, 250);
  }

  /* ---------- Revisión y WhatsApp ---------- */
  function orderMessage() {
    const t = totals();
    const base = state.base ? COMBO_BY_ID.get(state.base) : null;
    const out = [];
    out.push('Hola, Mayorista a tu Casa. Quiero hacer este pedido:');
    if (base) out.push(sameAsCombo(base) ? `Combo: ${base.name} (sin cambios)` : `Basado en el combo ${base.name}, con cambios`);
    groupBySection(t.L).forEach(g => {
      out.push('');
      out.push(`*${g.sec.toUpperCase()}*`);
      g.lines.forEach(l => out.push(`• ${l.q} × ${fullName(l.p)} [${l.p.id}] — ${ars(l.p.priceARS)} ${l.p.unit === 'kg' ? 'el kg' : 'c/u'} = ${ars(l.sub)}`));
    });
    out.push('');
    out.push(`*Total de mercadería: ${ars(t.total)}* (${t.units} unidades, ${t.L.length} productos)`);
    if (state.consultas.size) {
      out.push('');
      out.push('*CONSULTAS APARTE* (no incluidas en el total)');
      consultaLines().forEach(({ p, q }) => out.push(`• ${q} ${consultaUnit(p, q)} de ${fullName(p)} [${p.id}] — ${inquiryLabel(p).toLowerCase()} — referencia ${ars(p.priceARS)} ${unitText(p)}`));
    }
    out.push('');
    out.push(`Nombre: ${state.form.nombre.trim() || '-'}`);
    out.push(`Localidad o barrio: ${state.form.localidad.trim() || '-'}`);
    if (PAGOS.length) out.push(`Forma de pago: ${state.form.pago || 'a definir'}`);
    if (state.form.obs.trim()) out.push(`Observaciones: ${state.form.obs.trim()}`);
    out.push('');
    if (t.L.some(l => hasOpciones(l.p))) out.push('Productos con varias opciones (sabor, tipo o marca): los definimos al confirmar, salvo lo que aclaro en Observaciones.');
    out.push(`${envioTexto(state.form.localidad)}. Día y horario de entrega: a coordinar.`);
    out.push('Entiendo que el stock, la entrega y el pedido quedan sujetos a su confirmación.');
    out.push(`Precios de referencia al ${FECHA_PRECIOS}.`);
    return out.join('\n');
  }
  function waHref() { return CFG.whatsapp ? `https://wa.me/${encodeURIComponent(String(CFG.whatsapp).replace(/\D/g, ''))}?text=${encodeURIComponent(orderMessage())}` : ''; }

  const WA_ICON = '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.2c0-.1-.2-.2-.5-.3z"/></svg>';
  const hasNumber = () => !!String(CFG.whatsapp || '').replace(/\D/g, '');
  const numeroVisible = () => CFG.whatsappVisible || CFG.whatsapp;
  function formErrors() {
    return {
      nombre: state.form.nombre.trim().length < 2 ? 'Escribí tu nombre y apellido.' : '',
      localidad: state.form.localidad.trim().length < 2 ? 'Escribí tu localidad o barrio.' : ''
    };
  }
  function reviewFootHTML() {
    const t = totals();
    const err = formErrors(), formOk = !err.nombre && !err.localidad;
    const canSend = t.ok && formOk && t.L.length > 0;
    const num = esc(numeroVisible());
    if (state.envio === 'pregunta') return `
      <div class="sent-q" role="status">
        <p class="sent-title">¿Se abrió WhatsApp con tu pedido?</p>
        <p class="sub-note">Si en WhatsApp tocaste <b>Enviar</b>, ya está. Si no se abrió, te ayudamos a mandarlo de otra forma.</p>
        <div class="row2">
          <button class="btn btn-wa" type="button" data-act="envio-si">Sí, ya lo envié</button>
          <button class="btn btn-ghost" type="button" data-act="envio-no">No se abrió o no lo envié</button>
        </div>
        ${canSend ? `<a class="btn-link" href="${esc(waHref())}" target="_blank" rel="noopener" data-act="wa">Abrir WhatsApp de nuevo</a>` : ''}
      </div>`;
    if (state.envio === 'listo') return `
      <div class="notice ok" role="status"><b>¡Gracias${state.form.nombre.trim() ? ', ' + esc(state.form.nombre.trim().split(/\s+/)[0]) : ''}!</b> Cuando veamos tu mensaje te respondemos por WhatsApp para confirmar stock, día y horario de entrega${zonaDe(state.form.localidad) && zonaDe(state.form.localidad).costo === 0 ? '' : ' y costo de envío'}. Hasta ese momento el pedido no está confirmado.</div>
      <div class="row2">
        <button class="btn btn-dark" type="button" data-act="nuevo-pedido">Empezar un pedido nuevo</button>
        <button class="btn btn-ghost" type="button" data-act="cerrar">Cerrar</button>
      </div>`;
    if (state.envio === 'ayuda') return `
      <div class="notice info">Copiá el pedido y pegalo en un chat de WhatsApp con el <b class="num" style="user-select:all">${num}</b>. También podés probar de nuevo: a veces el navegador bloquea la apertura de WhatsApp.</div>
      <div class="row2">
        <button class="btn btn-dark" type="button" data-act="copiar">Copiar pedido</button>
        ${canSend ? `<a class="btn btn-wa" href="${esc(waHref())}" target="_blank" rel="noopener" data-act="wa">Probar de nuevo</a>` : ''}
      </div>
      <p class="sub-note" id="review-status" role="status"></p>`;
    let main;
    if (!t.L.length) main = `<button class="btn btn-dark btn-block" type="button" data-act="seguir">Agregar productos</button>`;
    else if (!t.ok) main = `<div class="notice warn" role="status">Te faltan <b class="num">${ars(t.falta)}</b> para llegar al pedido mínimo de ${ars(MIN)}. Agregá productos y volvé a este paso.</div>
        <button class="btn btn-dark btn-block" type="button" data-act="seguir">Seguir agregando productos</button>`;
    else if (!hasNumber()) main = `<div class="notice warn">Todavía no cargamos el número de WhatsApp. Copiá el pedido y envialo por el canal que te indiquemos.</div>
        <button class="btn btn-dark btn-block" type="button" data-act="copiar" ${formOk ? '' : 'disabled'}>Copiar pedido</button>`;
    else main = `<p class="how">Se abre WhatsApp con tu pedido ya escrito: <b>solo tocás Enviar.</b></p>
        ${canSend
          ? `<a class="btn btn-wa btn-block btn-lg" id="wa-link" href="${esc(waHref())}" target="_blank" rel="noopener" data-act="wa">${WA_ICON}<span>Enviar pedido por WhatsApp</span></a>`
          : `<button class="btn btn-wa btn-block btn-lg" type="button" data-act="validar" aria-describedby="falta-datos">${WA_ICON}<span>Enviar pedido por WhatsApp</span></button>
             <p class="sub-note falta" id="falta-datos">Completá tu nombre y tu localidad o barrio para enviar.</p>`}`;
    return `${main}
        ${t.L.length && t.ok && hasNumber() ? `<button class="btn-link" type="button" data-act="copiar" ${canSend ? '' : 'disabled'}>Prefiero copiar el pedido</button>` : ''}
        <p class="sub-note" id="review-status" role="status"></p>`;
  }
  function reviewLinesHTML(t) {
    let h = '';
    groupBySection(t.L).forEach(g => {
      h += `<p class="cgroup"><span>${esc(g.sec)}</span><span class="num">${ars(g.sub)}</span></p><ul class="ctable">${g.lines.map(l => `<li>${thumb(l.p, 'sm')}<span class="n"><b class="q num">${l.q}×</b> ${esc(fullName(l.p))}</span><span class="s num">${ars(l.sub)}</span><span class="u num">${ars(l.p.priceARS)} ${unitText(l.p)}</span></li>`).join('')}</ul>`;
    });
    if (state.consultas.size) h += `<p class="cgroup"><span>Consultas aparte (no suman al total)</span><span></span></p><ul class="ctable">${consultaLines().map(({ p, q }) => `<li>${thumb(p, 'sm')}<span class="n"><b class="q num">${q}</b> ${esc(fullName(p))}</span><span class="s"></span><span class="u">${consultaUnit(p, q)} · ${inquiryLabel(p)} · ref. ${ars(p.priceARS)} ${unitText(p)}</span></li>`).join('')}</ul>`;
    return h;
  }
  function renderReview() {
    const t = totals(), nC = state.consultas.size;
    const listOpen = t.L.length + nC <= 6 || openDetails.has('rv-list');
    $('#revisar').innerHTML = `
      <div class="dlg-head"><div><h3 id="revisar-title">Enviá tu pedido</h3><p>Revisalo, completá tus datos y mandalo por WhatsApp.</p></div>
        <button class="x" type="button" data-act="cerrar" aria-label="Cerrar">×</button></div>
      <div class="dlg-body">
        <div class="rv-total">
          <div class="rv-row"><span>Total de mercadería</span><strong class="num" id="rv-total">${ars(t.total)}</strong></div>
          <p class="sub-note num" id="rv-meta">${t.L.length} ${t.L.length === 1 ? 'producto' : 'productos'} · ${t.units} unidades${nC ? ` · ${nC} ${nC === 1 ? 'consulta' : 'consultas'} aparte` : ''}</p>
          <p class="rv-envio" id="rv-envio">${esc(envioTexto(state.form.localidad))}</p>
        </div>
        <details class="rv-list" data-key="rv-list"${listOpen ? ' open' : ''}><summary>Ver ${t.L.length === 1 ? 'el producto' : `los ${t.L.length} productos`}${nC ? ' y las consultas' : ''}</summary>
          <div id="rv-lines">${t.L.length || nC ? reviewLinesHTML(t) : '<p class="empty">No hay productos en tu pedido.</p>'}</div>
          <button class="btn-link" type="button" data-act="seguir">Cambiar algo del pedido</button>
        </details>
        <form class="form" id="order-form" novalidate>
          <p class="form-title">Tus datos</p>
          <label for="f-nombre">Nombre y apellido<input id="f-nombre" name="nombre" autocomplete="name" required maxlength="80" value="${esc(state.form.nombre)}" aria-describedby="err-nombre"><span class="err" id="err-nombre"></span></label>
          <label for="f-localidad">Localidad o barrio<span class="hint">La dirección exacta la coordinamos por WhatsApp.${ZONAS.some(z => z.costo === 0) ? ` Envío gratis en ${ZONAS.filter(z => z.costo === 0).map(z => z.zona).join(', ')}.` : ''}</span><input id="f-localidad" name="localidad" autocomplete="address-level2" required maxlength="80" value="${esc(state.form.localidad)}" aria-describedby="err-localidad"><span class="err" id="err-localidad"></span></label>
          ${PAGOS.length ? `<fieldset class="pay"><legend>Forma de pago <span class="hint">(se confirma con el pedido; en esta web no se cobra)</span></legend>
            <div class="pay-opts">${PAGOS.map((m, i) => `<label class="radio" for="f-pago-${i}"><input type="radio" id="f-pago-${i}" name="pago" value="${esc(m)}"${state.form.pago === m ? ' checked' : ''}><span>${esc(m)}</span></label>`).join('')}</div></fieldset>` : ''}
          <label for="f-obs">Observaciones <span class="hint">(opcional: horario, timbre, reemplazos si falta algo)</span>${t.L.some(l => hasOpciones(l.p)) ? `<span class="hint opc-hint">Tenés productos con varias opciones (sabor, tipo o marca). Si preferís alguna, escribila acá; si no, te consultamos al confirmar.</span>` : ''}<textarea id="f-obs" name="obs" maxlength="500">${esc(state.form.obs)}</textarea></label>
        </form>
        <details class="msg"><summary>Ver el mensaje que se va a enviar</summary><textarea class="msg-preview" id="msg-preview" readonly aria-label="Mensaje del pedido">${esc(orderMessage())}</textarea></details>
        <p class="sub-note rv-note">${hasNumber() ? `WhatsApp de pedidos: <b class="num" style="user-select:all">${esc(numeroVisible())}</b>. ` : ''}El pedido queda confirmado cuando te respondamos con stock, día y horario de entrega. No se cobra nada en esta web.</p>
      </div>
      <div class="dlg-foot" id="review-foot">${reviewFootHTML()}</div>`;
    updateFieldErrors();
  }
  function updateFieldErrors() {
    const err = formErrors();
    ['nombre', 'localidad'].forEach(k => {
      const inp = document.getElementById('f-' + k), sp = document.getElementById('err-' + k);
      if (!inp || !sp) return;
      const show = state.mostrarErrores && err[k];
      sp.textContent = show ? err[k] : '';
      if (show) inp.setAttribute('aria-invalid', 'true'); else inp.removeAttribute('aria-invalid');
    });
  }
  function updateReviewDynamic() {
    const f = $('#review-foot'); if (f) f.innerHTML = reviewFootHTML();
    const m = $('#msg-preview'); if (m) m.value = orderMessage();
    const t = totals(), tt = $('#rv-total'); if (tt) tt.textContent = ars(t.total);
    const re = $('#rv-envio'); if (re) re.textContent = envioTexto(state.form.localidad);
    updateFieldErrors();
  }
  function openReview() {
    state.envio = 'form'; state.mostrarErrores = false;
    closeAll(); renderReview(); openDlg('#dlg-revisar');
  }

  async function copyOrder(btn) {
    const text = orderMessage();
    const st = $('#review-status');
    try {
      await navigator.clipboard.writeText(text);
      if (st) st.textContent = 'Copiamos el pedido. Pegalo en un chat de WhatsApp' + (hasNumber() ? ` con el ${numeroVisible()}.` : '.');
    } catch (e) {
      const d = $('#revisar details.msg'); if (d) d.open = true;
      const ta = $('#msg-preview'); if (ta) { ta.focus(); ta.select(); }
      if (st) st.textContent = 'Seleccionamos el texto del pedido: copialo con Ctrl+C o manteniendo apretado.';
    }
  }

  /* ---------- Botón de arrepentimiento (art. 34 Ley 24.240; Disp. 954/2025) ----------
     Sin registración ni trámites previos: se completa lo mínimo para identificar la compra y se envía por WhatsApp o se copia. */
  function arrepErrors() {
    return {
      nombre: state.arrep.nombre.trim().length < 2 ? 'Escribí tu nombre y apellido.' : '',
      fecha: !state.arrep.fecha ? 'Indicá la fecha en que recibiste el pedido.' : ''
    };
  }
  function arrepMessage() {
    const a = state.arrep, f = a.fecha ? fechaAR(a.fecha) : '-';
    return ['Hola, Mayorista a tu Casa. Quiero usar el BOTÓN DE ARREPENTIMIENTO para revocar mi compra (art. 34, Ley 24.240).',
      '', `Nombre: ${a.nombre.trim() || '-'}`, `Fecha en que recibí el pedido: ${f}`, `Qué quiero devolver: ${a.detalle.trim() || 'Todo el pedido'}`,
      a.tel.trim() ? `Teléfono de contacto: ${a.tel.trim()}` : '', '', 'Por favor, envíenme el código de identificación del trámite.'].filter((l, i, arr) => l !== '' || (arr[i - 1] !== '')).join('\n');
  }
  function diasDesde(iso) { const d = new Date(iso + 'T00:00:00'); if (isNaN(d)) return null; return Math.floor((Date.now() - d.getTime()) / 86400000); }
  function arrepFootHTML() {
    const err = arrepErrors(), okForm = !err.nombre && !err.fecha;
    const href = hasNumber() ? `https://wa.me/${encodeURIComponent(String(CFG.whatsapp).replace(/\D/g, ''))}?text=${encodeURIComponent(arrepMessage())}` : '';
    const dd = state.arrep.fecha ? diasDesde(state.arrep.fecha) : null;
    return `${dd != null && dd > 10 ? `<div class="notice warn">Pasaron ${dd} días desde esa fecha. El plazo es de 10 días corridos desde la entrega; igual podés enviarnos la solicitud y la revisamos.</div>` : ''}
      ${dd != null && dd < 0 ? `<div class="notice warn">La fecha es posterior a hoy. Revisala.</div>` : ''}
      ${hasNumber() ? (okForm
        ? `<a class="btn btn-wa btn-block" id="arrep-wa" href="${esc(href)}" target="_blank" rel="noopener" data-act="arrep-wa">${WA_ICON}<span>Enviar solicitud por WhatsApp</span></a>`
        : `<button class="btn btn-wa btn-block" type="button" data-act="arrep-validar">${WA_ICON}<span>Enviar solicitud por WhatsApp</span></button>`) : ''}
      <button class="btn-link" type="button" data-act="arrep-copiar" ${okForm ? '' : 'disabled'}>Copiar la solicitud</button>
      <p class="sub-note">${hasNumber() ? `También podés escribirnos o llamarnos al <b class="num" style="user-select:all">${esc(numeroVisible())}</b>. ` : ''}No hace falta registrarse.</p>
      <p class="sub-note" id="arrep-status" role="status"></p>`;
  }
  function renderArrep() {
    const a = state.arrep, hoy = new Date(), iso = d => d.toISOString().slice(0, 10);
    $('#arrep').innerHTML = `
      <div class="dlg-head"><div><h3 id="arrep-title">Botón de arrepentimiento</h3><p>Podés cancelar tu compra dentro de los 10 días corridos desde que recibiste el pedido, sin dar explicaciones y sin costo para vos.</p></div>
        <button class="x" type="button" data-act="cerrar" aria-label="Cerrar">×</button></div>
      <div class="dlg-body">
        <ol class="arrep-steps"><li>Completá estos datos.</li><li>Envianos la solicitud por WhatsApp (o copiala y mandala).</li><li>Dentro de las 24 horas te respondemos con el <b>código de tu trámite</b> y coordinamos el retiro sin cargo.</li></ol>
        <form class="form" id="arrep-form" novalidate>
          <label for="a-nombre">Nombre y apellido<input id="a-nombre" name="nombre" autocomplete="name" maxlength="80" value="${esc(a.nombre)}" aria-describedby="err-a-nombre"><span class="err" id="err-a-nombre"></span></label>
          <label for="a-fecha">Fecha en que recibiste el pedido<input id="a-fecha" name="fecha" type="date" max="${iso(hoy)}" value="${esc(a.fecha)}" aria-describedby="err-a-fecha"><span class="err" id="err-a-fecha"></span></label>
          <label for="a-detalle">¿Qué querés devolver? <span class="hint">(si no escribís nada, se entiende que es todo el pedido)</span><textarea id="a-detalle" name="detalle" maxlength="400" placeholder="Todo el pedido, o detallá los productos">${esc(a.detalle)}</textarea></label>
          <label for="a-tel">Teléfono de contacto <span class="hint">(opcional)</span><input id="a-tel" name="tel" type="tel" autocomplete="tel" maxlength="30" value="${esc(a.tel)}"></label>
        </form>
      </div>
      <div class="dlg-foot" id="arrep-foot">${arrepFootHTML()}</div>`;
    updateArrepErrors();
  }
  let arrepShowErr = false;
  function updateArrepErrors() {
    const err = arrepErrors();
    [['nombre', 'a-nombre'], ['fecha', 'a-fecha']].forEach(([k, id]) => {
      const inp = document.getElementById(id), sp = document.getElementById('err-' + id); if (!inp || !sp) return;
      const show = arrepShowErr && err[k]; sp.textContent = show ? err[k] : '';
      if (show) inp.setAttribute('aria-invalid', 'true'); else inp.removeAttribute('aria-invalid');
    });
  }
  async function copyText(text, statusSel, okMsg) {
    const st = $(statusSel);
    try { await navigator.clipboard.writeText(text); if (st) st.textContent = okMsg; }
    catch (e) { if (st) st.textContent = 'No pudimos copiar automáticamente. Escribinos por WhatsApp con estos datos.'; }
  }

  /* ---------- Preguntas y contacto ---------- */
  function renderFaq() {
    const faq = [
      ['¿Hay un pedido mínimo?', `Sí. El pedido mínimo es de ${ars(MIN)} en mercadería, sin contar la entrega. Las consultas por peso o presentación no cuentan para llegar al mínimo.`],
      ['¿Los combos se pueden cambiar?', 'Sí. Tocá “Personalizar este combo” y se carga en el armador. Podés quitar productos, cambiar cantidades y sumar otros. El total pasa a ser la suma real de tu selección y el precio original queda como referencia.'],
      ['¿Cuánto cuesta el envío y a qué zonas llegan?', envioFaq()],
      ['¿Qué hago si un producto tiene varias opciones?', 'Algunos productos se ofrecen en varios sabores, tipos o marcas al mismo precio (por ejemplo, “spaghetti o tallarín”). Si tenés preferencia, escribila en Observaciones al enviar el pedido. Si no, te consultamos al confirmar. No elegimos por vos.'],
      ['¿Cómo pago?', `${PAGOS.length ? 'Medios de pago: ' + PAGOS.join(' o ') + '.' : 'Los medios de pago se coordinan al confirmar el pedido.'} Elegís cuál usar al enviar el pedido. En esta web no se cobra nada: solo armás y enviás tu pedido.`],
      ['¿Hay stock de todo lo que figura?', 'El stock se confirma con cada pedido. Si algún producto no está, te avisamos antes de entregar y te proponemos cómo seguir.'],
      ['¿Por qué algunos productos dicen “Consultar”?', 'Los fiambres y quesos se venden por pieza y se cobran según el peso real. Otros productos tienen una presentación a confirmar. Podés agregarlos como consulta: van aparte en tu pedido y te pasamos el precio final.'],
      ['¿Los precios pueden cambiar?', `Los precios son de referencia al ${FECHA_PRECIOS} y se confirman al tomar el pedido.`],
      ['¿Qué significa “unidad de venta”?', 'Es la presentación que figura en el nombre del producto: un paquete, una botella, un frasco o un pack. Los números de la lista son precios por esa unidad, no por caja.'],
      ['¿Me puedo arrepentir de la compra?', 'Sí. Tenés 10 días corridos desde que recibís el pedido para cancelar la compra, sin dar explicaciones y sin costo. Usá el “Botón de arrepentimiento” que está arriba de todo y al pie de la página: te respondemos dentro de las 24 horas con el código de tu trámite.'],
      ['¿Las imágenes muestran el producto que recibo?', 'Son ilustraciones del tipo de producto, para ubicarte rápido en el catálogo. No muestran la marca ni el envase. Lo que vale es el nombre, la marca y la presentación que figuran en cada producto.']
    ];
    $('#faq').innerHTML = faq.map(([q, a], i) => `<details id="faq-${i}"><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('');
  }
  function renderContact() {
    const hasNumber = !!String(CFG.whatsapp || '').replace(/\D/g, '');
    const hello = `https://wa.me/${String(CFG.whatsapp).replace(/\D/g, '')}?text=${encodeURIComponent('Hola, Mayorista a tu Casa. Tengo una consulta.')}`;
    $('#contact').innerHTML = `
      <div class="card">
        <p class="eyebrow">WhatsApp de pedidos</p>
        ${hasNumber ? `<p class="phone num">${esc(CFG.whatsappVisible || CFG.whatsapp)}</p>
          <div class="row2"><a class="btn btn-wa" href="${esc(hello)}" target="_blank" rel="noopener">Escribinos por WhatsApp</a>
          <button class="btn btn-ghost" type="button" data-act="copiar-numero">Copiar número</button></div>
          <p class="sub-note" id="contact-status" role="status">Si el enlace no abre WhatsApp en tu dispositivo, agendá el número y escribinos.</p>`
        : `<p class="pending">Número de WhatsApp pendiente de carga.</p>`}
      </div>
      <div class="card"><dl class="kv">
        <div><dt>Zonas de entrega</dt><dd>${esc(zonasText())}</dd></div>
        <div><dt>Costo de envío</dt><dd>${esc(deliveryFeeText())}</dd></div>
        <div><dt>Días y horarios</dt><dd>${esc(CFG.horarios || 'A coordinar')}</dd></div>
        <div><dt>Pagos</dt><dd>${esc(pagosText())}</dd></div>
      </dl></div>`;
    $('#foot-note').textContent = `Precios de referencia al ${FECHA_PRECIOS}, en pesos argentinos, por unidad de venta. Stock, entrega y costo de envío sujetos a confirmación. Esta web prepara pedidos para enviar por WhatsApp; no realiza cobros. Imágenes ilustrativas: Fluent Emoji de Microsoft (licencia MIT).`;
    const tb = $('#topbar-info'); if (tb) tb.textContent = [ZONAS.some(z => z.costo === 0) ? `Envío gratis en ${ZONAS.filter(z => z.costo === 0).map(z => z.zona).join(', ')}` : '', PAGOS.length ? PAGOS.join(' o ') : '', `Pedido mínimo ${ars(MIN)}`].filter(Boolean).join(' · ');
  }

  /* ---------- Refresco parcial (mantiene el foco al escribir) ---------- */
  function refresh(id, opts) {
    const focusId = document.activeElement && document.activeElement.id;
    const focusAct = document.activeElement && document.activeElement.dataset ? document.activeElement.dataset.act : null;
    const focusInCatalog = document.activeElement && document.activeElement.closest && document.activeElement.closest('#product-list');
    const row = document.getElementById('p-' + id);
    if (row) row.outerHTML = rowHTML(BY_ID.get(id));
    renderSummaries();
    // devolver el foco a un control equivalente
    let target = focusId ? document.getElementById(focusId) : null;
    if (!target && focusInCatalog) {
      const r = document.getElementById('p-' + id);
      if (r) target = r.querySelector(`[data-act="${focusAct === 'dec' || focusAct === 'inc' ? focusAct : 'inc'}"]`) || r.querySelector('[data-act="set"]') || r.querySelector('button');
    }
    if (!target && opts && opts.fromCart) {
      target = document.querySelector(`${opts.fromCart} [data-act="${focusAct}"][data-id="${id}"]`) || document.querySelector(`${opts.fromCart} .sum-foot button`);
    }
    if (target) target.focus({ preventScroll: true });
  }
  function renderAll() { renderSecChips(); renderCatalog(); renderSummaries(); }
  /* Lleva la lista al principio de los resultados cuando cambia un filtro y el usuario estaba más abajo. */
  function scrollToResults() {
    const tools = $('.tools'), list = $('#product-list');
    if (!tools || !list) return;
    const stickTop = parseFloat(getComputedStyle(tools).top) || 0;
    const want = stickTop + tools.offsetHeight + 6;
    const top = list.getBoundingClientRect().top;
    if (top < want - 2) { try { window.scrollBy({ top: top - want, behavior: 'instant' }); } catch (e) { window.scrollBy(0, top - want); } }
  }
  function applyFilters() { renderCatalog(); scrollToResults(); }

  /* ---------- Diálogos ---------- */
  const $ = s => document.querySelector(s);
  let histPushed = false, ignorePop = false;
  function openDlg(sel) {
    const d = $(sel);
    if (!d.open) { try { d.showModal(); } catch (e) { d.setAttribute('open', ''); } }
    if (!histPushed) { try { history.pushState({ mtcDialogo: 1 }, ''); histPushed = true; } catch (e) { /* sin historial */ } }
  }
  // El botón Atrás del celular cierra la ventana abierta en lugar de salir de la página.
  document.querySelectorAll('dialog').forEach(d => d.addEventListener('close', () => {
    setTimeout(() => {
      if (histPushed && !document.querySelector('dialog[open]')) { histPushed = false; ignorePop = true; try { history.back(); } catch (e) { ignorePop = false; } }
    }, 0);
  }));
  window.addEventListener('popstate', () => {
    if (ignorePop) { ignorePop = false; return; }
    if (histPushed) { histPushed = false; closeAll(); }
  });
  function closeAll() { document.querySelectorAll('dialog[open]').forEach(d => d.close()); }
  let toastTimer = null, toastAction = null;
  function toast(msg, action) {
    const t = $('#toast');
    toastAction = action || null;
    t.innerHTML = `<span>${esc(msg)}</span>${action ? `<button type="button" class="t-act" data-act="toast-act">${esc(action.label)}</button>` : ''}`;
    t.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(() => { t.hidden = true; toastAction = null; }, action ? 8000 : 4200);
  }

  /* ---------- Eventos ---------- */
  let vaciarArmed = null;
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-act]'); if (!b) return;
    const act = b.dataset.act, id = b.dataset.id;
    const inCart = b.closest('#summary-sheet') ? '#summary-sheet' : (b.closest('#summary-aside') ? '#summary-aside' : null);
    switch (act) {
      case 'inc': bump(id, 1, inCart); if (inCart) refocus(inCart, 'inc', id); break;
      case 'dec': bump(id, -1, inCart); if (inCart) refocus(inCart, 'dec', id); break;
      case 'remove': setQty(id, 0, { fromCart: inCart }); break;
      case 'readd': setQty(id, Number(b.dataset.q) || 1, { fromCart: inCart }); toast(`Volvimos a agregar ${fullName(BY_ID.get(id))}.`); break;
      case 'toast-act': { const a = toastAction; toastAction = null; $('#toast').hidden = true; if (a) a.fn(); break; }
      case 'clear-q': { state.filtro.q = ''; const q = $('#q'); q.value = ''; applyFilters(); q.focus(); break; }
      case 'mostrar-consultas': { state.filtro.ocultarConsultas = false; const c = $('#solo-pedido'); if (c) c.checked = false; applyFilters(); break; }
      case 'ver-combo': comboDialog(id); break;
      case 'personalizar': closeAll(); askCombo(id); break;
      case 'elegir-reemplazar': if (state.pendingCombo) { loadCombo(state.pendingCombo, 'replace'); state.pendingCombo = null; goArmar(); } break;
      case 'elegir-sumar': if (state.pendingCombo) { loadCombo(state.pendingCombo, 'add'); state.pendingCombo = null; goArmar(); } break;
      case 'restaurar': if (state.base) { loadCombo(state.base, 'replace'); } break;
      case 'cargar-inicio': {
        const v = $('#start-select').value;
        if (v) askCombo(v);
        else if (state.items.size || state.consultas.size) { toast('Para empezar de cero, tocá “Vaciar pedido” en el resumen.'); openCart(); }
        else { toast('Tu pedido está vacío. Buscá productos y tocá Agregar.'); $('#q').focus(); }
        break;
      }
      case 'ir-armar': break; // el enlace hace el desplazamiento
      case 'ver-combos': closeAll(); $('#combos').scrollIntoView({ block: 'start' }); break;
      case 'abrir-carrito': openCart(); break;
      case 'cerrar': { const d = b.closest('dialog'); if (d) d.close(); break; }
      case 'sec': state.filtro.sec = b.dataset.v; state.filtro.cat = 'Todas'; renderSecChips(); applyFilters(); break;
      case 'cat': state.filtro.cat = b.dataset.v; renderSecChips(); applyFilters(); break;
      case 'budget': state.presupuesto = Number(b.dataset.v); save(); renderSummaries(); break;
      case 'budget-clear': state.presupuesto = null; save(); renderSummaries(); break;
      case 'budget-apply': {
        const inp = document.getElementById('budget-' + b.dataset.where);
        const n = Math.round(Number(String(inp.value).replace(/[^\d]/g, '')));
        if (n > 0) { state.presupuesto = n; save(); renderSummaries(); } else { toast('Escribí un monto en pesos, por ejemplo 350000.'); inp.focus(); }
        break;
      }
      case 'vaciar': {
        if (vaciarArmed === b.dataset.where) {
          const snap = snapshot();
          state.items.clear(); state.consultas.clear(); state.base = null; vaciarArmed = null; save(); renderAll(); toast('Vaciamos tu pedido.', undoTo(snap));
        } else {
          vaciarArmed = b.dataset.where; b.textContent = 'Tocá de nuevo para vaciar todo';
          setTimeout(() => { if (vaciarArmed) { vaciarArmed = null; renderSummaries(); } }, 4000);
        }
        break;
      }
      case 'revisar': {
        const t = totals();
        if (!t.L.length) { toast('Todavía no agregaste productos.'); break; }
        openReview();
        break;
      }
      case 'validar': {
        state.mostrarErrores = true; updateFieldErrors();
        const err = formErrors(); const first = err.nombre ? '#f-nombre' : (err.localidad ? '#f-localidad' : null);
        if (first) $(first).focus();
        break;
      }
      case 'envio-si': state.envio = 'listo'; updateReviewDynamic(); break;
      case 'arrepentimiento': arrepShowErr = false; closeAll(); renderArrep(); openDlg('#dlg-arrep'); break;
      case 'arrep-validar': {
        arrepShowErr = true; updateArrepErrors();
        const e2 = arrepErrors(); const f = e2.nombre ? '#a-nombre' : (e2.fecha ? '#a-fecha' : null); if (f) $(f).focus();
        break;
      }
      case 'arrep-copiar': copyText(arrepMessage(), '#arrep-status', `Copiamos la solicitud. Pegala en WhatsApp${hasNumber() ? ' al ' + numeroVisible() : ''}.`); break;
      case 'arrep-wa': setTimeout(() => { const st = $('#arrep-status'); if (st) st.textContent = 'Si se abrió WhatsApp, tocá Enviar. Te respondemos dentro de las 24 horas con el código de tu trámite.'; }, 500); break;
      case 'envio-no': state.envio = 'ayuda'; updateReviewDynamic(); break;
      case 'nuevo-pedido': {
        const snap = snapshot();
        state.items.clear(); state.consultas.clear(); state.base = null; save(); closeAll(); renderAll();
        toast('Listo para un pedido nuevo. El anterior lo tenés en tu chat de WhatsApp.', undoTo(snap));
        break;
      }
      case 'copiar': copyOrder(b); break;
      case 'seguir': closeAll(); openCart(); break;
      case 'copiar-numero': {
        const st = $('#contact-status');
        navigator.clipboard.writeText(CFG.whatsappVisible || CFG.whatsapp).then(() => { st.textContent = 'Copiamos el número.'; }).catch(() => { st.textContent = `Copialo a mano: ${CFG.whatsappVisible || CFG.whatsapp}`; });
        break;
      }
      case 'wa': {
        // El enlace abre WhatsApp. Después preguntamos si se pudo enviar: la página no puede saberlo sola.
        setTimeout(() => { state.envio = 'pregunta'; updateReviewDynamic(); }, 600);
        break;
      }
    }
  });
  function refocus(scope, act, id) {
    const el = document.querySelector(`${scope} [data-act="${act}"][data-id="${id}"]`);
    if (el) el.focus({ preventScroll: true });
  }
  function openCart() {
    if (window.matchMedia('(min-width: 1024px)').matches) {
      $('#armar').scrollIntoView({ block: 'start' });
      const a = $('#summary-aside'); if (a) { a.setAttribute('tabindex', '-1'); a.focus({ preventScroll: true }); }
    } else { openDlg('#dlg-carrito'); }
  }

  // Cantidades escritas a mano: se aplican al confirmar (Enter o al salir del campo).
  document.addEventListener('change', e => {
    const el = e.target;
    if (el.dataset && el.dataset.act === 'set') {
      const raw = el.value;
      const n = cleanQty(raw);
      if (String(raw).trim() !== '' && String(n) !== String(raw).trim() && n > 0) toast(`Usamos ${n}: las cantidades van en unidades enteras.`);
      const scope = el.closest('#summary-sheet') ? '#summary-sheet' : (el.closest('#summary-aside') ? '#summary-aside' : null);
      setQty(el.dataset.id, n, { fromCart: scope });
    }
    if (el.id === 'solo-pedido') { state.filtro.ocultarConsultas = el.checked; applyFilters(); }
    if (el.form && el.form.id === 'order-form' && el.name === 'pago') { state.form.pago = el.value; save(); updateReviewDynamic(); }
    if (el.id === 'orden') { state.filtro.orden = el.value; applyFilters(); }
  });
  // Los desplegables (presupuesto, productos quitados, lista de la revisión) recuerdan si quedaron abiertos.
  document.addEventListener('toggle', e => {
    const d = e.target; if (!d || !d.dataset || !d.dataset.key) return;
    if (d.open) openDetails.add(d.dataset.key); else openDetails.delete(d.dataset.key);
  }, true);
  // La rueda del mouse no cambia cantidades sin querer.
  document.addEventListener('wheel', e => { if (e.target.matches && e.target.matches('input[type="number"]') && document.activeElement === e.target) e.target.blur(); }, { passive: true });
  // Si el pedido cambia en otra pestaña, esta se actualiza.
  window.addEventListener('storage', e => {
    if (e.key !== STORE_KEY) return;
    state.items.clear(); state.consultas.clear(); state.base = null; load(); renderAll();
  });
  document.addEventListener('keydown', e => {
    const el = e.target;
    if (e.key === 'Enter' && el.dataset && el.dataset.act === 'set') { e.preventDefault(); el.blur(); }
    if (e.key === 'Enter' && el.dataset && el.dataset.act === 'budget-input') { e.preventDefault(); const w = el.id.replace('budget-', ''); document.querySelector(`[data-act="budget-apply"][data-where="${w}"]`).click(); }
    if (e.key === 'Enter' && el.id === 'q') { e.preventDefault(); clearTimeout(qTimer); applyFilters(); }
    if (e.key === 'Escape' && el.id === 'q' && el.value) { e.preventDefault(); $('[data-act="clear-q"]').click(); }
    // "/" lleva al buscador (escritorio)
    if (e.key === '/' && !/^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName) && !document.querySelector('dialog[open]')) { e.preventDefault(); const q = $('#q'); q.focus(); q.select(); }
  });
  document.addEventListener('input', e => {
    const el = e.target;
    if (el.id === 'q') {
      state.filtro.q = el.value;
      const qc = $('#q-clear'); if (qc) qc.hidden = !el.value;
      clearTimeout(qTimer); qTimer = setTimeout(applyFilters, 140);
    }
    if (el.form && el.form.id === 'arrep-form' && el.name in state.arrep) {
      state.arrep[el.name] = el.value;
      const f = $('#arrep-foot'); if (f) f.innerHTML = arrepFootHTML();
      updateArrepErrors();
    }
    if (el.form && el.form.id === 'order-form' && el.name in state.form) {
      state.form[el.name] = el.value; save();
      if (state.envio !== 'form') state.envio = 'form';
      updateReviewDynamic();
    }
  });
  let qTimer = null;
  document.addEventListener('submit', e => e.preventDefault());
  // Al cerrar un diálogo, el foco vuelve al botón que lo abrió (lo hace el navegador con showModal).

  /* ---------- Controles del catálogo que no se re-renderizan ---------- */
  function init() {
    load();
    renderHero(); renderCombos(); renderFaq(); renderContact(); renderAll();
    if (state.items.size || state.consultas.size) toast('Recuperamos el pedido que habías empezado.');
    // Verificación interna: cada combo original debe sumar exactamente su importe.
    COMBOS.forEach(c => { if (comboTotal(c) !== c.referenceTotalARS) console.warn('Combo con diferencia', c.id, comboTotal(c), c.referenceTotalARS); });
  }

  // API mínima para pruebas y mantenimiento (no expone datos internos de la empresa).
  window.MayoristaTienda = { totals, orderMessage, comboTotal: id => comboTotal(COMBO_BY_ID.get(id)), setQty, loadCombo, state };
  window.addEventListener('pageshow', () => { const o = $('#orden'); if (o) o.value = state.filtro.orden; });
  init();
})();
