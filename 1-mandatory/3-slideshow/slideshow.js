let images = [{
        src: "https://vistapointe.net/images/carach-angren-3.jpg",
        alt: "Carach Angren",
    },
    {
        src: "https://cdn.mos.cms.futurecdn.net/wnBEmNPkCDZuE6hfGZqLFo.jpg",
        alt: "Behemoth",
    },
    {
        src: "https://i.ytimg.com/vi/Lpbb-3aMGUI/maxresdefault.jpg",
        alt: "Thy Light",
    },
    {
        src: "https://cdn.wallpapersafari.com/67/48/1vom2x.jpg",
        alt: "Candlemass"
    }
];
let autobackTag = document.querySelector(".autoback");
let backTag = document.querySelector(".back");
let stopTag = document.querySelector(".stop");
let forwardTag = document.querySelector(".forward");
let autoforwardTag = document.querySelector(".autoforward");
let imageTag = document.querySelector(".current_slide");
let counter = document.querySelector(".slide_counter");
//======================================================================
let slideNumber = 0;
counter.innerHTML = slideNumber + 1;
const forwardHandler = () => {
    //creat if statement to return to zero index of slides
    if (slideNumber === images.length - 1) {
        slideNumber = 0;
    } else {
        slideNumber += 1;
    }
    counter.innerHTML = slideNumber + 1;
    imageTag.src = images[slideNumber].src;
    imageTag.alt = images[slideNumber].alt;
};
const backHandler = () => {
    if (slideNumber === 0) {
        slideNumber = images.length - 1;
    } else {
        slideNumber -= 1;
    }
    counter.innerHTML = slideNumber + 1;
    imageTag.src = images[slideNumber].src;
    imageTag.alt = images[slideNumber].alt;
}
forwardTag.addEventListener("click", forwardHandler);
backTag.addEventListener("click", backHandler);
let autoB;
autobackTag.addEventListener("click", () => {
    stopHandler();
    autoB = setInterval(backHandler, 3000);
})
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