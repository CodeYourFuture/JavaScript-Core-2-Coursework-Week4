function setAlarm() {
  let inputVal = document.getElementById("alarmSet").value;
  let titleEl = document.querySelector("#timeRemaining");
  let time = splitTime(inputVal);
  titleEl.innerText = `Time Remaining: ${formatVal(time.minute)}:${formatVal(
    time.second
  )}`;

  let refreshIntervalId = setInterval(() => {
    if (inputVal > 0) {
      inputVal--;
      time = splitTime(inputVal);
      titleEl.innerText = `Time Remaining: ${formatVal(
        time.minute
      )}:${formatVal(time.second)}`;
    }
    if (inputVal === 0) {
      inputVal = null;
      playAlarm();
      clearInterval(refreshIntervalId);
    }
  }, 1000);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");
function splitTime(inputVal) {
  let minute = Math.floor(inputVal / 60);
  let second = inputVal % 60;
  return {
    minute: minute,
    second: second,
  };
}

function formatVal(val) {
  return val.toString().padStart(2, "0");
}
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
