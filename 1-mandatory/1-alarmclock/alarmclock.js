function setAlarm() {
  let time = document.getElementById("alarmSet").value;

  const interval = setInterval(() => {
    const minutes = Math.floor(time / 60);
    const formattedMin = minutes < 10 ? `0${minutes}` : minutes;
    const seconds = time % 60;
    const formattedSec = seconds < 10 ? `0${seconds}` : seconds;

    document.getElementById(
      "timeRemaining"
    ).innerText = `Time Remaining: ${formattedMin}:${formattedSec}`;
    time--;
    if (time < 0) {
      clearInterval(interval);
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
