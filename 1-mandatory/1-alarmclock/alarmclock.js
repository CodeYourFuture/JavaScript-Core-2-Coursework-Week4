// let alramBtnSet = document.querySelector("#set");
// function setAlarm() {
//   let timeRemain = document.querySelector("#timeRemaining");
//   let alramInput = document.querySelector("#alarmSet");
//   for (let i = parseInt(alramInput.value); i >= 0; i--) {
//     setTimeout(function () {
//       timeRemain.innerHTML = i;
//       if (i === 0) {
//         playAlarm();
//       }
//     }, 1000 * (alramInput.value - i));
//   }
// }


let alramBtnSet = document.querySelector("#set");
let intervalId;
function setAlarm() {
  let timeRemain = document.querySelector("#timeRemaining");
  let alramInput = document.querySelector("#alarmSet");

  let i = parseInt(alramInput.value);

  intervalId = setInterval(function () {

    timeRemain.innerHTML = ` :${i}`;
    i--;
    if (i === -1) {
      document.body.style.backgroundColor = 'red';
      playAlarm();
      clearInterval(intervalId);
    }
  }, 1000);
}
let pauseBtn = document.querySelector('#pause')
pauseBtn.addEventListener('click',()=>{
  clearInterval(intervalId);
})

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
