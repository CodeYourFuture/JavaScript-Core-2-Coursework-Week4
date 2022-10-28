let images = [
  {
    src: "./images/Amsterdam.png",
  },
  {
    src: "./images/Moscow.png",
  },
  {
    src: "./images/Rome.png",
  },
  {
    src: "./images/paris.png",
  },
  {
    src: "./images/stockholm.png",
  },
  {
    src: "./images/Madrid.png",
  },
  {
    src: "./images/Berlin.png",
  },
];

let carouselImg = document.querySelector("#carousel-img");

let i = 0; 

function back() {
  if (i <= 0) {
    i = images.length;
  }
  i--;
  carouselImg.setAttribute("src", images[i].src);
}

function forward() {
  if (i >= images.length - 1) {
    i = -1;
  }
  i++;
  carouselImg.setAttribute("src", images[i].src);
}

let backButton = document.querySelector("#back-btn");
backButton.addEventListener("click", back);

let fwdButton = document.querySelector("#forward-btn");
fwdButton.addEventListener("click", forward);

let backMove;
let autoBackButton = document.querySelector("#auto-back-btn");
autoBackButton.addEventListener("click", function () {
backMove = setInterval(back, 2500);
});

let fwdMove; 
let autoFwdButton = document.querySelector("#auto-forward-btn");
autoFwdButton.addEventListener("click", function () {
fwdMove = setInterval(forward, 2500);
});

let stopButton = document.querySelector("#stop-btn");
stopButton.addEventListener("click", () => {
  clearInterval(backMove);
  clearInterval(fwdMove);
});