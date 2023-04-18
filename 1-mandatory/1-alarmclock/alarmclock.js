function setAlarm() {
let inputSet = document.querySelector("#alarmSet");

// let minutes = Math.floor( inputSet.value / 60);
// let seconds = inputSet.value % 60;

// let timeRemaining = document.querySelector("#timeRemaining");
// timeRemaining.textContent = `Time Remaining: ${minutes}:${seconds}`;

displayRemaining(inputSet.value)
let totalSeconds = inputSet.value;

let interval = setInterval(() => {
  totalSeconds -= 1;
  displayRemaining(totalSeconds)

if (totalSeconds === 0) {
  playAlarm()
  clearInterval(interval)
}
}, 1000)

}

function displayRemaining(totalSeconds){
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;

let timeRemaining = document.querySelector("#timeRemaining");
timeRemaining.textContent = `Time Remaining:     ${minutes}:${seconds}`;
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
