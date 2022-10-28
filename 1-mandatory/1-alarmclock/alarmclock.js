function setAlarm() {

  let setTimeInput = document.getElementById("alarmSet").value;
  let timeRemaining = document.getElementById("timeRemaining");

  let minutes = Math.floor(setTimeInput / 60);
  let seconds = setTimeInput - minutes * 60;

  timeRemaining.innerHTML = `Time Remaining: ${
    minutes < 10 ? "0" + minutes : minutes
  }:${seconds < 10 ? "0" + seconds : seconds}`;


  let everySecond = setInterval(() => {
    if (setTimeInput > 0) {
      setTimeInput -= 1;
      let minutes = Math.floor(setTimeInput / 60);
      let seconds = setTimeInput - minutes * 60;
      timeRemaining.innerHTML = `Time Remaining: ${
        minutes < 10 ? "0" + minutes : minutes
      }:${seconds < 10 ? "0" + seconds : seconds}`;
    }

    if (setTimeInput == 0) {
      clearInterval(everySecond);
      playAlarm();
    }
  }, 1000);
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
