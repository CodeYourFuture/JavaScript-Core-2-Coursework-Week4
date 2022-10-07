// Write your code here
let imageArray = ['image/photo-1.avif', 'image/photo-2.avif','image/photo-3.avif','image/photo-4.avif','image/photo-5.avif']
let imageEl = document.getElementById('image');
//console.log(imageEl);
imageEl.setAttribute("src", imageArray[0]);
//next image
document.getElementById('next').addEventListener('click', () => {
  imageArray.push(imageArray.shift());
  imageEl.setAttribute("src", imageArray[0]);
});
//previous image
document.getElementById('previous').addEventListener('click', () => {
  imageArray.unshift(imageArray.pop());
  imageEl.setAttribute("src", imageArray[0]);
});
document.getElementById('auto-back').addEventListener('click', () => {
    let autoBackInterval=setInterval(()=>{
        imageArray.unshift(imageArray.pop());
        imageEl.setAttribute("src", imageArray[0]);
        document.getElementById("stop").addEventListener("click", () => {
            clearInterval(autoBackInterval);
        });
        document.getElementById("auto-forward").addEventListener("click", () => {
            clearInterval(autoBackInterval);
        });
        document.getElementById("next").addEventListener("click", () => {
            clearInterval(autoBackInterval);
        });
        document.getElementById("previous").addEventListener("click", () => {
            clearInterval(autoBackInterval);
        });
  },5000)
});

document.getElementById('auto-forward').addEventListener('click', () => {
    let autoForwardInterval=setInterval(()=>{
        imageArray.push(imageArray.shift());
        imageEl.setAttribute("src", imageArray[0]);
        document.getElementById("stop").addEventListener("click", () => {
            clearInterval(autoForwardInterval);
        });
        document.getElementById("auto-back").addEventListener("click", () => {
            clearInterval(autoForwardInterval);
        });
        document.getElementById("next").addEventListener("click", () => {
            clearInterval(autoForwardInterval);
        });
        document.getElementById("previous").addEventListener("click", () => {
            clearInterval(autoForwardInterval);
        });
  },5000)

});
