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

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }];


let numFlightsCount = flights.length;

function mainFlightsPro () {
    userInput();
    allFlights(flights);
    meanPrice();
    lastFlights();
    interface();

}

// Great user 
function userInput() {
    let user = prompt("User name: "); // Prompt user name
    alert(`Hello, ${user}.`) // Say Hello
}

// Print object array with flights
function allFlights(flightsArray) { // Takes an array as input
    console.log("Available flights: ") // Print all flights with origin, destination, price and scales
    for (let i = 0; i < flightsArray.length; i++) {
        console.log(`From: ${flightsArray[i].from} To: ${flightsArray[i].to} 
        ${flightsArray[i].cost}€ ${check(i)}. Flight ID: ${flightsArray[i].id}`)
    }
    console.log("\n");


}

// Average price function
function meanPrice() { // Calculate mean price
    let meanPrice = Number.parseInt(flights[0].cost);
    let n = 1; // Counter for the number of flights
    for (let i = 1; i < flights.length; i++) { // Sum up all flights
        meanPrice += Number.parseInt(flights[i].cost);
        n++;
    }
    meanPrice = (meanPrice / n).toFixed(2); // Calculate mean.
    console.log(`Mean price: ${meanPrice}€`)
    console.log("\n");

}


// Las five flights function
function lastFlights() {
    console.log("The last five flights of today go to:")
    for (let i = flights.length - 1; i >= (flights.length - 5); i--) { // Itinerate trough the las 5 flights.
        console.log(flights[i].to);
    }
}

// Check if the flight has scales function
function check(i) { // Check type of flight.
    if (flights[i].scale) { // If scale ===, return flight as Direct
        return "Direct"

    } else {
        return "Scale"; // Return flight as Scale.
    }
}

// Interface wich distinguishes between ADMIN and USER
function interface() {
    let userType = prompt("Type of user: ").toLocaleUpperCase(); // Prompt user type, make case insensitive
    if (userType === "ADMIN") { // If admin, run administration options
        adminInterface()
    } else if (userType === "USER") { // If user, run user options
        userInterface()
    } else {
        alert("Wrogn user type, specify ADMIN/USER")
        interface(); // IF no valid user type is introduced, rerun
    }

}

// Add and delete options for ADMIN  func
function adminInterface() {
    if (window.confirm("Do you want to add a new flight to the databse?")) {
        newFlight()
    }
    if (window.confirm("Do tou want to delete any flight?")) {
        deleteFlight();
    } else {
        return;
    }


}

function newFlight() {
    addFlight(askDataFlight())
    if (window.confirm("Do you want to add another flight?")) {
        newFlight();
    } else {
        return;
    }

}

function askDataFlight () {
    let flight = 
    {origin: window.prompt("From: "), 
    destination: window.prompt("To: "), 
    price: window.prompt("Price: "),
    haveScale: window.confirm("Does the flight have scales?")};
    return flight;
}


function addFlight(flight) {
    if (numFlightsCount >= numFlightsCount + 15) {
        alert("To many flights")
        return false;
    } else {
        flights.push(flight);
        numFlightsCount++;
        return true;
    }
}


function deleteFlight() {
    let idDelete = parseInt(window.prompt("ID of uf the flight to be deleted: "));
    flights = flights.filter(function (temp) { return temp.id != idDelete; });
    numFlightsCount--;
    if (window.confirm("Do you wanna delet another flight?")) {
        deleteFlight();
    } else {
        return;
    }
}


function userInterface() {
    let maximun = window.prompt("Maximun price: ");
    let minimun = window.prompt("Minimum price: ");
    let flightsMach = flights.filter(function (temp) { return temp.cost < maximun })
    flightsMach = flightsMach.filter(function (temp) { return temp.cost >= minimun })
    allFlights(flightsMach);
    let buyFlight = window.prompt("Select flight ID you want to buy: ")
    window.alert("Gracias por su compra, vuelva pronto.")

}




