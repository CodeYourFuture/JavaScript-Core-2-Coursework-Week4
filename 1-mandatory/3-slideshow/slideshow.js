// Write your code here
let pics= document.querySelectorAll("img");
let btnAutoback = document.getElementById("auto-back");
let btnBack     = document.getElementById("back");
let btnStop     = document.getElementById("stop");
let btnForward  = document.getElementById("forward");
let btnAutoforward  = document.getElementById("auto-forward");
let counter     = 0;
let forwardInterval;
let backwardInterval;

pics.forEach((img, i) => {
img.style.left = `${i*100}%`;
});
 
 btnAutoback.addEventListener("click", ()=>{
clearAuto();
  backwardInterval = setInterval(() => {
    getprevImg();
  }, 1500);
 })

btnBack.addEventListener("click", ()=>{
getprevImg();
 })

btnStop.addEventListener("click", ()=>{
clearAuto()
 })

btnForward.addEventListener("click", ()=>{
getNextImg();
 })

btnAutoforward.addEventListener("click", ()=>{
clearAuto();
  forwardInterval = setInterval(() => {
    getNextImg();
  }, 1500);
 })
// slidecounter//
 function display() {
  pics.forEach((img) => {
    if (counter > pics.length - 1) {
      counter = 0;
    }
    if (counter < 0) {
      counter = pics.length - 1;
    }
    img.style.transform = `translateX(${-counter * 100}%)`;
  });
}

function getNextImg() {
  counter++;
  display();
}

function getprevImg() {
  counter--;
  display();
}

function clearAuto() {
  clearInterval(forwardInterval);
  clearInterval(backwardInterval);
}