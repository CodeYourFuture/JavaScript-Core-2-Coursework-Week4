
let images = [
  "https://images.unsplash.com/photo-1603477849227-705c424d1d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1543001907-bae0c9111c68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1535262412227-85541e910204?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
  "https://images.unsplash.com/photo-1579622754173-e2a9aad270e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1622268875771-dbc0ffedfc17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1029&q=80",
];

let count = 0;
let next = document.getElementById("nextBtn");
let back = document.getElementById("backBtn");
let slide = document.getElementById("slide");
slide.src = images[count];

let autoPlay = document.getElementById("autoPlay");
let stop = document.getElementById("stop");
let autoBack = document.getElementById("autoBack");

//next button
next.addEventListener("click", function goNext() {
 
  if (count < images.length - 1){
    count++;
  }
    else{
        count = 0;
    }     
    slide.src = images[count];
});

//back button
back.addEventListener("click", function goBack() {
  
  if (count > 0) {
    count--;
  } 
    else {
        count = images.length - 1;
    }
  slide.src = images[count];
});

//autoplay button
let forward;
autoPlay.addEventListener("click", function autoNext() {

  if (count < images.length - 1) {
    count++;
  } 
    else {
       count = 0;
    }
  slide.src = images[count];
  forward = setTimeout(autoNext, 1000);
});

stop.addEventListener("click", function stop() {
     clearTimeout(forward);
});
//auto back button
let backward;
autoBack.addEventListener("click", function autoBack() {

  if (count > 0) {
    count--;
  } 
    else {
       count = images.length - 1;
    }
  slide.src = images[count];
  backward = setTimeout(autoBack, 1000);
});

stop.addEventListener("click", function stop() {
     clearTimeout(backward);
});