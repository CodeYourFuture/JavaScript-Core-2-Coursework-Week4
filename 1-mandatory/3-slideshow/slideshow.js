// Write your code here
let listOfImages=[
    {   
        src: "assets/cute-cat-a.png",
        alt: "cute cat A",
      },
    {   
        src: "assets/cute-cat-b.jpg",
        alt: "cute cat B",
      },  
    {   
        src: "assets/cute-cat-c.jpg",
        alt: "cute cat c",
      },  
    {   
        src: "assets/cute-cat-d.jpg",
        alt: "cute cat c",
      }   
]

let imageSlidShow=document.getElementById('image__slidShow');
let forwardButton=document.getElementById("forward__btn");
let backButton=document.getElementById("back__btn");
let autoForwardButton=document.getElementById("autoForward__btn");
let autoBackButton=document.getElementById("autoBack__btn");
let stopButton=document.getElementById("stop__btn");

let index=0
imageSlidShow.src=listOfImages[index].src
imageSlidShow.alt=listOfImages[index].alt



const goForward = () => {
    index ++;

    if(index>listOfImages.length-1){
        index=0
    }

    imageSlidShow.src=listOfImages[index].src
    imageSlidShow.alt=listOfImages[index].alt
}


const goBack = () => {
    index --;

    if(index<0){
        index=listOfImages.length - 1
    }

    imageSlidShow.src=listOfImages[index].src
    imageSlidShow.alt=listOfImages[index].alt
}

forwardButton.addEventListener("click",() => {
    goForward()
})


backButton.addEventListener("click",() => {
    goBack()
})

autoForwardButton.addEventListener("click", () => {
    slidShowinterval=setInterval(() => {
        goForward()
    },2000)  
})

autoBackButton.addEventListener("click", () => {
    slidShowinterval=setInterval(() => {
       goBack()
    },2000) 
})

stopButton.addEventListener("click", () => {
   clearInterval(slidShowinterval);
})
