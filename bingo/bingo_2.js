// Álvaro Amorós Rodríguez
// Skylab-precurso
// Bingo
// 01/09/2021


// main function

mainBingo = () => {
    generateCarton(generateNumbers());
    printCarton(carton);
    nextNumber ();
  }
  
  // Global vriables
  
  // Carton. Object with 3 arrays, one for each line

  let carton = [
    {linea: 0, numbers: [], finished: true},
    {linea: 0, numbers: [], finished: true},
    {linea: 0, numbers: [], finished: true}
  ]
  
  // Greate user
  greateUser = () => {
    let user = prompt("User name: ");
    if (user === null || user === "") {
      user = "Guest";
      alert(`Hello, ${user}`);
    } else {
      alert(`Hello, ${user}`);
    }
  }
  
  // Function to generate random number
  generateRandom = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  }
  
  
  // Function generate numbers
  generateNumbers = () => {
    let cartonNumbers = []; // Var to save all numbers
    for (let i = 0; i < 15; i++) { // Generate 15 random numbers
        let singleNumber = generateRandom (1, 99);
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
  }

  
  
  // Print carton
  printCarton = (carton) => {
    console.table(carton.numbers);
  }
  
  // ask user if he want to move to the next turn
  nextNumber= () => {
    let next = window.confirm('Do you wanna pull another number?')
    if (next) {
      newNumber();
    } else {
      return;
    }
  }
  
  // Generate new number, visualize, check if it is in carton and substitute for x
  newNumber = () => { 
    let newNumber = generateRandom (1, 99); // Gen new number
    alert(`Number: ${newNumber}`);
    for (let i = 0; i < 5; i ++) {
      if (carton[0].numbers[i] === newNumber) {
        carton[0].numbers[i] = "X";
      } else if (carton[1].numbers[i] === newNumber) {
        carton[1].numbers[i] = "X";
      } else if (carton[2].numbers[i] === newNumber) {
        carton[2].numbers[i] = "X";
      }
    } debugger;
    if (checkLine(carton)) {
        window.alert(`Línea! - ${carton[i].linea}`);
        return newNumber ();
    } else if (checkBingo(carton)) {
        return alert('Bingo!, You won');
    } else {
        return nextNumber () ;
    }
  }
  
  // Check for line 
  checkLine = (carton) => {
    for (let i = 0; i < 3; i++) {
        if (carton[i].numbers.some(isNaN)) {
            carton[i].finished = true;
            return true;
        } else {
            return false;
        }
    }
   
  }

  // Check bingo 
  checkBingo = (carton) => {
      if (carton[0].finished || carton[1].finished || carton[2].finished) {
          return true;
      } else {
          return false;
      }
  }
 
  
  mainBingo();