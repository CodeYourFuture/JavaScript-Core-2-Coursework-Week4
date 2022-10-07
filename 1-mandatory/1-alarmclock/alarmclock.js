// declaring the variable

let inputElement = document.querySelector("#alarmSet");
let timeRemainingElement = document.getElementById("timeRemaining");
let setAlarmElement = document.querySelector("#set");
let stopAlarmButton = document.querySelector("#stop");
let secondsInput, countdownTime;
// time 


const timeFormatter = (num) => {
  let minutes = Math.floor(num / 60);
  let seconds = num % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return `${minutes}:${seconds}`;
}

function setAlarm() {
  secondsInput = inputElement.value;
  inputElement.value = "";
  countdown();
  countdownTime = setInterval(countdown,1000);


} 
const countdown = () => {
  timeRemainingElement.innerText = `Time Remaining: ${timeFormatter(secondsInput)} `;
  secondsInput--;
  if (timeRemainingElement.innerText === "Time Remaining: 00:00" ){
    playAlarm();
    clearInterval(countdownTime)
  }
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
