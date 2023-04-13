// Write your code here
const images = [
  {
    imgID: 0,
    src: "./assets/cute-cat-a.png",
  },
  {
    imgID: 1,
    src: "./assets/cute-cat-b.jpg",
  },
  {
    imgID: 2,
    src: "./assets/cute-cat-c.jpg",
  },
];

//variables
const backwardBtn = document.querySelector("#backward-btn"),
  forwardBtn = document.querySelector("#forward-btn"),
  image = document.querySelector("#carousel-img"),
  autoBackBtn = document.querySelector("#auto-backward"),
  autoForwardBtn = document.querySelector("#auto-forward"),
  stopBtn = document.querySelector("#stop"),
  showTime = document.querySelector(".show-time");

let ids = 0,
  interval = 2000,
  intervalID,
  intervalTimer;

//eventlisteners
eventlisteners();
function eventlisteners() {
  // Get image on load
  document.addEventListener("DOMContentLoaded", getImageOnLoad);
  forwardBtn.addEventListener("click", getNextPic);
  backwardBtn.addEventListener("click", getPreviousPic);
  autoBackBtn.addEventListener("click", showAutoBack);
  autoForwardBtn.addEventListener("click", showAutoForward);
  stopBtn.addEventListener("click", stopAutopInterval);
}

//functions
function getImageOnLoad() {
  image.src = images[0].src;
  ids = images[0].imgID;
}

// get next pic
function getNextPic() {
  ids++;
  if (ids > 2) {
    ids = 0;
  }
  image.src = images[ids].src;
}

// get previous pic
function getPreviousPic() {
  ids--;
  if (ids < 0) {
    ids = 2;
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
