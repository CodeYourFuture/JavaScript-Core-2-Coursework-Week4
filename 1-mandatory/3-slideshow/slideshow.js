const images = [
    "https://cynoco.co.uk/wp-content/uploads/2022/10/Pic1.jpg",
    "https://cynoco.co.uk/wp-content/uploads/2022/10/Pic2.jpg",
    "https://cynoco.co.uk/wp-content/uploads/2022/10/Pic3.jpg",
    "https://cynoco.co.uk/wp-content/uploads/2022/10/Pic4.jpg",
]


const slideShow = document.getElementById("slideShow")
const backBtn = document.getElementById("backBtn")
const forwardBtn = document.getElementById("forwardBtn")
let slider = 0;

window.onload = forward

forwardBtn.addEventListener("click",forward)
function forward(){
    slideShow.src = images[slider];
    slider++;
    if (slider === images.length) {
        slider = 0;
    }
}
backBtn.addEventListener("click",back)
function back(){
    slider--;
    slideShow.src = images[slider];
    if (slider === images.length) {
        slider = 0;
    }
}


