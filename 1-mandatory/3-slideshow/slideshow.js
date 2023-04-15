// Write your code here

// task 1
const images = [
  "https://tse1.mm.bing.net/th?id=OIP.1YM53mG10H_U25iPjop83QHaEo&amp;pid=Api&amp;rs=1&amp;c=1&amp;qlt=95&amp;w=183&amp;h=114",
  "https://tse1.mm.bing.net/th?id=OIP.MBlOJPg-beF5E6q2yR5k9gHaLH&amp;pid=Ap",
];
/*
let index = 0;

function showImage() {
  const imgElement = document.getElementById("slideshow-img");
  imgElement.src = images[index];
  index = (index + 1) % images.length;
}

setInterval(showImage, 3000);
*/

//task 2
function slideshow() {
  const slideshow = document.getElementById("slideshow-img");
  const back = document.getElementById("back");
  const forward = document.getElementById("forward");
  const autoBack = document.getElementById("auto-back");
  const stop = document.getElementById("stop");
  const autoForward = document.getElementById("auto-forward");
  let currentIndex = 0;
  let intervalId = null;

  function showImage(index) {
    slideshow.src = images[index];
    currentIndex = index;
  }

  function navigateBack() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    showImage(currentIndex);
  }

  function navigateForward() {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    showImage(currentIndex);
  }

  function autoBackward() {
    stopAuto();
    intervalId = setInterval(navigateBack, 5000);
  }

  function stopAuto() {
    clearInterval(intervalId);
  }

  function autoForward() {
    stopAuto();
    intervalId = setInterval(navigateForward, 5000);
  }

  showImage(currentIndex);
  back.addEventListener("click", navigateBack);
  forward.addEventListener("click", navigateForward);
  autoBack.addEventListener("click", autoBackward);
  stop.addEventListener("click", stopAuto);
  autoForward.addEventListener("click", autoForward);
}
