// module for handling user input

function getInput() {
  const input = document.querySelector("#alarmSet").value;
  const timeArray = input.split(":");
  const hours = parseInt(timeArray[0], 10);
  const minutes = parseInt(timeArray[1], 10);

  if (isNaN(hours) || isNaN(minutes)) {
    throw new Error("Invalid input");
  }

  return { hours, minutes };
}

function setCurrentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const display = document.querySelector("#currentTime");
  const formattedHours = formatTime(hours);
  const formattedMinutes = formatTime(minutes);

  display.innerHTML = `Current time: ${formattedHours}:${formattedMinutes}`;
  document.querySelector(
    "#alarmSet"
  ).value = `${formattedHours}:${formattedMinutes}`;
  setInterval(setCurrentTime, 60000);
}
document.addEventListener("DOMContentLoaded", setCurrentTime());

// module for displaying remaining time
function updateDisplay(hours, minutes, seconds) {
  const display = document.querySelector("#timeRemaining");
  const formattedHours = formatTime(hours);
  const formattedMinutes = formatTime(minutes);
  const formattedSeconds = formatTime(seconds);

  display.innerHTML = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

// main function for setting and starting the alarm
function setAlarm() {
  const { hours, minutes } = getInput();
  const alarmTime = new Date();
  alarmTime.setHours(hours);
  alarmTime.setMinutes(minutes);
  alarmTime.setSeconds(0);

  const intervalId = setInterval(() => {
    const currentTime = new Date();
    const diffMs = alarmTime - currentTime;

    if (diffMs < 0) {
      clearInterval(intervalId);
      playAlarm();
      updateDisplay(0, 0, 0);
      return;
    }

    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const remainingSeconds = diffSeconds % 60;
    const remainingMinutes = diffMinutes % 60;

    updateDisplay(diffHours, remainingMinutes, remainingSeconds);
  }, 1000);
}

// utility function for formatting numbers with leading zeros
function formatTime(value) {
  return value.toString().padStart(2, "0");
}

// write a script that will flash a background color on the page when the alarm goes off

function flashAlarm() {
  const wakeUpMsg = document.querySelector(".wakeUp");

  const intervalId = setInterval(() => {
    wakeUpMsg.classList.toggle("invisible");
  }, 500);

  document.getElementById("stop").addEventListener("click", () => {
    clearInterval(intervalId);
    wakeUpMsg.classList.add("invisible");
  });
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
  flashAlarm();
  let playPromise = audio.play();

  if (playPromise !== undefined) {
    playPromise
      .then((_) => {
        audio.pause();
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
