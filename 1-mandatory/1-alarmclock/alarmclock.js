let intervalId;
let timeRemaining;
function setAlarm() {
  clearInterval(intervalId);
  timeRemaining = parseInt(document.getElementById("alarmSet").value, 10);
  updateTitle();

  intervalId = setInterval(() => {
    timeRemaining -= 1;
    updateTitle();

    if (timeRemaining === 0) {
      clearInterval(intervalId);
      playAlarm();
    }
  }, 1000);
}

function updateTitle() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  document.getElementById(
    "timeRemaining"
  ).innerText = `Time Remaining: ${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;
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
