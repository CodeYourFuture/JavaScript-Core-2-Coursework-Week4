let body= document.querySelector('body')

///Create elements////

let headingEl= document.createElement('h1')
headingEl.innerHTML= 'Images of the most regal animal'
headingEl.className='h1'
body.append(headingEl)

let divEl= document.createElement('div')
divEl.className='container-box'
body.appendChild(divEl)

let image1 = document.createElement('img')
image1.src= '../../1-mandatory/3-slideshow/images/guineapig-picture-1.jpg'
image1.className='slides'
divEl.appendChild(image1)

let image2 = document.createElement('img')
image2.src= '../../1-mandatory/3-slideshow/images/guineapig-picture-2.jpg'
image2.className='slides'

let image3 = document.createElement('img')
image3.src= '../../1-mandatory/3-slideshow/images/guineapig-picture-3.jpg'
image3.className='slides'

let image4 = document.createElement('img')
image4.src= '../../1-mandatory/3-slideshow/images/guineapig-picture-4.jpg'
image4.className='slides'

let image5 = document.createElement('img')
image5.src= '../../1-mandatory/3-slideshow/images/guineapig-picture-5.jpeg'
image5.className='slides'




//  Event Listeners ///
let imageAddress=[
            '../../1-mandatory/3-slideshow/images/guineapig-picture-1.jpg',
            '../../1-mandatory/3-slideshow/images/guineapig-picture-2.jpg',
            '../../1-mandatory/3-slideshow/images/guineapig-picture-3.jpg',
            '../../1-mandatory/3-slideshow/images/guineapig-picture-4.jpg',
            '../../1-mandatory/3-slideshow/images/guineapig-picture-5.jpeg' 
]
let i=0;

let buttonForward= document.createElement('button')
buttonForward.innerHTML='Forward'
body.append(buttonForward)
buttonForward.className='button'
buttonForward.addEventListener('click', () => {
    i++;
    if (i===imageAddress.length){
        i=0
    }
    image1.src = imageAddress[i];
})


let buttonBack= document.createElement('button')
buttonBack.innerHTML='Back'
body.append(buttonBack)
buttonBack.className='button'
buttonBack.addEventListener('click', () =>{
    i--;
    if (i<0){
      i=imageAddress.length-1
    }
    image1.src = imageAddress[i];   
})

let buttonAutoForward= document.createElement('button')
buttonAutoForward.innerHTML='Auto-forward'
body.append(buttonAutoForward)
buttonAutoForward.className='button'
buttonAutoForward.addEventListener('click', () => {
        interval = setInterval(function() {
        image1.src=imageAddress[i]
        i++
        if (i===imageAddress.length){
        i=0
    }
    },2000)
})

let buttonStop= document.createElement('button')
buttonStop.innerHTML='Stop'
body.append(buttonStop)
buttonStop.className='button'
buttonStop.addEventListener('click', () => {
    clearInterval(interval)
})


