
document.getElementById("set").addEventListener("click", setAlarm);

function setAlarm() {
  pauseAlarm();
  let time = document.getElementById("alarmSet").value;
  let countdownDisplay = document.getElementById("timeRemaining");
  let counter = setInterval(updateCountdown, 1000);

  function updateCountdown() {
    minutes = Math.floor(time / 60);
    seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    countdownDisplay.innerText = `Time Remaining: ${minutes}:${seconds}`;
    time--;
    if (time === -1) {
      clearInterval(counter);
      playAlarm();
    }
  }
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
