
let images = ["masuria1.png", "masuria2.jpeg", "masuria3.jpeg", "masuria4.jpeg", "masuria5.jpeg", "masuria6.jpeg"];

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