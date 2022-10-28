// Write your code here
let photo = document.querySelectorAll("img");
let counter = 0;
let moveInterval;
let moveBackInterval;

let btnAutoBack = document.getElementById("aback");
let btnBack = document.getElementById("back");
let btnStop= document.getElementById("stop");
let btnForward = document.getElementById("forward");
let btnAutForward = document.getElementById("aforward");

photo.forEach((img, i) => {
    img.style.left = `${i*100}%`;
});

btnAutoBack.addEventListener("click", () =>{
  clearAuto();
  moveBackInterval = setInterval(() => {
    getprevImg();
  }, 1500);
});

btnBack.addEventListener("click", () =>{
    getprevImg();
});

btnStop.addEventListener("click", () =>{
  clearAuto()  
});

btnForward.addEventListener("click", () =>{
  getNextImg()  
});

btnAutForward.addEventListener("click", () =>{
   clearAuto();
   moveInterval = setInterval (() => {
    getNextImg();
   }, 1500); 
});

function display() {
  photo.forEach((img) =>{
    if (counter > photo.length - 1) {
      counter = 0;
    }
    if (counter < 0) {
      counter = photo.length - 1;
    }
    img.style.transform = `translateX(${-counter * 100}%)`
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
  clearInterval(moveInterval);
  clearInterval(moveBackInterval);
}
