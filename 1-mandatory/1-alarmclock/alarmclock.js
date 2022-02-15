const allButtonsEl = document.querySelector('.centre')
const newPauseBtn = document.createElement('button');
newPauseBtn.innerText = 'Pause';
allButtonsEl.appendChild(newPauseBtn)
let intervalId;
function setAlarm() {
  
  const timeRemainingEl = document.getElementById('timeRemaining');
  const setTimerBtn = document.getElementById('set')
  let inputTime = 0;
  
  
  setTimerBtn.addEventListener('click', () => {
    let alarmSetInput = document.getElementById('alarmSet');
    inputTime = alarmSetInput.value;
    intervalId = setInterval(() => {
      controlTimer()
    }, 1000)
    
    
  });
  newPauseBtn.addEventListener('click', () => {
    clearInterval(intervalId)
  })
  function controlTimer() {
    timeRemainingEl.innerText = 'Time Remaining: 00:' + inputTime;
    // console.log(time)
    inputTime -= 1;
    
    if (inputTime < 0) {
      clearInterval(intervalId)
      playAlarm();
      
    };
    inputTime = '';
    
  }
  
  
  
};


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
