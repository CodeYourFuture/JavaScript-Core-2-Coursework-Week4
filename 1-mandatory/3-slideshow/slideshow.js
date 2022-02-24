// Write your code here
let imgAddress = ['https://cyf-image-carousel.netlify.app/sample-images/kitten1.jpg',
'https://cyf-image-carousel.netlify.app/sample-images/kitten2.jpg',
'https://cyf-image-carousel.netlify.app/sample-images/kitten3.jpg']


let imgIndexNum = 0;
let img = document.getElementById('img')
img.src = imgAddress[imgIndexNum]
let index = document.getElementById('index')
index.innerText = imgIndexNum
let forwardBtn = document.getElementById('forward')
//forward button
forwardBtn.addEventListener('click', function(){
    imgIndexNum++
    if(imgIndexNum > imgAddress.length -1 ){
        imgIndexNum = 0
    }
    img.src = imgAddress[imgIndexNum]
    index.innerHTML = imgIndexNum
    
})
// back button
let backBtn = document.getElementById('back')
backBtn.addEventListener('click', function(){
        imgIndexNum--
        if(imgIndexNum<0){
            imgIndexNum = [imgAddress.length -1]
        }
        img.src = imgAddress[imgIndexNum]
        index.innerHTML = imgIndexNum 
})
// auto forward button 
let autoForwardBtn = document.getElementById('auto-forward')
let stopped = document.getElementById('stop') // stop btn variable
let autoEventLsn = autoForwardBtn.addEventListener('click', function(){
    let setAutoforward = setInterval(() => {
        imgIndexNum++
        if(imgIndexNum > imgAddress.length - 1){
            imgIndexNum = 0
        }
        img.src = imgAddress[imgIndexNum]
        index.innerHTML = imgIndexNum 
    }, 2000);
    stopped.addEventListener('click',function(){
        clearInterval(setAutoforward)
    })
})
// auto back button
let autoBackBtn = document.getElementById('auto-back')
autoBackBtn.addEventListener('click', function(){
    let setAutoBack = setInterval(() => {
        imgIndexNum--
        if(imgIndexNum < 0){
            imgIndexNum = [imgAddress.length - 1]
        }
        img.src = imgAddress[imgIndexNum]
        index.innerHTML = imgIndexNum 
    }, 2000);
    stopped.addEventListener('click',function(){
        clearInterval(setAutoBack)
    })
})
