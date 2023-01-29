// Write your code here
const backButton = document.createElement("button");
const forwardButton = document.createElement("button");
let img = document.createElement("img");
backButton.innerText = "Back";
forwardButton.textContent = "Forward";
forwardButton.id = "forward";
backButton.id = "back";
document.body.appendChild(backButton);
document.body.appendChild(img);
document.body.appendChild(forwardButton);

const images = ["cute-cat-a.png", "cute-cat-b.jpg", "cute-cat-c.jpg"];
let i = 0;
img.src = `./assets/${images[0]}`;
document.querySelector("#back").addEventListener("click", () => {
    i = (i + images.length - 1) % images.length;
    img.src = `./assets/${images[i]}`;
})
document.querySelector("#forward").addEventListener("click", () => {
    i = (i + 1) % images.length;
    img.src = `./assets/${images[i]}`;

})
