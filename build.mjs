/* Quasar demo (IT) — generatore statico. Esegui: node build.mjs */
import { writeFileSync, mkdirSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { SITE, HOME, CERTS, ABOUT, METHOD_PAGE, SERVICES_PAGE, CONTACT_PAGE, IMG, LEGAL } from './content.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = __dirname;
const ASSET_VER = (() => {
  const h = createHash('sha1');
  for (const f of ['assets/style.css', 'assets/main.js', 'assets/favicon-32.png', 'assets/quasar-q.webp', 'assets/founder.webp']) {
    try { h.update(readFileSync(join(__dirname, f))); } catch {}
  }
  return h.digest('hex').slice(0, 8);
})();
const UI = SITE.ui;
const short = (c) => c.name.split(' — ')[0];
const long = (c) => c.name.split(' — ')[1] || c.name;

/* ---------------- SVG ---------------- */
function seal(light = false) {
  const ring = light ? '#ffffff' : '#1AB9A4';
  const tickC = light ? '#2DD4BF' : '#1AB9A4';
  let ticks = '';
  for (let i = 0; i < 12; i++) {
    const a = (i * 30) * Math.PI / 180;
    const x1 = 24 + Math.cos(a) * 20.5, y1 = 24 + Math.sin(a) * 20.5;
    const x2 = 24 + Math.cos(a) * 17, y2 = 24 + Math.sin(a) * 17;
    ticks += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${tickC}" stroke-width="1.6" stroke-linecap="round" opacity="0.6"/>`;
  }
  return `<svg class="seal" viewBox="0 0 48 48" width="40" height="40" aria-hidden="true">
    <circle cx="24" cy="24" r="14.5" fill="none" stroke="${ring}" stroke-width="2.4"/>
    ${ticks}
    <path d="M17 24.5 l4.7 4.8 L31.5 19" fill="none" stroke="#F5933A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
}
const tick = () => `<svg class="tick" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#10B981" opacity="0.14"/><path d="M7 12.4 l3.2 3.3 L17 8.6" fill="none" stroke="#0F766E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const arrow = () => `<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
function icon(name) {
  const s = 'fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"';
  const map = {
    contract: `<path ${s} d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path ${s} d="M14 3v5h5"/><path ${s} d="M9 14l2 2 4-4"/>`,
    shield: `<path ${s} d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z"/><path ${s} d="M8.5 12l2.5 2.5L16 9.5"/>`,
    gauge: `<path ${s} d="M4 19a8 8 0 1 1 16 0"/><path ${s} d="M12 19l4-5"/><circle cx="12" cy="19" r="1.4" fill="currentColor" stroke="none"/>`,
    growth: `<path ${s} d="M4 19V5M4 19h16"/><path ${s} d="M8 16l3.5-4 3 2.5L20 7"/><path ${s} d="M16 7h4v4"/>`,
  };
  return `<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">${map[name] || ''}</svg>`;
}

/* ---------------- layout ---------------- */
const FONTS = 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,460;0,9..144,500;1,9..144,380&family=Hanken+Grotesk:wght@400;500;550;600;650;700&family=Outfit:wght@400;500;600;700&family=Cormorant+Garamond:wght@500;600;700&family=Spline+Sans+Mono:wght@400;500&display=swap';

// Quasar "Q" — concept #1 "Aurum": 3D gold ring, blue galaxy core, jet flare, gold ribbon tail.
// The IT site is dark throughout (header + footer), so the dark version is used everywhere.
const Q1_DARK = `<svg class="brand-q" viewBox="0 0 64 64" width="46" height="46" aria-hidden="true"><defs><radialGradient id="qa-core" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff" stop-opacity="0.95"/><stop offset="22%" stop-color="#8FBEEA"/><stop offset="55%" stop-color="#2E6FB5"/><stop offset="100%" stop-color="#0E1714" stop-opacity="0"/></radialGradient><linearGradient id="qa-ring" x1="14" y1="10" x2="50" y2="54" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#F2D08A"/><stop offset="38%" stop-color="#C9A24B"/><stop offset="70%" stop-color="#8A6A28"/><stop offset="100%" stop-color="#F2D08A"/></linearGradient><linearGradient id="qa-ringhi" x1="20" y1="12" x2="44" y2="40" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FBEFCB"/><stop offset="100%" stop-color="#C9A24B" stop-opacity="0"/></linearGradient><linearGradient id="qa-tail" x1="36" y1="40" x2="56" y2="58" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#F2D08A"/><stop offset="55%" stop-color="#C9A24B"/><stop offset="100%" stop-color="#8A6A28"/></linearGradient><linearGradient id="qa-jet" x1="22" y1="44" x2="44" y2="20" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#F5933A" stop-opacity="0"/><stop offset="50%" stop-color="#F2D08A"/><stop offset="100%" stop-color="#F5933A" stop-opacity="0"/></linearGradient><radialGradient id="qa-flare" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff"/><stop offset="40%" stop-color="#F2D08A"/><stop offset="100%" stop-color="#F5933A" stop-opacity="0"/></radialGradient><filter id="qa-glow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="1.1" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter><filter id="qa-soft" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="2"/></filter></defs><circle cx="31" cy="31" r="13" fill="url(#qa-core)" opacity="0.95" filter="url(#qa-soft)"/><g fill="none" stroke="#8FBEEA" stroke-linecap="round" opacity="0.55"><path d="M31 21 C39 22 41 30 36 35 C32 39 25 38 24 33" stroke-width="1.4"/><path d="M31 41 C23 40 21 32 26 27 C30 23 37 24 38 29" stroke-width="1.4" opacity="0.7"/></g><g fill="none" stroke="#1AB9A4" stroke-linecap="round" opacity="0.4"><path d="M33 24 C40 26 40 33 35 36" stroke-width="1"/></g><g filter="url(#qa-glow)"><line x1="22" y1="42" x2="42" y2="20" stroke="url(#qa-jet)" stroke-width="2" stroke-linecap="round"/><circle cx="32" cy="31" r="2.2" fill="url(#qa-flare)"/><path d="M32 25 L33 30 L38 31 L33 32 L32 37 L31 32 L26 31 L31 30 Z" fill="#F2D08A" opacity="0.95"/></g><circle cx="31" cy="31" r="20.5" fill="none" stroke="url(#qa-ring)" stroke-width="6"/><circle cx="31" cy="31" r="22.8" fill="none" stroke="#8A6A28" stroke-width="1" opacity="0.6"/><circle cx="31" cy="31" r="18.1" fill="none" stroke="#8A6A28" stroke-width="0.8" opacity="0.5"/><path d="M22 14 A20.5 20.5 0 0 1 44 16" fill="none" stroke="url(#qa-ringhi)" stroke-width="2.4" stroke-linecap="round"/><path d="M40 41 C46 46 49 50 56 57" fill="none" stroke="url(#qa-tail)" stroke-width="6" stroke-linecap="round"/><path d="M41 40 C46 45 49 49 55 56" fill="none" stroke="#FBEFCB" stroke-width="1.4" stroke-linecap="round" opacity="0.7"/></svg>`;

// Client's own galaxy-Q artwork (cleaned to transparent), used as the Q emblem.
function logoMark() { return `<img class="brand-q" src="assets/quasar-q.webp?v=${ASSET_VER}" alt="" />`; }
const brandLockup = (light = false) =>
  `<span class="brand-top">${logoMark(light)}<span class="brand-name"><span class="qhide">Q</span>uasar</span></span><span class="brand-sub">EN ISO Consulting</span>`;

function header(current) {
  const links = SITE.nav.map(n =>
    `<a href="${n.href}"${n.href === current ? ' class="is-current" aria-current="page"' : ''}>${n.label}</a>`
  ).join('');
  return `<header class="site-header" data-header>
    <div class="container header-inner">
      <a class="brand" href="index.html" aria-label="${SITE.brand} home">${brandLockup()}</a>
      <button class="nav-toggle" data-nav-toggle aria-label="Menu" aria-expanded="false"><span></span></button>
      <nav class="nav" data-nav aria-label="Principale">
        ${links}
        <a class="btn btn--primary nav-cta" href="contact.html">${UI.navCta}</a>
      </nav>
    </div>
  </header>`;
}

function footer() {
  const f = UI.footer;
  const certLinks = CERTS.map(c => `<a href="${c.slug}.html">${short(c)}</a>`).join('');
  const navLinks = SITE.nav.map(n => `<a href="${n.href}">${n.label}</a>`).join('');
  const year = new Date().getFullYear();
  return `<footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        <div>
          <span class="brand">${brandLockup(true)}</span>
          <p class="footer-tag">${SITE.tagline}. ${f.tagSuffix}</p>
          <p class="footer-contact"><a href="tel:+393457677813">+39 345 7677813</a><br><a href="mailto:contatti@quasar-consulting.com">contatti@quasar-consulting.com</a><br>Bergamo, Italia</p>
        </div>
        <div class="footer-col"><h5>${f.certs}</h5>${certLinks}</div>
        <div class="footer-col"><h5>${f.company}</h5>${navLinks}</div>
        <div class="footer-col"><h5>${f.start}</h5>
          <a href="contact.html">${f.bookAssessment}</a>
          <a href="contact.html">${f.readiness}</a>
          <a href="services.html">${f.allServices}</a>
        </div>
      </div>
      <p class="footer-note">Le certificazioni sono rilasciate da organismi di certificazione accreditati (in Italia da ACCREDIA), riconosciuti a livello internazionale tramite il sistema di accreditamento internazionale (oggi Global ACI, già IAF/ILAC). Quasar è una società di consulenza, non un organismo di certificazione.</p>
      <div class="footer-bottom">
        <span>© ${year} ${SITE.brand}. ${f.rights}</span>
        <span class="footer-legal"><a href="privacy.html">Privacy</a> · <a href="cookies.html">Cookie Policy</a></span>
      </div>
    </div>
  </footer>`;
}

function layout({ title, desc, current, body }) {
  return `<!doctype html>
<html lang="${SITE.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${desc}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="icon" type="image/png" sizes="32x32" href="assets/favicon-32.png?v=${ASSET_VER}">
<link rel="apple-touch-icon" sizes="180x180" href="assets/favicon-180.png?v=${ASSET_VER}">
<link rel="stylesheet" href="${FONTS}">
<link rel="stylesheet" href="assets/style.css?v=${ASSET_VER}">
</head>
<body>
<a class="skip" href="#main">Vai al contenuto</a>
${header(current)}
<main id="main">
${body}
</main>
${footer()}
<script src="assets/main.js?v=${ASSET_VER}" defer></script>
</body>
</html>`;
}

/* ---------------- blocchi ---------------- */
const media = (src, alt, cls = '') => `<div class="media media--wash ${cls}"><img src="${src}" alt="${alt}" loading="lazy"></div>`;
function ctaBand(c) {
  return `<section class="section cta-band"><div class="container"><div class="inner" data-reveal>
    <div class="glow"></div>
    <h2>${c.title}</h2>
    <p>${c.p}</p>
    <div class="actions">
      <a class="btn btn--primary" href="contact.html">${UI.ctaPrimary} ${arrow()}</a>
      <a class="btn btn--ghost" href="services.html">${UI.ctaSecondary}</a>
    </div>
  </div></div></section>`;
}
const certCard = (c) => `<a class="card cert-card" href="${c.slug}.html" data-reveal>
    <span class="code">${c.code}</span>
    <h3>${short(c)}</h3>
    <p>${c.promise}</p>
    <span class="link-arrow">${UI.explore} ${arrow()}</span>
  </a>`;

/* ---------------- pagine ---------------- */
function renderHome() {
  const h = HOME;
  const hero = `<section class="hero"><div class="container hero-grid">
    <div class="hero-copy">
      <p class="clause hero-kicker" data-reveal>${h.hero.clause}</p>
      <h1 data-reveal data-delay="1">${h.hero.title[0]}<em>${h.hero.title[1]}</em>${h.hero.title[2]}</h1>
      <p class="lead hero-sub" data-reveal data-delay="2">${h.hero.sub}</p>
      <div class="hero-actions" data-reveal data-delay="2">
        <a class="btn btn--primary" href="contact.html">${UI.navCta} ${arrow()}</a>
        <a class="btn btn--ghost" href="method.html">Come lavoriamo</a>
      </div>
      <div class="hero-proof" data-reveal data-delay="3">
        ${h.hero.proof.map(p => `<div class="pf"><div class="pf-n">${p.n}</div><div class="pf-l">${p.l}</div></div>`).join('')}
      </div>
    </div>
    <div class="hero-media" data-reveal data-delay="1">
      ${media(IMG.hero, 'Linea di produzione moderna')}      <div class="hero-tag"><span class="tick">${tick()}</span><span>${h.hero.tag}</span></div>
    </div>
  </div></section>`;

  const strip = `<section class="standards-strip"><div class="container">
    <span class="label">${UI.standardsLabel}</span>
    <ul>${SITE.standards.map(s => `<li>${s}</li>`).join('')}</ul>
  </div></section>`;

  const outcomes = `<section class="section"><div class="container">
    <div class="section-head" data-reveal><p class="clause">${h.outcomes.clause}</p><h2>${h.outcomes.title}</h2></div>
    <div class="grid cols-4">
      ${h.outcomes.items.map((o, i) => `<div class="card outcome" data-reveal data-delay="${(i % 3) + 1}">
        <p class="clause">${o.code}</p>${icon(o.icon)}<h3>${o.h}</h3><p>${o.p}</p>
      </div>`).join('')}
    </div>
  </div></section>`;

  const certs = `<section class="section surface-sand"><div class="container">
    <div class="section-head" data-reveal><p class="clause">${h.certsIntro.clause}</p><h2>${h.certsIntro.title}</h2><p class="lead">${h.certsIntro.sub}</p></div>
    <div class="grid cols-4">${CERTS.map(certCard).join('')}</div>
    <p class="accred-note" data-reveal>Le certificazioni che ti aiutiamo a ottenere sono rilasciate da organismi di certificazione accreditati (in Italia da ACCREDIA) e riconosciute a livello internazionale tramite gli accordi di mutuo riconoscimento del sistema internazionale di accreditamento (oggi Global ACI, che ha unificato IAF e ILAC).</p>
  </div></section>`;

  const method = `<section class="section"><div class="container">
    <div class="section-head" data-reveal><p class="clause">${h.method.clause}</p><h2>${h.method.title}</h2><p class="lead">${h.method.sub}</p></div>
    <div class="method">
      ${h.method.steps.map((s, i) => `<div class="step" data-reveal data-delay="${(i % 3) + 1}">
        <span class="n">${UI.step} ${String(i + 1).padStart(2, '0')}</span><h4>${s.h}</h4><p>${s.p}</p><div class="bar"></div>
      </div>`).join('')}
    </div>
  </div></section>`;

  const diff = `<section class="section surface-sand"><div class="container split">
    <div class="split-media" data-reveal>${media(IMG.engineering, 'Tecnici al lavoro insieme')}</div>
    <div data-reveal data-delay="1">
      <p class="clause">${h.different.clause}</p><h2>${h.different.title}</h2>
      <p class="lead" style="margin-top:1rem">${h.different.body}</p>
      <ul class="checklist">${h.different.points.map(p => `<li>${tick()}<span>${p}</span></li>`).join('')}</ul>
    </div>
  </div></section>`;

  const industries = `<section class="section"><div class="container">
    <div class="section-head" data-reveal><p class="clause">${h.industries.clause}</p><h2>${h.industries.title}</h2><p class="lead">${h.industries.sub}</p></div>
    <div class="ind">${h.industries.list.map((n, i) => `<div class="item" data-reveal data-delay="${(i % 4)}"><span class="dot"></span>${n}</div>`).join('')}</div>
  </div></section>`;

  const stats = `<section class="section invert"><div class="container">
    <p class="clause clause--light" data-reveal style="margin-bottom:1.6rem">${h.stats.clause}</p>
    <div class="stats">
      ${h.stats.items.map((s, i) => `<div class="stat" data-reveal data-delay="${(i % 4)}">
        <div class="n"><span data-count="${s.n}">${s.n}</span><span class="u">${s.u}</span></div><div class="l">${s.l}</div>
      </div>`).join('')}
    </div>
  </div></section>`;

  return layout({
    title: `${SITE.brand} — Certificazioni che fanno crescere l’impresa`,
    desc: 'Consulenza per certificazioni ISO ed EN e crescita aziendale: ISO 9001, 14001, 45001, 27001, EN 1090, ISO 3834, Marcatura CE e FPC, per imprese di ogni settore.',
    current: 'index.html',
    body: hero + strip + outcomes + certs + method + diff + industries + stats + ctaBand(h.cta),
  });
}

function renderCert(c) {
  const proseSections = c.sections.map(s => {
    let html = `<h2>${s.h}</h2>`;
    if (s.p) html += `<p>${s.p}</p>`;
    if (s.list) html += `<ul class="checklist">${s.list.map(li => `<li>${tick()}<span>${li}</span></li>`).join('')}</ul>`;
    return html;
  }).join('');
  const body = `
  <section class="page-hero"><div class="container">
    <p class="crumbs"><a href="index.html">${UI.crumbHome}</a> / <a href="services.html">${UI.crumbCerts}</a> / ${short(c)}</p>
    <div class="cert-hero">
      <div data-reveal>
        <span class="cert-badge">${c.code}</span>
        <h1 style="margin-top:1rem">${long(c)}</h1>
        <p class="lead" style="margin-top:1rem">${c.promise}</p>
        <div class="tag-row">${c.tags.map(t => `<span class="t">${t}</span>`).join('')}</div>
        ${['marcatura-ce', 'controllo-produzione-fabbrica'].includes(c.slug) ? '' : '<p class="cert-accred">Ti prepariamo alla certificazione rilasciata da organismi accreditati (ACCREDIA in Italia), con riconoscimento internazionale tramite il sistema di accreditamento Global ACI (già IAF/ILAC).</p>'}
      </div>
      <div class="hero-media" data-reveal data-delay="1">${media(c.image, c.name)}</div>
    </div>
  </div></section>

  <section class="section section--tight"><div class="container split" style="align-items:start">
    <div class="prose" data-reveal>
      <p class="lead" style="color:var(--ink)">${c.intro}</p>
      ${proseSections}
      <div style="margin-top:2rem"><a class="btn btn--primary" href="contact.html">${UI.talkCtaPre}${short(c)} ${arrow()}</a></div>
    </div>
    <aside data-reveal data-delay="1">
      <div class="aside-card">
        <h4>${c.aside.title}</h4>
        <ul>${c.aside.items.map(i => `<li>${tick()}<span>${i}</span></li>`).join('')}</ul>
      </div>
    </aside>
  </div></section>

  ${ctaBand({ title: c.ctaTitle || `${UI.certCtaTitlePre}${short(c)}?`, p: UI.certCtaText })}`;
  return layout({ title: `${short(c)} — ${SITE.brand}`, desc: `${short(c)}: ${c.promise}`, current: 'services.html', body });
}

function renderServices() {
  const p = SERVICES_PAGE;
  const body = `
  <section class="page-hero surface-sand"><div class="container">
    <div class="section-head" data-reveal style="margin-bottom:0"><p class="clause">${p.clause}</p><h1>${p.title}</h1><p class="lead">${p.lead}</p></div>
  </div></section>
  <section class="section"><div class="container"><div class="grid cols-4">${CERTS.map(certCard).join('')}</div></div></section>
  <section class="section surface-sand"><div class="container">
    <div class="section-head" data-reveal><p class="clause">${UI.beyondClause}</p><h2>${UI.beyondTitle}</h2></div>
    <div class="grid cols-4">${p.families.map((f, i) => `<div class="card" data-reveal data-delay="${(i % 3) + 1}"><h3>${f.h}</h3><p>${f.p}</p></div>`).join('')}</div>
  </div></section>
  ${ctaBand(HOME.cta)}`;
  return layout({ title: `Certificazioni e servizi — ${SITE.brand}`, desc: p.lead, current: 'services.html', body });
}

function renderIndustries() {
  const h = HOME.industries, s = UI.industriesSplit;
  const body = `
  <section class="page-hero"><div class="container">
    <div class="section-head" data-reveal style="margin-bottom:0"><p class="clause">${h.clause}</p><h1>${h.title}</h1><p class="lead">${h.sub}</p></div>
  </div></section>
  <section class="section section--tight"><div class="container">
    <div class="ind">${h.list.map((n, i) => `<div class="item" data-reveal data-delay="${(i % 4)}"><span class="dot"></span>${n}</div>`).join('')}</div>
  </div></section>
  <section class="section surface-sand"><div class="container split">
    <div class="split-media" data-reveal>${media(IMG.warehouse, 'Logistica e magazzino')}</div>
    <div data-reveal data-delay="1">
      <p class="clause">${s.clause}</p><h2>${s.title}</h2>
      <p class="lead" style="margin-top:1rem">${s.body}</p>
      <div style="margin-top:1.6rem"><a class="btn btn--primary" href="contact.html">${s.cta} ${arrow()}</a></div>
    </div>
  </div></section>
  ${ctaBand(HOME.cta)}`;
  return layout({ title: `Settori — ${SITE.brand}`, desc: h.sub, current: 'industries.html', body });
}

function renderMethod() {
  const p = METHOD_PAGE, m = HOME.method;
  const body = `
  <section class="page-hero"><div class="container">
    <div class="cert-hero">
      <div data-reveal>
        <p class="clause">${p.clause}</p><h1 style="margin-top:1rem">${p.title}</h1><p class="lead" style="margin-top:1rem">${p.lead}</p>
        <div style="margin-top:1.6rem"><a class="btn btn--primary" href="contact.html">${UI.navCta} ${arrow()}</a></div>
      </div>
      <div class="hero-media" data-reveal data-delay="1">${media(p.image, 'Analisi di disegni e processi')}</div>
    </div>
  </div></section>
  <section class="section"><div class="container">
    <div class="method">${m.steps.map((s, i) => `<div class="step" data-reveal data-delay="${(i % 3) + 1}">
      <span class="n">${UI.step} ${String(i + 1).padStart(2, '0')}</span><h4>${s.h}</h4><p>${s.p}</p><div class="bar"></div>
    </div>`).join('')}</div>
  </div></section>
  ${ctaBand(HOME.cta)}`;
  return layout({ title: `Come lavoriamo — ${SITE.brand}`, desc: p.lead, current: 'method.html', body });
}

function renderAbout() {
  const a = ABOUT;
  const body = `
  <section class="page-hero"><div class="container">
    <div class="cert-hero">
      <div data-reveal><p class="clause">${a.clause}</p><h1 style="margin-top:1rem">${a.title}</h1><p class="lead" style="margin-top:1rem">${a.lead}</p></div>
      <div class="hero-media" data-reveal data-delay="1">${media(a.image, 'Consulenti in riunione')}</div>
    </div>
  </div></section>
  <section class="section section--tight"><div class="container"><div class="prose" data-reveal>${a.body.map(p => `<p>${p}</p>`).join('')}</div></div></section>
  <section class="section"><div class="container">
    <div class="section-head" data-reveal><p class="clause">${a.founder.clause}</p><h2>${a.founder.heading}</h2></div>
    <div class="founder" data-reveal data-delay="1">
      <div class="founder-photo"><img src="${a.founder.photo}?v=${ASSET_VER}" alt="${a.founder.name}" width="2560" height="1703" loading="lazy"></div>
      <div class="founder-bio"><h3>${a.founder.name}</h3><p>${a.founder.bio}</p></div>
    </div>
  </div></section>
  <section class="section surface-sand"><div class="container">
    <div class="section-head" data-reveal><p class="clause">In cosa crediamo</p><h2>Quattro cose su cui non transigiamo.</h2></div>
    <div class="grid cols-4">${a.values.map((v, i) => `<div class="card" data-reveal data-delay="${(i % 3) + 1}"><h3>${v.h}</h3><p>${v.p}</p></div>`).join('')}</div>
  </div></section>
  ${ctaBand(HOME.cta)}`;
  return layout({ title: `Chi siamo — ${SITE.brand}`, desc: a.lead, current: 'about.html', body });
}

const TEL_CODES = [['+44', 'UK'], ['+39', 'IT'], ['+40', 'RO'], ['+1', 'US/CA'], ['+33', 'FR'], ['+49', 'DE'], ['+34', 'ES'], ['+41', 'CH'], ['+31', 'NL'], ['+32', 'BE'], ['+43', 'AT'], ['+351', 'PT'], ['+353', 'IE'], ['+30', 'GR'], ['+48', 'PL'], ['+971', 'AE']];
const telPrefixes = (sel) => TEL_CODES.map(([code, cc]) => `<option value="${code}"${code === sel ? ' selected' : ''}>${code} ${cc}</option>`).join('');

function renderContact() {
  const c = CONTACT_PAGE, f = UI.contactForm;
  const body = `
  <section class="page-hero surface-sand"><div class="container">
    <div class="section-head" data-reveal style="margin-bottom:0"><p class="clause">${c.clause}</p><h1>${c.title}</h1><p class="lead">${c.lead}</p></div>
  </div></section>
  <section class="section"><div class="container split" style="align-items:start">
    <div data-reveal>
      <form class="form" data-contact-form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="a18fb74b-e4b2-4f78-9daa-aaa5289b2b5c">
        <input type="hidden" name="subject" value="Nuova richiesta — quasar-consulting.com">
        <input type="hidden" name="from_name" value="Sito Quasar (IT)">
        <input type="checkbox" name="botcheck" tabindex="-1" autocomplete="off" aria-hidden="true" style="display:none !important">
        <div class="field"><label for="name">${f.name}</label><input id="name" name="name" required></div>
        <div class="field"><label for="company">${f.company}</label><input id="company" name="company"></div>
        <div class="field"><label for="email">${f.email}</label><input id="email" type="email" name="email" required></div>
        <div class="field"><label for="phone">${f.phone}</label>
          <div class="tel-group">
            <select class="tel-prefix" name="phone_prefix" aria-label="Prefisso">${telPrefixes('+39')}</select>
            <input id="phone" type="tel" name="phone" inputmode="tel" autocomplete="tel-national">
          </div>
        </div>
        <div class="field"><label for="message">${f.message}</label><textarea id="message" name="message" rows="5" required></textarea></div>
        <button class="btn btn--primary" type="submit">${f.submit} ${arrow()}</button>
        <p data-form-ok hidden style="color:var(--emerald);font-weight:600">${f.ok}</p>
      </form>
    </div>
    <aside data-reveal data-delay="1">
      <div class="aside-card" style="position:static">
        <h4>${f.asideTitle}</h4>
        <ul>${f.aside.map(i => `<li>${tick()}<span>${i}</span></li>`).join('')}</ul>
        <p class="contact-line" style="margin-top:1.4rem"><a href="tel:+393457677813">+39 345 7677813</a></p>
        <p class="contact-line"><a href="mailto:contatti@quasar-consulting.com">contatti@quasar-consulting.com</a></p>
        <p class="contact-line" style="font-weight:500">Bergamo, Italia</p>
        <p style="margin-top:.8rem;color:var(--ink-soft);font-size:.92rem">${f.detailsNote}</p>
      </div>
    </aside>
  </div></section>`;
  return layout({ title: `Contatti — ${SITE.brand}`, desc: c.lead, current: 'contact.html', body });
}

/* ---------------- scrittura ---------------- */
mkdirSync(OUT, { recursive: true });
function renderLegal(doc, slug) {
  const secs = doc.sections.map(s => {
    let h = `<h2>${s.h}</h2>`;
    if (s.p) h += s.p.map(x => `<p>${x}</p>`).join('');
    if (s.ul) h += `<ul>${s.ul.map(li => `<li>${li}</li>`).join('')}</ul>`;
    return h;
  }).join('');
  const e = LEGAL.controller;
  const body = `
  <section class="page-hero surface-sand"><div class="container">
    <div class="section-head" data-reveal style="margin-bottom:0"><p class="clause">Note legali</p><h1>${doc.title}</h1><p class="lead">${doc.lead}</p></div>
  </div></section>
  <section class="section section--tight"><div class="container"><div class="prose legal" data-reveal>
    <p class="legal-updated">Ultimo aggiornamento: ${LEGAL.updated}</p>
    ${secs}
    <h2>Titolare del trattamento</h2>
    <p>${e.name} (marchio “${e.brand}”)<br>${e.address}<br>P.IVA ${e.vat} · Reg. ${e.registry}<br>PEC: ${e.pec} · Email: ${e.email}</p>
  </div></div></section>`;
  return layout({ title: `${doc.title} — ${SITE.brand}`, desc: doc.lead, current: slug, body });
}

const pages = {
  'index.html': renderHome(),
  'services.html': renderServices(),
  'industries.html': renderIndustries(),
  'method.html': renderMethod(),
  'about.html': renderAbout(),
  'contact.html': renderContact(),
  'privacy.html': renderLegal(LEGAL.privacy, 'privacy.html'),
  'cookies.html': renderLegal(LEGAL.cookies, 'cookies.html'),
};
for (const c of CERTS) pages[`${c.slug}.html`] = renderCert(c);

let n = 0;
for (const [file, html] of Object.entries(pages)) { writeFileSync(join(OUT, file), html, 'utf8'); n++; }
console.log(`Costruite ${n} pagine in ${OUT}`);
