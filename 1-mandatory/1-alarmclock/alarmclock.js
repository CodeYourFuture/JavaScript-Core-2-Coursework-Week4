// 1. When the `Set Alarm` button is clicked, get the value of the input field
// 2. When you have the input field value, set the title to the correct value
// 3. Work out how to update the `Time Remaining` title every second
// 4. When the remaining time left is 0, play the alarm sound

var intervalId = -1;

function setAlarm() {
  let inputValue = document.getElementById("alarmSet").value;

  const timeElement = document.querySelector("#timeRemaining");
  timeElement.innerText = `Time Remaining 00:${inputValue}`;

  function updateTimeRemaining() {
    inputValue--;
  }

  function countDownTimer() {
    if (inputValue >= 0) {
      timeElement.innerText = `Time Remaining 00:${inputValue}`;
      updateTimeRemaining();
    } else playAlarm();
  }
  intervalId = setInterval(countDownTimer, 1000);

  document.getElementById("stop").addEventListener("click", function () {
    clearInterval(intervalId);
  });
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
