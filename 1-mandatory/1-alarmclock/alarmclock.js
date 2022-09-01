let minutes = "00";
let seconds = "00";
let remainingTimeTag = document.getElementById("timeRemaining");

function setAlarm() {
  let inputEl = document.getElementById("alarmSet");
  let myValue = Number(inputEl.value);
  if (myValue >= 3600) {
    return alert("Put a number less than 3600!")
  }
 
  let loop = () => {
    if (myValue === -1) { //Time out
      return playAlarm()
    }
    minutes = myValue >= 60 ? Math.floor(myValue / 60) : "00";
    seconds = myValue >= 60 ? myValue % 60 : myValue;
    myValue -= 1;
    if (String(seconds).length < 2) {
      seconds = "0" + seconds
    }
    if (String(minutes).length < 2) {
      minutes = "0" + minutes
    }
    remainingTimeTag.innerHTML = `Time Remaining: ${minutes} : ${seconds} `;
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
