const images = [
  "/1-mandatory/3-slideshow/example-screenshots/image/img-1.jpg",
  "/1-mandatory/3-slideshow/example-screenshots/image/img-2.jpg",
  "/1-mandatory/3-slideshow/example-screenshots/image/img-3.jpg",
  "/1-mandatory/3-slideshow/example-screenshots/image/img-4.jpg",
  "/1-mandatory/3-slideshow/example-screenshots/image/img-5.jpg"
];
const image = document.getElementById("Dog-img");
const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");
const autoForwardBtn = document.getElementById("auto-forward-btn");
const autoBackwardBtn = document.getElementById("auto-backward-btn");
const stopBtn = document.getElementById("stop-btn");
const intervalInput = document.getElementById("interval-input");
let i = 0;
let interval;

let currentIndex = 0;

function forward() {
  currentIndex++;
  image.src = images[currentIndex % images.length];
}

function backward() {
  currentIndex--;
  if(currentIndex < 0){
      currentIndex = images.length -1
    }
  image.src = images[currentIndex % images.length];
  }

forwardBtn.addEventListener("click", forward);
backwardBtn.addEventListener("click", backward);
autoForwardBtn.addEventListener("click", () => {
  interval = setInterval(forward, intervalInput.value * 1000);
  //inputField.disabled = true;
  autoForwardBtn.disabled = true;
  autoBackwardBtn.disabled = true;
  forwardBtn.disabled = true;
  backwardBtn.disabled = true;
});
autoBackwardBtn.addEventListener("click", () => {
  interval = setInterval(backward, intervalInput.value * 1000);
  autoForwardBtn.disabled = true;
  autoBackwardBtn.disabled = true;
  forwardBtn.disabled = true;
  backwardBtn.disabled = true;
});
stopBtn.addEventListener("click", () => {
  clearInterval(interval);
  autoForwardBtn.disabled = false;
  autoBackwardBtn.disabled = false;
  forwardBtn.disabled = false;
  backwardBtn.disabled = false;
});
