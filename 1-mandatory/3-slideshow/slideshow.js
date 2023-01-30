// Write your code here
const backButton = document.createElement("button");
const forwardButton = document.createElement("button");
const img = document.createElement("img");
const label = document.createElement("label");
const input = document.createElement("input");
const autoForwardButton = document.createElement("button");
const autoBackButton = document.createElement("button");
const stopButton = document.createElement("button");

backButton.innerText = "Back";
forwardButton.innerText = "Forward";
label.innerText = "Enter Your Time(second):"
input.setAttribute("type", "number");
autoBackButton.innerText = "Auto Back";
autoForwardButton.innerText = "Auto Forward";
stopButton.innerText = "Stop";

document.body.appendChild(autoBackButton);
document.body.appendChild(backButton);
document.body.appendChild(img);
document.body.appendChild(forwardButton);
document.body.appendChild(autoForwardButton);
document.body.appendChild(label);
document.body.appendChild(input);
document.body.appendChild(stopButton);

const images = ["cute-cat-a.png", "cute-cat-b.jpg", "cute-cat-c.jpg"];
let i = 0;
img.src = `./assets/${images[0]}`;

backButton.addEventListener("click", () => {
    backShow();
})

forwardButton.addEventListener("click", () => {
    forwardShow();
})

autoBackButton.addEventListener("click", () => {
    const delayTime = input.value;
    const backInterval = setInterval(() => {
        backShow();
        stopButton.addEventListener("click", () => {
            clearInterval(backInterval);
        })
    }, delayTime * 1000)
})

autoForwardButton.addEventListener("click", () => {
    const delayTime = input.value;
    const forwardInterval = setInterval(() => {
        forwardShow();
        stopButton.addEventListener("click", () => {
            clearInterval(forwardInterval);
        })
    }, delayTime * 1000)
})

function backShow() {
    i = (i + images.length - 1) % images.length;
    img.src = `./assets/${images[i]}`;
}

function forwardShow() {
    i = (i + 1) % images.length;
    img.src = `./assets/${images[i]}`;
}