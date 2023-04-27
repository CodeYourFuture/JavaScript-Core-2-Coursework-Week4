// Write your code here
const images = [
  {
    src: "./assets/cute-cat-a.png",
  },
  {
    src: "./assets/cute-cat-b.jpg",
  },
  {
    src: "./assets/cute-cat-c.jpg",
  },
  {
    src: "./assets/black-cat.webp"
  }
];

//variables
const backwardBtn = document.querySelector("#backward-btn");
const forwardBtn = document.querySelector("#forward-btn");
const image = document.querySelector("#carousel-img");
const autoBackBtn = document.querySelector("#auto-backward");
const autoForwardBtn = document.querySelector("#auto-forward");
const stopBtn = document.querySelector("#stop");
const showTime = document.querySelector(".show-time");

let ids = 0;
let interval = 2000;
let intervalID;
let intervalTimer;

//eventlisteners

// Get image on load
document.addEventListener("DOMContentLoaded", getImageOnLoad);
forwardBtn.addEventListener("click", getNextPic);
backwardBtn.addEventListener("click", getPreviousPic);
autoBackBtn.addEventListener("click", showAutoBack);
autoForwardBtn.addEventListener("click", showAutoForward);
stopBtn.addEventListener("click", stopAutopInterval);

//functions
function getImageOnLoad() {
  image.src = images[0].src;
}

// get next pic
function getNextPic() {
  ids++;
  if (ids > 3) {
    ids = 0;
  }
  image.src = images[ids].src;
}

// get previous pic
function getPreviousPic() {
  ids--;
  if (ids < 0) {
    ids = 3;
  }
  image.src = images[ids].src;
}

// show next images automaticlly
function showAutoForward() {
  autoForwardBtn.disabled = true;
  autoBackBtn.disabled = true;
  showTimer();
  intervalID = setInterval(() => {
    getNextPic();
  }, interval);
}

// show previous images automaticlly
function showAutoBack() {
  autoForwardBtn.disabled = true;
  autoBackBtn.disabled = true;
  showTimer();
  intervalID = setInterval(() => {
    getPreviousPic();
  }, interval);
}

// stop intreval
function stopAutopInterval() {
  autoForwardBtn.disabled = false;
  autoBackBtn.disabled = false;
  clearInterval(intervalID);
  clearInterval(intervalTimer);
  showTime.textContent = "";
}

// show timer during showing images automatically
function showTimer() {
  let counter = 0;
  showTime.textContent = counter + 1;
  intervalTimer = setInterval(() => {
    showTime.textContent = counter--;
    if (counter == -1) {
      counter = 1;
    }
  }, 1000);
}