// 1. When the `Set Alarm` button is clicked, get the value of the input field
// 2. When you have the input field value, set the title to the correct value
// 3. Work out how to update the `Time Remaining` title every second
// 4. When the remaining time left is 0, play the alarm sound


    
  function setAlarm() {
  let timer = document.querySelector("#alarmSet").value;
  setTime(timer);
  
  let setter= setInterval(function () {
    if (timer ===0){
      clearInterval(setter);
    playAlarm();
    } else {
      timer--;
      setTime(timer);
    }
}, 1000);
}

function setTime (time){
  const hour = Math.floor(time / 60);
  const minute = time % 60;
  let timeLeft = document.querySelector("#timeRemaining");
  timeLeft.innerText = `Time Remaining: ${String(hour).padStart(2,"0")}:${String(minute).padStart(2,"0")}`;
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
