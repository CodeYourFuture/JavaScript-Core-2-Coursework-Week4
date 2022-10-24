function setAlarm() {
  let setAlarmButton=document.querySelector('#set');
  let theCounter=document.querySelector('#timeRemaining');
  let inputTime=document.querySelector('#alarmSet');
  let seconds=inputTime.value;
  theCounter.innerText=`Time Remaining: 00:${seconds}`;
  // I want to writ down the countdown function
  const countDown= setInterval(()=>{
    seconds--;
    theCounter.innerText=`Time Remaining: 00:${seconds}`;
    console.log(seconds);
    if(seconds===0){
      playAlarm()
      clearInterval(countDown)
    }



  },1000)

  }
  setAlarm();


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
