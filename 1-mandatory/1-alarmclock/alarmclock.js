const setAlarmBtn = document.getElementById("set");
setAlarmBtn.addEventListener("click", setAlarm);

function setAlarm() {
  let timeRemainingEl = document.getElementById("timeRemaining");
  let inputFieldEl = document.getElementById("alarmSet");
  let inputFieldValue = inputFieldEl.value;

  timeRemainingEl.innerText = `Time Remaining: 00:${convert(inputFieldValue)}`;

  let count = inputFieldValue;

  let setInt = setInterval(() => {
    if (timeRemainingEl.innerText === `Time Remaining: 00:00`) {
      clearInterval(setInt);
      playAlarm();
    } else {
      count--;
      timeRemainingEl.innerText = `Time Remaining: 00:${convert(count)}`;
    }
  }, 1000);

  let stopBtn = document.getElementById("#stop");
  stopBtn.addEventListener("click", () => {
    pauseAlarm();
    clearInterval(setInt);
  });
}

function convert(n) {
  n = String(n);
  if (n.length == 1) n = "0" + n;
  return n;
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
