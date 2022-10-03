function setAlarm() {
  var alarmSetValue = document.querySelector("#alarmSet").value;
  let minute = Math.floor(alarmSetValue / 60);
  let seconds = alarmSetValue % 60;
  let timeRemaining = document.querySelector("#timeRemaining");
  timeRemaining.innerHTML = `Time Remaining: ${minute}:${seconds}`;
  setInterval(function () {
    alarmSetValue = alarmSetValue - 1;
    if (alarmSetValue >= 0) {
      let minute = Math.floor(alarmSetValue / 60);
      let seconds = alarmSetValue % 60;
      let timeRemaining = document.querySelector("#timeRemaining");
      timeRemaining.innerHTML = `Time Remaining: ${minute}:${seconds}`;
      if (alarmSetValue === 0) {
        playAlarm();
        let body = document.querySelector("body");
        body.style.backgroundColor = "red";
      }
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
    let body = document.querySelector("body");
    body.style.backgroundColor = "white";
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
