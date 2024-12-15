import { $ } from './QS.js';

const initializeSlideshow = (container, time = 3000) => {
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

    if (slides.length > 0) {
        showSlide(slideIndex); // Show the first slide
        startSlide(); // Start the slideshow
    }

    slides.forEach((slideElement) => {
        slideElement.addEventListener('click', () => {
          clearInterval(interval);
          slideIndex = slides.indexOf(slideElement);
          showSlide(slideIndex);
        });
        slideElement.addEventListener('mouseout', startSlide);
    });
};

export const slideCarousel = (selector = '.slideshowWrapper', time = 3000) => {
    const containers = document.querySelectorAll(selector);
    containers.forEach((container) => initializeSlideshow(container, time));
};

