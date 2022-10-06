const pauseBtn = document.getElementById("pause");
const countdownDisplay = document.getElementById("timeRemaining");
let isPaused = false;
var audio = new Audio("alarmsound.mp3");
let flashingBackground;

function pauseCountdown() {
  if (isPaused) {
    isPaused = false;
    pauseBtn.innerText = "Pause";
  } else {
    isPaused = true;
    pauseBtn.innerText = "Continue";
  }
}

function setAlarm() {
  pauseAlarm();
  isPaused = false;
  pauseBtn.innerText = "Pause";

  let time = document.getElementById("alarmSet").value;
  let counter = setInterval(updateCountdown, 1000);

  function updateCountdown() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    if (!isPaused) {
      countdownDisplay.innerText = `Time Remaining: ${minutes}:${seconds}`;
      time--;
      if (time === -1) {
        clearInterval(counter);
        playAlarm();
        setup();
        flashingBackground = setInterval(changeBgColor, 200);
      }
    }
  }
}

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  }, {once: true});

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });

  pauseBtn.addEventListener("click", () => {
    pauseCountdown();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
  clearInterval(flashingBackground);
  document.body.style.backgroundColor = "white";
}

function changeBgColor() {
  document.body.style.backgroundColor === "red" ?
  document.body.style.backgroundColor = "white" :
  document.body.style.backgroundColor = "red";
}

window.onload = setup;
