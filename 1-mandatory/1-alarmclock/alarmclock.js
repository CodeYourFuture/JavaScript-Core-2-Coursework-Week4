function setAlarm() {
  let counter = document.querySelector("#timeRemaining");
  let inputField = document.querySelector("#alarmSet");
  let timer = inputField.value;

  interval = setInterval(() => {
    timer = timer - 1;
    counter.innerText = `Time Remaining: 00:${timer}`;
    if (timer === 0) {
      clearInterval(interval);
      playAlarm();
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
