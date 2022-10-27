function setAlarm() {
  // get the element to show ouput
  const timeRemaining = document.getElementById("timeRemaining");
  document.querySelector("body").style.backgroundColor = "white";
  //  get the input value
  let alarmSet = document.getElementById("alarmSet").value;
  const countDown = setInterval(() => {
    alarmSet--;
    timeRemaining.innerText = `Time Remaining: 00:${alarmSet}`;
    console.log(alarmSet);
    if (alarmSet === 0) {
      playAlarm();
      document.querySelector("body").style.backgroundColor = "red";
      clearInterval(countDown);
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
    document.querySelector("body").style.backgroundColor = "black";
  pauseAlarm();
   
  });
}

function playAlarm() {
  audio.play();
}

 function pauseAlarm() {
audio.pause();
 clearInterval(countDown)
}

window.onload = setup;
