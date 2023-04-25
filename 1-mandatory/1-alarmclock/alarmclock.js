function getTimeString(timeInSeconds) {
  let timeSeconds = 0;
  let timeMinutes = 0;
  if (timeInSeconds / 60 >= 1) {
    timeSeconds = timeInSeconds % 60;
    timeMinutes = Math.floor(timeInSeconds / 60);
  } else {
    timeSeconds = timeInSeconds;
  }
  if (timeMinutes < 10) {
    timeMinutes = `0${timeMinutes}`;
  }
  if (timeSeconds < 10) {
    timeSeconds = `0${timeSeconds}`;
  }
  return `Time Remaining: ${timeMinutes}:${timeSeconds}`;
}

function renderTime(convertedTimeString) {
  let displayTime = document.querySelector("#timeRemaining");
  displayTime.innerText = convertedTimeString;
  // console.log(convertedTimeString);
}
let counter = 1;

function setAlarm() {
  var inputTime = document.querySelector("#alarmSet").value;
  counter = 1;
  renderTime(getTimeString(inputTime));
  test(inputTime);
}
function decreaseTimeOne(timeIn) {
  var timeOut = timeIn - counter;
  counter++;
  return timeOut;
}

function test(variable1) {
  const changeTimeID = setInterval(function () {
    timeNow = decreaseTimeOne(variable1);
    renderTime(getTimeString(timeNow));
    if (counter > variable1) {
      clearInterval(changeTimeID);
      console.log("snap!");
      playAlarm();
      timer = false;
    }
  }, 1000);
}

function log() {
  console.log("Hi");
}

// let setBtn = document.querySelector("#set");
// setBtn.addEventListener("click", log);

// function test() {
//   inputText = document.querySelector("#alarmSet");
//   alert(inputText.value);
// }

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
