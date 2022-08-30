function setAlarm() {
  let timeDisplay = document.getElementById("timeRemaining");
  let alarmCounter = document.getElementById("alarmSet").value;

  let mm = "00";
  let ss = "00";

  const interval = setInterval(() => {
    mm = Math.floor(alarmCounter / 60);
    ss = Math.floor(alarmCounter % 60);

    if (alarmCounter >= 600) {
      ss = ss < 10 ? "0" + ss : ss;
      timeDisplay.innerText = `Time Remaining: ${mm}:${ss}`;
      mm--;
      ss--;
      alarmCounter--;
    } else if (alarmCounter < 600 && alarmCounter >= 60) {
      ss = ss < 10 ? "0" + ss : ss;
      mm = mm < 10 ? "0" + mm : mm;
      timeDisplay.innerText = `Time Remaining: ${mm}:${ss}`;
      mm--;
      ss--;
      alarmCounter--;
    } else if (alarmCounter < 60 && alarmCounter >= 10) {
      ss = ss < 10 ? "0" + ss : ss;
      timeDisplay.innerText = `Time Remaining: 00:${ss}`;
      ss--;
      alarmCounter--;
    } else {
      ss = ss < 10 ? "0" + ss : ss;
      timeDisplay.innerText = `Time Remaining: 00:${ss}`;
      ss--;
      alarmCounter--;
    }

    if (alarmCounter < 0) {
      clearInterval(interval);
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
