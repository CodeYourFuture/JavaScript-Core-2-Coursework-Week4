// Write your code here

//images.setAttribute('src','https://images.unsplash.com/photo-1495231916356-a86217efff12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZsb3dlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')
const imageList = ['https://images.unsplash.com/photo-1495231916356-a86217efff12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZsb3dlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1527061011665-3652c757a4d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80','https://images.unsplash.com/photo-1546842931-886c185b4c8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1370&q=80','https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80','https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80']
const backbuttton = document.querySelector('.back');
const forwardbutton = document.querySelector('.forward');
backbuttton.addEventListener('click',imageCaroselBack);

forwardbutton.addEventListener('click',imageCaroselForward);
let i=0;

function imageCaroselBack(){
   
     
        
         const imagesQuery = document.querySelector('img');
         
         imagesQuery.setAttribute('src',imageList[i=i+1])
            
         
        }
function imageCaroselForward(){
        const imagesQuery = document.querySelector('img');
       imagesQuery.setAttribute('src',imageList[i=i-1])

        }