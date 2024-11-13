const $ = (selector) => {
  const elements = document.querySelectorAll(selector);
  return elements.length === 1 ? elements[0] : elements; // Return single element directly if only one
};

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("resize", checkMaxWidth);
  checkMaxWidth();
  Slideshow_Carousel(); // Start the carousel when DOM is ready
});

const checkMaxWidth = () => {
  const NavElement = $('.nav-bar');

  if (NavElement) { // Ensure NavElement exists
    if (window.innerWidth < 576) {
      NavElement.classList.add('offcanvas');
      NavElement.setAttribute('id', 'offcanvasNavbar');
    } else {
      NavElement.classList.remove('offcanvas');
      NavElement.removeAttribute('id');
    }
  }
};

// SLIDESHOW CAROUSEL 
const Slideshow_Carousel = () => {
  let slideIndex = 0;
  let time = 2000;
  let interval;

  const slides = $('.slides');
  const slidePreviewContainer = document.getElementById('slide-preview');

  const slidePreviewActive = () => {
    slidePreviewContainer.innerHTML = '';
    const ActiveSlide = slides[slideIndex].querySelector('img').cloneNode(true);
    slidePreviewContainer.appendChild(ActiveSlide);
  };

  const ShowSlide = () => {
    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('active');
    slidePreviewActive();
  };

  const startSlide = () => {
    if (!interval) interval = setInterval(ShowSlide, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
    interval = null; // Reset interval reference
  };

  const enableSlideshow = () => {
    slides[slideIndex].classList.add('active');
    slidePreviewActive();
    startSlide();

    // Event listeners for each slide
    slides.forEach((slide, arr_Index) => {
      slide.addEventListener('mouseover', stopSlide);
      slide.addEventListener('mouseout', startSlide);
      slide.addEventListener('click', () => {
        slides[slideIndex].classList.remove('active'); // Remove 'active' from current slide
        slideIndex = arr_Index;                        // Set slideIndex to clicked slide's index
        slides[slideIndex].classList.add('active');    // Add 'active' to the clicked slide
        slidePreviewActive();
        stopSlide();                                   // Stop the automatic sliding
      });
    });
  };

  // Start slideshow only if the screen width is >= 576px
  if (window.innerWidth >= 576) {
    enableSlideshow();
  }

  // Handle window resize events to start/stop slideshow
  window.addEventListener("resize", () => {
    if (window.innerWidth < 576) {
      stopSlide(); // Stop slideshow on smaller screens
    } else if (!interval) {
      startSlide(); // Resume slideshow on larger screens if not already running
    }
  });
};
