let myTimer;
let myColor;
let body = document.querySelector("body");
let stopBtn = document.querySelector("#stop");
let pauseBtn = document.createElement("button");
let timeRemaining = document.querySelector("#timeRemaining");

pauseBtn.innerHTML = "Pause Alarm";
pauseBtn.id = "pauseBtn";
pauseBtn.setAttribute("type", "button");
stopBtn.after(pauseBtn);

function timeToString(minutes, seconds) {
  let paddedMinutes = String(minutes).padStart(2, 0);
  let paddedSeconds = String(seconds).padStart(2, 0);
  timeRemaining.textContent = `Time Remaining: ${paddedMinutes}:${paddedSeconds}`;
}

function setAlarm() {
  console.log();
  let timeInput = document.querySelector("#alarmSet");
  if (
    arguments.callee.caller.toString().includes("() =>") &&
    timeInput.value != "") {
    clearInterval(myTimer);
  }
  clearInterval(myColor);
  body.style.backgroundColor = "transparent";
  

  let seconds;
  let minutes;
  if (
    arguments.callee.caller.toString().includes("paused") &&
    timeInput.value === "" &&
    timeRemaining.textContent != "Time Remaining: 00:00"
  ) {
    let values = timeRemaining.textContent.split(":");
    minutes = values[1].trim();
    seconds = values[2];
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

function paused() {
  pauseBtn.classList.toggle("paused");
  if (pauseBtn.classList.contains("paused")) {
    stopAlarm();
    pauseBtn.innerHTML = "Continue Alarm";
  } else {
    pauseBtn.innerHTML = "Pause Alarm";
    setAlarm();
  }
}
pauseBtn.addEventListener("click", paused);

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
