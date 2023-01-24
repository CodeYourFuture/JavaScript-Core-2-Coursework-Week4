// Write your code here
const images =[
    "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
  "./assets/cute-cat-d.jpg"
];
const image = document.querySelector('#carousel-img');
const forwardBtn = document.querySelector('#forward-btn');
const backwardBtn = document.querySelector('#backward-btn');
const autoForwardBtn = document.querySelector('#auto-forward');
const autoBackwardBtn = document.querySelector('#auto-backward');
const stopBtn = document.querySelector('#stop');

let imageIndex = 0;
let interval;
console.log(image);

image.src = images[imageIndex];

const forwardImg = () => {
    imageIndex = (imageIndex + 1) % images.length;
    image.src = images[imageIndex];
};

const backwardImg = () => {
    imageIndex = (imageIndex - 1 + images.length) % images.length;
    image.src = images[imageIndex];
};
const disabledBtn = () => {
    autoForwardBtn.disabled = true;
    autoBackwardBtn.disabled = true;
    forwardBtn.disabled = true;
    backwardBtn.disabled = true;
};

const stop = () => {
    clearInterval(interval);
    autoForwardBtn.disabled = false;
    autoBackwardBtn.disabled = false;
    forwardBtn.disabled = false;
    backwardBtn.disabled = false;
};
const autoForwardImg = () => {
    interval = setInterval(forwardImg, 500);
    disabledBtn();
};
const autoBackwardImg =() => {
    interval = setInterval(backwardImg, 500);
    disabledBtn();
};
forwardBtn.addEventListener('click', forwardImg);
backwardBtn.addEventListener('click', backwardImg);
autoForwardBtn.addEventListener('click', autoForwardImg);
autoBackwardBtn.addEventListener('click', autoBackwardImg);
stopBtn.addEventListener('click', stop);
