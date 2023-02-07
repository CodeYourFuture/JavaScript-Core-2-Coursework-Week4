

let timeRemaining = 0;

function renderTimeRemaining(){
 let minutes = Math.floor(timeRemaining / 60);
 let seconds = timeRemaining % 60 ;
 const timeRemainingElement = document.getElementById("timeRemaining");
 timeRemainingElement.innerText = `Time remaining: ${String(minutes).padStart(2, "0")} : ${String(seconds).padStart(2,"0")}`
}



function setAlarm() {
  const newTime = document.querySelector("#alarmSet").value;
  timeRemaining = newTime;
  renderTimeRemaining();
  const interval = setInterval(() => {
timeRemaining --;
renderTimeRemaining();
if(timeRemaining <= 0){
  clearInterval(interval);
  playAlarm();
}
  }, 1000)
 
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
