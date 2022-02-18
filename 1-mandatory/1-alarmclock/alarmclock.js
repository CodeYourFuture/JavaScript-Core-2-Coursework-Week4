function setAlarm() {
  let timeRemaining = document.querySelector("#timeRemaining");
  let alarmSet = document.querySelector("#alarmSet");
  let alarmDisplay = alarmSet.value;

  setInterval(() => {
    if (alarmDisplay > 0) {
      timeRemaining.innerText = `Time Remaining: ${alarmDisplay--}`;
      if (alarmDisplay === 0) {
        playAlarm();
      }
    }
  }, 1000);

  alarmSet.value = "";
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
