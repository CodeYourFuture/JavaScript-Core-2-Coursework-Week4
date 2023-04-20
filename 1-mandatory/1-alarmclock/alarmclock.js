const colors = ['yellow', 'orange', 'pink', 'purple', 'aqua'];
const changePageColor = (color) => document.querySelector('body').style.backgroundColor = color;
const getRandomIndex = () => Math.floor(Math.random() * colors.length);


function setAlarm() {
  let inputElem = document.getElementById('alarmSet');
  let timeRenderElem = document.getElementById('timeRemaining');
  let numberSubmitted = inputElem.value;

  if(numberSubmitted <= 0){
    return;
  };

  let hoursToRender = '00';
  let minsToRender = '00';
  let addZeroToResult = num => {
    if(num < 9){
      return `0${num}`
    } else {
      return num;
    }
  };

  let time = numberSubmitted;
  let renderTime = time => {
    if( time === 0){
      hoursToRender = '00';
      minsToRender = '00';
    } else if (time < 60 ){
      minsToRender = time < 10 ? `0${time}` : time;
    } else {
      hoursToRender = addZeroToResult(Math.floor(time / 60));
      minsToRender = addZeroToResult(time % 60);
    }
    timeRenderElem.innerText = `Time Remaining: ${hoursToRender}:${minsToRender}`;
  }
  renderTime(time);

  let interval = null;

  let startTimer = () =>{
    interval = setInterval(()=> {
      renderTime(--time);
      if(time === 0){
        renderTime(time);
        playAlarm();
        changePageColor(colors[getRandomIndex()]);
        clearInterval(interval);
      }
    }, 1000);
  }

  startTimer();

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
