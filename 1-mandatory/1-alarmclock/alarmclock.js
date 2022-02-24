function setAlarm() {
  // get value of input
  const inputField = document.getElementById("alarmSet");
  let timer = inputField.value;
  //zero before single second function
  let zero = function (){
    return timer <=9 ? '0'+timer : timer
  }
  // header texts with time
  const heading = document.getElementById("timeRemaining");
  heading.innerText = `Time Remaining: 00:${zero()}`;
  //setInterval 
  const myInterval = setInterval(() => {
    timer -= 1; 
    heading.innerText = `Time Remaining: 00:${zero()}`;
    if (timer <= 0) {
      clearInterval(myInterval);
    // change background color of when alarm starts
      bodyImg.backgroundColor = 'rgb(8, 171, 212)'
      playAlarm();
      heading.innerText =`Time Remaining: 00:00`;
    } 
  }, 1000);
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
