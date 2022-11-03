function setAlarm() {
  const setAlarmButton = document.querySelector("#set");
  let displayTime = document.querySelector("#second");
  document.body.style.backgroundColor = "lightblue";
  setAlarmButton.addEventListener("click", function () {
    let seconds = document.querySelector("#alarmSet").value;

    const countdown = setInterval(() => {
      seconds--;
      displayTime.innerHTML = seconds;
      console.log(seconds);

      if (seconds === 0) {
        playAlarm();
        document.body.style.backgroundColor = "lightgreen";
        clearInterval(countdown);
      }
    }, 1000);
  });
}

setAlarm();

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
