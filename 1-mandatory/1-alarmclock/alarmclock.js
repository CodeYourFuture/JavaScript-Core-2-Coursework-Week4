
const timeRemaining = document.getElementById("timeRemaining");
const alarmSet = document.getElementById("alarmSet");
const setBtn = document.getElementById("set");
const stopBtn = document.getElementById("stop");
const alarmSound = new Audio("alarm.mp3");

let countdownInterval = null;

function setAlarm() {
  const alarmValue = parseInt(alarmSet.value);
  if (!isNaN(alarmValue)) {
    let remainingTime = alarmValue;
    countdownInterval = setInterval(() => {
      remainingTime--;
      const minutes = Math.floor(remainingTime / 60);
      const seconds = remainingTime % 60;
      timeRemaining.innerText = `Time Remaining: ${formatTime(minutes)}:${formatTime(seconds)}`;
      if (remainingTime === 0) {
        playAlarm();
        clearInterval(countdownInterval);
      }
    }, 1000);
    timeRemaining.innerText = `Time Remaining: ${formatTime(Math.floor(remainingTime / 60))}:${formatTime(remainingTime % 60)}`;
  }
}

function stopAlarm() {
  clearInterval(countdownInterval);
  timeRemaining.innerText = "Time Remaining: 00:00";
  alarmSound.pause();
  alarmSound.currentTime = 0;
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

function playAlarm() {
  alarmSound.play();
}

setBtn.addEventListener("click", setAlarm);
stopBtn.addEventListener("click", stopAlarm);


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
