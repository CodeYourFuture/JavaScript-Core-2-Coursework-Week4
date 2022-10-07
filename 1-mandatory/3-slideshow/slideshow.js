let moved_img = document.getElementById("imgHolder");
let images = [
  "images1.jpeg",
  "images2.jpeg",
  "images3.jpeg",
  "images4.jpeg",
  "images5.jpeg",
  "images6.jpeg",
];

let previous = document.querySelector(".btn-prev");
let next = document.querySelector("btn-next");



let i = 0;

function prev() {
  if (i <= 0) i = images.length;
  i--;
  return buttonClick();
}

function next() {
  if (i >= images.length - 1) i = -1;
  i++;
  return buttonClick();
}

function buttonClick() {
  return moved_img.setAttribute("src", "./img/" + images[i]);
}