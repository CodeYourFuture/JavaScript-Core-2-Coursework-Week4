// * Selecting elements
const counter = document.querySelector("#counter");
const img = document.querySelector("#img");
const autoBack = document.querySelector("#autoBack");
const backwardBtn = document.querySelector("#backward-btn");
const stopBtn = document.querySelector("#stop");
const forwardBtn = document.querySelector("#forward-btn");
const autoFwd = document.querySelector("#autoFwd");
const alt = document.querySelector("#alt_img");

// * Creating an array of images
const images = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1681953447837-34c2c0f0c36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    alt: "A beautiful sea",
  },
  {
    id: 2,
    url: "https://plus.unsplash.com/premium_photo-1669640020567-ef5248fbd116?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
    alt: "Great mountains",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1681673211082-6e931dcab8db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
    alt: "Andromeda Galaxy",
  },

  {
    id: 4,
    url: "https://images.unsplash.com/photo-1682001426601-c7fdc9ea5b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    alt: "Mountain lake",
  },
];

// * Creating functions to change the image

let currentImageIndex = 0;

function goFwd() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  img.src = images[currentImageIndex].url;
  printText();
}

function goBack() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  img.src = images[currentImageIndex].url;
  printText();
}

let autoFwdIntervalId;
let autoBackIntervalId;

function goAutoFwd() {
  autoFwdIntervalId = setInterval(goFwd, 4000);
}

function goAutoBack() {
  autoBackIntervalId = setInterval(goBack, 4000);
}

function stopSlideShow() {
  clearInterval(autoFwdIntervalId);
  clearInterval(autoBackIntervalId);
}

// * Adding event listeners to the buttons
autoBack.addEventListener("click", goAutoBack);
backwardBtn.addEventListener("click", goBack);
stopBtn.addEventListener("click", stopSlideShow);
forwardBtn.addEventListener("click", goFwd);
autoFwd.addEventListener("click", goAutoFwd);

function printText() {
  counter.innerHTML = `Counter: ${currentImageIndex + 1}`;
  alt.innerHTML = images[currentImageIndex].alt;
}
