function setAlarm() {
  let timeDisplay = document.getElementById("timeRemaining");
  let inputTime = document.getElementById("alarmSet");
  let seconds = inputTime.value;
  inputTime.value = "";
  timeDisplay.innerText = `Time Remaining: ${timeFormatter(seconds)}`;
  let countDownInterval = setInterval(() => {
    seconds--;
    timeDisplay.innerText = `Time Remaining: ${timeFormatter(seconds)}`;
    if (timeDisplay.innerText === "Time Remaining: 00:00") {
      playAlarm();
      clearInterval(countDownInterval);
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
