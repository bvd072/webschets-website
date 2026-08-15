(() => {
  const main = document.querySelector('body.services-page main') || document.querySelector('main');
  if (!main || document.querySelector('.services-offers')) return;
  const hero = main.querySelector('.services-overview-hero');
  if (!hero) return;

  const offers = document.createElement('section');
  offers.className = 'services-offers shell';
  offers.id = 'diensten-aanbod';
  offers.innerHTML = `
    <div class="offers-heading">
      <div>
        <p class="offers-kicker">DRIE DUIDELIJKE DIENSTEN</p>
        <h2>Alles wat je nodig hebt om professioneel <span>vooruit te gaan.</span></h2>
      </div>
      <p>Kies één dienst of combineer ze tot een complete digitale basis. Je weet vooraf wat je krijgt, voor welke investering en wat de volgende stap is.</p>
    </div>
    <div class="offer-grid">
      <article class="offer-card featured" id="webdesign">
        <span id="development" aria-hidden="true"></span>
        <div class="offer-top"><span class="offer-label">01 · Website</span><span class="offer-icon offer-icon-web"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="M3 8h18M7 6h.01M10 6h.01M7 12h4M7 15h7"></path></svg></span></div>
        <h3>Webdesign & Development</h3>
        <p class="offer-description">Een onderscheidende, conversiegerichte website die op ieder scherm sterk presenteert en technisch klaar is om te groeien.</p>
        <div class="offer-price"><small>vanaf</small><strong>€ 1.495</strong><span>excl. btw</span></div>
        <ul>
          <li>Strategie en conversiestructuur</li>
          <li>Uniek responsive ontwerp</li>
          <li>Technische bouw en formulieren</li>
          <li>SEO-basis, test en livegang</li>
        </ul>
        <a class="offer-link" href="contact.html">Bespreek je website <i>›</i></a>
      </article>
      <article class="offer-card" id="branding">
        <div class="offer-top"><span class="offer-label">02 · Merk</span><span class="offer-icon offer-icon-brand"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 17.5V20h2.5L18.8 7.7l-2.5-2.5L4 17.5Z"></path><path d="m14.8 6.7 2.5 2.5M14.5 4l.6-1.5.6 1.5 1.5.6-1.5.6-.6 1.5-.6-1.5-1.5-.6 1.5-.6ZM19 13l.5-1.2.5 1.2 1.2.5-1.2.5-.5 1.2-.5-1.2-1.2-.5L19 13Z"></path></svg></span></div>
        <h3>Branding</h3>
        <p class="offer-description">Een heldere identiteit die herkenbaar doorloopt van logo en kleur tot website, social content en bedrijfsuitingen.</p>
        <div class="offer-price"><small>vanaf</small><strong>€ 995</strong><span>excl. btw</span></div>
        <ul>
          <li>Logo en visuele identiteit</li>
          <li>Kleur, typografie en beeldstijl</li>
          <li>Toepassingen online en print</li>
          <li>Compacte merkrichtlijnen</li>
        </ul>
        <a class="offer-link" href="contact.html">Bespreek je branding <i>›</i></a>
      </article>
      <article class="offer-card" id="hosting">
        <div class="offer-top"><span class="offer-label">03 · Continuïteit</span><span class="offer-icon">☁</span></div>
        <h3>Hosting & Onderhoud</h3>
        <p class="offer-description">Een veilige en snelle technische basis, inclusief actief beheer zodat jouw website betrouwbaar online blijft.</p>
        <div class="offer-price"><small>vanaf</small><strong>€ 49,95</strong><span>p/m · excl. btw</span></div>
        <ul>
          <li>Managed hosting en SSL</li>
          <li>Dagelijkse back-ups</li>
          <li>Updates en actieve monitoring</li>
          <li>Technische ondersteuning</li>
        </ul>
        <a class="offer-link" href="contact.html">Regel je hosting <i>›</i></a>
      </article>
    </div>`;

  const proof = document.createElement('section');
  proof.className = 'services-proof shell';
  proof.innerHTML = `
    <div class="services-proof-item"><i>7</i><div><strong>Live binnen 1 week</strong><span>Een compact en helder proces.</span></div></div>
    <div class="services-proof-item"><i>✦</i><div><strong>Uniek ontwerp</strong><span>Geen universele template.</span></div></div>
    <div class="services-proof-item"><i>€</i><div><strong>Heldere prijzen</strong><span>Vooraf weten waar je aan toe bent.</span></div></div>
    <div class="services-proof-item"><i>1</i><div><strong>Persoonlijk contact</strong><span>Korte lijnen, vaste aandacht.</span></div></div>`;

  main.insertBefore(hero, main.firstChild);
  const servicePageLinks = main.querySelector('.service-page-links');
  if (servicePageLinks) {
    hero.after(servicePageLinks);
    servicePageLinks.after(offers);
  } else {
    hero.after(offers);
  }
  offers.after(proof);
})();
