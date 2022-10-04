// Write your code here
let images = document.querySelector("#images");
let stopBtn = document.querySelector("#stop");
let nextBtn = document.querySelector("#next");
let autoNext = document.querySelector("#autoNext");
let previousBtn = document.querySelector("#previous");
let autoPrevious = document.querySelector("#autoPrevious");
let count = 1;
images.setAttribute("src", "sample-images/image1.jpg");
nextBtn.addEventListener("click", () => {
  count += 1;
  if (count > 4) {
    count = 1;
  }
  images.setAttribute("src", `sample-images/image${count}.jpg`);
});
previousBtn.addEventListener("click", () => {
  count -= 1;
  if (count < 1) {
    count = 4;
  }
  images.setAttribute("src", `sample-images/image${count}.jpg`);
});
autoNext.addEventListener("click", () => {
  let autoNextInt = setInterval(function () {
    count += 1;
    if (count > 4) {
      count = 1;
    }
    images.setAttribute("src", `sample-images/image${count}.jpg`);
  }, 2000);
});
autoPrevious.addEventListener("click", () => {
  let autoPreviousInt = setInterval(function () {
    count -= 1;
    if (count < 1) {
      count = 4;
    }
    images.setAttribute("src", `sample-images/image${count}.jpg`);
  }, 2000);
});
stopBtn.addEventListener("click", () => {
  for (i = 0; i < 100; i++) {
    window.clearInterval(i);
  }
});
