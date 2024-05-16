var imageUrls = [
    "src/IMAGES/Profile.png",
    "src/IMAGES/Mail-Icon.png",
    "src/IMAGES/LinkedIn-Icon.png",
    "src/IMAGES/github-Icon.png",
    // Add more image URLs as needed
    "src/IMAGES/Webdesign-bg.jpg",
    "src/IMAGES/WebDevelopment-bg.jpg",
    "src/IMAGES/Logo-bg.jpg",
    "src/IMAGES/gallery/Img-Gallery1.webp",
    "src/IMAGES/gallery/Img-Gallery2.webp",
    "src/IMAGES/gallery/Img-Gallery3.webp",
    "src/IMAGES/gallery/Img-Gallery4.webp",
    "src/IMAGES/gallery/Img-Gallery5.webp",
    "src/IMAGES/gallery/Img-Gallery6.webp",
    "src/IMAGES/gallery/Img-Gallery7.webp",
    "src/IMAGES/gallery/Img-Gallery8.webp",
    "src/IMAGES/gallery/Img-Gallery9.webp",
    "src/IMAGES/gallery/Img-Gallery10.webp",
    "src/IMAGES/gallery/Img-Gallery11.webp",
    "src/IMAGES/gallery/Img-Gallery12.webp",
    "src/IMAGES/gallery/Img-Gallery13.webp",
    "src/IMAGES/gallery/Img-Gallery14.webp",
    "src/IMAGES/gallery/Img-Gallery15.webp",
    "src/IMAGES/gallery/Img-Gallery16.webp",
    "src/IMAGES/PSD/CameraStore-Webdesign1.png",
    "src/IMAGES/PSD/HighDro-HomePageDesign.jpg",
    "src/IMAGES/PSD/Koze-HomeRedesign.jpg",
    "src/IMAGES/UK/UK-Duda-Build-1.webp",
    "src/IMAGES/UK/UK-Duda-Build-2.webp",
    "src/IMAGES/UK/UK-Duda-Build-3.webp",
    "src/IMAGES/UK/UK-Duda-Build-4.webp",
    "src/IMAGES/UK/UK-Duda-Build-5.webp"
];

// Function to preload images
function preloadImages(urls) {
    urls.forEach(function(url) {
        var img = new Image();
        img.src = url;
    });
}

// Call the preloadImages function with your image URLs
preloadImages(imageUrls);