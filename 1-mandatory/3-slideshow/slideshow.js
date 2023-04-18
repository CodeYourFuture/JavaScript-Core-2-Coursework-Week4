// Write your code here
let arrayOfImages = new Array();

arrayOfImages[0] = new Image();
arrayOfImages[0].src = "https://images.freeimages.com/images/large-previews/874/glass-house-1174072.jpg";

arrayOfImages[1] = new Image();
arrayOfImages[1].src = "https://i0.wp.com/picjumbo.com/wp-content/uploads/young-woman-admiring-beauty-of-an-almond-tree-free-photo.jpg?w=2210&quality=70";

arrayOfImages[2] = new Image();
arrayOfImages[2].src = "https://i0.wp.com/picjumbo.com/wp-content/uploads/woman-with-summer-hat-looking-at-dark-golden-sunset-free-photo.jpg?w=2210&quality=70"

arrayOfImages[3] = new Image();
arrayOfImages[3].src = "https://i0.wp.com/picjumbo.com/wp-content/uploads/woman-in-white-summer-hat-going-for-a-swim-in-the-sea-free-photo.jpg?w=2210&quality=70"

console.log(arrayOfImages)


let imageBlock = document.querySelector("#image-block")
let imageFromHTML = document.querySelector("#image");
let pictureNumber = document.querySelector("#picture-number")

let carrentIndex = 0

//Forward button

function clickForNextPhoto(){
    if( carrentIndex == 3){
        carrentIndex = 0
    } else{
        carrentIndex++
    }
    imageFromHTML.src = arrayOfImages[carrentIndex].src;
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
    imageFromHTML.src = arrayOfImages[carrentIndex].src;
    imageFromHTML.classList.add("image-size")
    pictureNumber.innerText = carrentIndex + 1
}

let forwardButton = document.querySelector("#forward-button")
forwardButton.addEventListener("click", clickForNextPhoto)

let backButton = document.querySelector("#back-button")
backButton.addEventListener("click", clickBackPhoto)

clickForNextPhoto()

