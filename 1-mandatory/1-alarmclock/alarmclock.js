const bgControl = () => setInterval(() => {
  document.body.style.backgroundColor = `rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`
},  1000); 

let bgState;
let alarm;
let timeEntry;
const pauseButton = document.getElementById("pause")

const handleOutput = (timeEntry) => {
  const minutes = Math.floor(timeEntry / 60);
  const seconds = timeEntry % 60;
  const formatTime = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
  document.getElementById('timeRemaining').innerText = `Time Remaining: ${formatTime}`;
}


const setAlarm = () => {
  stopAlarm()
  timeEntry = document.getElementById('alarmSet').value;

  handleOutput(timeEntry);

  const startCounter = () => {
    timeEntry--;
    if (timeEntry === 0) {
      handleOutput(timeEntry);
      clearInterval(alarm); 
      bgState = bgControl();
      playAlarm()
    }
    handleOutput(timeEntry);   
  }

  alarm = setInterval(startCounter, 1000);  

  pauseButton.addEventListener("click", () => {
    const buttonText = pauseButton.innerText
    if (buttonText === 'Pause Alarm' && alarm) {
      clearInterval(alarm);
      pauseButton.innerText = 'Continue';
    } else if (timeEntry > 0) {
      pauseButton.innerText = 'Pause Alarm';
      alarm = setInterval(startCounter, 1000)
    }
  });
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    stopAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function stopAlarm() {
  audio.pause();
  clearInterval(bgState);
  clearInterval(alarm);
  timeEntry = 0;
  handleOutput(timeEntry)
  document.body.style.backgroundColor = 'white'
  pauseButton.innerText = 'Pause Alarm';
}

window.onload = setup;
