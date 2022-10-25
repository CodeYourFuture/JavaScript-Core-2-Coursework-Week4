// Write your code here
const catsPic = [
  "cats/cat0.jpg",
  "cats/cat1.jpg",
  "cats/cat2.jpg",
  "cats/cat3.jpg",
];
let intervalId = null;
let currentSlide = 0;

const slideChange = (step) => {
  currentSlide = currentSlide + step;
  if (currentSlide === catsPic.length) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = catsPic.length - 1;
  }
  document.getElementById("image").setAttribute("src", catsPic[currentSlide]);
};

const autoPlay = (step) => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
  if (step != 0) {
    intervalId = setInterval(() => {
      slideChange(step);
    }, 1000);
  }
};
