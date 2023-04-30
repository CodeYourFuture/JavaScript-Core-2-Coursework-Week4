let slideshowImages = [
  "./imgs/1.jpeg",
  "./imgs/2.jpeg",
  "./imgs/3.jpeg",
  "./imgs/4.jpeg",
  "./imgs/5.jpeg",
];
const autoBackButton = document.querySelector("#auto-back");
const backButton = document.querySelector("#back");
const stopButton = document.querySelector("#stop");
const forwardButton = document.querySelector("#forward");
const autoForwardButton = document.querySelector("#auto-forward");
const mainImg = document.querySelector("#img");
const commentImg = document.querySelector("#photoIndex");
let photoNumber = 0;
let intervalTime;
let intervalIndex;

function forwardAction() {
  if (photoNumber === slideshowImages.length) {
    photoNumber = 0;
  }
  photoNumber++;
  commentImg.innerText = photoNumber;
  mainImg.src = slideshowImages[photoNumber - 1];
}
function backAction() {
  if (photoNumber === 0) {
    photoNumber = slideshowImages.length + 1;
  }
  if (photoNumber === 1) {
    photoNumber = slideshowImages.length + 1;
  }
  photoNumber--;
  commentImg.innerText = photoNumber;
  mainImg.src = slideshowImages[photoNumber - 1];
}
forwardButton.addEventListener("click", () => {
  clearInterval(intervalTime);
  forwardAction();
});

backButton.addEventListener("click", () => {
  clearInterval(intervalTime);
  backAction();
});

stopButton.addEventListener("click", () => {
  clearInterval(intervalTime);
});

autoForwardButton.addEventListener("click", () => {
  clearInterval(intervalTime);
  intervalTime = setInterval(() => {
    forwardAction();
  }, 2000);
});

autoBackButton.addEventListener("click", () => {
  clearInterval(intervalTime);
  intervalTime = setInterval(() => {
    backAction();
  }, 2000);
});
