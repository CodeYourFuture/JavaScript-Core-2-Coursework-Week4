function setAlarm() {
  let second = "";
  let minute = "";
  const alarmSet = document.getElementById("alarmSet");
  const changeTitle = document.getElementById("timeRemaining");
  let interval;
  function titleUpdate() {
    let sec = alarmSet.value % 60;
    if (sec < 10) {
      second = `0${sec}`;
    } else {
      second = sec;
    }

    let min = parseInt(alarmSet.value / 60);
    if (min < 10) {
      minute = `0${min}`;
    } else {
      minute = min;
    }
    changeTitle.innerHTML = `Time Remaining: ${minute}:${second}`;
  }
  function countdown() {
    titleUpdate();

    if (alarmSet.value == 0) {
      pauseAlarm();
      clearInterval(interval);
    } else {
      alarmSet.value--;
      playAlarm();
    }
  }
  countdown();
  interval = setInterval(countdown, 1000);
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
