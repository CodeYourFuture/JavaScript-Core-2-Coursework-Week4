


let divEl = document.querySelector('.container');
let headEl = document.querySelector('h1');
let divImgEl = document.querySelector('.image-container');
let counterEl = document.querySelector('.counter');
let currentIndex = 0;


let images = ['assets/cute-cat-a.png', 'assets/cute-cat-b.jpg', 'assets/cute-cat-c.jpg'];
let imgEls = images.map((image) => {
  let imgEl = document.createElement('img');
  imgEl.src = image;
  return imgEl;
});

function showImage(index) {
  divImgEl.innerHTML = '';
  divImgEl.appendChild(imgEls[index]);
  counterEl.innerHTML = `Image ${index + 1} of ${imgEls.length}`;
}

showImage(currentIndex);

let autoBackBtn = document.querySelector('#auto-backward');
autoBackBtn.addEventListener('click', () => {
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + imgEls.length - 1) % imgEls.length;
    showImage(currentIndex);
  }, 2000);
});

let backBtn = document.querySelector('#backward-btn');
backBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + imgEls.length) % imgEls.length;
  showImage(currentIndex);
});

let stopBtn = document.querySelector('#stop');
stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
});

let forwardBtn = document.querySelector('#forward-btn');
forwardBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % imgEls.length;
  showImage(currentIndex);
});

let autoForwardBtn = document.querySelector('#auto-forward');
let intervalId;
autoForwardBtn.addEventListener('click', () => {
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % imgEls.length;
    showImage(currentIndex);
  }, 2000);
});

divEl.appendChild(headEl);
divEl.appendChild(divImgEl);
divEl.appendChild(counterEl);
