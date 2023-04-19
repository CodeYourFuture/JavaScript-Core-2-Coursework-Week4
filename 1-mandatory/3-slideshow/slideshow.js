// Write your code here
// Get the HTML elements
const image = document.querySelector('.image');
const backButton = document.querySelector('.back-button');
const forwardButton = document.querySelector('.forward-button');
const autoBackButton = document.querySelector(".auto-back-button");
const autoForwardButton = document.querySelector(".auto-forward-button");
const stopButton = document.querySelector(".stop-button");
let autoBackIntervalId;
let autoForwardIntervalId;

// Define the image paths
const images = [
  "https://plus.unsplash.com/premium_photo-1675826774817-fe983ceb0475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1681457550293-5a516cb5dedf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
  "https://images.unsplash.com/photo-1681385438402-6b6f2ae33dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
  "https://images.unsplash.com/photo-1681318655864-843a37484f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
];

// Set the initial image
let currentIndex = 0;
image.src = images[currentIndex];

// Add event listeners to the buttons
backButton.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  image.src = images[currentIndex];
});

forwardButton.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  image.src = images[currentIndex];
});
autoBackButton.addEventListener("click", () => {
  clearInterval(autoForwardIntervalId);
  clearInterval(autoBackIntervalId);
  autoBackIntervalId = setInterval(() => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    image.src = images[currentIndex];
  }, 1000);
});

autoForwardButton.addEventListener("click", () => {
  clearInterval(autoBackIntervalId);
  clearInterval(autoForwardIntervalId);
  autoForwardIntervalId = setInterval(() => {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    image.src = images[currentIndex];
  }, 1000);
});

stopButton.addEventListener("click", () => {
  clearInterval(autoBackIntervalId);
  clearInterval(autoForwardIntervalId);
});
