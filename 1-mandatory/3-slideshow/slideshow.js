'strict mode'
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
});
let counter = 0;
nextBtn.addEventListener("click", function () {
    counter++;
    carousel();
});

prevBtn.addEventListener("click", function () {
    counter--;
    carousel();
});

function carousel() {
    // working with slides
    // if (counter === slides.length) {
    //   counter = 0;
    // }
    // if (counter < 0) {
    //   counter = slides.length - 1;
    // }
    // working with buttons

    if (counter < slides.length - 1) {
        nextBtn.style.display = "block";
    } else {
        nextBtn.style.display = "none";
    }
    if (counter > 0) {
        prevBtn.style.display = "block";
    } else {
        prevBtn.style.display = "none";
    }
    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}





// let imageIndex = 0;
// let timerId = null;
// let autoPlayState = 'off';

// const carouselImages = [
//   'https://d1aeri3ty3izns.cloudfront.net/media/35/357547/1200/preview.jpg',
//   'https://sites.create-cdn.net/siteimages/38/5/0/385085/16/3/8/16387589/1040x1040.jpg?1524735119',
//   'https://images-na.ssl-images-amazon.com/images/I/71nJgkQau1L._AC_SL1500_.jpg',
// ];

// function wrapIndexAround(index, length) {
//   const remainder = index % length;
//   return (remainder + length) % length;
// }

// function updateCarouselImage(imageUrl) {
//   const imageElement = document.querySelector('img');
//   imageElement.src = imageUrl;
// }

// function updatePosition(increment, callBack) {
//   imageIndex = wrapIndexAround(imageIndex + increment, carouselImages.length);
//   callBack(imageIndex);
// }

// function startAutoSlideShow(callBack) {
//   const ONE_SECOND_IN_MILISECONDS = 1000;
//   if (!timerId) timerId = setInterval(callBack, ONE_SECOND_IN_MILISECONDS);
// }

// function stopAutoSlideShow() {
//   if (timerId) {
//     clearInterval(timerId);
//     timerId = null;
//   }
// }

// function initialSetup() {
//   const firstImage = carouselImages[0];
//   updateCarouselImage(firstImage);
// }

// const forwardButton = document.querySelector('#forward');
// const backButton = document.querySelector('#back');
// const stopButton = document.querySelector('#stop');
// const autoForwardButton = document.querySelector('#auto-forward');
// const autoBackButton = document.querySelector('#auto-back');

// forwardButton.addEventListener('click', () => {
//   if (autoPlayState === 'off' && timerId === null) {
//     updatePosition(1, (newIndex) => updateCarouselImage(carouselImages[newIndex]));
//   }
// });

// backButton.addEventListener('click', () => {
//   if (autoPlayState === 'off' && timerId === null) {
//     updatePosition(-1, (newIndex) => updateCarouselImage(carouselImages[newIndex]));
//   }
// });

// autoForwardButton.addEventListener('click', () => {
//   startAutoSlideShow(function () {
//     updatePosition(1, (newIndex) => updateCarouselImage(carouselImages[newIndex]));
//   });
// });

// autoBackButton.addEventListener('click', () => {
//   startAutoSlideShow(function () {
//     updatePosition(-1, (newIndex) => updateCarouselImage(carouselImages[newIndex]));
//   });
// });

// stopButton.addEventListener('click', () => {
//   stopAutoSlideShow();
// });

// window.addEventListener('load', () => {
//   initialSetup();
// });