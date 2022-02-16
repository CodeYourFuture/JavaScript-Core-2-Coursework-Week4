let alarmTime = "";
let len = 0;
let isPaused = false;
let isStarted = false;
let timeInterval = null;

const body = document.querySelector("body");
const timeRemaining = document.getElementById("timeRemaining");
const alarmSet = document.getElementById("alarmSet");

makePauseButton();

function setAlarm() {
  isStarted = true;
  stopStartTimer(changeTime, 1000);
  alarmTime = "0000" + alarmSet.value;
}

function changeTime() {
  timeRemaining.innerText = getTimeRemainingText();
  if (parseInt(alarmTime) == 0) {
    stopStartTimer(changeColor, 100);
    playAlarm();
  }
  alarmTime = "000" + (parseInt(alarmTime) - 1);
}

//Change the background color when the alarm clock finishes
function changeColor() {
  //Check if alarm sound is playing start to change background color
  isStarted = !audio.paused;

  if (!audio.paused) body.style.backgroundColor = getRandomColor();
  else body.style.backgroundColor = "#fff";
}

//Make pause alarm button
function makePauseButton() {
  let pauseBtn = document.createElement("button");

  pauseBtn.id = "pause";
  pauseBtn.type = "button";
  pauseBtn.innerText = "Pause Alarm";

  document.getElementById("stop").parentNode.appendChild(pauseBtn);

  pauseBtn.addEventListener("click", () => {
    if (isPaused && isStarted) timeInterval = setInterval(changeTime, 1000);
    else clearInterval(timeInterval);
    isPaused = !isPaused;
  });
}

function stopStartTimer(func, time) {
  clearInterval(timeInterval);
  timeInterval = setInterval(func, time);
}

function getTimeRemainingText() {
  len = alarmTime.length;
  let result = "Time Remaining: ";
  result += alarmTime.slice(len - 4, len - 2) + ":" + alarmTime.slice(len - 2);
  return result;
}

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
/*
There is no access to edit function pauseAlarm() 
to full stop alarm after start
*/

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
