function setAlarm() {

  let inputEl = document.getElementById('alarmSet')
  let inputElValue = inputEl.value

  let clockEl = document.getElementById('timeRemaining')
  
  let interval = setInterval(()=> {
    if (inputElValue<10){
      clockEl.innerHTML=`Time Remaining: 00:0${inputElValue}`
    }
    else if(inputElValue >= 10){
    clockEl.innerHTML=`Time Remaining: 00:${inputElValue}`
    }
  inputElValue -- 
    if (inputElValue < 0){clearInterval(interval)
    playAlarm()}
  }, 1000)
   

 
  
  
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
