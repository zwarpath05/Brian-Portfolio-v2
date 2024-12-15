const $ = (selector) => {
    const elements = document.querySelectorAll(selector);
    return elements.length === 1 ? elements[0] : elements; // Return single element directly if only one
  };
  
  const time = 5000; // Time interval for slideshow
  
  // Function to initialize a slideshow for a specific container
  const initializeSlideshow = (container) => {
    const slides = Array.from(container.querySelectorAll('.slides'));
    const slidePreviewContainer = container.querySelector('.slide-preview');
    let slideIndex = 0;
    let interval;
  
    const updatePreview = () => {
      if (!slidePreviewContainer) return;
      slidePreviewContainer.innerHTML = '';
      const activeSlide = slides[slideIndex].querySelector('img').cloneNode(true);
      slidePreviewContainer.appendChild(activeSlide);
    };
  
    const showSlide = (index) => {
      slides.forEach((slide, idx) => slide.classList.toggle('active', idx === index));
      slideIndex = index;
      updatePreview();
    };
  
    const startSlide = () => {
      clearInterval(interval);
      interval = setInterval(() => showSlide((slideIndex + 1) % slides.length), time);
    };
  
    const Slideshow_Carousel = () => {
      const isSmallScreen = window.innerWidth < 576;
  
      if (!isSmallScreen) {
        // For large screens, start the slideshow
        showSlide(slideIndex);
        startSlide();
  
        slides.forEach((slideElement) => {
          slideElement.addEventListener('click', () => {
            clearInterval(interval);
            slideIndex = slides.indexOf(slideElement);
            showSlide(slideIndex);
          });
          slideElement.addEventListener('mouseout', startSlide);
        });
      } else {
        // For small screens, stop the slideshow
        clearInterval(interval);
  
        slides.forEach((slideElement) => {
          slideElement.removeEventListener('mouseout', startSlide);
  
          slideElement.addEventListener('click', () => {
            slides.forEach((slide) => slide.classList.remove('active'));
            slideElement.classList.add('active');
            slideIndex = slides.indexOf(slideElement);
          });
        });
      }
    };
  
    // Initial setup and event binding for slideshow
    Slideshow_Carousel();
    window.addEventListener('resize', Slideshow_Carousel);
  
    // Return control functions for the slideshow
    return { startSlide, stopSlide: () => clearInterval(interval) };
  };
  
  // Function to handle tab pane switching and slideshow initialization
  document.addEventListener('DOMContentLoaded', () => {
    const tabContainers = document.querySelectorAll('.tab-pane');
  
    tabContainers.forEach((container) => {
      const slideshowControl = initializeSlideshow(container);
  
      // Listen for tab activation to start/restart the slideshow
      container.addEventListener('show.bs.tab', () => {
        slideshowControl.startSlide();
      });
  
      container.addEventListener('hide.bs.tab', () => {
        slideshowControl.stopSlide();
      });
    });
  });
  