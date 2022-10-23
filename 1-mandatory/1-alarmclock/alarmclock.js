let countDownInterval;
let flashingInterval;
let flash = 0;
let seconds;
let paused = 0;

function setAlarm() {
  const timeRemaining = document.querySelector("#timeRemaining");
  const inputAlarmSet = document.querySelector("#alarmSet");
  seconds = inputAlarmSet.value;

  timeRemaining.innerText = `Time Remaining: 00:${seconds}`;

  countDownInterval = setInterval(() => {
    seconds--;
    timeRemaining.innerText = `Time Remaining: 00:${seconds}`;

    if (seconds === 0) {
      playAlarm();
      clearInterval(countDownInterval);

      flashingInterval = setInterval(() => {
        document.body.style.backgroundColor = flash === 0 ? "black" : "white";
        flash = flash === 0 ? 1 : 0;
      }, 100);
    }
  }, 1000);
}

document.querySelector("#pause").addEventListener("click", () => {
  if (paused === 0) {
    paused = 1;

    clearInterval(countDownInterval);
  } else {
    paused = 0;

    countDownInterval = setInterval(() => {
      seconds--;
      timeRemaining.innerText = `Time Remaining: 00:${seconds}`;

      if (seconds === 0) {
        playAlarm();
        clearInterval(countDownInterval);

        flashingInterval = setInterval(() => {
          document.body.style.backgroundColor = flash === 0 ? "black" : "white";
          console.log(flash);
          flash = flash === 0 ? 1 : 0;
        }, 100);
      }
    }, 1000);
  }
});

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    clearInterval(flashingInterval);
    document.body.style.backgroundColor = "white";
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
  clearInterval(countDownInterval);
}

window.onload = setup;
