
const inputEls = document.getElementById('alarmSet');
const setAlarmEls = document.getElementById('set');
const stopAlarmEls = document.getElementById('stop');
const displayEls = document.getElementById('timeRemaining');

let displayInterval;
let timeRemaining = 0;
let extraBack;

setAlarmEls.addEventListener('click' , function() {
  if (inputEls.value = '' || inputEls.value < 0){
    alert ('Come on human. Stop playing and add a number');
    return;
  }
  timeRemaining = inputEls.value;
  displayUpdate();

  countId = setInterval(countdown, 1000);
  inputEls.disabled = true;
  inputEls.value = '';
  setAlarmEls.disabled = true;
})

stopAlarmEls.addEventListener('click', function () {
  clearInterval(displayInterval);
  displayUpdate();
  inputEls.disabled = false;
  clearInterval(backgroundColor);
  document.body.style.backgroundColor = 'white'
})

function countdown () {
  timeRemaining--;
  displayUpdate();
  if (timeRemaining === 0) {
  clearInterval(displayInterval);  
  playAlarm();
  extraBack = setInterval(backgroundColor, 3000)
  }
}

function displayUpdate() {
  let min = Math.floor(timeRemaining / 60);
  let sec = timeRemaining % 60;
  min = min <10 ? '0' + min : min;
  sec = sec < 10 ? '0' + sec : sec;
  displayEls.innerHTML = `Time Remaining : ${min}:${sec}`
}

const colors = ["red", "white"];
let currentColor = 0;

function backgroundColor(){
  document.body.style.backgroundColor = colors[currentColor];
  currentColor = (currentColor + 1) % colors.length;
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
