// Define an array of image URLs
const pics = [
  {
    img: '<img src="/1-mandatory/3-slideshow/assets/cute-cat-a.png" alt=""></img>',
  },
  {
    img: '<img src="/1-mandatory/3-slideshow/assets/cute-cat-b.jpg" alt=""></img>',
  },
  {
    img: '<img src="/1-mandatory/3-slideshow/assets/cute-cat-c.jpg" alt=""></img>',
  },
];

// Get DOM elements
const buttons = document.querySelector("#buttons");
const index = document.querySelector("#counter");
const container = document.querySelector("#container");
const delay = document.querySelector("#delaySet");
const delayBtn = document.querySelector("#delaySetBtn");

// Initialize state variables
let indexOfImg = 0;
let idInterval = null;
let interval = 2000;

// Initialize current image and index
index.textContent = indexOfImg;
container.innerHTML = pics[indexOfImg].img;

// Define a function to change the current image based on the given direction
function changeSlide(button) {
  // Check which button was clicked and change the current image and index accordingly
  if (button.textContent === "Forward") {
    // If the "Forward" button was clicked, increment the index if it is not at the end of the array
    indexOfImg < pics.length - 1 ? indexOfImg++ : indexOfImg;
  } else if (button.textContent === "Back") {
    // If the "Back" button was clicked, decrement the index if it is not at the beginning of the array
    indexOfImg > 0 ? indexOfImg-- : indexOfImg;
  } else if (button.textContent === "Auto Forward") {
    // If the "Auto Forward" button was clicked, clear any existing interval and set a new one to automatically change the image every 2 seconds
    clearInterval(idInterval);
    idInterval = setInterval(() => {
      // Increment the index if it is not at the end of the array, and reset it to 0 if it is at the end
      indexOfImg < pics.length - 1
        ? indexOfImg++
        : indexOfImg === pics.length - 1
        ? (indexOfImg = 0)
        : indexOfImg;
      // Update the index and container elements to reflect the new image
      index.textContent = indexOfImg;
      container.innerHTML = pics[indexOfImg].img;
    }, interval);
  } else if (button.textContent === "Auto Back") {
    // If the "Auto Back" button was clicked, clear any existing interval and set a new one to automatically change the image every 2 seconds
    clearInterval(idInterval);
    idInterval = setInterval(() => {
      // Decrement the index if it is not at the beginning of the array, and set it to the end if it is
      indexOfImg === 0 ? (indexOfImg = pics.length - 1) : indexOfImg--;
      // Update the index and container elements to reflect the new image
      index.textContent = indexOfImg;
      container.innerHTML = pics[indexOfImg].img;
    }, interval);
  } else if (button.textContent === "Stop") {
    // If the "Stop" button was clicked, clear any existing interval
    clearInterval(idInterval);
  }
  // Update the index and container elements to reflect the new image
  index.textContent = indexOfImg;
  container.innerHTML = pics[indexOfImg].img;
}

buttons.addEventListener("click", ({ target }) => {
  changeSlide(target);
});

// Update interval and check if delay time is greater than zero
delayBtn.addEventListener("click", () => {
  const delayValue = parseInt(delay.value);
  if (delayValue > 0) {
    interval = delayValue * 1000;
  }
});
