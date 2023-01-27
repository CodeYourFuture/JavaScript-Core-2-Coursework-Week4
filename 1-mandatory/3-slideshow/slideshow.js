// Write your code here
let imgArr = [
  {
    src: "images/img1.jpg",
    alt: "Socrates image",
  },
  {
    src: "images/img2.jpg",
    alt: "Plato image",
  },

  {
    src: "images/img3.jpg",
    alt: "René Descartes image",
  },

  {
    src: "images/img4.jpg",
    alt: "Immanuel Kant image",
  },
  {
    src: "images/img5.jpg",
    alt: "Friedrich Nietzsche",
  },
];
let divEl = document.getElementById("slideshow");
let imgEl = document.createElement("img");
divEl.appendChild(imgEl);
imgEl.className = "slideImg";

let backBtn = document.getElementById("back");
let forwardBtn = document.getElementById("forward");
let stopBtn = document.getElementById("stop");
let autoBackBtn = document.getElementById("autoBack");
let autoForwardBtn = document.getElementById("autoForward");
let input = document.getElementById("input");
let delaySetBtn = document.getElementById("delaySet");
let delay = 1000;

forwardBtn.addEventListener("click", () => {
  goForward();
});

backBtn.addEventListener("click", () => {
  goBack();
});

autoForwardBtn.addEventListener("click", () => {
  autoForwardInt = setInterval(() => {
    goForward();
  }, delay);
});

autoBackBtn.addEventListener("click", () => {
  autoBackInt = setInterval(() => {
    goBack();
  }, delay);
});

stopBtn.addEventListener("click", () => {
  delay = 1000;
  clearInterval(autoForwardInt);
  clearInterval(autoBackInt);
});
delaySetBtn.addEventListener("click", () => {
  delay = input.value * 1000;
});

let count = 0;
imgEl.src = imgArr[count].src;
imgEl.alt = imgArr[count].alt;

let goBack = () => {
  count--;
  if (count < 0) {
    count = imgArr.length - 1;
  }
  imgEl.src = imgArr[count].src;
  imgEl.alt = imgArr[count].alt;
};
let goForward = () => {
  count++;
  if (count >= imgArr.length) {
    count = 0;
  }
  imgEl.src = imgArr[count].src;
  imgEl.alt = imgArr[count].alt;
};

