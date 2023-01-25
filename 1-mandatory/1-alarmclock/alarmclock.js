function setAlarm() {
    const input = document.getElementById("alarmSet").value;
    document.getElementById("timeRemaining").innerHTML = "Time Remaining: " + input;
    let timeLeft = input;
    const interval = setInterval(() => {
    timeLeft--;
    document.getElementById("timeRemaining").innerHTML = "Time Remaining: " + timeLeft;
    if (timeLeft === 0) {
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
