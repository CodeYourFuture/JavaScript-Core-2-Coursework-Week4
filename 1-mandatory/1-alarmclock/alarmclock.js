function setAlarm() {
  const timeRemaining = document.querySelector("#timeRemaining");
  const inputAlarmSet = document.querySelector("#alarmSet");
  let seconds = inputAlarmSet.value;

  timeRemaining.innerText = `Time Remaining: 00:${seconds}`;

  const countDown = setInterval(() => {
    seconds--;
    timeRemaining.innerText = `Time Remaining: 00:${seconds}`;

    console.log(seconds);

    if (seconds === 0) {
      playAlarm();
      clearInterval(countDown);
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
