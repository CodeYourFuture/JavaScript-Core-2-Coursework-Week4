const display = document.getElementById('timeRemaining');

function setAlarm() {
  var today = new Date();
  const hour = formatTime(today.getHours());
  const minutes = formatTime(today.getMinutes());
  const seconds = formatTime(today.getSeconds());
  const now = `${hour}:${minutes}:${seconds}`;

  display.innerText=`${hour}:${minutes}:${seconds}`;
  
//     check if the alarmList includes the current time , "now"
//     if yes, ringing() is called
  // if(alarmList.includes(now) ){
  //     ringing(now);
  // } 
}

// set the correct format of time
// converts "1:2:3" to "01:02:03"
function formatTime(time) {
  if ( time < 10 && time.length != 2) {
      return '0' + time;
  }
  return time;
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
