// Write your code here
const carasoulElement = document.querySelectorAll(".carasoul")

carasoulElement.forEach((carasoul, indx)=> {
    carasoul.style.transform = `translateX(${indx * 100}%)`

})

let curCarasoul = 0;
let maxCarasoul = carasoulElement.length - 1;
const nextCarasoul = document.querySelector(".btn-forward");

nextCarasoul.addEventListener("click", function(){
    if (curCarasoul === maxCarasoul){
        curCarasoul = 0;
    }else{
        curCarasoul++;
    }

    carasoulElement.forEach((carasoul, indx) => {
      carasoul.style.transform = `translateX(${100 * (indx - curCarasoul)}%)`;
    });   
})

const prevCarasoul = document.querySelector(".btn-previous");

prevCarasoul.addEventListener("click", function () {
  if (curCarasoul === 0) {
    curCarasoul = maxCarasoul;
  } else {
    curCarasoul--
  }

  carasoulElement.forEach((carasoul, indx) => {
    carasoul.style.transform = `translateX(${100 * (indx - curCarasoul)}%)`;
  });

});
