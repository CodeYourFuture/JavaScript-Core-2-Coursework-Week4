let remainingTime;
let intervalId;

function setAlarm() {
  let setTimeValue = document.getElementById("alarmSet").value;
  remainingTime = setTimeValue;
  let minutes = Math.floor(remainingTime / 60);
  let seconds = remainingTime % 60;

  document.getElementById("timeRemaining").innerHTML = `Time Remaining: ${
    minutes < 10 ? "0" : ""
  }:${seconds < 10 ? "0" : ""}${seconds}`;

  intervalId = setInterval(() => {
    if (remainingTime > 0) {
      remainingTime--;
      let minutes = Math.floor(remainingTime / 60);
      let seconds = remainingTime % 60;
      document.getElementById("timeRemaining").innerText = `Time Remaining: ${
        minutes < 10 ? "0" : ""
      } : ${seconds < 10 ? "0" : ""}${seconds}`;
    } else {
      clearInterval(intervalId);
      playAlarm();
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
