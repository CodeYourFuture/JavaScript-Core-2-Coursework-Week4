function setAlarm() {
  const setAlarmButton = document.querySelector("#set");
  let displayTime = document.querySelector("#second");

  setAlarmButton.addEventListener("click", function () {
    const inputValue = document.querySelector("#alarmSet").value;
    displayTime.innerHTML = inputValue;

    setInterval(() => {
      if (displayTime.innerHTML > 0) {
       document.body.style.backgroundColor = "green";
        displayTime.innerHTML--;
        
      } else {
        displayTime = 0;
        document.body.style.backgroundColor = "orange";
      }
    }, 1000);


  });

}

setAlarm();

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
