// Write your code here
const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

let currentIndex = 0;
let autoTimer = 2;

const image = document.querySelector("#carousel-img");
const forwardBtn = document.querySelector("#forward-btn");
const backwardBtn = document.querySelector("#backward-btn");
const autoForwardBtn = document.querySelector("#auto-forward");
const autoBackBtn = document.querySelector("#auto-backward");
const stopAutoBtn = document.querySelector("#stop");

function updateImage() {
  image.src = images[currentIndex];
}

function moveForward() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}

function moveBackward() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
}

function autoMoveImages(forward = true) {
  clearInterval(autoTimer);
  autoTimer = setInterval(() => {
    forward ? moveForward() : moveBackward();
  }, 2000);
}

forwardBtn.addEventListener("click", moveForward);
backwardBtn.addEventListener("click", moveBackward);

autoForwardBtn.addEventListener("click", () => {
  autoMoveImages(true);
  autoForwardBtn.disabled = true;
  autoBackBtn.disabled = true;
});

autoBackBtn.addEventListener("click", () => {
  autoMoveImages(false);
  autoForwardBtn.disabled = true;
  autoBackBtn.disabled = true;
});

stopAutoBtn.addEventListener("click", () => {
  clearInterval(autoTimer);
  autoForwardBtn.disabled = false;
  autoBackBtn.disabled = false;
});

updateImage();
