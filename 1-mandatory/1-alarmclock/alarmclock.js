let backgroundFlashing;
function changeBackgroundColor() {
 backgroundFlashing = setInterval(() => {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
     document.body.style.backgroundColor = `#${randomColor}`;
  },1000);
}
function stopFlashing() {
  clearInterval(backgroundFlashing);
  document.body.style.backgroundColor = 'white';
}
function setAlarm() {
 
  let btnSet = document.getElementById('set');
  let h1TimeRemaining = document.getElementById('timeRemaining');
  let inputAlarmSet = document.getElementById('alarmSet');
  let date = new Date("July 21, 1983 00:00:00");
    date.setSeconds(inputAlarmSet.value);
    h1TimeRemaining.innerHTML = 'Time Remaining: ' + date.toString().substring(19, 24);
   let myInterval = setInterval(() => {
      date.setSeconds(date.getSeconds() - 1);
      h1TimeRemaining.innerHTML =
        "Time Remaining: " + date.toString().substring(19, 24);
      if (date.toString().substring(19, 24) === "00:00") {
        playAlarm();
        changeBackgroundColor();
        clearInterval(myInterval);
      }
    }, 1000)
    
   
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
    stopFlashing();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
