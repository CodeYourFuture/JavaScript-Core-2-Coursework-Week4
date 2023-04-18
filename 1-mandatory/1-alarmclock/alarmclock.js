function dispalyRemainingTime(totalSeconds) {
  let timeRemaining = document.getElementById("timeRemaining");
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  timeRemaining.textContent = "Time Remaining " + minutes + ":" + seconds;
}

function setAlarm() {
  let inputTime = document.getElementById("alarmSet");

  dispalyRemainingTime(inputTime.value);

  let totalSeconds = inputTime.value;

  let Interval = setInterval(() => {
    totalSeconds -= 1;
    dispalyRemainingTime(totalSeconds);
    if (totalSeconds === 0) {
      playAlarm();
      clearInterval(Interval);
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
