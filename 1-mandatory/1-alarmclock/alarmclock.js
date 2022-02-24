function changeMinute(seconds) {
  if(seconds < 60 ){
    let formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `Time Remaining: 00:${formatSeconds}`;}
  else{
    let minutes = Math.floor(seconds / 60); 
    let formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    let secs = seconds - minutes * 60;
    let formatSecs = secs < 10 ? `0${secs}` : `${secs}`;
    return `Time Remaining: ${formatMinutes}:${formatSecs}`;
  }
}
function setAlarm() {
  const timeRemainingEl = document.getElementById("timeRemaining");
  const setAlarmInput = document.getElementById("alarmSet");
  let takingInput = Number(setAlarmInput.value);
  timeRemainingEl.innerText = changeMinute(takingInput);

  const timerId = setInterval(() => {
    takingInput -= 1;
    timeRemainingEl.innerText = changeMinute(takingInput);

    if (takingInput === 0) {
      clearInterval(timerId);
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
