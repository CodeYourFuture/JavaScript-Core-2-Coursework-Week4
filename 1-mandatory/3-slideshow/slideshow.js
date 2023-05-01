let imageIndex = 0;
let timerId = null;
let autoPlayState = "off";

// const carouselImages = [
//   "https://d1aeri3ty3izns.cloudfront.net/media/35/357547/1200/preview.jpg",
//   "http://placekitten.com/200/300",
//   "https://images-na.ssl-images-amazon.com/images/I/71nJgkQau1L._AC_SL1500_.jpg",
// ];

// these carousel images for the test script
const carouselImages = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];
const ONE_SECOND_IN_MILISECONDS = 1000;
const forwardButton = document.querySelector("#forward-btn");
const backButton = document.querySelector("#back-btn");
const stopButton = document.querySelector("#stop");
const autoForwardButton = document.querySelector("#auto-forward");
const autoBackButton = document.querySelector("#auto-back");

function wrapIndexAround(index, length) {
  const remainder = index % length;
  return (remainder + length) % length;
}

function updateCarouselImage(imageUrl) {
  const imageElement = document.querySelector("img");
  imageElement.src = imageUrl;
}

function updatePosition(increment, callBack) {
  imageIndex = wrapIndexAround(imageIndex + increment, carouselImages.length);
  callBack(imageIndex);
}

function startAutoSlideShow(callBack, interval) {
  if (!timerId) timerId = setInterval(callBack, interval);
}

function stopAutoSlideShow() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
}

function initialSetup() {
  const firstImage = carouselImages[0];
  updateCarouselImage(firstImage);
}

forwardButton.addEventListener("click", () => {
  if (autoPlayState === "off" && timerId === null) {
    updatePosition(1, (newIndex) =>
      updateCarouselImage(carouselImages[newIndex])
    );
  }
});

backButton.addEventListener("click", () => {
  if (autoPlayState === "off" && timerId === null) {
    updatePosition(-1, (newIndex) =>
      updateCarouselImage(carouselImages[newIndex])
    );
  }
});

autoForwardButton.addEventListener("click", () => {
  autoBackButton.disabled = true;
  autoForwardButton.disabled = true;

  startAutoSlideShow(function () {
    updatePosition(1, (newIndex) =>
      updateCarouselImage(carouselImages[newIndex])
    );
  }, ONE_SECOND_IN_MILISECONDS);
});

autoBackButton.addEventListener("click", () => {
  autoBackButton.disabled = true;
  autoForwardButton.disabled = true;

  startAutoSlideShow(function () {
    updatePosition(-1, (newIndex) =>
      updateCarouselImage(carouselImages[newIndex])
    );
  }, ONE_SECOND_IN_MILISECONDS);
});

stopButton.addEventListener("click", () => {
  autoBackButton.disabled = false;
  autoForwardButton.disabled = false;

  stopAutoSlideShow();
});

window.addEventListener("load", () => {
  initialSetup();
});
