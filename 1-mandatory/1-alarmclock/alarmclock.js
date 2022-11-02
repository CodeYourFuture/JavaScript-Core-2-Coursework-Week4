function setAlarm() {
  // const SetAlarm = {}

let timeRemain = getElementById('timeRemaining');
let setTime = getElementById('alarmSet');
let timer = timeRemain.value;

let Timer = setInterval(() => {
  
  const hours = Math.floor(timer / 3600);
  const hFormat = hours < 10 ? `0${hours}` : hours;
  const minutes = Math.floor(timer / 60);
  const mFormat = minutes < 10 ? `0${minutes}` : minutes;
  const seconds = Math.floor(timer % 60);
  const sFormat = seconds < 10 ? `0${seconds}` : seconds;
   timeRemain.textContent = `Time Remaining : ${hFormat}: ${mFormat}: ${sFormat}`; 

   if (timer < 0) {
      clearInterval(Timer);
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
