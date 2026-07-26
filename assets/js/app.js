import { initNavigation } from './features/navigation.js';
import { initRevealAnimations } from './features/reveal.js';
import { initProjectGallery } from './features/project-gallery.js';
import { setCurrentYear } from './shared/current-year.js';

initNavigation();
initRevealAnimations();
initProjectGallery();
setCurrentYear();
