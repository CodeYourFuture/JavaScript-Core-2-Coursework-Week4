function setAlarm() {
  let i = Number(document.querySelector("#alarmSet").value);

  i === 0 ? (i = 60) : i;

  const convertTime = (i) => {
    let h = Math.floor(i / 3600);
    let m = Math.floor((i % 3600) / 60);
    let s = Math.floor((i % 3600) % 60);
    let hToShow = h > 10 ? h : `0${h}`;
    let mToShow = m >= 10 ? `:${m}:` : `:0${m}:`;
    let sToShow = s >= 10 ? s : `0${s}`;
    time.innerText = hToShow + mToShow + sToShow;
  };
  convertTime(i);

  const set = setInterval(() => {
    document.body.style.backgroundColor = "white";
    i--;
    convertTime(i);
    if (i === 0) {
      playAlarm();
      clearInterval(set);
    }
  }, 1000);

  const stopBtn = document.querySelector("#stop");
  stopBtn.addEventListener("click", () => {
    clearInterval(set);
  });
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
  document.body.style.backgroundColor = "yellow";
  const changeBG = setInterval(() => {
    document.body.style.backgroundColor === "yellow"
      ? (document.body.style.backgroundColor = "red")
      : (document.body.style.backgroundColor = "yellow");
  }, 500);
  const stopBtn = document.querySelector("#stop");
  const time = document.querySelector("#time");
  stopBtn.addEventListener("click", () => {
    clearInterval(changeBG);
    document.body.style.backgroundColor = "white";
    time.innerText = `00:00`;
  });
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
