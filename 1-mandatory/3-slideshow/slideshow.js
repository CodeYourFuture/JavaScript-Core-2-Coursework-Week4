// Write your code here



const imageContainer = document.querySelector(".image_container");
const images = imageContainer.querySelectorAll("img");
const theForwardBtn = document.querySelector(".forward");

let imageIndex = 0;

showImage(imageIndex);

theForwardBtn.addEventListener("click", showNextImage);

function showImage(index) {
    images.forEach(image => {
        image.style.display = "none";
    });

 // const startIndex = imagesIndex % images.length;
//  const endIndex = (startIndex + Math.ceil(images.legth / 3)) % images.length; 

//  for (let i = startIndex; i <= endIndex; i++) {
    images[index].style.display = "block";
  }  


function showNextImage() {
    imageIndex++;
    if (imageIndex >= images.length) {
        imageIndex = 0;
    }
    showImage(imageIndex);
}