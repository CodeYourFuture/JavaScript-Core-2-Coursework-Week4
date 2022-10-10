
let images = [
  "https://images.unsplash.com/photo-1664833041815-26cfab4ee89d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1585468274952-66591eb14165?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
  "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=825&q=80",
  "https://images.unsplash.com/photo-1616422285623-13ff0162193c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=431&q=80",
  "https://images.unsplash.com/photo-1489686995744-f47e995ffe61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
];

let  imageContainer= document.querySelector(".cardImg");
let forwardBtn = document.querySelector(".btn-next");
let backwardBtn = document.querySelector(".btn-previous");
let index = 0;

function getForwardImage() {
  index++;
  if (index > images.length-1) {
    index = 0;
  }
 imageContainer.style.backgroundImage = `url(${images[index]})`;
}

function getBackwardImage() {
  index--;
  if (index < 1) {
    index = images.length - 1;
  }
 imageContainer.style.backgroundImage = `url(${images[index]})`;
}

forwardBtn.addEventListener("click", getForwardImage);
backwardBtn.addEventListener("click", getBackwardImage);