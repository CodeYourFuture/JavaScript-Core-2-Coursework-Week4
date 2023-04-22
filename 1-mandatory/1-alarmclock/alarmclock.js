function formatCounter(counter) {
    var minutes = Math.floor(counter / 60);
    var seconds = counter % 60;
    return minutes + ":" + seconds;   
}

function setAlarm() {
  var setValue = document.getElementById("alarmSet").value;
  var timeremainingEl = document.getElementById("timeRemaining");
  let counter = setValue;
  timeremainingEl.innerText = "Time Remaining: " + formatCounter(counter);
  
  const countDown = setInterval(function () {
    counter--;
    timeremainingEl.innerText = "Time Remaining: " + formatCounter(counter);
    if (counter === 0) {
      playAlarm();
      clearInterval(countDown);
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
