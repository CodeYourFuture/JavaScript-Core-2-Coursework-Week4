let isPaused = false
function setAlarm() {
  const timeRemaining = document.getElementById("timeRemaining");
  const alarmSetNum = document.getElementById("alarmSet").value;
  timeRemaining.innerText = `Time Remaining: 00:${alarmSetNum}`;
  let counter = 0;
  const count = setInterval(() => {
    if(isPaused) return
    counter++;
    const timer = alarmSetNum - counter;
    const displayNum = timer.toString().padStart(2,"0")
    timeRemaining.innerText = `Time Remaining: 00:${displayNum}`;
    if (timer <= 0) {
      clearInterval(count);
      playAlarm();
    }
  }, 1000);
  return timeRemaining;
}

// setInterval(setAlarm, 1000);

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });

  document.getElementById("pause").addEventListener("click", ()=> {
    isPaused = !isPaused
  })
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
