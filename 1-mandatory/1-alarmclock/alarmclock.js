/*
1. When the `Set Alarm` button is clicked, get the value of the input field
2. When you have the input field value, set the title to the correct value
3. Work out how to update the `Time Remaining` title every second
4. When the remaining time left is 0, play the alarm sound
*/
function setAlarm() {
  const inputField = document.getElementById("alarmSet");
  let timer = inputField.value;

  const heading = document.getElementById("timeRemaining");

  const myInterval = setInterval(() => {
    timer = timer - 1;
    heading.innerText = `Time Remaining: 00:${timer}`;
    if (timer === 0) {
      clearInterval(myInterval);
      playAlarm();
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
