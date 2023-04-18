  let setAlarmButton = document.querySelector("#set")


function setAlarm() {
  let inputTime = document.querySelector("#alarmSet")
  let timeLine = document.querySelector("#timeRemaining")
  let givenTime = inputTime.value 
  
      let minutes = Math.floor(givenTime/60);
      let seconds = givenTime % 60;
      console.log(minutes)
      timeLine.innerText = `Time Remaining: ${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
   
      givenTime = givenTime - 1
  
  let myInterval = setInterval(function(){ 
      if (givenTime < 0) {
        clearInterval(myInterval);
        audio.play()
      } else{
        minutes = Math.floor(givenTime/60);
        seconds = givenTime % 60;
        timeLine.innerText = `Time Remaining: ${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
      } 
      givenTime --    
  }, 1000);
}

function stopAlarm(){
    audio.stop()
}

let stopButton = document.querySelector("#stop")
stopButton.addEventListener("click", stopAlarm)

setAlarmButton.addEventListener("click", setAlarm)




 // if (rest < 10 && equalMinutes < 10){
      //   timeLine.innerText = `Time Remaining: 0${equalMinutes}:0${rest}`
      // } else if(rest >= 10 && equalMinutes < 10){
      //   timeLine.innerText = `Time Remaining: 0${equalMinutes}:${rest}`
      // } else if(rest < 10 && equalMinutes >= 10){
      //   timeLine.innerText = `Time Remaining: ${equalMinutes}:0${rest}`
      // } else{
      //   timeLine.innerText = `Time Remaining: ${equalMinutes}:${rest}`
      // } 
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
