function setAlarm() {
const timeRemaining = document.getElementById("timeRemaining")
const setAlarmInput = document.getElementById("alarmSet")
let takingInput = Number(setAlarmInput.value)
timeRemaining.innerText = "Time Remaining: " + takingInput + " Sec"

const timerId = setInterval(()=> { 
  takingInput -= 1
  timeRemaining.innerText = "Time Remaining: " + takingInput + " Sec"
  if (takingInput === 0){
    clearInterval(timerId)
    playAlarm();
  }
}, 1000)

//console.log(typeof takingInput)
//console.log(takingInput);
}


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

window.onload = setup; // callling setup function

/*
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
*/