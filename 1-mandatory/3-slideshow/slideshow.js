// starts the auto display on the first load of the display
var slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  var slides = document.getElementsByClassName("slide");
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

// gets the data from the HTML
const carouselSlide = document.querySelector(".slideshow-container");
const carouselImages = carouselSlide.querySelectorAll(".slide img");
const prevBtn = document.querySelector(".carousel-btn-prev");
const nextBtn = document.querySelector(".carousel-btn-next");
const autoBtn = document.querySelector(".carousel-btn-auto");
const stopBtn = document.querySelector(".carousel-btn-stop");
let counter = 0;

function slideNext() {
  if (counter >= carouselImages.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  carouselImages.forEach(function (image) {
    image.style.display = "none";
  });
  carouselImages[counter].style.display = "block";
}

function slidePrev() {
  if (counter <= 0) {
    counter = carouselImages.length - 1;
  } else {
    counter--;
  }
  carouselImages.forEach(function (image) {
    image.style.display = "none";
  });
  carouselImages[counter].style.display = "block";
}

// starts the auto slide feature
let autoPlayInterval;

function startAutoPlay() {
  autoPlayInterval = setInterval(slideNext, 1000); // Change image every 5 seconds
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

// getting random picture
function getRandomPicture() {
  const websites = [
    "https://images.pexels.com/photos/13446290/pexels-photo-13446290.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    "https://images.pexels.com/photos/11794796/pexels-photo-11794796.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    "https://images.pexels.com/photos/13446290/pexels-photo-13446290.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    "https://images.pexels.com/photos/11794796/pexels-photo-11794796.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  ];
  const randomIndex = Math.floor(Math.random() * websites.length);
  return websites[randomIndex];
}

const randomPicture = getRandomPicture();
carouselImages[counter].src = randomPicture;

// Event listeners
nextBtn.addEventListener("click", slideNext);
prevBtn.addEventListener("click", slidePrev);
autoBtn.addEventListener("click", startAutoPlay);
stopBtn.addEventListener("click", stopAutoPlay);

// /////////////////////////////////////////////////////////////////
// // starts the auto display on the first load of the display
// var slideIndex = 0;
// showSlides(slideIndex);

// function changeSlide(n) {
//   showSlides((slideIndex += n));
// }

// function showSlides(n) {
//   var slides = document.getElementsByClassName("slide");
//   if (n >= slides.length) {
//     slideIndex = 0;
//   }
//   if (n < 0) {
//     slideIndex = slides.length - 1;
//   }
//   for (var i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex].style.display = "block";
// }
// //
// // gets the data from the HTML
// const carouselSlide = document.querySelector(".slideshow-container");
// const carouselImages = carouselSlide.querySelectorAll(".slide img");
// const prevBtn = document.querySelector(".prev-btn");
// const nextBtn = document.querySelector(".next-btn");
// let counter = 0;

// carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;

// function slideNext() {
//   if (counter >= carouselImages.length - 1) return;
//   carouselSlide.style.transition = "transform 0.5s ease-in-out";
//   counter++;
//   carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
// }

// function slidePrev() {
//   if (counter <= 0) return;
//   carouselSlide.style.transition = "transform 0.5s ease-in-out";
//   counter--;
//   carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
// }

// //
// // starts the auto slide feature
// function startAutoPlay() {
//   autoPlayInterval = setInterval(slideNext, 5000); // Change image every 5 seconds
// }

// function stopAutoPlay() {
//   clearInterval(autoPlayInterval);
// }

// //
// // getting random picture
// function getRandomPicture() {
//   const websites = [
//     "https://images.pexels.com/photos/11794796/pexels-photo-11794796.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
//     "https://images.pexels.com/photos/11794796/pexels-photo-11794796.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
//     "https://images.pexels.com/photos/11794796/pexels-photo-11794796.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
//     "https://images.pexels.com/photos/11794796/pexels-photo-11794796.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
//   ];
//   const randomIndex = Math.floor(Math.random() * websites.length);
//   return websites[randomIndex];
// }

// const randomPicture = getRandomPicture();
// carouselImages[counter].src = randomPicture;
// //
// //
// nextBtn.addEventListener("click", slideNext);
// prevBtn.addEventListener("click", slidePrev);
// autoBtn.addEventListener("click", startAutoPlay);
// stopBtn.addEventListener("click", stopAutoPlay);

////////////////////////////////////////////////////////////
// var slideIndex = 0;
// showSlides(slideIndex);

// function changeSlide(n) {
//   showSlides((slideIndex += n));
// }

// function showSlides(n) {
//   var slides = document.getElementsByClassName("slide");
//   if (n >= slides.length) {
//     slideIndex = 0;
//   }
//   if (n < 0) {
//     slideIndex = slides.length - 1;
//   }
//   for (var i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex].style.display = "block";
// }
//
////
// /////
// const carouselSlide = document.querySelector(".carousel-slide");
// const carouselImages = document.querySelector(".carousel-slide img");
// const prevBtn = document.querySelector(".carousel-btn-prev");
// const nextBtn = document.querySelector(".carousel-btn-next");
// const autoBtn = document.querySelector(".carousel-btn-auto");
// const stopBtn = document.querySelector(".carousel-btn-stop");
// let autoPlayInterval;

// let counter = 1;
// const slideWidth = carouselImages[0].clientWidth;

// carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;

// function slideNext() {
//   if (counter >= carouselImages.length - 1) return;
//   carouselSlide.style.transition = "transform 0.5s ease-in-out";
//   counter++;
//   carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
// }

// function slidePrev() {
//   if (counter <= 0) return;
//   carouselSlide.style.transition = "transform 0.5s ease-in-out";
//   counter--;
//   carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
// }

// function startAutoPlay() {
//   autoPlayInterval = setInterval(slideNext, 5000); // Change image every 5 seconds
// }

// function stopAutoPlay() {
//   clearInterval(autoPlayInterval);
// }
// //

// function getRandomPicture() {
//   const websites = [
//     "https://images.pexels.com/photos/11794796/pexels-photo-11794796.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
//     "https://images.pexels.com/photos/11794796/pexels-photo-11794796.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
//     "https://images.pexels.com/photos/11794796/pexels-photo-11794796.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
//     "https://images.pexels.com/photos/11794796/pexels-photo-11794796.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
//   ];
//   const randomIndex = Math.floor(Math.random() * websites.length);
//   return websites[randomIndex];
// }

// const randomPicture = getRandomPicture();
// carouselImages[counter].src = randomPicture;

// nextBtn.addEventListener("click", slideNext);
// prevBtn.addEventListener("click", slidePrev);
// autoBtn.addEventListener("click", startAutoPlay);
// stopBtn.addEventListener("click", stopAutoPlay);
