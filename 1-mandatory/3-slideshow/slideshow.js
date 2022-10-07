// Write your code here
var count = 0;
var backWardInterval;
var forWardInterval;
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
    count = (count + 1) % 10;
    document.getElementById("image").src = "assets/images/pic" + count + ".jpg";
  }, 5000);
}

function autoBackward() {
  clearInterval(forWardInterval);
  backWardInterval = setInterval(function () {
    count = (count - 1) % 10;
    if (count === -1) count = 9;
    document.getElementById("image").src = "assets/images/pic" + count + ".jpg";
  }, 4000);
}

function stop() {
  clearInterval(backWardInterval);
  clearInterval(forWardInterval);
}
