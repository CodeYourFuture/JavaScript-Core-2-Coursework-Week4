function setAlarm() {
  let input = document.getElementById("alarmSet").value;

  if(input === "" || input == 0)
  {
    return;
  }

  let time = input;

  document.getElementById("alarmSet").value = "";

  let interval = setInterval(function()
  {
    updateCoundown();
  }, 1000);


  function updateCoundown()
  {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("timeRemaining").textContent = "Time Remaining: " + minutes + ":" + seconds;

    time--;

    if(time < 0)
    {
      clearInterval(interval);
      playAlarm();
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
