let intervalId;

function setAlarm() {
  let alarmSet = document.getElementById("alarmSet").value;
  let timeRemaining = document.getElementById("timeRemaining");
  let minutes = parseInt(alarmSet);
  let seconds = 0;

  timeRemaining.innerHTML = `Time Remaining: ${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  intervalId = setInterval(() => {
    if (minutes === 0 && seconds === 0) {
      clearInterval(intervalId);
      playAlarm();
      return;
    }

    if (seconds === 0) {
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }

    timeRemaining.innerHTML = `Time Remaining: ${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }, 1000);
}

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", setAlarm);
  document.getElementById("stop").addEventListener("click", () => {
    clearInterval(intervalId);
    pauseAlarm();
  });
}

window.onload = setup;

// DO NOT EDIT BELOW HERE

// var audio = new Audio("alarmsound.mp3");

// function setup() {
//   document.getElementById("set").addEventListener("click", () => {
//     setAlarm();
//   });

//   document.getElementById("stop").addEventListener("click", () => {
//     pauseAlarm();
//   });
// }

// function playAlarm() {
//   audio.play();
// }

// function pauseAlarm() {
//   audio.pause();
// }

// window.onload = setup;
