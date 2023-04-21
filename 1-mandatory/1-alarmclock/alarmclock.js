// these 4 are globally scoped because they will be re-used across various functions

const timeInput = document.querySelector("#alarmSet");
const timeRemaining = document.querySelector("#timeRemaining");

let time;
let intervalID;

function setAlarm() {
  console.log("setAlarm function ran");

  time = timeInput.value;
  timeRemaining.textContent = `Time Remaining: ${formatTime(time)}`;

  intervalID = setInterval(() => {
    console.log("setInterval function ran");
    time--;
    console.log("Timer is:",time)
    timeRemaining.textContent = `Time Remaining: ${formatTime(time)}`;
    if (time === 0) {
      clearInterval(intervalID);
      playAlarm();
    }
  }, 1000);
}

function cancelAlarm() {
  console.log("cancelAlarm function ran");

  clearInterval(intervalID);
  stopAlarm();
  time = 0;
  timeRemaining.textContent = `Time Remaining: ${formatTime(time)}`;
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  console.log("formatTime minutes:", minutes);
  const seconds = time % 60;
  console.log("formatTime seconds:", seconds);
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  console.log("formatTime formattedMinutes:", formattedMinutes);
  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  console.log("formatTime formattedSeconds:", formattedSeconds);
  return `${formattedMinutes}:${formattedSeconds}`;
}

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    cancelAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function stopAlarm() {
  audio.pause();
}

window.onload = setup;
