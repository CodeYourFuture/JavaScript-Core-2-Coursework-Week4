function setAlarm() {
  const inputField = document.getElementById("alarmSet");
  const timer = inputField.value;

  const heading = document.getElementById("TimeRemaining");
  heading.innerText = `Time remaining:00:${timer}`;

  const myInterval = setInterval(() => {
    timer = timer - 1;
    heading.innerText = `Time Remaining:00:${Timer}`;

    if (timer === 0) {
      clearInterval(myInterval);
      //timer stops
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






//extra exercise

const timeSelect = document.getElementById('timeInterval');

for (let i = 1; i <= 60; i++) {
    const optionEl = document.createElement('option');
    if (i * 1000 === timeInterval ) {
        optionEl.setAttribute('selected', true);
    }
    optionEl.setAttribute('value', i);
    optionEl.innerText = i;
    timeSelect.appendChild(optionEl);
}

document.getElementById('timeInterval').addEventListener('change', (e) => {
    console.log(e.target.value)
    if (e.target.value) {
        timeInterval = e.target.value * 1000
    } else {
        timeInterval = 2000 
    }
    if (slideshowState) {
        clearInterval(slideshowState);
        slideshowState = setInterval(changeImage, timeInterval);
    }    
})