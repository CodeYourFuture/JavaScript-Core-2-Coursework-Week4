// Write your code here
let images = [
  {
    src: "./Images/image-1.jpg",
  },
  {
    src: "./Images/image-2.jpg",
  },
  {
    src: "./Images/image-3.jpg",
  },
  {
    src: "./Images/image-4.jpg",
  },
];

let ourImage = document.querySelector(".our-image");

let nextBtn = document.querySelector(".button-next");
nextBtn.addEventListener("click", changeToImageNext);

let previousBtn = document.querySelector(".button-prev");
previousBtn.addEventListener("click", changeToImagePrev);

let photoIndex = 0;

function changeToImageNext() {
  if (photoIndex >= images.length - 1) photoIndex = -1;
  photoIndex++;
  getImg();
}

function changeToImagePrev() {
  if (photoIndex <= 0) photoIndex = images.length;
  photoIndex--;
  getImg();
}

function getImg() {
  ourImage.setAttribute("src", `${images[photoIndex].src}`);
}

let autoPreviousBtn = document.querySelector(".button-auto-prev");
autoPreviousBtn.addEventListener("click", changeToAutoPrev);

let auto;

function changeToAutoPrev() {
  auto = setInterval(changeToImagePrev, 2000);
}

let autoNextBtn = document.querySelector(".button-auto-next");
autoNextBtn.addEventListener("click", changeToAutoNext);

function changeToAutoNext() {
  auto = setInterval(changeToImageNext, 2000);
}

let stopBtn = document.querySelector(".button-stop");
stopBtn.addEventListener("click", changeToStop);

function changeToStop() {
  clearInterval(auto);
}
