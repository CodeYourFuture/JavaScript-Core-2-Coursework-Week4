let numberOfSeconds;
let intervalID;

function setAlarm() {
     const setButton = document.getElementById("set");
     const timeRemaining = document.getElementById("timeRemaining");
     const setTime = document.getElementById("alarmSet");
     numberOfSeconds = setTime.value;
     if (numberOfSeconds === "" || Number.isNaN(numberOfSeconds) || numberOfSeconds <= 0)
     {
                  alert("Please enter the number of seconds. This must be greater than zero and less than 3600")
                  return
     }
        intervalID = setInterval(displayAndUpdate, 1000);
}

function displayAndUpdate() {
        let displayStr = 'Time Remaining: ';        
        let numSecs = numberOfSeconds;
        let aNumber = String(Math.trunc(numberOfSeconds/60));
        displayStr += aNumber.padStart(2, '0') + ":";
        aNumber = String(numberOfSeconds % 60);
        displayStr += aNumber.padStart(2, '0');
        // Display the current value of seconds remaining; then subtract 1     
        timeRemaining.innerText =  displayStr;
        if (numberOfSeconds-- <= 0)
        {
              playAlarm();
              clearInterval(intervalID); // remove the setInterval
        }
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
