let timeRemaining = 0;


//double check
function renderTimeRemaining() {
  let minutes = Math.floor(timeRemaining / 60);
  let seconds = timeRemaining % 60;
  const timeRemainingElement = document.querySelector("#timeRemaining");
  timeRemainingElement.innerText = `Time Remaining: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

debugger; 
renderTimeRemaining();

function setAlarm() {
  const newTime = document.querySelector("#alarmSet").value;
  timeRemaining = newTime;
  renderTimeRemaining();
  const interval = setInterval(() => {
    timeRemaining--;
    renderTimeRemaining();
    if (timeRemaining <= 0) {
      clearInterval(interval);
      playAlarm();
    }
  }, 1000)
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
