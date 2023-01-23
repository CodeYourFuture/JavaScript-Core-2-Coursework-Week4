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

image.src = images[0];
let i = 0;
let interval
function forward() {
  if (i < 3) {
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
    i = 3;
    image.src = images[i];
  }
}
forwardBtn.addEventListener("click", forward);
backwardBtn.addEventListener("click", backward);
autoForwardBtn.addEventListener("click", () => {
  interval =setInterval(forward, 1000);
});
autoBackwardBtn.addEventListener("click", () => {
  interval =setInterval(backward, 1000);
});
stopBtn.addEventListener("click", () => {
  clearInterval(interval);
});
