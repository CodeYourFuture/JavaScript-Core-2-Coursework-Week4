let setTimeRemain = (inputValue) => {
  let timeRemaining = document.getElementById("timeRemaining");
  var hours = Math.floor(inputValue / 60);
  var minutes = inputValue % 60;
  timeRemaining.innerText = `Time Remaining: ${
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes === 0 ? "00" : minutes)
  }`;
};

let setBackgroundColor = () => {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
};

function setAlarm() {
  let inputValue = document.getElementById("alarmSet").value;
  setTimeRemain(inputValue);
  let timer_interval = setInterval(() => {
    inputValue = inputValue - 1;
    setTimeRemain(inputValue);
    setBackgroundColor();
    if (inputValue === 0) {
      // inputValue = "";
      clearInterval(timer_interval);
      playAlarm();
      document.body.style.backgroundColor = "#1c1c1c";
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
