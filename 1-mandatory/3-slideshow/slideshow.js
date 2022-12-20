// Write your code here
const archImages = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg"
];

// Creating other buttons
let index = 0;
document.getElementById("archImage").src = archImages[index];
document.getElementById("forwBtn").addEventListener("click", () => {
    index++;
    if(index < archImages.length){
        document.getElementById("archImage").src = archImages[index];
    }
    
})

document.getElementById("backBtn").addEventListener("click", () => {
  index--;
  if (index >= 0) {
    document.getElementById("archImage").src = archImages[index];
  }
});