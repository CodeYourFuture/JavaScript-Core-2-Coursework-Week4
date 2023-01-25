function setAlarm() {
  let inputTime = document.getElementById("alarmSet");
  let timeRemain = document.getElementById("timeRemaining");
  if (inputTime.value.length === 1)
    timeRemain.innerHTML = `Time Remaining: 00:0` + inputTime.value;
  else if (inputTime.value.length === 2 && Number(inputTime.value) < 60)
    timeRemain.innerHTML = `Time Remaining: 00:` + inputTime.value;
  else if (inputTime.value.length >= 2 && Number(inputTime.value) >= 60) {
    let remaining = Number(inputTime.value) % 60;
    let quotient = Math.floor(Number(inputTime.value / 60));
    if (remaining <= 9)
      timeRemain.innerHTML = `Time Remaining: 0${quotient}:0${remaining}`;
    else timeRemain.innerHTML = `Time Remaining: 0${quotient}:${remaining}`;
  }
  inputTime.value = "";
}

/*let countDoawnFunction = setInterval(setAlarm()=>{
}, 1000);*/

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
