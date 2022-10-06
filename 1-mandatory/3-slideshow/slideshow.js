// Write your code here

let srcImages = [
  "img/flight752.jpeg",
  "img/FreeTehran.jpeg",
  "img/FreeShiraz.jpeg",
  "img/FreeIsfahan.jpeg",
];

const autoBackBtn = document.querySelector(".auto-bck-btn");
const backBtn = document.querySelector(".bck-btn");
const stopBtn = document.querySelector(".stop-btn");
const forwardBtn = document.querySelector(".forward-btn");
const autoForwardBtn = document.querySelector(".auto-forward-btn");

const image = document.querySelector(".img");
const timeInput = document.querySelector("input");
let time = 1500;
// Extra challenge.
timeInput.addEventListener("input", (e) => {
  time = e.target.value * 1000;
});
let index = 0;
image.setAttribute("src", srcImages[index]);

const arrLength = srcImages.length;
let imgInterval;

// backward & forward functions.
function backward() {
  index--;
  index < 0 ? (index = arrLength - 1) : index;
  image.setAttribute("src", srcImages[index]);
}

function forward() {
  index++;
  index > arrLength - 1 ? (index = 0) : index;
  image.setAttribute("src", srcImages[index]);
}
// Make buttons reactive.

backBtn.addEventListener("click", backward);

autoBackBtn.addEventListener("click", () => {
  imgInterval = setInterval(backward, time);
});

stopBtn.addEventListener("click", () => {
  clearInterval(imgInterval);
});

forwardBtn.addEventListener("click", forward);

autoForwardBtn.addEventListener("click", () => {
  imgInterval = setInterval(forward, time);
});
