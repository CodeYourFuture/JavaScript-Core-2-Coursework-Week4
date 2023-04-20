function setAlarm() {
  const timeRemaining = document.querySelector("#timeRemaining");
  let setAlarmInput = document.querySelector("#alarmSet");
  let minutesSeconds = Number(setAlarmInput.value);
  let stop = document.querySelector("#stop");
  let set = document.querySelector("#set");

  set.addEventListener("click", function () {
    clearInterval(startCount);
    if (setAlarmInput.value === "") {
      alert("Please enter value");
    }
  });

  stop.addEventListener("click", () => {
    clearInterval(startCount);
  });
  let startCount = setInterval(function () {
    let seconds = minutesSeconds % 60;
    let minutes = Math.floor(minutesSeconds / 60);
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (minutesSeconds === 0) {
      playAlarm();
      clearInterval(startCount);
    }

    timeRemaining.innerHTML = `Time Remaining: ${minutes}:${seconds}`;
    minutesSeconds--;
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
