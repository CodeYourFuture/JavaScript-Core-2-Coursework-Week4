
// setInterval(countDown,1000);
// const duration = 1;
// function countDown(){
//   duration--;
//   console.log(countDown);
//   if (duration === 0) {
//     clearInterval(countDown) 

//   }
// }

// function playAlarm(){
// audio.play();
// }



// function setAlarm() 


// // {
// //   let countDown = setInterval(() => {
// //     duration--;
// //     console.log(duration);
// //     if (duration === 0) {
// //       clearInterval(countDown);
// //     }
// //   }, 1000);
// // }




let flasher = "";
let timer = "";
let timeRemainingInSeconds = 0;

function flashBackground() {
  flasher = setInterval(flashIt, 1000);
  function flashIt() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.backgroundColor = bgColor;
  }
}

function setAlarm() {
  let inputSeconds = parseInt(document.getElementById("alarmSet").value);
  timeRemainingInSeconds = inputSeconds;
  let timeRemainingH1 = document.getElementById("timeRemaining");
  let minutes = 0;
  let seconds = 0;
  minutes = Math.floor(timeRemainingInSeconds / 60);
  seconds = timeRemainingInSeconds % 60;
  timeRemainingH1.textContent = `Time Remaining: ${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  timer = setInterval(countdown, 1000);

  function countdown() {
    if (timeRemainingInSeconds === 0) {
      clearInterval(timer);
      playAlarm();
      flashBackground();
      return;
    }
    timeRemainingInSeconds--;
    minutes = Math.floor(timeRemainingInSeconds / 60);
    seconds = timeRemainingInSeconds % 60;
    timeRemainingH1.textContent = `Time Remaining: ${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }
}

let pauser = document.getElementById("pause");
pauser.addEventListener("click", () => {
  clearInterval(timer);
  document.getElementById("alarmSet").value = timeRemainingInSeconds;
});

// // DO NOT EDIT BELOW HERE

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

