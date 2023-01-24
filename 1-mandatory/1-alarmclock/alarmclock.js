function setAlarm() {
  let inputValue = document.getElementById('alarmSet')
  let remainingTime = document.getElementById('timeRemaining')

  let minutes = ''
  let seconds = ''

 let interval = setInterval(()=>{
  inputValue.value--

  let sec = inputValue.value % 60 
  if (sec<10) {
    seconds = `0${sec}`
  }
  else {seconds=sec}

  let min = parseInt(inputValue.value / 60 )
  if (min<10) {
    minutes = `0${min}`
  }
  else {minutes=min}

  remainingTime.innerText = `Time Remaining: ${minutes}:${seconds}`

  if (inputValue.value == 0){ 
    clearInterval(interval)
    playAlarm() 
    document.body.style.backgroundColor = 'lightblue'
  }
 },1000);
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
