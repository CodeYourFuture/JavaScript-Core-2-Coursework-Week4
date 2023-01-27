const getTimeString = ({ hours, minutes, seconds, zone }) => {
  if (minutes / 10 < 1) {
    minutes = "0" + minutes;
  }
  if (seconds / 10 < 1) {
    seconds = "0" + seconds;
  }
  return `${hours}:${minutes}:${seconds} ${zone}`;
};

// Function to display current time on screen
const renderTime = () => {
  var currentTime = document.getElementById("current-time");
  const currentDate = new Date();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
  var zone = hours >= 12 ? "PM" : "AM";
  if (hours > 12) {
    hours = hours % 12;
  }
  const timeString = getTimeString({ hours, minutes, seconds, zone });
  currentTime.innerHTML = timeString;
};

// Update time every second
setInterval(renderTime, 1000);

const MILLISECOND_TO_SECOND = 1000;

const formatSeconds = (n) => {
  const m = Math.floor(n / 60);
  const s = n - m * 60;
  return `${m}:${s}`;
};

function setAlarm() {
  let time = parseInt(document.querySelector("#alarmSet").value);

  const timeRemaining = document.querySelector("#timeRemaining");

  const interval = setInterval(() => {
    timeRemaining.textContent = `Time remaining: ${formatSeconds(time)}`;

    if (time === 0) {
      clearInterval(interval);
      playAlarm();
    }

    time--;
  }, 1 * MILLISECOND_TO_SECOND);
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
