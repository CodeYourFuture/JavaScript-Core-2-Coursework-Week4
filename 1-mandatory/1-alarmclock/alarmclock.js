function setAlarm() {
  const inputValue = document.getElementById("alarmSet");
  const timeRemaining = document.getElementById("timeRemaining");
  let minuteCounter = Math.floor(inputValue.value / 60);
  let secondCounter = inputValue.value - Math.floor(inputValue.value / 60) * 60;
  counter();

  function counter() {
    if (minuteCounter == 0 && secondCounter == 0) {
      timeRemaining.innerText = `Time Remaining: 0${minuteCounter}:0${secondCounter}`;
      clearInterval(repeatCounter);
      playAlarm();
    } else if (minuteCounter == 0 && secondCounter > 0) {
      const formattedSeconds =
        secondCounter < 10 ? `0${secondCounter}` : secondCounter;
      timeRemaining.innerText = `Time Remaining: 0${minuteCounter}:${formattedSeconds}`;
      secondCounter--;
    } else if (minuteCounter > 0) {
      if (secondCounter == 0) {
        minuteCounter--;
        secondCounter = 59;
      }
      const formattedMinutes =
        minuteCounter < 10 ? `0${minuteCounter}` : minuteCounter;
      const formattedSeconds =
        secondCounter < 10 ? `0${secondCounter}` : secondCounter;
      timeRemaining.innerText = `Time Remaining: ${formattedMinutes}:${formattedSeconds}`;
      secondCounter--;
    }
  }

  const repeatCounter = setInterval(counter, 1000);
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
  // clearInterval(repeatCounter); // Clear the interval using the repeatCounter variable
  audio.pause();
}

window.onload = setup;
