// Write your code here
const images = [
  "https://images.unsplash.com/photo-1552450970-88b9d409fe18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1620383074552-6938c412faf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1501510691679-728450bdcb40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
  //   "pig",
  //   "dog",
  //   "cat",
];

// images.push(images[0]);
// console.log(images);
// images.shift();
// console.log(images);
// images.push(images[0]);
// console.log(images);
// images.shift();
// console.log(images);

const pictures = document.createElement("img");
pictures.setAttribute("id", "carousel-img");
pictures.setAttribute("src", images[0]);

document.querySelector("#slide-show").appendChild(pictures);

const autoBackButton = document.createElement("button");
autoBackButton.setAttribute("id", "auto-backward");
autoBackButton.innerText = "AUTO BACK";
autoBackButton.style.fontSize = "3em";

document.querySelector("#move-buttons").appendChild(autoBackButton);

autoBackButton.addEventListener("click", () => {
  autoBackButton.disabled = true;
  autoForwardButton.disabled = true;

  setInterval(() => {
    images.unshift(images.slice(-1)[0]);
    pictures.setAttribute("src", images.pop());
  }, 2000);
});

const backButton = document.createElement("button");
backButton.setAttribute("id", "backward-btn");
backButton.innerText = "BACK";
backButton.style.fontSize = "3em";

document.querySelector("#move-buttons").appendChild(backButton);

backButton.addEventListener("click", () => {
  images.unshift(images.slice(-1)[0]);
  pictures.setAttribute("src", images.pop());
});

const forwardButton = document.createElement("button");
forwardButton.setAttribute("id", "forward-btn");
forwardButton.innerText = "NEXT";
forwardButton.style.fontSize = "3em";

document.querySelector("#move-buttons").appendChild(forwardButton);

forwardButton.addEventListener("click", () => {
  images.push(images[0]);

  images.shift();

  pictures.setAttribute("src", images[0]);
});

const autoForwardButton = document.createElement("button");
autoForwardButton.setAttribute("id", "auto-forward");
autoForwardButton.innerText = "AUTO FORWARD";
autoForwardButton.style.fontSize = "3em";

document.querySelector("#move-buttons").appendChild(autoForwardButton);

autoForwardButton.addEventListener("click", () => {
  autoForwardButton.disabled = true;
  autoBackButton.disabled = true;
  rs5;
  setInterval(() => {
    images.push(images[0]);
    images.shift();
    pictures.setAttribute("src", images[0]);
  }, 2000);
});

const stopButton = document.createElement("button");
stopButton.setAttribute("id", "stop");
stopButton.innerText = "STOP";
stopButton.style.fontSize = "3em";

document.querySelector("#move-buttons").appendChild(stopButton);

stopButton.addEventListener("click", () => {});
