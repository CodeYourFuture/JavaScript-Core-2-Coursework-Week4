function setAlarm() {
  let inputTime=document.getElementById("alarmSet").value;
  let timeDisplay=document.getElementById("timeRemaining");
  let isPaused=false;
  let interval=setInterval(()=>{
    let minutes=Math.floor(inputTime / 60);
    let seconds=inputTime%60;
    minutes= minutes>=10 ? minutes : "0"+minutes;
    seconds= seconds>=10 ? seconds : "0"+seconds;
    timeDisplay.innerText=`Time Remaining: ${minutes}:${seconds}`;
    if(!isPaused){
     inputTime--;
    }
    document.getElementById("pause").addEventListener("click",(e)=>{
      e.preventDefault();
      isPaused = true;
    })
    document.getElementById("restart").addEventListener("click",(e)=>{
      e.preventDefault();
      isPaused = false;
    })

    if (inputTime < 0) {
      clearInterval(interval);
      playAlarm();
      let colors = ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"];
      let colorInterval = setInterval(() => {
        let colorIndex = Math.floor(Math.random() * colors.length);
        backgroundSetColor = document.querySelector("body");
        backgroundSetColor.style.backgroundColor = colors[colorIndex];

        document.getElementById("stop").addEventListener("click", () => {
          clearInterval(colorInterval);
          backgroundSetColor.style.backgroundColor = "";
        });
      }, 1000);
    }
  },1000)
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

