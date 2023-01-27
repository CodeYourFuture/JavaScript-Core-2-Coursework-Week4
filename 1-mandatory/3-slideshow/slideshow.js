// Write your code here
const images = [
    './assets/cute-cat-a.png',
    './assets/cute-cat-b.jpg',
    './assets/cute-cat-c.jpg',
    './assets/american-public-power-association-XGAZzyLzn18-unsplash.jpg',
    './assets/chang-duong-ZshVGzJ6a_s-unsplash.jpg',
    './assets/html.jpg',
    './assets/web 3.jpg',
]

const imageEl = document.querySelector('#sliderMain');
const backEl = document.querySelector('#backButton');
const forwardEl = document.querySelector('#fwdButton');
const autoBackEl = document.querySelector('#autoBack');
const autoFwdEl = document.querySelector('#autoFwd');
const stopEl = document.querySelector('#stop');


let displayImage = 0;
imageEl.src = images[displayImage];
let speedInterval;

function moveForward () {
    displayImage = (displayImage + 1) % images.length;
    imageEl.src = images[displayImage];
}

function moveBack () {
    displayImage = (displayImage -1 + images.length) % images.length;
    imageEl.src = images [displayImage];
}

function disableBtn () {
    backEl.disabled = true;
    forwardEl.disabled = true;
    autoFwdEl.disabled = true;
    autoBackEl.disabled = true;
}

function stop () {
    clearInterval(carousel);
    backEl.disabled = false;
    forwardEl.disabled = false;
    autoFwdEl.disabled = false;
    autoBackEl.disabled = false;
}

function fastForward (){
    carousel = setInterval(moveForward, 3000);
    disableBtn();
}

function autoBack () {
    carousel = setInterval(moveBack, 3000);
    disableBtn();
}
forwardEl.addEventListener('click', moveForward);
backEl.addEventListener('click', moveBack);
autoBackEl.addEventListener('click', autoBack );
autoFwdEl.addEventListener('click', fastForward );
stopEl.addEventListener('click', stop);
