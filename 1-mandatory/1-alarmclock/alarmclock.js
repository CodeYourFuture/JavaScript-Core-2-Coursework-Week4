let timeRemaining = 0;

function renderTimeRemaining() {
  let minutes = Math.floor(timRemaining / 60)
  let seconds = timeRemaining % 60;
  const timeRemainingElement = document.querySelector("#timeRemaining");
  timeRemainingElement.innerText = `Time remaining: ${minutes}:${seconds}`
}


function setAlarm() {
  const newTime = document.querySelector("#alarmSet").value;
  timeRemaining = newTime;
  renderTimeRemaining();
  setInterval(() => {
    timeRemaining--;
    renderTimeRemaining();
    if (timeRemaining <= 0) {
      clearInterval(interval);
      playAlarm()
    }
  }, 1000)
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("/alarmsound.mp3");

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
