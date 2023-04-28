let Back = document.querySelector("#Back");
let Forward = document.querySelector("#Forward");
let Stop = document.querySelector("#Stop");
let AutoBack = document.querySelector("#AutoBack");
let AutoForward = document.querySelector("#AutoForward");

let currentPhoto = 0;
let a = "";

Forward.addEventListener("click", ForwardPhotos);

function ForwardPhotos() {
  let images = document.querySelector("img");
  let numbers = document.querySelector("#number");
  images.src = photos[currentPhoto].imag;
  numbers.innerHTML = photos[currentPhoto].number;
  currentPhoto++;
  if (currentPhoto >= photos.length) {
    currentPhoto = 0;
  }
}

Back.addEventListener("click", BackPhotos);

function BackPhotos() {
  let images = document.querySelector("img");
  let numbers = document.querySelector("#number");
  currentPhoto--;
  if (currentPhoto < 0) {
    currentPhoto = photos.length - 1;
  }
  images.src = photos[currentPhoto].imag;
  numbers.innerHTML = photos[currentPhoto].number;
}

// ////////////////////cat's Photos////////////////////////////////////////
let photos = [
  {
    imag: "/1-mandatory/3-slideshow/assets/1.jpg",
    number: 1,
  },
  {
    imag: "/1-mandatory/3-slideshow/assets/2.png",
    number: 2,
  },
  {
    imag: "/1-mandatory/3-slideshow/assets/3.jpg",
    number: 3,
  },
  {
    imag: "/1-mandatory/3-slideshow/assets/4.jpg",
    number: 4,
  },
  {
    imag: "/1-mandatory/3-slideshow/assets/5.jpg",
    number: 5,
  },
  {
    imag: "/1-mandatory/3-slideshow/assets/6.jpg",
    number: 6,
  },
  {
    imag: "/1-mandatory/3-slideshow/assets/7.jpg",
    number: 7,
  },
  {
    imag: "/1-mandatory/3-slideshow/assets/8.jpg",
    number: 8,
  },
  {
    imag: "/1-mandatory/3-slideshow/assets/9.jpg",
    number: 9,
  },
  {
    imag: "/1-mandatory/3-slideshow/assets/10.jpg",
    number: 10,
  },
];
