import { screenSizeView } from './components/Nav.js';
import { slideCarousel } from './components/SliderCarousel.js'; // Correct path to nav.js
// Correct path to nav.js
// LOADER
document.addEventListener('DOMContentLoaded', function () {
  screenSizeView();
  slideCarousel();
  window.addEventListener('resize', screenSizeView);
});