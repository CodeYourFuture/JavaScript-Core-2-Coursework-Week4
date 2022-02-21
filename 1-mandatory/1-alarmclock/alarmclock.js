let setTimeRemain = (value) => {
  let timeRemaining = document.getElementById("timeRemaining");
  var hours = Math.floor(value / 60);
  var minutes = value % 60;
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

const interval = (inputValue) => {
  let timer_interval = setInterval(() => {
    inputValue = inputValue - 1;
    setTimeRemain(inputValue);
    setBackgroundColor();
    document.getElementById("alarmSet").value = "";
    document.getElementById("alarmSet").disabled = true;
    if (inputValue === 0) {
      clearInterval(timer_interval);
      playAlarm();
      document.body.style.backgroundColor = "#1c1c1c";
      document.getElementById("alarmSet").disabled = false;
    }
  }, 1000);
};

function setAlarm() {
  let inputValue = document.getElementById("alarmSet").value;
  setTimeRemain(inputValue);
  interval(inputValue);
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
