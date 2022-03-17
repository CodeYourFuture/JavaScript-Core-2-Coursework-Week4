let inputTag = document.querySelector("#alarmSet");//global
let timeRemaining = document.querySelector("#timeRemaining");//global

function setAlarm() {
let timer = inputTag.value ;


let myInterval = setInterval(()=>{
timer--;
let minutes = Math.floor(timer/60);
let seconds = timer % 60;
// timeRemaining.innerHTML = `Time Remaining: 00:${minutes}:${seconds}`;
if(minutes < 10 && seconds >= 10){
  timeRemaining.innerHTML = `Time Remaining: 0:${minutes}:${seconds}`;
}else if(minutes < 10 && seconds < 10){
  timeRemaining.innerHTML = `Time Remaining: 0:${minutes}:${seconds}`;
}else if(minutes >=10 && seconds < 10){
  timeRemaining.innerHTML = `Time Remaining: 0:${minutes}:${seconds}`;
}

if(minutes === 0 && seconds === 0){
  clearInterval(myInterval);
  playAlarm();
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
