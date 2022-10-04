function setAlarm() {
  let inputValue = document.getElementById("alarmSet").value;
  let timeRemaining = document.getElementById("timeRemaining");
  let seconds = inputValue % 60;
  let minutes = Math.floor(inputValue / 60);

  if (seconds < 10 && minutes < 10) {
    timeRemaining.innerHTML = `Time Remaining: 0${minutes}:0${seconds}`;
  } else if (seconds < 10 && minutes >= 10) {
    timeRemaining.innerHTML = `Time Remaining: ${minutes}:0${seconds}`;
  } else if (seconds >= 10 && minutes < 10) {
    timeRemaining.innerHTML = `Time Remaining: 0${minutes}:${seconds}`;
  } else {
    timeRemaining.innerHTML = `Time Remaining: ${minutes}:${seconds}`;
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
}

window.onload = setup;
