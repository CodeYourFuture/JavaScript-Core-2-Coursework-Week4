function setAlarm() {
  let setAlarmBtn = document.getElementById("set");
  let setAlarmInput = document.getElementById("alarmSet").innerText;
  let AlarmCounter = document.getElementById("timeRemaining");

  AlarmCounter.innerText = `Time remaining: 00:${setAlarmInput}`;

  let timeLeft = setAlarmInput;
  let countdown = setInterval(() => {
    timeLeft--;
    AlarmCounter.innerText = `Time remaining: 00:${timeLeft}`;
    if (timeLeft === 0) {
      clearInterval(countdown);
      playAlarm();
    }
  }, 1000);
  let stopAlarm = document.getElementById("stop");
  stopAlarm.addEventListener("click", () => {
    clearInterval(countdown);
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
