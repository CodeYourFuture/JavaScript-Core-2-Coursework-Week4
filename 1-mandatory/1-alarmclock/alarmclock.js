const bgControl = () => setInterval(() => {
  document.body.style.backgroundColor = `rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`
}, 500); 

let bgState;

const setAlarm = () => {
  let timeEntry = document.getElementById('alarmSet').value;
  
  const handleOutput = (timeEntry) => {
    const minutes = Math.floor(timeEntry / 60);
    const seconds = timeEntry % 60;
    const formatTime = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
    document.getElementById('timeRemaining').innerText = `Time Remaining: ${formatTime}`;
    if (timeEntry === 0 ) {
      bgState = bgControl();
    }
  }
  
  handleOutput(timeEntry);

  const startCounter = () => {
    timeEntry--;
    handleOutput(timeEntry);
    if (timeEntry === 0) {
      playAlarm(); 
      clearInterval(alarm);
    }
  }

  let alarm = setInterval(startCounter, 1000);

  const pauseButton = document.getElementById("pause")

  pauseButton.addEventListener("click", () => {
    const buttonText = pauseButton.innerText
    if (buttonText === 'Pause Alarm') {
      clearInterval(alarm);
      pauseButton.innerText = 'Continue';
    } else {
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
}

window.onload = setup;
