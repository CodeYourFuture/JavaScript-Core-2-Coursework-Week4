// Write your code here
const images =["https://images.unsplash.com/photo-1666880147941-b145c43cfe6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60","https://images.unsplash.com/photo-1666756240261-d2a79080c069?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2M3x8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60","https://images.unsplash.com/photo-1666899388931-cb2a70cff398?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"]

const gallery = document.querySelector("#images")  

let x = 0;
window.addEventListener("load",function(){
  const img = document.createElement("img")
     img.src = images[0];
     gallery.appendChild(img);
})

function btnBack(){
  const img = document.createElement("img")
     img.src = images[x];
     gallery.innerHTML = ""
     gallery.appendChild(img);
     x--;

    if(x < 0){
       x = 2;
  } 
}
document.getElementById("btn-back").addEventListener('click',btnBack)


function btnForward(){
   const img = document.createElement("img")
     img.src = images[x];
     gallery.innerHTML = ""
     gallery.appendChild(img);
     x++;

     if(x > 2){
       x = 0;
     }
}
document.getElementById("btn-forward").addEventListener('click',btnForward)

