

function setAlarm() {
  let startingTime = document.getElementById("alarmSet")
  let time = startingTime.value;;

  let countDown = document.getElementById("timeRemaining");
  countDown.innerText = `Time Remaining: 00:${time}`;
  const myInterval = setInterval(() => {
    
    time--;
    countDown.innerText = `Time Remaining :${time}`;

    if (time === 0) {
      clearInterval(myInterval);
      playAlarm();
    }
  }, 1000);
}












//DO NOT EDIT BELOW HERE

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
