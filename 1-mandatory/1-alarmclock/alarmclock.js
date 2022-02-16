function setAlarm() {
  let minutes = "00";
  let seconds = "00";

  let remainingTimeTag = document.getElementById("timeRemaining");

  let inputEl = Number(document.getElementById("alarmSet").value);
  //===========================================================================
  if (inputEl >= 3600) {
    return alert("Put a number less than 3600!")
  }
  // else:
  let countDown = () => {
    if (inputEl === -1) {
      return playAlarm()
    }
    //divide minute and second
    if (inputEl >= 60) {
      minutes = Math.floor(inputEl / 60);
    } else {
      minutes = "00";
    }

    if (inputEl >= 60) {
      seconds = inputEl % 60;
    } else {
      seconds = inputEl;
    }

    //counting down
    inputEl -= 1;
    //convert minutes and seconds in 00:00 format
    if (String(seconds).length < 2) {
      seconds = "0" + seconds
    }
    if (String(minutes).length < 2) {
      minutes = "0" + minutes
    }
    remainingTimeTag.innerHTML = `Time Remaining: ${minutes} : ${seconds} `;
  } //else ends
  //============================================================================

  let repeatigLoop = setInterval(countDown, 1000);

  let btnStop = document.getElementById("stop");
  btnStop.addEventListener("click", () => {
    pauseAlarm();
    clearInterval(repeatigLoop);
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