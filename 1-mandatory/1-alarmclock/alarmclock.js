
const timeRemaining = document.querySelector("#timeRemaining");
const alarmSetInput = document.querySelector("#alarmSet");
const setBtn = document.querySelector("#set");
const stopBtn = document.querySelector("#stop");

let inputValue;
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
  
  
  if(inputValue === -1) {
    clearInterval(interval);
    playAlarm();
    interval = null;
  };
}

setBtn.addEventListener("click", () => {
  inputValue = alarmSetInput.value;
  setAlarmInterval();
  alarmSetInput.value = "";
})

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
  pauseAlarm();
  interval = null;
})

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
