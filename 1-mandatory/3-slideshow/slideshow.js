// Write your code here
let arrayOfImages = new Array();

arrayOfImages[0] = new Image();
arrayOfImages[0].src = "/Users/Mac/Documents/CYF/JavaScript-Core-2-Coursework-Week4/1-mandatory/3-slideshow/gallery-1-1220733.jpeg";

arrayOfImages[1] = new Image();
arrayOfImages[1].src = "https://images.unsplash.com/photo-1681502014934-b70a5ff05bef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80";


   



function clickForNextPhoto(photos){
    let i = arrayOfImages[0]
    let imageBlock = document.querySelector("#image-block")
    let imageFromHTML = document.querySelector("#image");
    imageFromHTML.src = photos[i];
    console.log(imageFromHTML)
    imageBlock.appendChild(imageFromHTML)
}
clickForNextPhoto(arrayOfImages)