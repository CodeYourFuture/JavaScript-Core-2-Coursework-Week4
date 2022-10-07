// Write your code here
/* Write your code here*/

let images = [ 
    {
    source: "1-mandatory\3-slideshow\windows-3f04FMm_Jqk-unsplash.jpg",
        alt: "fantastic tools to communicate",
},

{
source: "1-mandatory\3-slideshow\windows-dD4QVRywr1w-unsplash.jpg",
    alt: "the best vision",
},

{
source: "1-mandatory\3-slideshow\windows-FV6Pma5U_98-unsplash.jpg",
    alt: " best service",
},

{
source: "1-mandatory\3-slideshow\windows-K47_kmiJJFs-unsplash.jpg",
    alt: "best me ",
},

];

let image=document.querySelector("#slides");

image.src=images[0].source;
image.alt=images[0].alt;

let forward=document.querySelector("#forward");
let back=document.querySelector("#back");
let autoForward=document.querySelector("#auto-forward");
let autoBack=document.querySelector("#auto-back");
let stopButton=document.querySelector("#stop");
let forwardInterval;
let backInterval;

let number=0;

function slidesShow() {
    if (number < images.length - 1) {
        number++;
    }

    image.src=images[number].source;
    image.alt=images[number].alt;
}

function previousSlide() {
    if (number > 0) {
        number--;
    }

    image.src=images[number].source;
    image.alt=images[number].alt;
}

forward.addEventListener("click", slidesShow);

back.addEventListener("click", previousSlide);

autoForward.addEventListener("click", ()=> {
        forwardInterval=setInterval(slidesShow, 5000);
        clearInterval(backInterval);
    });

autoBack.addEventListener("click", ()=> {
        backInterval=setInterval(previousSlide, 5000);
        clearInterval(forwardInterval);
    });

stopButton.addEventListener("click", ()=> {
        clearInterval(backInterval);
    });

stopButton.addEventListener("click", ()=> {
        clearInterval(forwardInterval);
    });

Footer