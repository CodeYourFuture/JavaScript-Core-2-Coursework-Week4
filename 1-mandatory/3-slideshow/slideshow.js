// IMAGE DATA

let 
images = [
    {
            src: "images/Rampart.jpg", 
            alt: "Rampart's Landscape"
        }, 
        {
            src: "images/Teldrassil.jpg", 
            alt: "Teldrassil's Landscape"
        }, 
        {
            src: "images/Chult.jpg", 
            alt: "Chult's Landsape"
        },
        {
            src: "images/Fable.jpg", 
            alt: "Fable's Landscape"
        },
        {
            src: "images/Skyrim.jpg", 
            alt: "Skyrim's Landscape"
        }
    ],
    count = 0;

    
    // CREATE SIMPLE SITE FRAME
    
    // CREATE NODES
    
    let 
    mainDiv = document.createElement("div"),
    heading = document.createElement("h1"),
    currentImg = document.createElement("img"),
    counter = document.createElement("p"),
    buttons = document.createElement("nav"),
    
    autoBackBtn = document.createElement("btn"),
    backBtn = document.createElement("btn"),
    stopBtn = document.createElement("btn"),
    forwardBtn = document.createElement("btn"),
    autoForwardBtn = document.createElement("btn");
    
    const
    GREY = "#3e4444",
    LIGHT_GREEN = "#82b74b",
    DARK_GREEN = "#405d27",
    BROWN = "#c1946a";
    
    
    // APPEND NODES
    
    document.body.append(mainDiv);
    
    mainDiv.append(heading, currentImg, counter, buttons);
    
    buttons.append(autoBackBtn, backBtn, stopBtn, forwardBtn, autoForwardBtn);
    
    
    // RESET PRESET MARGINS
    let allInBody = document.querySelectorAll("body, body *");
    for (let node of allInBody) {
        node.style.margin = "0px"; 
    }

    
    // SET ATTRIBUTES AND STYLES

mainDiv.style.textAlign = "center";
mainDiv.style.overflow = "hidden";

heading.innerText = "Landscape Carousel";
heading.style.color = "white";
heading.style.textAlign = "center";
heading.style.padding = "0.30rem 0";

currentImg.style.height = "75vh";

counter.style.padding = "0.25rem 0.5rem";
counter.style.fontWeight = "bold";
counter.style.color = DARK_GREEN;

buttons.style.color = "white";
buttons.style.display = "flex";
buttons.style.justifyContent = "space-around";
buttons.style.padding = ".5rem 0";

autoBackBtn.innerText = "Auto Back";
backBtn.innerText = "Back";
stopBtn.innerText = "Stop";
forwardBtn.innerText = "Forward";
autoForwardBtn.innerText = "Auto Forward";

// COLOURS FOR VISUALISATION

document.body.style.backgroundColor = GREY;
mainDiv.style.backgroundColor = LIGHT_GREEN;
heading.style.backgroundColor = DARK_GREEN;
counter.style.backgroundColor = BROWN;
buttons.style.backgroundColor = DARK_GREEN;

// in case your are wondering why, just practicing DOM API usage
let allButtons = document.querySelectorAll("nav *");
for (let button of allButtons) {
    button.style.padding = "0.25rem .5rem";
    button.style.borderRadius = "7.5px";
    
    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = LIGHT_GREEN;
        button.style.cursor = "pointer";
    })

    button.addEventListener("mouseout", () => {
        button.style.backgroundColor = DARK_GREEN;
    })
}


// RENDERING IMAGES AND HANDLING LOGIC

let renderImage = () => {
    currentImg.src = images[count % 5].src;
    counter.innerText = `${images[count % 5].alt}\nImage Number: ${count % 5 + 1}`;
};

// ADDING EVENT LISTENERS TO BUTTONS

let auto;

autoBackBtn.addEventListener("click", () => {
    auto = setInterval(() => {
        count-=1;
        renderImage();
    }, 2000);
});

backBtn.addEventListener("click", () => {
    count-=1;
    renderImage();
});

stopBtn.addEventListener("click", () => {
    clearInterval(auto);
});

forwardBtn.addEventListener("click", () => {
    count+=1;
    renderImage();
});

autoForwardBtn.addEventListener("click", () => {
    auto = setInterval(() => {
        count+=1;
        renderImage();
    }, 2000);
});

window.onload = renderImage;