function setAlarm() {
  const timeRemainingEl = document.getElementById("timeRemaining");
  const setAlarmInput = document.getElementById("alarmSet");
  let takingInput = Number(setAlarmInput.value);
  timeRemainingEl.innerText = `Time Remaining: 00:${takingInput}`;

  const timerId = setInterval(() => {
    takingInput -= 1;
    timeRemainingEl.innerText = `Time Remaining: 00:${takingInput}`;

    if (takingInput === 0) {
      clearInterval(timerId);
      playAlarm();
    }
  }, 1000);
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
