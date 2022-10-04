let images = [
  "https://images.unsplash.com/photo-1615412704911-55d589229864?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=982&q=80",
  "https://images.unsplash.com/photo-1610147323479-a7fb11ffd5dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
];

let imgDiv = document.querySelector(".card__img");
let forwardBtn = document.querySelector(".btn-forward");
let backwardBtn = document.querySelector(".btn-backward");
let index = 0;

function getForwardImage() {
  index++;
  if (index > images.length - 1) {
    index = 0;
  }
  imgDiv.style.backgroundImage = `url(${images[index]})`;
}

function getBackwardImage() {
  index--;
  if (index < 1) {
    index = images.length - 1;
  }
  imgDiv.style.backgroundImage = `url(${images[index]})`;
}

forwardBtn.addEventListener("click", getForwardImage);
backwardBtn.addEventListener("click", getBackwardImage);
