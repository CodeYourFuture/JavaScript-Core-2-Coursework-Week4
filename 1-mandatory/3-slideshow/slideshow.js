import { images } from "./images.js";

let img = document.querySelector("img");
let animalName = document.querySelector(".animal-name");
let photographer = document.querySelector(".photographer");
let autoBack = document.querySelector(".auto-back");
let back = document.querySelector(".back");
let stop = document.querySelector(".stop");
let forward = document.querySelector(".forward");
let autoForward = document.querySelector(".auto-forward");
let userInput = document.querySelector("#user-seconds");
let userForwards = document.querySelector(".user-forwards");
let userBackwards = document.querySelector(".user-backwards");
let startingImageIndex = 0;
let autoBackInterval;
let autoForwardInterval;
let userForwardsInterval;
let userBackwardsInterval;

function addImage() {
  img.setAttribute("src", images[startingImageIndex].image);
  img.setAttribute("alt", images[startingImageIndex].alt);
  animalName.innerHTML = images[startingImageIndex].animal;
  photographer.innerHTML = `Shot by ${images[startingImageIndex].photographer}`;
}

function forwardFunc() {
  if (startingImageIndex === images.length - 1) {
    startingImageIndex = 0;
  } else {
    startingImageIndex++;
  }
  addImage();
}

function backFunc() {
  if (startingImageIndex === 0) {
    startingImageIndex = images.length - 1;
  } else {
    startingImageIndex--;
  }
  addImage();
}


forward.addEventListener("click", () => {
  forwardFunc();
});
back.addEventListener("click", () => {
  backFunc();
});

autoForward.addEventListener("click", () => {
  stopAll();
  autoForwardInterval = setInterval(forwardFunc, 1000);
});
autoBack.addEventListener("click", () => {
  stopAll();
  autoBackInterval = setInterval(backFunc, 1000);
});


userForwards.addEventListener("click", () => {
  stopAll();
  let seconds = userInput.value * 1000;
  userForwardsInterval = setInterval(forwardFunc, seconds)
});

userBackwards.addEventListener("click", () => {
  stopAll();
  let seconds = userInput.value * 1000;
  userBackwardsInterval = setInterval(backFunc, seconds);
});

function stopAll() {
  clearInterval(autoForwardInterval);
  clearInterval(autoBackInterval);
  clearInterval(userForwardsInterval);
  clearInterval(userBackwardsInterval);
}
stop.addEventListener("click", stopAll)
addImage();
