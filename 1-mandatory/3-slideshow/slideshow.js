// Write your code here
const images = [
  "images/devops_1.jpg",
  "images/devops_2.jpg",
  "images/devops_3.jpg",
  "images/devops_4.jpg",
  "images/devops_5.jpg",
  "images/devops_6.jpg",
  "images/devops_7.jpg",
  "images/devops_8.jpg",
  "images/devops_9.jpg",
  "images/devops_10.jpg",
  ];
  
let counter=0;

let divimageEl=document.createElement("div");
divimageEl.classList.toggle("image-container");
document.body.appendChild(divimageEl);

let imgEl=document.createElement("img");
divimageEl.appendChild(imgEl);


let divButtonEl=document.createElement("div");
divButtonEl.classList.toggle("button-container");
document.body.appendChild(divButtonEl);

let backwardbtn = document.createElement("button");
backwardbtn.classList.toggle("bkw-btn");
backwardbtn.innerText = "Backward";
divButtonEl.appendChild(backwardbtn);

let forwardbtn=document.createElement("button");
forwardbtn.classList.toggle("fwd-btn");
forwardbtn.innerText="Forward";
divButtonEl.appendChild(forwardbtn);

let autoForward=document.createElement("button");
autoForward.classList.toggle("afw-btn");
autoForward.innerText="autoFW";
divButtonEl.appendChild(autoForward);

forwardbtn.addEventListener("click",()=>{
   forward();
    
});
function forward(){
    imgEl.setAttribute("src", images[counter]);
    counter++;
    if (counter === images.length) {
      counter = 0;
    }
}
backwardbtn.addEventListener("click",()=>{
   backward();
});
function backward(){
     counter--;
     imgEl.setAttribute("src", images[counter]);
     if (counter === 0) {
       counter = images.length - 1;
     }
}
autoForward.addEventListener("click",()=>{
    intervalFWD();
})

function intervalFWD(){
   setInterval(() => {
        forward();
        // if(counter===images.length){
        //     clearInterval(interval);
        // }
        
    }, 1000);
    
    
}
