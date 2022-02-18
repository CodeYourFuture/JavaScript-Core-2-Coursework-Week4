
 const startAlarm = document.getElementById("set");
  let numberOfSeconds;

function setAlarm() { 

 
  startAlarm.addEventListener("click", () => {

    const setTime = document.getElementById("alarmSet");
    const timeRemaining = document.getElementById("timeRemaining");
    timeRemaining.innerText =  `Time Remaining: 00:${setTime.value}`;
    numberOfSeconds = setTime.value;
    while( numberOfSeconds != 0){
      setInterval(updateAlarm, 1000);
    }

  })
}
function updateAlarm(){ 
  numberOfSeconds--;
 timeRemaining.innerText =  `Time Remaining: 00:${numberOfSeconds}`;

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
