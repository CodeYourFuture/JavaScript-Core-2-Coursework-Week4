// Write your code here



const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
    "./assets/cute-cat-d.jpg",
    "./assets/cute-cat-e.jpg",
];


const captions = [
"1",
"2", 
"3", 
"4", 
"5"]


// const imageElement = document.getElementById("carousel-img");
// const captionElement = document.getElementById("caption");
// const forwardButton = document.getElementById("forward");
// const backButton = document.getElementById("backward");
// const autoForwardButton = document.getElementById("auto-forward");
// const autoBackButton = document.getElementById("auto-backward");
// const stopButton = document.getElementById("stop"); 

const imageElement = document.querySelector("#carousel-img");
const captionElement = document.querySelector("#caption");
const forwardBtn = document.querySelector("#forward");
const backBtn = document.querySelector("#backward");
const autoForwardBtn = document.querySelector("#auto-forward");
const autoBackBtn = document.querySelector("#auto-backward");
const stopBtn = document.querySelector("#stop");
const interval = 2000;



function displayImg() {
imageElement.src = images[currentIndex];
// imageElement.src = images;
captionElement.textContent = captions[currentIndex];
}
let currentIndex = 0; 

let intervalId;

function moveForwards() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
 displayImg();
}

function moveBackwards() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
 displayImg();
}

function startAutoForward() {
    intervalId = setInterval(moveForwards, 2000);
}

function stopAutoForward() { 
  clearInterval(intervalId);
}

function startAutoBackward() { 
    intervalId = setInterval(moveBackwards, 2000);
}

function stopAutoBackward() { 
  clearInterval(intervalId);
}

function stopSlideshow() {
  stopAutoForward();
  stopAutoBackward(); 
}

forwardBtn.addEventListener('click', moveForwards);
backBtn.addEventListener('click', moveBackwards);
autoForwardBtn.addEventListener('click', startAutoForward);
autoBackBtn.addEventListener('click', function() {
  stopAutoForward();
  startAutoBackward(); 
});
stopBtn.addEventListener('click', stopSlideshow);
 displayImg();  


