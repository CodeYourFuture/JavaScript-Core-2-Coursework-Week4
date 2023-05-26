// Get DOM elements
const forwardButton = document.getElementById('forward-btn');
const backwardButton = document.getElementById('backward-btn');
const imageContainer = document.getElementById('image');
const photoIndex = document.getElementById('indexImg');
const autoForwardButton = document.getElementById("auto-forward");
const autoBackwardButton = document.getElementById("auto-backward");
const stopButton = document.getElementById("stop");

// const stopBtn = document.querySelector("#stop");

// Assign global variables
let count = 0;
let intervalId;
let interval = 2000

const photos = [
    '<img src="/1-mandatory/3-slideshow/assets/cute-cat-a.png"></img>',
    '<img src="/1-mandatory/3-slideshow/assets/cute-cat-b.jpg"></img>',
    '<img src="/1-mandatory/3-slideshow/assets/cute-cat-c.jpg"></img>'
];

// Functionality
imageContainer.innerHTML = photos[0];


const displayIndex = () => {
    photoIndex.innerText = `${count}`;
}

displayIndex();

const moveForward = () => {
    
    if (count < photos.length - 1) {
        count++;
        imageContainer.innerHTML = photos[count];
    }
}
const moveAutoForward = () => {
    const intervalID = setInterval(moveForward, 2000);

    if (count === photos.length - 1) {
        clearInterval(intervalID)
    }
};

const moveAutoBackward = () => {
    const intervalID = setInterval(moveBackward, 2000);

    if (count === photos.length - 1) {
        clearInterval(intervalID)
    }
};

const moveBackward = () => {
    if(count < photos.length && count > 0) {
        count--;
        // console.log(count)
        imageContainer.innerHTML = photos[count]
    }
};

// const stop = () => {
//     if(count<=0)
// }


// List of event listeners
forwardButton.addEventListener('click', (event) => {
    moveForward();
    displayIndex();
})

backwardButton.addEventListener('click', (event) => {
        moveBackward();
        displayIndex();
})
autoForwardButton.addEventListener("click", (event) => {
    moveAutoForward();
    displayIndex();

})
autoBackwardButton.addEventListener("click", (event) => {
    moveAutoBackward();
    displayIndex();
});

// stopButton.addEventListener("click", (event) => {
//     moveStop();
//     displayIndex();
// });