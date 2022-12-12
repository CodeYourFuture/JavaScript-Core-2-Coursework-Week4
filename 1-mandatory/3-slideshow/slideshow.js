// Write your code here

let imageCarouselArr = ["https://images.unsplash.com/photo-1504113888839-1c8eb50233d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=829&q=80",
"https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGZvb2R8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1562059390-a761a084768e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGZvb2R8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
];


let backwardButton = document.getElementById("backward_btn");
let forwardButton = document.getElementById("forward_Btn");
let autoBackwardBtn = document.getElementById("autoback_btn");
let autoForwardbtn = document.getElementById("autoForward_btn");
let stopBtn = document.getElementById("stop_btn");
let autoForwardInterval;
let autoBackInterval;
let counter = 0;

forwardButton.addEventListener("click", () => {
    if (counter > 0) {
        counter--;
        slideshow.src = imageCarouselArr[counter];
        console.log(counter);
    } else {
        counter = 0;
        slideShow.src = imageCarouselArr[counter];
        console.log(counter);
    }
   });


   backwardButton.addEventListener("click", () => {
     let slideShow = document.getElementById("image_carousel");
     if (counter > 0) {
        counter--;
        slideShow.src = imageCarouselArr[counter];
        console.log(counter);
     } else {
       counter = imageCarouselArr.length -1;
       console.log(counter);
     }
   });


   autoBackwardBtn.addEventListener("click",() => {
    autoBackInterval = setInterval(() => {
        let slideShow = document.getElementById("image_carousel");
        if (counter > 0) {
          counter--;
          slideShow.src = imageCarouselArr.length - 1;
          console.log(counter);
        } else {
          counter = imageCarouselArr.length -1;
          slideShow.src = imageCarouselArr[counter];
          console.log(counter);
        }
    }, 3000);
});

autoForwardbtn.addEventListener("click", () => {
    autoForwardInterval = setInterval(() => {
        let slideShow = document.getElementById("image_carousel");
        if (counter < imageCarouselArr.length - 1) {
            counter++;
            slideShow.src = imageCarouselArr[counter];
            console.log(counter);
        } else {
          counter = 0;
          slideShow.src = imageCarouselArr[counter];
          console.log(counter);
        }
    }, 3000);
 });

 stopBtn.addEventListener("click", () => {
    clearInterval(autoBackInterval);
    clearInterval(autoBackInterval);

 });