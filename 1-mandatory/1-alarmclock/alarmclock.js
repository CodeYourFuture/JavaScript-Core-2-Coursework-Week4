
let theTime;
function setAlarm() {
 theTime = document.getElementById("alarmSet").value;

  let timeRem = document.getElementById("timeRemaining");

function liveTime() {
  theTime = theTime - 1;
  
}

  function timer() {
    if(theTime >= 0){
      timeRem.innerText=`Time Remaining 00:${theTime}`;
      liveTime();
    }else playAlarm();
  }
  timer();
  countdown = setInterval(timer, 1000);

    
  document.getElementById("stop").addEventListener("click", function () {
    clearInterval(countdown);
    pauseAlarm();
  });

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
