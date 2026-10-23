import './style.css';
import { business as b } from './business.js';

const arrow = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>';
const pin = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2"/></svg>';
const phone = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m7 3 3 5-3 3c2 3 3 4 6 6l3-3 5 3c-1 4-3 5-6 4C8 19 5 16 3 9 2 6 3 4 7 3Z"/></svg>';
const icons = {
  shoe: '<path d="M7 7v9c4 1 6 5 13 5h16v-6l-9-3-7-8-5 5-8-2Zm0 14v4h29v-4M23 9l-4 4m8-1-4 4"/>',
  spark: '<path d="m22 4 4 12 12 4-12 4-4 12-4-12-12-4 12-4 4-12ZM35 3v7m-3-3h6M8 29v8m-4-4h8"/>',
  bag: '<path d="M8 13h26l3 23H5l3-23Zm7 0V9a6 6 0 0 1 12 0v4m-13 5v4m14-4v4"/>',
};
const escapeHtml = (s) => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const e = escapeHtml;

document.querySelector('#app').innerHTML = `
  <div class="topline"><span>GOOD SHOES DESERVE A SECOND CHAPTER.</span><span>${e(b.neighborhood)} ${pin}</span></div>
  <header class="header">
    <a class="brand" href="#home" aria-label="${e(b.name)} home"><span class="brand-name">Carlos<span class="brand-dot">.</span></span><span class="brand-sub">SHOE REPAIR · NEW YORK</span></a>
    <button class="menu-toggle" aria-label="Open navigation" aria-expanded="false" aria-controls="navigation"><span></span><span></span></button>
    <nav id="navigation" aria-label="Main navigation"><a href="#services">Our services</a><a href="#our-story">Our approach</a><a href="#visit">Visit the shop</a><a class="nav-call" href="${e(b.phoneHref)}">${phone} ${e(b.phone)}</a></nav>
  </header>
  <main id="main">
    <section class="hero" id="home" aria-labelledby="hero-heading">
      <div class="hero-copy"><p class="eyebrow"><span></span> YOUR NEIGHBORHOOD COBBLER</p><h1 id="hero-heading">Good shoes.<br>Great stories.<br><em>Keep walking.</em></h1><p class="hero-description">For the pairs you can’t part with.<br>Thoughtful shoe and leather repair, right here on the Upper West Side.</p><div class="hero-actions"><a class="button button-navy" href="#visit">Visit our shop ${arrow}</a><a class="text-link" href="#services">Explore our services ${arrow}</a></div><div class="hero-location">${pin}<span>${e(b.address)} <span class="location-divider">/</span> Upper West Side, NYC</span></div></div>
      <div class="hero-visual"><img src="${import.meta.env.BASE_URL}images/workbench-1536.webp" srcset="${import.meta.env.BASE_URL}images/workbench-800.webp 800w, ${import.meta.env.BASE_URL}images/workbench-1536.webp 1536w" sizes="(max-width: 760px) 100vw, 55vw" width="1536" height="1024" alt="Cognac leather dress shoes, a brush, and cobbler tools on a wooden workbench" fetchpriority="high"><div class="image-shade"></div><div class="photo-caption"><span>WELL WORN. WELL LOVED.</span><span>READY FOR WHAT’S NEXT.</span></div><div class="craft-seal"><span>REPAIR • RESTORE</span><svg viewBox="0 0 40 40" fill="none" aria-hidden="true">${icons.shoe}</svg><span>WEAR AGAIN</span></div></div>
    </section>
    <div class="values-strip"><span>Made to be worn. <em>Not thrown away.</em></span><div><span>SHOE & BOOT REPAIR</span><i>✦</i><span>LEATHER CARE</span><i>✦</i><span>BAGS & ACCESSORIES</span></div></div>
    <section class="services section" id="services" aria-labelledby="services-heading"><div class="section-heading"><div><p class="eyebrow">A LITTLE CARE GOES A LONG WAY</p><h2 id="services-heading">Back on your feet.<br><em>Back to your favorites.</em></h2></div><p>Scuffed, worn, or simply in need of some attention?<br>Bring them by. Let’s see what we can do.</p></div><div class="service-grid">${b.services.map(s=>`<article class="service-card reveal"><div class="service-top"><svg viewBox="0 0 42 42" fill="none" aria-hidden="true">${icons[s.icon] || icons.shoe}</svg><span>${e(s.number)}</span></div><h3>${e(s.title)}</h3><p>${e(s.description)}</p><a href="${e(b.phoneHref)}" aria-label="Call to ask about ${e(s.title)}">Let’s talk repair ${arrow}</a></article>`).join('')}</div><p class="service-note">Every repair starts with a closer look. Call or stop by for an assessment and estimate.</p></section>
    <section class="story" id="our-story" aria-labelledby="story-heading"><div class="story-art"><span class="story-word">A little<br>care.<br><em>A longer<br>story.</em></span><span class="art-foot">CARLOS SHOE REPAIR <span>NEW YORK, NY</span></span></div><div class="story-copy reveal"><p class="eyebrow">LESS REPLACING. MORE REPAIRING.</p><h2 id="story-heading">Some things are<br>worth <em>holding on to.</em></h2><p>The shoes that fit just right. The boots that have walked these blocks with you. The leather bag you reach for every day.</p><p>We believe well-loved things deserve care. At Carlos Shoe Repair, we’re here to help you explore what’s possible for your shoes and leather goods, with a personal conversation and an eye for the details.</p><a class="text-link" href="#visit">A neighborhood shop. A personal touch. ${arrow}</a></div></section>
    <section class="visit section" id="visit" aria-labelledby="visit-heading"><div class="visit-copy"><p class="eyebrow">JUST AROUND THE CORNER</p><h2 id="visit-heading">Come by.<br><em>Bring your favorites.</em></h2><p>You’ll find us on Broadway, in the heart of the Upper West Side. Stop in with your shoes or leather goods, or give us a call before you visit.</p><div class="contact-row">${pin}<div><h3>Visit the shop</h3><address>${e(b.address)}<br>${e(b.city)}</address></div></div><div class="contact-row">${phone}<div><h3>Give us a call</h3><a href="${e(b.phoneHref)}">${e(b.phone)}</a><p class="small">Call for current hours and repair inquiries.</p></div></div><a class="button button-navy" href="${e(b.mapsUrl)}" target="_blank" rel="noopener noreferrer">Get directions ${arrow}<span class="sr-only"> (opens Google Maps in a new tab)</span></a></div><div class="neighborhood-card"><div class="map-grid" aria-hidden="true"><div class="park"><span>RIVERSIDE<br>PARK</span></div><div class="map-road road-one"></div><div class="map-road road-two"></div><div class="broadway"></div><span class="street street-one">W 80TH ST</span><span class="street street-two">W 79TH ST</span><span class="street street-three">W 78TH ST</span><span class="avenue">BROADWAY</span><div class="map-marker">C<span>CARLOS SHOE REPAIR</span></div></div><div class="map-bottom"><span>YOUR UPPER WEST SIDE REPAIR STOP</span><a href="${e(b.mapsUrl)}" target="_blank" rel="noopener noreferrer" aria-label="Open Carlos Shoe Repair in Google Maps">${arrow}</a></div><p class="map-disclaimer">Neighborhood illustration · Use Google Maps for exact directions.</p></div></section>
    <section class="closing"><p>More miles. More memories.</p><h2>Let’s give them <em>another chapter.</em></h2><a class="button button-gold" href="${e(b.phoneHref)}">${phone} Call ${e(b.phone)}</a></section>
  </main>
  <footer><a class="brand" href="#home"><span class="brand-name">Carlos<span class="brand-dot">.</span></span><span class="brand-sub">SHOE REPAIR · NEW YORK</span></a><p>${e(b.address)} · ${e(b.city)}</p><span>© ${new Date().getFullYear()} ${e(b.name)}</span><a href="#home">Back to top ↑</a></footer>`;

const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() { menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Open navigation'); nav.classList.remove('is-open'); }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); nav.classList.toggle('is-open', open); });
nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeMenu(); menu.focus(); } });
document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(element => { element.classList.add('will-reveal'); observer.observe(element); });
}
const structuredData = document.createElement('script');
structuredData.type = 'application/ld+json';
structuredData.textContent = JSON.stringify({'@context':'https://schema.org','@type':'LocalBusiness', name:b.name, telephone:b.phoneHref.replace('tel:',''), address:{'@type':'PostalAddress',streetAddress:b.address,addressLocality:'New York',addressRegion:'NY',postalCode:'10024',addressCountry:'US'},hasMap:b.mapsUrl});
document.head.append(structuredData);
