// Write your code here
let moved_img = document.querySelector(".img");
let images = [
  "mountain1.jpg",
  "mountain2.jpg",
  "mountain3.jpg",
  "mountain4.jpg",
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
