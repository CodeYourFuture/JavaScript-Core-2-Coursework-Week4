function setAlarm() {
  // Access to input
  const alermSetInput = document.querySelector("#alarmSet");
  // Access to span for showing timer
  const timeRemaining = document.querySelector(".timeRange");
  // turn string value to number
  let totalSeconds = Number(alermSetInput.value);

  // Convert number to a form of 00:00
  let convertSecondsToMinutesAndSeconds = function (totalSeconds) {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    return (
      (minutes < 10 ? "0" : "") +
      minutes +
      ":" +
      (seconds < 10 ? "0" : "") +
      seconds
    );
  };

  let timer = convertSecondsToMinutesAndSeconds(totalSeconds);
  // Show timer in time remaining
  timeRemaining.textContent = timer;
  document.body.style.backgroundColor = "green";

  // Set interval for timer
  const intervalID = setInterval(() => {
    decrementByOneSec();
    if (timer === "00:00") {
      document.body.style.backgroundColor = "red";
      // Deactive interval
      clearInterval(intervalID);
      // Active alarm
      playAlarm();
    }
  }, 1000);

  // Decrease the timer by one second
  function decrementByOneSec() {
    let [minutes, seconds] = timer.split(":");
    minutes = parseInt(minutes);
    seconds = parseInt(seconds);

    if (seconds === 0) {
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }

    timer = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
    timeRemaining.textContent = timer;
  }
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
    document.body.style.backgroundColor = "white";
    document.querySelector("#alarmSet").value = "";
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
