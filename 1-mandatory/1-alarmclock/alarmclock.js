 
 

 function setAlarm() {
  let getInputValue = document.querySelector("#alarmSet").value; 
  console.log(getInputValue);
  let title = document.querySelector("#timeRemaining");
  console.log(title);
  title.innerHTML=`Time Remaining: 00:${getInputValue}`;

  let timeLeft = getInputValue  
  const Interval = setInterval(()=>{
    timeLeft--;
       document.querySelector("#timeRemaining").innerHTML=`Time Remaining: ${timeLeft}`;
      if(timeLeft === 0){
        playAlarm();
        clearInterval(Interval)
      }
    },1000);
  }
    
    

// // DO NOT EDIT BELOW HERE

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
