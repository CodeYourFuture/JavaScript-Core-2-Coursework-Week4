// Write your code here
const divMainEl = document.getElementById("main-container");
const divInnerEl = document.createElement("div");
const imageEl = document.createElement("img");
const buttonPreviousEl = document.createElement("button");
const buttonNextEl = document.createElement("button");
const buttonStopEl = document.createElement("button");
const buttonAutoBackEl = document.createElement("button");
const buttonAutoForwardEl = document.createElement("button");

divInnerEl.className = `inner-container`;
buttonPreviousEl.classList.add("btn", "btn-success");
buttonNextEl.classList.add("btn", "btn-warning");
buttonStopEl.classList.add("btn", "btn-danger");
buttonAutoBackEl.classList.add("btn", "btn-info");
buttonAutoForwardEl.classList.add("btn", "btn-primary");
buttonPreviousEl.innerText = `Previous`;
buttonNextEl.innerText = `Next`;
buttonStopEl.innerText = `Stop`;
buttonAutoBackEl.innerText = `Auto Back`;
buttonAutoForwardEl.innerText = `Auto Forward`;

divInnerEl.appendChild(imageEl);
divMainEl.append(divInnerEl);
divInnerEl.appendChild(buttonPreviousEl);
divInnerEl.appendChild(buttonNextEl);
divInnerEl.appendChild(buttonStopEl);
divInnerEl.appendChild(buttonAutoBackEl);
divInnerEl.appendChild(buttonAutoForwardEl);

const imageArray = [
  "./images/birdOne.jpeg",
  "./images/birdTwo.jpeg",
  "./images/birdThree.jpeg",
  "./images/birdFour.jpeg",
];

let i = 0;
imageEl.src = imageArray[i];

const countBackward = () => {
  if (i <= 0) i = imageArray.length;
  i--;
  reArrangeImage();
};

buttonPreviousEl.addEventListener("click", countBackward);

const countForward = () => {
  if (i >= imageArray.length - 1) i = -1;
  i++;
  reArrangeImage();
};

buttonNextEl.addEventListener("click", countForward);

const reArrangeImage = () => {
  return imageEl.setAttribute("src", `${imageArray[i]}`);
};

let autoBackward;
buttonAutoBackEl.addEventListener("click", () => {
  autoBackward = setInterval(countBackward, 2000);
});

let autoForward;
buttonAutoForwardEl.addEventListener("click", () => {
  autoForward = setInterval(countForward, 2000);
});

buttonStopEl.addEventListener("click", () => {
  clearInterval(autoForward) || clearInterval(autoBackward);
});
