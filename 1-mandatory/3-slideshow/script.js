// import fetch from "node-fetch";

position = 0;
// this function goes to the next or previous image
function plusSlider(nav) {
  // position plus or minus 1
  position += nav;

  // keeps the index within the bounds of the array
  position =
    ((position % imageList.length) + imageList.length) % imageList.length;
  //an array of data - the image is at position in the array (imageList)  - back and forward
  console.log(imageList[position]);

  //display image
  document.querySelector(`#display-img`).src = imageList[position].download_url;

  //name
  document.querySelector(`#author`).innerText = imageList[position].author;
}
//fix the width and height of the quotes

// stores the repeating interval
interval = undefined;

//forward auto button
function scroll_forward() {
  //refresh the interval (clear)
  clearInterval(interval);
  //interval of time
  interval = setInterval(function () {
    //go to the next image
    plusSlider(1);
  }, 1000);
}

//forward auto button
function scroll_backwards() {
  //refresh the interval (clear)
  clearInterval(interval);
  //interval of time
  interval = setInterval(function () {
    //go to the next image
    plusSlider(-1);
  }, 1000);
}

//stop button
function stop() {
  //clears the scrolling interval
  clearInterval(interval);
}
