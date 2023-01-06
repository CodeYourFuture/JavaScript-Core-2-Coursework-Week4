// Write your code here
const images = document.getElementsById("image");

let currentSlide = 1;
displaySlides(currentSlide);

function displaySlides(num) {
  var x;
  var slides = images;
  if (num > slides.length) {
    currentSlide = 1;
  }
  if (num < 1) {
    currentSlide = slides.length;
  }
  for (x = 0; x < slides.length; x++) {
    slides[x].style.display = "none";
  }
  slides[currentSlide - 1].style.display = "block";
}

function setSlides(num) {
  displaySlides((currentSlide += num));
}
