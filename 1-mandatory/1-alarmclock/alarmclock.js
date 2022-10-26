const display = document.querySelector("#timeRemaining");
var audio = new Audio("alarmsound.mp3");
audio.loop = true;
let alarmTime = null;// alarme time and alarmSet for me
let alarmtimeout = null;


function updateTime(){
  const date = new Date();

  const hour = formatTime(date.getHours());
  const ninutes = formatTime(date.getMinutes());
  const seconds = formatTime(date.getSeconds());

  display.innerHTML = `${hour} : ${ninutes} : ${seconds}`;
}

function formatTime(time){
if (time < 10){
  return "0" + time;
}
return time;
}

function setAlarmTime(value){
alarmTime = value;

}

function setAlarm (){
  if (alarmTime){
    const current = new Date();
    const timeToAlarm = new Date(alarmTime);

    if (timeToAlarm > current){
      const timeout = timeToAlarm.getTime() - current.getTime();
      alarmtimeout = setTimeout(() => audio.play(), timeout);
    alert("Set Alarm");
    }
  }
}

function clearAlarm(){
  audio.pause();
  if (alarmtimeout){
    clearTimeout(alarmtimeout);
    alert("Alarm cleared");
  }

}






setInterval(updateTime, 1000);















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
/////////////////////////////////////////////////////////////




