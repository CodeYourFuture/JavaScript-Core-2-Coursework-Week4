// Write your code here
const pics = [
  "https://images.unsplash.com/photo-1617910879258-2aff8026515d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1538099023053-30e7da644196?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1603121067697-48cb1b759a6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  "https://images.unsplash.com/photo-1593526492327-b071f3d5333e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1617500756598-a0ee57567ac8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1570288685369-f7305163d0e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
];
var i = 0;

// put pics on the image div

// document.querySelectorAll("button").className = "butt";

var imageP = document.getElementById("image");
imageP.className = "design";
imageP.src =
  "https://images.unsplash.com/photo-1593526492327-b071f3d5333e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

// DEMO 1

function bottoni(param) {
  document.getElementById("image").src = pics[i];
  if (param === "forwor") {
    i++;
    if (i === pics.length) {
      i = pics.length - 1;
    }
  } else {
    i--;
    if (i < 0) {
      i = 0;
    }
  }
}

var i = 0;
var x = pics;
var time = 1000;

var autoF = document.getElementById("auto2");

autoF.addEventListener("click", changeMe);

function changeMe() {
  document.getElementById("image").src = pics[i];

  if (i < x.length - 1) {
    i++;
  } else {
    i = 0;
  }

  Timing = setTimeout("changeMe()", time);
}

//  backword but
var autoF = document.getElementById("auto1");

autoF.addEventListener("click", changeM);

function changeM() {
  document.getElementById("image").src = pics[i];

  if (i > x.length - 1) {
    i--;
  } else {
    i = 0;
  }

  Timing = setTimeout("changeMe()", time);
}

// stop butt

stopper = document.getElementById("stop1");

stopper.addEventListener("click", stopM);
function stopM() {
  clearTimeout(Timing);
}
