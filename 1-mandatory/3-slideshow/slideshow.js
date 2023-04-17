// Write your code here


const slideshow = document.getElementById("slideshow");
const images = ["https://cdn.pixabay.com/photo/2016/08/18/00/37/ice-1601932_960_720.jpg", "https://cdn.pixabay.com/photo/2015/09/05/23/54/ice-cream-926426_960_720.jpg", "https://cdn.pixabay.com/photo/2015/07/28/22/07/ice-cream-865126_960_720.jpg", "https://cdn.pixabay.com/photo/2017/08/03/14/38/ice-cream-2576622_960_720.jpg"];
let currentImageIndex = 0;
let intervalId;

// Display first image
slideshow.innerHTML = `<img id="img-title" src="${images[currentImageIndex]}" />`;

// Functions for manual controls
function moveForward() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  slideshow.innerHTML = `<img id="img-title" src="${images[currentImageIndex]}" />`;
}

function moveBackward() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  slideshow.innerHTML = `<img id="img-title" src="${images[currentImageIndex]}" />`;
}

// Functions for automatic controls
function startAutoForward() {
  intervalId = setInterval(() => {
    moveForward();
  }, 2000);
}

function startAutoBackward() {
  intervalId = setInterval(() => {
    moveBackward();
  }, 2000);
}

function stopAuto() {
  clearInterval(intervalId);
}

// Event listeners to buttons
document.getElementById("forward").addEventListener("click", moveForward);
document.getElementById("back").addEventListener("click", moveBackward);
document.getElementById("auto-forward").addEventListener("click", startAutoForward);
document.getElementById("auto-back").addEventListener("click", startAutoBackward);
document.getElementById("stop").addEventListener("click", stopAuto);
