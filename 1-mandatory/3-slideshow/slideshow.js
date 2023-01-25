// Write your code here
const images = ['assets/Chinese-new-year-1.jpg','assets/Chinese-new-year-2.jpg','assets/Chinese-new-year-3.jpg','assets/Chinese-new-year-4.jpg']
let currentIndex = 0;
let intervalId;

// Function to move to the next image
function nextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  document.getElementById("image").src = images[currentIndex];
}

// Function to move to the previous image
function prevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  document.getElementById("image").src = images[currentIndex];
}

// Function to start auto-forward slideshow
function startAutoForward() {
  clearInterval(intervalId);
  intervalId = setInterval(nextImage, 1000);
}

// Function to start auto-back slideshow
function startAutoBack() {
  clearInterval(intervalId);
  intervalId = setInterval(prevImage, 1000);
}

// Function to stop the slideshow
function stopSlideshow() {
  clearInterval(intervalId);
}

// Add event listeners for the buttons
document.getElementById("next").addEventListener("click", nextImage);
document.getElementById("prev").addEventListener("click", prevImage);
document
  .getElementById("auto-forward")
  .addEventListener("click", startAutoForward);
document.getElementById("auto-back").addEventListener("click", startAutoBack);
document.getElementById("stop").addEventListener("click", stopSlideshow);

