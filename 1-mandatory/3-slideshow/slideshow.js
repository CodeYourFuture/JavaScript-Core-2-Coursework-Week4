const backwardBtn = document.getElementById("back-btn");
const forwardBtn = document.getElementById("forward-btn");
const autoForwardBtn = document.getElementById("auto-forward-btn");
const autoBackwardBtn = document.getElementById("auto-backward-btn");
const stopBtn = document.getElementById("stop-btn");
const submitBtn = document.getElementById("submit-btn");
const sliderImgs = document.querySelectorAll(".slideshow img");
const counterText = document.querySelector(".counter");
const form = document.querySelector("form");
const inputTime = document.querySelector("#time-input");
const label = document.querySelector("label");

let delayTime = 2000;
let forwardInterval;
let backwardInterval;
let counter = 0;

// loading images
sliderImgs.forEach((img, i) => {
  img.style.left = `${i * 100}%`;
});

// button events
forwardBtn.addEventListener("click", function () {
  getNextImg();
});

backwardBtn.addEventListener("click", function () {
  getprevImg();
});

autoForwardBtn.addEventListener("click", function () {
  clearAuto();
  forwardInterval = setInterval(() => {
    getNextImg();
  }, delayTime);
});

autoBackwardBtn.addEventListener("click", function () {
  clearAuto();
  backwardInterval = setInterval(() => {
    getprevImg();
  }, delayTime);
});

stopBtn.addEventListener("click", function () {
  clearAuto();
});

// handling submiting a delay time
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = inputTime.value;
  label.innerText = value;
  delayTime = value * 1000;
  inputTime.value = "";
});

// functions
function clearAuto() {
  clearInterval(forwardInterval);
  clearInterval(backwardInterval);
}

function getNextImg() {
  counter++;
  carousel();
  updatecounterText();
}

function getprevImg() {
  counter--;
  carousel();
  updatecounterText();
}

function carousel() {
  sliderImgs.forEach((img) => {
    if (counter > sliderImgs.length - 1) {
      counter = 0;
    }
    if (counter < 0) {
      counter = sliderImgs.length - 1;
    }
    img.style.transform = `translateX(${-counter * 100}%)`;
  });
}

//counter  state
function updatecounterText() {
  counterText.innerText = counter + 1;
}
