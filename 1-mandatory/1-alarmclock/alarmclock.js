function setAlarm() {
  let timeInputEl = document.getElementById("alarmSet");
  let timeRemainingEl = document.getElementById("timeRemaining");
  let minutes = 0;
  let seconds = timeInputEl.value;
  let remainingTime = 0;

  //I'll try it with seconds
  let alarm = setInterval(function () {
    if (seconds === 0) {
      clearInterval(alarm);
      playAlarm();
    }
    if (seconds >= 0) {
      if (seconds >= 0 && seconds < 10) {
        timeRemainingEl.textContent = `Time Remaining: 00:0${seconds}`;
      } else if (seconds >= 10 && seconds < 60) {
        timeRemainingEl.textContent = `Time Remaining: 00:${seconds}`;
      }
      seconds--;
    }
  }, 1000);
}

// DO NOT EDIT BELOW HERE

let audio = new Audio("alarmsound.mp3");

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
