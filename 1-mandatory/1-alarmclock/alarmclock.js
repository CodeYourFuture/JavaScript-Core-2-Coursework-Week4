let currentTime = 0;
let intervalId = null;
let warning = null;

function updateTime(callBack) {
  const timeInterval = 1;

  const id = setInterval(() => {
    const newTime = currentTime - timeInterval;
    currentTime = newTime;
    callBack(newTime);
  }, 1000);
  intervalId = id;
}

function formatTime(timeInSeconds) {
  const minutes = `${Math.floor(timeInSeconds / 60)}`.padStart(2, '0');
  const seconds = `${timeInSeconds % 60}`.padStart(2, '0');
  return `${minutes}:${seconds}`;
}

function updateTimeRemainingDisplay(time) {
  const timeRemainingDisplay = document.querySelector('#timeRemaining');
  timeRemainingDisplay.innerText = `Time Remaining: ${formatTime(time)}`;
}

function updatePageAfterTimeUpdate(newTime) {
  updateTimeRemainingDisplay(newTime);
  if (newTime === 0) {
    clearInterval(intervalId);
    playAlarm();
  }
}

function startAlarmClock() {
  updateTime(updatePageAfterTimeUpdate);
}

function addWarning(warningMessage) {
  const centre = document.querySelector('.centre');
  const warningElement = document.createElement('p');
  warningElement.innerText = warningMessage;
  centre.appendChild(warningElement);
  return warningElement;
}

function removeWarning() {
  const centre = document.querySelector('.centre');
  if (warning) centre.removeChild(warning);
  warning = null;
}

function setAlarm() {
  const alarmSet = document.querySelector('#alarmSet');

  const alarmTimeInSeconds = parseInt(alarmSet.value);

  removeWarning(warning);
  if (!Number.isInteger(alarmTimeInSeconds)) {
    warning = addWarning('Please enter a number!');
    return;
  } else if (alarmTimeInSeconds <= 0) {
    warning = addWarning('Please enter a number bigger than 0');
    return;
  }

  currentTime = alarmTimeInSeconds;
  updateTimeRemainingDisplay(currentTime);
  startAlarmClock();
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
