
// Write your code here
let images=[
    'https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/460775/pexels-photo-460775.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/86405/penguin-funny-blue-water-86405.jpeg?auto=compress&cs=tinysrgb&w=600']
    let divEl=document.querySelector('#imagepart');
    let imagEl=document.createElement('img');
    divEl.appendChild(imagEl);
    imagEl.src='https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600';
    let buttonBack=document.querySelector('#back')
    let buttonForward=document.querySelector('#forward')
    let buttonAutoBack=document.querySelector('#autoback')
    let buttonAutoForward=document.querySelector('#autoforward')
    let count=0;
    let moveBack=()=>{
         count--
         if(count<0){
            count=images.length-1;
        }
         imagEl.src=images[count];
    }
     let moveForward=()=>{
        count++
        if(count>=images.length){
            count=0;
        }
        imagEl.src=images[count];
    }
    buttonBack.addEventListener('click',moveBack)
    buttonForward.addEventListener('click',moveForward)
     buttonAutoBack.addEventListener('click',()=>{
        setInterval(()=>{
            moveBack()
        },1000)
     })
     buttonAutoForward.addEventListener('click',()=>{
        setInterval(()=>{
            moveForward()
        },1000)
     })