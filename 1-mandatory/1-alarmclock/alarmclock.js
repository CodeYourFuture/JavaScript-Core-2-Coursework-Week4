function setAlarm() {
  let inputEl = document.querySelector("#alarmSet");
  let timer = inputEl.value;
  let timeRemainEl = document.querySelector("#timeRemaining");
  timeRemainEl.innerText = "Time Remaining: 00:" + timer;
  const myInterval = setInterval(() => {
    timer--;
    timeRemainEl.innerText = "Time Remaining: 00:" + timer;
    if (timer === 0) {
      clearInterval(myInterval);
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
