function setAlarm() {
  let h1El = document.getElementById('timeRemaining');
  let inputEl = document.getElementById("alarmSet").value;
  
  let stopWatch = setInterval(() => {
    let secToMin = Math.floor(inputEl / 60);
    let minFormat = secToMin < 10 ? "0" + secToMin : secToMin;
    let secCounter = inputEl % 60;  //when sec equal to 60 start over
    let secFormat = secCounter < 10 ? "0" + secCounter : secCounter;
    h1El.textContent = `Time Remaining: ${minFormat}: ${secFormat}`;
    inputEl--;
    if(inputEl < 0){
      clearInterval(stopWatch);
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