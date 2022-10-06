let interval;
let bgInterval;

function setAlarm() {
  let input = document.getElementById("alarmSet");
  let heading = document.getElementById("timeRemaining");
  let timeLeft = input.value;

  interval = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = Math.floor(timeLeft % 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    heading.innerText = `Time Remaining: ${minutes}:${seconds}`;

    if (timeLeft <= 0) {
      clearInterval(interval);
      heading.innerText = "Time Remaining: 00:00";
      playAlarm();
      flashBg();
    }
    timeLeft--;
  }, 1000);
}

function flashBg() {
  bgInterval = setInterval(() => {
    if (document.body.style.backgroundColor !== "yellow") {
      document.body.style.backgroundColor = "yellow";
    } else {
      document.body.style.backgroundColor = "white";
    }
  }, 20);
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
  clearInterval(bgInterval);
}

window.onload = setup;
