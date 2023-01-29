// Write your code here
// level 1 challenge

// assign my src codes
const picturesSources = [
    "./posters/1.jpeg",
  "./posters/2.jpeg",
  "./posters/3.jpeg",
  "./posters/4.jpeg",
  "./posters/5.jpeg",
  "./posters/6.jpeg",
  "./posters/7.jpeg",
  "./posters/8.jpeg",
  "./posters/9.jpeg",
  "./posters/10.jpeg",
  "./posters/11.jpeg",
  "./posters/12.jpeg",
  "./posters/13.jpeg",
  "./posters/14.jpeg",
  "./posters/15.jpeg",
  "./posters/16.jpeg",
  "./posters/17.jpeg",
  "./posters/18.jpeg",
  "./posters/19.jpeg",
  "./posters/20.jpeg",
  "./posters/21.jpeg",
  "./posters/22.jpeg",
  
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


