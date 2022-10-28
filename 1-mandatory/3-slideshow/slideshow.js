// Write your code here

const fishImages = [
  "https://30a.com/wp-content/uploads/2021/12/Untitled-design-2.png",
  "https://30a.com/wp-content/uploads/2020/12/1076px-Clown_fish_in_the_Andaman_Coral_Reef.jpg",
  "https://30a.com/wp-content/uploads/2020/12/1185px-Balistoides_conspicillum_2607.jpg",
  "https://30a.com/wp-content/uploads/2021/08/Untitled-design-1-2.png",
];

var imageElement = document.querySelector(".slide-show");
var pElement = document.querySelector("p");
var currentIndex;
var sliderInterval;

const loadImage = (imageIndex) => {
  imageElement.src = fishImages[imageIndex];
  currentIndex = imageIndex;
  pElement.innerText = currentIndex;
};

const nextImage = () => {
  const nextIndex = ++currentIndex % fishImages.length;
  loadImage(nextIndex);
};

const previousImage = () => {
  const prevIndex = --currentIndex >= 0 ? currentIndex : fishImages.length - 1;
  loadImage(prevIndex);
};

const autoBack = () => {
  sliderInterval = setInterval(previousImage, 2500);
};

const autoForward = () => {
  sliderInterval = setInterval(nextImage, 2500);
};

const stopImage = () => {
  clearInterval(sliderInterval);
};

window.onload = loadImage(0);
