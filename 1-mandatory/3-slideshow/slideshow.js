// Write your code here
let imgAddress = [
  "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
  "https://images.unsplash.com/photo-1508610048659-a06b669e3321?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
  "https://images.unsplash.com/photo-1518709779341-56cf4535e94b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1564640227760-db286729bf83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
  "https://images.unsplash.com/photo-1576486877313-44d0dd26f3d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJvc2VzJTIwYmxhY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1576080566436-728900dea62b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHJvc2VzJTIwd2hpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
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

// Autobackbutton
//  let autoBackBtn = document.getElementById("auto-back");
//  autoBackBtn.addEventListener ("click",()=> {
// let autoBackBtn = setInterval(()=> {
//   imgIndexNum --
//    if(imgIndexNum < imgAddress.length){
//     imgIndexNum =0

//   }
//   img.src = imgAddress[imgIndexNum];
//   index.innerHTML = imgIndexNum;
//  }, 2000)
//  })
