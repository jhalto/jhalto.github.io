const revealTargets = [
  '.service-card',
  '.project',
  '.web-project',
  '.windows-project',
  '.more-work',
  '.about__copy',
].join(',');

export function initRevealAnimations() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(revealTargets).forEach((element) => {
    element.classList.add('reveal');
    observer.observe(element);
  });
}
