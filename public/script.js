(() => {
  const grid = document.querySelector('#ad-grid');
  if (!grid) return;

  // Static mock inventory, capped at 50 placements. Replace this renderer only
  // when integrating a provider that complies with applicable ad policies.
  const slotCount = 24;
  const types = ['banner', 'rectangle', 'square', 'rectangle', 'banner', 'square'];
  const renderSlots = () => {
    const compact = window.matchMedia('(max-width: 600px)').matches;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < slotCount; i += 1) {
      const slot = document.createElement('div');
      const type = types[i % types.length];
      slot.className = `ad-slot type-${type}`;
      slot.setAttribute('aria-label', `Mock advertisement placement ${String(i + 1).padStart(2, '0')}, ${type}`);
      const title = document.createElement('strong');
      title.textContent = `MOCK AD ${String(i + 1).padStart(2, '0')}`;
      const detail = document.createElement('small');
      detail.textContent = compact ? 'SAMPLE SPACE' : `${type.toUpperCase()} · SAMPLE SPACE`;
      slot.append(title, detail);
      fragment.append(slot);
    }
    grid.replaceChildren(fragment);
  };

  renderSlots();
  let resizeTimer;
  window.addEventListener('resize', () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(renderSlots, 150);
  }, { passive: true });

  const form = document.querySelector('#inquiry-form');
  const status = document.querySelector('#form-status');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    status.textContent = 'The form is ready, but no receiving endpoint is connected yet.';
  });
})();
