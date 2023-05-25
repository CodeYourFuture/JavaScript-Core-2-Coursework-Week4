
// For some reason I cannot make the pictures show but please look at the the picture "alt" text , thanks

const imageContainer = document.querySelector(".image_container");
const images = imageContainer.querySelectorAll("img");
const theForwardBtn = document.querySelector(".forward");
const theBackBtn = document.querySelector(".back");
const thePictureCounter = document.getElementById("pictureCounter");
const theAutoFwdBtn = document.querySelector(".autoforward");
const stopBtn = document.querySelector(".stop");
const theAutoBackBtn = document.querySelector(".autoback");

let imageIndex = 0;
let counter = 0;
let autoForwardInterval;
let autoBackInterval;

showImage(imageIndex);

theForwardBtn.addEventListener("click", showNextImage);
theBackBtn.addEventListener("click", showBackImage);
theAutoFwdBtn.addEventListener("click", autoForward);
stopBtn.addEventListener("click", stopTheMadness);
theAutoBackBtn.addEventListener("click", autoBack);

function showImage(index) {
    images.forEach(image => {
        image.style.display = "none";
    });
    images[index].style.display = "block";
  }  


function showNextImage() {
    imageIndex++;
    if (imageIndex >= images.length) {
        imageIndex = 0;
    }
    showImage(imageIndex);
    numberCounter();
}

function showBackImage() {
    imageIndex--;
    if (imageIndex < 0) {
        imageIndex = images.length - 1;
    }
    showImage(imageIndex);
    counterReverse();
}

// Number counter under the pictures

function numberCounter() {
    let currentNumber = parseInt(thePictureCounter.textContent);
    currentNumber++;
    if (currentNumber > 2) {
        currentNumber = 0;
    }
    thePictureCounter.textContent = currentNumber;
}
 
function counterReverse() {
    let currentNumber = parseInt(thePictureCounter.textContent);
    currentNumber--;
    if (currentNumber < 0) {
        currentNumber = 2;
    }
    thePictureCounter.textContent = currentNumber;
}

// Autoforward and Back and stop 

function autoForward() {
    autoForwardInterval = setInterval(() => {
        showNextImage();
    }, 2000); //2 seconds interval
}

function stopTheMadness() {
    clearInterval(autoForwardInterval);
    clearInterval(autoBackInterval);
}

function autoBack() {
    autoBackInterval = setInterval(() => {
        showBackImage();
    },2000);
}


