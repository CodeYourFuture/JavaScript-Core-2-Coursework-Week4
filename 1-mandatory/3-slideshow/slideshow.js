// Write your code here

let images = ["cute-cat-a.png", "cute-cat-b.jpg", "cute-cat-c.jpg"];

const image = document.querySelector("#carousel-img");
const btnGroup = document.querySelector("#btn-group");
const forwardBtn = document.querySelector("#forward-btn");
const autoForwardBtn = document.querySelector("#auto-forward");
const backwardBtn = document.querySelector("#backward-btn");
const autoBackBtn = document.querySelector("#auto-backward");
const stopBtn = document.querySelector("#stop");
const counterElem = document.querySelector("#counter");
let activeSlide = 0;
let counter = 2000;

let slide = (direction) => {
    if(direction === 'forward') {
        if(activeSlide === images.length -1) {
            activeSlide = 0;
        } else {
            activeSlide++;
        }
    }
    if(direction === 'back') {
        if(activeSlide === 0) {
            activeSlide = images.length -1;
        } else {
            activeSlide--;
        }
    };
    if(counterIntervalId){
        stopCounter();
        counter = 2000;
        startCounter();
    }
    image.src = `./assets/${images[activeSlide]}`;
}

let sliderIntervalId = null;
let counterIntervalId = null;
let interval = counter;


let startCounter = () => {
    counter  = 2000;
    counterElem.innerText = counter;
    counterIntervalId = setInterval(()=> {
        counter = counter - 100;
        counterElem.innerText = counter;
        }, 100)
}

let stopCounter = () => {
    clearInterval(counterIntervalId);
    counterElem.innerText = 'x';
}



let slideAuto = (direction) => {
    startCounter();
    autoForwardBtn.disabled = true;
    autoBackBtn.disabled = true;
    sliderIntervalId = setInterval(() => {
        slide(direction)
    }, interval);
};




forwardBtn.addEventListener("click", () => { slide('forward') });
autoForwardBtn.addEventListener("click", () => { slideAuto('forward') });
backwardBtn.addEventListener("click", () => { slide('back') });
autoBackBtn.addEventListener("click", () => { slideAuto('back') });
stopBtn.addEventListener("click", () => {
    autoForwardBtn.disabled = false;
    autoBackBtn.disabled = false;
    clearInterval(sliderIntervalId);
    stopCounter();
});
