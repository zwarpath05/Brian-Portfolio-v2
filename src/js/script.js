const $ = (selector) => {
    return document.querySelectorAll(selector).length > 1 ? document.querySelectorAll(selector) : document.querySelector(selector);
}


document.addEventListener("DOMContentLoaded", function() {

    let navLink = $(".nav-link");
    const sections = Array.from($('.section'));
    let sticky = $(".hero").offsetTop;

    window.addEventListener('scroll', () => {
        Sticky_Header();
        highlightNavLinks();
        reveal();
        MobileViewPort();
        
    });

    const Sticky_Header = ()=> {
        if (window.scrollY > sticky) {
            $(".header").classList.add("Top_Nav");
            $("#Back_To_Top").classList.add("ScrollTop");
        }else {
            $(".header").classList.remove("Top_Nav");
            $("#Back_To_Top").classList.remove("ScrollTop"); 
        }
    }

    const MobileViewPort =() => {
        if(window.innerWidth < 767 && window.scrollY > sticky){
            $(".header").classList.remove("Top_Nav");
        }
    }

    function highlightNavLinks() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        navLink.forEach(navItem => {
            navItem.classList.remove('active');
            navItem.removeAttribute("aria-current");
            if (navItem.getAttribute('href').slice(1) === current) {
                navItem.classList.add('active');
                navItem.setAttribute("aria-current", "true");
            }
        });
    }

});



    // IMAGE GALLERY
    let images = []
    let currentImageIndex = 0;
    const imageElements = document.querySelectorAll(".Image_Gallery img");

    imageElements.forEach(img => {
        const srcValue = img.getAttribute("src");
        images.push(srcValue);
    });

    const nextImage = () => {
        if (images.length > 0) {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            showImage(images[currentImageIndex]);
        }
    }
    
    // Function to show the previous image
    const previousImage = () => {
        if (images.length > 0) {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            showImage(images[currentImageIndex]);
        }
    }
    

   const showImage = (src) => {
        const expandedImgElement = $("#expanded_img");
        const imageElement = $("#image");
        const btnGallery = $("#btnControl");
        
        if(expandedImgElement && imageElement && btnGallery){
            expandedImgElement.style.display = "block";
            btnGallery.style.display = "block";
            imageElement.src = src;
            document.querySelector(".container-fluid").style.display = "none";
            document.body.style.overflow = "hidden";
        }
      
    }
  
    const closeImage = () => {
        const expandedImgElement = $("#expanded_img");
        const btnGallery = $("#btnControl");
        if(expandedImgElement && btnGallery){
            expandedImgElement.style.display = "none";
            btnGallery.style.display = "none";
            document.querySelector(".container-fluid").style.display = "block";
            document.body.style.overflow = "auto";
        }

    }

    // ANIMATION
    const reveal = () => {
        var reveals = $(".reveal");
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight,
              elementTop = reveals[i].getBoundingClientRect().top, 
              elementVisible = 150;
              reveals[i].classList.toggle("active", elementTop < windowHeight - elementVisible);
        }
    
      }