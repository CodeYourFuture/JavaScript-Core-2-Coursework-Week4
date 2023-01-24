function setAlarm() {
  const timeInput = document.querySelector("#alarmSet");

  let timeRemaining = document.querySelector("#timeRemaining");
  let countdownTime = timeInput.value;

  let minutes = Math.floor(countdownTime / 60);

  let seconds = countdownTime - minutes * 60;

  timeRemaining.innerText = `Time Remaining: 0${minutes}:${seconds}`;

  let countdown = setInterval(() => {
    seconds -= 1;
    if (seconds == 0) {
      clearInterval(countdown);

      playAlarm();
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
      // minutes = "0" + minutes;
    } else {
      seconds = seconds;
      minutes = minutes;
    }

    timeRemaining.innerText = `Time Remaining: 0${minutes}:${seconds}`;
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
