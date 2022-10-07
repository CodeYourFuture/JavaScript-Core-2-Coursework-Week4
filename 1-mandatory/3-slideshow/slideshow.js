
// Write your code here

let imgEl = document.getElementById("image");
let dogImages = ["img1.jpg", "img2.jpg", "img3.jpg","img4.jpg", "img5.jpg","img6.jpg"];
let currentIndex = 0;
let autoSlide;
document.getElementById("body").style.backgroundColor = "lightblue";

function back(){
    if(currentIndex <= 0) currentIndex = dogImages.length;
    currentIndex--;
  return  setImg();
}

function forward(){
 if(currentIndex >= dogImages.length-1) currentIndex = -1;
 currentIndex++;
 return setImg();
}

function setImg(){
return imgEl.setAttribute("src", "images/" + dogImages[currentIndex]);
}

function autoBack() {
  autoSlide = setInterval(()=>{
    back();
  },3000);
}

function stop(){
clearInterval(autoSlide);
}

function autoForward() {
 autoSlide = setInterval(()=>{
    forward();
  }, 3000);
}