let countDown;
let [min, sec] = [0, 0];
const pauseBtnParentNode = document.querySelector("#set").parentNode;
const pauseBtn = document.createElement("button");
pauseBtn.id = "pause";
pauseBtn.type = "button";
pauseBtn.textContent = "Pause";
pauseBtnParentNode.append(pauseBtn);
pauseBtn.addEventListener("click", () => {
  clearInterval(countDown);
});
function flashedbg() {
  const bodyStyle = document.body.style;
  const black = "rgb(37, 37, 37)";
  bodyStyle.backgroundColor = black;
  bodyStyle.color = "white";

  const reverseColor = () => {
    bodyStyle.backgroundColor =
      bodyStyle.backgroundColor === black ? "white" : black;
    bodyStyle.color = bodyStyle.color === "white" ? black : "white";
  };

  setInterval(reverseColor, 500);
}
function setAlarm() {
  const countDownOnPage = () => {
    document.querySelector(
      "#timeRemaining"
    ).textContent = `Time Remaining: ${min.toString().padStart(2, "0")}:${sec
      .toString()
      .padStart(2, "0")}`;

    sec--;
    if (min === 0 && sec <= 0) {
      clearInterval(countDown);
      playAlarm();
      flashedbg();
      return;
    }
    if (sec < 0) {
      min--;
      sec = 59;
    }
    return countDownOnPage;
  };

  if (!document.querySelector("#alarmSet").value && min === 0 && sec === 0) {
    //--if input no value, can't start
    return;
  } else if (!document.querySelector("#alarmSet").value && min * 60 + sec > 0) {
    //--for continues the countdown when you clicked pauseBtn
    //--(if input no value, but there are some value in min & sec)
    countDown = setInterval(countDownOnPage(), 1000);
  } else if (document.querySelector("#alarmSet").value) {
    //--if input   has value, start the countdown
    const getSecondFromInput = document.querySelector("#alarmSet").value;
    [min, sec] = [~~(getSecondFromInput / 60), getSecondFromInput % 60];
    document.querySelector("#alarmSet").value = null;
    countDown = setInterval(countDownOnPage(), 1000);
  }
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
