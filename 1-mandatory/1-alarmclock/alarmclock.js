function setAlarm() {
  const input = document.getElementById("alarmSet").value;
  const setBtn = document.getElementById("set");
  const stopBtn = document.getElementById("stop");
  const timer = document.getElementById("timeRemaining");

  // Make Set Alarm Button working:
  setBtn.addEventListener("click", () => {
    // check if the input is a positive integer.
    input <= 0 || input === ""
      ? alert("please insert a positive integer")
      : alert("The count down will start now");

    // saving input value ,before clearing it's value.
    let time = input;
    // clearing the input value.
    document.getElementById("alarmSet").value = "";

    // making
    let timerInterval = setInterval(CountDown, 1000);

    function CountDown() {
      let min;
      let sec;
      if (time >= 0) {
        // calculate minutes and seconds with input value.
        min = Math.floor(time / 60);
        min < 10 ? (min = `0${min}`) : min;
        sec = time - min * 60;
        sec < 10 ? (sec = `0${sec}`) : sec;
        timer.innerText = `Time Remaining: ${min}:${sec}`;
        time--;
      } else if (time < 0) {
        clearInterval(timerInterval);
        playAlarm();
      }
    }
  });

  // Make Stop Button Working:
  stopBtn.addEventListener("click", () => {
    pauseAlarm();

    // make background color flashes when the alarm clock is finished.
    setInterval(() => {
      let colors = Math.floor(Math.random() * 9999999);
      document.body.style.background = `#${colors}`;
    }, 1);
  });

  // Make a Pause button for countDown.
  // const divBtn = stopBtn.parentNode;
  // const pauseBtn = document.createElement("button");
  // pauseBtn.innerText = `Pause`;
  // divBtn.appendChild(pauseBtn);
}

// ==========================================================================================
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
