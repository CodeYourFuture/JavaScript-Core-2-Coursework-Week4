
const inputVal = document.getElementById('alarmSet');
const timeRem = document.getElementById('timeRemaining');

let timeMoving = null;

function setAlarm() {
  let timer = Number(inputVal.value);
  runningTime(timer);
};

const runningTime = (inputV) =>{
  timeRem.innerHTML = `Time Remaining ${inputV}`;
  inputVal.value = '';
  
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
