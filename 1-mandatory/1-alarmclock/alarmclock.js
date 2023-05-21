const timeRemaining = document.querySelector("#timeRemaining");
let timeCountDown = document.querySelector("#alarmSet");
const setAlarmTime = document.querySelector("set");
const stopAlarmTime = document.querySelector("stop");

function displayTimer() {
  let minutes = Math.floor(timeCountDown / 60);
  let seconds = timeCountDown % 60;

  let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  timeRemaining.textContent =
    formattedMinutes + ":" + formattedSeconds + " minutes and seconds";


}

function setAlarm() {
  

}


// Schedule a function to execute every 1 second



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
