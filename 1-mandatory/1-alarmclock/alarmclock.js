function setAlarm() {
  document.getElementById("set").addEventListener("click", function (event) {
    let inputValue = document.getElementById("alarmSet").value;

    const timeElement = document.querySelector("#timeRemaining");
    timeElement.innerText = `Time Remaining 00:${inputValue}`;

    function updateTimeRemaining() {
      inputValue--;
    }

    function countDownTimer() {
      if (inputValue >= 0) {
        timeElement.innerText = `Time Remaining 00:${inputValue}`;
        updateTimeRemaining();
      } else playAlarm();
    }
    setInterval(countDownTimer, 1000);
  });
}

document.getElementById("stop").addEventListener("click", function () {
  clearTimeout();
});

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
