function setAlarm() {}
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
