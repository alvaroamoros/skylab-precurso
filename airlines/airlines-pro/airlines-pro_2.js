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

// Global variable. User type.

// Function. MAIN.
mainFlightsPro = flightsArray => {
    greateUser();
    allFlights(flightsArray);
    meanPrice(flightsArray);
    lastFlights(flightsArray);
    interfaceOptions(flightsArray);
  }
  
  // Function. Greate user
  greateUser = () => alert(`Hello, ${prompt("User name: ")}.`);
  
  // Function. Print all available flights
  allFlights = flightsArray => console.log(flightsArray);
  
  // Function. Mean price of flights
  meanPrice = flightsArray => {
    let totalSum = 0;
    for (let i = 0; i < flightsArray.length; i++) {
      totalSum += flightsArray[i].cost;
    }
    console.log(`Mean price: ${(totalSum / flightsArray.length).toFixed(2)}€`);
  }
  
  // Function. Last five flights
  lastFlights = flightsArray => {
    console.log("The last five flights of today go to:");
    for (let i = flightsArray.length - 1; i >= (flightsArray.length - 5); i--) {
      console.log(flightsArray[i].to);
    }
  }
  
  // Function. User type rompt
  userType = () => {
    let user = window.prompt("Type of user: ").toLocaleUpperCase();
    if (user !== "ADMIN" && user !== "USER" && user !== null) {
      userType();
    } else {
      return user;
    }
  }
  
  // Function. Stablishes path for user or admin
  interfaceOptions = flightsArray => {
    if (userType() === "ADMIN") {
      adminInterface(flightsArray);
    } else {
      userInterface(flightsArray);
    }
  }
  
  // Function. Admin inteface options
  actionType = () => {
    let action = window.prompt("DELETE or ADD flight: ").toLocaleUpperCase();
    if (action !== "ADD" && action !== "DELETE") {
      actionType();
    } else if (action === null) {
      return false;
    } else {
      return action;
    }
  }
  // Function. Stablish path to add, delete or finish
  adminInterface = flightsArray => {
    if (actionType() === "ADD") {
      newFlight(flightsArray)
    } else {
      deleteFlight(flightsArray)
    }
  
  }
  
  // Function. Ads new flight. Three nested functions -> Ask for data -> Push data -> Ask for other operations
  newFlight = (flightsArray) => adminInterface(pushFlight(flightsArray));
  
  // Function. Asks for data of new flight
  askData = (flightsArray) => {
    let flight = {
      id: flightsArray.length,
      to: window.prompt("To: "),
      from: window.prompt("From: "),
      cost: window.prompt("Price: "),
      scale: window.confirm("Scales: ")
    };
    return flight;
  }
  
  // Function. Checks if there is sapce and pushes the flight into the array
  pushFlight = flightsArray => {
    if (flightsArray.length > 26) {
      alert("No space");
      return false;
    } else {
      flightsArray.push(askData(flightsArray));
    }
    return flightsArray;
  }
  
  // Function. Delete flight. Two nested functions => ask which flight to delete and Delete -> Ask for other operations
  deleteFlight = (flightsArray) => adminInterface(askRemove(flightsArray))
  
  // Function. Overrrides original flights array with a new array that filteres out the selected ID
  askRemove = (flightsArray) => {
    allFlights(flightsArray);
    let idDelete = parseInt(window.prompt("Delete ID:"));
    if (idDelete in flightsArray) {
      flights = flightsArray.filter(function (filterFunction) { return filterFunction.id != idDelete; })
      return flightsArray;
    } else {
      alert("Flight not found")
      return flightsArray;
      }
}

  // Function. User options
  userInterface = (flightsArray) => {
    let maxPrice = window.prompt("Max price: ");
    let minPrice = window.prompt("Min price: ");
    let flightsMach = flightsArray.filter(function(maxLimit) {
      return maxLimit.cost < maxPrice; 
    });
    flightsMach = flightsMach.filter(function(minLimit) {
      return minLimit.cost >= minPrice;
    });
    return buyFlight(flightsMach);
  }
  
  // Function. Print and buy flight
  buyFlight = flightsMach => { debugger;
    allFlights(flightsMach);
    let idBuy = parseInt(window.prompt("ID of flight you wanna buy: "));
    if (idBuy in flightsMach) { // PROBLEM HERE
      window.alert("Thanks for buying");
    } else {
      window.alert("Incorrect flight ID");
      buyFlight();
    }
  }
  
  mainFlightsPro(flights);