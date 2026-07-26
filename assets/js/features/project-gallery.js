export function initProjectGallery() {
  const dialog = document.querySelector('[data-image-viewer]');
  const triggers = [...document.querySelectorAll('[data-gallery-image]')];
  if (!dialog || !triggers.length) return;

  const viewerImage = dialog.querySelector('[data-viewer-image]');
  const viewerCaption = dialog.querySelector('[data-viewer-caption]');
  let activeIndex = 0;

  const render = (index) => {
    activeIndex = (index + triggers.length) % triggers.length;
    const trigger = triggers[activeIndex];
    const source = trigger.querySelector('img');
    viewerImage.src = source.currentSrc || source.src;
    viewerImage.alt = source.alt;
    viewerCaption.textContent = `${activeIndex + 1} / ${triggers.length} — ${source.alt}`;
  };

  triggers.forEach((trigger, index) => trigger.addEventListener('click', () => {
    render(index);
    dialog.showModal();
  }));

  dialog.querySelector('[data-viewer-close]').addEventListener('click', () => dialog.close());
  dialog.querySelector('[data-viewer-previous]').addEventListener('click', () => render(activeIndex - 1));
  dialog.querySelector('[data-viewer-next]').addEventListener('click', () => render(activeIndex + 1));
  dialog.addEventListener('click', (event) => event.target === dialog && dialog.close());
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') render(activeIndex - 1);
    if (event.key === 'ArrowRight') render(activeIndex + 1);
  });
}
