// Write your code here
// challenge 1
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

/* 
challenge# 2

 Make auto-forward and auto-back buttons to automatically move in that direction through the list of images.
*/

// select the btn to move forward / backward
const btnAutoForward = document.getElementById("btn-auto-forward");
const btnAutoBackward = document.getElementById("btn-auto-backward");
const btnStop = document.getElementById("btn-stop");
let time = 2000;

// add event listener to auto forward
btnAutoForward.addEventListener("click", function () {
 forwardInterval = setInterval(()=> {
nextPhoto()
 }, time)})

//   add event listerner to auto backward
btnAutoBackward.addEventListener("click", function () {
  backwardInterval = setInterval(() => {
    prevPhoto();
  }, time);
});
 // btn stop
 btnStop.addEventListener("click", stop)
 function stop (){
  clearAutoimages()
 }


function clearAutoimages(){
clearInterval(forwardInterval)
//  clearauto
// function clearAuto() {
  //  clearInterval(forwardInterval);
   clearInterval(backwardInterval);
 }
