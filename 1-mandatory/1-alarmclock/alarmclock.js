function setAlarm() {
  let alarmSetTime = document.getElementById(`alarmSet`).value;
  let timeRemaining = document.getElementById(`timeRemaining`);
  setTimeout(() => {
    playAlarm();
  }, alarmSetTime * 1000);
  runningProgress(alarmSetTime, timeRemaining);
}

function runningProgress(alarmSetTime, timeRemaining) {
  let i = alarmSetTime - 1;
  const myInterval = setInterval(() => {
    let minutesCounter = Math.floor(i / 60);
    let secondsCounter = i % 60;
    if (i >= 0) {
      timeRemaining.innerText = `Time Remaining: ${minutesCounter}:${secondsCounter}`;
      i--;
    } else {
      clearInterval(myInterval);
    }
    if (setting) {
      document.getElementById(
        `timeRemaining`
      ).innerText = `Time Remaining: 00:00`;

      clearInterval(myInterval);
    }
    console.log(`test`);
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
  document.getElementById(`timeRemaining`).innerText = `Time Remaining: 00:00`;
}

window.onload = setup;
