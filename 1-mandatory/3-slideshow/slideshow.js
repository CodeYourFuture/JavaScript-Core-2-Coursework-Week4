// Write your code here
const title = document.getElementById("title");
const image = document.getElementById("image");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const autoback = document.getElementById("autoback");
const autoforward = document.getElementById("autoforward");
const stop = document.getElementById("stop");
const time = document.getElementById("number");
time.value = 1000;
const imageArray = [
  "https://images.unsplash.com/photo-1673452175719-44871107a22f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1674216709275-61a436e1ecd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
  "https://images.unsplash.com/photo-1674228640216-156de827e0ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1673495249470-5d19d64cb127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2NnxDRHd1d1hKQWJFd3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
];
let imageCounter = 0;
let intervalId;

title.innerText = "Image Carousel";
image.src = imageArray[3];

prev.addEventListener("click", () => {
  image.src = imageArray[imageCounter];
  if (imageCounter == 0) {
    imageCounter = 3;
  } else {
    imageCounter--;
  }
});

next.addEventListener("click", () => {
  image.src = imageArray[imageCounter];
  if (imageCounter == 3) {
    imageCounter = 0;
  } else {
    imageCounter++;
  }
});

autoback.addEventListener("click", () => {
 intervalId = setInterval(autobackFunction, Math.floor(time.value));
});

autoforward.addEventListener("click", () => {
  intervalId = setInterval(autoForwardFunction, Math.floor(time.value)) ;
});

stop.addEventListener("click", () => {
  clearInterval(intervalId);
});


function autobackFunction() {
  image.src = imageArray[imageCounter];
  if (imageCounter == 0) {
    imageCounter = 3;
  } else {
    imageCounter--;
  }
}


function autoForwardFunction() {
   image.src = imageArray[imageCounter];
   if (imageCounter == 3) {
     imageCounter = 0;
   } else {
     imageCounter++;
   }
}