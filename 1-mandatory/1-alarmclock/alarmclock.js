function setAlarm() {
  const timeInput = document.getElementById("alarmSet");
  const timeRemaining = document.getElementById("timeRemaining");
  let seconds = parseInt(timeInput.value);
  let remainingTime = seconds;

  const alarm = setInterval(function () {
    if (remainingTime <= 0) {
      clearInterval(alarm);
      playAlarm();
      timeInput.disabled = false;
      document.getElementById("set").disabled = false;
     
    } else {
      remainingTime--;
      timeRemaining.textContent = `Time Remaining: ${formatTime(remainingTime)}`;
    }
  }, 1000);

  timeInput.disabled = true;
  document.getElementById("set").disabled = true;
  document.getElementById("stop").disabled = false;
}

function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;

  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
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
