const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const autoForwardButton = document.querySelector(".auto-forward");
const autoBackButton = document.querySelector(".auto-back");
const autoStopButton = document.querySelector(".auto-stop");
const slideList = document.querySelector("[data-slides]");
var forwardCarousel;
var backwardCarousel;

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

autoForwardButton.addEventListener("click", () => {
  forwardCarousel = setInterval(function () {
    nextSlide();
  }, 2000);
});

autoBackButton.addEventListener("click", () => {
  backwardCarousel = setInterval(function () {
    prevSlide();
  }, 2000);
});

autoStopButton.addEventListener("click", () => {
  clearInterval(forwardCarousel);
  clearInterval(backwardCarousel);
});

function nextSlide() {
  const activeSlide = slideList.querySelector("[data-active]");
  let newIndex = [...slideList.children].indexOf(activeSlide) + 1;
  if (newIndex >= slideList.children.length) newIndex = 0;
  slideList.children[newIndex].dataset.active = true;
  delete activeSlide.dataset.active;
}

function prevSlide() {
  const activeSlide = slideList.querySelector("[data-active]");
  let newIndex = [...slideList.children].indexOf(activeSlide) - 1;
  if (newIndex < 0) newIndex = slideList.children.length - 1;
  if (newIndex >= slideList.children.length) newIndex = 0;
  slideList.children[newIndex].dataset.active = true;
  delete activeSlide.dataset.active;
}
