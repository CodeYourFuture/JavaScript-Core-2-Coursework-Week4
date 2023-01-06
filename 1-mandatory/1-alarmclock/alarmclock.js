let timeRemaining = 0;
let intervalId = null;

function setDisplay(time) {
  const timeRemainingDisplay = document.getElementById("timeRemaining");
  let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((time % (1000 * 60)) / 1000);
  return (timeRemainingDisplay.innerText = `Time Remaining: ${hours}:${minutes}:${seconds}`);
}

function decrementTime() {
  timeRemaining -= 1000;
  setDisplay(timeRemaining);
  if (timeRemaining <= 0) {
    clearInterval(intervalId);
    playAlarm();
  }
}

function setAlarm() {
  const inputTime = document.getElementById("alarmSet").value;
  const milliSecondsInputTime = inputTime * 1000;

  setDisplay(milliSecondsInputTime);
  timeRemaining = milliSecondsInputTime;

  intervalId = setInterval(decrementTime, 1000);
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
  clearInterval(intervalId);
}

window.onload = setup;
