function setAlarm() {
  let alarmTime = document.getElementById("alarmSet").value;
  function displayedTime(alarmTime) {
    let minutes = Math.floor(alarmTime / 60);
    let seconds = alarmTime % 60;
    document.getElementById("timeRemaining").innerHTML = `Time Remaining: ${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}`;
  }
  displayedTime(alarmTime);
  let alarmInterval = setInterval(() => {
    alarmTime--;
    displayedTime(alarmTime);
    if (alarmTime <= 0) {
      playAlarm();
      clearInterval(alarmInterval);
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
