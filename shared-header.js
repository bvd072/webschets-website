(() => {
  let designSystem = document.querySelector('link[href^="shared-design-system.css"]');
  if (!designSystem) {
    designSystem = document.createElement('link');
    designSystem.rel = 'stylesheet';
    designSystem.href = 'shared-design-system.css?v=5';
  }
  document.head.append(designSystem);

  const header = document.querySelector('.shared-site-header');
  if (!header) return;

  const headerCta = header.querySelector('.nav-cta');
  if (headerCta) {
    headerCta.innerHTML = 'Start jouw aanvraag <span class="nav-cta-icon" aria-hidden="true"><svg viewBox="0 0 20 20"><path d="m7 5 5 5-5 5"/></svg></span>';
    if (document.body.classList.contains('contact-page')) headerCta.href = '#aanvraag';
  }

  const nav = header.querySelector('nav');
  const servicesLink = nav?.querySelector('a[href="diensten.html"]');
  if (servicesLink && !nav.querySelector('.header-services')) {
    const serviceMenu = document.createElement('div');
    serviceMenu.className = 'header-services';
    servicesLink.before(serviceMenu);
    serviceMenu.append(servicesLink);

    const toggle = document.createElement('button');
    toggle.className = 'header-services-toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-label', 'Toon dienstenmenu');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="m4 6 4 4 4-4"/></svg>';
    serviceMenu.append(toggle);

    const dropdown = document.createElement('div');
    dropdown.className = 'header-services-dropdown';
    dropdown.innerHTML = `
      <div class="header-services-heading">
        <span>Onze diensten</span>
        <a href="diensten.html">Bekijk alles <b>↗</b></a>
      </div>
      <div class="header-services-grid">
        <a href="webdesign.html"><i class="service-menu-icon icon-design"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 8h18M7 12h5M7 15h8"/></svg></i><span><strong>Webdesign</strong><small>UX, interface & conversie</small></span><b>↗</b></a>
        <a href="development.html"><i class="service-menu-icon icon-development"><svg viewBox="0 0 24 24"><path d="m8 7-5 5 5 5M16 7l5 5-5 5M14.5 4.5l-5 15"/></svg></i><span><strong>Development</strong><small>Snel, schaalbaar & beheerbaar</small></span><b>↗</b></a>
        <a href="hosting.html"><i class="service-menu-icon icon-hosting"><svg viewBox="0 0 24 24"><path d="M7 18h10a4 4 0 0 0 .8-7.9A6 6 0 0 0 6.4 8.6 4.8 4.8 0 0 0 7 18Z"/><path d="m9.5 13 2 2 3.5-4"/></svg></i><span><strong>Hosting & onderhoud</strong><small>Veilig, actueel & ondersteund</small></span><b>↗</b></a>
        <a href="branding.html"><i class="service-menu-icon icon-branding"><svg viewBox="0 0 24 24"><path d="m12 3 2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2L12 3Z"/><circle cx="18.5" cy="5.5" r="1.5"/></svg></i><span><strong>Branding</strong><small>Strategie, identiteit & huisstijl</small></span><b>↗</b></a>
      </div>`;
    serviceMenu.append(dropdown);

    const currentPage = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
    const servicePageNames = {
      'webdesign.html': 'Webdesign',
      'development.html': 'Development',
      'hosting.html': 'Hosting',
      'branding.html': 'Branding'
    };
    const currentServiceName = servicePageNames[currentPage];
    if (currentServiceName) {
      servicesLink.classList.add('active');
    }
    dropdown.querySelectorAll('.header-services-grid > a').forEach(link => {
      const linkPage = (link.getAttribute('href') || '').split('#')[0].toLowerCase();
      if (linkPage === currentPage) {
        link.classList.add('is-current');
        link.setAttribute('aria-current', 'page');
      }
    });

    const setServicesOpen = open => {
      serviceMenu.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    };
    toggle.addEventListener('click', event => {
      event.stopPropagation();
      const shouldOpen = !serviceMenu.classList.contains('is-open');
      serviceMenu.classList.toggle('is-collapsed', !shouldOpen);
      setServicesOpen(shouldOpen);
    });
    const desktopMenu = window.matchMedia('(min-width: 901px)');
    serviceMenu.addEventListener('mouseenter', () => {
      if (!desktopMenu.matches) return;
      serviceMenu.classList.remove('is-collapsed');
      setServicesOpen(true);
    });
    nav.querySelectorAll('a').forEach(link => {
      if (link === servicesLink || serviceMenu.contains(link)) return;
      link.addEventListener('mouseenter', () => {
        if (!desktopMenu.matches) return;
        serviceMenu.classList.add('is-collapsed');
        setServicesOpen(false);
      });
    });
    header.addEventListener('mouseleave', () => {
      if (desktopMenu.matches) {
        setServicesOpen(false);
        serviceMenu.classList.remove('is-collapsed');
      }
    });
    document.addEventListener('click', event => {
      if (!serviceMenu.contains(event.target)) setServicesOpen(false);
    });
    serviceMenu.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        setServicesOpen(false);
        toggle.focus();
      }
    });
  }

  const button = header?.querySelector('.menu');
  const update = () => header?.classList.toggle('scrolled', window.scrollY > 18);
  update();
  window.addEventListener('scroll', update, { passive: true });
  button?.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    button.setAttribute('aria-expanded', String(open));
  });
  header.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
    button?.setAttribute('aria-expanded', 'false');
  }));
})();
