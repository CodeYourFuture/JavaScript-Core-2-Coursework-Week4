function setAlarm() {
  const timeRemaining = document.getElementById("timeRemaining");
  const setAlarmInput = document.getElementById("alarmSet");
  const stopCounter = document.getElementById("stopCounter");
  let takingInput = Number(setAlarmInput.value);
  timeRemaining.innerText = "Time Remaining: " + takingInput + " Sec";

  const timerId = setInterval(() => {
    takingInput -= 1;
    timeRemaining.innerText = "Time Remaining: " + takingInput + " Sec";
    if (takingInput === 0) {
      clearInterval(timerId);
      playAlarm();
    }
  }, 1000);

  const timerId = setInterval(() => {
    takingInput -= 1;
    timeRemaining.innerText = "Time Remaining: " + takingInput + " Sec";
    if (takingInput === 0) {
      clearInterval(timerId);
      playAlarm();
    }
  }, 1000);
}

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
