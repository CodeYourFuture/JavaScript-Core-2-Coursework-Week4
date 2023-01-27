function setAlarm() {}

const inputField = document.getElementById("alarmSet");
const setAlarmButton = document.getElementById("set");
const stopAlarmButton = document.getElementById("stop");
const title = document.getElementById("timeRemaining");

// variables
let timeRemaining = 0;
let intervalId;
let flash;

setAlarmButton.addEventListener("click", function () {
  if (inputField.value === "") {
    alert("Please enter a valid value");
    return;
  }

  timeRemaining = inputField.value;
  updateTitle();

  // Start the countdown
  intervalId = setInterval(countdown, 1000);
  inputField.disabled = true;
  inputField.value = "";
  setAlarmButton.disabled = true;
});

// Event listener for stop alarm button
stopAlarmButton.addEventListener("click", function () {
  clearInterval(intervalId);
  pauseAlarm();
  timeRemaining = 0;
  updateTitle();
  inputField.disabled = false;
  setAlarmButton.disabled = false;
  clearInterval(flash);
  document.body.style.backgroundColor = "white";
});

// Countdown function
function countdown() {
  timeRemaining--;
  updateTitle();

  if (timeRemaining === 0) {
    clearInterval(intervalId);
    playAlarm();
    flash = setInterval(changeBackgroundColor, 500);
  }
}

// Function to update the title element
function updateTitle() {
  let minutes = Math.floor(timeRemaining / 60);
  let seconds = timeRemaining % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  title.innerHTML = `Time Remaining: ${minutes}:${seconds}`;
}

// Extra
// change background color

const colors = ["red", "white"];
let currentColor = 0;

function changeBackgroundColor() {
  document.body.style.backgroundColor = colors[currentColor];
  currentColor = (currentColor + 1) % colors.length;
}

const pauseAlarmButton = document.getElementById("pause");
const resumeAlarmButton = document.getElementById("resume");

// pause alarm button
pauseAlarmButton.addEventListener("click", function () {
  clearInterval(intervalId);
  paused = true;
});

//resume alarm button
resumeAlarmButton.addEventListener("click", function () {
  if (paused) {
    intervalId = setInterval(countdown, 1000);
    paused = false;
  }
});

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
