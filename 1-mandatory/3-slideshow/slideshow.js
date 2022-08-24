// Write your code here
let stop = document.getElementById("btnStop");
let back = document.getElementById("btnBack");
let forward = document.getElementById("btnForward");
let autoBack = document.getElementById("btnAutoBack");
let autoForward = document.getElementById("btnAutoForward");
let img = document.querySelector("img");
const dogImages = [
  "images/dog1.png",
  "images/dog2.png",
  "images/dog3.png",
  "images/dog4.png",
];
let currentImageIndex = 0;

forward.addEventListener("click", () => {
  currentImageIndex++; // This is incrementing the index of the dogImages array by 1
  currentImageIndex = currentImageIndex % dogImages.length;
  img.src = dogImages[currentImageIndex];
  console.log(img.src);
  console.log(currentImageIndex);
});

back.addEventListener("click", () => {
  currentImageIndex =
    (dogImages.length + currentImageIndex - 1) % dogImages.length;
  img.src = dogImages[currentImageIndex];
  console.log(currentImageIndex);
});

let myInterval;
autoBack.addEventListener('click', () => {
myInterval = setInterval(() => {
      currentImageIndex =
        (dogImages.length + currentImageIndex - 1) % dogImages.length;
      img.src = dogImages[currentImageIndex];
    }, 1000);
})

autoForward.addEventListener('click', () => {
  myInterval = setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % dogImages.length;
    img.src = dogImages[currentImageIndex];
  }, 1000);
})

stop.onclick = function () {
  clearInterval(myInterval);
}