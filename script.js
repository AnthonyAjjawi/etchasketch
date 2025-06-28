//input variable
const userInput = document.querySelector("#userInput");

//grid div variable
const grid = document.querySelector(".grid");

//button variable
const button = document.querySelector(".btn-1");

//reset button variable
const reset = document.querySelector(".reset");

//convert from str to int
let convertToInt;

//number variable
let number = 0;

//function to convert user value
function getUserValue() {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    convertToInt = parseInt(userInput.value);
    number = isNaN(convertToInt) ? 16 : convertToInt;

   
    makeGrid(number);
    // return number;
    console.log(number);
  });
}
getUserValue();
//function to make grid
function makeGrid(number) {
  for (let i = 0; i < number; i++) {
    let rows = document.createElement("tr");
    rows.classList.add("rows");

    for (j = 0; j < number; j++) {
      let cols = document.createElement("td");

      cols.classList.add("cols");
     
      cols.addEventListener("mouseover", function () {
        cols.style.backgroundColor = randomColor();
        
      });

      rows.appendChild(cols);
    }

    grid.appendChild(rows);
  }
}

//function for random colors
function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r} ${g} ${b})`;
}

//clear grid
function clearGrid() {
  reset.addEventListener("click", function () {
    const allCells = document.querySelectorAll(".cols");

    allCells.forEach((cell) => {
      cell.style.backgroundColor = "";
    });
  });
}
clearGrid();