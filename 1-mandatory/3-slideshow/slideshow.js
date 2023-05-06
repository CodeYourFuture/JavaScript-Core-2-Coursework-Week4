// Finding images in the folder
// const folderPath = "/3-slideshow/images";
// const reader = new FileReader();
// const images = [];

// reader.readEntries(function (results) {
//   let image = new Image();
//   results.array.forEach((element) => {
//     image.src = URL.createObjectURL(element);
//     images.push(image);
//   });
// });
//------HELP WITH THE ABOVE -------

const imagesArray = [
  "https://images.pexels.com/photos/10572411/pexels-photo-10572411.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/8765830/pexels-photo-8765830.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/256477/pexels-photo-256477.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/5026996/pexels-photo-5026996.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/8782144/pexels-photo-8782144.jpeg?auto=compress&cs=tinysrgb&w=600",
];
let image = document.querySelector("img");
let previousButton = document.getElementById("previous");
let nextButton = document.getElementById("next");
let currentImage = 0;

function showImage() {
  image.src = imagesArray[currentImage];
}

function moveForward() {
  currentImage++;
  if (currentImage >= imagesArray.length) {
    currentImage = 0;
  }
  showImage();
}

function moveBackwards() {
  currentImage--;
  if (currentImage < 0) {
    currentImage = imagesArray.length - 1;
  }
  showImage();
}

showImage();
nextButton.addEventListener("click", moveForward);
previousButton.addEventListener("click", moveBackwards);
