// Write your code here
let images = [
  {
    source: "jae-park-7GX5aICb5i4-unsplash.jpg",
    alt: "Screaming cat",
  },
  {
    source: "modcatshop-pdALzg0yN-8-unsplash.jpg",
    alt: "cat sleeping in the bed under grey blanket",
  },
  {
    source: "jari-hytonen-YCPkW_r_6uA-unsplash.jpg",
    alt: "Basket with four small cute cats",
  },
  {
    source: "karina-vorozheeva-rW-I87aPY5Y-unsplash.jpg",
    alt: "cat with butterfly sitting on the nose",
  },
];

let image = document.querySelector("#slides");

image.src = images[0].source;
image.alt = images[0].alt;

let forward = document.querySelector("#forward");
let back = document.querySelector("#back");
let autoForward = document.querySelector("#auto-forward");
let autoBack = document.querySelector("#auto-back");
let stopButton = document.querySelector("#stop");
let forwardInterval;
let backInterval;

let number = 0;

function slidesShow() {
  if (number < images.length - 1) {
    number++;
  }
  image.src = images[number].source;
  image.alt = images[number].alt;
}

function previousSlide() {
  if (number > 0) {
    number--;
  }
  image.src = images[number].source;
  image.alt = images[number].alt;
}

forward.addEventListener("click", slidesShow);

back.addEventListener("click", previousSlide);

autoForward.addEventListener("click", () => {
  forwardInterval = setInterval(slidesShow, 2000);
  clearInterval(backInterval);
});

autoBack.addEventListener("click", () => {
  backInterval = setInterval(previousSlide, 2000);
  clearInterval(forwardInterval);
});

stopButton.addEventListener("click", () => {
  clearInterval(backInterval);
});

stopButton.addEventListener("click", () => {
  clearInterval(forwardInterval);
});
