function setAlarm() {
  
let timeRemaining = document.getElementById("timeRemaining");
let inputAlarm = document.getElementById("alarmSet");
let seconds = inputAlarm.value;

timeRemaining.innerHTML = "Time Remaining " + seconds;
let interval = setInterval(()=>{
  seconds --
  timeRemaining.innerHTML = "Time Remaining" + seconds
if (seconds === 0){
  playAlarm();
  changeBackgroundColor();
  clearInterval(interval);
}
},1000)
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
