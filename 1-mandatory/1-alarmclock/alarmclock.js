function setAlarm() {
  const inputElement = document.querySelector("#alarmSet");
  //console.log(inputElement);
  const settime = document.querySelector("#timeRemaining");
 // const minutes = Math.floor((inputElement.value).parseInt())/ 60;
  //let seconds = (inputElement.value).parseInt() % 60;
 // seconds = seconds < 10 ? '0' + seconds : seconds;
 let time = inputElement.value;
  settime.innerHTML =  inputElement.value;
const interval = setInterval(function (){
  settime.innerHTML -=1;
  time-=1;
  if(time === 0){
    clearInterval(interval);
    playAlarm();
  
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
//setInterval(function () {
// const timeRemaining = document.getElementById("timeRemaining");

//   const as = (timeRemaining.innerHTML = alarmSet.value);
//   as -= 1;
// }, 1000);}
