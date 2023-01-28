// Write your code here
const imagesArray = [
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/17/b9/ce/caption.jpg?w=600&h=600&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/9b/37/52/caption.jpg?w=600&h=600&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/1c/41/a9/img-20160720-wa0038-largejpg.jpg?w=1000&h=800&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/0a/5f/39/caption.jpg?w=600&h=600&s=1",
];
let count = 0;
let intervalId = null;

let forwardBtn = document.getElementById("forward-btn");
let backwardBtn = document.getElementById("backward-btn");
let autoForwardBtn = document.getElementById("auto-forward-btn");
let autoBackwardBtn = document.getElementById("auto-backward-btn");
let stopBtn = document.getElementById("stop-btn");
let imgSlideshow = document.getElementById("carousel-img");
window.addEventListener("load", () => {
  imgSlideshow.src = imagesArray[0];
});

forwardBtn.addEventListener("click", goForward);
backwardBtn.addEventListener("click", goBackward);
stopBtn.addEventListener("click", stopSlideshow);

autoForwardBtn.addEventListener("click", () => {
  intervalId = setInterval(goForward, 1000);
});

autoBackwardBtn.addEventListener("click", () => {
  intervalId = setInterval(goBackward, 1000);
});

function stopSlideshow() {
  clearInterval(intervalId);
}

function goForward() {
  count++;
  imgSlideshow.src = imagesArray[count];

  if (count === imagesArray.length) {
    count = 0;
    imgSlideshow.src = imagesArray[count];
  }
}

function goBackward() {
  if (count === 0) {
    count = imagesArray.length;
    imgSlideshow.src = imagesArray[count];
  }

  count--;
  imgSlideshow.src = imagesArray[count];
}

// let setIntForward = setInterval(() => {
//   count++;
//   imgSlideshow.src = imagesArray[count];
// }, 1000);

// let setIntBackward =
