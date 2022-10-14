// Write your code here
let images = [
  "images/1.jpg",
   "images/2.jpg",
    "images/3.jpg",
     "images/4.jpg",
      "images/5.jpg",
       "images/6.jpg",
];

let mainImage = document.getElementById("imageContainer");
let i = 0;
setImage(i);
let autoBackInt;
let autoRightInt;

function autoRight() {
  autoRightInt = setInterval(function () {
    if (i == images.length - 1) {
      i = 0;
    } else {
      i++;
    }

    setImage(i);
  }, 1000);
}

function Back() {
  if (i == 0) {
    i = images.length - 1;
  } else {
    i--;
  }

  setImage(i);
}

function autoBack() {
  autoBackInt = setInterval(function () {
    if (i == 0) {
      i = images.length - 1;
    } else {
      i--;
    }

    setImage(i);
  }, 1000);
}

function stops() {
  clearInterval(autoBackInt);
  clearInterval(autoRightInt);
}
function Right() {
  if (i == images.length - 1) {
    i = 0;
  } else {
    i++;
  }

  setImage(i);
}

function setImage(i) {

  mainImage.style.backgroundImage = `url(${images[i]})`;
}

document.getElementById("autoRight").addEventListener("click", () => {
  stops();
  autoRight();
});

document.getElementById("stop").addEventListener("click", () => {
  stops();
});

document.getElementById("Back").addEventListener("click", () => {
  Back();
});
document.getElementById("stop").addEventListener("click", () => {
  stops();
});

document.getElementById("autoBack").addEventListener("click", () => {
  stops();
  autoBack();
});
document.getElementById("Right").addEventListener("click", () => {
  Right();
});

