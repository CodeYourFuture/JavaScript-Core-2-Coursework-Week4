function setAlarm() {
  var alarmSet = document.querySelector("#alarmSet").value;
  let min = Math.floor(alarmSet / 60);
  let sec = alarmSet % 60;
  let minAndSec = document.querySelector("#minAndSec");

   if (alarmSet.innerHTML > 0){
    do {
      minAndSec.innerHTML =  `${min}":"${sec}`;
      minAndSec-- ;
    } while (minAndSec !== 0 );
   }
  }
  console.log(minAndSec);

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
