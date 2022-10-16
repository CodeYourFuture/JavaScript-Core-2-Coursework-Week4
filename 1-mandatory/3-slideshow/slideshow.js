// Write your code here
let imgAddress = [
  "https://images.unsplash.com/photo-1665875828826-366783aad23e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3310&q=80",
  "https://images.unsplash.com/photo-1665884304501-a65e6ff95b35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=970&q=80",
  "https://images.unsplash.com/photo-1665883268491-e0d12d52eb5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  "https://plus.unsplash.com/premium_photo-1663091792021-a4b3070c26fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80",
  "https://images.unsplash.com/photo-1584715404879-3d8ffc080672?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
];

let myElem = document.querySelector("body");
myElem.style.backgroundColor = "#FFE4B5";

let imgIndexNum = 0;
let img = document.getElementById("img");
img.src = imgAddress[imgIndexNum];
// let index = document.getElementById("index");
// index.innerText = imgIndexNum;
let forwardBtn = document.getElementById("forward");

//forward button
forwardBtn.addEventListener("click", function () {
  imgIndexNum++;
  if (imgIndexNum > imgAddress.length - 1) {
    imgIndexNum = 0;
  }
  img.src = imgAddress[imgIndexNum];
  index.innerHTML = imgIndexNum;
});
//back button
let backBtn = document.getElementById("back");
backBtn.addEventListener("click", function () {
  imgIndexNum--;
  if (imgIndexNum < 0) {
    imgIndexNum = [imgAddress.length - 1];
  }
  img.src = imgAddress[imgIndexNum];
  index.innerHTML = imgIndexNum;
});
//autoforward button
let autoForwardBtn = document.getElementById("auto-forward");
let stopBtn = document.getElementById("stop");
let autoEventList = autoForwardBtn.addEventListener("click", () => {
  let autoForwardBtn = setInterval(() => {
    imgIndexNum++;
    if (imgIndexNum === imgAddress.length) {
      imgIndexNum = 0;
    }
    img.src = imgAddress[imgIndexNum];
    index.innerText = imgIndexNum;
  }, 2000);
  stopBtn.addEventListener("click", function () {
    clearInterval(autoForwardBtn);
  });
});

let autoBackBtn = document.getElementById("auto-back");
autoBackBtn.addEventListener("click", function () {
  let setAutoBack = setInterval(() => {
    imgIndexNum--;
    if (imgIndexNum < 0) {
      imgIndexNum = [imgAddress.length - 1];
    }
    img.src = imgAddress[imgIndexNum];
    index.innerHTML = imgIndexNum;
  }, 2000);
  stopped.addEventListener("click", function () {
    clearInterval(setAutoBack);
  });
});
