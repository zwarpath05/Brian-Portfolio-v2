const $ = (selector) => {
    return document.querySelectorAll(selector).length > 1 ? document.querySelectorAll(selector) : document.querySelector(selector);
}

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', () => {
        stickyHeader();
    });
});

const stickyHeader = () => {
    const stickyElement = $('.sticky-top');
    window.scrollY > 0 ? stickyElement.classList.add("Top_Nav") : stickyElement.classList.remove("Top_Nav");
}