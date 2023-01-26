//setInterval(setAlarm(), 1000);

function setAlarm() {
  let inputTime = document.getElementById("alarmSet");
  let timeRemain = document.getElementById("timeRemaining");
  setInputToTitle();
  if (timeRemain.innerText.includes("00:01")) playAudio();
}

function setInputToTitle() {
  let inputTime = document.getElementById("alarmSet");
  let timeRemain = document.getElementById("timeRemaining");
  let remaining = Number(inputTime.value) % 60;
  let quotient = Math.floor(Number(inputTime.value / 60));
  if (quotient > 9 && remaining > 9) {
    let interval = setInterval(function () {
      timeRemain.innerHTML = `Time Remaining: ${quotient}:${remaining--}`;
      if (remaining === 0) {
        quotient--;
        remaining = 59;
      }
    }, 1000);
  } else if (quotient > 9 && remaining <= 9) {
    interval = setInterval(function () {
      timeRemain.innerHTML = `Time Remaining: ${quotient}:0${remaining--}`;
      if (remaining === 0) {
        quotient--;
        remaining = 59;
      }
    }, 1000);
  } else if (quotient <= 9 && remaining > 9) {
    interval = setInterval(function () {
      timeRemain.innerHTML = `Time Remaining: 0${quotient}:${remaining--}`;
      if (remaining === 0) {
        quotient--;
        remaining = 59;
      }
    }, 1000);
  } else if (quotient <= 9 && remaining <= 9) {
    interval = setInterval(function () {
      timeRemain.innerHTML = `Time Remaining: 0${quotient}:0${remaining--}`;
      if (remaining === 0) {
        quotient--;
        remaining = 59;
      }
    }, 1000);
  }

  inputTime.value = "";
}

function timeRemainingTitle(remaining, quotient) {
  if (remaining < 10 && quotient < 10)
    return (timeRemain.innerHTML = `Time Remaining: 0${quotient}:0${remaining--}`);
  else if (remaining < 10 && quotient >= 10)
    return (timeRemain.innerHTML = `Time Remaining: ${quotient}:0${remaining--}`);
  else if (remaining > 10 && quotient < 10)
    return (timeRemain.innerHTML = `Time Remaining: 0${quotient}:${remaining--}`);
  else
    return (timeRemain.innerHTML = `Time Remaining: ${quotient}:${remaining--}`);
}

function playAudio() {
  audio.play();
}
function stopAudio() {
  audio.pause();
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
