function slideshow() {
  const slideshow = document.getElementByID("");
  let back = docuemnt.getElementById("");
  let forward = document.getElementById("");
  let autoBack = documnet.getElementByID("");
  let stop = document.getElementById("");
  let autoForward = document.getElementById("");
}

function showImage(index) {
  slideshow.src = images[images];
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
  showImage(currentImage);
}

function autoBackward() {
  stopAuto();
  intervalId = setInterval(navigateBack, 50000);
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
