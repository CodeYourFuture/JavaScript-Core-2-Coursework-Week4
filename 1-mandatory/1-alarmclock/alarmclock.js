function setAlarm() {
// get the timeRemaining 
let timeRemaining = document.getElementById("timeRemaining");
// get the alarmSet value
let alarmSet = document.getElementById("alarmSet").value;


// set the interval
let interval = setInterval(() =>{
  let mm = Math.floor(alarmSet / 60);
  let ss = alarmSet % 60;

  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;
  // set the timeRemaining to the value inputted
  timeRemaining.textContent = `Time Remaining: ${mm}:${ss}`;
//decrease time
  alarmSet--;

  if (alarmSet < 0) {
    playAlarm();
    clearInterval(interval);
  }
}, 1000)


// mark the alarm stop

// play the sound
}
  /*<h1 id="timeRemaining">Time Remaining: 00:00</h1>
        <input id="alarmSet" 
        <button id="set" 
        <button id="stop"  */
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
