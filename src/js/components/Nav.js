
import { $ } from './QS.js'; // Correct import path

// Navigation 
const NavElement = $('.nav-bar');

export const screenSizeView = () => {
    if (!NavElement) return;

    const smallScreenViewport = window.innerWidth < 576; // Dynamically check viewport width

    if (smallScreenViewport) {
        NavElement.classList.add('offcanvas');
        NavElement.setAttribute('id', 'offcanvasNavbar');
        NavElement.setAttribute('data-bs-toggle', 'offcanvas'); // Bootstrap requirement
        NavElement.setAttribute('data-bs-target', '#offcanvasNavbar'); // Bootstrap requirement
    } else {
        NavElement.classList.remove('offcanvas');
        NavElement.removeAttribute('id');
        NavElement.removeAttribute('data-bs-toggle');
        NavElement.removeAttribute('data-bs-target');
    }
};
