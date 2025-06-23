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
    number = convertToInt;
    
    if (isNaN(number)) {
      number = 16;
    } 
    
    return number;
    
  })
}
getUserValue();


//function to make grid
function makeGrid(){
  
}