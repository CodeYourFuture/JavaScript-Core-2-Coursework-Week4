// Write your code here
let imageCarousel = document.getElementById("image");
let imageNumber = document.getElementById("image-number");
let autoBackBtn = document.getElementById("auto-back-btn");
let backBtn = document.getElementById("back-btn");
let stopBtn = document.getElementById("stop-btn");
let forwardBtn = document.getElementById("forward-btn");
let autoForwardBtn = document.getElementById("auto-forward-btn");
let imagesArray = [
  "./images/Cute-Baby-Pic1.jpg",
  "./images/Cute-Baby-Pic2.jpg",
  "./images/Cute-Baby-Pic3.jpg",
  "./images/Cute-Baby-Pic4.jpg",
];
let i = 0;
let j = imagesArray.length 
let countdownInterval;
forwardBtn.addEventListener("click", () => {
  if (typeof imageNumber.innerText === "number") {
    i = imageNumber.innerText;
  }
  console.log(imageNumber.innerText);
  if (i === imagesArray.length) {
    i = 0;
  }
  imageCarousel.src = imagesArray[i];
  imageNumber.innerText = i;
  i++;
});

backBtn.addEventListener("click", () => {
  if (typeof imageNumber.innerText === "number") {
    j = imageNumber.innerText;
  }
  if (j === 0) {
    j = imagesArray.length;
  }
  j--;
  imageCarousel.src = imagesArray[j];

  imageNumber.innerText = j;
});

autoForwardBtn.addEventListener("click", () => {
  countdownInterval = setInterval(() => {
    if (i === imagesArray.length) {
      i = 0;
    }
    imageCarousel.src = imagesArray[i];
    imageNumber.innerText = i;
    i++;
  }, 1000);
});
autoBackBtn.addEventListener("click", () => {
  countdownInterval = setInterval(() => {
    if (typeof imageNumber.innerText === "number") {
      j = imageNumber.innerText;
    }
    if (j === 0) {
      j = imagesArray.length;
    }
    j--;
    imageCarousel.src = imagesArray[j];

    imageNumber.innerText = j;
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(countdownInterval);
});