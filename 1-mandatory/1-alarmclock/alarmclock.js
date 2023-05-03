function setAlarm() {
  //here to store the input from user in a variable
  let inputEl = document.getElementById("alarmSet");
  let timeFromUser = inputEl.value;
  let setAlarmButton = document.getElementById("set");

  let h1El = document.getElementById("timeRemaining");
  // h1El.innerHTML = `Time Remaining: ${timeFromUser}`;
  //how to format the time entered from user to look like 00:00
  // then how to start decreasing one by one
  //maybe for loops lets try
  for (let seconds = timeFromUser; seconds >= 0; seconds--) {
    console.log(`Time Remaining: ${seconds}`);
    h1El.innerHTML = `Time Remaining: ${seconds}`;
    console.log(h1El.innerHTML);
  }
  setInterval(function () {
    for (let seconds = timeFromUser; seconds >= 0; seconds--) {
      console.log(`Time Remaining: ${seconds}`);
      h1El.innerHTML = `Time Remaining: ${seconds}`;
      console.log(h1El.innerHTML);
    }
  }, 10);
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
