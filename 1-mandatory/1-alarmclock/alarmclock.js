function setAlarm() {
  let stopAlarm = document.getElementById("stop");
  let input = document.getElementById("alarmSet");
  let remainTime = document.getElementById("timeRemaining");
  let valueOfInput = input.value;

  let timmer = setInterval(() => {
    let minutes = Math.floor(valueOfInput / 60);
    let seconds = valueOfInput % 60;
    let minFormat = minutes < 10 ? `0${minutes}` : minutes;
    let secFormat = seconds < 10 ? `0${seconds}` : seconds;
    valueOfInput--;
    remainTime.textContent = ` Time Remaining: ${minFormat}:${secFormat}`;
    if (valueOfInput < 0) {
      clearInterval(timmer);
      playAlarm();
    }
  }, 1000);
  input.value = "";
  stopAlarm.addEventListener("click",pauseAlarm)
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
