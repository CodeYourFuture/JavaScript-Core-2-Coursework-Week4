function setAlarm() {
  let alarmButtonSet = document.getElementById("alarmButtonSet").value;
  let timeShow = document.getElementById("timeRemaining").value;
  let stopButtonAlarm = document.getElementById("stopButtonAlarm").value;
  let min = Math.floor(alarmSetValue /60 );
  let seconds = alarmSetValue % 60;
  min = minutes >= 10 ? minutes: "0" + minutes;
  sec = seconds >= 10 ? seconds : "0" + seconds;
  timeDisplay.innerText = "timeRemaining: ${minutes}:${seconds}";
  

  
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
