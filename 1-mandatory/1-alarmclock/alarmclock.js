function setAlarm() {
  let inputValue = document.querySelector("#alarmSet").value;   // link to input field
  let timeOnScreen = document.querySelector("#timeRemaining");  // link to title
  let stopAlarm = document.querySelector("#stop");              // link to 'Stop Alarm' button
  let setAlarmBtn = document.querySelector("#set");             // link to 'Set Alarm' button
  
  stopAlarm.addEventListener("click", () => {  // 'Stop Alarm' button stops alarm sound
    audio.src = ""; 
  });
  
  let seconds = inputValue; // format input value so = 00:00
  let minutes = 0;
  if (inputValue > 59) {
    minutes = Math.floor(inputValue / 60);
    seconds = inputValue % 60;
  };

  setAlarmBtn.addEventListener("click", () => {
    setInterval(function() {   // timer counts down
    timeOnScreen.innerHTML = `Time Remaining: ${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    if (seconds > 0) {
      seconds--;
    } else if (seconds === 0 && minutes > 0) {
      minutes--;
      seconds = 59;
    } else {
      playAlarm(); // alarm sound plays when timer reaches 0

      setInterval(function() {  // set background colour to flash when alarm goes off
        let colourArray = ["red", "white", "yellow", "green", "blue"];
        document.body.style.backgroundColor = colourArray[Math.floor(Math.random() * colourArray.length)];
      }, 1000)

    }
  }, 1000);
  });
};

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
