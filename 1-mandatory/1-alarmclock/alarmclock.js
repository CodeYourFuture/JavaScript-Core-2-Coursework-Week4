
let totalTime = 0;
let inter;
console.log(totalTime);
let label = document.querySelector(#"timeRemaining");
let labelText = "Time Remaining: 00:";
let set = document.querySelector("#set");
let stop = document.querySelector("#stop");

set.addEventListener("click", () => {
  let time = parseInt(document.querySelector("#alarmSet").value);
  totalTime = time;
inter =setInterval(setAlarm, 1000);
});

function setAlarm() {
  if (totalTime <= 0) {
    playAlarm();
    clearInterval(inter);
  }
  label.innerHTML = `${labelText}${
    totalTime < 10 ? "0" + totalTime : totalTime}`;
};
totalTime--;

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
