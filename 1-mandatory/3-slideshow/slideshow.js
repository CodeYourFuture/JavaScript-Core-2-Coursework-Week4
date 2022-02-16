const backBtn = document.getElementById("back");
const forwardBtn = document.getElementById("forward");

const autoBackBtn = document.getElementById("autoBack");
const autoForwardBtn = document.getElementById("autoForward");

const stopBtn = document.getElementById("stop");

const slide = document.getElementById("slide");
const counterLabel = document.getElementById("counter");
const timerLabel = document.getElementById("timer");
const inputTime = document.getElementById("inputTime");

let timer = inputTime.value;

let imgPath = "img/";
let images = ["imag1.jpeg", "imag2.jpeg", "imag3.jpeg", "imag4.jpeg"];

let pointer = 0;
let autoSlider;
let counter = timer;

let setTimer;
let timerState = false;

backBtn.addEventListener("click", back);
forwardBtn.addEventListener("click", forward);

autoBackBtn.addEventListener("click", autoBack);
autoForwardBtn.addEventListener("click", autoForward);

stopBtn.addEventListener("click", stop);

inputTime.addEventListener("change", () => {
  timer = inputTime.value;
  counter = timer;
});

function autoBack() {
  startTimer(timer, back);
}

function autoForward() {
  startTimer(timer, forward);
}

function stop() {
  clearInterval(autoSlider);
  stopTimer();
}

function back() {
  pointer--;
  if (pointer < 0) {
    pointer = 0;
    stop();
  }
  slide.src = imgPath + images[pointer];
  counterLabel.innerText = pointer + 1 + "/" + images.length;
}

function forward() {
  pointer++;
  if (pointer > images.length - 1) {
    pointer = images.length - 1;
    stop();
  }
  slide.src = imgPath + images[pointer];
  counterLabel.innerText = pointer + 1 + "/" + images.length;
}

function startTimer(time, direction) {
  if (timerState) exit;
  timerState = true;
  autoSlider = setInterval(direction, timer * 1000);
  setTimer = setInterval(() => {
    if (counter == 0) counter = time;
    counter--;
    timerLabel.innerText = "Time remaining : " + counter + " Sec";
  }, 1000);
}
function stopTimer() {
  clearInterval(setTimer);
  timerLabel.innerText = "";
  counter = timer;
  timerState = false;
}
