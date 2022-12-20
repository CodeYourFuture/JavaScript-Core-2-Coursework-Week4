const input = document.getElementById("alarmSet");
let remainingTime = document.getElementById("timeRemaining");
const setAlarmB = document.getElementById("set");
const stopAlarmB = document.getElementById("stop");
let countdown, sec;

const convertTime = (num) => {
  let min = Math.floor(num / 60);
  sec = num % 60;
  min = min < 10 ? "0" + min: min;
  sec = sec < 10 ? "0" + sec: sec;
  return `${min}:${sec}`;
}



function setAlarm() {
  sec = input.value;
  input.value = "";
  countDown();
  countdown = setInterval(countDown, 1000);
}

const countDown = () => {
  remainingTime.innerText = `Time Remaining: ${convertTime(sec)}`;
  sec--;
  if (remainingTime.innerText === `Time Remaining: 00:00`) {
    playAlarm();
    clearInterval(countdown);
  }
};
 
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
