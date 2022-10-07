// declaring variables
const inputField = document.getElementById("alarmSet");
let timeRemain = document.getElementById("timeRemaining");
const setAlarmButton = document.getElementById("set");
const stopAlarmButton = document.getElementById("stop");

stopAlarmButton.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
});
let seconds, countdownInterval;
// time format
const timeFormatter = (num) => {
  let minutes = Math.floor(num / 60);
  let seconds = num % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return `${minutes}:${seconds}`;
};

function setAlarm() {
  seconds = inputField.value;
  inputField.value = ""; //clear input field
  countdown();
  countdownInterval = setInterval(countdown, 1000);
}

const countdown = () => {
  timeRemain.innerText = `Time Remaining: ${timeFormatter(seconds)}`;
  seconds--;
  if (timeRemain.innerText === "Time Remaining: 00:00") {
    document.body.style.backgroundColor = "aqua";
    playAlarm();
    clearInterval(countdownInterval);
  }
};

// setAlarm()

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
