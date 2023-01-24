let timer = setInterval(function countDown() {
  let changeTime = document.getElementById("timeRemaining");
  let innerTextOfTimer = changeTime.innerText.substr(16, 5);
  let minutes = +innerTextOfTimer.substr(0, 2);
  let seconds = +innerTextOfTimer.substr(3, 2);
  // console.log(`Time Remaining: ${minutes}:${seconds}`);
 
  if (seconds > 0 || minutes === 0) {
    seconds = seconds - 1;
    changeTime.innerText = `Time Remaining: 00:${seconds}`;
    console.log(seconds);
  }
}, 1000);

function setAlarm() {
  const input = document.getElementById("alarmSet").value;
  const changeTime = document.getElementById("timeRemaining");
  let minutes = "00";
  let seconds = "00";
  if (input.toString().length <= 2) {
    seconds = input.toString().padStart(2, "0");
  } else if (input.toString().length > 2) {
    minutes = input.toString().substr(0, 2);
    seconds = input.toString().substr(2, 2).padEnd(2, "0");
  }
  changeTime.innerText = `Time Remaining: ${minutes}:${seconds}`;

  timer;
}

// 1234
// When you click the `Set Alarm` button the counter at the top of the screen should
// change to the number you entered in the `input` field. For example, if the `input`
// field says `10` then the title should say `Time Remaining: 00:10`.

// Every one second the title should count down by one.

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
