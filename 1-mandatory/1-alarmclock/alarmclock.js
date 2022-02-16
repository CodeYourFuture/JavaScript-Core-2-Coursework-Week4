function setAlarm() {
  const btnSet = document.createElement("set");
  const MyTimeremaining = document.getElementById("timeRemaining");
  const MyInputAlarmSet = document.getElementById("alarmSet");
  let myDate = new Date("2017-01-01 00:00:00");
  myDate.setSeconds(MyInputAlarmSet.value);
  MyTimeremaining.innerHTML =
    "Time Remaining : " + myDate.toString().substring(19, 24);
  let myInterval = setInterval(() => {
    myDate.setSeconds(myDate.getSeconds() - 1);
    MyTimeremaining.innerHTML =
      "Time Remaining" + myDate.toString().substring(19, 24);
    if (myDate.toString().substring(19, 24) === "00:00") {
      playAlarm();
      clearInterval(myInterval);
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
