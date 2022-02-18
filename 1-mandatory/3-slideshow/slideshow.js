// Write your code here
let i = 0;
let images = [];
let time = 1800;

images[0] =
  "https://images.unsplash.com/photo-1603477849227-705c424d1d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";
images[1] =
  "https://images.unsplash.com/photo-1495819427834-1954f20ebb97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
images[2] =
  "https://images.unsplash.com/photo-1611925722908-9611933b7d65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80";
images[3] =
  "https://images.unsplash.com/photo-1579622754173-e2a9aad270e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";

  function changeImg(){
      document.slide.src = images[i];

    if(i < images.length - 1 ){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);

  }

  window.onload = changeImg;
  