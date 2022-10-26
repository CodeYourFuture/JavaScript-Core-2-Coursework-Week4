function setAlarm() {
  // When the `Set Alarm` button is clicked, get the value of the input field
  //When you have the input field value, set the title to the correct value
// Work out how to update the `Time Remaining` title every second
// When the remaining time left is 0, play the alarm sound

  let timeSetInput = document.querySelector("#alarmSet");
  let remainingTime = document.querySelector("#timeRemaining");
  let counter = timeSetInput.value;

  let timer = setInterval(() => {
    const minutes = Math.floor(counter / 60);
    const minFormat = minutes < 10 ? `0${minutes}` : minutes;
    const seconds = counter % 60;
    const secFormat = seconds < 10 ? `0${seconds}` : seconds;
    remainingTime.textContent = `Time Remaining : ${minFormat}:${secFormat}`;
    counter--;

    if (counter < 0) {
      clearInterval(timer);
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
