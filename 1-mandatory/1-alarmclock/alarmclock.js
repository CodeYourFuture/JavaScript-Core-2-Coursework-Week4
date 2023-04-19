function setAlarm() {
  const input = document.getElementById("alarmSet"); //input id
  let time = input.value;
  const title = document.getElementById("timeRemaining"); //header id
  title.innerText = `Time Remaining: ${timer(time)}`; //second move for tittle.innerText fixed, passes test 1 and 2
  console.log(title.innerText);

  const alarmVoice = document.createElement("audio");
  const voiceSource = document.createElement("source");
  voiceSource.setAttribute("src", "alarmsound.mp3");
  alarmVoice.append(voiceSource);
  title.append(alarmVoice);

  let titleTimer = () => {
    title.innerText = `Time Remaining: ${timer(time - 1)}`; //tittle.innerText is declared here first

    if (time === 0) {
      clearInterval(timeLoop);
/*       setInterval(function () {
        document.body.style.backgroundColor =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
      }, 100); */
      console.log("time is up");
      playAlarm();
    }
    time--;
  };
  const timeLoop = setInterval(titleTimer, 1000);
}

function addZeroBefore(n) {
  return (n < 10 ? "0" : "") + n;
}
function timer(n) {
  let res;
  if (n < 60) {
    //res = `00:${n}`;
    res = `00:${addZeroBefore(n)}`;
  } else if (n > 59) {
    let min = 0;
    let sec = 0;
    min = parseInt(n / 60);
    sec = n % 60;
    res = `${addZeroBefore(min)}:${addZeroBefore(sec)}`;
  }
  return res;
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
