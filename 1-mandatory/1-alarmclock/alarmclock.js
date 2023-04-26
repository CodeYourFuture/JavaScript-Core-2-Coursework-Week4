function displayRemainingTime(totalSeconds) {
  let timeRemaining = document.getElementById("timeRemaining");
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  seconds = seconds.toString().padStart(2, "0");


  timeRemaining.textContent = "Time Remaining:" + minutes + ":" + seconds;
  // timeRemaining.textContent = "Time Remaining  " + minutes + ":" + seconds;

  if (minutes < 10) {
    timeRemaining.textContent =
      "Time Remaining: " + "0" + minutes + ":" + seconds;
  } else if (seconds < 10) {
    timeRemaining.textContent =
      "Time Remaining: " + "0" + minutes + ":" + "0" + seconds;
  } else {
    timeRemaining.textContent = "Time Remaining: " + minutes + ":" + seconds;
  }
}

function setAlarm() {
  document.body.style.backgroundColor = "white";

  let inputTime = document.getElementById("alarmSet");
  displayRemainingTime(inputTime.value);
  let totalSeconds = inputTime.value;
  displayRemainingTime(totalSeconds);

  let intervalId = setInterval(() => {
    totalSeconds -= 1;
    displayRemainingTime(totalSeconds);
    if (totalSeconds === 0) {
      clearInterval(intervalId);
      playAlarm();
    }
  }, 1000);
}


function playAlarm() {
  audio.play();
  document.body.style.backgroundColor = "red";
  let intervalId = setInterval(() => {
    let color = document.body.style.backgroundColor;
    document.body.style.backgroundColor = color === "red" ? "white" : "red";
  }, 500);
  setTimeout(() => {
    clearInterval(intervalId);
    document.body.style.backgroundColor = ""; // reset the background color
  }, 5000); // stop flashing after 5 seconds
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
