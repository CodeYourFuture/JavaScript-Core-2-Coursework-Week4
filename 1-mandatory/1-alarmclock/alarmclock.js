let globSetinterval;
let isPaused = false;
let timer;
let min;
let sec;

function setAlarm() {
  let timeRemaining = document.getElementById("timeRemaining");
  let alarmSet = document.getElementById("alarmSet").value *60;
    if (alarmSet > 0) {
      timer = setInterval(() =>{

    if (!isPaused){
      alarmSet -- ;
      let min = Math.floor(alarmSet/60);
      let sec = alarmSet % 60;
      sec = sec < 10 ? `0${sec}`: sec;
      min = min < 10 ? `0${min}`: min;
      timeRemaining.textContent=`Time Remaining : ${min}: ${sec}`;
    }
    if (min == 0 && sec == 0) {
      playAlarm();
      clearInterval(timer);
      timeRemaining.textContent = `Time Remaining: 00:00`;
    }
  },1000);
}
  document.getElementById("alarmSet").value = "";
}

function pauseTimer( ) {
  clearInterval(timer);
  timeRemaining.textContent = `Time Remaining: 00:00`;
}

document.getElementById("clear").addEventListener("click", () => {
  pauseTimer();
});
document.getElementById("pause").addEventListener("click", () => {
  isPaused = !isPaused;
});




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
