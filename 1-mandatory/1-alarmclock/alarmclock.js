function setAlarm() {
  let time = document.getElementById("alarmSet").value;
  let countdown = document.getElementById("timeRemaining");

  let interval = setInterval(updateCountdown, 1000);

  function updateCountdown() {
    countdown.innerHTML = `Time Remaining: ${time}:00`;
    time--;

    if (time === -1) {
      clearInterval(interval);
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
    console.log("clicked stop");
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
