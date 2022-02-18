// Write your code here

const myDiv = document.createElement("div");
document.body.append(myDiv);

let imageOne = document.createElement("img");
imageOne.setAttribute("class", "imageOne");
imageOne.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1612830549030-bfb4b58ccd5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
);

let imageTwo = document.createElement("img");
imageTwo.setAttribute("class", "imageTwo");
imageTwo.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1537151672256-6caf2e9f8c95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
);

let imageThree = document.createElement("img");
imageThree.setAttribute("class", "imageThree");
imageThree.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1608096299210-db7e38487075?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
);

// const carousel = [imageOne, imageTwo, imageThree]

//Next I need display the first image and create a button.
document.body.appendChild(imageTwo);
const backButton = document.createElement("button");
backButton.innerText = `Back Button`;
const nextButton = document.createElement("button");
nextButton.innerText = `Next Button`;
myDiv.appendChild(backButton);
myDiv.appendChild(nextButton);

backButton.addEventListener("click", () => {
  imageTwo.src = imageOne.src;
});

nextButton.addEventListener("click", () => {
  imageTwo.src = imageThree.src;
  if (imageTwo.src === imageThree.src) {
    imageTwo.src === imageTwo.src;
  }
});
