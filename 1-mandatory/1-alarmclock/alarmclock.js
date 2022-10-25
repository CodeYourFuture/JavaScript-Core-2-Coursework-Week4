function setAlarm() {

let userInput = document.querySelector("#alarmSet");
let remainTime = document.querySelector("#timeRemaining");
let counter=userInput.value;


let timer=setInterval(() => {
  const minutes = Math.floor(counter / 60);
  const minFormat = minutes < 10 ? `0${minutes}` : minutes;
  const seconds = counter % 60;
  const secFormat = seconds < 10 ? `0${seconds}` : seconds;
  remainTime.textContent = `Time Remaining : ${minFormat}:${secFormat}`;
  counter--;
 
    if(counter<0){
     clearInterval(timer);
     playAlarm();
    
  }
}, 1000);


  
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
