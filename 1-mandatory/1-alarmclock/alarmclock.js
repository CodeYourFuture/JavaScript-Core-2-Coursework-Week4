let remainingTime;
let intervalId;

function setAlarm() {
  const alarmSetValue = document.getElementById("alarmSet").value;
  remainingTime = alarmSetValue;
  let minutes = Math.floor(remainingTime / 60);
  let seconds = remainingTime % 60;
  document.getElementById("timeRemaining").innerHTML = `Time Remaining: ${
    minutes < 10 ? "0" : ""
  }${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  intervalId = setInterval(countdown, 1000);
}

function countdown() {
  if (remainingTime > 0) {
    remainingTime--;
    let minutes = Math.floor(remainingTime / 60);
    let seconds = remainingTime % 60;
    document.getElementById("timeRemaining").innerHTML = `Time Remaining: ${
      minutes < 10 ? "0" : ""
    }${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  } else {
    clearInterval(intervalId);
    playAlarm();
  }
}

// DO NOT EDIT BELOW HERE

const audio = new Audio("alarmsound.mp3");

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
