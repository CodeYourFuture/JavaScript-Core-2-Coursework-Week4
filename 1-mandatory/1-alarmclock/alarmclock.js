
setInterval(countDown,1000);
const duration = 1;
function countDown(){
  duration--;
  console.log(countDown);
  if (duration === 0) {
    clearInterval(countDown) 

  }
}

function playAlarm(){
audio.play();
}



function setAlarm() 


// {
//   let countDown = setInterval(() => {
//     duration--;
//     console.log(duration);
//     if (duration === 0) {
//       clearInterval(countDown);
//     }
//   }, 1000);
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
