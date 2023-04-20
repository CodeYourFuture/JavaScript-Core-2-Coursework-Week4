function displayRemainingTime(totalSeconds) {
  // 1. we get the html element for the time remaining part
  // 2. we want to figure out what this new string would be eg calucuate if it is 100
  // 3. use the value in step 2 and put it in the html element in step 1
  
    let timeRemainingString = document.getElementById("timeRemaining");
    let minutes = Math.floor(totalSeconds / 60); // "Time Remaining: 00:00";
    let seconds = totalSeconds % 60;

    let formattedMinutes = ("0" + minutes).slice(-2);
    let formattedSeconds = ("0" + seconds).slice(-2);

    timeRemainingString.textContent =
      "Time Remaining: " + formattedMinutes + ":" + formattedSeconds;
} 

function setAlarm() {
  let inputElement = document.getElementById("alarmSet");
  // console.log(inputElement.value);
  displayRemainingTime(inputElement.value);
  // 1. we need to store the value of the seconds input
  // 2. every time a second ticks, we want the seconds timer (value of the variable in step 1) to reduce by 1 second
  // 3. display the new reduced amount
  
  let totalSeconds = inputElement.value;
  
  let interval = setInterval(() => {
    totalSeconds -= 1;
    displayRemainingTime(totalSeconds);
    if (totalSeconds === 0) {
      playAlarm();
      clearInterval(interval);
    }
  }, 1000)
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
