let myTimer;
let myColor;
let body = document.querySelector("body");
let stopBtn = document.querySelector("#stop");
let pauseBtn = document.createElement("button");
let timeRemaining = document.querySelector("#timeRemaining");
function timeToString(minutes, seconds) {
  let paddedMinutes = String(minutes).padStart(2, 0);
  let paddedSeconds = String(seconds).padStart(2, 0);
  timeRemaining.textContent = `Time Remaining: ${paddedMinutes}:${paddedSeconds}`;
}

function setAlarm() {
  clearInterval(myTimer);
  clearInterval(myColor);
  body.style.backgroundColor = "transparent";
  let timeInput = document.querySelector("#alarmSet");

  let seconds;
  let minutes;

  if (
    timeInput.value === "" &&
    timeRemaining.textContent != "Time Remaining: 00:00"
  ) {
    seconds = timeRemaining.textContent[
      timeRemaining.textContent.length - 2
    ].concat(timeRemaining.textContent[timeRemaining.textContent.length - 1]);
    minutes = timeRemaining.textContent[
      timeRemaining.textContent.length - 5
    ].concat(timeRemaining.textContent[timeRemaining.textContent.length - 4]);
  } else if (timeInput === 0 || timeInput.value === "") {
    return;
  } else {
    minutes = Math.floor(timeInput.value / 60);
    seconds = timeInput.value % 60;
  }
  timeToString(minutes, seconds);
  function timer() {
    seconds--;
    if (seconds < 0) {
      minutes--;
      seconds = 59;
    }
    if (seconds === 0 && minutes === 0) {
      clearInterval(myTimer);
      playAlarm();
      function color() {
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        body.style.backgroundColor = "#" + randomColor;
      }
      myColor = setInterval(color, 1000);
      setTimeout(() => {
        clearInterval(myColor);
      }, 20000);
    }
    timeToString(minutes, seconds);
  }
  myTimer = setInterval(timer, 1000);
  timer();
  timeInput.value = "";
}
pauseBtn.innerHTML = "Pause Alarm";
pauseBtn.setAttribute("type", "button");
stopBtn.after(pauseBtn);

pauseBtn.addEventListener("click", () => {
  pauseBtn.classList.toggle("paused");
  if (pauseBtn.classList.contains("paused")) {
    stopAlarm();
  } else {
    setAlarm();
  }
});

function stopAlarm() {
  clearInterval(myTimer);
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
