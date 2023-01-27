let secondRemaining = 0;
let interval;
let timeTitle = document.getElementById("timeRemaining");

function setAlarm() {
  secondRemaining = document.getElementById("alarmSet").value;

  interval = setInterval(() => {
    if (secondRemaining > 0) {
      secondRemaining--;
      setAlarmTitle();
    } else {
      clearInterval(interval);
      playAlarm();
    }
  }, 1000);
}

function setAlarmTitle() {
  minutes = Math.floor(secondRemaining / 60);
  seconds = secondRemaining % 60;
  timeTitle.innerHTML = `Time Remaining: ${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
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
