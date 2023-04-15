function setAlarm() {
  const heading = document.querySelector("#timeRemaining");
  const input = document.querySelector("#alarmSet");
  const button = document.querySelector("#set");

  let timeLeft = parseInt(input.value);
  let intervalId = setInterval(() => {
    timeLeft--;
    const minutes = Math.floor(timeLeft / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (timeLeft % 60).toString().padStart(2, "0");
    heading.innerText = `Time Remaining: ${minutes}:${seconds}`;
    if (timeLeft === 0) {
      clearInterval(intervalId);
      playAlarm();
    }
  }, 1000);

  button.disabled = true;
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
