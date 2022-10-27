// Write your code here
const image = document.querySelector("#images")
image.setAttribute("src","button");

btn-back.addEventListener('click',btnBack)
function btnBack(){
 let index = 0;
 image.innerHTML = `${index[0]}`
 index--;
}

btn-forward.addEventListener('click',btnForward)
function btnForward(){
  let index = 0;
  index++;
}