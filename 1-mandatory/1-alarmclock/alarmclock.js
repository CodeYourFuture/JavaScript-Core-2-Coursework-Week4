const timeLeft = document.querySelector("#timeRemaining");
const input = document.querySelector("#alarmSet");

let countdownInterval;
let remainingTime;

function setAlarm() {
  const inputValue = parseInt(input.value, 10);

  if (!isNaN(inputValue) && inputValue > 0) {
    let countdown = remainingTime || inputValue;
    countdownInterval = setInterval(() => {
      const minutes = Math.floor(countdown / 60);
      let seconds = countdown % 60;
      seconds = seconds < 10 ? `0${seconds}` : seconds;
      timeLeft.textContent = `Time Remaining: ${minutes}:${seconds}`;
      countdown--;
      
      if (countdown < 0) {
        clearInterval(countdownInterval);
        changeColor();
        playAlarm();
      }
    }, 1000)
  }
}
let intervalId;

function changeColor () {
  if (!intervalId) {
    intervalId = setInterval(() => {
      document.body.className = document.body.className === "go"? "stop" : "go";
    }, 1000)
  }
}

document.querySelector("#pause").addEventListener("click", () => {
  clearInterval(countdownInterval);
  remainingTime = parseInt(timeLeft.textContent.split(":")[1], 10) * 60 + parseInt(timeLeft.textContent.split(":")[2], 10);
});

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
  clearInterval(intervalId);
  intervalId = null;
}

window.onload = setup;
