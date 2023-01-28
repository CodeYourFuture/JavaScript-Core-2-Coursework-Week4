// 1. When the `Set Alarm` button is clicked, get the value of the input field
// 2. When you have the input field value, set the title to the correct value
// 3. Work out how to update the `Time Remaining` title every second
// 4. When the remaining time left is 0, play the alarm sound
// let remainingTime;
// let intervalId;
// function setAlarm() {
//   let setTimeValue = document.getElementById("alarmSet").value;

//   remainingTime = setTimeValue;
//   let minutes = Math.floor(remainingTime / 60);
//   let seconds = remainingTime % 60;

//   document.getElementById("timeRemaining").innerText = `Time Remaining: ${
//     minutes < 10 ? "0" : ""
//   } : ${seconds < 10 ? "0" : ""}${seconds}`;

//   intervalId = setInterval(() => {
//     if (remainingTime > 0) {
//       remainingTime--;
//       let minutes = Math.floor(remainingTime / 60);
//       let seconds = remainingTime % 60;
//       document.getElementById("timeRemaining").innerText = `Time Remaining: ${
//         minutes < 10 ? "0" : ""
//       } : ${seconds < 10 ? "0" : ""}${seconds}`;
//     } else {
//       clearInterval(intervalId);
//       playAlarm();
//     }
//   }, 1000);
// }

//Another way of writing this task

let timeRemaining = 0;

function renderTimeRemaining() {
  let minutes = Math.floor(timeRemaining / 60);
  let seconds = timeRemaining % 60;
  const timeRemainingElement = document.querySelector("#timeRemaining");
  timeRemainingElement.innerText = `Time Remaining: ${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;
}

renderTimeRemaining();

function setAlarm() {
  const newTime = document.querySelector("#alarmSet").value;
  timeRemaining = newTime;
  renderTimeRemaining();
  const interval = setInterval(() => {
    timeRemaining--;
    renderTimeRemaining();
    if (timeRemaining <= 0) {
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
