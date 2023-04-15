// Write your code here
const backBtn = document.querySelector("#backbutton");
const forwardBtn = document.querySelector("#forwardBtn");

const imgArr = [
  {
    src: "./assets/cute-cat-a.png",
    alt: "cute cat first pic",
  },
  {
    src: "./assets/cute-cat-b.png",
    alt: "cute cat second pic",
  },
  {
    src: "./assets/cute-cat-c.png",
    alt: "cute cat third pic",
  },
  {
    src: "./assets/cute-cat-d.png",
    alt: "cute cat fourth pic",
  },
];

document.addEventListener("DOMContentLoaded", getImageOnload);

const imgPlace = document.querySelector("#image");

function getImageOnload() {
  imgPlace.src = imgArr[0].src;
  imgPlace.alt = imgArr[0].alt;
  document.querySelector("#imgTitle").innerText = 0;
}

backBtn.addEventListener("")


