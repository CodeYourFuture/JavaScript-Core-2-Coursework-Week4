const slideshowImages = [
  "https://images.pexels.com/photos/11794796/pexels-photo-11794796.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/13446290/pexels-photo-13446290.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/11794796/pexels-photo-11794796.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/13446290/pexels-photo-13446290.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
];

let currentImageIndex = 0;
let slideshowInterval = 2;

const imageElement = document.querySelector("#slide");
const previousButton = document.querySelector("#carousel-btnPrevious");
const nextButton = document.querySelector("#carousel-btnNext");
const autoButton = document.querySelector("#carousel-btnAuto");
const stopButton = document.querySelector("#carousel-btnStop");

function updateImage() {
  imageElement.src = slideshowImages[currentImageIndex];
}

function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
  updateImage();
}

function showPreviousImage() {
  currentImageIndex =
    (currentImageIndex - 1 + slideshowImages.length) % slideshowImages.length;
  updateImage();
}

function startSlideshow() {
  clearInterval(slideshowInterval);
  slideshowInterval = setInterval(showNextImage, 2000);
}

function stopSlideshow() {
  clearInterval(slideshowInterval);
}

nextButton.addEventListener("click", showNextImage);
previousButton.addEventListener("click", showPreviousImage);
autoButton.addEventListener("click", startSlideshow);
stopButton.addEventListener("click", stopSlideshow);

updateImage();
