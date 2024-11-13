const $ = (selector) => {
  const elements = document.querySelectorAll(selector);
  return elements.length === 1 ? [elements[0]] : elements;
};

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", checkMaxWidth);
  window.addEventListener("resize", checkMaxWidth);
  Slideshow_Carousel();
  
});

const checkMaxWidth = () => {
  const NavElement = $(".nav-bar");

  if (window.innerWidth < 576) {
    NavElement.classList.add("offcanvas");
    NavElement.setAttribute("id", "offcanvasNavbar");
  } else {
    NavElement.classList.remove("offcanvas");
    NaveElement.removeAttribute("id"); 
  }
};

// SLIDESHOW CAROUSEL 
const Slideshow_Carousel = () => {
  let slideIndex = 0;
  let time = 2000;
  let interval;

  const slider = $('.slideshow');
  const slides = $('.slides');
  const slidePreviewContainer  =  document.getElementById('slide-preview');

  const  slidePreviewActive = ()  => {
    slidePreviewContainer.innerHTML ='';
    const ActiveSlide = slides[slideIndex].querySelector('img').cloneNode(true);
    slidePreviewContainer.appendChild(ActiveSlide);
    
  }

  const ShowSlide= () => {
        slides[slideIndex].classList.remove('active');
        slideIndex = (slideIndex + 1) % slides.length;
        slides[slideIndex].classList.add('active');
        slidePreviewActive();
  }

  

  const startSlide = () => {
    interval = setInterval(ShowSlide, time);
  }

  const stopSlide = () => {
    clearInterval(interval);
  };

  slides[slideIndex].classList.add('active');
  slidePreviewActive();
  startSlide();

  

  slides.forEach((slide, arr_Index) => {
    slide.addEventListener('mouseover', stopSlide);
    slide.addEventListener('mouseout', startSlide);
    slide.addEventListener('click', () => {
      slides[slideIndex].classList.remove('active'); // Remove 'active' from current slide
      slideIndex = arr_Index;                            // Set slideIndex to clicked slide's index
      slides[slideIndex].classList.add('active');    // Add 'active' to the clicked slide
      slidePreviewActive();
      stopSlide();                                   // Stop the automatic sliding
    });
  });

}




