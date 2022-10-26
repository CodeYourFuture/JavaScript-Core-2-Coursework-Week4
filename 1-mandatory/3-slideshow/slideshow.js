const images = [
  "https://cynoco.co.uk/wp-content/uploads/2022/10/Pic1.jpg",
  "https://cynoco.co.uk/wp-content/uploads/2022/10/Pic2.jpg",
  "https://cynoco.co.uk/wp-content/uploads/2022/10/Pic3.jpg",
  "https://cynoco.co.uk/wp-content/uploads/2022/10/Pic4.jpg",
];

const slideShow = document.getElementById("slideShow");
const backBtn = document.getElementById("backBtn");
const forwardBtn = document.getElementById("forwardBtn");
const autoBackBtn = document.getElementById("autoBackBtn");
const autoForwardBtn = document.getElementById("autoForwardBtn");
const stopBtn = document.getElementById("stopBtn");
let slider = 0;
let myIntervalForward;
let myIntervalBack;

window.onload = forward;

forwardBtn.addEventListener("click", forward);
function forward() {
  slideShow.src = images[slider];
  slider++;
  if (slider > images.length -1) {
    slider = 0;
  }
}

backBtn.addEventListener("click", back);
function back() {
  slider--;
  slideShow.src = images[slider];
  if (slider === 0) {
    slider = images.length -1;
  }
}

autoForwardBtn.addEventListener("click", autoForward);

function autoForward() {
    stopSlide()
    myIntervalForward = setInterval((callback) => {
    callback = forward();
  }, 2000);
}

autoBackBtn.addEventListener("click",autoBack)

function autoBack() {
    stopSlide()
   myIntervalBack = setInterval((callback) => {
    callback = back();
  }, 2000);
}

stopBtn.addEventListener("click", stopSlide);

function stopSlide() {
  clearInterval(myIntervalBack);
  clearInterval(myIntervalForward);
}
