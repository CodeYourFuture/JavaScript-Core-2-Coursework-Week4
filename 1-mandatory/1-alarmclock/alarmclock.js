function setAlarm() {
  let timeRemainder = document.getElementById("timeRemaining");
  let alarmCounter = document.getElementById("alarmSet").value;
  let timerCount = document.getElementById("timer");

  timerCount.innerText = alarmCounter;

  
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
