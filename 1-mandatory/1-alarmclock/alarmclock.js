const setAlarm = () => {
  let timeRemainingEl = document.getElementById("timeRemaining");
  let inputTime = document.getElementById("alarmSet").value;
  const outputFormat = (totalSeconds) => {
    let m = Math.floor(totalSeconds / 60);
    let s = totalSeconds % 60;
    s = s < 10 ? "0" + s : s;
    m = m < 10 ? "0" + m : m;
    timeRemainingEl.innerText = `Time Remaining: ${m} : ${s}`;
  };
  outputFormat(inputTime);
  document.getElementById("alarmSet").value = null;
  const counter = () => {
    inputTime--;
    if (inputTime <= 0) {
      playAlarm();
      clearInterval(countDown);
    }
    outputFormat(inputTime);
  };
  let countDown = setInterval(counter, 1000);
};

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
