
const startAlarm = document.getElementById("set");
function setAlarm() { 
  startAlarm.addEventListener("click", () => {

    const setTime = document.getElementById("alarmSet");
    let numberOfSeconds = setTime.value;
    const timeRemaining = document.getElementById("timeRemaining");
    timeRemaining.innerText =  `Time Remaining: ${numberOfSeconds}`;
    let now = setInterval(() => {
      if(numberOfSeconds <= 0){
          playAlarm();
          clearInterval(now);
          
      }
       else {
         numberOfSeconds--;
         timeRemaining.innerText =  `Time Remaining: ${numberOfSeconds}`;
       }
    },1000)
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
