// Write your code here

const picturesSources = [
  "/1-mandatory/3-slideshow/image/1.jpg",
  "/1-mandatory/3-slideshow/image/2.jpg",
  "/1-mandatory/3-slideshow/image/3.jpg",
  "/1-mandatory/3-slideshow/image/4.jpg",
  "/1-mandatory/3-slideshow/image/5.jpg",
  "/1-mandatory/3-slideshow/image/6.jpg",
  "/1-mandatory/3-slideshow/image/7.jpg",
];

// get elements
let images = document.getElementById("images");

const forwardButton = document.getElementById("forward");
const backButton = document.getElementById("back");

let currentIndex = 0;

function changePicturesForward() {
  currentIndex++;
  images.src = picturesSources[currentIndex % picturesSources.length];
}

function changePicturesBack() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = picturesSources.length - 1;
  }
  images.src = picturesSources[currentIndex % picturesSources.length];
}

forwardButton.addEventListener("click", changePicturesForward);

backButton.addEventListener("click", changePicturesBack);

// level 2 challenge
const intervalInput = document.getElementById("interval-input");
let intervalId;
let isPlaying = false;

function forwardSlideshow() {
  if (intervalInput.value === "" || intervalInput.value <= 0) {
    alert("Please enter a valid value and above 0");
    return;
  }
  intervalId = setInterval(changePicturesForward, intervalInput.value * 1000);
  isPlaying = true;
  autoForwardButton.disabled = true;
  autoBackButton.disabled = true;
  intervalInput.value = "";
}

function backwardSlideshow() {
  if (intervalInput.value === "" || intervalInput.value <= 0) {
    alert("Please enter a valid value and above 0");
    return;
  }
  intervalId = setInterval(changePicturesBack, intervalInput.value * 1000);
  isPlaying = true;
  autoBackButton.disabled = true;
  autoForwardButton.disabled = true;
  intervalInput.value = "";
}

function stopSlideshow() {
  clearInterval(intervalId);
  isPlaying = false;
  autoForwardButton.disabled = false;
  autoBackButton.disabled = false;
}

const autoForwardButton = document.getElementById("auto-forward");
const autoBackButton = document.getElementById("auto-back");
const stopButton = document.getElementById("stop");

autoForwardButton.addEventListener("click", forwardSlideshow);
stopButton.addEventListener("click", stopSlideshow);
autoBackButton.addEventListener("click", backwardSlideshow);
