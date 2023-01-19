function setAlarm() {
  let alarmSetVal = document.getElementById("alarmSet").value;
  let timeRemaining = document.getElementById("timeRemaining");
  let backGrInt;
  backGrColor = () =>
    setInterval(() => {
      document.body.style.backgroundColor = `rgb(${Math.random() * 256},${
        Math.random() * 256
      },${Math.random() * 256})`;
    }, 100);

  countDownInterval = setInterval(() => {
    if (alarmSetVal <= 60) {
      alarmSetVal--;
      if (alarmSetVal < 10) {
        timeRemaining.innerText = `Time Remaining: 00:0${alarmSetVal}`;
      } else timeRemaining.innerText = `Time Remaining: 00:${alarmSetVal}`;
    }

    if (alarmSetVal === 0) {
      playAlarm();
      clearInterval(countDownInterval);
      backGrInt = backGrColor();
    }

    if (alarmSetVal > 59) {
      let min = Math.floor(alarmSetVal / 60);
      let second = alarmSetVal % 60;
      alarmSetVal--;
      if (sec < 10) {
        timeRemaining.innerText = `Time Remaining: ${min}:0${sec}`;
      } else timeRemaining.innerText = `Time Remaining: ${min}:${sec}`;
    }
  }, 1000);

  document.getElementById("stop").addEventListener("click", () => {
    stopAlarm();
  });
  function stopAlarm() {
    clearInterval(countDownInterval);
    clearInterval(backGrInt);
    document.body.style.backgroundColor = "rgb(256,256,256)";
    timeRemaining.innerHTML = "Time Remaining: 00:00";
    alarmSetVal = "";
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
