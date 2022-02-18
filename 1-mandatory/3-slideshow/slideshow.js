// Write your code here
const images = [
  "https://images.unsplash.com/photo-1517699418036-fb5d179fef0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2834&q=80",
  "https://images.unsplash.com/photo-1615169019958-78e317e81166?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1539806190169-9b25397a73b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1526342122811-2a9c8512023d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1455264745730-cb3b76250ae8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80",
];

//create variables to store references to HTML elements
const image = document.querySelector("#image");
const backBtn = document.querySelector("#back");
const forwardBtn = document.querySelector("#forward");
const autoBackBtn = document.querySelector("#auto-back");
const autoForwardBtn = document.querySelector("#auto-forward");
const stopBtn = document.querySelector("#stop");

let myTimeout;

//Initiate slideshow with random image from images array
let imageIndex = Math.floor(Math.random() * 5);
image.src = images[imageIndex];

//Check if current image index is 0, if so current image index becomes final image in images array, else minus 1 from current index and show image at new index
function showPreviousImage() {
  if (imageIndex === 0) {
    imageIndex = images.length - 1;
  } else {
    imageIndex = imageIndex - 1;
  }
  image.src = images[imageIndex];
}

//Check if current image index is final image in array, if so current image index becomes 0, else add 1 to current index and show image at new index
function showNextImage() {
  if (imageIndex === images.length - 1) {
    imageIndex = 0;
  } else {
    imageIndex = imageIndex + 1;
  }
  image.src = images[imageIndex];
}

// Make auto-forward and auto-back buttons to _automatically_ move in that direction through the list of images.
function autoPreviousImage() {
  myTimeout = setInterval(showPreviousImage, 2000);
}

function autoNextImage() {
  myTimeout = setInterval(showNextImage, 2000);
}

function stopCarousel() {
  clearInterval(myTimeout);
}

//add event listeners to the buttons
backBtn.addEventListener("click", showPreviousImage);
forwardBtn.addEventListener("click", showNextImage);

autoBackBtn.addEventListener("click", autoPreviousImage);
autoForwardBtn.addEventListener("click", autoNextImage);

stopBtn.addEventListener("click", stopCarousel);
