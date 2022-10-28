
  
//  const inputTag = document.getElementById("alarmSet");
//  const timer = document.getElementById("timeRemaining");
//  let inputValue = 0;

// function setAlarm() {
//   inputValue = parseInt(inputTag.value);
//   // for (let x = inputValue; x > -1; x--) {
//     setTimeout(delays, 1000, inputValue);
    
//   };

 
// // }

// function delays(x) { 

//   timer.innerText = "Time REMAINING => " + x;
//   console.log(timer.innerText);
     
  

//   }


function setAlarm() {
 

  let timeSetInput = document.querySelector("#alarmSet");
  let remainder = document.querySelector("#timeRemaining");
  let countDown = timeSetInput.value;

  let timer = setInterval(() => {
    const min = Math.floor(countDown / 60);
    const minFormat = min < 10 ? `0${min}` : min;
    const secs = countDown % 60;
    const secFormat = secs < 10 ? `0${secs}` : secs;
    remainder.textContent = `Time Remaining : ${minFormat}:${secFormat}`;
    countDown--;

    if (countDown < 0) {
      clearInterval(timer);
      playAlarm();
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
