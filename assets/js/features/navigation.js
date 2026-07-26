const selectors = {
  header: '[data-header]',
  menu: '[data-menu]',
  navigation: '[data-nav]',
};

export function initNavigation() {
  const header = document.querySelector(selectors.header);
  const menu = document.querySelector(selectors.menu);
  const navigation = document.querySelector(selectors.navigation);

  if (!menu || !navigation) return;

  const close = () => {
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Open navigation');
    navigation.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  };

  menu.addEventListener('click', () => {
    const isOpen = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', String(!isOpen));
    menu.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    navigation.classList.toggle('is-open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });

  navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', close));
  document.addEventListener('keydown', (event) => event.key === 'Escape' && close());
  window.addEventListener('scroll', () => header?.classList.toggle('is-scrolled', window.scrollY > 24), { passive: true });
}
