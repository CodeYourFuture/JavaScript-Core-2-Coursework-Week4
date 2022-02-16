const bodyEl = document.querySelector("body");
const timeRemaining = document.getElementById("timeRemaining");
const alarmSetInput = document.getElementById("alarmSet");
const pauseAlarmBtn = document.getElementById("pause");
//pauseAlarmBtn.innerHTML = "Pause Alarm";
let BgInterval;
let timerInterval;

function setAlarm() {
  let setTime = alarmSetInput.value;

  timeRemaining.innerText = formatSetTime(setTime);
  bodyEl.style.backgroundColor = "rgb(256,256,256)";
  clearInterval(BgInterval);

  timerInterval = setInterval(() => {
    setTime = setTime - 1;
    timeRemaining.innerText = formatSetTime(setTime);

    if (setTime === 0) {
      clearInterval(timerInterval);
      setBackgroundColor();
      playAlarm();
    }
  }, 1000);
}

function setBackgroundColor() {
  BgInterval = setInterval(() => {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    bodyEl.style.backgroundColor = "rgb(" + x + "," + y + "," + z + ")";
  }, 1000);
}

function formatSetTime(timer) {
  const second = timer % 60;
  const minute = Math.floor(timer / 60);
  return `Time Remaining: ${minute > 9 ? minute : "0" + minute}:${
    second > 9 ? second : "0" + second
  }`;
}

// function pauseAlarm() {
//   console.log(pauseAlarmBtn.innerHTML);
//   if ((pauseAlarmBtn.innerHTML = "Pause Alarm")) {
//     pauseAlarmBtn.innerHTML = "Continue";
//     clearInterval(timerInterval);
//   } else if ((pauseAlarmBtn.innerHTML = "Continue")) {
//     pauseAlarmBtn.innerHTML = "Pause Alarm";
//     console.log("hi");
//   }
//   console.log(pauseAlarmBtn.innerHTML);
// }
// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    stopAlarm();
  });

  // pauseAlarmBtn.addEventListener("click", () => {
  //   pauseAlarm();
  // });
}

function playAlarm() {
  audio.play();
}

function stopAlarm() {
  audio.pause();
  clearInterval(BgInterval);
  clearInterval(timerInterval);
  bodyEl.style.backgroundColor = "rgb(256,256,256)";
  timeRemaining.innerHTML = "Time Remaining: 00:00";
  alarmSetInput.value = "";
}

window.onload = setup;
