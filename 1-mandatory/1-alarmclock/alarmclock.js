function setAlarm() {
  // function to format number into 2 digits

  const formatNumber = (number) => {
    return number < 10 ? `0${number}` : `${number}`;
  };

  const displayTime = (minutes, seconds) => {
    timerElement.innerText = ` ${formatNumber(minutes)}:${formatNumber(
      seconds
    )}`;
  };

  const countDown = () => {
    const currentTimer = document.getElementById("timer").innerText;

    const timerSeconds = currentTimer.substring(3);
    const timerMinutes = currentTimer.substring(0, 2);

    let currentSeconds = Number(timerSeconds);
    let currentMinutes = Number(timerMinutes);

    if (currentMinutes == 0 && currentSeconds == 0) {
      playAlarm();
      clearInterval(secondsInterval);
    }
    if (currentSeconds > 0) {
      currentSeconds--;

      displayTime(currentMinutes, currentSeconds);
    }

    if (currentSeconds == 0 && currentMinutes > 0) {
      currentSeconds = 59;
      currentMinutes--;
      displayTime(currentMinutes, currentSeconds);
    }
  };

  var enteredTime = parseInt(document.getElementById("alarmSet").value);
  var timerElement = document.getElementById("timer");
  const enterdMinutes = Math.trunc(enteredTime / 60).toFixed();
  const enteredSeconds = enteredTime % 60;

  if (enterdMinutes && enteredSeconds)
    displayTime(enterdMinutes, enteredSeconds);

  var secondsInterval = setInterval(countDown, 1000);
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
