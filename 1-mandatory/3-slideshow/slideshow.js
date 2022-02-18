// Write your code here
let images = [
  {
    src: "https://images.unsplash.com/photo-1645032227534-6a04fe50d4ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    alt: "A red hat girl sitting ",
  },
  {
    src: "https://images.unsplash.com/photo-1640622658353-c6cecbe91488?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    alt: "A woman at work",
  },
  {
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    alt: "Chairs photo",
  },
  {
    src: "https://images.unsplash.com/photo-1644451922287-f33c655abb77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    alt: "A beautiful scene",
  },
];

let carouselImg = document.querySelector("#carousel-img");

let i = 0; //current image

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
backMove = setInterval(back, 1000);
});

let fwdMove; 

let autoFwdButton = document.querySelector("#auto-forward-btn");
autoFwdButton.addEventListener("click", function () {
fwdMove = setInterval(forward, 1000);
});

let stopButton = document.querySelector("#stop-btn");
stopButton.addEventListener("click", () => {
  clearInterval(backMove);
  clearInterval(fwdMove);
});
