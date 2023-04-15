// document.getElementById("#set").onclick = setAlarm;
function setAlarm() {
  let timerDisplay = document.querySelector("h1");
  let inputNumber = document.querySelector("input").value;

  if (inputNumber < 10) {
    timerDisplay.innerText = `Time Remaining: 00:0${inputNumber}`;
  } else {
    timerDisplay.innerText = `Time Remaining: 00:${inputNumber}`;
  }
}
// setAlarm();
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
