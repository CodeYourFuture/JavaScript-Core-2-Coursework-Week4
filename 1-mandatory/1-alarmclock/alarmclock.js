let myInterval ;

function setAlarm() {
  // let displayTime = document.getElementById("alarmSet").value;
   
  //  myInterval = setInterval(function(){
  //    if(displayTime === 0){
  //         audio.play(clearInterval(myInterval));
  //     }
  //     document.getElementById("timeRemaining").innerHTML = `Time Remaining: 00:${displayTime}`;
  //     displayTime--;
  //  },1000)
 }
//document.getElementById("set").addEventListener("click",setAlarm)


function stopAlarm() {
  //clearInterval(myInterval);
}
//document.getElementById("stop").addEventListener("click",stopAlarm)


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
