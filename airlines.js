// Pre-curso skylab.
// Airlines.
// Alvaro Amorós
// 11/06/21
let flights = [

    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },

    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },

    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },

    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },

    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },

    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },

    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },

    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },

    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },

    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } ];


    function mainFlights () {
        userInput();
        allFlights();
        meanPrice();
        lastFlights();
    }


    function userInput () {
        let user = prompt("User name: "); // Prompt user name
        alert(`Hello, ${user}.`) // Say Hello
    }

    function allFlights () {
        console.log("Available flights: ") // Print all flights with origin, destination, price and scales
        for (let i = 0; i < flights.length; i++){ 
            console.log(`From: ${flights[i].from} To: ${flights[i].to} ${flights[i].cost}€ ${check(i)}`)
        }
        console.log("\n");


    }

    function meanPrice () { // Calculate mean price
        let meanPrice = Number.parseInt(flights[0].cost);
        let n = 1; // Counter for the number of flights
        for (let i = 1; i < flights.length; i++){ // Sum up all flights
            meanPrice += Number.parseInt(flights[i].cost);
            n++;
        } 
        meanPrice = (meanPrice / n).toFixed(2); // Calculate mean.
        console.log(`Mean price: ${meanPrice}€`)
        console.log("\n");

    }
    
  

    function lastFlights () {
        console.log("The last five flights of today go to:")
        for (let i = flights.length -1; i >= (flights.length -5); i--){ // Itinerate trough the las 5 flights.
            console.log(flights[i].to);
        }
    }

    function check (i) { // Check type of flight.
        if (flights[i].scale){ // If scale ===, return flight as Direct
            return "Direct"

        } else {
            return "Scale"; // Return flight as Scale.
        } 
    }