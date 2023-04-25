imageLinks = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

const forwardBtn = document.querySelector("#forward-btn");
forwardBtn.addEventListener("click", nextImage);

let index = 0;
function getImage() {
  document.querySelector("#carousel-img").src = imageLinks[index];
}

window.onload = getImage;

function nextImage() {
  if (index < imageLinks.length - 1) {
    index++;
  } else {
    index = 0;
  }
  getImage();
}

const backwardBtn = document.querySelector("#backward-btn");
backwardBtn.addEventListener("click", prevImage);

function prevImage() {
  if (index != 0) {
    index--;
  } else {
    index = imageLinks.length - 1;
  }
  getImage();
}

let isAutoPrevOn = false;
let isAutoNextOn = false;
let autoNextID;
let autoPrevID;

const autoForwardBtn = document.querySelector("#auto-forward");
autoForwardBtn.addEventListener("click", autoNextImage);

function autoNextImage() {
  if (isAutoNextOn === false) {
    autoNextID = setInterval(nextImage, 1000);
    isAutoNextOn = true;
    autoForwardBtn.disabled = true;
    autoBackwardBtn.disabled = true;
  }
  if (isAutoPrevOn === true) {
    clearInterval(autoPrevID);
    isAutoPrevOn = false;
  }
}

const autoBackwardBtn = document.querySelector("#auto-backward");
autoBackwardBtn.addEventListener("click", autoPrevImage);

function autoPrevImage() {
  if (isAutoPrevOn === false) {
    autoPrevID = setInterval(prevImage, 1000);
    isAutoPrevOn = true;
    autoForwardBtn.disabled = true;
    autoBackwardBtn.disabled = true;
  }
  if (isAutoNextOn === true) {
    clearInterval(autoNextID);
    isAutoNextOn = false;
  }
}

const stopBtn = document.querySelector("#stop");
stopBtn.addEventListener("click", stopAutoplay);

function stopAutoplay() {
  if (isAutoNextOn === true) {
    clearInterval(autoNextID);
    isAutoNextOn = false;
  }
  if (isAutoPrevOn === true) {
    clearInterval(autoPrevID);
    isAutoPrevOn = false;
  }
  autoForwardBtn.disabled = false;
  autoBackwardBtn.disabled = false;
}
