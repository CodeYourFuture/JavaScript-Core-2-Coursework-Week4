function setAlarm() {
  let timeRemaining = document.getElementById("timeRemaining");
  let number = Number(document.getElementById("alarmSet").value);
  document.body.style.backgroundColor = "white";

  var countDown = setInterval(function () {
    let seconds = number % 60;
    let minutes = Math.floor(number / 60);

    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    //changing colors in the end of timer
    if (number === 3) document.body.style.backgroundColor = "yellow";
    if (number === 2) document.body.style.backgroundColor = "orange";
    if (number === 1) document.body.style.backgroundColor = "purple";

    //playing sound and stopping countdown
    if (number === 0) {
      document.body.style.backgroundColor = "green";
      playAlarm();
      clearInterval(countDown);
    }

    //pausing alarm
    document.getElementById("pause").addEventListener("click", () => {
      clearInterval(countDown);
    });
    //changing content
    timeRemaining.innerHTML = `Time Remaining: ${minutes}:${seconds}`;
    number--;
  }, 1000);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    stopAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function stopAlarm() {
  audio.pause();
}

window.onload = setup;
