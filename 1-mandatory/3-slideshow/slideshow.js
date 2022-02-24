// Write your code here
let i = 0;
let images = [];
let time = 1800;

images[0] =
  "https://images.unsplash.com/photo-1603477849227-705c424d1d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";
images[1] =
  "https://images.unsplash.com/photo-1543001907-bae0c9111c68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
images[2] =
  "https://images.unsplash.com/photo-1535262412227-85541e910204?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80";
images[4] =
  "https://images.unsplash.com/photo-1579622754173-e2a9aad270e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";
images[3] =
  "https://images.unsplash.com/photo-1622268875771-dbc0ffedfc17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1029&q=80";



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
  