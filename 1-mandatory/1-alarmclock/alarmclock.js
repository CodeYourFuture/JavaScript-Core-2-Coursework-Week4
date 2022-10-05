function setAlarm() {
  let alarmSetValue = document.getElementById("alarmSet").value;
  let timeDisplay = document.getElementById("timeRemaining");
 let interval = setInterval(() => {
  //work out mm and ss from input given
 let minutes =Math.floor(alarmSetValue / 60);
 let seconds = alarmSetValue%60;
 //adding a "0" in front if its >= 10.
 minutes = minutes >= 10 ? minutes : "0" + minutes;
 seconds = seconds >= 10 ? seconds : "0" + seconds;
// console.log(`${minutes}:${seconds}`); checked its working

//display time on DOM
timeDisplay.innerText=`Time Remaining: ${minutes}:${seconds}`;

    
alarmSetValue--;
// stop interval and play alarm
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
