function setAlarm() {
  let timeDisplay = document.getElementById("timeRemaining");
  let alarmValue = document.getElementById("alarmSet").value;
  let extraZero = "";

  if (alarmValue > 0 && parseInt(alarmValue) === eval(alarmValue)) {
    if (alarmValue < 10) extraZero = "0";
    const timeInterval = setInterval(function () {
      updateTime();
    }, 1000);
  }
  function updateTime() {
    timeDisplay.innerHTML = `Time Remaining: 00:${extraZero}${alarmValue}`;
    if (alarmValue === 0) {
      playAlarm();
    } else {
      alarmValue = alarmValue - 1;
    }
  }
}

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
