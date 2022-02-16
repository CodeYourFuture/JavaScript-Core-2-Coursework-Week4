function setAlarm() {
  // When the `Set Alarm` button is clicked, get the value of the input field
 let setEl = document.querySelector("#alarmSet");
 let displayEl = setEl.value;
 let remainingEl = document.querySelector("#timeRemaining");
 remainingEl.innerText = `Time Remaining: 00:${timer}`;

 let interval = setInterval ( () => {
   displayEl = displayEl - 1;
   remainingEl.innerText = `Time Remaining: 00:${timer}`;

   if(displayEl === 0) {
     clearInterval(interval);
        playAlarm()
   }

 },1000)


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
