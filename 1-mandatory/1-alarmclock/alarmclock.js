
function setAlarm() {
  let alarmTime = document.getElementById("alarmSet").value;
  setTime(alarmTime);



let setter = setInterval(function(){
  if(alarmTime === 0){
    clearInterval(setter);
      playAlarm();

  }else{
    alarmTime--;
    setTime(alarmTime);
  }
}, 1000);
}



function setTime(time){
    let hour = Math.floor(time/60);
    let minute = time % 60;
    let leftTime = document.getElementById("timeRemaining");
     leftTime.innerText= `Time Remaining:${String(hour).padStart(2,"0")}:${String(minute).padStart(2,"0")}`;
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
