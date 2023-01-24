// 1. When the `Set Alarm` button is clicked, get the value of the input field
// 2. When you have the input field value, set the title to the correct value
// 3. Work out how to update the `Time Remaining` title every second
// 4. When the remaining time left is 0, play the alarm sound

function setAlarm() {
  let inputValue = document.getElementById('alarmSet')
  let remainingTime = document.getElementById('timeRemaining')

  let time = inputValue.value
  let minutes = Math.floor(time/60)
  let seconds = time - minutes * 60

  remainingTime.innerText = `Time Remaining: 0${minutes}:${seconds}`
 
 let interval = setInterval(()=>{
  console.log(seconds)
  seconds--
  if (seconds === 0){ 
    clearInterval(interval)
    playAlarm() 
    document.body.style.backgroundColor = 'lightblue'
  }
  else if (seconds<10) {
    seconds = `0${seconds}`
  }
  else {
    minutes = minutes
    seconds = seconds
  }
  remainingTime.innerText = `Time Remaining: 0${minutes}:${seconds}`
 
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
