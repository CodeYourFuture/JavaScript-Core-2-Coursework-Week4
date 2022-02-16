// Write your code here
let slider_img = document.querySelector(".slider-img");

//buttons
let autoBackButton = document.querySelector(".btn-autoBack");
let backButton = document.querySelector(".btn-back");
let stopButton = document.querySelector(".btn-stop");
let forwardButton = document.querySelector(".btn-forward");
let autoForwardButton = document.querySelector(".btn-autoForward");

let images = [
  "ceramicDesign.jpeg",
  "PanNoodles.jpeg",
  "porkBeefNoodles.jpeg",
  "PorkNoodles.jpeg",
  "redBowlNoodles.jpeg",
];

backButton.addEventListener("click", () => {
  goBack();
});

forwardButton.addEventListener("click", () => {
  goForward();
});

autoForwardButton.addEventListener("click", () => {
  autoForward();
  clearInterval(backInterval);
});

autoBackButton.addEventListener("click", () => {
  autoBack();
});

function autoForward() {
  forwardInterval = setInterval(function () {
    goForward();
  }, 1000);
}

let i = 0;
function goBack() {
  if (i <= 0) {
    i = images.length;
  }
  i--;
  return setImg();
}

function goForward() {
  if (i >= images.length - 1) {
    i = -1;
  }
  i++;
  return setImg();
}

function autoBack() {
  backInterval = setInterval(function () {
    goBack();
  }, 1000);
}

function setImg() {
  let imageDisplay = slider_img.setAttribute("src", "images/" + images[i]);
  return imageDisplay;
}

stopButton.addEventListener("click", () => {
  clearInterval(forwardInterval);
});
