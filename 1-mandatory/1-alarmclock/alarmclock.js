function setAlarm() {
  const inputTime = document.getElementById("alarmSet").value;
  const timeRemaining = document.getElementById("timeRemaining");
  /*function inputConvert(num) { 
    const hours = Math.floor(num / 60);  
    const minutes = num % 60;
    return  hours + ":" + minutes; ;       
}*/
//if (inputTime < 60) {
  // timeRemaining.innerText = `Time Remaining: 00:${inputTime}`;
//}
//else {
  //const result = inputConvert(inputTime);
  //return timeRemaining.innerText =  `Time Remaining : ${result}`;
//}

//if (result === 0) {
  //playAlarm();
//}

setInterval(function() {
  var hours = Math.floor((inputTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((inputTime % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((inputTime % (1000 * 60)) / 1000);
  return timRemaining.innerText = `Time Remaining: ${hours}:${minutes}:${seconds}`;

  // If the count down is finished, write some text

  if (inputTime < 0) {
    playAlarm();
  }
}, 1000);

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
