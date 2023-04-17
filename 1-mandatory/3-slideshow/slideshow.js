// Write your code here
const backBtn = document.querySelector("#backward-btn");
const forwardBtn = document.querySelector("#forward-btn");
const autoFrwBtn = document.querySelector("#auto-forward");
const autoBwBtn = document.querySelector("#auto-backward");

const imgArr = [
  {
    src: "./assets/cute-cat-a.png",
    alt: "cute cat first pic",
  },
  {
    src: "./assets/cute-cat-b.jpg",
    alt: "cute cat second pic",
  },
  {
    src: "./assets/cute-cat-c.jpg",
    alt: "cute cat third pic",
  },
  // {
  //   src: "./assets/cute-cat-d.jpg",
  //   alt: "cute cat fourth pic",
  // },
];

document.addEventListener("DOMContentLoaded", getImageOnload);

const imgPlace = document.querySelector("#carousel-img");

function getImageOnload() {
  imgPlace.src = imgArr[0].src;
  imgPlace.alt = imgArr[0].alt;
  document.querySelector("#imgTitle").innerText = 0;
}

let moveBack = function () {
    let index = Number(document.querySelector("#imgTitle").innerText);
    
    if (index === 0) {
        index = imgArr.length -1;
    } else {
        index--;
    }
    
    imgPlace.src = imgArr[index].src;
    imgPlace.alt = imgArr[index].alt;
    document.querySelector("#imgTitle").innerText = index;

}

backBtn.addEventListener("click", moveBack);

let moveForward = function () {
  let index = Number(document.querySelector("#imgTitle").innerText);

  if (index === imgArr.length - 1) {
    index = 0;
  } else {
    index++;
  }

  imgPlace.src = imgArr[index].src;
  imgPlace.alt = imgArr[index].alt;
  document.querySelector("#imgTitle").innerText = index;
};

forwardBtn.addEventListener("click", moveForward);

let backInterval;
let forwardInterval; 
const UI = document.querySelector("#userInterval");

autoBwBtn.addEventListener("click", function () {
  autoBwBtn.disabled = true;
  autoFrwBtn.disabled = true;
  let seconds = UI.value * 1000;
  backInterval = setInterval(moveBack, seconds) });


autoFrwBtn.addEventListener("click", function () {
  autoBwBtn.disabled = true;
  autoFrwBtn.disabled = true;
  let seconds = UI.value * 1000;
  forwardInterval = setInterval(moveForward, seconds)});

document.querySelector("#stop").addEventListener("click", function () {
  autoBwBtn.disabled = false;
  autoFrwBtn.disabled = false;
  clearInterval(backInterval);
  clearInterval(forwardInterval);
})
