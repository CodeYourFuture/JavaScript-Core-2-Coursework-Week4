let timeRemaining;
let timer;

function setAlarm() {
  document.getElementById("stop").addEventListener("click", () => {
    clearInterval(timer);
  });
  const input = document.getElementById("alarmSet").value;
  clearInterval(timer);
  timeRemaining = input;

  timer = setInterval(function countDown() {
    if (timeRemaining === 0) {
      playAlarm();
      clearInterval(timer);
    }

    const changeTime = document.getElementById("timeRemaining");
    let minutes = (timeRemaining / 60).toFixed(0).padStart(2, "0");
    let seconds = (timeRemaining % 60).toString().padStart(2, "0");

    timeRemaining = timeRemaining - 1;
    changeTime.innerText = `Time Remaining: ${minutes}:${seconds}`;
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
