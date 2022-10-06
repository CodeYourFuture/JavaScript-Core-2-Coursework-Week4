var alarmS = document.getElementById("set");
alarmS.addEventListener("click", setAlarm);
var timo = document.getElementById("alarmSet").value;
var alarmI = document.getElementById("timeRemaining");

function setAlarm() {
  var timo = document.getElementById("alarmSet").value;
  var timeleft = timo;
  var counter = 0;
  alarmI.innerText = "Time Remaining: 00:" + (timeleft - counter);

  function timeIt() {
    counter++;
    alarmI.innerText = "Time Remaining: 00:" + (timeleft - counter);
    if (counter == timeleft) {
      playAlarm(audio);
      counter = 0;
      clearInterval();
    }
  }
  setInterval(timeIt, 1000);
}
var stopper = document.getElementById("stop");
stopper.addEventListener("click", stopi);

function stopi() {
  pauseAlarm(audio);
  document.getElementById("alarmSet").value = " ";
  alarmI.innerText = "Time Remaining: 00:00";
  clearInterval(setAlarm);
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
