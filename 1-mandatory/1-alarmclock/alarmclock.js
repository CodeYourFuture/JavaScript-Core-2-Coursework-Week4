const setAlarm = () => {
  const inputEl = document.getElementById("alarmSet");
  let userInputValue = inputEl.value;
  const h1TimeRemainingEl = document.getElementById("timeRemaining");

  let timer = setInterval(() => {
    let minutes = Math.floor(userInputValue / 60);
    let seconds = Math.floor(userInputValue % 60);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    h1TimeRemainingEl.innerText = `Time Remaining: ${minutes} : ${seconds}`;

    userInputValue-- || clearInterval(timer);

    if (userInputValue < 0) playAlarm();
  }, 1000);

  inputEl.value = "";
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
