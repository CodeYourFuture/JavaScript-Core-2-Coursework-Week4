function setAlarm() {
  let value = document.getElementById("alarmSet").value;
  let title = document.getElementById("timeRemaining");
  function humanReadable (value) {
    let hours = Math.floor(value/3600);
    let minute = Math.floor(((value/3600)%1)*60)
    let second = Math.round(((((value/3600)%1)*60)%1)*60)
    if(hours < 10){
        hours = `0${hours}`
    }
    if(minute < 10){
        minute = `0${minute}`
    }
    if(second === 60){
        minute += 1;
        second = 0 
    }
    if(second < 10){
        second = `0${second}`
    }
    return `Time remaining ${hours}:${minute}:${second}`
  }
  
  title.innerText = humanReadable(value)
  let startTheAlarm = setInterval(decreaseSec,1000);

  function decreaseSec(){
    value -= 1;
    title.innerText = humanReadable(value)
    if(value == 0){
      clearInterval(startTheAlarm);
      playAlarm()
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
