let alarmInterval;

function setAlarm() {
  //get input value in seconds
  let timeSetInputEl = document.getElementById("alarmSet");
  let time = timeSetInputEl.value;

  //getting counter display
  let timeRemainEl = document.getElementById("timeRemaining");

  let interval = setInterval(() => {
    //work out minutes and seconds from input given
    let mm = Math.floor(time / 60);
    let ss = time % 60;

    //adding a zero in front if its less than 10.
    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;

    //display time on DOM
    timeRemainEl.textContent = `Time Remaining: ${mm}:${ss}`;

    time--;

    if (time < 0) {
      clearInterval(interval);
      playAlarm();

      //changing background during alarm
      backgroundColors = [
        "#f94144",
        "#f3722c",
        "#f8961e",
        "#f9844a",
        "#f9c74f",
        "#90be6d",
        "#43aa8b",
        "#4d908e",
        "#577590",
        "#277da1",
      ];

      alarmInterval = setInterval(() => {
        let alarmBackground = document.querySelector("body");
        let randomI = Math.floor(Math.random() * backgroundColors.length);
        alarmBackground.style.backgroundColor = backgroundColors[randomI];
      }, 1000);
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
    clearInterval(alarmInterval);
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
