// Write your code here
const title = document.getElementById("title");
const image = document.getElementById("image");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const imageArray = [
  "https://images.unsplash.com/photo-1674350369100-bc50d4da3580?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1674216709275-61a436e1ecd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
  "https://images.unsplash.com/photo-1674228640170-e9321a2b2424?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1674228640216-156de827e0ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
];
let imageCounter = 0;
title.innerText = "Image Carousel";
image.src = imageArray[3];

prev.addEventListener("click", () => {

    image.src = imageArray[imageCounter];
    if (imageCounter == 0) {
        imageCounter = 3;
    } else { imageCounter--; }

});

next.addEventListener("click", () => {
  image.src = imageArray[imageCounter];
  if (imageCounter == 3) {
    imageCounter = 0;
  } else {
    imageCounter++;
  }
});