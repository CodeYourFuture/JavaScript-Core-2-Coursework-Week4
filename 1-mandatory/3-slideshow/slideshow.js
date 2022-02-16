const images = [
  {
    src: "images/photo-1637710133669-3dd2c9513041.jpeg",
    alt: "nature picture",
  },
  {
    src: "images/photo-1637710527019-b43708c651df.jpeg",
    alt: "bird picture",
  },

  {
    src: "images/photo-1644990978896-c86bd2e5fd2e.jpeg",
    alt: "nature picture",
  },

  {
    src: "images/photo-1625973385769-b9113cf6c2cf.jpeg",
    alt: "see picture",
  },
];
let autoForwardInt;
let autoBackInt;
const imagContainer = document.getElementById("imgContainer");
const btnContainer = document.getElementById("btnContainer");
const image = document.createElement("img");
const forwardBtn = document.createElement("button");
const backBtn = document.createElement("button");
const autoForwardBtn = document.createElement("button");
const autoBackBtn = document.createElement("button");
const stopBtn = document.createElement("button");
forwardBtn.innerHTML = "forward";
backBtn.innerHTML = "back";
stopBtn.innerHTML = "stop";
autoBackBtn.innerHTML = "Auto Back";
autoForwardBtn.innerHTML = "Auto Forward";
imagContainer.appendChild(image);
btnContainer.append(autoBackBtn, backBtn, stopBtn, forwardBtn, autoForwardBtn);
let counter = 0;
image.src = images[counter].src;
image.alt = images[counter].alt;

//when forward button clicked
forwardBtn.addEventListener("click", () => {
  getForwardImages();
});

//when back button clicked
backBtn.addEventListener("click", () => {
  getBackImages();
});

//when AutoForward button clicked
autoForwardBtn.addEventListener("click", () => {
  autoForwardInt = setInterval(() => {
    getForwardImages();
  }, 1000);
});

//when AutoBack button clicked
autoBackBtn.addEventListener("click", () => {
  autoBackInt = setInterval(() => {
    getBackImages();
  }, 1000);
});

//when Stop button clicked
stopBtn.addEventListener("click", () => {
  clearInterval(autoForwardInt);
  clearInterval(autoBackInt);
});

const getForwardImages = () => {
  counter < images.length - 1 ? counter++ : (counter = 0);
  image.src = images[counter].src;
};
const getBackImages = () => {
  counter === 0 ? (counter = images.length - 1) : counter--;
  image.src = images[counter].src;
};
