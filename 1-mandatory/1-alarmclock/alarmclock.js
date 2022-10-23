let isPaused = false;
let timer;
let timeRemaining = document.getElementById("timeRemaining");
function setAlarm() {
  document.querySelector("body").style.backgroundColor = "white";
  let alarmSet = document.getElementById("alarmSet").value * 60;
  if (alarmSet === "" || isNaN(alarmSet) || alarmSet < 0) {
    return;
  } else {
    timer = setInterval(() => {
      if (!isPaused) {
        alarmSet--;
        let mini = Math.floor(alarmSet / 60);
        let seconds = alarmSet % 60;

        seconds = seconds < 10 ? `0${seconds}` : seconds;
        mini = mini < 10 ? `0${mini}` : mini;
        timeRemaining.textContent = `Time Remaining: ${mini}:${seconds}`;
      }
      if (alarmSet === 0) {
        playAlarm();
        clearInterval(timer);
        timeRemaining.textContent = `Time Remaining: 00:00`;
        document.querySelector("body").style.backgroundColor = "red";
        // document.getElement("body").style.color = "white";
      }
    }, 1000);
  }
}

function pauseTimer(e) {
  // e.preventDefault();
  clearInterval(timer);
  timeRemaining.textContent = `Time Remaining: 00:00`;
}
document.getElementById("clear").addEventListener("click", () => {
  pauseTimer();
});
document.getElementById("pause").addEventListener("click", () => {
  isPaused = !isPaused;
});

document.getElementById("reset").addEventListener("click", () => {
  isPaused = false;
});

pause;
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
