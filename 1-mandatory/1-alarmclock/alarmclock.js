function setAlarm() {
  //get <input> id and return its value
  const inputEl = document.getElementById("alarmSet");
  let timer = inputEl.value;

  //get <h> id and set title to correct value
  const headerEl = document.getElementById("timeRemaining");
  headerEl.innerText = `Time Remaining: 00:${timer}`;

  //update 'time remaining' every second
  const interval = setInterval(() => {
    timer -= 1;
    headerEl.innerText = `Time Remaining: 00:${timer}`;

    //play alarm sound when remaining time is 0
    if (timer === 0) {
      clearInterval(interval);
      changeBgColor('red');
      playAlarm();
    }
  }, 1000);

}

//function to change color when alarm finishes
function changeBgColor(color) {
   document.querySelector("body").style.backgroundColor = color;
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
  changeBgColor('white');
  audio.pause();
}

window.onload = setup;
