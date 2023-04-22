// Write your code here
let slideIndex = 1;
showSlides(slideIndex);
let intervalId = null;

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function ForwardSlidesAuto() {
  intervalId = setInterval(() => {
    plusSlides(1);
  }, 2200);
}

function BackwardSlidesAuto() {
  intervalId = setInterval(() => {
    plusSlides(-1);
  }, 2200);
}

document.getElementById("autofwd").addEventListener("click", () => {
  ForwardSlidesAuto();
});

document.getElementById("autobwd").addEventListener("click", () => {
  BackwardSlidesAuto();
});

document.getElementById("stopauto").addEventListener("click", () => {
  clearInterval(intervalId);
});
