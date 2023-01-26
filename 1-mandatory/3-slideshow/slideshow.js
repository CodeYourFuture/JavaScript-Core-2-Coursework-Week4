// Write your code here
let imgArr = [
  {
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    alt: "salad dish",
  },
  {
    src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    alt: "cake image",
  },

  {
    src: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    alt: "sea food image",
  },

  {
    src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    alt: "pasta image",
  },
  {
    src: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    alt: "berger",
  },
];
let divEl = document.getElementById("slideshow");
let imgEl = document.createElement("img");
divEl.appendChild(imgEl);
imgEl.className = "slideImg";

let backBtn = document.getElementById("back");
let forwardBtn = document.getElementById("forward");
let stopBtn = document.getElementById("stop");
let autoBackBtn = document.getElementById("autoBack");
let autoForwardBtn = document.getElementById("autoForward");
let input = document.getElementById("input");
let delaySetBtn = document.getElementById("delaySet");
let delay = 1000;

forwardBtn.addEventListener("click", () => {
  goForward();
});

backBtn.addEventListener("click", () => {
  goBack();
});

autoForwardBtn.addEventListener("click", () => {
  autoForwardInt = setInterval(() => {
    goForward();
  }, delay);
});

autoBackBtn.addEventListener("click", () => {
  autoBackInt = setInterval(() => {
    goBack();
  }, delay);
});

stopBtn.addEventListener("click", () => {
  delay = 1000;
  clearInterval(autoForwardInt);
  clearInterval(autoBackInt);
});
delaySetBtn.addEventListener("click", () => {
  delay = input.value * 1000;
});

let count = 0;
imgEl.src = imgArr[count].src;
imgEl.alt = imgArr[count].alt;

let goBack = () => {
  count--;
  if (count < 0) {
    count = imgArr.length - 1;
  }
  imgEl.src = imgArr[count].src;
  imgEl.alt = imgArr[count].alt;
};
let goForward = () => {
  count++;
  if (count >= imgArr.length) {
    count = 0;
  }
  imgEl.src = imgArr[count].src;
  imgEl.alt = imgArr[count].alt;
};