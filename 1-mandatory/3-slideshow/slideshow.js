const images = [
  {
    src: "./assets/cute-cat-a.png",
    
  },
  {
    src: "./assets/cute-cat-b.jpg",
  },
  {
    src: "./assets/cute-cat-c.jpg",
  },

];

const image = document.querySelector("#carousel-img");
const autoForwardBtn = document.querySelector("#auto-forward");
const forwardBtn = document.querySelector("#forward-btn");
const stopBtn = document.querySelector("#stop");
const backwardBtn = document.querySelector("#backward-btn");
const autoBackBtn = document.querySelector("#auto-backward");

let count = 0;

let intervalID;



document.addEventListener("DOMContentLoaded", getImage);

forwardBtn.addEventListener("click", nextPic);

backwardBtn.addEventListener("click", lastPic);

autoForwardBtn.addEventListener("click", autoForward);

autoBackBtn.addEventListener("click", autoBack);

stopBtn.addEventListener("click", stopAutoPlay);

// functions

function getImage() {
  image.src = images[0].src;
}

function nextPic() {
    
  count++;
  if (count > images.length - 1) {
    count = 0;
  }
  image.src = images[count].src;
}

function lastPic() {
    
  count--;
  if (count < 0) {
    count = images.length - 1;
  }
  image.src = images[count].src;
}

function autoForward() {
  autoForwardBtn.disabled = true;  
  autoBackBtn.disabled = true; 
  intervalID = setInterval(() => {
    nextPic();
  }, 1000);
}

function autoBack() {
  autoForwardBtn.disabled = true; 
  autoBackBtn.disabled = true; 
  intervalID = setInterval(() => {
    lastPic();
  }, 1000);
}

function stopAutoPlay() {
  autoForwardBtn.disabled = false;  
  autoBackBtn.disabled = false;
  clearInterval(intervalID);
}



