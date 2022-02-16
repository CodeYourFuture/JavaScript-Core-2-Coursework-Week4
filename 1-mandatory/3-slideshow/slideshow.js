let images = [
  {
    address:
      "https://images.unsplash.com/photo-1643978887361-8a1d580c89f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    altText: "roasted chickpeas, pumpkin and cheese",
  },
  {
    address:
      "https://images.unsplash.com/photo-1644250817613-ce9bb6be403e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    altText: "cookie",
  },
  {
    address:
      "https://images.unsplash.com/photo-1636143938273-5757142a76e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    altText: "yogurt with strawberries",
  },
  {
    address:
      "https://images.unsplash.com/photo-1643944507581-f469976d7f73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    altText: "brioche and cup of tea",
  },
  {
    address:
      "https://images.unsplash.com/photo-1639667910301-34fcbc1ac0d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDkzfHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    altText: "person holding toast",
  },
  {
    address:
      "https://images.unsplash.com/photo-1642858611528-b6276b2ab1c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDg3fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    altText: "three croissants on top of each other",
  },
];

let autoBackBtn = document.getElementById("autoBackBtn");
let backBtn = document.getElementById("backBtn");
let stopBtn = document.getElementById("stopBtn");
let forwardBtn = document.getElementById("forwardBtn");
let autoForwardBtn = document.getElementById("autoForwardBtn");
let image = document.querySelector("img");
let counter = document.getElementById("counter");
let i = 0;
counter.innerText = i;

const countUp = () => {
  counter.innerText = i;
  image.src = images[i].address;
  i++;
  i = i % images.length;
};

const countBack = () => {
  if (i === 0) {
    i++;
  } else {
    i--;
    i = i % images.length;
  }
  image.src = images[i].address;
  counter.innerText = i;
};
let intervalUp;
let intervalBack;
function changeImageFwd() {
  if (!intervalUp) {
    intervalUp = setInterval(countUp, 2000);
  }
}
function changeImageBack() {
  if (!intervalBack) {
    intervalBack = setInterval(countBack, 2000);
  }
}
function stopAutoPlay() {
  clearInterval(intervalUp);
  clearInterval(intervalBack);
}
forwardBtn.addEventListener("click", countUp);
backBtn.addEventListener("click", countBack);
autoForwardBtn.addEventListener("click", changeImageFwd);
autoBackBtn.addEventListener("click", changeImageBack);
stopBtn.addEventListener("click", stopAutoPlay);
