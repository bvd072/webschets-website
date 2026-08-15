(() => {
  const footer = document.querySelector('body > footer');
  if (!footer) return;

  footer.outerHTML = `
    <footer class="ws-footer shell" aria-label="Websitefooter">
      <div class="ws-footer-glow ws-footer-glow-one" aria-hidden="true"></div>
      <div class="ws-footer-glow ws-footer-glow-two" aria-hidden="true"></div>

      <div class="ws-footer-main">
        <div class="ws-footer-brand">
          <a class="ws-footer-logo" href="index.html" aria-label="Webschets home">
            <img src="assets/webschets-logo.svg" alt="Webschets">
          </a>
          <p>We creëren onderscheidende websites die vertrouwen opbouwen, helder communiceren en bezoekers omzetten in klanten.</p>
          <div class="ws-footer-pills" aria-label="Onze kwaliteiten">
            <span>Responsive</span><span>Conversiegericht</span><span>Snel live</span>
          </div>
        </div>

        <nav class="ws-footer-column" aria-label="Diensten">
          <strong>Diensten</strong>
          <a href="webdesign.html">Webdesign <span>↗</span></a>
          <a href="development.html">Development <span>↗</span></a>
          <a href="hosting.html">Hosting & onderhoud <span>↗</span></a>
          <a href="branding.html">Branding <span>↗</span></a>
        </nav>

        <nav class="ws-footer-column" aria-label="Navigatie">
          <strong>Ontdek</strong>
          <a href="index.html">Home</a>
          <a href="werk.html">Concepten</a>
          <a href="werkwijze.html">Werkwijze</a>
          <a href="contact.html">Contact</a>
        </nav>

        <div class="ws-footer-column ws-footer-contact">
          <strong>Contact</strong>
          <a href="mailto:hello@webschets.nl">hello@webschets.nl</a>
          <a href="contact.html">Plan een kennismaking</a>
          <span>Nederland</span>
          <span>Ma–vr · 09:00–17:30</span>
        </div>
      </div>

      <div class="ws-footer-bottom">
        <span class="ws-footer-status"><i></i> Beschikbaar voor nieuwe projecten</span>
        <p>© 2026 Webschets. Met aandacht ontworpen in Nederland.</p>
        <a href="#top">Terug naar boven <span>↑</span></a>
      </div>
    </footer>`;
})();
