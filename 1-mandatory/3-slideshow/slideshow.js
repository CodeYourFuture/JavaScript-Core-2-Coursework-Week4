// Write your code here
const imageWrapper = document.createElement("div");
const image = document.createElement("img");
const main = document.getElementById("main");
const forward = document.getElementById("forward");
const back = document.getElementById("back");
const stop = document.getElementById("stop");
const aBack = document.getElementById("aBack");
const aForward = document.getElementById("aForward");

imageWrapper.appendChild(image);
main.prepend(imageWrapper);
imageWrapper.className = "image-wrapper";
const imgArr = ["fall.jpg", "winter.jpg", "ocean.jpg", "nature.jpg"];

let index = 0;

const sliderChange = (direction) => {
  image.setAttribute("src", `./images/${imgArr[index]}`);
  if (direction === "forward") {
    index === imgArr.length - 1 ? (index = 0) : (index += 1);
  } else if (direction === "back") {
    index === 0 ? (index = imgArr.length - 1) : (index -= 1);
  }
};

let interval;
const autoSlider = (direction) => {
  interval = setInterval(() => {
    if (direction === "aForward") {
      sliderChange("forward");
    } else {
      sliderChange("back");
    }
  }, 1000);
};

forward.addEventListener("click", () => {
  sliderChange("forward");
});

back.addEventListener("click", () => {
  sliderChange("back");
});

aForward.addEventListener("click", () => {
  autoSlider("aForward");
});

aBack.addEventListener("click", () => {
  autoSlider("aBack");
});

stop.addEventListener("click", () => {
  if (interval) {
    clearInterval(interval);
  }
});

image.setAttribute("src", `./images/${imgArr[index + imgArr.length - 1]}`);
