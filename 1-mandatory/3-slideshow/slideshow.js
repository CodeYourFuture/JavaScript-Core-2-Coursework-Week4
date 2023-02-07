// Write your code here
const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];
const pictures = document.querySelector("#carousel-img");

pictures.src = images[0];
const forwardButton = document.querySelector("#forward-btn");
forwardButton.addEventListener("click", () => {
  images.push(images[0]);
  console.log(images);
  images.shift();
  console.log(images);
  pictures.src = images[0];
});

const backwardButton = document.querySelector("#backward-btn");
// backwardButton.addEventListener("click", ()=> {
backwardButton.addEventListener("click", () => {
  images.unshift(images.slice(-1)[0]);
  console.log(images);
  pictures.src = images.pop();
});
