function formatCounter(counter) {
    let minutes = Math.floor(counter / 60);
    let seconds = counter % 60;
    if (minutes < 10) {
        minutes = "0" + minutes
    };
    if (seconds < 10) {
        seconds = "0" + seconds
    };
    return minutes + ":" + seconds
}
function setAlarm() {
    let setValue = document.getElementById("alarmSet").value;
    let timeRemaining = document.getElementById("timeRemaining");
    let counter = setValue;
    timeRemaining.innerText = "Time Remaining: " + formatCounter(counter);
    const countDown = setInterval(function () {
        counter--;
        timeRemaining.textContent = "Time Remaining: " + formatCounter(counter);
        if (counter === 0) {

        playAlarm();
        clearInterval(countDown);
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
