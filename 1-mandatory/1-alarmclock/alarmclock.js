function setAlarm() {
  let timeDisplay = document.getElementById("timeRemaining");
  let alarmInput = document.getElementById("alarmSet").value;

  const interval = setInterval(() => {
    let mm = Math.floor(alarmInput / 60);
    let ss = alarmInput % 60;

    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;

    timeDisplay.innerText = `Time Remaining: ${mm}:${ss}`;

    alarmInput--;

    if (alarmInput < 0) {
      clearInterval(interval);
      playAlarm();
      let colours = ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"];

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
