// Write your code here

const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

let imgIndex = 0;
let timer = null;
const img = document.createElement("img");
img.setAttribute("id", "carousel-img");
img.setAttribute("src", images[imgIndex]);
const forwardBtn = document.createElement("button");
const autoForwardBtn = document.createElement("button");
const autoBackwardBtn = document.createElement("button");
const stopBtn = document.createElement("button");

forwardBtn.innerText = "forward";
const backwardBtn = document.createElement("button");
backwardBtn.innerText = "backward";
forwardBtn.setAttribute("id", "forward-btn");
backwardBtn.setAttribute("id", "backward-btn");
autoForwardBtn.setAttribute("id", "auto-forward");
stopBtn.setAttribute("id", "stop");
autoForwardBtn.innerText = "auto forward";
autoBackwardBtn.innerText = "auto backward";
stopBtn.innerText = "stop";
autoBackwardBtn.setAttribute("id", "auto-backward");

function updateImage(index) {
  img.setAttribute("src", images[index]);
}

forwardBtn.addEventListener("click", () => {
  imgIndex++;
  if (imgIndex === images.length) {
    imgIndex = 0;
  }
  updateImage(imgIndex);
});

backwardBtn.addEventListener("click", () => {
  imgIndex--;
  if (imgIndex === -1) {
    imgIndex = images.length - 1;
  }
  updateImage(imgIndex);
});

autoForwardBtn.addEventListener("click", () => {
  autoForwardBtn.disabled = true;
  autoBackwardBtn.disabled = true;
  timer = setInterval(() => {
    imgIndex++;
    if (imgIndex === images.length) {
      imgIndex = 0;
    }
    updateImage(imgIndex);
  }, 2000);
});

autoBackwardBtn.addEventListener("click", () => {
  autoForwardBtn.disabled = true;
  autoBackwardBtn.disabled = true;
  timer = setInterval(() => {
    imgIndex--;
    if (imgIndex === -1) {
      imgIndex = images.length - 1;
    }
    updateImage(imgIndex);
  }, 2000);
});

stopBtn.addEventListener("click", () => {
  autoForwardBtn.disabled = false;
  autoBackwardBtn.disabled = false;
  clearInterval(timer);
  timer = null;
});

document.body.appendChild(img);
document.body.appendChild(backwardBtn);
document.body.appendChild(forwardBtn);
document.body.appendChild(autoForwardBtn);
document.body.appendChild(autoBackwardBtn);
document.body.appendChild(stopBtn);
