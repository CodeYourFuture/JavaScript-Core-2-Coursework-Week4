// When you click the `Set Alarm` button the counter at the top of the screen should change to the number you entered in the `input` field. For example, if the `input` field says `10` then the title should say `Time Remaining: 00:10`.

// Every one second the title should count down by one.

// When the `Time Remaining` reaches `00:00` the alarm should play a sound. You can make the sound happen by using `playAlarm()`.

// You can stop the alarm sound by pressing the `Stop Alarm` button.

// ### Steps to complete

// 1. When the `Set Alarm` button is clicked, get the value of the input field
// 2. When you have the input field value, set the title to the correct value
// 3. Work out how to update the `Time Remaining` title every second
// 4. When the remaining time left is 0, play the alarm sound

function setAlarm() {
  let alarmSet = document.querySelector("#alarmSet");
  let timer = alarmSet.value;
  let timeRemaining = document.querySelector("#timeRemaining");

  let timerMinutes = Math.floor(timer / 60);
  let timerSeconds = timer % 60;

  console.log(timerMinutes);
  console.log(timerSeconds);

  timeRemaining.innerText = `Time Remaining: ${timerMinutes}:${timerSeconds}`;

  let myInterval = setInterval(() => {
    if (timerSeconds < 10) {
      timerSeconds = `0${timerSeconds}`;
    }

    timerSeconds = timerSeconds - 1;

    timeRemaining.innerText = `Time Remaining: ${timerMinutes}:${timerSeconds}`;

    if (timerMinutes === 0 && timerSeconds === 0) {
      clearInterval(myInterval);
      playAlarm();
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
