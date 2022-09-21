function setAlarm() {}
let minutes = "00";
let seconds = "00";
let remainingMinutes = document.getElementById("timeRemaining");

function setAlarm() {
  let inputEl = document.getElementById("alarmSet");
  let total = Number(inputEl.value);
  if (total >= 3600) {
    return alert("Put a number less than 3600!")
  }

  let loop = () => {
    if (total === -1) { //Time out
      return playAlarm()
    }
    minutes = total >= 60 ? Math.floor(total / 60) : "00";
    seconds = total >= 60 ? total % 60 : total;
    total -= 1;
    if (String(seconds).length < 2) {
      seconds = "0" + seconds
    }
    if (String(minutes).length < 2) {
      minutes = "0" + minutes
    }
    remainingMinutes.innerHTML = `Time Remaining: ${minutes} : ${seconds} `;
  };
  inputEl.value = "";
  console.log(inputEl);
  let repeating = setInterval(loop, 1000);
  let btnStop = document.getElementById("stop");
  btnStop.addEventListener("click", () => {
    pauseAlarm();
    clearInterval(repeating)
  })
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
