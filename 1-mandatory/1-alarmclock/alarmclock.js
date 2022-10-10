let time;
let intervalId;

const ticking = new Audio("ticking.mp3");
// ^ i edited this using soundforge to make it exactly 1 second
const chime = new Audio("chime.mp3");
// chime.loop = true;
// ^ this is how you set the audio object to loop

function convertFromStringToMilliseconds(time) {
  let hours = Number(time.split(":")[0]) * 3600000;
  let minutes = Number(time.split(":")[1]) * 60000;
  let seconds = Number(time.split(":")[2]) * 1000;
  return hours + minutes + seconds;
}

function convertFromMillisecondsToString(time) {
  let hours = Math.floor(time / 3600000);
  time -= 3600000 * hours;
  let minutes = Math.floor(time / 60000);
  time -= 60000 * minutes;
  let seconds = Math.floor(time / 1000);
  return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function setTimer() {
  let timerInputValue = convertFromStringToMilliseconds(document.getElementById("timerInput").value);
  if (typeof timerInputValue === "number" && timerInputValue > 0) {
    time = timerInputValue;
    document.getElementById("timeRemaining").textContent = convertFromMillisecondsToString(time);  
  }
}

function startTimer() {
  if (time > 0) {
    intervalId = setInterval(function() {
      time -= 1000;
      ticking.currentTime = 0;
      ticking.play();
      document.getElementById("timeRemaining").textContent = convertFromMillisecondsToString(time);
      // console.log(`intervalId running ${time}`);
      if (time <= 0) {
        clearInterval(intervalId);
        ticking.pause();
        chime.play();
        time = 0;
        document.getElementById("timeRemaining").textContent = convertFromMillisecondsToString(time);
        return;
      }
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(intervalId);
  ticking.pause();
  time = 0;
  document.getElementById("timeRemaining").textContent = convertFromMillisecondsToString(time);
}

// function stopAlarm() {
//   chime.pause();
// }

// DO NOT EDIT BELOW HERE

// var alarm = new Audio("alarmsound.mp3");

function setup() {
  // document.getElementById("set").addEventListener("click", () => {
  //   setAlarm();
  // });

  // document.getElementById("stop").addEventListener("click", () => {
  //   pauseAlarm();
  // });

  // document.getElementById("stopAlarm").addEventListener("click", () => {
  //   stopAlarm();
  // })

  document.getElementById("setTimer").addEventListener("click", () => {
    setTimer();
  })

  document.getElementById("startTimer").addEventListener("click", () => {
    startTimer();
  })

  document.getElementById("stopTimer").addEventListener("click", () => {
    stopTimer();
  })
  
}

// function playAlarm() {
//   audio.play();
// }

// function pauseAlarm() {
//   audio.pause();
// }

window.onload = setup;