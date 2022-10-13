let setAlarmButton = document.getElementById("set");
let input = document.getElementById("alarmSet");
let timeRemaining = document.getElementById("timeRemaining");
let intervalId, inputValue;
function setAlarm() {
  inputValue = input.value;
  input.value = "";
  decrementTime();
  intervalId = setInterval(decrementTime, 1000);
}
function decrementTime() {
  timeRemaining.innerHTML = `Time Remaining: ${timeFormatter(inputValue)}`;
  inputValue--;
  if (timeRemaining.innerHTML === "Time Remaining: 00:00") {
    playAlarm();
    clearInterval(intervalId);
  }
}
function timeFormatter(number) {
  let minutes = Math.floor(number / 60);
  let sec = number % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  sec = sec < 10 ? "0" + sec : sec;

  return `${minutes}:${sec}`;
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
