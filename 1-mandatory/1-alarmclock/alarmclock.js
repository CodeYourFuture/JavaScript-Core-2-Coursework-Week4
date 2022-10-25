let isPaused = false;
let timer;
let mini;
let seconds;

function setAlarm() {
  document.querySelector("body").style.backgroundColor = "white";
  let timeRemaining = document.getElementById("timeRemaining");
  let alarmSet = document.getElementById("alarmSet").value * 60;

  if (alarmSet > 0) {
    timer = setInterval(() => {
      if (!isPaused) {
        alarmSet--;
        mini = Math.floor(alarmSet / 60);
        seconds = alarmSet % 60;
        seconds = seconds < 10 ? `0${seconds}` : seconds;
        mini = mini < 10 ? `0${mini}` : mini;
        timeRemaining.textContent = `Time Remaining: ${mini}:${seconds}`;
      }
      if (mini == 0 && seconds == 0) {
        playAlarm();
        clearInterval(timer);
        timeRemaining.textContent = `Time Remaining: 00:00`;
        document.querySelector("body").style.backgroundColor = "red";
        // timeRemaining.textContent = `Time Remaining: 00:00`;
      }
    }, 1000);
  }
  document.getElementById("alarmSet").value = "";
}
//💫💫💫💫💫

function pauseTimer() {
  clearInterval(timer);
  timeRemaining.textContent = `Time Remaining: 00:00`;
}
document.getElementById("clear").addEventListener("click", () => {
  pauseTimer();
});
document.getElementById("pause").addEventListener("click", () => {
  isPaused = !isPaused;
});

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
    document.querySelector("body").style.backgroundColor = "white";
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
