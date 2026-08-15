(() => {
  const stage = document.querySelector('[data-motion-stage]');
  const controls = document.querySelectorAll('[data-motion]');
  const status = stage?.querySelector('.wd-motion-status span');
  if (!stage || !controls.length) return;

  const labels = {
    hover: 'Hover-effect actief',
    button: 'Knopfeedback actief',
    depth: 'Kaartdiepte actief',
    flow: 'Overgang actief'
  };

  controls.forEach((control) => {
    control.addEventListener('click', () => {
      const mode = control.dataset.motion;
      stage.dataset.motionStage = mode;
      controls.forEach((item) => {
        const active = item === control;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      if (status) status.textContent = labels[mode] || 'Interactie actief';
    });
  });
})();
