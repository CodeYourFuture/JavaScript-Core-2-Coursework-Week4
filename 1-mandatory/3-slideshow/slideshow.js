// Write your code here.

const images = document.querySelector(".images");
const nextButton = document.querySelector(".next-button");
const backButton = document.querySelector(".back-button");

const autoForward = document.querySelector(".auto-forward");
const autoBack = document.querySelector(".auto-back");

const stopButton = document.querySelector(".stop-button");

images.src = "img/1.jpg";

let n = 1;

//next
//if images from  - array of strings

function nextImage() {
  if (n === 5) {
    n = 0;
  }

  n = n + 1;
  images.src = `img/${n}.jpg`;
}
nextButton.addEventListener("click", nextImage);

//back
function previousImage() {
  if (n === 1) {
    n = 6;
  }

  n = n - 1;
  images.src = `img/${n}.jpg`;
}

backButton.addEventListener("click", previousImage);

let myInterval;

//autonext
function autoForwardImage() {
  clearInterval(myInterval);
  myInterval = setInterval(nextImage, 2000);
}

autoForward.addEventListener("click", autoForwardImage);

//autoback
function autoBackImage() {
  clearInterval(myInterval);
  myInterval = setInterval(previousImage, 2000);
}
autoBack.addEventListener("click", autoBackImage);

//stop
stopButton.addEventListener("click", () => {
  clearInterval(myInterval);
});
