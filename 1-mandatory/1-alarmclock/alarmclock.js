function setAlarm() {
  const counting = document.querySelector("#timeRemaining");
  const setTime = document.querySelector("#alarmSet");
  let timeShown = setTime.value;

  setInterval(() => {
    if (timeShown > 0) {
      counting.innerText = `Time Remaining: ${timeShown--}`;
      if (timeShown == 0) {
        playAlarm();
      }
    }
  }, 1000);

  alarmSet.value = "";
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
