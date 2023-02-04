let bColchange;
let runClock;

function setAlarm() {
let countDownValue = document.getElementById("alarmSet").value; // returns a number 
  console.log(countDownValue);
  
const formatTimeToString = function (numb){
    let sixty = 60;
    let mins = Math.floor(numb / sixty);}
  let secs = numb % sixty;
  let timeVal = (divTimeVal)=>{
    return divTimeVal < 10? `0${divTimeVal}`: divTimeVal;    
  }
  document.getElementById("timeRemaining").textContent = `Time Remaining: ${timeVal(mins)}:${timeVal(secs)}`;
}
  
const runner = function(){
  if (countDownValue <= 0){
    //clear the setInternval or setTimeout function
    clearInterval(runClock);
    playAlarm();
     bColchange = setInterval(changeBackgroundColor, 1000);
  
    }
    //returnCountToDom.textContent = formatTimeToString(countDownValue);
    formatTimeToString(countDownValue);
    countDownValue--;
  };
  
  document.getElementById("alarmSet").value = null;
  let runClock = setInterval(runner, 1000);
  
 // -- color ---//
  // random number function 
  const randomNumber = (num) => {
    return Math.floor(Math.random() * num);
  };
  //create hsl color
  const randomColor = () => {
    const h = randomNumber(360);
    const s = randomNumber(100);
    const l = randomNumber(100);
    return `hsl(${h}deg, ${s}%, ${l}%)`;
  };
  // set background color 
  const changeBackgroundColor = () => {
    const newRandomColor = randomColor();
    document.getElementById("background").style.backgroundColor = newRandomColor;
  };

};

function stopAlarm() {
    clearInterval(bColchange);
    console.log("tried to pause alarm");
  clearInterval(runClock);
    document.body.style.backgroundColor = 'white'
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
