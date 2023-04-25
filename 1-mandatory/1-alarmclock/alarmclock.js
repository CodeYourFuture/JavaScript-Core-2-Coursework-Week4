function setAlarm() {
  let alarmSet = document.querySelector("#alarmSet").value;
  let set = document.querySelector("#set");
  let stop = document.querySelector("#stop");
  let timeRemaining = document.querySelector("#timeRemaining");

  timeRemaining.innerHTML = `Time Remaining: ${alarmSet}:00`;
  let count = setInterval(() => {
    let timeLeft = timeRemaining.innerHTML.split(" ")[2].split(":");
    let minutes = parseInt(timeLeft[0]);
    let seconds = parseInt(timeLeft[1]);

    if (minutes === 0 && seconds === 0) {
      clearInterval(count);
      playAlarm();
      document.body.style.backgroundColor = "red";
    } else if (seconds === 0) {
      minutes -= 1;
      seconds = 59;
    } else {
      seconds -= 1;
    }

    timeRemaining.innerHTML =
      "Time Remaining: " +
      (minutes < 1 ? "0" : "") +
      minutes +
      ":" +
      (seconds < 1 ? "0" : "") +
      seconds;
  }, 1000);

  stop.addEventListener("click", function () {
    clearInterval(count);
    alarmSet.valid = "";

    pauseAlarm();
    timeRemaining.innerHTML = "Time Remaining: 00:00";
    document.body.style.backgroundColor = "white";
  });
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
