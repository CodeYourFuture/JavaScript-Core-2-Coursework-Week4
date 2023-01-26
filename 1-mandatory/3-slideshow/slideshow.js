// Write your code here
const pictureSources = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

let currentIndex = 0;

const img = document.getElementById("img");
img.src = pictureSources[currentIndex];

const forwardButton = document.getElementById("forward");
forwardButton.addEventListener("click", () => {
  if (currentIndex === pictureSources.length - 1) {
    return;
  } else {
    currentIndex = currentIndex + 1;
    img.src = pictureSources[currentIndex %];
  }
});

const backButton = document.getElementById("back");
forwardButton.addEventListener("click", () => {
  if (currentIndex === 0) {
    return;
  } else {
    currentIndex = currentIndex - 1;
    img.src = pictureSources[currentIndex];
  }
});
