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
    } 
  }, 1250);
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
