
// const interval = setInterval(setAlarm, 1000);
const setBtn = document.getElementById("set");
const seconds = document.getElementById("alarmSet").value;
let timerDisplay = document.getElementById("timeRemaining");

setBtn.addEventListener("click", setAlarm);

function setAlarm() {
  setInterval(function () {
    timerDisplay.innerHTML = seconds;
  }, 1000);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
