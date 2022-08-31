// Write your code here
let slider_img = document.querySelector('.slider-img');
let images = ['buffalo.jpg','elephant.jpg','leopard.jpg','lion.jpg','rhino.jpg'];
let i = 0;



   



function prev() {
            if(i <= 0) i = images.length;
            i--;
             return btnClick();
}
        
function next(){
            if(i >= images.length -1) i = -1;
            i++;
            return btnClick();
}

function btnClick(){
             return slider_img.setAttribute('src', './images/' + images[i]); 
}      