

const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", function () {
   var tagcolors  = "#"
   for ( var i=0; i<6 ; i++) {
        tagcolors = tagcolors + colors[getRandomNumber()]
        color.textContent = tagcolors;
        document.body.style.backgroundColor = tagcolors;
   }
})
function getRandomNumber() {
     return Math.floor(Math.random() * colors.length);
   }
   