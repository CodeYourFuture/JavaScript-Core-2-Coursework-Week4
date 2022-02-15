function setAlarm() {
  let timeEl = document.querySelector("#timeRemaining"); // Time remaining display
  let alarmSetEl = document.querySelector("#alarmSet"); // Number entered in the input field
  let alarmDisplay = alarmSetEl.value;

  // Begins a countdown timer per second
  setInterval(() => {
    if (alarmDisplay > 0) {
      timeEl.innerText = `Time Remaining: ${alarmDisplay--}`;
      if (alarmDisplay === 0) {
        playAlarm();
      }
    }
  }, 1000);

  alarmSetEl.value = ""; // Resets the input field
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
