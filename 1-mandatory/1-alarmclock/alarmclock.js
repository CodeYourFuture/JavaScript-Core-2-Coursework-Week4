function setAlarm() {
  let timeOfAlarm = document.getElementById("alarmSet");
  let timeRemaining = document.getElementById("timeRemaining");
  let btn = document.getElementById("set");
  let alarmTime = timeOfAlarm.value;
  let time = alarmTime ;
  let timer = setInterval(updateH1,1000);
  
  function updateH1(){
    if (time === 0 ){ 
      timeRemaining.innerHTML = `Time Remaining: 00:00`;
      playAlarm();
      let contentColor = document.body;
      interval = setInterval(() => {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        contentColor.style.backgroundColor  = bgColor;
        }, 1000)
      
      } else {
          let minutes = Math.floor(time / 60);
          let seconds = time % 60;
          timeRemaining.innerHTML = 
          `Time Remaining: ${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
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
