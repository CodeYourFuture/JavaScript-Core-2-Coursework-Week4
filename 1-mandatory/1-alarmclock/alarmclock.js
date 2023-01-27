function setAlarm() {
  let inputBox = document.querySelector("#alarmSet");
  let counter = document.querySelector("#timeRemaining");
  let inputValue = inputBox.value;
  if (inputValue === ""|| inputValue <=0) {counter.innerHTML="Please enter a valid value"; return ; }
  else {
  counter.innerHTML=`Time Remaining:${inputValue}`;
  let timeLeft = inputValue ; 
  const Interval = setInterval(()=>{
    timeLeft--;
       document.querySelector("#timeRemaining").innerHTML=`Time Remaining: ${timeLeft}`;
      if(timeLeft === 0){
        playAlarm();
        clearInterval(Interval)
      }
    },1000);
  }
  }


let myButton = document.querySelector("#set");
myButton.addEventListener("click", setAlarm());

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
