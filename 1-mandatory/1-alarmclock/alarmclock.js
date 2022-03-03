// When the Set Alarm button is clicked, get the value of the input field
// When you have the input field value, set the title to the correct value
// Work out how to update the Time Remaining title every second
// When the remaining time left is 0, play the alarm sound
// extra
// Make the background change color when the alarm clock finishes
// Try making the background flash!
// Could you add pause functionality so that the count down stops and then you restart it later?

//make a boolean switch to slow th background colour change
let toggle = true;

//define the fuction befor it is used later
function bgColor() {
  bgInterval = setInterval(function () {
    toggle = !toggle; //toggle between true and false for the bgColor
    if (toggle) {
      //add the background .bgColor
      document.querySelector(`body`).classList.add(`bgColor`);
    } else {
      //remove the background .bgColor
      document.querySelector(`body`).classList.remove(`bgColor`);
    }
  }, 1000);
}

let input; //declare the input varialbe - total number of seconds
function setAlarm() {
  //starting the time
  input = document.getElementById(`alarmSet`).value;
  //  console.log(input);
  //count down when the alrm is set

  //repeated every 1000 ms
  interval = setInterval(function () {
    //deducting 1 form the input
    input -= 1;
    if (input === 0) {
      clearInterval(interval);
      bgColor();
      document.getElementById(`alarmSet`).value = ``;
      audio.play();
    }
    //   console.log(input);
    document.getElementById(`timeRemaining`).innerHTML =
      `Time Remaining ` +
      (Math.floor(input / 60) < 10 ? `0` : ``) +
      Math.floor(input / 60) + //number of minutes
      `:` +
      (input % 60 < 10 ? `0` : ``) +
      (input % 60); //number os seconds
  }, 1000);
}

//stops the background from flashing
document.getElementById("stop").addEventListener("click", () => {
  clearInterval(bgInterval);
  //remove the background .bgColor
  document.querySelector(`body`).classList.remove(`bgColor`);
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
