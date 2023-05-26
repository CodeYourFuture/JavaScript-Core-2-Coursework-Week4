function setAlarm() {
  var inputField = document.getElementById("alarmSet");
  var counter = document.getElementById("timeRemaining");

  var timeInSeconds = parseInt(inputField.value);
  var minutes = Math.floor(timeInSeconds / 60);
  var seconds = timeInSeconds % 60;

  counter.textContent = "Time Remaining: " + formatTime(minutes, seconds);

  countdownInterval = setInterval(updateCountdown, 1000);

  function updateCountdown() {
    if (seconds > 0) {
      seconds--;
    } else if (minutes > 0) {
      minutes--;
      seconds = 59;
    } else {
      clearInterval(countdownInterval);
      playAlarm();
      return;
    }

    counter.textContent = "Time Remaining: " + formatTime(minutes, seconds);
  }

  function formatTime(minutes, seconds) {
    var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
    return formattedMinutes + ":" + formattedSeconds;
  }
}


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
