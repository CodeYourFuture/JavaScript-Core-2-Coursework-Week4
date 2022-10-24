let timer;

function setAlarm() {
  clearInterval(timer);
  let inputVal = document.getElementById("alarmSet").value;
  timer = setInterval(alarmCount, 1000);
  function alarmCount() {
    if (inputVal >= 0) {
      document.getElementById(
        "timeRemaining"
      ).innerText = `Time Remaining: ${formatDisplay(inputVal)} `;
      inputVal -= 1;
      if (inputVal < 0) {
        playAlarm();
      }
    }
  }
}

function formatDisplay(timeEntry) {
  let displayMins = Math.floor(timeEntry / 60)
    .toString()
    .padStart(2, "0");
  let displaySecs = (timeEntry % 60).toString().padStart(2, "0");
  return `${displayMins}:${displaySecs}`;
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
