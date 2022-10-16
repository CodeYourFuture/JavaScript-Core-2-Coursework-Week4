function setAlarm() {
  let setAlarmButton = document.getElementById("set");
  let stopAlarmButton = document.getElementById("stop");
  let setTime = document.getElementById("alarmSet").value;
  let timeRemainingHeader = document.getElementById("timeRemaining");

  let time = setTime;
  let Interval = setInterval(function () {
    updateCountdown();
  }, 1000);

  function updateCountdown() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    timeRemainingHeader.innerHTML = `Time Remaining: ${minutes}: ${seconds}`;
    time--;

    if (time < 0) {
      playAlarm();
      clearInterval(Interval);
    }
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
