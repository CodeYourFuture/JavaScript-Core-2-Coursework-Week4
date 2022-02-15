let images = [
  {
    source: "img/black.jpg",
    alt: "A black cat on the wood with green background",
  },
  { source: "img/grey.jpg", alt: "A grey cat on the couch" },
  { source: "img/tom.jpg", alt: "A cat under the cloth" },
  { source: "img/yellow.jpg", alt: "A ginger cat with eyes shut" },
];

let image = document.querySelector("#slide");

image.src = images[0].source;
image.alt = images[0].alt;

let number = 0;

let forward = document.querySelector("#forward");
let back = document.querySelector("#back");
let autoForward = document.querySelector("#auto-forward");
let autoBack = document.querySelector("#auto-back");
let forwardInterval;
let backInterval;

function next() {
  if (number < images.length - 1) {
    number++;
  }
  image.src = images[number].source;
  image.alt = images[number].alt;
}

function prev() {
  if (number > 0) {
    number--;
  }
  image.src = images[number].source;
  image.alt = images[number].alt;
}

forward.addEventListener("click", next);

back.addEventListener("click", prev);

autoForward.addEventListener("click", () => {
  forwardInterval = setInterval(next, 2000);
  clearInterval(backInterval);
});

autoBack.addEventListener("click", () => {
  backInterval = setInterval(prev, 2000);
  clearInterval(forwardInterval);
});
