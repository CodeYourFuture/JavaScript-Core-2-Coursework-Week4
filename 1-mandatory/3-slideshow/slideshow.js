// Write your code here
const images = [
  "https://images.unsplash.com/photo-1552450970-88b9d409fe18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1620383074552-6938c412faf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1501510691679-728450bdcb40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
  "https://images.unsplash.com/photo-1602731465531-14015e83a6de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80https://images.unsplash.com/photo-1618143309908-3ab8b930c55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
];

const pictures = document.createElement("img");
pictures.setAttribute("id", "carousel-img");
pictures.setAttribute("src", images[0]);

document.querySelector("#slide-show").appendChild(pictures);

let forwardInterval;
let backInterval;

function goBack() {
  images.unshift(images.slice(-1)[0]);
  pictures.setAttribute("src", images.pop());
}

function goForward() {
  images.push(images[0]);
  images.shift();
  pictures.setAttribute("src", images[0]);
}

function disabledButton() {
  autoBackButton.disabled = true;
  autoForwardButton.disabled = true;
}

function enabledButton() {
  autoForwardButton.disabled = false;
  autoBackButton.disabled = false;
  forwardButton.disabled = false;
  backButton.disabled = false;
}

const autoBackButton = document.createElement("button");
autoBackButton.setAttribute("id", "auto-backward");
autoBackButton.innerText = "AUTO BACK";
autoBackButton.style.fontSize = "3em";

document.querySelector("#move-buttons").appendChild(autoBackButton);

autoBackButton.addEventListener("click", () => {
  disabledButton();

  backInterval = setInterval(() => {
    goBack();
  }, 2000);
});

const backButton = document.createElement("button");
backButton.setAttribute("id", "backward-btn");
backButton.innerText = "BACK";
backButton.style.fontSize = "3em";

document.querySelector("#move-buttons").appendChild(backButton);

backButton.addEventListener("click", () => {
  goBack();
});

const stopButton = document.createElement("button");
stopButton.setAttribute("id", "stop");
stopButton.innerText = "STOP";
stopButton.style.fontSize = "3em";

document.querySelector("#move-buttons").appendChild(stopButton);

stopButton.addEventListener("click", () => {
  clearInterval(forwardInterval);
  clearInterval(backInterval);
  enabledButton();
});

const forwardButton = document.createElement("button");
forwardButton.setAttribute("id", "forward-btn");
forwardButton.innerText = "NEXT";
forwardButton.style.fontSize = "3em";

document.querySelector("#move-buttons").appendChild(forwardButton);

forwardButton.addEventListener("click", () => {
  goForward();
});

const autoForwardButton = document.createElement("button");
autoForwardButton.setAttribute("id", "auto-forward");
autoForwardButton.innerText = "AUTO FORWARD";
autoForwardButton.style.fontSize = "3em";

document.querySelector("#move-buttons").appendChild(autoForwardButton);

autoForwardButton.addEventListener("click", () => {
  autoForwardButton.disabled = true;
  autoBackButton.disabled = true;

  forwardInterval = setInterval(() => {
    goForward();
  }, 2000);
});
