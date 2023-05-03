function setAlarm() {
  //here to store the input from user in a variable
  let inputEl = document.getElementById("alarmSet");
  let timeFromUser = inputEl.value;
  let h1El = document.getElementById("timeRemaining");
  // h1El.innerHTML = `Time Remaining: ${timeFromUser}`;

  //how to format the time entered from user to look like 00:00
  // then how to start decreasing one by one
  //maybe for loops lets try
  // 9
  // setInterval(function () {
  //   for (let seconds = timeFromUser; seconds >= 0; seconds--) {
  //     h1El.innerHTML = `Time Remaining: ${seconds}`;
  //   }
  // }, 1000);

  //I should go back to CYF videos and lessons before
  // i knew that I'll need to watch it one by one lols

  setInterval(function () {
    while (timeFromUser >= 0) {
      h1El.innerHTML = `Time Remaining: ${timeFromUser}`;
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
