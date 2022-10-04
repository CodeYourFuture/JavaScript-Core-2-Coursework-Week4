// Write your code here
let images = document.querySelector("#images");
let nextBtn = document.querySelector("#next");
let previousBtn = document.querySelector("#previous");
let count = 1;
images.setAttribute("src", "sample-images/image1.jpg");
nextBtn.addEventListener("click", () => {
  count += 1;
  if (count > 4) {
    count = 1;
  }
  images.setAttribute("src", `sample-images/image${count}.jpg`);
});
previousBtn.addEventListener("click", () => {
  count -= 1;
  if (count < 1) {
    count = 4;
  }
  images.setAttribute("src", `sample-images/image${count}.jpg`);
});
