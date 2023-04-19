// Write your code here

let images = [
  "https://images.unsplash.com/photo-1674919062539-c28df6cca151?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
  "https://images.unsplash.com/photo-1678698611311-535d7d644c1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
  "https://images.unsplash.com/photo-1679240339099-1759c6576e96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1314&q=80",
  "https://images.unsplash.com/photo-1657405826726-ac52271d3bb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1867&q=80",
];

let pic = document.querySelector("img");
let p = document.querySelector("p");
let num = 0;
photoImage = images[num];

// forward
let forwardBtn = document.getElementById("forw");
forwardBtn.addEventListener("click", forwardMove);

function forwardMove() {
    if (num === 3) {
    num = 0;
    } else {
    num++;
    }
    pic.src = images[num];
    p.textContent = num + 1;
}

//  back
let backBtn = document.getElementById("back");
backBtn.addEventListener("click", backMove);

function backMove() {
    if (num === 0) {
        num = 3;
    } else {
        num--;
    }
        pic.src = images[num];
        p.textContent = num + 1;
}

//  Auto forward

let autoSlidesShow;
let autoForward = document.getElementById("autoFor");
autoForward.addEventListener("click", AutoForwardMove);

function AutoForwardMove(){
autoSlidesShow = setInterval(() => {
  forwardMove();
}, 3000);
}

// Auto back

let autoBack = document.getElementById('autoBack');
autoBack.addEventListener('click', AutoBackMove)

function AutoBackMove(){
    autoSlidesShow = setInterval(() => {
      backMove();
    }, 3000);
}

let stops = document.getElementById('stop');
stops.addEventListener('click', stopAuto);

function stopAuto(){
    clearInterval(autoSlidesShow)
}