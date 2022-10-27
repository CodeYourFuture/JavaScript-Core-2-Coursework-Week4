let flashParameter = 0;
let flashIntervalBackground;

function setAlarm() {
  let timeOnScreen = document.getElementById("timeRemaining");
  let inputTimeSeconds = document.getElementById("alarmSet");
  let seconds = inputTimeSeconds.value;
  inputTimeSeconds.value = "";
  timeOnScreen.innerText = `Time Remaining: ${timeFormatter(seconds)}`;

  let countDownInterval = setInterval(() => {
    seconds--;
    timeOnScreen.innerText = `Time Remaining: ${timeFormatter(seconds)}`;
    if (timeOnScreen.innerText === "Time Remaining: 00:00") {
      playAlarm();
      clearInterval(countDownInterval);
      flashInterval();
    }
  }, 1000);
}

function timeFormatter(sec) {
  let minutes = Math.floor(sec / 60);
  let seconds = sec % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return `${minutes}:${seconds}`;
}

function flashInterval() {
  if (flashParameter === 0) {
    flashIntervalBackground = setInterval(() => {
      flashParameter = 1;
      if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "white";
      } else {
        document.body.style.backgroundColor = "black";
      }
    }, 250);
  } else {
    flashParameter = 0;
    document.body.style.backgroundColor = "white";
    clearInterval(flashIntervalBackground);
  }
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
  flashInterval();
}

window.onload = setup;
