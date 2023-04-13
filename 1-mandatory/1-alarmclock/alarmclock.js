function setAlarm() {
  let time = document.querySelector("#alarmSet").value;
  setTime(time);
  
  let execution = setInterval(function () {
    if (time ===0){
      clearInterval(execution);
    playAlarm();
    } else {
      time--;
      setTime(time);
    }
}, 1000);
}

function setTime (tim){
  const hours = Math.floor(tim / 60);
  const minutes = tim % 60;
  let timeLeft = document.querySelector("#timeRemaining");
  timeLeft.innerText = `Time Remaining: ${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}`;
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
