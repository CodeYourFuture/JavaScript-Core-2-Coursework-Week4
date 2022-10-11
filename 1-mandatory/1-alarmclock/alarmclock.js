'strict'

// const display = document.getElementById("Alarm Clock");
const beeper = alarmSound(alarmsound.mp3);
beeper.loop = true;

function setAlarm() {
  const date = new Date();

  const hour = date.getHours();
  const minutes = date.getMinutes();

  display.innerText = `${hour} : ${minutes}`
}

function formatTime(time) {
  if ( time < 10 ) {
    return "0" + time;
  }
  return time;
}

setInterval(updateTime, 60);

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
