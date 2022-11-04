// Write your cofde here
const autoForward = document.querySelector(".auto-forward");
const autoBack = document.querySelector(".auto-back");
const forward = document.querySelector(".forward")
const back = document.querySelector(".back");
const stop = document.querySelector(".stop");
const image = document.querySelector(".image");
let number = document.querySelector(".number");
let total =parseInt(number.innerHTML);
console.log(total);


forward.removeEventListener("click, moveForward");
back.addEventListener("click,moveBackwards");


function moveForward() {
    total++;
    number.innerHTML = total;
    image.setAttribute("src", `./images/cat${number.innerHTML}.jpg`);
    if (total ===3) total= -1;
}

function moveBackward() {
  total--;
  if (total <= 0) total = 3;
  number.innerHTML = total;
  image.setAttribute("src", `./images/cat${number.innerHTML}.jpg`);
}

autoForward.addEventListener("click", ()=> {
inter = setInterval(moveForward, 5000);  
});

autoBack.addEventListener("click", () => {
    inter =setInterval(moveForward, 5000);
});

stop.addEventListener("click", ()=> {
    inter = setInterval(inter)
});