const $ = (selector) => {
    return document.querySelectorAll(selector).length > 1
      ? document.querySelectorAll(selector)
      : document.querySelector(selector);
  };
  
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("load", checkMaxWidth);
    window.addEventListener("resize", checkMaxWidth);
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
  