function setAlarm() {

  let timeRemainEl = document.getElementById("timeRemaining");
  let newDetails = timeRemainEl.innerText.replace(":00", ":");
  timeRemainEl.innerText = newDetails;
  let enteredSpanEl = document.createElement("span");
  timeRemainEl.appendChild(enteredSpanEl);

  let timeSetInputEl = document.getElementById("alarmSet");
  let timeSetCounter = timeSetInputEl.value;

  const interval = setInterval(() => {
    timeSetCounter =
    timeSetCounter < 10 ? "0" + timeSetCounter : timeSetCounter;
    enteredSpanEl.textContent = timeSetCounter;
    timeSetCounter--;
    if (timeSetCounter< 0 ) {
      clearInterval(interval);
      console.log('Ding!');
    }
  }, 1000);

  // const d = new Date();
  // //d.setSeconds(timeSetVal);
  // enteredSpanEl.textContent = d.setSeconds(timeSetVal);
  /* <h1 id="timeRemaining">Time Remaining: 00:00</h1>; */
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
