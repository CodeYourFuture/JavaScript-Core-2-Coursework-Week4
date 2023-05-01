function setAlarm() {
  const timeRemaining = document.querySelector("#timeRemaining");
  const input = document.querySelector("#alarmSet");
  let inputValue = Number(input.value);
  document.getElementById("set").addEventListener("click", () => {
    clearInterval(countdown);
  });
  let countdown = setInterval(function () {
    let seconds = inputValue % 60;
    let minutes = Math.floor(inputValue / 60);
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (inputValue === 0) {
      playAlarm();
      clearInterval(countdown);
    }
    timeRemaining.innerHTML = `Time Remaining: ${minutes}:${seconds}`;
    inputValue--;
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
