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

function mainFlightsPro() {
    greateUser();
    allFlights(flights);
    meanPrice(flights);
    lastFlights(flights);
    interface();
}

// Greate user function
greateUser2 = () => alert(`Hello, ${prompt("User name: ")}.`);

//
allFlights = flightsArray => {
    for (let i = 0; i < flightsArray.length; i++) {
        console.log(flights[i])
    }
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
function meanPrice(flightsArray) { // Calculate mean price
    let meanPrice = { totalSum: 0, n: 0 }
    for (let i = 0; i < flightsArray.length; i++) { // Sum up all flights
        meanPrice.totalSum += Number.parseInt(flightsArray[i].cost);
        meanPrice.n++;
    }
    console.log(`Mean price: ${(meanPrice.totalSum / meanPrice.n).toFixed(2)}€`)
    console.log("\n");
}

// Las five flights function
function lastFlights(flightsArray) {
    console.log("The last five flights of today go to:")
    for (let i = flightsArray.length - 1; i >= (flightsArray.length - 5); i--) { // Itinerate trough the las 5 flights.
        console.log(flightsArray[i].to);
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

// Add and delete options for ADMIN  function
function adminInterface() {
    askAction(newFlight, "add");
    askAction(deleteFlight, "delete");
    return;
}

// New flight function
function newFlight() {
    addFlight(askDataFlight()) // Function asking for info of new flight, nested in function that pushes the new data flights array
    repeateAction(newFlight, "add");
}

// Asking about data of the new flight Fuction
function askDataFlight() {
    let flight = {
        origin: window.prompt("From: "), destination: window.prompt("To: "),
        price: window.prompt("Price: "), haveScale: window.confirm("Does the flight have scales?")
    };
    return flight;
}

// Chechs if there is space for the new flight and pushes it in the array function
function addFlight(flight) {
    if (flights.length >= 24) { // Check not exceding the max numbers of flights
        alert("To many flights")
        return false; // IF to many flights return false
    } else {
        flights.push(flight); // Oush the flight into the arrray
        return true; // Return true if flight was succsefully added
    }
}

// Delete flights function
function deleteFlight() {
    let idDelete = parseInt(window.prompt("ID of uf the flight to be deleted: ")); // ASks for the ID of the flight that sould be deleted
    flights = flights.filter(function (temp) { return temp.id != idDelete; }); // Overrride the flghts array with a new array that filters out the flight defined above
    repeateAction(deleteFlight, "delete")
}

function userInterface() {
    let limits = { maximum: window.prompt("Maximun price: "), minimun: window.prompt("Minimum price: ") };
    let flightsMach = flights.filter(function (temp) { return temp.cost < limits.maximun })
    flightsMach = flightsMach.filter(function (temp) { return temp.cost >= limits.minimun })
    allFlights(flightsMach);
    let buyFlight = window.prompt("Select flight ID you want to buy: ")
    window.alert("Gracias por su compra, vuelva pronto.")
}

function askAction(action, name) {
    if (window.confirm(`Do you want to ${name} any flight`)) {
        action();
    } else {
        return;
    }
}

function repeateAction(repeatedAction, repeatedName) {
    if (window.confirm(`Do you want to ${repeatedName} another flight`)) {
        return repeatedAction();
    } else {
        return false;
    }
}
