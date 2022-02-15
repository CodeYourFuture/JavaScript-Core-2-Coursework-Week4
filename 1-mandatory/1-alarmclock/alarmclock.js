const body = document.querySelector('body');

//for adding new pause button to the document
const allButtonsEl = document.querySelector('.centre')
const newPauseBtn = document.createElement('button');
newPauseBtn.innerText = 'Pause';
allButtonsEl.appendChild(newPauseBtn)

// to set an id for the setinterval function that we are using below
let intervalId;


function setAlarm() {
  
  const timeRemainingEl = document.getElementById('timeRemaining');
  const setTimerBtn = document.getElementById('set')
  let inputTime = 0;

  
  
  
  setTimerBtn.addEventListener('click', () => {
    let alarmSetInput = document.getElementById('alarmSet');
    inputTime = alarmSetInput.value;

    //call function every second. intervalId used to clear interval
    intervalId = setInterval(() => {
      controlTimer()
    }, 1000)
    
    
  });

  //for pause button to stop counting down
  newPauseBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    body.style.background = 'white'
  })


  function controlTimer() {
    console.log(inputTime.length)
    if (inputTime < 10) {
      timeRemainingEl.innerText = `Time Remaining: 00:0${inputTime}`; 
    } else {
      timeRemainingEl.innerText = 'Time Remaining: 00:' + inputTime;
    }
    
    inputTime -= 1;
    
    if (inputTime <= 0) {
      setInterval(() => {
        let colors = ['red', 'blue'];
        body.style.background = colors[Math.floor(Math.random(0, 3) * 2)] 
      }, 100);
      
      clearInterval(intervalId);
      
      playAlarm();
      
    };
    //I was trying to set the input value to be empty at the end of timer, but its not working.
    //so i have commented it out
    // inputTime = '';
    
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
