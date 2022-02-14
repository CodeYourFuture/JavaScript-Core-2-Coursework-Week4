
// Try this code on Netfly
// https://amazing-payne-733922.netlify.app/




 const timeRemaining = document.querySelector("#timeRemaining");
 let alarmSetvalue = document.querySelector("#alarmSet");
 const setTime = document.querySelector("#setTime");

let setId =document.getElementById("set");
let stopId = document.getElementById("stop");
const date = new Date("July 21, 1983 00:00:00");
let interval;
let intervalColor;

function setAlarm() {
  if (alarmSetvalue.value !=='') date.setSeconds(alarmSetvalue.value);

  let color = true;
  const changeBackground = (color) => (color ? "white" : "black");

  const timer = () => {
    const dateToString = date.toString().substring(19, 24);

    timeRemaining.innerText = `Time Remaining: ${dateToString}`;
    if (dateToString != "00:00") {
     setId.innerText='Resume'
     stopId.innerText='Pause Timer'
      date.setSeconds(date.getSeconds() - 1);
    }
    if (dateToString === "00:00") {
      setId.innerText = "Set Alarm";
      stopId.innerText = "Stop alarm";
      intervalColor = setInterval(() => {
        timeRemaining.style.color = changeBackground(!color);
        setTime.style.color = changeBackground(!color);
        document.body.style.backgroundColor = changeBackground(color);
        color ? (color = false) : (color = true);
      }, 100);
      playAlarm();
      clearInterval(interval);
    }
  };

  interval = setInterval(timer, 1000);
  alarmSetvalue.value = "";
}


// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  setId.addEventListener("click", () => {
    setAlarm();
  });

  stopId.addEventListener("click", () => {
    pauseAlarm();
    clearInterval(interval);
    clearInterval(intervalColor);
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
