function setAlarm() {
  let alarmSetValue = document.getElementById("alarmSet").value;
  let timeDisplay = document.getElementById("timeRemaining");
 let interval = setInterval(() => {
 let minutes =Math.floor(alarmSetValue / 60);
 let seconds = alarmSetValue%60;
 minutes = minutes >= 10 ? minutes : "0" + minutes;
 seconds = seconds >= 10 ? seconds : "0" + seconds;
timeDisplay.innerText=`Time Remaining: ${minutes}:${seconds}`;
  
alarmSetValue--;
if (alarmSetValue < 0) {
  clearInterval(interval);
  playAlarm();
}
 },1000);

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
