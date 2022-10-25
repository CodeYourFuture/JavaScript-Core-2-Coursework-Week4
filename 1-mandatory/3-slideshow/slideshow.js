// Write your code here

const flowerArray = [
  "example-screenshots/1.flower1.jpg",
  "example-screenshots/2.flower2.jpg",
  "example-screenshots/3.flower3.jpg",
];

//  select the btns
const btnNext = document.getElementById("btn-next");
console.log(btnNext);
const btnPrev = document.getElementById("btn-prev");
console.log(btnPrev);

//  select where the output will be shown

const image = document.querySelector("img");

/* NEXT btn */
// addevent listerner
let counter = 0;

btnNext.addEventListener("click", nextPhoto);
function nextPhoto() {
  counter++;
  if (counter >= flowerArray.length) {
    counter = 0;
    image.src = flowerArray[counter];
  } else {
    image.src = flowerArray[counter];
  }
}

/* prevous btn */
// addevent listerner

btnPrev.addEventListener("click", prevPhoto);
function prevPhoto() {
  counter++;
  if (counter >= flowerArray.length) {
    counter = 0;
    image.src = flowerArray[counter];
  } else {
    image.src = flowerArray[counter];
  }
}
