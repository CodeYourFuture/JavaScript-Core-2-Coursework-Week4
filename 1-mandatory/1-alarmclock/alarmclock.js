function setAlarm() {
  // link to input field
  let inputValue = document.querySelector("#alarmSet").value;
  //link to title
  let timeOnScreen = document.querySelector("#timeRemaining");
  // link to stop button
  let stopAlarm = document.querySelector("#stop");
  // link to 'Set Alarm' button
  let setAlarmBtn = document.querySelector("#set");
  // format input value so = xx:xx
    let seconds = inputValue;
    let minutes = 0;
    if (inputValue > 59) {
      minutes = Math.floor(inputValue / 60);
      seconds = inputValue % 60;
    }
  // add event listener ('click') to button and create function to display input value on screen
  setAlarmBtn.addEventListener("click", () => {
  // set interval so displayed value decreases by 1 every second
    setInterval(function() {
    timeOnScreen.innerHTML = `Time Remaining: ${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    if (seconds > 0) {
      seconds--
  // when input value reaches 0, play alarm
    } else if (seconds === 0 && minutes > 0) {
      minutes--;
      seconds = 59;
    } else {
      playAlarm()
    }
  }, 1000);
  });
};

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
