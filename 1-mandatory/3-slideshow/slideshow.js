// Write your code here
const picturesSources = [
    "/1-mandatory/3-slideshow/images/1.jpeg",
  "/1-mandatory/3-slideshow/images/2.jpeg",
  "/1-mandatory/3-slideshow/images/3.jpeg",
  "/1-mandatory/3-slideshow/images/4.jpeg",
  "/1-mandatory/3-slideshow/images/5.jpeg",
  "/1-mandatory/3-slideshow/images/6.jpeg",
  "/1-mandatory/3-slideshow/images/7.jpeg",
  "/1-mandatory/3-slideshow/images/8.jpeg",
  "/1-mandatory/3-slideshow/images/9.jpeg",
  "/1-mandatory/3-slideshow/images/10.jpeg",
  "/1-mandatory/3-slideshow/images/11.jpeg",
  "/1-mandatory/3-slideshow/images/12.jpeg",
  "/1-mandatory/3-slideshow/images/13.jpeg",
  "/1-mandatory/3-slideshow/images/14.jpeg",
  "/1-mandatory/3-slideshow/images/15.jpeg",
  "/1-mandatory/3-slideshow/images/16.jpeg",
  "/1-mandatory/3-slideshow/images/17.jpeg",
  "/1-mandatory/3-slideshow/images/18.jpeg",
  "/1-mandatory/3-slideshow/images/19.jpeg",
  "/1-mandatory/3-slideshow/images/20.jpeg",
  "/1-mandatory/3-slideshow/images/21.jpeg",
  "/1-mandatory/3-slideshow/images/22.jpeg",

];

// get elements
let images = document.getElementById("images")


const forwardButton = document.getElementById("forward")
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
    if ((intervalInput.value === "") || (intervalInput.value <= 0)) {
      alert("Please enter a valid value and above 0");
      return;
    }
      intervalId = setInterval(
        changePicturesForward,
        intervalInput.value * 1000
      );
  isPlaying = true;
  autoForwardButton.disabled = true
  autoBackButton.disabled = true;
  intervalInput.value = ''
}

function backwardSlideshow() {
    if ((intervalInput.value === "") || (intervalInput.value <= 0)) {
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
stopButton.addEventListener("click",stopSlideshow)
autoBackButton.addEventListener("click", backwardSlideshow);
