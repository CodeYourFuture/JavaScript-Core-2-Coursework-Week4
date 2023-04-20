// Write your code here

/*
1. Put the images on top of each other using CSS.
2. Load one image at a time.
    step 1: create an arrary of the image sources
    step 2: load the first image source to the image tag (when the website uploads using JS we can have our first image displayed on the page using the first array index)
    step 3: We can make the index postion go up (increment) by 1 when we click "forward"
    step 4: We can make the index postion go down by 1 when we click the "backward"
*/


const images = [
  {
    src: "./assets/cute-cat-a.png",
    alt: "cute white cat with black and grey stripes",
    caption: "cute cat",
  },
  {
    src: "./assets/cute-cat-b.jpg",
  },
  {
    src: "./assets/cute-cat-c.jpg",
  },
  {
    src: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];

const image = document.querySelector("#carousel-img");
const autoForwardBtn = document.querySelector("#auto-foward");
const forwardBtn = document.querySelector("#forward-btn");
const stopBtn = document.querySelector("#stop");
const backwardBtn = document.querySelector("#backward-btn");
const autoBackBtn = document.querySelector("#auto-backward");

let ids = 0;

let intervalID;

// eventListener

document.addEventListener("DOMContentLoaded", getImageOnload);

forwardBtn.addEventListener("click", getNextPic);

backwardBtn.addEventListener("click", getLastPic);

autoForwardBtn.addEventListener("click", showAutoForward);

autoBackBtn.addEventListener("click", showAutoBack);

stopBtn.addEventListener("click", stopAutoPlay);

// functions

function getImageOnload() {
  image.src = images[0].src;
}

function getNextPic() {
    // console.log("alpha1");
  ids++;
  if (ids > images.length - 1) {
    ids = 0;
  }
  image.src = images[ids].src;
}

function getLastPic() {
    // console.log("beta1");
  ids--;
  if (ids < 0) {
    ids = images.length - 1;
  }
  image.src = images[ids].src;
}

function showAutoForward() {
//   console.log("alpha");
  autoForwardBtn.disabled = true; // to stop repeating another iteration forward while it is autoforwarding
  autoBackBtn.disabled = true; // to stop repeating another iteration backward while it is autoforwarding
  intervalID = setInterval(() => {
    getNextPic();
  }, 2000);
}

function showAutoBack() {
//   console.log("beta");
  autoForwardBtn.disabled = true; // to stop repeating another iteration forward while it is autobackwarding
  autoBackBtn.disabled = true; // to stop repeating another iteration backward while it is autobackwarding
  intervalID = setInterval(() => {
    getLastPic();
  }, 2000);
}

function stopAutoPlay() {
//   console.log("gamma");
  autoForwardBtn.disabled = false; // to enable the autoforward button work as soon as we stop the previous iteration
  autoBackBtn.disabled = false; // to enable the autobackward button work as soon as we stop the previous iteration
  clearInterval(intervalID);
}


/*

Alternative solution:

const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
  "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
];

function changeImage() {
  const imageElement = document.getElementById("carousel-img");
  imageElement.src = images[0];

  const forwardBtn = document.getElementById("forward-btn");
  const backwardBtn = document.getElementById("backward-btn");

  let index = 0;

  forwardBtn.addEventListener("click", function (event) {
    event.preventDefault();
    index++;
    if (index === images.length) {
      index = 0;
    }
    imageElement.src = images[index];
  });

  backwardBtn.addEventListener("click", function (event) {
    event.preventDefault();
    index--;
    if (index === -1) {
      index = images.length - 1;
    }
    imageElement.src = images[index];
  });
}

//calling the function

changeImage();

*/