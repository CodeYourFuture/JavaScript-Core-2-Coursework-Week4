function setAlarm() {
  let setAlarm = document.querySelector("#alarmSet")
  const startingMinutes = setAlarm.value;
  let time = startingMinutes * 60;

  let timeRemaining = document.querySelector("#timeRemaining");

  setInterval(countDown, 1000);

  function countdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? `0` + seconds : seconds;
    timeRemaining.textContent = `Time Remaining: ${minutes}: ${seconds}`;
    if (time == 0) {
      timeRemaining.textContent = `Time Remaining: 00:00`;
      playAlarm();
      let colors = ["red", "green", "yellow", "purple", "pink"];
      let index = 0;
      function changeColor() {
        document.querySelector(".centre").style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
        setTimeout(changeColor, 100);
      }
      changeColor();
    } else if (time > 0) {
      time--;
    }
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
