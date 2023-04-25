// Write your code here
// render pictures on the page
let currentIndex = 0;
const pictures = [
    "./assets/cute-cat-a.jpg",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
]

// const numberOfFiles = 3;
// const pictures = new Array(numberOfFiles).fill(0).map((_,i) => {
//     const letterForFileName = String.fromCharCode(97 + i);
//     return `./assets/cute-cat-${letterForFileName}.jpg`;
// });
const numberOfSources = pictures.length;
const img = document.getElementById("img");
img.src = pictures[currentIndex];
img.alt = "cats"

// define function to change image
function changeImage(direction) {
  if (direction === "forward") {
    currentIndex = (currentIndex + 1) % numberOfSources;
  } else if (direction === "back") {
    currentIndex = (currentIndex - 1 + numberOfSources) % numberOfSources;
  }
  img.src = pictures[currentIndex];
}
// add event listeners
const forwardButton = document.getElementById("forward");
forwardButton.addEventListener("click", () => {
  changeImage("forward");
});

const backButton = document.getElementById("back");
backButton.addEventListener("click", () => {
  changeImage("back");
});

// add auto-forward and auto-back buttons
const autoForwardButton = document.getElementById("auto-forward");
let autoForwardIntervalId;

autoForwardButton.addEventListener("click", () => {
  if (autoForwardIntervalId) {
    clearInterval(autoForwardIntervalId);
    autoForwardIntervalId = null;
  } else {
    autoForwardIntervalId = setInterval(() => {
      changeImage("forward");
    }, 2000);
  }
});

const autoBackButton = document.getElementById("auto-back");
let autoBackIntervalId;

autoBackButton.addEventListener("click", () => {
  if (autoBackIntervalId) {
    clearInterval(autoBackIntervalId);
    autoBackIntervalId = null;
  } else {
    autoBackIntervalId = setInterval(() => {
      changeImage("back");
    }, 2000);
  }
});

const stopButton = document.getElementById("stop");
stopButton.addEventListener("click", () => {
  clearInterval(autoForwardIntervalId);
  clearInterval(autoBackIntervalId);
  autoForwardIntervalId = null;
  autoBackIntervalId = null;
});


//add event listeners
// const forwardButton = document.getElementById("forward");
// forwardButton.addEventListener("click", () => {
//     currentIndex = currentIndex + 1;
//     img.src = pictures[currentIndex % numberOfSources];
// });

// const backButton = document.getElementById("back");
// backButton.addEventListener("click", () => {
//     currentIndex = currentIndex - 1;
//     img.src = pictures[currentIndex % numberOfSources];
// });

// this might be another way of doing it: 
// const forwardButton = document.getElementById("forward");
// const backButton = document.getElementById("back");

// forwardButton.addEventListener("click", changeImage.bind(null, 1));
// backButton.addEventListener("click", changeImage.bind(null, -1));

// function changeImage(direction) {
//   currentIndex += direction;
//   img.src = pictures[(currentIndex + numberOfSources) % numberOfSources];
// }
