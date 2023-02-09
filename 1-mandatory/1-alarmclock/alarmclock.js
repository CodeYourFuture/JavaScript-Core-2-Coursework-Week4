function setAlarm() {
  let timeRemaining=document.getElementById("timeRemaining");
  let input=document.getElementById("alarmSet");
   inputTime=input.value
  
    myInterval = setInterval(myTimer, 1000);
   
  function myTimer() {
    inputTime= inputTime-1
     //divided time to second s=adn minute
    let minutes = (inputTime / 60).toFixed(0).padStart(2, "0");
    let seconds = (inputTime % 60).toString().padStart(2, "0");
    timeRemaining.innerText=`Time Remaining: ${minutes}:${seconds}`;
    if (inputTime === 0) {
      playAlarm();
      clearInterval(myInterval);

    } 
    }
 ;
 
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
