(() => {
  const sectors = {
    vastgoed: {index:'01 / 05', kicker:'VASTGOEDCONCEPT', title:'Woningen die je al wilt ervaren.', text:'Grote fotografie, slim zoeken en lokale expertise begeleiden bezoekers vanzelf naar een bezichtiging.', tags:['Woningaanbod','Waardebepaling','Bezichtiging'], image:'assets/concept-makelaar-poppins-green-homepage.png', url:'astor.nl', alt:'Websiteconcept voor vastgoed'},
    automotive: {index:'02 / 05', kicker:'AUTOMOTIVECONCEPT', title:'Een showroom zonder drempels.', text:'Een premium presentatie waarin bezoekers snel van eerste indruk naar voorraad, detailpagina en proefrit gaan.', tags:['Voorraad','Proefrit','Inruilen'], image:'assets/concept-autodealer-light-homepage.png', url:'primemotors.nl', alt:'Websiteconcept voor automotive'},
    bouw: {index:'03 / 05', kicker:'BOUWCONCEPT', title:'Vakmanschap dat zichzelf bewijst.', text:'Projectcases, duidelijke diensten en een gerichte offerteflow maken ervaring en kwaliteit direct zichtbaar.', tags:['Projecten','Diensten','Offerte'], image:'assets/concept-aannemer-homepage.png', url:'vormbouw.nl', alt:'Websiteconcept voor een bouwbedrijf'},
    techniek: {index:'04 / 05', kicker:'TECHNIEKCONCEPT', title:'Complexe techniek. Helder verteld.', text:'Diensten, certificering en servicegebieden worden vertaald naar een logische route voor particuliere en zakelijke klanten.', tags:['Expertise','Werkgebied','Service'], image:'assets/concept-volt-techniek-homepage.png', url:'volttechniek.nl', alt:'Websiteconcept voor een technisch bedrijf'},
    zakelijk: {index:'05 / 05', kicker:'ZAKELIJK CONCEPT', title:'Expertise die vertrouwen wekt.', text:'Kennis, bewijs en een rustige visuele hiërarchie geven bezoekers zekerheid voordat ze persoonlijk contact opnemen.', tags:['Expertise','Kennis','Adviesgesprek'], image:'assets/concept-nova-accountants-homepage.png', url:'nova-accountants.nl', alt:'Websiteconcept voor zakelijke dienstverlening'}
  };

  const image = document.querySelector('#cxSectorImage');
  document.querySelectorAll('[data-cx-sector]').forEach(button => button.addEventListener('click', () => {
    const item = sectors[button.dataset.cxSector];
    if (!item || !image) return;
    document.querySelectorAll('[data-cx-sector]').forEach(control => {
      const active = control === button;
      control.classList.toggle('is-active', active);
      control.setAttribute('aria-selected', String(active));
    });
    const stage = document.querySelector('.cx-sector-stage');
    stage.animate([{opacity:.72,transform:'translateY(4px)'},{opacity:1,transform:'translateY(0)'}],{duration:320,easing:'ease-out'});
    document.querySelector('#cxSectorKicker').textContent = item.kicker;
    document.querySelector('#cxSectorTitle').textContent = item.title;
    document.querySelector('#cxSectorText').textContent = item.text;
    document.querySelector('#cxSectorIndex').textContent = item.index;
    document.querySelector('#cxSectorUrl').textContent = item.url;
    document.querySelector('#cxSectorTags').innerHTML = item.tags.map(tag => `<i>${tag}</i>`).join('');
    image.src = item.image;
    image.alt = item.alt;
  }));

  const heroVisual = document.querySelector('.cx-hero-visual');
  if (heroVisual && matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion:reduce)').matches) {
    heroVisual.addEventListener('pointermove', event => {
      const box = heroVisual.getBoundingClientRect();
      const x = (event.clientX - box.left) / box.width - .5;
      const y = (event.clientY - box.top) / box.height - .5;
      heroVisual.style.transform = `perspective(1200px) rotateY(${x * 2.2}deg) rotateX(${-y * 2.2}deg)`;
    });
    heroVisual.addEventListener('pointerleave', () => heroVisual.style.transform = 'perspective(1200px) rotateY(0) rotateX(0)');
  }
})();
