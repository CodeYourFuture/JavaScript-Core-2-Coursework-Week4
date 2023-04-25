// Write your code here
// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].classList.add(dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";

/////////////////////////////////////

let slides = document.querySelectorAll(".slide");
let currentSlide = 0;
var stopwatch = -1;

function showSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[currentSlide].classList.add("active");
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide();
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide();
}

document.querySelector(".forward").addEventListener("click", nextSlide);
document.querySelector(".back").addEventListener("click", prevSlide);

function autoForward() {
  stopwatch = setInterval(nextSlide, 2000);
}
function autoBack() {
  stopwatch = setInterval(prevSlide, 3000);
}

document.querySelector(".autoForward").addEventListener("click", autoForward);
document.querySelector(".autoBack").addEventListener("click", autoBack);
document.querySelector(".stop").addEventListener("click", function () {
  clearInterval(stopwatch);
});
