function setAlarm() {
  const inputValue = document.getElementById("alarmSet");
  const timeRemaining = document.getElementById("timeRemaining");
  //if (inputValue.value >= 1) {
  let minuteCounter = Math.floor(inputValue.value / 60);
  let secondCounter = inputValue.value - Math.floor(inputValue.value / 60) * 60;
  counter();
  function counter() {
    if (minuteCounter == secondCounter) {
      timeRemaining.innerText = `Time Remaining: 0${minuteCounter}:0${secondCounter}`;

      clearInterval(repeatCounter);
      playAlarm();
      console.log(repeatCounter);
    } else if (minuteCounter == 0 && secondCounter > 0) {
      if (secondCounter < 10) {
        timeRemaining.innerText = `Time Remaining: 0${minuteCounter}:0${secondCounter}`;
        secondCounter--;
      } else {
        timeRemaining.innerText = `Time Remaining: 0${minuteCounter}:${secondCounter}`;
        secondCounter--;
      }
    } else if (minuteCounter > 0 && minuteCounter < 10) {
      if (secondCounter == 0) {
        timeRemaining.innerText = `Time Remaining: 0${minuteCounter}:0${secondCounter}`;
        minuteCounter--;
        secondCounter = 59;
      } else {
        if (secondCounter < 10) {
          timeRemaining.innerText = `Time Remaining: 0${minuteCounter}:0${secondCounter}`;
          secondCounter--;
        } else {
          timeRemaining.innerText = `Time Remaining: 0${minuteCounter}:${secondCounter}`;
          secondCounter--;
        }
      }
    } else if (minuteCounter >= 10) {
      if (secondCounter == 0) {
        timeRemaining.innerText = `Time Remaining: ${minuteCounter}:0${secondCounter}`;
        minuteCounter--;
        secondCounter = 59;
      } else {
        if (secondCounter < 10) {
          timeRemaining.innerText = `Time Remaining: ${minuteCounter}:0${secondCounter}`;
          secondCounter--;
        } else {
          timeRemaining.innerText = `Time Remaining: ${minuteCounter}:${secondCounter}`;
          secondCounter--;
        }
      }
    }
  }
  const repeatCounter = setInterval(counter, 1000);
  //}
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
