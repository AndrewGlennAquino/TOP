// Array of all image divs and circles in the image carousel
const imageArray = document.querySelectorAll(".image");
const navCircleArray = document.querySelectorAll(".nav-circle");

let currentImage = 0; // Keeps track of which image is active

/**
 * IIFE that adds functionality to the next image button
 */
const next = (() => {
  const nextButton = document.getElementById("next-image-button");
  nextButton.addEventListener("click", () => {
    // Get the current image and circle that will be inactive
    const previousImage = imageArray[currentImage];
    const previousCircle = navCircleArray[currentImage];

    // Checks if the currentImage counter is greater than imageArray
    currentImage > 2 ? (currentImage = 0) : currentImage++;

    // Get the new image and circle that will be active
    const nextImage = imageArray[currentImage];
    const nextCircle = navCircleArray[currentImage];

    // Remove and add active classes
    previousImage.classList.remove("active-image");
    nextImage.classList.add("active-image");
    previousCircle.classList.remove("active-circle");
    nextCircle.classList.add("active-circle");
  });
})();

/**
 * IIFE that adds functionality to the previous image button
 */
const previous = (() => {
  const previousButton = document.getElementById("previous-image-button");
  previousButton.addEventListener("click", () => {
    // Get the current image and circle that will be inactive
    const previousImage = imageArray[currentImage];
    const previousCircle = navCircleArray[currentImage];

    // Checks if the currentImage counter is less than imageArray
    currentImage < 1 ? (currentImage = 3) : currentImage--;

    // Get the new image and circle that will be active
    const nextImage = imageArray[currentImage];
    const nextCircle = navCircleArray[currentImage];

    // Remove and add active classes
    previousImage.classList.remove("active-image");
    nextImage.classList.add("active-image");
    previousCircle.classList.remove("active-circle");
    nextCircle.classList.add("active-circle");
  });
})();
