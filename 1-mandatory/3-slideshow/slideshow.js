

let images = [
{
    img : "https://ceblog.s3.amazonaws.com/wp-content/uploads/2018/04/16181232/image192.png",
    id : 1
},
{
    img : "https://ceblog.s3.amazonaws.com/wp-content/uploads/2018/04/16181255/image222.png",
    id : 2
},
{
    img : "https://ceblog.s3.amazonaws.com/wp-content/uploads/2018/04/16181045/image44.png",
    id : 3
}
]
let count = 0;
let img = document.getElementById("images");
img.setAttribute("src",images[count].img);

let p = document.getElementById("numberOfImg")
p.innerText = images[count].id

let slides;
const autoPrev = () => {
    clearInterval(slides)
    slides = setInterval(()=>{
        if(count == 0){
            count = 3
        }
       img.setAttribute("src",images[count-1].img)
       p.innerText = images[count-1].id
       count--
       console.log(count)
    },1000);
}
    

document.getElementById("auto-back").addEventListener("click",autoPrev);

document.getElementById("back").addEventListener("click", back);

function back(){
    clearInterval(slides)
    img.setAttribute("src",images[count-1].img)
    p.innerText = images[count-1].id
    count--
    console.log(count)

}

document.getElementById("forward").addEventListener("click", forward);

function forward(){
    clearInterval(slides)
    img.setAttribute("src",images[count+1].img)
    p.innerText = images[count+1].id
    count++
    console.log(count)
}

document.getElementById("stop").addEventListener("click",()=>{
    clearInterval(slides)
});

const autoForward = () => {
    clearInterval(slides)
    slides = setInterval(()=>{
        if(count == 2){
            count = -1
        }
       img.setAttribute("src",images[count+1].img)
       p.innerText = images[count+1].id
       count++
       console.log(count)
    },1000);
}

document.getElementById("auto-forward").addEventListener("click",autoForward)