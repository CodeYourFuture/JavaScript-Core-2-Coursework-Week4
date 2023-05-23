function setAlarm() {
  var setAlarmInput = document.getElementById("alarmSet");
  var timeRemainingCounter = document.getElementById("timeRemaining");

  var alarmTime = parseInt(setAlarmInput.value);
  var secondsRemaining = alarmTime;

  var interval = setInterval( function() {
    secondsRemaining--;
    
    var minutes = Math.floor(secondsRemaining / 60);
    
    var seconds = secondsRemaining % 60; 
    
    var goodFormatTime = ("00" + minutes).slice(-2) + ":" + ("00" + seconds).slice(-2);
    
    timeRemainingCounter.textContent = "Time Remaining: " + goodFormatTime;

    if (secondsRemaining === 0) {
      clearInterval(interval);
      playAlarm();
      document.body.style.backgroundColor = "lightblue";
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
