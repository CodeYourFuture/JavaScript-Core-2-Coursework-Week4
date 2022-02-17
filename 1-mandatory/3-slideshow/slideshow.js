// Write your code here
let photoArray = [
  {
    src: "https://images.unsplash.com/photo-1645032227534-6a04fe50d4ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    alt: "A red hat girl sitting ",
  },
  {
    src: "https://images.unsplash.com/photo-1640622658353-c6cecbe91488?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    alt: "A woman at work",
  },
  {
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    alt: "Chairs photo",
  },
  {
    src: "https://images.unsplash.com/photo-1644451922287-f33c655abb77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    alt: "A beautiful scene",
  },
];

let imgDiv = document.getElementById('img-container');
let imgEl = document.createElement('img');


let backBtn = document.getElementById("back-btn");
let i = 0;

let photoPicker = (i) =>{
  imgEl.setAttribute("src", photoArray[i].src);
  imgDiv.appendChild(imgEl);
}

backBtn.addEventListener("click", ()=>{
  photoPicker(i);
  i--;
  if( i < 0){
    i = photoArray.length }
  });

let fwdBtn = document.getElementById("forward-btn");

fwdBtn.addEventListener("click", () => {
  photoPicker(i);
  i++;
});

