// Write your code here
const imageWrapper = document.createElement("div");
const image = document.createElement("img");
const main = document.getElementById("main");
const forward = document.getElementById("forward");
const back = document.getElementById("back");
const stop_btn = document.getElementById("stop-btn");
const aBack = document.getElementById("aBack");
const aForward = document.getElementById("aForward");
const select = document.querySelector("select");
const input = document.querySelector("input");
const text = document.createElement("p");

imageWrapper.appendChild(image);
main.prepend(imageWrapper);
main.prepend(text);
text.className = "textEl";
imageWrapper.className = "image-wrapper";

const imgArr = [
  "fall.jpg",
  "winter.jpg",
  "ocean.jpg",
  "nature.jpg",
  "seaside.jpg",
];

let index = 0;
let interval;
let timeInterval = 300;

const sliderChange = (direction) => {
  image.setAttribute("src", `./images/${imgArr[index]}`);
  if (direction === "forward") {
    index === imgArr.length - 1 ? (index = 0) : (index += 1);
  } else if (direction === "back") {
    index === 0 ? (index = imgArr.length - 1) : (index -= 1);
  }
};

const autoSlider = (direction) => {
  interval = setInterval(() => {
    if (direction === "aForward") {
      sliderChange("forward");
    } else {
      sliderChange("back");
    }
  }, timeInterval);
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

stop_btn.addEventListener("click", () => {
  if (interval) {
    clearInterval(interval);
  }
});

image.setAttribute("src", `./images/${imgArr[index + imgArr.length - 1]}`);

select.addEventListener("change", (e) => {
  timeInterval = e.target.value;
});

input.addEventListener("change", (e) => {
  text.innerText = e.target.value;
  console.log(e.target.value);
});
