
function setAlarm() {
  let alarmSet = document.querySelector("#alarmSet");
  let displayAlarm = alarmSet.value;
  let timeRemaining = document.querySelector("#timeRemaining");
  

   setInterval(() => {

    if (displayAlarm > 0) {
      timeRemaining.innerText = `Time Remaining: ${displayAlarm--}`;
      if (displayAlarm === 0) {
         playAlarm();
        // audio.play();
        // audio.loop = true;
      }
     }
    //  background color
     setInterval(function() {
       changeColor();
       }, 1000);
       function changeColor() {
         let randomColor = Math.floor(Math.random() * 16777215).toString(16);
         document.body.style.backgroundColor = "#" + randomColor

     };
     


  }, 1000);

  alarmSet.value = "";
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
