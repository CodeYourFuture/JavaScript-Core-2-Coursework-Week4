function setAlarm() {
  const inputField = document.getElementById("alarmSet");
  let timer = inputField.value;

  const heading = document.getElementById("timeRemaining");
  heading.innerText = `Time Remaining: 00:${timer}`;

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
