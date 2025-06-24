//input variable
const userInput = document.querySelector("#userInput");

//grid div variable
const grid = document.querySelector(".grid");

//button variable
const button = document.querySelector(".btn-1");

//convert from str to int
let convertToInt;

//number variable
let number = 0;

//function get userValue
function getUserValue() {
  button.addEventListener("click", function(e) {

    e.preventDefault();
    convertToInt = parseInt(userInput.value);
    number = isNaN(convertToInt) ? 16 : convertToInt;
     
    clearGrid();
    makeGrid(number);
    // return number;
    console.log(number);
  });
 
}
getUserValue();
//function to make grid
function makeGrid(number) {
  for(let i = 0; i < number; i++) {
    let rows = document.createElement("tr");
     rows.classList.add("rows");
    for (j = 0; j < number; j++) {
      let cols = document.createElement("td");
      cols.classList.add("cols");
      rows.appendChild(cols);
    }
   
    grid.appendChild(rows);
  }

}

//clear grid
function clearGrid() {
  grid.textContent = "";
}
clearGrid();