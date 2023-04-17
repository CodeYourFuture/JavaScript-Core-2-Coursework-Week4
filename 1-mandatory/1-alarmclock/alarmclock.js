  let setAlarmButton = document.querySelector("#set")


function setAlarm() {
  let inputTime = document.querySelector("#alarmSet")
  let timeLine = document.querySelector("#timeRemaining")
  let givenTime = inputTime.value 
  

      var equalMinutes = Math.floor(givenTime/60);
      var rest = givenTime % 60;
      console.log(equalMinutes)
      timeLine.innerText = `Time Remaining: ${equalMinutes.toString().padStart(2, "0")}:${rest.toString().padStart(2, "0")}`
   
      givenTime = givenTime - 1
  
  let myInterval = setInterval(function(){ 
      if (givenTime == 0) {
        clearInterval(myInterval);
        timeLine.innerText = `Time Remaining: 00:00`
        audio.play()
      }else if (givenTime < 10 && givenTime >= 0){
        timeLine.innerText = `Time Remaining: 00:0${givenTime}`
      } else if(givenTime >=60){
        equalMinutes = Math.floor(givenTime/60);
        rest = givenTime % 60;
        timeLine.innerText = `Time Remaining: ${equalMinutes.toString().padStart(2, "0")}:${rest.toString().padStart(2, "0")}`
      } else if (givenTime >= 10 && givenTime < 60) {
        timeLine.innerText = `Time Remaining: 00:${givenTime}`
      } 
      givenTime --    
  }, 1000);
}

function stopAlarm(){
  let stopButton = document.querySelector("#stop")
  stopButton.addEventListener("click", function(event) {
    event.preventDefault()
    audio.stop()
  });

}

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
