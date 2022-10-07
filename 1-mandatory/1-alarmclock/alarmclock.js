function setAlarm() {
  let timeRemaining = document.getElementById("timeRemaining");
  let alarmSet = document.getElementById("alarmSet").ariaValueMax;

  let interval = setInterval(() => {
    let minutes = Math.floor(alarmSet / 60);
    let seconds = alarmSet % 60;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timeRemaining.innerText = `Time Remaining: ${minutes}:${seconds}`;

    alarmSet--;

    if (alarmSet < 0) {
      clearInterval(interval);
      playAlarm();
      let colours = ["blue", "red", "green", "purple", "yellow"];

      let colourInterval = setInterval(() => {
        let colourIndex = Math.floor(Math.random() * colours.length);
        backgroundSetColour = document.querySelector("body");
        backgroundSetColour.style.backgroundColor = colours[colourIndex];
      }, 1000);
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
