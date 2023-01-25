// Write your code here

const sliderImage = document.querySelector('.slider-img')
console.log(sliderImage)
const images = ['image1.jpeg', 'image2.jpeg', 'image3.jpeg', 'image4.jpeg', 'image5.jpeg']
let i = 0; //current img index

function prev () {
  if (i <= 0) i = images.length-1
    i--;
  return setImg()
}

function next () {
    if (i >= images.length-1) i = -1
    i++;
    return setImg()
}

function setImg (){
    return sliderImage.setAttribute('src', "assets/" + images[i])
}