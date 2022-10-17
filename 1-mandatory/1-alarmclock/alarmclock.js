const setTime = document.querySelector(".setTime");
const alarmSet = document.querySelector("#alarmSet");
function setAlarm() {
  setTime.innerHTML = `00:${alarmSet.value}`;
  alarmSet.value = "";
}

// DO NOT EDIT BELOW HERE
const audio = new Audio("alarmsound.mp3");

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
