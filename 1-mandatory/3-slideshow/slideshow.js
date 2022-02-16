
var  i =0; //start point 
let images = []; //images array 
let time = 3000; // time between switch

//Image List 
images[0] = 'https://images.unsplash.com/photo-1644782955074-13b15e5b5047?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';
images[1] = 'https://images.unsplash.com/photo-1587463272361-565200f82b33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80';
images[2] = 'https://images.unsplash.com/photo-1644869314419-44700548bd92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';
images[3] = 'https://images.unsplash.com/photo-1572414323271-91932854eb18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
//change image 
function changeImg(){
    document.slide.src =images[i];
//check index length
    if (i< images.length-1){
i++ // adding 1 to index 
    }else {
        i=0;  //reset back to zero
    }
//run function every x seconds 
    setTimeout("changeImg()", time);
}
 //run function when page loads
window.onload =changeImg;
