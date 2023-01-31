// Write your code here
let imageSection = document.getElementById("images");
let imagesArray = [];

let image1 = document.createElement("img");
image1.src = "assets/cute-cat-a.png";
imageSection.appendChild(image1);
imagesArray.push(image1);

let image2 = document.createElement("img");
image2.src = "assets/cute-cat-b.jpg";
imagesArray.push(image2);

let image3 = document.createElement("img");
image3.src = "assets/cute-cat-c.jpg";
imagesArray.push(image3);

let image4 = document.createElement("img");
image4.src = "assets/jackRussel.jpg";
imagesArray.push(image4);

let count = 0;

function manuallyForward() {
  imageSection.removeChild(imagesArray[count]);
  count++;
  if (count >= imagesArray.length) {
    count = 0;
  }
  imageSection.appendChild(imagesArray[count]);
}

function manuallyBackward() {
  imageSection.removeChild(imagesArray[count]);
  count--;
  if (count < 0) {
    count = imagesArray.length - 1;
  }
  imageSection.appendChild(imagesArray[count]);
}

let autoBackInt;
let autoForwardInt;
let inputSecondSlideshow = document.getElementById("inputSeconds");

function autoBack() {
  if (inputSecondSlideshow.value.length === 0)
    autoBackInt = setInterval(manuallyBackward, 1000);
  else
    autoBackInt = setInterval(
      manuallyBackward,
      Number(inputSecondSlideshow.value) * 1000
    );
}

function autoForward() {
  if (inputSecondSlideshow.value.length === 0)
    autoBackInt = setInterval(manuallyBackward, 1000);
  else
    autoForwardInt = setInterval(
      manuallyForward,
      Number(inputSecondSlideshow.value) * 1000
    );
}

function stop() {
  clearInterval(autoBackInt);
  clearInterval(autoForwardInt);
}
