function setAlarm() {
  const clock = document.querySelector("#timeRemaining"); // select the H1 tag 
  let time = document.getElementById("alarmSet").value; // get value from input and select by ID
  let timer = setInterval(() => { // set timer every 1 sec
    time--; // value - 1
    if (time <= 0) { 
      clearInterval(timer); // reset timer 
      playAlarm(); // play alarm 
    }
    clock.innerHTML = `Time Remaining: ${Math.floor(time / 60) }:${( 
      "0" +
      (time % 60)
    ).slice(-2)}`; // Display clock by hours and sec 
  }, 1000 // set after 1 sec );
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
