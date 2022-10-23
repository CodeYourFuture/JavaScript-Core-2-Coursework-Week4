const timeRemaining = document.getElementById("timeRemaining");
const alarmSet = document.getElementById("alarmSet");
const stop = document.getElementById("stop");
let isTimerOff = true;

function setAlarm() {
  let timeValue = alarmSet.value;
  if (timeValue && /^[0-9]+$/g.test(timeValue) && timeValue > 1 && isTimerOff) {
    isTimerOff = false;
    timeRemaining.innerText = `Time Remaining: ${getCorrectTimeFormat(
      timeValue
    )}`;
    // interval 1 second to show count down
    const secondCount = setInterval(() => {
      timeValue--;
      timeRemaining.innerText = `Time Remaining: ${getCorrectTimeFormat(
        timeValue
      )}`;
      if (timeValue < 1) {
        playAlarm();
        clearInterval(secondCount);
        document.body.style.backgroundColor = "red";
        isTimerOff = true;
      }
    }, 1000);
  }
  alarmSet.value = "";
  // Stop the alarm clock
  stop.addEventListener("click", () => window.location.reload());
}

// This function format the seconds to min and sec
function getCorrectTimeFormat(timeValue) {
  const addZeroToTime = (num) => (num < 10 ? "0" + num : num);
  const editedTime =
    timeValue < 60
      ? `00:${addZeroToTime(timeValue)}`
      : `${addZeroToTime(Math.floor(timeValue / 60))}:${addZeroToTime(
          timeValue % 60
        )}`;

  return editedTime;
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
