// Write your code here
const images = [
  "images/covidfour.jpeg",
  "images/covidone.jpg", 
  "images/covidresponse.jpeg",
  "images/covidsix.jpeg",
  "images/covidfive.jpeg"  
];
let imagecount = 0;
document.getElementById("forwardbutton").addEventListener("click", function() {
 moveForward()   
})
function moveForward() {
    document.getElementById("images").setAttribute("src", images[imagecount])
    imagecount = imagecount + 1;
    if (imagecount == images.length) {
        imagecount = 0;
    }
}
document.getElementById("backbutton").addEventListener("click", function() {
  moveBackward()   
})
document.getElementById("autoplay").addEventListener("click", function() {
  autoplay()   
})
function moveBackward() {
     imagecount = imagecount - 1;
    document.getElementById("images").setAttribute("src", images[imagecount])
    if (imagecount == 0) {
        imagecount = images.length -1;
    }
}
var interval 
function autoplay() {
  interval = setInterval(() => {
   moveForward()
  }, 1000)
}
