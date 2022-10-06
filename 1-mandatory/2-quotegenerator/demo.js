// create a quote generator ?   
const positiveAff = [
{ id: 1, quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, dolores!" },
{ id: 2, quote: "consectetur adipisicing elit. Velit, dolores!" },
{ id: 3, quote: "amet consectetur adipisicing elit. Velit, dolores!" }]

const button = document.getElementById('button')

button.addEventListener("click", function () {
  newQuote()
})
function newQuote() {
  var randomNumber = Math.floor(Math.random() * (positiveAff.length));
  document.getElementById("affirmations").innerHTML = positiveAff[randomNumber].quote;
}



