// Pre-curso skylab.
// Calculadora.
// Alvaro Amorós
// 11/06/21

// Global object to store numbers
let numbers = {
    "input": [],
    "output": {
        "SquareRoot": null,
        "Addition": null,
        "Subtraction": null,
        "Division": null,
        "Multiplication": null,
    }
};

function calculatorPro (){
    input();
    calculations();
    print();
    clean();
    repeat()

}
// Function prompt user for numbers
function input() {
    let confirm;
    let temp = window.prompt("Number: ")
    while (check(temp)) { // Loop reprompt user until he enters numbers 
        alert("Introduce a valid number")
        temp = window.prompt("Number: ") 
    }
    numbers.input.push(parseFloat(temp)); // Push into input array
    temp = null; // clear temp var
    confirm = window.confirm("Do you want to introduce another number?");
    if (confirm === false)
    {
        return;
    }
    else { // Loop asks user until he dosent want to enter more numbers
        input ();
    } 
}


// Function to choose which calculations to do 
function calculations () {
    if(numbers.input.length < 2){ // If only one number was provided, call function squareRoot() 
        squareRoot();
    } else {
        arithmetic(); // If more numbers where provided, call arithmetic()
    }
}



function print () {
    for (key in numbers.output){ // Itinerate through the keys
        if (numbers.output[key] !== null){ // Print only if not null.
            console.log(`${key}  =  ${numbers.output[key].toFixed(2)}`);
        }
    }
}

// Clean the object with the results
function clean () {
    for (key in numbers.output){
        numbers.output[key] = null;
    }
    numbers.input = [];
}

// Function ask user if he wants to do more calculations
function repeat (){
    let x;
    x = window.confirm("Do you want to do further calculations?")
    if (x === true){
        calculatorPro()
    } 
    
}

// Function SquareRoot 
function squareRoot(){
    numbers.output["SquareRoot"] = Math.sqrt(numbers.input);
}

// Function for arithmetic calculations
function arithmetic(){
    let sum = numbers.input[0]; // Take first number of the array
    for (let i = 1; i < numbers.input.length; i ++){ // Add the subsequent numbers
        sum += numbers.input[i];
    }
    let sub = numbers.input[0];
    for(let i = 1; i < numbers.input.length; i++){
        sub -= numbers.input[i];
    }
    let div = numbers.input[0];
    for(let i = 1; i < numbers.input.length; i++){
        div /= numbers.input[i];
    }
    let mult = numbers.input[0];
    for(let i = 1; i < numbers.input.length; i++){
        mult *= numbers.input[i];
    }
    numbers.output["Addition"] = sum; // Push into object
    numbers.output["Subtraction"] = sub;
    numbers.output["Division"] = div;
    numbers.output["Multiplication"] = mult;
}

// Ckeck valid input by user
function check (temp) {
    if (isNaN(temp) || temp === "" || temp === NaN || temp === null){ // Check that x is a number
        return true;  
    } else {
        return false;
    }
}




