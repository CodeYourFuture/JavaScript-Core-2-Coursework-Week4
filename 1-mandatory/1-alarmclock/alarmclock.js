// STYLING CHANGES
let uncenteredDivs = document.querySelectorAll("div.centre > div");
for (let div of uncenteredDivs) {
  div.style.textAlign = "center";
}

// DECLARE RECURRING VARIABLES
let 
  input = document.getElementById("alarmSet"),
  counter = document.getElementById("timeRemaining"),
  hours,
  minutes,
  seconds,
  updateTitle;

// CHANGED INPUT TYPE TO TIME AND CONFIGURED IT
const CUSTOM_SETUP = () => {
  input.type = "time";
  input.pattern = "[0-9]{2}:[0-9]{2}:[0-9]{2}";
  input.step = "1000";
  counter.innerText = `Time Remaining: 00:00:00`;
}

CUSTOM_SETUP();

// CHECK WHICH DIGITS NEED UPDATING
const CHECK_TIME = () => {
  if (seconds > "00") {
    return "Some seconds left";
  } else if (hours == "00" && minutes > "00" && seconds == "00") {
    return "No seconds left";
  } else if (hours > "00" && minutes == "00" && seconds == "00") {
    return "No minutes left";
  } else if (hours == "00" && minutes == "00" && seconds == "00") {
    return "No time left";
  }
};

// CHECK IF AN EXTRA "0" IS NEEDED FOR FORMATTING
const IS_SINGLE_DIGIT = (num) => num < 10;

// RECURRING CALL TO RERENDER TIMER AND UPDATE VARIABLES
const UPDATED_TIME = () => {
  const 
    CURRENTLY = CHECK_TIME(),
    RESET = "59";
  if (CURRENTLY === "Some seconds left") {
    seconds -= 1;
    if (IS_SINGLE_DIGIT(seconds)) {
      seconds = "0" + seconds;
    }
    return `${hours}:${minutes}:${seconds}`;
  } else if (CURRENTLY === "No seconds left") {
    minutes -= 1;
    if (IS_SINGLE_DIGIT(minutes)) {
      minutes = "0" + minutes;
    }
    seconds = RESET;
    return `${hours}:${minutes}:${seconds}`;
  } else if (CURRENTLY === "No minutes left") {
    hours -= 1;
    if (IS_SINGLE_DIGIT(hours)) {
      hours = "0" + hours;
    }
    seconds = RESET;
    minutes = RESET;
    return `${hours}:${minutes}:${seconds}`;
  } else if (CURRENTLY === "No time left") {
    clearInterval(updateTitle);
    playAlarm();
    return `Alarm!`;
  }
};

// CACHE INPUT VALUES AND SET INTERVALS
let setAlarm = () => {
  hours = input.value.substring(0,2);
  minutes = input.value.substring(3,5);
  seconds = input.value.substring(6);
  counter.innerText = `Time Remaining: ${input.value}`;
  updateTitle = setInterval(() => {
    let time = UPDATED_TIME(hours, minutes, seconds);
    counter.innerText = "Time Remaining: " + time;
  }, 1000);
};

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
