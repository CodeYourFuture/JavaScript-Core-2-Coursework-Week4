const slider_img = document.querySelector('.slider-img');
const images = ['crocus.jpg', 'wheat.jpg', 'leaves.jpg', 'hemlock.jpg'];
let i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "images/"+ images[i]);	
}