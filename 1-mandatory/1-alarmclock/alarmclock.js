function setAlarm() {
  //let timeRemaining = document.getElementById("timeRemaining");
  // let alarmInput = document.querySelector("#alarmSet");
  let time = document.querySelector("#time");
  start = document.querySelector("#set");
  start.addEventListener("click", () => {
    let num = 3600;
    const set = setInterval(() => {
      num--;
      convertTime(num);
      if (num === 0) {
        playAlarm();
        clearInterval(set);
      }
      let stopBtn = document.querySelector("#stop");
      stopBtn.addEventListener("click", () => {
        clearInterval(set);
        time.innerText = `00:00`;
      });
    }, 1000);

    function convertTime(n) {
      n = Number(n);
      let h = Math.floor(n / 3600);
      let m = Math.floor((n % 3600) / 60);
      let s = Math.floor((n % 3600) % 60);

      let hToShow = h > 10 ? h : `0${h}:`;
      let mToShow = m >= 10 ? m : `0${m}`;
      let sToShow = s >= 10 ? `:${s}` : `:0${s}`;
      time.innerText = hToShow + mToShow + sToShow;
    }
    return convertTime(num);
  });
  //get user input
  //convert user input to hours, minutes, and seconds

  //start countdown
  //ring alarm when countdown finishes
  // clear interval
}
console.log(setAlarm());
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
