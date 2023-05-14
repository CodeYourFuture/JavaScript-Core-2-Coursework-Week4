function setAlarm() {
  
    let timerId;
    let flashingId = "";
    
    const inputTime = document.getElementById("alarmSet").value;
    let remainTime = document.getElementById("timeRemaining");
    remainTime.innerText = "Time Remaining: " + formatTime(inputTime);
  
    let alarmTime = parseInt(inputTime);
    timerId = setInterval(() => {
      alarmTime -= 1;
      remainTime.innerText = "Time Remaining: " + formatTime(alarmTime);
      if (alarmTime == 0) {
        clearInterval(timerId);
        playAlarm();
        flashBgr();
      }
      function flashBgr() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
     console.log(bgColor);
      
        document.body.style.background = bgColor;
      }
    }, 1000);
  }
  
  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }





// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmSound.mp3");

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
