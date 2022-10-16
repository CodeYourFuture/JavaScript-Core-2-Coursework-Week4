var interval 
function setAlarm() {
   interval = setInterval(() => {
    const value = document.getElementById("alarmSet").value
    document.getElementById("timeRemaining").innerHTML = "Time Remaining: 00:" + value
    document.getElementById("alarmSet").value = ( value - 1)
    if(( value - 1) == 0){
      playAlarm()
      pauseAlarm()
      clearInterval(interval)
    };
  }, 1000)
}
function stopAlarm() {
   clearInterval(interval)
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
  clearInterval(interval)
  audio.pause();
}

window.onload = setup;
