function displayRemainingTime(totalSeconds){
  let timeRemainingTitle = document.getElementById("timeRemaining");
  let timeRemainingInMinutes = Math.floor(totalSeconds / 60);
  let timeRemainingInSeconds = totalSeconds % 60;

  timeRemainingTitle.textContent =
    "Time Remaining: " + timeRemainingInMinutes + ":" + timeRemainingInSeconds;
}

function setAlarm() {
  let inputField = document.getElementById("alarmSet");
  displayRemainingTime(inputField.value);

  let countdown = inputField.value;
  let interval = setInterval(() => {
    countdown -= 1;
    displayRemainingTime(countdown);
    if (countdown === 0) {
      playAlarm();
      clearInterval(interval);
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


