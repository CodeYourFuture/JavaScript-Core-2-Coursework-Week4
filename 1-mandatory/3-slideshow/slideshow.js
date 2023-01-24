const images = [
  "image/img-1.jpeg",
  "image/img-2.jpeg",
  "image/img-3.jpeg",
  "image/img-4.jpeg",
];
const image = document.getElementById("carousel-img");
const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");
const autoForwardBtn = document.getElementById("auto-forward-btn");
const autoBackwardBtn = document.getElementById("auto-backward-btn");
const stopBtn = document.getElementById("stop-btn");
const intervalInput = document.getElementById("interval-input");
let i = 0;
let interval;

image.src = images[0];

function forward() {
  if (i < images.length - 1) {
    i++;
    image.src = images[i];
  } else {
    i = 0;
    image.src = images[i];
  }
}
function backward() {
  if (i > 0) {
    i--;
    image.src = images[i];
  } else {
    i = images.length - 1;
    image.src = images[i];
  }
}
forwardBtn.addEventListener("click", forward);
backwardBtn.addEventListener("click", backward);
autoForwardBtn.addEventListener("click", () => {
  interval = setInterval(forward, intervalInput.value * 1000);
});
autoBackwardBtn.addEventListener("click", () => {
  interval = setInterval(backward, intervalInput.value * 1000);
});
stopBtn.addEventListener("click", () => {
  clearInterval(interval);
});
