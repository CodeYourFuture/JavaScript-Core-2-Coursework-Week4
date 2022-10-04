function setAlarm() {
  let inputValue = document.getElementById("alarmSet").value;
  let timeRemaining = document.getElementById("timeRemaining");

  setInterval(() => {
    let seconds = inputValue % 60;
    let minutes = Math.floor(inputValue / 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    timeRemaining.innerText = `Time Remaining: ${minutes}:${seconds}`;

    if (inputValue < 0) {
      clearInterval(setAlarm);
      timeRemaining.innerText = "Time Remaining: 00:00";
    }

    inputValue--;
  }, 1000);
}

function pauseAlarm() {}
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
