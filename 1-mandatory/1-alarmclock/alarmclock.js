function setAlarm() {
  const timeInput = document.getElementById("alarmSet");
  const timeRemainingDisplay = document.getElementById("timeRemaining");
  let timeToSet = timeInput.value;
  function countDown (){
    timeToSet--; //means -1
  let minutes = Math.floor(timeToSet / 60)
  let seconds = timeToSet % 60;
  let convertedTime = `${minutes}:${seconds}`;
  timeRemainingDisplay.innerText = `Time remaining: ${convertedTime}`;
   if(timeToSet === 0){
        clearInterval(Interval) 
        playAlarm()}

  }
  let Interval = setInterval(countDown, 1000);
  
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
