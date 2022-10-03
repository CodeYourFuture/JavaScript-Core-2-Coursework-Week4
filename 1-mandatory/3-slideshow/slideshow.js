let imageArray = ['image/flower1.jpg', 'image/flower2.jpg', 'image/flower3.jpg','image/flower4.jpg']
let imageEl = document.getElementById('image');
imageEl.setAttribute("src", imageArray[0]);

document.getElementById('next').addEventListener('click', () => {
  imageArray.push(imageArray.shift());
  imageEl.setAttribute("src", imageArray[0]);
});

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

