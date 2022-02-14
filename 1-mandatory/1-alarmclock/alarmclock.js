function setAlarm() {
  
let timeOfAlarm = document.getElementById("alarmSet");
let timeRemaining = document.getElementById("timeRemaining");
let btn = document.getElementById("set");
  

btn.addEventListener("click",  () => {
  let alarmTime = timeOfAlarm.value;
  let time = alarmTime *60;
  let timer = setInterval(updateH1,1000);

  function updateH1(){
    
    if (time <= 0 ){ 
      timeRemaining.innerHTML = `Time Remaining: 00:00`;
      playAlarm();
      
    } else {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    timeRemaining.innerHTML = 
    `Time Remaining: ${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    time--;
    }
  }
  
})
  
 let stopButton = document.getElementById("stop");
 stopButton.addEventListener("click", () => {
  timeRemaining.innerHTML = `Time Remaining: 00:00`;
});  

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
