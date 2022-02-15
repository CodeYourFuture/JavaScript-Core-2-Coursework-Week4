// An array of images with links
let images = [
  {
    source: "img/black.jpg",
    alt: "A black cat on the wood with green background",
  },
  { source: "img/grey.jpg", alt: "A grey cat on the couch" },
  { source: "img/tom.jpg", alt: "A cat under the cloth" },
  { source: "img/yellow.jpg", alt: "A ginger cat with eyes shut" },
];

let image = document.querySelector("#slide"); // Selects the main image element to be displayed

// Loads the first image when the page is loaded
image.src = images[0].source;
image.alt = images[0].alt;

let index = 0; // Counter for the image

// Selects the HTML buttons
let forward = document.querySelector("#forward");
let back = document.querySelector("#back");
let autoForward = document.querySelector("#auto-forward");
let autoBack = document.querySelector("#auto-back");

// Variables for the interval functions
let forwardInterval;
let backInterval;

// Displays the next image
function next() {
  if (index < images.length - 1) {
    index++;
  }
  image.src = images[index].source;
  image.alt = images[index].alt;
}

// Displays the previous image
function prev() {
  if (index > 0) {
    index--;
  }
  image.src = images[index].source;
  image.alt = images[index].alt;
}

forward.addEventListener("click", next); // Executes the function to display the next image when the button is clicked

back.addEventListener("click", prev); // Executes the function to display the previous image when the button is clicked

// The next two function run a slideshow in both directions
autoForward.addEventListener("click", () => {
  forwardInterval = setInterval(next, 2000);
  clearInterval(backInterval);
});

autoBack.addEventListener("click", () => {
  backInterval = setInterval(prev, 2000);
  clearInterval(forwardInterval);
});
