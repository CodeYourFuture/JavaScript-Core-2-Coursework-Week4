let seconds = null;
function setAlarm() {
  let timeRemaining = document.getElementById("timeRemaining");
  let input = document.getElementById("alarmSet");
  let inputValue = input.value;
  seconds = setInterval(() => {
    let minutes = Math.floor(inputValue / 60);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let second = inputValue % 60;
    second = second < 10 ? "0" + second : second;

    timeRemaining.innerHTML = "Time Remaining: " + minutes + ":" + second;
    inputValue--;
    if (inputValue <= 0) {
      playAlarm();
      clearInterval(seconds);
      timeRemaining.innerHTML = "Time Remaining: 00:00";
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
