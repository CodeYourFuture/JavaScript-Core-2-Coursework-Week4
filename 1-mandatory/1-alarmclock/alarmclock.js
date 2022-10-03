const inputField = document.getElementById("alarmSet");
let timeRemain = document.getElementById("timeRemaining");
const setAlarmButton = document.getElementById("set");
const stopAlarmButton = document.getElementById("stop");
let seconds, countdownInterval;

const timeFormatter = (number) => {
  let minutes = Math.floor(number / 60);
  let second = number % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  second = second < 10 ? "0" + second : second;
  return `${minutes}:${seconds}`;
};

function setAlarm() {
  seconds = inputField.value;
  inputField.value = ""
  countdown();
  countdownInterval = setInterval(countdown,1000);  
}

const countdown = () => {
  timeRemain.innerText = `Time Remaining: ${timeFormatter(seconds)}`;
  seconds--;
  if (timeRemain.innerText === `Time Remaining: 00:00`) {
    playAlarm();
    clearInterval(countdownInterval);
  }
};

setAlarm();
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
