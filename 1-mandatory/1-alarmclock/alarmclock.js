function setAlarm() {
  let timeRemaining = document.getElementById("timeRemaining");
  let input = document.getElementById("alarmSet");
  let inputValue = input.value;
  countdown = setInterval(() => {
    let minutes = Math.floor(inputValue / 60);  
    let seconds = inputValue % 60;
    timeRemaining.innerText = `Time remaining: ${minutes}:${seconds}`;
    if (inputValue === 0) {
      playAlarm();
      clearInterval(countdown);
      timeRemaining.innerText = `Time remaining: ${minutes}:${seconds}`;
    }
    inputValue--;
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
