// Write your code here
const slides = {
  src01:
    "https://images.unsplash.com/photo-1674561324389-d6de2ddc2265?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
  src02:
    "https://images.unsplash.com/photo-1664687688576-cdde75eacdc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80",
  src03:
    "https://images.unsplash.com/photo-1665008804550-1995c88254fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  src04:
    "https://images.unsplash.com/photo-1665292276230-23d968485757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  src05:
    "https://images.unsplash.com/photo-1665292275574-a9782ee1da0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  src06:
    "https://images.unsplash.com/photo-1665292276777-d8ffe217a057?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  src07:
    "https://images.unsplash.com/photo-1665292717865-1660c95b6161?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  src08:
    "https://images.unsplash.com/photo-1665292273316-d4c7fa56aaa5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  src09:
    "https://images.unsplash.com/photo-1665292276206-52261b6fac60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  src10:
    "https://images.unsplash.com/photo-1664216871021-738d7998cd82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2513&q=80",
  src11:
    "https://images.unsplash.com/photo-1664216763048-38ab95999fcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80",
  src12:
    "https://images.unsplash.com/photo-1664687689617-50a2df1c79e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
};

let currentImage = 0;
let int;
let time = 2200;

const imgBox = document.querySelector(".img-box");
const imgTag = document.getElementById("carousel-img");
const backBtn = document.getElementById("backward-btn");
const forwardBtn = document.getElementById("forward-btn");
const autoBackBtn = document.getElementById("auto-backward");
const autoForwardBtn = document.getElementById("auto-forward");
const stopBtn = document.getElementById("stop");
const timeInput = document.getElementById("time-input");
const updateTimeBtn = document.getElementById("time-btn");

// window.onload = function () {
//   autoForwardClick();
// };

window.addEventListener("load", updateImage);

function updateImage() {
  imgTag.src = slides[Object.keys(slides)[currentImage]];
  imgTag.classList.add("visible");
}
console.log(imgTag.src);

backBtn.addEventListener("click", backBtnClick);
function backBtnClick() {
  clearInterval(int);
  currentImage =
    currentImage > 0 ? currentImage - 1 : Object.keys(slides).length - 1;
  updateImage();
}

forwardBtn.addEventListener("click", forwardBtnClick);
function forwardBtnClick() {
  clearInterval(int);
  currentImage =
    currentImage < Object.keys(slides).length - 1 ? currentImage + 1 : 0;
  updateImage();
}

autoBackBtn.addEventListener("click", autoBackClick);
function autoBackClick() {
  clearInterval(int);
  int = setInterval(() => {
    currentImage =
      currentImage > 0 ? currentImage - 1 : Object.keys(slides).length - 1;
    updateImage();
    setTimeout(() => {
      imgTag.classList.remove("visible");
    }, 1900);
  }, 2200);
}

autoForwardBtn.addEventListener("click", autoForwardClick);
function autoForwardClick() {
  clearInterval(int);
  int = setInterval(() => {
    currentImage =
      currentImage < Object.keys(slides).length - 1 ? currentImage + 1 : 0;
    updateImage();
    setTimeout(() => {
      imgTag.classList.remove("visible");
    }, 1900);
  }, time);
  // console.log(time);
}

stopBtn.addEventListener("click", stopBtnClick);
function stopBtnClick() {
  updateImage();
  clearInterval(int);
}

updateTimeBtn.addEventListener("click", updateTimeBtnClick);
function updateTimeBtnClick() {
  clearInterval(int);
  time = Number(timeInput.value);
  // console.log(time);
}
