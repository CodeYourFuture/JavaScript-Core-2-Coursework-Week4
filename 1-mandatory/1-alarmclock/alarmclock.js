function setAlarm() {
  let timeRemainingElement = document.querySelector("#timeRemaining");
  let alarmSetElement = document.querySelector("#alarmSet");
  let stopBtn = document.getElementById("stop");
  let alarmCountdown = alarmSetElement.value;

  setInterval(() => {
    if (alarmCountdown >= 0) {
      minutesLeft =
        alarmCountdown >= 60 ? Math.floor(alarmCountdown / 60) : "00";
      secondsLeft =
        alarmCountdown >= 60 ? Math.floor(alarmCountdown % 60) : alarmCountdown;
      alarmCountdown -= 1;
      if (String(secondsLeft).length < 2) {
        secondsLeft = "0" + secondsLeft;
      }
      if (String(minutesLeft).length < 2) {
        minutesLeft = "0" + minutesLeft;
      }

      timeRemainingElement.innerText = `Time Remaining: ${minutesLeft} : ${secondsLeft}`;
      if (alarmCountdown < 0) {
        playAlarm();
      }
    }
  }, 1000);

  alarmSetElement.value = "";
  stopBtn.addEventListener("click", () => {
    pauseAlarm();
  });
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
