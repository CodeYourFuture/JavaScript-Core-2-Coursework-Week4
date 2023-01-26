// Write your code here
const pictureSources = [
  "./assets/cute-cat-a.jpg",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

const pictures = document.createElement("img");
pictures.setAttribute("id", "carousel-img");
pictures.setAttribute("src", pictureSources[0]);

document.querySelector("#slide-show").appendChild(pictures);

const backwardButton = document.createElement("button");
backwardButton.setAttribute("id", "backward-btn");
backwardButton.innerText = "Back";
backwardButton.style.fontSize = "4em";
document.querySelector("#move-buttons").appendChild(backwardButton);

backwardButton.addEventListener("click", () => {
  pictureSources.unshift(pictureSources.slice(-1)[0]);
  pictures.setAttribute("src", pictureSources.pop());
});

const forwardButton = document.createElement("button");
forwardButton.setAttribute("id", "forward-btn");
forwardButton.innerText = "Next";
forwardButton.style.fontSize = "4em";

document.querySelector("#move-buttons").appendChild(forwardButton);

forwardButton.addEventListener("click", () => {
  pictureSources.push(pictureSources[0]);
  pictureSources.shift();
  pictures.setAttribute("src", pictureSources[0]);
});
