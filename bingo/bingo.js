// Álvaro Amorós Rodríguez
// Skylab-precurso
// Bingo Final version
// 01/09/2021

// Global vars

let carton = [
    {numbers: [], finished: false},
    {numbers: [], finished: false},
    {numbers: [], finished: false}];

let points = [
    {user: "" , points: 0},
    {user: "Anthony", points: 50},
    {user: "Carmela", points: 56},
    {user: "Christopher", points: 30}
];

let numbersPulled = [];

let userPoints = 100;


mainBingo = () => {
    greateUser ();
    pointSystem ();
    generateCarton(generateNumbers ());
    repeat ();
}

// Greate user
greateUser = () => {
    let user = prompt("User name: ");
    if (user === null || user === "") {
        user = "Guest";
        points[0].user = "Guest"
        alert(`Hello, ${user}`);
    } else {
        points[0].user = user;
        alert(`Hello, ${user}`);
    }
}

// Explain point system
pointSystem = () => {
    alert('Each user starts with 100 points. Maximun possible puntuation is 85 and minimun 1.')
}

// Function to generate random number
generateRandom = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}

// Function generate numbers
generateNumbers = () => {
    let cartonNumbers = []; // Var to save all numbers
    for (let i = 0; i < 15; i++) { // Generate 15 random numbers
        let singleNumber = generateRandom (1, 100);
        if (cartonNumbers.includes(singleNumber)) { // Check if numb is already in carton
            i--; // If so add one itineration and continue
        } else {
            cartonNumbers.push(singleNumber) // Else add the number to the array
        }
    }
    return cartonNumbers;
}

// Add nummbers to carton object
generateCarton = (cartonNumbers) => {
    for (let i = 0; i < 5; i ++) {
        carton[0].numbers.push(cartonNumbers[i]);
        carton[1].numbers.push(cartonNumbers[i + 5]);
        carton[2].numbers.push(cartonNumbers[i + 10]);
    }
    printCarton (carton)
    return newCarton ();
}

// Print carton
printCarton = (carton) => {
    console.log('Carton:')
    for (let i = 0; i < 3; i++){
            console.log(carton[i].numbers);
    }
}

// Restart carton and generate new one
newCarton = () => { 
    if (window.confirm("Do you want a different carton?")){
        for (let i = 0; i < 3; i++){ // Restar numbers
            carton[i].numbers = [];
        }
        return generateCarton(generateNumbers ()); //Load new numbers
    } else {
        return nextNumber ();
    }
    
}

// Ask user if he want to move to the next turn
nextNumber= () => {
    let next = window.confirm('Do you wanna pull another number?')
    if (next) {
        userPoints --;
        addNumber();
    } else {
        return;
    }
}
      
// Generate new number, visualize, check if it is in carton and substitute for x
addNumber = () => { 
    let newNumber = generateRandom (1, 100); // Gen new number
    if (numbersPulled.includes(newNumber)) { // Check that each number is pulled only ones
        return addNumber();
    } else {
        numbersPulled.push(newNumber);
        return checkCarton (carton, newNumber)

    }
}

// Check if number is in carton and if so substitute for X
checkCarton = (carton, newNumber) => { 
    alert(`Number: ${newNumber}`);
    for (let i = 0; i < 5; i ++) {
      if (carton[0].numbers[i] === newNumber) {
        carton[0].numbers[i] = "X";
        alert(`Number ${newNumber} found!`)
        printCarton(carton);
      } else if (carton[1].numbers[i] === newNumber) {
        carton[1].numbers[i] = "X";
        alert(`Number ${newNumber} found!`)
        printCarton(carton);
      } else if (carton[2].numbers[i] === newNumber) {
        carton[2].numbers[i] = "X";
        alert(`Number ${newNumber} found!`)
        printCarton(carton);
      }
    } 
    return possiblePaths(carton);
}

// Check for line and bingo
possiblePaths = (carton) => {
    checkLine(carton);
    if (carton[0].numbers.every(isNaN) && carton[1].numbers.every(isNaN) && carton[2].numbers.every(isNaN)) {
        points[0].points = userPoints;
        console.table(points);
        return alert(`BINGO!, You finished with ${userPoints}, points!`);
    } else {
        return nextNumber ();
    }

}

// Check for line 
checkLine = (carton) => { 
    for (let i = 0; i < 3; i++) { 
        if (carton[i].numbers.every(isNaN) && carton[i].finished === false) { 
            alert('LINEA!')
            carton[i].finished = true;
            return true;
        } 
    }
    return false;
}

// Check bingo 
checkBingo = (carton) => {
    if (carton[0].numbers.every(isNaN) && carton[1].numbers.every(isNaN) && carton[2].numbers.every(isNaN)) {
        return true;
    } else {
        return false;
    }
}

// Repeat game.
repeat = () => {
    let playAgain = window.confirm("Do you want to play again?");
    if (playAgain) {
        mainBingo ();
    } else {
        return;
    }

}


mainBingo ();