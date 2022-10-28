
function setAlarm() {
  let setAlarmButton=document.querySelector('#set');
  let theCounter=document.querySelector('#timeRemaining');
  let inputTime=document.querySelector('#alarmSet');
  let seconds=inputTime.value;
 
  const countDown= setInterval(()=>{
    if (seconds<=60){
    seconds--;
    if(seconds<10){
      theCounter.innerText=`Time Remaining: 00:0${seconds}`
    }else theCounter.innerText=`Time Remaining: 00:${seconds}`;
   }
   
    if(seconds===0){
      playAlarm()
      clearInterval(countDown)
    }
    if (seconds>59){
      let min=Math.floor(seconds/60);
      let secondnew=(seconds % 60)
      seconds--;
      if(secondnew<10){
        theCounter.innerText=`Time Remaining: ${min}:0${secondnew}`
      }else
      theCounter.innerText=`Time Remaining: ${min}:${secondnew}`
       
     }
    },1000)
 
  }
 
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