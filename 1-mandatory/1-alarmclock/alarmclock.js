var countdown;
var remainingTime;

function setAlarm() {
  // Get the input field value
  var input = document.getElementById("alarmSet").value;
  remainingTime = input;

  document.title = "Time Remaining: 00:" + padZeroes(remainingTime);
   countdown = setInterval(function() {
    remainingTime--;
    document.title = "Time Remaining: 00:" + padZeroes(remainingTime);
    if (remainingTime == 0) {
      var flash = setInterval(function() {
        document.body.style.backgroundColor = document.body.style.backgroundColor == "red" ? "white" : "red";
      }, 500);

      setTimeout(function() {
        clearInterval(flash);
        document.body.style.backgroundColor = "white";
      }, 5000);

      playAlarm();
      clearInterval(countdown);
    }
  }, 1000);
}

function padZeroes(number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
}

function pauseAlarm() {
  clearInterval(countdown);
}

function resumeAlarm() {
  countdown = setInterval(function() {
    remainingTime--;
    document.title = "Time Remaining: 00:" + padZeroes(remainingTime);
    if (remainingTime == 0) {
      var flash = setInterval(function() {
        document.body.style.backgroundColor = document.body.style.backgroundColor == "red" ? "white" : "red";
      }, 500);

      setTimeout(function() {
        clearInterval(flash);
        document.body.style.backgroundColor = "white";
      }, 5000);
      playAlarm();
      clearInterval(countdown);
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
