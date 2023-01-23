// Get elements
const inputField = document.getElementById("alarmSet");
const setAlarmButton = document.getElementById("set");
const stopAlarmButton = document.getElementById("stop");
const title = document.getElementById("timeRemaining");

// Initialize variables
let timeRemaining = 0;
let intervalId;
let flash;

setAlarmButton.addEventListener("click", function () {
  // Check if input field is empty
  if (inputField.value === "" || inputField.value < 0) {
    // Display message or return
    alert("Please enter a valid value");
    return;
  }
  // Get value from input field
  timeRemaining = inputField.value;
  // update our time
  updateTitle();

  // Start the countdown
  intervalId = setInterval(countdown, 1000);
  inputField.disabled = true;
  inputField.value = "";
  setAlarmButton.disabled = true;
});

// Event listener for stop alarm button
stopAlarmButton.addEventListener("click", function() {
  // Clear the interval and stop the countdown
  clearInterval(intervalId);
  // Stop the alarm
  pauseAlarm();
  timeRemaining = 0
  updateTitle()
  inputField.disabled = false;
  setAlarmButton.disabled = false;
  clearInterval(flash);
  document.body.style.backgroundColor = "white"
});


// Countdown function
function countdown() {
  // Decrement time remaining
  timeRemaining--;
  // update our time
  updateTitle();
  // Check if time is up
  if (timeRemaining === 0) {
    // Clear the interval
    clearInterval(intervalId);
    // Play the alarm
    playAlarm();
    // Change background
    flash = setInterval(changeBackgroundColor,500)
  }
}

// Function to update the title element
function updateTitle() {
  let minutes = Math.floor(timeRemaining / 60);
  let seconds = timeRemaining % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  title.innerHTML = `Time Remaining: ${minutes}:${seconds}`;
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


// Extra 
// Background color changing 
const colors = ["red", "white"];
let currentColor = 0;

function changeBackgroundColor(){
  document.body.style.backgroundColor = colors[currentColor];
  currentColor = (currentColor + 1) % colors.length;
}

// Get elements
const pauseAlarmButton = document.getElementById("pause");
const resumeAlarmButton = document.getElementById("resume");

// Event listener for pause alarm button
pauseAlarmButton.addEventListener("click", function() {
    clearInterval(intervalId);
    paused = true;
});

// Event listener for resume alarm button
resumeAlarmButton.addEventListener("click", function() {
    if (paused) {
        intervalId = setInterval(countdown, 1000);
        paused = false;
    }
});