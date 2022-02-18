let images = [
    {
        address:  "https://images.unsplash.com/photo-1644440533718-8fde759bca44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 387w",
        altText: "apples1",
    }, 
    {
        address:  "https://images.unsplash.com/photo-1644440533689-3033ab8ae060?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 387w",
        altText: "apples2",
    },
    {
        address:  "https://images.unsplash.com/photo-1581891203469-db5113e1e537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80 327w",
        altText: "apples3",
    },
    {
        address:  "https://images.unsplash.com/photo-1477830530828-c849c4b9bf2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 387w",
        altText: "apples4",
    },
    {
        address:  "https://images.unsplash.com/photo-1506545632994-973468d2bb18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 387w",
        altText: "apples5"
    },
]

let autoBackBtn = document.querySelector("#autoBackBtn");
let backBtn = document.querySelector("#backBtn");
let stopBtn = document.querySelector("#stopBtn");
let forwardBtn = document.querySelector("#forwardBtn");
let autoForwardBtn = document.querySelector("#autoForwardBtn");
let image = document.querySelector("#img");
let counter = document.querySelector("#counter");
let i = -1; 
counter.innerText = i;



let countUp = () => {                   // the function doesn't work yet
    i++;
    i = i % images.length;
    counter.innerText = i; 
    image.src = images[i].address;
    
};

countUp();                              // just to add the first image

let countDown = () => {
    i--;
    if (i === -1) {
        i = images.length - 1;
    }
    counter.innerText = i;
    image.src = images[i].address;
}; 

let intervalUp;
let intervalDown;
function changeImageFwd() {
  if (!intervalUp) {                    // if the process of intervalUp hasn't started yet, we start it
    intervalUp = setInterval(countUp, 2000);
  }
}
function changeImageBack() {
  if (!intervalDown) {
    intervalDown = setInterval(countDown, 2000);
  }
}
function stopAutoPlay() {
  clearInterval(intervalUp);
  clearInterval(intervalDown);
}

forwardBtn.addEventListener("click", countUp);
backBtn.addEventListener("click", countDown);
autoForwardBtn.addEventListener("click", changeImageFwd);
autoBackBtn.addEventListener("click", changeImageBack);
stopBtn.addEventListener("click", stopAutoPlay);