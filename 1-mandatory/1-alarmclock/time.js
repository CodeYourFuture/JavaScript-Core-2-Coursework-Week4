document.getElementById(timecounter);

let time = 605;
let countdownEl = document.getElementById("timecounter");

let ticker = setInterval(() => {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  countdownEl.innerHTML = `${minutes}:${seconds}`;
  time--;
}, 1000);
