
const contentDiv = document.querySelector("#contentDiv");
let image = document.querySelector("#img")
let autoBackBtn = document.querySelector("#auto-back-btn")
let backBtn = document.querySelector("#back-btn");
let forwardBtn = document.querySelector("#forward-btn");
let autoForward = document.querySelector("#auto-forward")

let images = [
    "https://images.unsplash.com/photo-1643303899834-9e05e1723682?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=355&q=80",
    "https://images.unsplash.com/photo-1643390193668-8b143004153a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwMXxGem8zenVPSE42d3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1643354810303-2a0d764ecba4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1636914151795-908184c33e4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1598134115217-a2fd543030f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
]

let imagePos = 0;
image.src = images[imagePos];

function moveToPreviewsImage(){
    if(imagePos === 0){
        imagePos = images.length -1;
    }
    else{
        imagePos--;
    }
    image.src = images[imagePos]
   
}

function moveToNextImg() {
    if(imagePos === images.length -1){
        imagePos = 0;
    }
    else{
        imagePos++;
    }
    image.src = images[imagePos] 
}

forwardBtn.addEventListener("click", moveToNextImg);

backBtn.addEventListener("click",moveToPreviewsImage);

autoForward.addEventListener("click",)

