let images = [{
        src: "https://static01.nyt.com/images/2021/10/26/science/20tb-horses/20tb-horses-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
        alt: "herd of horses",
    },
    {
        src: "https://static01.nyt.com/images/2021/03/21/fashion/19EQUUS-1/19EQUUS-1-articleLarge-v4.jpg?quality=75&auto=webp&disable=upscale",
        alt: "a few horses in barn",
    },
    {
        src: "https://i.natgeofe.com/n/7d63d958-64dc-4177-88d9-601bf3365afc/01thehorse.jpg?w=636&h=425",
        alt: "two horses",
    },
    {
        src: "https://media.istockphoto.com/photos/horses-in-a-line-looking-over-fence-side-view-picture-id168252523?k=20&m=168252523&s=612x612&w=0&h=u-GGc2PWitwe-VMxFiJATRh0MU_AUwnIr8yccF9HXeE=",
        alt: "different horses` heads"
    }
];
let autobackTag = document.querySelector("#autoback_btn");
let backTag = document.querySelector("#back_btn");
let stopTag = document.querySelector("#stop_btn");
let forwardTag = document.querySelector("#forward_btn");
let autoforwardTag = document.querySelector("#autoforward_btn");
let imageTag = document.querySelector(".slide_img");
let counter = document.querySelector(".slide_counter");

console.log(counter.innerHTML)



//======================================================================
let slideNumber = 0;
counter.innerHTML = slideNumber;
const forwardHandler = () => {
    //create an if statement to return the slides to zero index 
    if (slideNumber === images.length - 1) {
        slideNumber = 0;
        counter.innerHTML = slideNumber;
    } else {
        slideNumber += 1;
        counter.innerHTML = slideNumber;
    }

    imageTag.src = images[slideNumber].src;
    imageTag.alt = images[slideNumber].alt;

};
const backHandler = () => {
    if (slideNumber === 0) {
        slideNumber = images.length - 1;
    } else {
        slideNumber -= 1;
    }
    counter.innerHTML = slideNumber;
    imageTag.src = images[slideNumber].src;
    imageTag.alt = images[slideNumber].alt;
}

forwardTag.addEventListener("click", forwardHandler);
backTag.addEventListener("click", backHandler);

//create autoBack btn and put stopHandler to reset it if we autoforward has been activated before
let autoB;
autobackTag.addEventListener("click", () => {
    stopHandler();
    autoB = setInterval(backHandler, 3000);
})
//create autoForward btn and put stopHandler to reset it if we autoforward has been activated before
let autoF;
autoforwardTag.addEventListener("click", () => {
    stopHandler();
    autoF = setInterval(forwardHandler, 3000);
})
const stopHandler = () => {
    clearInterval(autoF);
    clearInterval(autoB);
}
stopTag.addEventListener("click", stopHandler)