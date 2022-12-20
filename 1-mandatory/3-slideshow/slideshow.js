// Write your code here
const archImages = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg"
];

let intervalSet;
// Creating other buttons
let index = 0;
let counter = document.getElementById("count");
counter.innerHTML = index;
document.getElementById("archImage").src = archImages[index];
document.getElementById("forwBtn").addEventListener("click", () => {
    index++;
    document.getElementById("archImage").src = archImages[index % (archImages.length)];
    counter.innerHTML = index % (archImages.length);
})

document.getElementById("backBtn").addEventListener("click", () => {
  index--;
  if (index >= 0) {
    document.getElementById("archImage").src = archImages[index];
  } else {
    index = archImages.length + index;
    document.getElementById("archImage").src = archImages[index];
  }
  counter.innerHTML = index;
});

document.getElementById("autoForwBtn").addEventListener("click", () => {
  intervalSet = setInterval(() => {
    index++;
     counter.innerHTML = index % (archImages.length);
    document.getElementById("archImage").src =
      archImages[index % (archImages.length)];
  }, 2000);
 
});

document.getElementById("stop").addEventListener("click", () => {
    clearInterval(intervalSet);
});

document.getElementById("autoBackBtn").addEventListener("click", () => {
    intervalSet = setInterval(() => {
        index--;
        if(index < 0){
            index = archImages.length + index;  
        }
        counter.innerHTML = index % archImages.length;
        document.getElementById("archImage").src = archImages[index % archImages.length];
    }, 2000);
})