// Write your code here
const arrOfCats = ["cute-cat-a.png", "cute-cat-b.png", "cute-cat-c.png"]; 
const curentImage = document.querySelector("#curentImage");
const backBtn = document.querySelector("#backBtn");
const forwardBtn = document.querySelector("#forwardBtn");

let currentIndex = 0;

function backFunction () {
  currentIndex--
  curentImage.src = `/1-mandatory/3-slideshow/assets/${arrOfCats[currentIndex]}`
  console.log(currentIndex)

}

function forwardFunction () {
  if (currentIndex < arrOfCats.length-1) {
  currentIndex++
  curentImage.src = `/1-mandatory/3-slideshow/assets/${arrOfCats[currentIndex]}`
  console.log(currentIndex)
  console.log(arrOfCats[currentIndex])
  }
}

forwardBtn.addEventListener("click", forwardFunction)

backBtn.addEventListener("click", backFunction)


// const arrOfCats = ["cute-cat-a.png", "cute-cat-b.png", "cute-cat-c.png"];