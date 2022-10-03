let alarmInterval;
function setAlarm() {
let alarmSetEl = document.getElementById("alarmSet");
let time = alarmSetEl.value;
 let timeRemainEl = document.getElementById("timeRemaining");

 const interval = setInterval(() => {
    let mm = Math.floor(time/ 60);
    let ss = time % 60;

    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;

       timeRemainEl.innerText = `Time Remaining: ${mm}:${ss}`;
       
       time--;

    if (time < 0) {
      clearInterval(interval);
      playAlarm();

    }
  
  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
    clearInterval(alarmInterval);
  });
  
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
