// Write your code here
let image = document.getElementById("image");
imageArray = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];
let currentIndex = 0;
image.src = imageArray[currentIndex];
let imageInterval;

document
  .getElementById("forwardBtn")
  .addEventListener("click", backAndForward(+1));

document
  .getElementById("backBtn")
  .addEventListener("click", backAndForward(-1));

function backAndForward(step) {
  return () => {
    currentIndex += step + imageArray.length;
    image.src = imageArray[currentIndex % imageArray.length];
  };
}
document.getElementById("autoBackBtn").addEventListener("click", () => {
  imageInterval = setInterval(backAndForward(-1), 500);
});
document.getElementById("autoForwardBtn").addEventListener("click", () => {
  imageInterval = setInterval(backAndForward(+1), 500);
});
document.getElementById("stopBtn").addEventListener("click", () => {
  clearInterval(imageInterval);
});
