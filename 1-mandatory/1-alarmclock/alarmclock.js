const timeRemaining = document.querySelector("#timeRemaining");
const alarmSetInput = document.querySelector("#alarm set")
const setButton = document.querySelector("#set");
const stopButton = document.querySelector("#stop");


let inputValue
let currentTime;

let interval;

function setAlarmInterval() {
  if(!interval) interval = setInterval(setAlarm, 1000);
}

function setAlarm() {
  if(inputValue >= 0) {
    let hours = Math.floor(inputValue / 60);
    let minutes = inputValue % 60;

    timeRemaining.innerHTML = `<h1 id="timeRemaining">Time Remaining: ${hours}:${minutes}</h1>`;

    inputValue -= 1;
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
