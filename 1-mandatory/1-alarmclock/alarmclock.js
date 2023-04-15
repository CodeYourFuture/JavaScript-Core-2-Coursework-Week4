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
}

document.getElementById("stop").addEventListener("click", function () {
  clearInterval(intervalId);
});

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
