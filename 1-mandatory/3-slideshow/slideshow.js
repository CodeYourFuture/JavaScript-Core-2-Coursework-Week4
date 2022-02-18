// Write your code here
const back = document.getElementById("btnBackward");
const forward = document.getElementById("btnForward");
const autoBack = document.getElementById("btnAutoBack");
const autoForward = document.getElementById("btnAutoForward");
const stopBtn = document.getElementById("btnStop");
const img = document.querySelector("img");
const placeImages = [
  "placesimages/bath.jpg",
  "placesimages/cambridge-oxford.jpg",
  "placesimages/cardiff.jpg",
  "placesimages/edinburgh.jpg",
  "placesimages/loch-ness-inverness.jpg",
  "placesimages/london.jpg",
  "placesimages/manchester.jpg",
  "placesimages/stonehenge-salisbury.jpg",
  "placesimages/windsor.jpg",
  "placesimages/york.jpg",
];
const slideIndex = 0;

forward.addEventListener("click", () => {
  slideIndex++; 
  slideIndex = slideIndex % placeImages.length;
  img.src = placeImages[slideIndex];
    
});

back.addEventListener("click", () => {
  slideIndex =
    ( placeImages.length + slideIndex - 1) %  placeImages.length;
  img.src = placeImages[slideIndex];
 
});

let myInterval;
autoBack.addEventListener('click', () => {
myInterval = setInterval(() => {
  slideIndex =
        (placeImages.length + slideIndex - 1) % placeImages.length;
      img.src = placeImages[slideIndex];
    }, );
})

autoForward.addEventListener('click', () => {
  myInterval = setInterval(() => {
    slideIndex = (slideIndex + 1) % placeImages.length;
    img.src = placeImages[slideIndex];
  }, );
})

stopBtn.onclick = function () {
  clearInterval(myInterval);
}