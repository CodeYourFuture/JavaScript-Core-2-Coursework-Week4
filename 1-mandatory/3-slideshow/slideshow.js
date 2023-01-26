let album = ["cat/cat0.jpg","cat/cat1.jpg",
"cat/cat2.jpg","cat/cat3.jpg"
]

let arrLength = album.length ;
//arrlength = 4
let currentIndex = 0;

const img = document.getElementById("img")
img.src=album[currentIndex] ;

const nextButton = document.getElementById("next");
nextButton.addEventListener("click",()=>{
    if(currentIndex < album.length-1){
        currentIndex = currentIndex +1
        img.src = album[currentIndex] 
    }else{
        // img.src=album[arrLength-1]
        return;
    }
});

const backButton = document.getElementById("back");
backButton.addEventListener("click",()=>{      
    if(currentIndex === 0){
        return;
    }else{
        currentIndex = currentIndex-1
        img.src=album[currentIndex]
    }
});














