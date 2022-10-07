// Write your code here
let containerEl = document.getElementById("container");
document.body.appendChild(containerEl);
containerEl.style.backgroundColor = "rgb(203, 219, 237)";

let heading = document.getElementById("title");
heading.innerHTML = "<strong>Image Carousel</strong>";

const imageEl = document.getElementById("image");
let image = document.getElementById("pictures");

image.setAttribute("src", "./img/Image1.jpg");

const buttonsEl = document.getElementById("buttons");
const autoBack = document.createElement("button");
autoBack.innerText = "Auto Back".toUpperCase();
buttonsEl.appendChild(autoBack);
autoBack.className = "btn";

const back = document.createElement("button");
back.innerText = "Back".toUpperCase();
buttonsEl.appendChild(back);
back.className = "btn";

const stopSlide = document.createElement("button");
stopSlide.innerText = "Stop".toUpperCase();
buttonsEl.appendChild(stopSlide);
stopSlide.className = "btn";

// let paragraph = document.createElement('p');
// paragraph.innerHTML = '<strong>1/6</strong>';
// paragraph.style.color = "rgb(9, 26, 42)";
// buttonsEl.appendChild(paragraph)

const forward = document.createElement("button");
buttonsEl.appendChild(forward);
forward.innerText = "Forward".toUpperCase();
forward.className = "btn";

const autoForward = document.createElement("button");
autoForward.innerText = "Auto Forward".toUpperCase();
buttonsEl.appendChild(autoForward);
autoForward.className = "btn";

let i = 0; //counter
let autoSlide;
// sets a default image
function defaultImage() {
  image.setAttribute("src", imageArray[i]);
}
// setting the back manual button
function prev() {
  i--;
  if (i < 0) {
    i = imageArray.length - 1;
  }
  defaultImage();
}
// setting thr next manual button
function next() {
  i++;
  if (i > imageArray.length - 1) {
    i = imageArray.length;
    i = 0;
  }
  defaultImage();
}

//setting the automatic forward slideshow
function autoChange() {
  autoSlide = setInterval(() => {
    if (i === imageArray.length) {
      i = 0;
    }
    defaultImage();
    i++;
  }, 2000);
}
// setting the stop slideshow
function endSlide() {
  clearInterval(autoSlide);
}
// setting the automatic back slideshow
function autoStop() {
  autoSlide = setInterval(() => {
    if (i === 0) {
      i = imageArray.length;
    }
    i--;
    defaultImage();
  }, 2000);
}

back.addEventListener("click", prev);
forward.addEventListener("click", next);
stopSlide.addEventListener("click", endSlide);
autoForward.addEventListener("click", autoChange);
autoBack.addEventListener("click", autoStop);

const imageArray = [
  "./img/Image1.jpg",
  "./img/Image2.jpg",
  "./img/Image3.jpg",
  "./img/Image4.jpg",
  "./img/Image5.jpg",
  "./img/Image6.jpg",
];
