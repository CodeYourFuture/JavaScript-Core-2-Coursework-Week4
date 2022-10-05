function setAlarm() {
  let alarmSet = document.getElementById("alarmSet").value;
  let minCounter = document.getElementById("min");
  let secCounter = document.getElementById("sec");
  let min = alarmSet;
  let sec = 60;
  if (alarmSet >= 0 && alarmSet < 100) {
    let inter = setInterval(() => {
      if (min == 0 && sec == 0) {
        clearInterval(inter);
        playAlarm();
        console.log(true);
      } else {
        if (sec === 0) {
          min--;
          if (min !== -1) sec = 60;
        }
        sec--;
        min.toString().length === 1
          ? (minCounter.innerText = "0" + min)
          : (minCounter.innerText = min);

        sec.toString().length === 1
          ? (secCounter.innerText = "0" + sec)
          : (secCounter.innerText = sec);
      }
    }, 1000);
  } else alert("Please choose number between 0 and 99");
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
