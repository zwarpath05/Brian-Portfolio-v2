const $ = (selector) => {
  const elements = document.querySelectorAll(selector);
  return elements.length === 1 ? elements[0] : elements; // Return single element directly if only one
};

// Global Variables
const NavElement = $('.nav-bar');
const slides = Array.from($('.slides'));
const slidePreviewContainer = document.getElementById('slide-preview');
const time = 5000;
let slideIndex = 0;
let interval;

// Function to update the preview image
const updatePreview = () => {
  slidePreviewContainer.innerHTML = '';
  const activeSlide = slides[slideIndex].querySelector('img').cloneNode(true);
  slidePreviewContainer.appendChild(activeSlide);
};

// Show the active slide
const showSlide = (index) => {
  slides.forEach((slide, idx) => slide.classList.toggle('active', idx === index));
  slideIndex = index;
  updatePreview();
};

// Start the slideshow automatically
const startSlide = () => {
  clearInterval(interval);
  interval = setInterval(() => showSlide((slideIndex + 1) % slides.length), time);
};

// Slideshow Carousel Logic
const Slideshow_Carousel = () => {
  const isSmallScreen = window.innerWidth < 576;

  if (!isSmallScreen) {
    // For large screens, start the slideshow
    showSlide(slideIndex); // Show the first slide
    startSlide(); // Start the slideshow cycle

    slides.forEach((slideElement) => {
      slideElement.addEventListener('click', () => {
        clearInterval(interval); // Stop slideshow when a slide is clicked
        slideIndex = slides.indexOf(slideElement); // Update the active slide index
        showSlide(slideIndex); // Show the clicked slide
        console.log('Slideshow paused');
      });
      slideElement.addEventListener('mouseout', startSlide); // Restart slideshow when mouse leaves
    });
  } else {
    // For small screens, stop the slideshow
    clearInterval(interval);

    slides.forEach((slideElement) => {
      // Remove listeners to prevent slideshow logic
      slideElement.removeEventListener('mouseout', startSlide);

      // Add click behavior for gallery mode
      slideElement.addEventListener('click', () => {
          // Otherwise, add active class and remove it from others
          slides.forEach((slide) => slide.classList.remove('active'));
          slideElement.classList.add('active');
          slideIndex = slides.indexOf(slideElement); // Update the active slide index
      });
    });
  }
};

// Function to handle navigation and screen resizing
const checkMaxWidth = () => {
  const isSmallScreen = window.innerWidth < 576;

  if (!NavElement) return; // Ensure NavElement exists
  if (isSmallScreen) {
    NavElement.classList.add('offcanvas');
    NavElement.setAttribute('id', 'offcanvasNavbar');
  } else {
    NavElement.classList.remove('offcanvas');
    NavElement.removeAttribute('id');
  }

  // Slideshow adjustments based on screen size
  slides.forEach((slide) => {
    if (!slide || !slide.classList) return;

    slide.classList.toggle('gallery', isSmallScreen);
    slide.classList.toggle('slides', !isSmallScreen);

    
  });
};

// Loading and Resizing Handlers
document.addEventListener('DOMContentLoaded', function () {
  checkMaxWidth(); // Initialize on page load

  // Add event listeners for resizing and page load
  window.addEventListener('resize', checkMaxWidth); // Update layout when resizing
  window.addEventListener('load', checkMaxWidth); // Initial check on page load
  window.addEventListener('resize', Slideshow_Carousel); // Restart the slideshow on resize
  window.addEventListener('load', Slideshow_Carousel); // Initialize the slideshow on load
});
