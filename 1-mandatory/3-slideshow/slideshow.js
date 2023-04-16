// Write your code here
const imageElement = document.getElementById("carousel-img");
const autoBack = document.getElementById("auto-backward");
const backButton = document.getElementById("backward-btn");
const stopButton = document.getElementById("stop");
const forwardButton = document.getElementById("forward-btn");
const autoForward = document.getElementById("auto-forward");

const arrayOfImages = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

forwardButton.addEventListener("click", forwardBtn);

function forwardBtn() {
  let sourceOfImage = imageElement.getAttribute("src");
  let indexOfImage = arrayOfImages.indexOf(sourceOfImage);
  let removeImage = arrayOfImages.splice(indexOfImage, 1);
  arrayOfImages.push(removeImage[0]);
  imageElement.setAttribute("src", `${arrayOfImages[indexOfImage]}`);
}

backButton.addEventListener("click", backBtn);

function backBtn() {
  imageElement.setAttribute(
    "src",
    `${arrayOfImages[arrayOfImages.length - 1]}`
  );

  let removeImage = arrayOfImages.splice(arrayOfImages.length - 1, 1);
  arrayOfImages.unshift(removeImage[0]);
}

let autoForwardBtn;
let autoBackBtn;
autoForward.addEventListener("click", () => {
  autoBack.disabled = true;
  autoForward.disabled = true;

  autoForwardBtn = setInterval(forwardBtn, 2000);
});
autoBack.addEventListener("click", () => {
  autoForward.disabled = true;
  autoBack.disabled = true;

  autoBackBtn = setInterval(backBtn, 2000);
});

stopButton.addEventListener("click", () => {
  autoForward.disabled = false;
  autoBack.disabled = false;

  clearInterval(autoForwardBtn);
  clearInterval(autoBackBtn);
});
