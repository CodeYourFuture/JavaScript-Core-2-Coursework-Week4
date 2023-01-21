const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];
const image = document.querySelector("#carousel-img");
const forwardBtn = document.querySelector("#forward-btn");
const backwardBtn = document.querySelector("#backward-btn");
const autoForwardBtn = document.querySelector("#auto-forward");
const autoBackwardBtn = document.querySelector("#auto-backward");
const secondInput = document.querySelector("#second-input");

const stopBtn = document.querySelector("#stop");
let imageIndex = 0;
let interval;
image.src = images[imageIndex];

const forwardImg = () => {
  imageIndex = (imageIndex + 1) % images.length;
  image.src = images[imageIndex];
};
const backwordImg = () => {
  imageIndex = (imageIndex - 1 + images.length) % images.length;
  image.src = images[imageIndex];
};

const disabledBtn = () => {
  autoForwardBtn.disabled = true;
  autoBackwardBtn.disabled = true;
  forwardBtn.disabled = true;
  backwardBtn.disabled = true;
};
const stop = () => {
  clearInterval(interval);
  autoForwardBtn.disabled = false;
  autoBackwardBtn.disabled = false;
  forwardBtn.disabled = false;
  backwardBtn.disabled = false;
};
const autoForwardImg = () => {
  interval = setInterval(forwardImg, secondInput.value * 100);
  disabledBtn();
};
const autoBackwordImg = () => {
  interval = setInterval(backwordImg, secondInput.value * 100);
  disabledBtn();
};
forwardBtn.addEventListener("click", forwardImg);
backwardBtn.addEventListener("click", backwordImg);
autoForwardBtn.addEventListener("click", autoForwardImg);
autoBackwardBtn.addEventListener("click", autoBackwordImg);
stopBtn.addEventListener("click", stop);

secondInput.addEventListener("change", (e) => {
  if (!+e.target.value) {
    autoForwardBtn.disabled = true;
    autoBackwardBtn.disabled = true;
  } else {
    autoForwardBtn.disabled = false;
    autoBackwardBtn.disabled = false;
  }
});
