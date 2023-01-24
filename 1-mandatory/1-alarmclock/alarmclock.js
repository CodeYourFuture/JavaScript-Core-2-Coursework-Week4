// Variables to store the set time, remaining time, and interval ID
// and body , pasuedTime(for pause)
let setTime;
let remainingTime;
let intervalId;

let body = document.querySelector("body");
let flashingIntervalId;

//store the remaining time in this 'pausedTime'
let pausedTime;


// Function to handle setting the alarm
function setAlarm() {
  // Get the value of the input field
  setTime = document.getElementById("alarmSet").value;
  // Set the remaining time to the set time
  remainingTime = setTime;
  // Update the Time Remaining title with the remaining time
  document.getElementById("timeRemaining").innerHTML =
    "Time Remaining: 00:" + remainingTime;
  // Start the countdown
  intervalId = setInterval(countdown, 1000);
}

// Function to handle counting down the remaining time
function countdown() {
  // Decrement the remaining time
  remainingTime--;
  // Update the Time Remaining title with the remaining time
  document.getElementById("timeRemaining").innerHTML =
    "Time Remaining: 00:" + remainingTime;
  // Check if the remaining time has reached 0
  if (remainingTime === 0) {
    // If so, clear the interval and play the alarm
    clearInterval(intervalId);
    playAlarm();

    // Change the background color to red
    body.style.background = "red";
    // Start the flashing interval
    flashingIntervalId = setInterval(flashBackground, 500);
  }
}

function flashBackground() {
  // Alternate between red and white background color
  body.style.background = body.style.background === "red" ? "white" : "red";
}

// Function to handle stopping the alarm
function pauseAlarm() {
  // Clear the interval and pause the alarm sound
  clearInterval(intervalId);
  audio.pause();

  // Clear the flashing interval
  clearInterval(flashingIntervalId);
  body.style.background = "white";
}


/**
 * Add pause functionality to alarm clock by adding a new button to HTML file and
 * a corresponding event listener in thisJavaScript file.
 */

//add an event listener for the "pause" button that calls the pauseCountdown() function
// when clicked
document.getElementById("pause").addEventListener("click", () => {
  pauseCountdown();
});
//add the pauseCountdown() function to your JavaScript file, which will clear the 
//interval that is running the countdown and store the remaining time in 'pausedTime'
// variable, so it can be resumed later.
  function pauseCountdown() {
    clearInterval(intervalId);
    pausedTime = remainingTime;
  }

//add another button and event listener to index.html and this alarmclock.js files, to 
//resume the countdown.
document.getElementById("resume").addEventListener("click", () => {
  remainingTime = pausedTime;
  intervalId = setInterval(countdown, 1000);
});


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
