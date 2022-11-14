const btn = document.getElementById('set');
const inputVal = document.getElementById('alarmSet');
const timeRem = document.getElementById('timeRemaining');

function setAlarm() {
  const inputValue = inputVal.value;
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
