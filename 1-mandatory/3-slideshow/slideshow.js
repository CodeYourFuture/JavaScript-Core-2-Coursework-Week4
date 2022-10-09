// Write your code here
var count = 0;
var backWardInterval;
var forWardInterval;
var selectedTimeForEachSlide;
function forward() {
  count = (count + 1) % 10;
  document.getElementById("image").src = "assets/images/pic" + count + ".jpg";
}

function backward() {
  count = (count - 1) % 10;
  if (count === -1) count = 9;
  document.getElementById("image").src = "assets/images/pic" + count + ".jpg";
}

function autoForward() {
  clearInterval(backWardInterval);
  forWardInterval = setInterval(function () {
    console.log(selectedTimeForEachSlide);
    count = (count + 1) % 10;
    document.getElementById("image").src = "assets/images/pic" + count + ".jpg";
  }, selectedTimeForEachSlide);
}

function autoBackward() {
  clearInterval(forWardInterval);
  backWardInterval = setInterval(function () {
    console.log(selectedTimeForEachSlide);
    count = (count - 1) % 10;
    if (count === -1) count = 9;
    document.getElementById("image").src = "assets/images/pic" + count + ".jpg";
  }, selectedTimeForEachSlide);
}

function stop() {
  clearInterval(backWardInterval);
  clearInterval(forWardInterval);
}

let selectList = document.getElementById("autoSlideList");
for (let i = 5; i <= 60; i += 5) {
  var option = document.createElement("option");
  option.value = i;
  option.text = i;
  selectList.appendChild(option);
}

function timeEachSlide() {
  selectedTimeForEachSlide =
    document.getElementById("autoSlideList").value * 1000;
  clearInterval(backWardInterval);
  clearInterval(forWardInterval);
}
