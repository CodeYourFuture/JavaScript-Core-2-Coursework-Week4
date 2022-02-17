// Write your code here
const images = ["url('./assets/img1.jpg')", "url('./assets/img2.jpg')", "url('./assets/img3.jpg')", "url('./assets/img4.jpg')", "url('./assets/img5.jpg')"]

const body = document.querySelector('body');
const mainDiv = document.querySelector('.main-div');
const autoBackBtn = document.getElementById("auto-back-button");
const backBtn = document.getElementById("back-button");
const stopBtn = document.getElementById("stop-button");
const autoForwardBtn = document.getElementById("auto-forward-button");
const forwardBtn = document.getElementById("forward-button")

let imageSerialNumber = 0;
let intervalId;


mainDiv.style.backgroundImage = images[imageSerialNumber]

function moveleft() {
    imageSerialNumber++;
    mainDiv.style.backgroundImage = images[imageSerialNumber];

    if (imageSerialNumber === 5) {
        imageSerialNumber = 0;
        mainDiv.style.backgroundImage = images[imageSerialNumber];

    }

}

function moveRight() {
    imageSerialNumber--;
    mainDiv.style.backgroundImage = images[imageSerialNumber];

    if (imageSerialNumber < 0) {
        imageSerialNumber = 5;
        mainDiv.style.backgroundImage = images[imageSerialNumber];

    }

}

forwardBtn.addEventListener('click', () => {
    moveleft() 
});

backBtn.addEventListener('click', () => {
    moveRight() 
});

autoForwardBtn.addEventListener('click', () => {
    intervalId = setInterval(() => {
        moveleft()   
    }, 3000);
});


autoBackBtn.addEventListener('click', () => {
    console.log('hi')
    intervalId = setInterval(() => {
        moveRight()   
    }, 3000);
});

stopBtn.addEventListener('click', () => {
    clearInterval(intervalId)
});





