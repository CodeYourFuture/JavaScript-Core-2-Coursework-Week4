// Write your code here
let imgArr = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Socrate_du_Louvre.jpg/440px-Socrate_du_Louvre.jpg",
    alt: "Socrates image",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Plato_Silanion_Musei_Capitolini_MC1377.jpg/440px-Plato_Silanion_Musei_Capitolini_MC1377.jpg",
    alt: "Plato image",
  },

  {
    src: "https://upload.wikimedia.org/wikipedia/commons/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg",
    alt: "René Descartes image",
  },

  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Kant_gemaelde_3.jpg/440px-Kant_gemaelde_3.jpg",
    alt: "Immanuel Kant image",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Nietzsche187a.jpg/440px-Nietzsche187a.jpg",
    alt: "Friedrich Nietzsche",
  },
];
let divEl = document.getElementById("slideShow");
let imgEl = document.createElement("img");
divEl.appendChild(imgEl);

let backBtn = document.getElementById("back");
let forwardBtn = document.getElementById("forward");
let stopBtn = document.getElementById("stop");
let autoBackBtn = document.getElementById("autoBack");
let autoForwardBtn = document.getElementById("autoForward");

forwardBtn.addEventListener("click", () => {
  goForward();
});

backBtn.addEventListener("click", () => {
  goBack();
});

autoForwardBtn.addEventListener("click", () => {
  autoForwardInt = setInterval(() => {
    goForward();
  }, 1000);
});

autoBackBtn.addEventListener("click", () => {
  autoBackInt = setInterval(() => {
    goBack();
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(autoForwardInt);
  clearInterval(autoBackInt);
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
