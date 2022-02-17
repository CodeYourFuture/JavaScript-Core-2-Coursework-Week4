let i = 0;
let images = ['image1.jpg', 'image2.jpg','image3.jpg',
'image4.jpg','image5.jpg',];

let time = 2000;

function changeImage() {
    document.slide.src = images[i]


if(i < images.length -1){
    i++;
} else {
    i = 0;
}
  setTimeout('changeImage()', time);

}
 window.onload = changeImage;


backButton = document.getElementById('btn1')
backButton.addEventListener('click', () => {
     let back = changeImage();
   });



forwardButton = document.getElementById("btn2")
forwardButton.addEventListener('click', () => {
    changeImage();
  });

