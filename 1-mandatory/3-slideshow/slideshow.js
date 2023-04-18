// Write your code here
let images = new Array();

images[0] = new Image();
images[0].src = "https://images.freeimages.com/images/large-previews/874/glass-house-1174072.jpg";

images[1] = new Image();
images[1].src = "https://i0.wp.com/picjumbo.com/wp-content/uploads/young-woman-admiring-beauty-of-an-almond-tree-free-photo.jpg?w=2210&quality=70";

images[2] = new Image();
images[2].src = "https://i0.wp.com/picjumbo.com/wp-content/uploads/woman-with-summer-hat-looking-at-dark-golden-sunset-free-photo.jpg?w=2210&quality=70"

images[3] = new Image();
images[3].src = "https://i0.wp.com/picjumbo.com/wp-content/uploads/woman-in-white-summer-hat-going-for-a-swim-in-the-sea-free-photo.jpg?w=2210&quality=70"

console.log(images)


let imageBlock = document.querySelector("#image-block")
let imageFromHTML = document.querySelector("#carousel-img");
let pictureNumber = document.querySelector("#picture-number")

let carrentIndex = -1

//Forward button

function clickForNextPhoto(){
    if( carrentIndex == 3){
        carrentIndex = 0
    } else{
        carrentIndex++
    }
    imageFromHTML.src= images[carrentIndex].src;
    imageFromHTML.classList.add("image-size")
    pictureNumber.innerText = carrentIndex + 1
}

//Back button

function clickBackPhoto(){
    if( carrentIndex == 0){
        carrentIndex = 3
    } else{
        carrentIndex--
    }
    imageFromHTML.src= images[carrentIndex].src;
    imageFromHTML.classList.add("image-size")
    pictureNumber.innerText = carrentIndex + 1
}

let forwardButton = document.querySelector("#forward-btn")
forwardButton.addEventListener("click", clickForNextPhoto)

let backButton = document.querySelector("#backward-btn")
backButton.addEventListener("click", clickBackPhoto)


let autoforwardButton = document.querySelector("#auto-forward")
let autoBackButton = document.querySelector("#auto-back")
let stopButton = document.querySelector("#stop-button")

let photoClickInterval

//auto slideShow button
function autoSlide(){
photoClickInterval = setInterval(function(){
    clickForNextPhoto()
}, 2000)   
}

//Back auto slideShow button
function autoSlideBack(){
photoClickInterval = setInterval(function(){
    clickBackPhoto()
}, 2000)   
}

autoforwardButton.addEventListener("click", autoSlide)
autoBackButton.addEventListener("click", autoSlideBack)

//stop button
stopButton.addEventListener("click", function(){
    clearInterval(photoClickInterval);
})





